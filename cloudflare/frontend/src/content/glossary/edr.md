# EDR

## Conceito

EDR, sigla de *Endpoint Detection and Response*, designa uma tecnologia de telemetria e resposta instalada ou integrada a endpoints — por exemplo, estações de trabalho e servidores. Ela registra sinais sobre processos, arquivos, conexões e ações que ocorrem nesses dispositivos, relaciona esses sinais a comportamentos potencialmente relevantes e oferece meios para investigar e responder a incidentes. Em português, é comum manter a sigla em inglês, mesmo quando se explica o termo como detecção e resposta em endpoints.

## Como funciona na defesa

Em linhas gerais, um componente no endpoint observa eventos escolhidos pela plataforma e os encaminha para análise local, para um serviço central ou para ambos. A telemetria pode incluir criação e encerramento de processos, relações entre processos, alterações em arquivos, conexões de rede e ações relevantes do sistema. O conjunto varia: produtos diferentes capturam campos, eventos e níveis de detalhe distintos; políticas locais também podem restringir o que é registrado.

As equipes costumam consultar uma linha temporal, os detalhes de um alerta e a árvore de processos. A árvore ajuda a responder perguntas como: qual processo iniciou outro, sob qual identidade, com que argumentos registrados e em qual dispositivo? Outros detalhes podem mostrar caminho de arquivo, hash, usuário, endereço remoto, horário e resultado observado. Nenhum campo deve ser presumido como sempre disponível ou completo. Uma plataforma pode coletar o evento sem conservar todos os seus atributos, ou manter dados por um período limitado.

Dependendo do produto e das permissões configuradas, a resposta pode incluir ações como isolar o endpoint da rede, encerrar um processo, colocar um arquivo em quarentena ou coletar artefatos para análise. Essas ações não são equivalentes: isolamento reduz certos caminhos de comunicação, mas não corrige a causa; encerrar um processo interrompe uma atividade observada, mas não demonstra que outras persistências foram removidas. A resposta precisa estar ligada a uma hipótese, a um escopo e a critérios de verificação.

## Quando é útil

O EDR é útil quando uma investigação precisa sair de um alerta isolado e examinar a atividade do dispositivo. Pode ajudar a determinar se um arquivo foi executado, que processos se relacionaram com ele, quais conexões foram observadas e que alterações ocorreram em seguida. Também pode auxiliar na busca por sinais semelhantes em outros endpoints, quando a organização dispõe de consultas e telemetria compatíveis.

O EDR também tem utilidade em atividades benignas que se parecem com comportamento suspeito. Uma equipe pode confirmar se uma ferramenta de administração foi iniciada por uma rotina aprovada, se uma atualização explica uma alteração em massa ou se um programa desconhecido foi bloqueado antes de produzir efeitos adicionais. A decisão depende de evidência e contexto organizacional, não apenas do nome do executável ou de uma classificação automática.

## O EDR na investigação

Uma investigação normalmente começa com uma pergunta concreta: o que ocorreu neste endpoint, em qual intervalo, e como isso se relaciona com o alerta? O analista identifica o dispositivo e a identidade envolvidos, confirma os horários e examina os eventos anteriores e posteriores ao sinal inicial. Em seguida, acompanha relações de processo, arquivos e conexões, buscando uma sequência coerente e registrando o que é observado e o que permanece inferido.

A linha temporal merece atenção especial. Diferenças de fuso, relógios desalinhados, atraso na transmissão e ordem de ingestão podem fazer eventos parecerem fora de sequência. A hora exibida pela plataforma pode corresponder ao momento do evento ou ao momento em que ele chegou ao serviço central. Quando isso não estiver claro, a conclusão deve explicitar a incerteza; não se deve ordenar acontecimentos somente pela posição em uma tela sem conhecer a semântica dos horários.

## Evidências e leitura de alertas

Um alerta de EDR costuma apresentar uma regra, um comportamento ou um objeto que motivou a detecção, além de horário, dispositivo e algum resumo. Para avaliar sua relevância, examine os eventos que o sustentam, a configuração ativa e a explicação fornecida pelo produto. Um rótulo de severidade é uma pista para priorização, não uma medida universal de impacto nem uma conclusão de comprometimento.

Entre as evidências úteis estão a relação entre processos, a identidade que executou a ação, a localização e a integridade do arquivo, a sequência de leitura ou gravação observada, conexões associadas e a resposta registrada pela ferramenta. O hash pode ajudar a comparar amostras, mas não explica sozinho a finalidade do arquivo nem prova que a versão examinada é a que esteve presente em outro momento. Um nome conhecido também não autentica um arquivo: caminho, assinatura, origem e contexto podem importar.

Se houver ação automatizada, registre o que foi executado e o resultado informado: por exemplo, se o dispositivo foi isolado, se o processo foi encerrado ou se a coleta falhou. “Solicitado” não significa necessariamente “concluído”. Também importa saber se a ação atingiu apenas o endpoint indicado ou se políticas associadas afetaram outros ativos. A trilha de resposta faz parte do contexto investigativo.

## Exemplo hipotético

Imagine que uma estação de trabalho apresente um alerta após um programa iniciar um processo filho incomum e esse processo tentar se conectar a um destino externo. O EDR mostra os horários, a relação entre os dois processos, a conta associada e os dados da conexão que conseguiu observar. O analista confirma que o programa não consta na mudança aprovada para aquele dispositivo e consulta eventos próximos, inclusive criação de arquivos e atividade de processos relacionados.

