// Fixed, local adapter. CF_ACCOUNT_API_KEY must be injected from Keychain.
// Never print HTTP responses, environment variables or credentials.
import { writeFile } from 'node:fs/promises';
const account = '1e04c78c6d0084600ddb4589c4e3327c';
const zone = '1952faf3b4caaa5707351eda07004793';
const host = 'confrontocibernetico.com.br';
const reportFile = '/private/tmp/confronto-analytics-status.json';
const report = { host, accountVerified: false, analyticsEnabled: false };
const key = process.env.CF_ACCOUNT_API_KEY;
if (!key) throw new Error('Missing injected credential');
async function request(path, method = 'GET', body) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method, headers: { 'X-Auth-Email': 'cloudflare@decripte.com.br', 'X-Auth-Key': key, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw Object.assign(new Error('Provider rejected request'), { safeStatus: response.status });
  return data.result;
}
try {
  const actual = await request(`/zones/${zone}`);
  if (actual.name !== host || actual.account?.id !== account) throw new Error('Destination mismatch');
  report.accountVerified = true;
  const sites = await request(`/accounts/${account}/rum/site_info/list?per_page=100&page=1`);
  if (!Array.isArray(sites)) throw new Error('Unexpected site list');
  const site = sites.find(item => item.ruleset?.zone_tag === zone || item.host === host || item.ruleset?.zone_name === host);
  if (site) {
    report.siteId = site.site_tag;
    report.autoInstall = Boolean(site.auto_install);
    report.analyticsEnabled = site.enabled !== false;
    // site_token is the public identifier shipped in Cloudflare's browser beacon.
    report.publicBeaconToken = site.site_token;
  }
  report.outcome = site ? 'configured' : 'not_configured';
} catch (error) {
  report.outcome = 'unavailable';
  report.httpStatus = Number.isInteger(error.safeStatus) ? error.safeStatus : null;
  process.exitCode = 1;
}
await writeFile(reportFile, JSON.stringify(report, null, 2), { mode: 0o600 });
