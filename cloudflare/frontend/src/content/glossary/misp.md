# MISP

## Definição

MISP, sigla associada a Malware Information Sharing Platform, é uma plataforma de organização e compartilhamento de indicadores e contexto de ameaças. Ela permite registrar observações, relacionar elementos de uma atividade e distribuir informação a participantes autorizados, preservando fonte, tempo, confiança e condições de uso. Seu valor defensivo está em estruturar a troca: um indicador contextualizado orienta investigações; sem explicação, pode produzir ruído ou ação inadequada.

O termo pode se referir ao software, a uma instância ou à comunidade que compartilha informação por meio dele. Instalar a plataforma não estabelece confiança entre participantes, e dados recebidos não são necessariamente validados ou aplicáveis ao ambiente local.

Indicador é um dado observável que pode ajudar a reconhecer atividade relevante, como domínio, endereço IP, hash de arquivo ou característica de mensagem. Contexto descreve o significado atribuído a essa observação: onde e quando foi vista, a que atividade pode estar ligada, qual fonte a sustenta e quais incertezas permanecem. A plataforma organiza esses elementos; não transforma um indicador em prova conclusiva.

## Finalidade e utilidade

O MISP apoia equipes que precisam converter observações dispersas em informação consultável e compartilhável. Uma equipe pode registrar indicadores de uma investigação, associá-los a um evento, documentar a origem e distribuir uma seleção a parceiros. Quem recebe pode comparar os dados com sua própria telemetria, acrescentar contexto e decidir se deve ampliar uma busca, ajustar uma detecção ou comunicar uma observação relacionada.

Esse fluxo reduz a perda de datas, fontes e justificativas comum em mensagens e planilhas sem estrutura. Facilita pesquisas e revisões, mas não substitui a análise humana nem garante qualidade: pode haver dados duplicados, obsoletos ou equivocados.

O escopo depende da implantação e das regras de governança. Uma instância pode servir a uma equipe interna ou a uma comunidade de organizações. O software não decide quem deve participar, quais dados podem ser divulgados, por quanto tempo devem ser mantidos ou para que finalidade podem ser reutilizados. Essas decisões exigem políticas, acordos e revisão compatíveis com a sensibilidade da informação.

## Organização dos dados

### Eventos, atributos e objetos

O evento agrupa dados considerados relacionados a um caso, observação ou atividade. Pode conter atributos, como domínio, hash ou endereço IP, e objetos que reúnem atributos em estrutura mais rica. Não significa necessariamente incidente confirmado nem campanha completa: pode representar observação preliminar ou contribuição recebida. Título e descrição devem indicar o escopo.

Agrupar dados facilita a leitura e o intercâmbio, mas também pode sugerir relações que ainda não foram demonstradas. Se dois indicadores aparecem no mesmo evento, isso não prova que pertençam à mesma atividade. A associação deve ser sustentada por evidência ou explicitada como hipótese. Coocorrência não demonstra causalidade, coordenação ou controle comum.

### Procedência, tempo e confiança

Uma contribuição útil informa de onde veio cada observação e quando foi feita. A data em que um registro foi inserido não é necessariamente a data em que o indicador foi visto. Essa distinção importa porque domínios, endereços e arquivos podem mudar de função ou deixar de ser relevantes. Descrever a natureza da fonte ajuda o receptor a avaliar a informação sem exigir a exposição de identidades protegidas.

Confiança é avaliação segundo critérios locais, não probabilidade universal de acerto. Rótulos iguais podem significar coisas diferentes entre grupos; diferencie confiança na fonte, observação e interpretação. Antes de automatizar, entenda a convenção e o impacto de erro.

Classificações de distribuição e controles de acesso ajudam a limitar quem vê e reutiliza os dados. Não substituem acordos, obrigações legais ou políticas internas, nem eliminam informação sensível contida no evento. O emissor precisa verificar autorização e minimizar dados pessoais ou detalhes que identifiquem uma vítima; o receptor deve observar as condições e a finalidade informadas.

