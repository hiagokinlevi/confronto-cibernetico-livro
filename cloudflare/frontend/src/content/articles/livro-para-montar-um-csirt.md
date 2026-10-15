# Livro para montar um CSIRT

## A pergunta que vem antes da escolha do livro

A pergunta central não é apenas “qual livro ensina a montar um CSIRT?”. É: que capacidade de resposta a organização precisa criar, para quais pessoas e sistemas, em quais horários, com que autoridade e com quais limites? A resposta muda o material de estudo que será útil. Uma equipe que recebe relatos de phishing em horário comercial tem necessidades diferentes de um serviço que coordena incidentes em uma operação contínua, atende várias empresas ou precisa manter comunicação com reguladores e fornecedores.

CSIRT é a sigla consagrada para equipe de resposta a incidentes de segurança computacional. O nome, por si só, não define uma estrutura universal, uma certificação, um tamanho mínimo ou um conjunto fixo de serviços. Pode designar uma equipe interna, um serviço compartilhado, uma unidade de coordenação ou uma equipe com responsabilidades técnicas operacionais. O mandato e os acordos de serviço determinam o que o time realmente faz. Por isso, escolher uma leitura sem antes explicitar o problema tende a produzir uma estante correta e uma operação ambígua.

Um bom livro oferece vocabulário, modelos mentais e questões para debate. Ele não determina que a organização copie um organograma, adote todos os serviços descritos ou declare cobertura ininterrupta sem pessoas e processos para sustentá-la. O estudo deve ajudar a formular decisões que possam ser registradas, testadas em exercícios e revistas quando o ambiente mudar.
## O que é um CSIRT e o que não é

Um CSIRT é uma capacidade organizada para lidar com incidentes de segurança dentro de um escopo estabelecido. “Lidar” pode incluir receber notificações, avaliar relatos, coordenar análise, orientar contenção, acompanhar recuperação, comunicar riscos, reunir evidências e produzir aprendizado. Não se presume que uma única equipe execute cada atividade. Em organizações maduras, funções de operação, infraestrutura, privacidade, jurídico, comunicação e gestão podem participar em momentos diferentes, sob coordenação definida.

A equipe não é automaticamente um centro de operações de segurança (SOC), embora os dois possam compartilhar pessoas e processos. Um SOC costuma monitorar sinais e eventos, enquanto o CSIRT organiza a resposta a incidentes confirmados ou suspeitos e coordena as partes envolvidas. Na prática, as fronteiras variam. Uma mesma unidade pode realizar ambas as funções, desde que cada responsabilidade, fila de trabalho e autoridade seja compreensível. Chamar uma equipe de CSIRT não cria por si só plantão, telemetria, competência forense ou poder para interromper um serviço.

Também não é simplesmente um grupo de especialistas reunidos quando há crise. Sem um canal de entrada, critérios de classificação, responsáveis por decisões e rotas de escalonamento, a resposta depende de contatos pessoais e memória. Isso torna mais provável que um relato fique sem dono, que duas áreas atuem em direções distintas ou que uma decisão urgente seja tomada por alguém sem autoridade. A estrutura existe para tornar a cooperação previsível, não para substituir o conhecimento técnico das áreas responsáveis pelos sistemas.
## O contexto que define a capacidade necessária

A primeira tarefa é descrever o ambiente atendido em linguagem concreta. Quais unidades, localidades, serviços digitais, ambientes em nuvem, redes industriais, dispositivos e terceiros entram no escopo? O time atende empregados, clientes, parceiros ou outras organizações? Quem pode abrir um chamado? Há sistemas cuja indisponibilidade afeta segurança física, atendimento essencial, obrigações contratuais ou proteção de dados? As respostas revelam dependências que um desenho genérico não mostra.

Em seguida, identifique as fontes de risco e as restrições operacionais relevantes. A organização pode depender de um provedor que controla registros, de um fabricante que autoriza mudanças, de uma equipe terceirizada que atende fora do expediente ou de uma área que mantém aplicações antigas sem inventário completo. Esses fatos não provam que um incidente ocorrerá. Eles indicam onde a equipe pode encontrar atrasos, lacunas de visibilidade ou limites de autoridade caso precise agir.

O perfil de risco deve orientar prioridades, sem transformar hipóteses em fatos. Uma empresa que mantém dados pessoais em diversos ambientes pode considerar cenários de acesso indevido e exposição; uma instituição com atendimento essencial pode priorizar continuidade; um fabricante pode incluir propriedade intelectual e cadeia de fornecimento. Isso não significa que tais eventos estejam presentes. São perguntas para avaliar impacto, preparar relações internas e decidir quais serviços fazem sentido.
## Definir mandato, escopo e autoridade

