# Sinais de credenciais comprometidas

## Como reconhecer uma identidade válida sob uso suspeito?

A pergunta que orienta a busca é direta: que sinais permitem suspeitar que uma credencial foi comprometida, mesmo quando a autenticação parece válida? A resposta não está em um único campo de log. Uma senha correta, um segundo fator aprovado ou um endereço de rede conhecido podem aparecer tanto em uma atividade legítima quanto em uma sessão controlada por outra pessoa. A detecção depende de reconstruir o contexto: quem autenticou, em qual dispositivo, por qual método, em que momento, para qual recurso e o que fez depois.

O objetivo operacional é formular e testar hipóteses com rapidez suficiente para limitar danos sem interromper indevidamente o trabalho. Isso exige conhecer as fontes disponíveis, entender seus limites, preservar evidências e definir quem pode tomar decisões sobre uma conta. Também exige reconhecer que “credencial comprometida” descreve uma condição provável de controle indevido de um autenticador ou de uma sessão; não identifica, por si só, a causa, a pessoa responsável nem a extensão do acesso.

## O que significa uma credencial estar comprometida?

Credencial é o elemento usado para provar uma identidade ou manter uma sessão associada a ela. No uso cotidiano, o termo costuma significar usuário e senha, mas a investigação pode envolver também códigos de uso único, chaves de segurança, certificados, tokens de acesso, cookies de sessão, chaves de API, credenciais de serviço e fatores de recuperação. O comprometimento pode ocorrer quando um desses elementos é obtido, copiado, induzido a ser aprovado, reutilizado sem autorização ou mantido em um dispositivo sob controle alheio.

A identidade e a credencial não são a mesma coisa. A conta representa uma entidade no diretório ou na aplicação; a credencial é um meio de autenticação; a sessão é o estado que permite continuar acessando recursos depois de uma autenticação. Assim, uma senha pode ter sido trocada enquanto uma sessão antiga ainda permanece válida, dependendo do serviço e da configuração. Da mesma forma, bloquear o início de novas autenticações não necessariamente encerra todas as sessões ou revoga tokens já emitidos. A resposta precisa considerar os mecanismos reais de cada plataforma.

Também é importante distinguir autenticação de autorização. A autenticação informa que um método foi aceito para uma identidade. A autorização determina quais ações essa identidade pode executar. Um registro de login bem-sucedido confirma que o provedor aceitou determinado conjunto de fatores e condições; não prova que a pessoa legítima estava presente. Um registro de acesso a um recurso confirma uma atividade registrada pelo sistema; não demonstra automaticamente a intenção por trás dela. Essas diferenças evitam conclusões além do que os dados sustentam.

## Por que o uso de credenciais válidas pode passar despercebido?

Há ainda razões operacionais para as lacunas. A retenção pode ser curta, determinados eventos podem não estar habilitados, aplicações podem registrar apenas parte das ações e contas de serviço podem não ter um comportamento humano comparável. Um sistema pode registrar a emissão de um token sem registrar cada uso subsequente em outro serviço. Por isso, ausência de alerta não é prova de que nada ocorreu. Do mesmo modo, ausência de um evento em uma fonte que não registra aquela ação não deve ser apresentada como evidência de ausência.

## Quais sinais merecem atenção?

### Mudanças no padrão de autenticação

Compare as autenticações atuais com o histórico da identidade. Horários, dias da semana, frequência, duração entre tentativas e sequência de resultados podem ser relevantes. Uma conta que normalmente inicia uma sessão no começo do expediente e aparece em várias sessões novas fora dessa janela merece contexto adicional, especialmente se o padrão muda abruptamente. Ainda assim, trabalho em turnos, viagens, plantões e mudanças de função podem explicar horários diferentes.

Mudanças nos métodos cadastrados, nos dados de recuperação ou nas políticas aplicadas podem anteceder ou acompanhar uma tomada de conta. Uma inclusão de fator novo, redefinição de senha, desbloqueio ou alteração de telefone deve ser associada ao evento que a originou: quem solicitou, qual processo aprovou, de qual sessão partiu e que atividade ocorreu em seguida. O evento isolado pode ser administrativo; a sequência pode revelar que a conta passou a aceitar um método não reconhecido.

### Dispositivo, navegador e sessão

