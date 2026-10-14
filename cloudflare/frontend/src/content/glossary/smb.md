# SMB

## Conceito e papel na infraestrutura

Server Message Block (SMB) é um protocolo de comunicação usado para acessar arquivos e outros recursos compartilhados em uma rede. Em ambientes Windows, é uma peça comum da infraestrutura: um computador pode oferecer uma pasta, impressora ou outro serviço, enquanto outro solicita acesso conforme as permissões configuradas. A definição é simples, mas o que acontece ao redor de uma conexão SMB envolve identidade, autorização, resolução de nomes, transporte de rede, políticas locais e, às vezes, serviços corporativos de autenticação.

O termo pode designar o protocolo, uma conexão que o utiliza, um serviço que o implementa ou, informalmente, o compartilhamento oferecido. Esses sentidos se relacionam, mas não são intercambiáveis. Um compartilhamento é o recurso publicado; SMB é o protocolo pelo qual ele pode ser acessado. A presença de SMB em um equipamento não significa, por si só, que todos os compartilhamentos estejam expostos ou que qualquer usuário tenha acesso a eles.

## Como uma sessão funciona

Uma interação típica começa quando um cliente identifica um servidor e tenta estabelecer comunicação. O endereço pode ser encontrado por nome ou usado diretamente; a resolução de nomes e o roteamento determinam se o cliente chega ao destino pretendido. Em seguida, cliente e servidor negociam parâmetros compatíveis do protocolo. Essa negociação permite que ambos saibam quais recursos podem usar naquela sessão. O conjunto exato de capacidades depende das versões e configurações de cada lado.

Uma sessão autenticada não concede automaticamente acesso irrestrito. O servidor avalia permissões associadas ao compartilhamento e também permissões do sistema de arquivos. Na prática, o acesso efetivo depende da combinação dessas camadas, além de políticas e controles que possam ser aplicados ao recurso. Uma pasta pode aparecer em uma enumeração e ainda assim negar a leitura de seu conteúdo. Da mesma forma, um usuário pode conseguir listar uma pasta, mas não criar, modificar ou excluir arquivos nela.

## Versões, transporte e configuração

SMB evoluiu ao longo do tempo, e versões diferentes oferecem conjuntos diferentes de recursos e propriedades de segurança. Em muitos ambientes contemporâneos, a comunicação ocorre sobre TCP, comumente associada à porta 445. Existem também arquiteturas e configurações históricas nas quais o tráfego SMB depende de outros mecanismos de transporte ou encapsulamento. Portanto, uma porta conhecida é um indício útil, mas não uma definição completa do protocolo: portas podem ser alteradas, encapsuladas, filtradas ou reutilizadas por outros serviços.

Recursos de segurança podem incluir proteção de integridade e confidencialidade da comunicação, além de mecanismos de autenticação. Sua disponibilidade e uso dependem da versão, da configuração e das políticas dos dois lados. Criptografia em trânsito, quando negociada e aplicada, reduz a exposição do conteúdo a quem apenas observa o caminho da rede; ela não torna confiável um endpoint comprometido nem elimina a necessidade de controlar permissões. A assinatura de mensagens, quando habilitada e exigida conforme a política, ajuda a detectar alterações não autorizadas no tráfego, mas também não substitui autenticação forte ou segmentação.

## Onde aparece em uma investigação

Em uma investigação, comece por uma linha temporal e por relações observáveis: qual host iniciou a conexão, qual servidor recebeu, qual identidade foi apresentada, que recurso foi acessado, que processo estava ativo e que eventos ocorreram antes e depois. Correlacione os horários considerando fuso, sincronização e precisão dos relógios. Procure distinguir conexões bem-sucedidas de tentativas recusadas e operações de leitura de gravações ou alterações, se a instrumentação permitir. A ausência de um evento de arquivo pode significar que a auditoria não estava habilitada, e não que nenhum acesso ocorreu.

## Indícios de atividade fora do padrão

A nota prática de que conexões SMB fora do padrão podem ajudar a rastrear movimentação lateral exige uma leitura cuidadosa. Movimentação lateral é o deslocamento de atividade entre sistemas após um acesso inicial ou durante uma operação mais ampla. Como SMB é usado legitimamente para acessar recursos e administrar ambientes, uma conexão inesperada pode ser um ponto de partida para a investigação, mas não é prova de intrusão. O caráter “fora do padrão” depende do papel do equipamento, do usuário, do horário e das rotinas reais do ambiente.

Indícios que merecem correlação incluem uma estação de usuário iniciando conexões para muitos pares sem uma necessidade conhecida; um servidor que passa a acessar compartilhamentos de outros servidores em sequência; uma conta que nunca havia acessado determinado recurso; conexões em horários incompatíveis com a rotina documentada; ou falhas de autenticação seguidas por acessos bem-sucedidos. Também importa observar o que veio depois: execução de processos incomuns, criação de arquivos, alterações de permissões, alertas de endpoint ou acessos a outros serviços podem reforçar ou enfraquecer uma hipótese.

### Exemplo hipotético: estação acessando vários servidores

### Exemplo hipotético: transferência volumosa autorizada

Em outro exemplo hipotético, um servidor de backup transfere grande quantidade de dados por SMB durante a madrugada. O volume é incomum para uma estação de trabalho, mas esperado para aquele servidor em uma janela de cópia documentada. A checagem da identidade de serviço, do processo, dos destinos e do resultado da tarefa pode explicar a atividade. Se o destino ou a conta diferir do inventário aprovado, a mesma transferência passa a exigir investigação. O exemplo mostra por que limites fixos de volume, sem contexto, geram alertas pouco confiáveis.