O mandato é a declaração de por que a equipe existe, a quem atende, quais responsabilidades assume e quais limites respeita. Deve ser aprovado por quem pode comprometer recursos e resolver conflitos entre áreas. Um texto como “proteger a organização contra ameaças” é amplo demais para orientar uma madrugada de crise. Um mandato útil esclarece o que conta como incidente, quais ambientes estão cobertos, que tipos de apoio são oferecidos, como o atendimento começa e quais decisões continuam pertencendo aos donos do serviço.

Escopo e autoridade devem ser tratados em conjunto. O time pode ter autorização para analisar determinados registros, recomendar bloqueio de uma conta ou coordenar a coleta de evidências, mas não necessariamente para desligar sistemas, suspender uma conta executiva, alterar controles de produção ou notificar clientes. O documento precisa indicar a autoridade delegada, as aprovações necessárias e a rota para obter decisão fora do horário normal. A urgência não torna implícita uma autorização que nunca foi acordada.

Uma forma prática de evitar ambiguidades é registrar decisões típicas, seus responsáveis e substitutos. Quem pode classificar um caso como incidente relevante? Quem autoriza isolar um equipamento? Quem aceita uma interrupção de serviço? Quem determina se há obrigação de envolver privacidade, jurídico ou segurança física? Quem pode falar em nome da organização? As respostas podem variar conforme gravidade e contexto. O valor está em torná-las acessíveis antes que o tempo esteja curto.
## Serviços: transformar intenção em trabalho observável

A lista de serviços converte o mandato em tarefas reconhecíveis. A FIRST publica um framework de serviços para equipes de segurança, útil como referência para pensar categorias e atividades. Ele pode apoiar a conversa sobre o que oferecer, como descrever o serviço e que interfaces serão necessárias. A organização ainda precisa selecionar e adaptar os serviços ao próprio contexto; uma lista de referência não constitui uma exigência universal nem prova de que uma equipe já tem capacidade para executá-los.

Entre as atividades que uma equipe pode considerar estão receber notificações, triar relatos, coordenar a resposta, apoiar análise técnica, orientar contenção e recuperação, compartilhar informações sobre ameaças, auxiliar na gestão de vulnerabilidades e promover conscientização. Cada atividade precisa de um destinatário, um canal, um responsável, condições de acionamento e um resultado esperado. Por exemplo, “apoio à resposta” é pouco preciso se não está claro se significa aconselhamento remoto, coordenação entre áreas, análise direta ou execução de mudanças.

Nem todos os serviços precisam nascer juntos. Uma equipe pode começar com intake, classificação, coordenação e encaminhamento, apoiada por especialistas de infraestrutura, aplicações e privacidade. Depois, pode ampliar análise própria ou cobertura horária se houver justificativa, orçamento, ferramentas e treinamento. A expansão deve seguir uma decisão explícita sobre capacidade, não a pressão de uma descrição de cargo que promete tudo.
## Pessoas e papéis na resposta

Uma operação precisa de papéis claros, ainda que uma pessoa acumule mais de um. O coordenador do incidente mantém o quadro de situação, organiza as ações, registra decisões e acompanha dependências. Analistas avaliam relatos e evidências técnicas dentro de sua competência. Responsáveis pelos sistemas explicam arquitetura e impacto, aplicam mudanças autorizadas e verificam o funcionamento após a recuperação. O gestor do serviço ajuda a pesar risco e continuidade. Esses papéis podem pertencer a equipes distintas, mas não devem ficar sem responsável identificado.

A liderança executiva ou o patrocinador resolve conflitos de prioridade, assegura recursos e decide riscos que ultrapassam a autoridade delegada. Segurança da informação orienta controles e risco técnico; infraestrutura, nuvem e desenvolvimento oferecem conhecimento dos ambientes; privacidade avalia questões relacionadas a dados pessoais e obrigações aplicáveis; jurídico orienta preservação, contratos e comunicações com implicações legais. Comunicação prepara mensagens consistentes para públicos internos e externos quando autorizada. Recursos humanos, continuidade, atendimento ao cliente, compras e segurança física podem ser chamados conforme o impacto.
## Escalonamento, comunicação e registro