### Relações e enriquecimento

Relações entre atributos, objetos e eventos podem registrar que elementos foram observados juntos ou que uma análise propõe uma ligação. Isso permite investigar, por exemplo, em quais eventos um valor apareceu e que outros elementos foram associados a ele. A utilidade da consulta depende da qualidade das contribuições e do sentido atribuído às relações.

Enriquecer um registro com classificações ou resultados de análise pode facilitar seu uso, desde que cada informação preserve fonte e data. Cópias de um indicador em feeds diferentes podem derivar de uma única observação; repetição não equivale a confirmação independente.

## Fluxo defensivo

O trabalho parte de uma pergunta: que atividade se quer investigar, detectar ou comunicar? A equipe seleciona observações pertinentes, define o escopo, verifica formatos e remove conteúdo que não deve ser distribuído. Registra fonte, período, confiança, classificação e relações sustentadas. Essa curadoria faz parte da análise, não é mero preenchimento administrativo.

Antes de publicar ou sincronizar, avalia-se se o indicador é específico e atual o bastante para ajudar. Um endereço usado por serviços legítimos pode causar bloqueios indevidos; um domínio pode ser erro de digitação, recurso legítimo ou infraestrutura comprometida. Quando a validação é incompleta, essa condição deve ficar clara para que o receptor trate o dado como pista de busca, em vez de ordem automática de bloqueio.

Ao receber o conteúdo, a organização interpreta procedência e classificação e cruza indicadores com telemetria própria. Uma coincidência pode direcionar buscas em registros de DNS, proxy, correio, endpoint ou autenticação. A ocorrência de um valor não demonstra sozinha comprometimento, execução de código ou impacto.

Se a evidência local sustentar uma hipótese, a equipe documenta o vínculo entre o dado compartilhado e os fatos observados. Pode então ampliar a busca, atualizar uma detecção, conter um ativo ou avisar parceiros, de acordo com risco e procedimentos. Resultados posteriores — confirmação, refutação ou incerteza — podem ser devolvidos à comunidade autorizada, preservando limites de confidencialidade.

## Onde aparece numa investigação

Na preparação, o MISP pode organizar informação pertinente a hipóteses de ameaça e distribuir atualizações a equipes autorizadas. Na triagem, um indicador recebido pode orientar buscas em registros históricos. Durante a análise, eventos e relações ajudam a reunir observações de fontes diferentes e a explicar como uma hipótese foi construída. Na resposta e no pós-incidente, podem apoiar a comunicação de indicadores e lições úteis a outros defensores.

Esses usos não substituem inventário, telemetria, entrevistas, análise de sistemas nem validação de impacto. Uma referência a MISP em relatório ou procedimento indica possível rotina de compartilhamento, mas não prova monitoramento contínuo, integração automática ou resposta a cada correspondência. Para entender a prática, examine quem publica e revisa, como se corrigem dados, que sistemas os consomem e como se registram decisões.

## Evidências de uso e investigação

Artefatos variam conforme implantação e integração. Podem incluir eventos exportados, referências em relatórios, registros de sincronização, tarefas de ingestão, procedimentos ou consultas a atributos e classificações. Não há um arquivo ou campo único presente em todas as instalações.

Ao investigar um alerta, procure evidências independentes no ambiente: horários, processo responsável pela conexão, usuário, sequência de comunicações, resolução de nome e ações subsequentes. Compare esses fatos com o período e o escopo descritos no evento. Registre qual versão ou instante do dado motivou a busca; assim, a decisão pode ser reconstruída mesmo após uma atualização ou retirada do indicador.

## Exemplos hipotéticos

Hipoteticamente, uma equipe recebe de parceiro um evento que associa hash a atividade suspeita em certa semana. A associação está em análise. A equipe verifica origem do arquivo e telemetria local antes de agir. Se o hash corresponder a pacote legítimo instalado antes do período, registra a divergência e pede esclarecimento: o evento orientou a busca, não forneceu um veredito.