## Evidências e interpretação

Uma avaliação robusta combina fontes independentes e explicita o que cada uma demonstra. A telemetria de rede pode sustentar que dois endereços trocaram tráfego compatível com SMB; a autenticação pode sustentar que uma conta foi aceita ou recusada; a auditoria do servidor pode sustentar que uma operação específica foi registrada; o endpoint pode associar uma conexão a um processo. A combinação pode formar uma narrativa mais forte, mas ainda é necessário verificar integridade, cobertura, sincronização dos horários e possibilidade de lacunas.

Evidências úteis incluem:

- Origem e destino da conexão, horário, duração e volume observado, acompanhados da zona de rede e do papel dos hosts.
- Identidade apresentada, resultado da autenticação, método ou contexto disponível e eventuais tentativas anteriores.
- Nome do compartilhamento e eventos de acesso a objetos, quando a auditoria correspondente estiver habilitada.
- Processo, usuário local, sessão e árvore de processos no endpoint que iniciou a conexão.
- Mudanças recentes em permissões, contas, serviços, tarefas agendadas ou configuração de rede que expliquem atividade nova.
- Registros de mudança, rotinas operacionais e confirmação dos responsáveis pelo serviço, preservados como contexto e não como substitutos da evidência técnica.

Os dados podem ser incompletos por desenho. Criptografia impede que uma captura simples revele nomes de arquivos ou conteúdo; registros podem não ter sido habilitados, podem ter sido sobrescritos ou podem não cobrir todos os servidores. Um coletor pode observar a rede apenas em determinados segmentos. Nomes de host podem mudar, endereços podem ser reutilizados e NAT pode ocultar a origem original. Ao registrar conclusões, diferencie observação, inferência e hipótese: “houve uma conexão” é observação; “a conta realizou a transferência” pode ser inferência dependente de registros; “um invasor se moveu lateralmente” é uma hipótese que requer contexto adicional.

## Distinções importantes

SMB não é sinônimo de compartilhamento de arquivos. O compartilhamento é o recurso publicado pelo servidor, e SMB pode ser o protocolo usado para alcançá-lo. Tampouco é sinônimo de unidade mapeada: uma unidade mapeada é uma forma de apresentar um recurso remoto ao usuário ou a um aplicativo, e pode deixar de estar visível sem que o serviço SMB tenha parado. O acesso também pode acontecer sem uma letra de unidade, por caminhos de rede usados diretamente por uma aplicação.

SMB não é uma conta, um mecanismo de autenticação ou uma permissão. Ele transporta solicitações entre cliente e servidor; a identidade e as políticas do ambiente participam da decisão de acesso. Credenciais aceitas não significam que todos os arquivos estejam autorizados, e uma permissão ampla não explica como a identidade foi obtida. Em uma análise de incidente, esses elementos devem ser examinados separadamente para localizar a falha: exposição do serviço, comprometimento de conta, configuração excessiva ou uso indevido de acesso legítimo.

## Riscos e controles defensivos

Controles úteis incluem limitar conexões entre segmentos e estações que não precisam conversar, permitir o serviço apenas nos fluxos de negócio documentados, remover versões ou componentes legados quando compatível com as aplicações, aplicar atualizações de segurança e revisar permissões de compartilhamento e de arquivos. Contas de serviço devem ter escopo restrito e credenciais geridas de forma apropriada. A organização também pode exigir recursos de integridade e confidencialidade conforme sua política e capacidade operacional, validando compatibilidade antes de ampliar a exigência.

## Resposta a incidentes

As medidas de contenção devem equilibrar urgência e continuidade operacional. Uma conta pode ser desabilitada ou ter sessões revogadas conforme o risco e o procedimento vigente; um host pode ser isolado; regras de rede podem restringir caminhos; permissões podem ser reduzidas. Antes de remover artefatos ou reiniciar sistemas, considere se isso apagará evidência volátil ou alterará a linha temporal. Depois da contenção, valide se a atividade cessou e se não há outros hosts ou contas reproduzindo o mesmo padrão.

## Perguntas frequentes

### Uma conexão na porta 445 prova que houve acesso a arquivos?

Não. Ela é um indicador para investigar comunicação compatível com SMB, mas não prova autenticação bem-sucedida nem operação de arquivo. Confirme o serviço, o resultado da sessão e os eventos disponíveis no servidor ou no endpoint. Um firewall pode registrar somente o fluxo de rede.

### Toda conexão entre computadores Windows é suspeita?

### Um usuário autenticado pode acessar qualquer compartilhamento?

Não necessariamente. O servidor aplica controles ao compartilhamento e aos objetos nele contidos, e políticas adicionais podem restringir o acesso. A autenticação confirma uma identidade segundo o mecanismo usado; a autorização decide quais operações essa identidade pode realizar em cada recurso.

### Criptografia impede uma investigação de SMB?

### Desativar SMB elimina o risco de movimentação lateral?

### Como diferenciar administração legítima de abuso de uma conta privilegiada?

## Relação com o capítulo 1

Como conceito de infraestrutura, SMB ajuda a entender por que acessos entre sistemas podem ser parte do trabalho cotidiano e, ao mesmo tempo, oferecer sinais úteis para investigação. No contexto do capítulo 1 da versão original, sua leitura defensiva depende de distinguir serviço disponível, identidade, permissão e comportamento observado. A conexão fora do padrão pode orientar a busca por movimentação lateral, mas só o contexto e a correlação com outras evidências permitem avaliar o que ocorreu.