O escalonamento é a transição de um relato ou incidente para pessoas com maior competência, autoridade ou capacidade de resposta. Critérios úteis podem considerar impacto potencial, número de serviços afetados, duração, confiança das evidências, possibilidade de propagação, dados envolvidos e risco à segurança física. A classificação inicial é provisória: um alerta pode se mostrar benigno, e um caso aparentemente pequeno pode ganhar relevância com novas informações. O processo precisa permitir reavaliar prioridade e registrar por que ela mudou.

Um fluxo simples começa quando alguém envia um relato por canal conhecido. A equipe confirma o recebimento, registra hora e origem, identifica os ativos e serviços citados, faz perguntas de triagem e decide se deve encaminhar, acompanhar ou iniciar coordenação. Se houver suspeita que justifique investigação, define-se um responsável pelo caso e os próximos passos autorizados. A área dona do sistema recebe instrução compatível com sua função, e decisões que superam a delegação seguem para o aprovador apropriado.

O registro do caso deve separar observação, interpretação e decisão. “O sistema registrou autenticação de uma origem incomum às 02h” descreve um dado; “a conta foi comprometida” é uma hipótese até haver evidência suficiente; “suspender a sessão” pode ser uma ação decidida por autoridade competente. Essa distinção evita que alertas sejam tratados como prova e que uma avaliação provisória seja repetida depois como fato confirmado.
## Evidências: fontes, limites e interpretação

Uma resposta depende de fontes de evidência pertinentes ao ambiente. Podem incluir registros de autenticação, trilhas de auditoria de nuvem, telemetria de endpoint, alertas de rede, registros de aplicações, chamados de suporte, inventário, configurações de identidade, imagens autorizadas e relatos de usuários. A disponibilidade, integridade, cobertura e retenção dessas fontes variam. Um painel vazio não prova ausência de atividade; pode refletir uma lacuna de coleta, atraso de ingestão ou período de retenção insuficiente.

A equipe deve saber quem administra cada fonte, como solicitar acesso e quanto tempo os dados permanecem disponíveis. Uma lista de fontes essenciais com responsável e procedimento de preservação reduz o risco de descobrir, durante a apuração, que um fornecedor já descartou os registros necessários. Isso não implica coletar tudo preventivamente. A seleção depende do objetivo, da base autorizadora, do risco de exposição e das regras de privacidade e retenção adotadas pela organização.

A qualidade de um achado depende do contexto. Um endereço IP, uma sequência de falhas de autenticação ou um alerta de antivírus, isoladamente, pode ter explicações legítimas. Correlacionar horários, identidade, ativo, mudança recente e atividade de negócio pode fortalecer ou enfraquecer uma hipótese. O analista deve anotar a origem, o horário e as limitações da informação, inclusive relógios desalinhados, nomes ambíguos de ativos ou campos que o sistema não registra.
## Cenários hipotéticos e respostas distintas

Considere, hipoteticamente, um alerta de acesso incomum a uma conta corporativa. Em um contexto, a equipe confirma com a pessoa usuária que houve uma viagem e valida a atividade com registros adicionais. O caso pode ser encaminhado para revisão de configuração e monitoramento, com registro do raciocínio. Em outro, a conta executa ações administrativas fora do padrão e há sinais correlacionados em um serviço crítico. O coordenador aciona identidade, dono do serviço e aprovador de contenção; a equipe avalia sessões, impacto e opções de redução de risco dentro da autoridade acordada.

Os dois casos começam com um alerta parecido, mas não pedem a mesma resposta. O alerta é um sinal, não uma conclusão. No segundo cenário hipotético, pode ser apropriado revogar sessões ou suspender credenciais, mas a medida precisa considerar contas de serviço, continuidade, acesso de recuperação e aprovação. Se a conta for compartilhada ou sustentar uma função essencial, a contenção descuidada pode interromper operação legítima. A decisão deve ser documentada com as alternativas e os riscos avaliados.
## Erros comuns ao estruturar a equipe

Um erro frequente é adotar um organograma de referência e presumir que a mesma configuração serve a qualquer ambiente. Organogramas mostram linhas de reporte, mas raramente explicam o que acontece quando a equipe de resposta não pode alterar um serviço, o fornecedor não atende no horário necessário ou a pessoa que aprova está indisponível. Comece pelas decisões e interfaces; desenhe cargos e reporte em seguida, se isso ajudar a sustentar as responsabilidades.