Uma identidade que sempre aparece em dispositivo gerenciado e passa a autenticar de um equipamento desconhecido pode estar sob risco. Compare identificador do dispositivo, estado de conformidade, sistema operacional, navegador, aplicativo cliente, certificado e presença de controles corporativos. Esses atributos ajudam a descrever a sessão, mas podem ser incompletos, alterados por atualização, apagados por reinstalação ou compartilhados em estações comuns.

Sessões também deixam pistas. Uma sessão recém-criada pode acessar vários recursos em sequência; uma sessão antiga pode continuar ativa depois de uma redefinição; tokens podem aparecer em serviços diferentes. A equipe deve conferir os eventos de emissão, renovação, revogação e uso conforme as capacidades documentadas da plataforma. Não se deve presumir que uma mudança de senha invalida automaticamente cada sessão existente. A resposta pode exigir revogar sessões, tokens ou credenciais específicas, além de redefinir a senha.

### Localização e rede

Localização aproximada, endereço IP, ASN, provedor, proxy, VPN e rede de origem podem contribuir para a avaliação. Uma alteração súbita de região, um provedor residencial novo ou acessos aparentemente distantes em pouco tempo podem gerar uma hipótese de uso por terceiros. No entanto, geolocalização de IP não equivale à localização física do usuário. VPNs, gateways de saída, redes móveis, serviços de privacidade e pontos de presença em nuvem podem fazer uma sessão parecer vir de outro lugar.

### Atividade após o login

Ações posteriores costumam ser mais esclarecedoras que a autenticação isolada. Verifique se a identidade acessou aplicações novas, recursos sensíveis, repositórios ou pastas fora de sua rotina. Procure consultas em grande volume, exportações, downloads, criação de regras de encaminhamento, inclusão de destinatários, mudanças de compartilhamento, consentimento de aplicações, criação de chaves, alteração de políticas e operações administrativas que não condizem com o papel da conta.

## Que evidências consultar e como preservá-las?

Comece pelas fontes que respondem às perguntas da ocorrência, não por uma coleta indiscriminada. Para autenticação, consulte o provedor de identidade: início e falha de login, método usado, desafio de MFA, políticas avaliadas, risco atribuído, emissão de sessão e alterações de credencial. Para a conta, consulte diretório e processo de identidade: criação, bloqueio, redefinição, grupos, privilégios, delegações e dados de recuperação. Para o dispositivo, use inventário e telemetria de endpoint, quando disponíveis. Para o impacto, consulte os registros das aplicações e dos recursos acessados.

Registros de rede podem acrescentar endereço de origem, resolução de nomes, conexões e passagem por VPN ou proxy. Eles não devem ser interpretados como substitutos dos registros de identidade: um endereço compartilhado não determina quem usou uma conta. Da mesma forma, dados do navegador ou do endpoint podem mostrar presença de software ou estado do equipamento, mas não confirmam por si só quem estava diante da tela. A força de uma conclusão vem da combinação de fontes independentes e da qualidade do vínculo entre elas.

Preserve os registros antes que a retenção os remova. Anote a zona de horário de cada sistema, a diferença entre horário local e UTC, o identificador da conta, o identificador de sessão, o recurso e os filtros usados. Mantenha a cópia original conforme o procedimento interno, restrinja acesso e registre quem coletou e quando. Se um dado foi normalizado ou agregado, preserve também a origem ou documente a transformação. A equipe precisa conseguir reconstruir a consulta sem expor informação desnecessária.

## Como decidir entre observar, conter e recuperar?

A resposta depende da confiança na hipótese, do impacto potencial e do custo operacional da intervenção. Um alerta de baixa confiança pode justificar enriquecimento e contato com o usuário. Uma confirmação de MFA não reconhecida, combinada com um dispositivo novo e ações privilegiadas, pode justificar contenção imediata conforme o plano da organização. Entre esses extremos há opções graduais: exigir nova autenticação, limitar temporariamente um recurso, revogar sessões, remover um método recém-adicionado, suspender uma aplicação ou escalar a decisão a quem responde pelo serviço.

Antes de bloquear uma identidade crítica, identifique as dependências. Uma conta de emergência, uma identidade de serviço ou o único administrador de um sistema pode sustentar operação essencial. Isso não torna a conta imune à contenção; exige coordenar a medida com o plano de continuidade e garantir acesso alternativo autorizado. Em alguns casos, revogar sessões e segredos específicos preserva a operação melhor do que desabilitar a identidade inteira. Em outros, a prioridade é interromper o uso imediatamente. A decisão deve refletir evidências e impacto, não apenas a gravidade aparente do alerta.