## Distinções importantes

### IOC

Um indicador de comprometimento (IOC) é um observável que pode sinalizar comprometimento em determinado contexto. MISP pode armazenar e compartilhar IOCs, mas não é sinônimo deles: organiza informação mais ampla, como contexto, relações, fontes e condições de distribuição. Um valor publicado não se torna IOC confirmado; pode ser pista preliminar ou observação ainda não validada.

### Feed de inteligência

Feed é um fluxo ou conjunto de dados distribuído, muitas vezes consumido por ferramentas. Pode transportar informação associada a uma instância MISP, mas não representa toda a plataforma. Ao converter eventos em lista simples, a integração pode descartar relações, procedência, confiança, datas ou restrições. É necessário saber quais campos sobrevivem e como atualizações e retiradas chegam ao destino.

### SIEM e inteligência de ameaças

Um SIEM centraliza e correlaciona registros; MISP organiza e compartilha informação sobre ameaças. Podem se complementar: o conteúdo orienta buscas, e a telemetria local verifica correspondências. Inteligência de ameaças resulta de avaliar informação para decisões defensivas; armazenar dados não basta.

## Limitações e erros comuns

O risco recorrente é tratar informação compartilhada como verdade autoexplicativa. Um dado pode estar errado, obsoleto, duplicado ou fora de contexto. A plataforma organiza contribuições, mas não verifica cada afirmação nem resolve divergências. Confiança ajuda a priorizar, não encerra a investigação.

Um indicador tampouco é malicioso em qualquer ambiente e época. Endereços podem ser compartilhados por serviços legítimos; arquivos, comuns a muitas instalações; domínios, mudar de controle. A validade depende do período e do comportamento observado. Bloquear sem avaliar impacto pode interromper operações legítimas.

Automatizar cada atributo como bloqueio ou alerta sem considerar confiança, expiração e escopo pode transformar hipótese em interrupção operacional. Integrações devem permitir revisão, atualização e retirada; ações de maior impacto exigem evidência local e reversão possível.

Eventos podem conter nomes, mensagens ou detalhes que revelem uma vítima. Um rótulo de distribuição não remove esse conteúdo: minimize e revise dados, respeitando acordos e finalidade autorizada.

## Implicações para resposta a incidentes

Use os dados para perguntar quais ativos podem ter observado o indicador, em que período e com que consequência. Preserve registros locais e a versão do material que motivou a investigação. Anote como a correspondência foi obtida e por que determinada ação foi escolhida; isso separa evidência local de contexto recebido.

Registre confirmações com escopo preciso: um indicador em um host não demonstra que toda a organização foi afetada. Busca sem correspondência tampouco prova ausência, pois telemetria e janela de análise podem ser incompletas. Refutações devem levar à correção ou retirada e, quando permitido, à comunicação aos receptores. O intercâmbio é um ciclo de atualização.

## Boas práticas

- Registre o que foi observado, a natureza da fonte e quando ocorreu; separe data de observação e de publicação.
- Declare escopo e estado da associação: confirmada, provável, exploratória ou desconhecida, conforme convenções compreendidas pelos destinatários.
- Defina revisão, expiração, correção e retirada; verifique autorização, classificação e minimização antes de distribuir.
- Ao consumir dados, valide procedência e atualidade; use evidência local antes de ações de alto impacto.

## Perguntas frequentes

### MISP confirma que um indicador é malicioso?

Não. Organiza e distribui observações e contexto. A conclusão depende de fonte, validação, tempo e relação com o ambiente investigado.

## Relação com o capítulo 7

Na versão original, o capítulo 7 situa MISP no campo da inteligência. O intercâmbio só oferece valor defensivo quando os dados chegam com contexto, procedência, classificação e limites de uso. A plataforma estrutura a troca; validar e decidir como agir cabe a quem contribui e recebe.