Outro erro é prometer cobertura 24 horas sem avaliar escala, substituição, fadiga, canais, ferramentas e apoio técnico. Um número de telefone publicado não equivale a capacidade de responder. Se a equipe só funciona em horário comercial, isso pode ser uma decisão legítima, desde que exista um caminho para eventos urgentes, uma definição de prioridade e expectativa clara para as áreas atendidas. Cobertura ampliada deve vir acompanhada de recursos e regras de operação.

Também é comum confundir alerta com incidente confirmado, ou presumir que toda anomalia é maliciosa. Isso pode produzir contenções precipitadas, interrupções evitáveis e acusações sem base. O extremo oposto é esperar certeza completa antes de escalar, mesmo quando o impacto possível exige ação preventiva. Defina uma linguagem de confiança, diferencie suspeita de confirmação e permita decisões cautelares proporcionais, registradas como tais.
## Como avaliar uma leitura técnica

Antes de comprar, verifique se a obra aborda organização e coordenação de equipes, e não apenas técnicas de análise ou uma narrativa sobre ameaças. Para a necessidade de montar capacidade, são úteis discussões sobre mandato, catálogo de serviços, papéis, comunicação, fluxo de incidentes e relação com outras áreas. Um texto pode ser valioso em um desses tópicos sem cobrir todos; identifique qual lacuna de conhecimento pretende preencher.

Observe a data e o contexto da edição. Conceitos de governança e coordenação podem conservar utilidade, enquanto procedimentos técnicos, nomes de produtos, requisitos regulatórios e recursos de plataformas mudam. Avalie se o conteúdo apresenta princípios que podem ser adaptados e se deixa claras suas premissas. Quando uma passagem recomenda estrutura, pergunte para que tamanho de organização, setor, regime de trabalho e nível de autoridade ela foi pensada.

Uma boa leitura pode ser testada por perguntas que a equipe consegue responder depois de cada capítulo: que decisão está em jogo? Qual função precisa participar? Que evidência sustenta a escolha? Que parte depende do contexto local? Como isso seria exercitado sem afetar produção? Se o livro oferece um modelo, o grupo deve conseguir identificar entradas, limites e adaptações necessárias em vez de copiá-lo como receita.
## Exercício de mesa sem risco à produção

Um exercício de mesa é uma conversa guiada em que participantes recebem uma situação fictícia, discutem decisões e registram dúvidas. Ele permite examinar coordenação sem executar ações em sistemas reais. Para manter o exercício seguro, deixe claro que todos os nomes, contas, alertas e eventos são hipotéticos; não use credenciais, dados pessoais reais, indicadores que possam ser confundidos com uma ameaça ativa ou comandos em ambiente de produção.

Monte um cenário compatível com o escopo da equipe. Por exemplo, hipoteticamente, o time recebe relato de que um usuário não reconhece uma sessão em uma aplicação corporativa. Depois de discutir a triagem, o facilitador acrescenta informação fictícia: há atividade administrativa incomum e o dono do sistema não responde imediatamente. Em seguida, apresenta outra complicação, como indisponibilidade parcial ou dependência de um fornecedor. Cada nova informação deve provocar uma decisão ou revelar uma lacuna, não premiar quem adivinha uma resposta predeterminada.

Convide representantes de resposta, identidade, operações, dono do serviço, privacidade, jurídico, comunicação e liderança conforme o cenário. Pergunte quem reconhece o relato, quem coordena, quais fontes autorizadas podem ser consultadas, como a prioridade muda, quem aprova contenção e que mensagem pode ser enviada. Se a equipe não souber responder, registre a pergunta como lacuna de processo, informação ou autoridade; não resolva improvisando uma regra que ninguém aprovou.
## Critérios para avaliar se a estrutura é utilizável

Uma equipe consegue explicar o escopo sem depender de uma pessoa específica? As áreas atendidas sabem como enviar um relato e o que esperar do retorno? Existe responsável pelo caso e rota de escalonamento quando o primeiro contato falha? As decisões de contenção têm autoridade e alternativa de substituição? Essas perguntas avaliam clareza de operação melhor do que um organograma isolado.

É possível identificar, para cada serviço, entradas, responsáveis, condições de atendimento e limites? A equipe sabe quais fontes de evidência estão disponíveis, quem as mantém e quais lacunas permanecem? Fornecedores e áreas internas conhecem a forma de acionamento? A resposta a essas perguntas pode ser documentada em fichas de serviço, mapas de dependências, fluxos e registros de exercício. Não é preciso transformar cada dimensão em uma nota numérica para torná-la revisável.