A comunicação precisa ser objetiva. Pergunte se a pessoa reconhece a atividade, o horário, o dispositivo, a solicitação de MFA e as mudanças notificadas. Evite sugerir respostas ou divulgar hipóteses sensíveis antes de obter o relato. O usuário pode fornecer contexto útil, mas sua confirmação não substitui os registros; tampouco a falta de resposta prova comprometimento. Registre a hora e o canal do contato, a resposta recebida e eventuais limitações para falar com a pessoa.

## Quem participa da investigação?

O centro de operações de segurança monitora sinais, correlaciona eventos e mantém a linha temporal. A equipe de identidade conhece os fluxos de autenticação, recuperação, diretórios e revogação. Operações de endpoint verifica o estado do dispositivo e sua relação com a conta. Donos de aplicações explicam eventos específicos, criticidade dos dados e comportamento esperado. A gestão do serviço avalia dependências e continuidade. Privacidade, jurídico ou recursos humanos podem ser envolvidos conforme a natureza da coleta e as regras da organização, sem transformar uma investigação técnica em conclusão sobre a conduta de alguém.

Defina antecipadamente quem autoriza cada intervenção. Analistas podem ter permissão para enriquecer eventos, enquanto bloquear uma conta administrativa pode exigir aprovação de plantão. A demora de uma decisão não deve ser improvisada durante uma crise: mantenha caminhos de escalonamento e substitutos para horários sem cobertura. Para contas de serviço, inclua o responsável técnico e o dono do sistema, porque a equipe de identidade pode não conhecer todos os efeitos de uma suspensão.

## Como cenários contrastantes mudam a interpretação?

### Hipótese: viagem legítima com acesso fora do padrão

Em um cenário hipotético, uma pessoa que normalmente acessa a partir da sede inicia uma sessão durante uma viagem. O provedor indica outra região e o horário local parece incomum para o histórico. Esses sinais justificam verificação, mas não bastam para classificar a conta como comprometida. A pessoa confirma a viagem; o dispositivo gerenciado mantém o mesmo identificador; o método de MFA é o habitual; e os recursos acessados correspondem às tarefas esperadas. A rede de saída é compatível com o serviço de VPN utilizado pela organização.

### Hipótese: sessão nova com fator alterado e acesso administrativo

Em outro cenário hipotético, uma conta recebe uma redefinição que o titular não reconhece. Em seguida, surge um método de MFA novo, uma autenticação de dispositivo desconhecido e uma alteração de grupo privilegiado. O titular nega a solicitação; o provedor registra uma sequência temporal compatível; e os logs do diretório confirmam a mudança de grupo. A localização estimada também difere do padrão, embora sua precisão seja incerta.

### Hipótese: falhas numerosas sem sucesso confirmado

Considere um cenário hipotético em que uma conta apresenta muitas autenticações recusadas em um curto intervalo, sem evento de sucesso nos registros consultados. O padrão pode indicar tentativa de adivinhar credenciais, senha antiga sincronizada em um dispositivo ou uma aplicação configurada incorretamente. O fato confirmado é a série de recusas. Não há base para dizer que a senha foi descoberta se não existe sucesso registrado, mas a equipe deve verificar a abrangência e a retenção das fontes antes de concluir que não houve acesso.

### Hipótese: conta de serviço fora do ritmo esperado

Uma conta técnica pode autenticar em horários contínuos, de múltiplos servidores ou sem MFA interativo. Aplicar a ela a linha de base de um usuário humano produziria falsos alertas. Em cenário hipotético, a conta começa a acessar um novo repositório após uma alteração de configuração. A mudança pode ser explicada por uma implantação, mas também pode indicar uso indevido de uma chave ou segredo.

## Erros comuns que enfraquecem a análise

Um erro recorrente é transformar geolocalização em prova. IPs podem representar saída centralizada, VPN, rede móvel ou infraestrutura compartilhada. A região estimada serve para orientar perguntas, com indicação da fonte e da incerteza. Outra falha é usar “login bem-sucedido” como sinônimo de “usuário legítimo presente”. O sistema validou fatores segundo suas regras; a identidade física por trás da sessão continua sendo uma questão separada.