Esses sinais justificam ampliar a investigação e podem levar à contenção conforme o procedimento da organização. Ainda assim, o alerta isolado não permite afirmar que houve exfiltração, que o destino recebeu dados ou que a conta foi roubada. A conexão pode ter sido bloqueada, pode corresponder a uma função legítima ainda não documentada ou pode ter sido registrada com informação incompleta. A hipótese deve ser confrontada com outras fontes e com a validação dos responsáveis pelo sistema.

## Distinções importantes

### EDR e antivírus

Antivírus é uma categoria associada à prevenção e à detecção de software malicioso. O EDR enfatiza a telemetria, a investigação de atividade no endpoint e opções de resposta. Na prática, há sobreposição: uma plataforma pode reunir recursos tradicionalmente associados ao antivírus e ao EDR. A diferença útil é a pergunta que cada capacidade ajuda a responder, e não uma fronteira rígida entre produtos.

### EDR e SIEM

Um SIEM centraliza e correlaciona registros de várias fontes para apoiar monitoramento e investigação. O EDR concentra-se na atividade e na resposta no endpoint. Eventos do EDR podem ser enviados ao SIEM para correlação com identidade, rede, nuvem ou aplicações, mas o SIEM não substitui automaticamente a telemetria detalhada do dispositivo. Da mesma forma, o EDR não oferece, por si só, uma visão completa de todas as fontes corporativas.

### EDR e XDR

XDR é um rótulo usado para descrever detecção e resposta que relacionam sinais de mais de um domínio, como endpoints, rede, identidade ou serviços em nuvem. O alcance concreto varia entre fornecedores e implementações. Um produto chamado XDR pode incorporar um EDR, mas o nome não garante cobertura uniforme nem integração completa. Para avaliar a capacidade, verifique quais fontes são coletadas, como os eventos se relacionam e que ações podem ser executadas.

### EDR e telemetria de rede

A telemetria de rede observa comunicações em pontos de infraestrutura ou nos próprios dispositivos, conforme a fonte. O EDR pode registrar conexões atribuídas a processos e usuários, o que ajuda a ligar atividade local a um fluxo. Isso não significa que ele veja todo o tráfego, seu conteúdo ou todos os caminhos de comunicação. Registros de rede e de endpoint são complementares e podem divergir em escopo, retenção e precisão temporal.

## Limitações e erros de interpretação

A cobertura é uma condição para a evidência. Dispositivos fora do inventário, agentes ausentes ou desatualizados, incompatibilidades, falhas de comunicação, políticas restritivas e retenção curta criam pontos cegos. A porcentagem de endpoints “conectados” em um painel tampouco prova que cada evento relevante foi capturado. É preciso entender o que a métrica mede e quais grupos estão excluídos.

Há também limites de interpretação. Falsos positivos podem surgir de atividades administrativas, ferramentas de suporte e atualizações legítimas. Falsos negativos podem ocorrer quando a atividade não se parece com padrões conhecidos, a coleta não a registra ou a correlação não a destaca. O silêncio do painel não equivale a uma avaliação independente de que o ambiente está seguro.

Outro erro é tratar uma ação de contenção como remediação completa. Isolar um computador pode limitar comunicação, mas uma credencial potencialmente exposta ainda pode exigir tratamento; encerrar um processo não remove necessariamente arquivos, tarefas ou alterações persistentes. A resposta deve cobrir o incidente e seus possíveis caminhos, respeitando a continuidade do negócio e os procedimentos aprovados.

## Implicações para resposta a incidentes

Antes de executar contenção, confirme o ativo, o escopo e a hipótese que a ação pretende limitar. Em um servidor crítico, por exemplo, o isolamento pode interromper um serviço; o responsável técnico deve participar da avaliação conforme o processo de incidentes. Em uma estação de usuário, a decisão pode ser mais simples, mas ainda deve considerar comunicações necessárias para coleta e suporte. A urgência não elimina a necessidade de registrar a decisão e seu responsável.

## Perguntas frequentes

### Um alerta de EDR confirma uma invasão?

Não. Ele indica uma detecção ou condição que merece avaliação. A confirmação depende da evidência associada, do contexto do dispositivo, de fontes complementares e da análise do caso. Um alerta pode ser falso positivo, verdadeiro positivo ou inconclusivo enquanto faltam dados.

### A ausência de alertas significa que o endpoint está seguro?

Não. Primeiro, confira se o dispositivo está coberto, se o sensor coletava os eventos necessários, se houve comunicação e se o período ainda está na retenção. Mesmo com cobertura adequada, nenhum mecanismo garante que toda atividade relevante será detectada.

### O EDR consegue identificar quem usou um dispositivo?

Ele pode registrar a conta associada a eventos, mas uma conta não identifica necessariamente a pessoa que realizou a ação. Sessões compartilhadas, contas de serviço, credenciais comprometidas e contexto de autenticação podem alterar a interpretação. Correlacione os dados com fontes de identidade e registros operacionais.

### Isolar um endpoint resolve o incidente?

O isolamento pode conter certas comunicações do dispositivo, conforme a implementação e a política aplicada. Não demonstra que a causa foi removida nem que outros ativos não foram afetados. A equipe precisa investigar o alcance e validar as etapas de erradicação e recuperação.

## Relação com o capítulo 6

Na versão original, o capítulo 6 oferece o contexto relacionado a este verbete. O EDR ajuda a transformar sinais do endpoint em evidência investigável e em opções de resposta. Seu uso exige que a equipe verifique a cobertura e as lacunas de coleta antes de interpretar a ausência de alertas como evidência de segurança.
