# Acesso inicial

## Definição e alcance

Acesso inicial, também chamado *initial access*, é o primeiro ponto de entrada do adversário em um ambiente. Essa entrada pode ocorrer pelo uso de credenciais, por um serviço exposto ou por outra oportunidade que permita alcançar sistemas, contas ou recursos que antes não estavam sob seu controle. O termo descreve uma posição na sequência de um incidente, e não uma técnica única, uma vulnerabilidade específica ou a prova de que houve comprometimento amplo.

A palavra “primeiro” precisa ser entendida em relação ao ambiente investigado e ao episódio que está sendo analisado. Uma organização pode ter redes, provedores, unidades e serviços distintos. Um invasor pode já controlar uma conta de terceiro e, só depois, alcançar a rede corporativa; para a investigação da rede, essa transição pode ser o acesso inicial relevante. Da mesma forma, o primeiro evento que a equipe observou não é necessariamente o primeiro evento que ocorreu. A definição operacional deve explicitar qual ambiente e qual intervalo estão em foco.

O acesso inicial é uma etapa conceitual útil para organizar a narrativa de um incidente: como o adversário obteve a primeira posição dentro do escopo? A resposta pode ser conhecida, provável ou desconhecida. A falta de uma explicação confirmada não invalida a investigação; exige que a incerteza seja registrada, em vez de preencher a lacuna com uma hipótese apresentada como fato.

## Como pode ocorrer

Há várias classes de oportunidade, e elas não são mutuamente exclusivas. O ponto de entrada pode envolver uma identidade legítima, uma aplicação acessível externamente, uma relação de confiança com outra organização ou uma ação de usuário que resulte em execução ou exposição de informação. A categoria descreve o caminho em alto nível; os detalhes concretos variam conforme arquitetura, configuração, controles e contexto.

### Uso de identidade ou credencial

Uma conta válida pode ser usada sem que a senha tenha sido “quebrada”. Credenciais podem ter sido obtidas por meios anteriores, expostas em outro contexto, reutilizadas, capturadas por fraude ou disponibilizadas por falha de gestão. Também pode haver abuso de uma sessão já autenticada ou de uma integração que confere permissões. Para a defesa, a pergunta não é apenas se houve autenticação correta segundo o sistema, mas se a atividade e o contexto correspondem ao uso esperado daquela identidade.

A autenticação válida não identifica por si só quem estava diante do dispositivo. Um registro de login demonstra que o serviço aceitou determinado fator ou sessão conforme suas regras; não demonstra, isoladamente, consentimento do titular nem intenção legítima. Por outro lado, um login em local ou horário incomum não prova invasão. Mudanças de rede, viagens, intermediários, automação e regras de registro podem explicar uma anomalia. A conclusão depende da correlação com outros sinais.

### Serviço ou recurso exposto

Uma aplicação, interface administrativa, equipamento ou serviço alcançável a partir de uma rede externa pode oferecer o caminho de entrada. “Exposto” significa que existe uma rota de acesso a partir de determinado ponto de observação; não significa automaticamente que o componente esteja vulnerável ou desprotegido. O serviço pode ter sido comprometido por falha, configuração inadequada, função permitida ou credencial associada. A exposição é uma condição que ajuda a priorizar a análise, mas a investigação precisa determinar se e como foi usada.

### Outras oportunidades

O primeiro contato pode passar por uma pessoa, fornecedor, sistema conectado, dispositivo ou mecanismo de compartilhamento. Uma mensagem pode levar alguém a fornecer dados, aprovar uma solicitação ou abrir um conteúdo; uma relação de confiança pode permitir que a atividade chegue por uma via já autorizada; e um equipamento previamente comprometido pode servir de ponte. Esses exemplos não implicam que o usuário ou parceiro seja culpado. Eles indicam que o limite de segurança é formado por pessoas, processos, identidades e dependências técnicas, e não apenas pelo perímetro da rede.

## Acesso inicial e fases seguintes

O termo situa o início do adversário no ambiente observado, mas não deve ser confundido com tudo o que ocorre depois. Uma vez dentro, o adversário pode tentar manter acesso, ampliar privilégios, descobrir recursos, mover-se entre sistemas, obter dados ou afetar operações. Essas ações podem acontecer em ordens diferentes, podem não acontecer e podem ser interrompidas. A evidência de uma entrada não demonstra, por si só, que as demais etapas ocorreram.

Também é possível que uma mesma campanha tenha vários pontos de entrada. Um acesso pode ser usado como contingência, outro pode surgir dias depois, e uma equipe pode encontrar vestígios de eventos sem relação entre si. Agrupar tudo sob um único “acesso inicial” pode apagar diferenças importantes. Convém avaliar se os eventos compartilham identidade, infraestrutura, cronologia, objetivo ou outros elementos verificáveis antes de tratá-los como parte do mesmo episódio.

A distinção entre “vetor de acesso” e “acesso inicial” é prática. Vetor nomeia a via ou oportunidade considerada, como uma conta ou serviço; acesso inicial nomeia a posição alcançada e a transição que introduz o adversário no escopo. Uma hipótese de vetor ainda não é uma conclusão sobre a entrada. A equipe pode identificar um serviço exposto sem encontrar evidência de que ele tenha sido o caminho efetivamente utilizado.

## Reconhecimento e evidências

Reconhecer o acesso inicial raramente depende de um único alerta. A reconstrução costuma combinar registros que descrevem identidade, dispositivo, rede, aplicação e atividade, preservando a ordem temporal e as limitações de cada fonte. O objetivo é estabelecer uma cadeia coerente: qual evento precedeu a primeira atividade atribuível ao adversário, qual recurso foi alcançado e que sinais sustentam essa interpretação.

