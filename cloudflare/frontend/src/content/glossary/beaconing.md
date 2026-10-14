# Beaconing

## Definição e escopo

**Beaconing**, também chamado de **C2 beaconing**, é a comunicação recorrente de um sistema com um destino externo, muitas vezes para sinalizar a um operador que o sistema permanece disponível. Em uma investigação de segurança, o termo costuma descrever um padrão de tráfego observado ou suspeito, e não uma conclusão sobre a intenção de quem o gerou. A recorrência pode ser regular, aproximada, intermitente ou condicionada a eventos; por isso, reconhecer uma sequência de contatos é o começo da análise, não seu encerramento.

O componente “C2” remete a comando e controle: a relação entre um sistema comprometido e quem coordena sua atividade. Contudo, nem toda comunicação recorrente é C2. Atualizadores, sincronizadores, agentes de inventário, serviços de nuvem, aplicações móveis, ferramentas de monitoramento e mecanismos de autenticação também fazem consultas repetidas. “Beaconing” deve ser tratado como descrição de comportamento e hipótese analítica, não como sinônimo automático de malware.

## Como interpretar o padrão

Um beacon pode aparecer como uma série de conexões para o mesmo domínio, endereço, serviço ou conjunto pequeno de destinos. A repetição pode ocorrer em intervalos semelhantes, mas há muitas variações: o processo pode esperar um tempo aleatório, reduzir a frequência quando não recebe resposta, repetir tentativas após falhas ou só contatar o destino quando há conectividade. Alguns programas legítimos também alteram o intervalo conforme carga, política, estado da rede ou configuração local. Assim, regularidade absoluta não é requisito e irregularidade não elimina a hipótese.

A análise deve considerar a sequência completa. Uma conexão isolada normalmente diz pouco; dezenas de contatos distribuídos ao longo do tempo podem revelar uma rotina. O intervalo entre eventos importa, mas também importam duração, volume enviado e recebido, horários, códigos de resposta quando disponíveis, resolução de nomes, protocolo, destino, processo responsável e contexto do equipamento. Um padrão de baixo volume pode ser consistente com sinalização, porém não é exclusivo dela. Uma transferência grande também pode ser legítima ou corresponder a uma fase diferente da atividade suspeita.

A comunicação pode atravessar protocolos e serviços comuns. Um registro de rede que mostra tráfego web, por exemplo, raramente permite concluir sozinho que houve comunicação de comando e controle; o tráfego pode estar cifrado e compartilhar infraestrutura com muitas aplicações. A pergunta defensiva mais produtiva não é “este protocolo é malicioso?”, mas “qual processo originou a comunicação, por que esse ativo deveria fazê-la e como esse comportamento se relaciona com outros eventos?”.

## Por que é útil na detecção

O beaconing é útil porque oferece uma forma de procurar atividade persistente mesmo quando não há alerta explícito de antivírus, bloqueio de conexão ou transferência volumosa. Uma máquina pode produzir contatos discretos por um período prolongado. Se a equipe identifica o padrão cedo, pode investigar o processo, delimitar os ativos envolvidos e procurar sinais associados antes que apareçam efeitos mais evidentes. A utilidade está em transformar telemetria dispersa em uma hipótese verificável.





## Evidências que ajudam a reconhecer

Nenhuma evidência isolada é universalmente decisiva. A confiança aumenta quando observações independentes convergem e quando a explicação legítima mais provável não se aplica. Entre os elementos que podem ser examinados estão:

- **Temporalidade:** recorrência, variação dos intervalos, tentativas após falha, períodos de silêncio e relação com o horário de atividade do equipamento.
- **Identidade do destino:** domínio ou endereço pouco usual para a função do ativo, mudanças de destino, reputação disponível internamente e histórico de resolução de nomes. A novidade, sozinha, não indica malícia.
- **Origem local:** processo, usuário, caminho do executável, assinatura, data de instalação, conexões relacionadas e coerência entre a função do software e o tráfego observado.
- **Características do fluxo:** quantidade e direção dos bytes, duração, frequência, portas e protocolo, observando os limites impostos por criptografia, proxies e tradução de endereços.
- **Contexto do ativo:** criticidade, proprietário, função, segmento, localização lógica, mudanças recentes e inventário de aplicações aprovadas.
- **Eventos correlatos:** alertas de endpoint, criação ou execução de processos, alterações de persistência, autenticações, consultas DNS, conexões posteriores e atividade incomum de arquivos.





## Exemplo hipotético

Imagine uma estação de trabalho que, durante vários dias, consulta um domínio externo em intervalos próximos. O tráfego tem pouco volume e ocorre também fora do horário habitual do usuário. Esses fatos justificam uma triagem, mas ainda são compatíveis com um agente de atualização ou sincronização. A equipe verifica o inventário e constata que a estação não deveria executar o produto associado ao domínio. No endpoint, encontra um processo sem origem conhecida que iniciou as conexões; outros registros mostram execução recente de arquivo não aprovado. A combinação fortalece a hipótese de atividade maliciosa e justifica contenção e investigação ampliada. O exemplo é ilustrativo: cada elemento precisaria ser confirmado no ambiente real.

## Distinções importantes

**Beaconing e heartbeat:** *heartbeat* costuma designar uma mensagem periódica que informa que um serviço ou componente está ativo. É uma função legítima comum, embora um canal de C2 também possa usar mensagens que se comportam como heartbeat. Beaconing descreve o padrão observado; heartbeat sugere uma finalidade de monitoramento ou disponibilidade. Na prática, a finalidade precisa ser confirmada pelo contexto.

**Beaconing e comunicação de comando e controle:** C2 é uma categoria funcional mais ampla. Pode envolver comunicações recorrentes, solicitações sob demanda, canais indiretos ou outros mecanismos. Beaconing é uma forma possível de comunicação dentro desse conjunto, não uma condição necessária para toda atividade de C2. Um padrão recorrente pode ainda não ser C2.

**Beaconing e polling:** *Polling* é a consulta repetida a uma fonte para verificar atualizações ou mudanças. É comum em aplicações legítimas e pode produzir intervalos regulares. A distinção não está somente na frequência: deve-se examinar quem consulta, qual serviço é consultado, que resposta é esperada e se a atividade está autorizada.

**Beaconing e exfiltração:** exfiltração é a transferência não autorizada de dados para fora. Um sinal recorrente pode não carregar dados relevantes, enquanto a exfiltração pode acontecer em uma única transferência ou por outro canal. Observar beaconing não comprova roubo de dados; observar volume de saída não comprova, por si só, que a transferência foi não autorizada.

## Limitações e erros de interpretação

Periodicidade é uma pista, não um veredito. Sistemas legítimos consultam serviços regularmente, inclusive para sincronizar relógios, verificar atualizações, renovar credenciais, monitorar disponibilidade e manter sessões. Um alerta baseado apenas em “conexões a cada tantos minutos” tende a confundir comportamento esperado com suspeito. A lista de destinos aprovados reduz alguns falsos positivos, mas pode ficar desatualizada e não explica usos indevidos de componentes permitidos.

Também é possível perder o padrão. Dados incompletos, retenção curta, tráfego agregado, mudanças de endereço, proxies, dispositivos móveis fora da rede corporativa e comunicações pouco frequentes limitam a observação. A criptografia protege o conteúdo e pode impedir a inspeção de mensagens, mas não apaga necessariamente metadados de conexão. Ainda assim, metadados podem ser insuficientes para distinguir aplicações que compartilham serviços ou infraestrutura.

Um erro frequente é tratar periodicidade perfeita como prova de automação maliciosa ou, inversamente, exigir periodicidade perfeita para considerar a hipótese. Outra armadilha é atribuir intenção com base em reputação de domínio isolada. Destinos legítimos podem hospedar conteúdo de terceiros, domínios podem mudar de proprietário e serviços compartilhados podem ser usados por mais de uma aplicação. Reputação, geolocalização ou novidade devem ser contextualizadas, não convertidas em sentença.