Também é arriscado presumir que MFA torna impossível a tomada de conta. O MFA reduz certos riscos e pode elevar a confiança, mas os sinais de aprovação, os métodos cadastrados e os fluxos de recuperação ainda precisam de contexto. Uma aprovação não reconhecida é relevante; uma aprovação reconhecida também não encerra a investigação se há atividade incompatível posterior. Não use a existência de MFA como motivo para descartar outros eventos.

Outra armadilha é agir somente sobre a senha. Sessões existentes, tokens, fatores, chaves de aplicação e permissões podem permanecer válidos ou alterados. A resposta deve mapear o que a plataforma permite revogar e confirmar o efeito da ação. No extremo oposto, bloquear tudo antes de entender dependências pode interromper produção, atendimento ou recuperação. Para decisões urgentes, aplique o plano de contenção previamente definido e registre as limitações de contexto.

A correlação por nome de usuário também pode falhar. Nomes podem ser renomeados, reutilizados ou aparecer em sistemas com identificadores diferentes. Use identificadores estáveis quando disponíveis, como ID interno da conta, ID da sessão e objeto afetado. Confira as zonas de horário e atrasos de ingestão: eventos fora de ordem podem criar uma sequência aparente que nunca ocorreu. Documente a incerteza em vez de ajustar horários silenciosamente.

## Como avaliar a qualidade da conclusão?

Avalie a hipótese por convergência e independência dos sinais. Horário incomum, localização incomum e IP novo podem derivar todos da mesma mudança de rede, portanto não representam necessariamente três confirmações separadas. Já um relato do titular, uma alteração registrada no diretório e uma sessão de dispositivo não gerenciado são fontes de naturezas diferentes. A equipe não precisa calcular uma pontuação fictícia: pode declarar confiança baixa, moderada ou alta e explicar quais fatos elevaram ou reduziram essa avaliação.

## Exercício de mesa autorizado

Um exercício de mesa pode testar decisões sem tocar em contas reais. Use identidades fictícias e dados sintéticos, em ambiente controlado, com autorização dos responsáveis. Não use credenciais de funcionários nem tente reproduzir acesso contra serviços externos. O facilitador apresenta evidências em etapas, de modo que a equipe precise revisar hipóteses à medida que o contexto cresce.

Na primeira etapa, apresente um login fora do horário usual, com região diferente e sucesso de MFA. Peça ao grupo que separe fatos, hipóteses e perguntas pendentes.

Na segunda etapa, informe que o titular não reconhece a notificação e que um fator foi incluído pouco antes do login. Pergunte quais fontes devem ser preservadas, quem autoriza revogação e como manter acesso administrativo de emergência. Na terceira, acrescente um evento de alteração de grupo e acessos a uma aplicação sensível. O grupo deve revisar a confiança, delimitar o escopo, acionar os donos dos sistemas e identificar ações imediatas e ações que dependem de evidência adicional.

Ao encerrar, revise a linha temporal, os pontos de decisão, os responsáveis e a clareza da comunicação. Pergunte se a equipe sabe revogar sessões e credenciais relevantes, se consegue obter logs sem depender de uma pessoa específica e se conhece o caminho para aprovar contenção de uma conta crítica. O exercício deve produzir melhorias concretas em procedimentos, contatos, retenção ou cobertura de dados. Não é uma prova de desempenho individual nem uma promessa de que um cenário futuro será resolvido da mesma forma.

## Roteiro de implementação para uma equipe defensiva

### 1. Defina o escopo e as identidades prioritárias

Liste os provedores de identidade, diretórios, aplicações críticas, ambientes de nuvem, VPNs e sistemas administrativos. Identifique contas humanas privilegiadas, contas de emergência, contas de serviço e identidades com acesso a dados relevantes. Para cada classe, registre proprietário, função, dependências, método de autenticação esperado e procedimento de recuperação. Um inventário incompleto limita a qualidade de qualquer detecção.

Defina o que a organização considera atividade sensível e quais ações exigem escalonamento. Exemplos incluem alteração de fatores, criação de credenciais de aplicação, concessão de privilégio, mudança de dados de recuperação, acesso administrativo de dispositivo novo e exportação volumosa fora da rotina. A definição deve refletir os serviços existentes e a função da identidade. Não copie uma lista genérica sem validar se os eventos são observáveis e relevantes no ambiente.