Fontes potencialmente úteis incluem registros de autenticação e de sessão, trilhas de auditoria de serviços em nuvem, logs de aplicações e de gateways, alertas de ferramentas de proteção de endpoint, dados de DNS e fluxo de rede, histórico de alterações de conta, inventário de ativos, chamados de suporte e relatos de usuários. A disponibilidade, retenção e precisão variam. Alguns serviços registram a autenticação sem guardar a ação executada; outros agregam eventos ou usam relógios desalinhados. A equipe deve anotar essas lacunas e evitar tratar a ausência de um registro como evidência de que nada ocorreu.

Sinais que podem justificar investigação incluem autenticação fora do padrão esperado, criação ou uso inesperado de sessão, acesso a recurso incomum para aquela conta, conexão de origem que não aparece no histórico habitual, alteração de configuração próxima a uma atividade suspeita, processo ou aplicativo associado a uma interação reportada, e sequência de eventos que não se explica pelo trabalho previsto. Nenhum desses sinais, isoladamente, é universalmente malicioso. A força está na combinação, no contexto e na ligação com ações posteriores confirmadas.

## Investigação defensiva

É útil formular hipóteses concorrentes: uso abusivo de credencial, automação legítima mal classificada, atividade de fornecedor, erro de configuração, comprometimento de dispositivo ou falha em serviço exposto. Cada hipótese deve ter sinais que a apoiam e que a enfraquecem. Uma hipótese que não pode ser testada com os dados disponíveis deve permanecer explicitamente inconclusiva. A equipe pode então buscar registros adicionais, entrevistar responsáveis ou preservar sistemas pertinentes, respeitando os procedimentos de resposta e as necessidades de continuidade do negócio.

## Uso na resposta a incidentes

Identificar o acesso inicial orienta contenção e recuperação. Se a entrada envolveu uma identidade, a equipe pode avaliar sessões ativas, fatores de autenticação, permissões, aplicações conectadas e outras contas relacionadas. Se envolveu um serviço exposto, pode revisar sua disponibilidade externa, configuração, versão, registros e dependências. Se o caminho passou por uma relação de confiança, pode examinar os limites de acesso e os mecanismos de troca de dados. As medidas concretas dependem da evidência e do risco operacional; ações precipitadas podem interromper serviços necessários ou eliminar dados úteis à investigação.

A comunicação do incidente deve usar linguagem proporcional à certeza. É possível informar que uma conta foi usada de forma suspeita, que o caminho provável está sob análise ou que o acesso ainda não foi determinado. Evite declarar uma vulnerabilidade explorada, uma credencial roubada ou uma origem geográfica como fato quando os registros só mostram exposição, autenticação ou endereço de rede. A precisão reduz confusão entre equipes técnicas, liderança, usuários e partes externas.

Depois da contenção, a análise do ponto de entrada ajuda a procurar condições semelhantes: contas com permissões comparáveis, serviços publicados com configurações equivalentes, integrações que compartilham confiança ou lacunas de registro presentes em outras áreas. Essa busca deve ser direcionada pelo mecanismo observado, não por uma suposição genérica de que todo ativo parecido foi comprometido. O propósito é reduzir recorrência e verificar abrangência, sem transformar semelhança em prova.

## Prevenção e preparo

## Limitações e erros de interpretação

Também se confunde exposição com comprometimento. Um serviço alcançável externamente pode nunca ter sido usado pelo adversário. Uma vulnerabilidade conhecida não demonstra exploração naquele ambiente. Da mesma forma, um login bem-sucedido não prova que a conta foi tomada, e uma falha de login não prova uma tentativa direcionada. Cada afirmação exige evidência correspondente.

## Perguntas frequentes

### O acesso inicial é sempre a primeira ação do ataque?

Não necessariamente. O adversário pode ter realizado preparação fora do ambiente, como obter informações ou credenciais em outro lugar. O termo designa a primeira entrada no escopo definido, não o começo de toda a campanha. Definir o escopo evita misturar eventos externos que a organização não consegue observar com a entrada efetivamente investigada.

### Todo incidente tem um ponto de entrada identificável?

Não. Registros podem não existir, ter expirado, estar incompletos ou não distinguir atividade legítima de abuso. Um dispositivo pode ter sido comprometido antes de entrar na rede observada. Nesses casos, é correto registrar que o acesso inicial não foi determinado, descrever as hipóteses remanescentes e buscar limitar o impacto conhecido.

Pode ser, mas os conceitos não são equivalentes. O primeiro sistema em que se encontrou impacto pode ter sido alcançado a partir de outro sistema, ou pode apenas ter produzido os registros mais claros. A equipe deve reconstruir a relação entre eventos e informar se está falando do primeiro host conhecido, do primeiro recurso acessado ou da primeira atividade adversária confirmada.

Porque uma condição que permitiu a entrada pode existir em outros recursos ou identidades. Comparar características relevantes ajuda a encontrar exposição recorrente e a priorizar correções. A busca deve ser proporcional às evidências, registrar o que foi verificado e não declarar comprometidos todos os itens que compartilham uma característica superficial.

## Relação com o capítulo

Na organização da versão original, este verbete se relaciona ao capítulo 1 por apresentar a ideia de entrada no ambiente como referência para entender as fases seguintes. A leitura do termo ajuda a manter clara a diferença entre descobrir um caminho possível, confirmar uma entrada e reconstruir o que aconteceu após ela.