Há ainda o risco de confundir correlação temporal com causalidade. Um processo que aparece próximo de uma conexão pode não tê-la iniciado; uma consulta DNS pode estar relacionada a uma aplicação distinta; um alerta posterior não prova que o contato anterior o causou. Confirmar a relação exige telemetria adequada e atenção à atribuição. Quando os dados não permitem afirmar, a conclusão deve registrar o nível de confiança e o que falta para aumentá-lo.

## Resposta a incidentes

Quando a hipótese merece investigação, a resposta deve preservar evidências e reduzir o risco de forma proporcional. A equipe pode registrar horários, ativos, destinos, processos e fontes dos dados; preservar logs e artefatos conforme os procedimentos internos; e ampliar a busca para ativos com comportamento semelhante. Se houver indícios consistentes de comprometimento, o responsável pelo incidente avalia contenção, como restringir a comunicação ou isolar o dispositivo, considerando impacto operacional, criticidade e risco de propagação.

Bloquear um destino pode interromper a comunicação observada, mas não remove a causa nem garante que não existam destinos alternativos. Da mesma forma, isolar o endpoint pode ser necessário para reduzir risco, mas pode afetar operações e a disponibilidade de evidências voláteis. A decisão depende da gravidade, da confiança na atribuição e dos procedimentos de resposta. Sempre que possível, a contenção deve ser coordenada com as equipes responsáveis pelo ativo e acompanhada de registro do que foi alterado e quando.

Depois da contenção, a investigação busca entender escopo e mecanismo: quais ativos se comunicaram, desde quando, que processo estava envolvido, se houve execução ou persistência não autorizada e se dados foram acessados ou transferidos. As conclusões precisam distinguir fatos observados, inferências e lacunas. A recuperação inclui remover a causa identificada, corrigir controles pertinentes e monitorar se o padrão reaparece. Um bloqueio temporário sem investigação pode ocultar a pista e permitir que a atividade retorne por outro caminho.



## Perguntas frequentes

### Um intervalo regular confirma malware?

Não. Regularidade aumenta a justificativa para examinar o comportamento, mas também é característica de tarefas legítimas. A avaliação depende da origem local, do destino, da finalidade esperada e de evidências correlatas.

### Um beacon precisa aparecer em um intervalo fixo?

Não. Pode haver atraso variável, tentativas repetidas, pausas por falta de conectividade ou comunicação acionada por eventos. Uma busca defensiva deve tolerar variação e considerar a duração da janela observada.

### A criptografia impede a detecção?

Não necessariamente. Pode ocultar o conteúdo, mas registros de conexão ainda podem revelar horários, destinos, frequência e volume. Esses dados ajudam na triagem, embora muitas vezes não bastem para identificar o propósito do tráfego.

### Bloquear o domínio resolve o incidente?

Pode reduzir a comunicação com aquele destino, mas não determina se houve comprometimento, não limpa o dispositivo e não exclui outros canais. É uma medida possível dentro de uma resposta que também investigue o endpoint e o escopo.

### O que diferencia um falso positivo de um caso confirmado?

A confirmação vem da convergência de evidências e da validação do contexto, não de um limiar universal. Uma explicação legítima bem documentada pode encerrar a hipótese para aquele caso; evidências de processo não autorizado, persistência ou atividade relacionada podem elevá-la. O relatório deve explicar o fundamento e a incerteza residual.

## Relação com o capítulo

No capítulo 3 da versão original do manuscrito, o termo pode ser lido como uma lente de detecção: a repetição ajuda a localizar comunicações que merecem exame, mas ganha significado somente quando ligada ao sistema de origem, ao destino e ao restante da atividade observada. Essa perspectiva preserva a diferença entre pista, hipótese e conclusão.