### 2. Confirme a disponibilidade e a retenção dos registros

Para cada fonte, determine quais eventos são coletados, com que atraso, por quanto tempo permanecem disponíveis e quem pode consultá-los. Verifique se os eventos de sucesso e falha, mudanças de fator, emissão e revogação de sessão, alterações de grupo e ações das aplicações chegam ao ponto de análise. Identifique aplicações que não fornecem os detalhes necessários e estabeleça como obter registros durante uma investigação.

### 3. Construa contexto de uso esperado

Use linhas de base com cautela. O histórico ajuda a detectar mudanças, mas não deve congelar o comportamento de alguém em um padrão antigo. Incorpore função, plantões, viagens, equipes distribuídas, atualizações de dispositivo, períodos de fechamento, mudanças aprovadas e trabalho sazonal. Para identidades técnicas, compare origem e ritmo com a finalidade do serviço, não com o comportamento de usuários.

### 4. Crie detecções em torno de sequências

Comece por detecções que conectem mudanças de autenticação com ações posteriores: novo fator seguido de sessão; redefinição não reconhecida seguida de acesso; dispositivo novo seguido de alteração privilegiada; falhas repetidas seguidas de sucesso e consulta a recurso sensível; ou sessão nova que acessa aplicações fora do histórico. Cada regra precisa indicar a população a que se aplica, a fonte usada, a janela considerada e a resposta inicial recomendada.

### 5. Prepare resposta e recuperação

Defina como contatar o titular, validar uma solicitação, suspender ou limitar acesso, revogar sessões e revisar fatores. Mapeie os passos específicos por provedor e registre quem está autorizado a executá-los. Para identidades críticas, teste caminhos de acesso alternativo e coordenação com os donos dos sistemas. Garanta que a recuperação remova métodos ou permissões adicionados indevidamente e que a nova autenticação seja feita por canal confiável.

## Perguntas frequentes

### Um login válido confirma que foi o titular?

Não. Confirma que o provedor aceitou os fatores e condições registrados. Quem operou o dispositivo exige contexto adicional, como validação do titular, estado do equipamento e atividade posterior.

### Localização diferente exige bloqueio?

Não por si só. VPN, mobilidade, rede móvel e saídas centralizadas podem explicar a diferença. Combine localização estimada com dispositivo, método de autenticação, mudanças de conta e ações realizadas; considere também o impacto de uma contenção.

### MFA impede o comprometimento?

MFA reduz riscos ligados apenas à senha, mas não torna impossível o uso indevido de uma identidade ou sessão. Avalie métodos cadastrados, aprovações não reconhecidas, recuperação, sessões e tokens. Uma aprovação registrada não prova, sozinha, a presença do titular.

### Trocar a senha encerra a investigação?

Não necessariamente. Sessões, tokens, fatores, chaves ou permissões podem continuar válidos. Confirme o comportamento do serviço, revogue os elementos pertinentes e investigue as ações antes e depois da troca.

### O que fazer se os registros forem incompletos?

Declare as fontes e períodos consultados e as lacunas existentes. Preserve o que está disponível e procure fontes que possam corroborar a linha temporal. Não trate falta de telemetria como prova de ausência; registre a base e a incerteza de qualquer decisão de contenção.

### Como avaliar uma conta de serviço?

Identifique finalidade, proprietário, origens, credenciais, permissões e mudanças previstas. Compare a atividade com implantações legítimas, sem aplicar automaticamente padrões de horário de usuários. Coordene rotação ou revogação com o dono do serviço e verifique dependências.

### O que diferencia alerta de evidência?

Alerta prioriza análise; evidência sustenta uma afirmação delimitada e tem origem e contexto conhecidos. Um alerta pode levar a evidências, e uma evidência pode não esclarecer intenção. Relatórios devem preservar essa distinção.

## Leitura relacionada ao capítulo

O capítulo 6, “Black Teams na identificação e resposta a incidentes”, do livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece uma relação editorial pertinente para pensar a atuação coordenada na identificação e na resposta. Neste tema, essa relação ajuda a situar a análise de sinais de credenciais dentro de um processo de equipe: perceber, validar, decidir, conter e aprender. O livro pode apoiar a reflexão sobre papéis e resposta, mas não substitui documentação técnica atualizada dos provedores, treinamento prático nem o julgamento da equipe diante das evidências concretas de cada ambiente.
