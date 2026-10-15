# IAM

## Conceito e finalidade

IAM, sigla de Identity and Access Management, ou gestão de identidades e acessos, é o conjunto de processos e controles usado para conceder, revisar e revogar acesso a recursos. A definição abrange tanto a pergunta “quem ou o que está solicitando?” quanto “a que recurso pode chegar, em quais condições e para realizar quais ações?”. Em ambientes digitais, a identidade pode representar uma pessoa, um serviço, uma aplicação, um dispositivo ou outra entidade reconhecida por um sistema. O acesso é a capacidade autorizada de interagir com algo: uma caixa postal, um repositório, uma máquina virtual, um banco de dados, uma função administrativa ou uma interface de programação.

A finalidade defensiva é manter uma relação compreensível entre identidades, recursos e permissões. Uma organização precisa viabilizar o trabalho autorizado sem deixar acessos esquecidos, excessivos ou impossíveis de atribuir. O princípio do menor privilégio é uma orientação recorrente: cada identidade deve receber apenas as permissões necessárias para sua função e contexto. Isso não significa que toda tarefa possa ser reduzida a uma permissão mínima simples; responsabilidades, continuidade operacional e dependências técnicas podem exigir combinações. A decisão deve ser explícita, justificável e sujeita a revisão.

## Elementos que compõem a gestão

O ciclo começa com o registro de uma identidade e sua associação a uma pessoa, equipe, função ou finalidade técnica. A identidade precisa ter um responsável e um estado de vida claro: ativa, suspensa, em transição ou encerrada, por exemplo. Contas duplicadas, sem proprietário ou com finalidade desconhecida enfraquecem a atribuição. Também importa distinguir a identidade lógica da credencial usada para comprová-la. Um nome de usuário, certificado, senha, chave ou token pode participar da autenticação; nenhum desses itens, isoladamente, descreve todo o conjunto de permissões associado.

A concessão de acesso transforma uma necessidade aprovada em permissões aplicadas nos sistemas. Uma solicitação útil identifica o recurso, as ações necessárias, o motivo, a duração esperada e quem aprovou. A autorização pode decorrer de uma função, de atributos ou de uma decisão específica. Modelos baseados em função agrupam permissões para atividades recorrentes; modelos baseados em atributos podem considerar propriedades da identidade, do recurso ou da situação. Na prática, organizações costumam combinar abordagens e também encontram permissões atribuídas diretamente, fora do modelo planejado.

O acesso deve ser revisto ao longo do tempo. Uma mudança de equipe, função, contrato, projeto ou responsabilidade pode tornar permissões anteriores desnecessárias. Revisar significa comparar o que está concedido com a necessidade atual, confirmar a propriedade das contas e decidir se o acesso continua, deve ser ajustado ou precisa ser removido. A revisão é fraca quando se limita a confirmar listas sem contexto, quando aprovadores não conhecem os recursos ou quando as permissões reais não são apresentadas de modo inteligível.

## Identidades humanas e não humanas

Identidades não humanas incluem contas de serviço, identidades de aplicações, agentes, tarefas automatizadas, dispositivos e outros componentes que acessam recursos sem uma pessoa interativa no momento da operação. Elas não devem ser tratadas como um detalhe de infraestrutura: podem ler dados, alterar configurações, iniciar processos ou servir de ponte entre sistemas. Para cada uma, é importante saber qual sistema a utiliza, quem responde por ela, quais recursos alcança, como suas credenciais são protegidas e como a atividade pode ser interrompida ou substituída.

## Como o IAM funciona na prática

O acesso pode ser concedido diretamente ou por herança. Uma pessoa pode pertencer a grupos, e esses grupos receberem permissões; uma aplicação pode herdar direitos de uma função atribuída em uma plataforma; uma política pode permitir acesso quando várias condições são verdadeiras. A herança facilita administrar padrões comuns, mas torna a análise menos óbvia. Para entender o alcance efetivo, deve-se percorrer a cadeia de associação e considerar negações, exceções, escopos e precedência entre regras. Ver apenas a permissão direta pode subestimar o acesso; ver apenas o nome de um grupo pode exagerá-lo.

## Onde aparece na defesa e na investigação

IAM é útil no desenho preventivo de controles, na administração cotidiana e na resposta a incidentes. Antes de um incidente, ajuda a reduzir permissões desnecessárias, identificar contas sem responsável, definir aprovações e tornar acessos temporários visíveis. Durante uma investigação, permite formular perguntas concretas: qual identidade acessou o recurso, como foi autenticada, que autorização possuía naquele momento, quem a concedeu e quais ações ficaram registradas? Depois, apoia a contenção, a remoção de acessos persistentes e a validação de que mudanças emergenciais não se tornaram permissões permanentes.

A investigação pode encontrar evidências em registros de autenticação, auditoria de diretórios, alterações de grupo, fluxos de aprovação, configuração de políticas, inventários de contas, registros de emissão e uso de credenciais e logs dos recursos de destino. Cada fonte responde a perguntas diferentes. Um registro de autenticação pode indicar que uma sessão foi aceita, mas não necessariamente que uma ação específica ocorreu. Um evento de alteração de grupo pode mostrar a mudança, sem explicar quem a aprovou fora do sistema. Um log de aplicação pode identificar uma conta, mas não estabelecer qual pessoa estava por trás dela.