Observe também sinais de capacidade sustentável: pessoas treinadas e substitutos; contatos atualizados; documentação acessível durante uma ocorrência; turnos e sobreaviso compatíveis com a promessa feita; tempo protegido para revisar casos e exercícios; apoio de liderança para resolver conflitos. Se esses elementos não existem, a decisão correta pode ser reduzir escopo, contratar apoio, capacitar funções parceiras ou fasear a implantação. A avaliação deve expor a diferença entre capacidade pretendida e disponível.
## Roteiro de implementação em etapas

Comece com uma oficina de escopo. Reúna patrocinador, segurança, tecnologia, áreas de negócio e funções de apoio. Liste sistemas e grupos atendidos, dependências externas, períodos de cobertura e tipos de demanda. Separe fatos confirmados de suposições. Se o inventário estiver incompleto, registre a lacuna e identifique quem pode verificá-la, em vez de apresentar o mapa como completo.

Em seguida, escreva um mandato breve e selecione os serviços iniciais. Para cada serviço, defina usuário, canal, responsável, horário, condições, limite e rota de escalonamento. Compare essa lista com o framework de serviços da FIRST para encontrar categorias não consideradas, sem tratar a referência como checklist obrigatório. Valide as escolhas com quem vai operar e com as áreas que dependem delas.

Depois, acorde papéis e autoridade. Registre quem coordena, quem investiga, quem controla cada sistema, quem autoriza ações com impacto e quem comunica. Defina substitutos e como contatá-los. Combine a participação de privacidade, jurídico, comunicação e fornecedores de acordo com gatilhos que sejam compreensíveis. Encaminhe as regras a quem tem competência para aprová-las.
## O papel de um livro na formação do CSIRT

Um livro pode oferecer uma estrutura para pensar a equipe, ajudar a comparar modelos e fornecer linguagem comum para uma conversa entre segurança, tecnologia e negócio. A leitura rende mais quando cada tópico é confrontado com documentos reais da organização: inventário, política de incidentes, contratos, catálogo de serviços, escalas, contatos e exercícios. O grupo pode anotar o que se aplica, o que exige adaptação e o que depende de confirmação. Essa prática transforma estudo em decisões verificáveis.

Para o capítulo 7 da versão original, sobre estrutura, papéis e coordenação do Black Team, a discussão mais útil é como distribuir responsabilidades e articular a resposta sem presumir que todas as funções cabem na equipe central. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como material de estudo relacionado a esse tema. A utilidade para uma organização específica depende de cotejar as ideias com o seu mandato, serviços, recursos e regras. A obra não substitui documentação técnica atualizada, treinamento, exercícios nem julgamento da equipe.
## Perguntas frequentes

### É necessário criar uma equipe separada chamada CSIRT?

Não necessariamente.

### Uma equipe pequena pode responder a incidentes?

Pode começar com escopo limitado e apoio combinado de outras áreas.

### O CSIRT precisa funcionar 24 horas por dia?

Não existe uma resposta única.

### Todo alerta de segurança deve virar incidente?

Não.

### O time deve executar a contenção técnica?

Depende do mandato, das habilidades e da autoridade.

### Qual é a diferença entre coordenação e investigação?

Coordenação mantém participantes, prioridades, decisões e situação alinhados.

### Como saber se uma leitura ainda serve?

Verifique a data, o propósito, o contexto e quais recomendações dependem de tecnologia ou regra atual.

### Por onde começar se ainda não há processo formal?

Comece com patrocinador, escopo, canal de relato, responsável de coordenação, contatos das áreas críticas e critérios de escalonamento.
## Uma estrutura que possa ser usada sob pressão

Montar um CSIRT é definir uma capacidade social e operacional: pessoas precisam saber como entrar em contato, quem assume a coordenação, quais decisões podem tomar e como obter ajuda de quem controla cada sistema. Mandato, serviços, evidências, autoridade e comunicação formam um conjunto. Se um desses elementos faltar, o restante pode parecer completo no papel e ainda falhar na hora de coordenar.

A leitura técnica tem valor quando torna essas escolhas mais explícitas. Antes de selecionar uma obra, formule as perguntas do contexto; durante o estudo, converta modelos em hipóteses a validar; depois, leve as decisões a documentos e exercícios. O resultado desejável não é um organograma idêntico ao de uma referência, mas uma equipe e uma rede de apoio capazes de explicar seu alcance, reconhecer incerteza e agir dentro de limites acordados.