Entre as evidências que ajudam a reconhecer problemas de IAM estão concessões fora do fluxo esperado, alterações em grupos privilegiados, contas sem responsável, permissões amplas sem justificativa atual, identidades ativas após o fim de sua necessidade e discrepâncias entre inventário e configuração observada. Também são relevantes credenciais usadas por sistemas que já não deveriam depender delas, contas de serviço com atividade incompatível com sua finalidade e acessos originados de identidades cuja autenticação ou autorização mudou perto do evento investigado. São sinais para validar, não conclusões automáticas de comprometimento.

## IAM durante a resposta a incidentes

A resposta deve começar por compreender o alcance, a função e a atividade observada da identidade, sem assumir que a conta comprometida é a única via de acesso. Identifique contas humanas e não humanas relacionadas, grupos e papéis herdados, credenciais emitidas, sessões ativas, recursos alcançáveis e dependências operacionais. Durante incidentes, inclua tokens, chaves e contas de serviço no inventário de identidades afetadas. Esse inventário evita que a equipe concentre a contenção em senhas de usuários enquanto uma credencial de aplicação ou uma chave ainda permite acesso.

A contenção pode incluir desabilitar uma conta, revogar sessões e credenciais, remover associações privilegiadas, bloquear um caminho de autenticação ou restringir temporariamente um recurso. A medida adequada depende do tipo de credencial, do alcance observado, do risco de continuidade e do impacto operacional. Desabilitar a identidade principal pode não invalidar tokens já emitidos nem remover credenciais armazenadas em integrações. Por isso, a equipe deve verificar o comportamento do sistema que aceita cada credencial e confirmar a eficácia da ação nos recursos relevantes.

Em exercícios hipotéticos, imagine que uma aplicação de relatórios acessa um armazenamento de documentos por meio de uma conta de serviço. Um alerta aponta leitura inesperada de arquivos. A equipe deve identificar a conta e seu proprietário, confirmar se a aplicação ainda necessita daquele escopo, correlacionar os registros do armazenamento com a emissão e uso da credencial e avaliar sessões ou chaves relacionadas. Se a credencial for revogada, a aplicação pode parar de funcionar; a substituição controlada e o teste do acesso necessário ajudam a conter sem reintroduzir privilégios excessivos. Esse cenário ilustra perguntas de investigação, não um procedimento de exploração.

## Distinções e limites de interpretação

IAM é relacionado a gestão de contas, autenticação, autorização, governança de acesso e administração privilegiada, mas esses termos não são intercambiáveis. Gestão de contas pode descrever o ciclo de criação e encerramento sem cobrir a política de autorização. Autenticação verifica uma identidade; autorização decide suas capacidades. Governança de acesso enfatiza responsabilidades, revisão, aprovação e evidência de conformidade. Gestão de acesso privilegiado concentra controles em permissões administrativas elevadas. Uma organização pode integrar essas práticas sob IAM, mas ainda precisa saber qual parte está sendo discutida.

## Perguntas frequentes

### Se uma identidade foi autenticada, isso prova que seu titular realizou a ação?

Não. Indica que algum mecanismo aceitou uma credencial ou sessão associada à identidade. A credencial pode ter sido compartilhada, roubada, delegada a um serviço ou usada por uma automação. Para atribuir a ação, correlacione a autenticação com a sessão, o dispositivo, os registros do recurso e a cadeia de custódia das credenciais, reconhecendo o que os registros não permitem concluir.

### Remover uma conta encerra todo o acesso?

Não necessariamente. Permissões locais, grupos, sessões, tokens, chaves e cópias de credenciais podem ter ciclos de vida próprios. O encerramento deve abranger os mecanismos que aceitam a identidade e seus meios de acesso, com verificação em cada recurso relevante.

### Como avaliar uma conta de serviço sem proprietário conhecido?

Descubra quais sistemas a usam, que recursos acessa, quando e para que é utilizada, quais credenciais estão associadas e quem pode validar sua finalidade. Preserve os registros, identifique dependências e atribua um responsável antes de decidir pela rotação, restrição ou desativação. A falta de proprietário é uma lacuna de governança que merece correção, mas desativar sem avaliar dependências pode causar interrupção.

### Uma permissão ampla prova que houve abuso?

Não. Ela indica capacidade potencial, não uso efetivo nem intenção. Para avaliar abuso, compare a autorização com os eventos registrados, o contexto da identidade, o período e as mudanças recentes. Ainda assim, permissões desnecessariamente amplas elevam o impacto possível e justificam revisão mesmo quando não há evidência de exploração.

### O que registrar numa revisão de acesso?

Registre a identidade, o recurso, a permissão efetiva, a finalidade, o responsável, a decisão, a data e as mudanças executadas. Quando aplicável, anote duração, exceções e evidência consultada. Uma revisão útil deixa claro por que o acesso permanece e quando deverá ser reavaliado; apenas marcar “aprovado” numa lista não preserva esse raciocínio.

## Relação com o capítulo

No capítulo 8 da versão original, IAM pode ser lido como a estrutura que liga identidades, permissões e recursos ao longo do ciclo de acesso. Seu valor defensivo aparece na prevenção de privilégios desnecessários, na investigação de atividades atribuídas a pessoas ou serviços e na contenção de credenciais comprometidas. A aplicação do conceito depende de inventário confiável, regras compreensíveis, registros preservados e revisão contínua: sem esses elementos, a organização pode conhecer a identidade nominal e ainda não saber quem ou o que manteve acesso efetivo.
