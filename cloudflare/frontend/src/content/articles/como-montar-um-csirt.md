# Como montar um CSIRT

## A pergunta que orienta a busca

O que uma organização precisa decidir para que um CSIRT consiga coordenar a resposta a incidentes, em vez de apenas receber alertas e encaminhá-los? A resposta começa antes da compra de uma plataforma: é necessário estabelecer quem a equipe atende, quais eventos estão dentro do seu mandato, que decisões pode tomar ou recomendar e como obter a colaboração de quem controla sistemas, pessoas, contratos e informações.

CSIRT é a sigla de *Computer Security Incident Response Team*, uma equipe organizada para apoiar a prevenção, a análise e a resposta a incidentes de segurança relacionados a computadores e redes. O nome, por si só, não define um modelo único. Algumas equipes oferecem triagem e coordenação; outras também fazem monitoramento, análise técnica, gestão de vulnerabilidades ou apoio a clientes externos. O desenho adequado depende do ambiente, do risco, das obrigações e dos serviços assumidos.

A questão prática, portanto, não é simplesmente quantas pessoas contratar. É como criar uma capacidade confiável, com autoridade proporcional às responsabilidades e limites compreendidos por todos. Uma equipe pequena com escopo explícito, contatos conhecidos e um processo de escalonamento pode ser mais útil do que uma estrutura ampla cuja autoridade, cobertura e relação com as áreas operacionais permaneçam ambíguas.

## Definição, contexto e limites do CSIRT

Um incidente de segurança não é sinônimo de qualquer falha tecnológica. Uma interrupção causada por manutenção, por exemplo, pode ser apenas um problema operacional; pode também exigir avaliação de segurança se houver indício de comprometimento ou se a causa permanecer desconhecida em um contexto de risco. Da mesma maneira, um alerta produzido por uma ferramenta não prova que houve incidente. É um sinal que precisa ser validado, contextualizado e registrado com a incerteza apropriada.

O CSIRT não substitui as equipes que administram os serviços. Infraestrutura, aplicações, identidade, redes, suporte, continuidade e fornecedores costumam manter as competências e os meios para executar mudanças. A função de resposta coordena a compreensão do evento e articula as ações. Em determinados modelos, profissionais do CSIRT também realizam análise ou contenção; isso deve estar definido, autorizado e alinhado às responsabilidades operacionais.

Também não é sinônimo de centro de operações de segurança, ou SOC. Um SOC pode operar monitoramento contínuo e triagem de alertas, enquanto o CSIRT coordena incidentes confirmados ou suspeitos e a resposta entre áreas. Uma mesma equipe pode acumular essas funções, mas precisa distinguir fila de alertas de gestão de incidentes. Sem essa separação conceitual, casos urgentes podem se perder no volume diário, ou toda notificação pode ser tratada como crise.

## Mandato: autoridade que acompanha a responsabilidade

O mandato descreve a finalidade da equipe, o público atendido, os ativos ou serviços cobertos, as atribuições, as limitações e a forma de escalonamento. Deve ser compreensível por quem aciona o CSIRT e por quem terá de responder às solicitações. Uma frase genérica, como “proteger a empresa”, não resolve quem pode aprovar o isolamento de um serviço crítico, preservar registros ou informar a liderança.

A organização deve explicitar quais decisões cabem ao CSIRT, quais ele recomenda e quem tem a palavra final em cada domínio. O time pode classificar e coordenar um incidente sem ter autorização para desligar um sistema. A área proprietária pode aprovar uma alteração operacional, enquanto jurídico ou privacidade avaliam obrigações de comunicação. Em emergência, pode existir uma autoridade delegada para agir dentro de limites predefinidos. Esses arranjos precisam ser acordados antes da pressão do incidente.

## Público atendido e fronteiras do serviço

O escopo responde quem pode receber atendimento e sobre quais ativos, processos e localidades. Uma equipe corporativa pode atender todas as unidades, mas não necessariamente redes de parceiros, clientes, dispositivos pessoais ou subsidiárias com gestão independente. Um CSIRT de provedor pode ter compromissos específicos com clientes. Em todos os casos, a fronteira precisa ser legível para quem relata um problema.

A fronteira contratual é especialmente importante. Se uma evidência estiver em um serviço gerido por fornecedor, o CSIRT pode coordenar o pedido, mas talvez não tenha acesso direto ao ambiente ou poder para determinar como o fornecedor opera. Contratos, contatos de emergência e procedimentos de escalonamento devem esclarecer o suporte disponível, os tempos acordados e as responsabilidades por coleta, preservação e comunicação.

## Serviços que podem compor a capacidade

A lista de serviços transforma o mandato em compromissos concretos. Não é necessário oferecer tudo desde o primeiro dia. É necessário declarar o que está disponível, em que condições e por qual rota, evitando a impressão de cobertura que a equipe ainda não consegue sustentar.

Cada serviço deve esclarecer sua entrada e sua saída. Para triagem: que informações mínimas ajudam, como a equipe pede complementos e como comunica a classificação. Para coordenação: quais áreas participam, quem mantém a cronologia e quem aprova mudanças. Para análise: quais evidências podem ser examinadas, como se preserva a origem e quais limitações técnicas existem. Para encerramento: quais condições indicam que a resposta foi transferida para recuperação ou acompanhamento.

Há diferença entre oferecer aconselhamento e assumir uma tarefa. Se o CSIRT diz que “faz perícia”, as áreas podem esperar coleta forense formal, cadeia de custódia e laudo. Se a equipe somente organiza sinais técnicos para apoiar contenção, deve nomear esse limite. O catálogo evita expectativa indevida e ajuda a identificar capacidades que precisarão de parceiro interno ou externo.

## Evidências: sinais, fontes e grau de confiança

A resposta depende de evidências que permitam entender o que foi observado, quando, em que sistema e por quem. Fontes possíveis incluem relatos de usuários, alertas de ferramentas, registros de autenticação, telemetria de endpoints, eventos de rede, trilhas de auditoria de nuvem, chamados de suporte, inventário de ativos, mudanças autorizadas e informações de fornecedores. A disponibilidade dessas fontes varia; sua presença não garante completude ou precisão.

O CSIRT deve distinguir observação, interpretação e hipótese. “O registro mostra uma autenticação às 02h13” é uma observação sobre uma fonte específica. “A conta foi usada por uma pessoa não autorizada” é uma interpretação que exige contexto adicional. “Houve exfiltração” é uma hipótese até que existam elementos que sustentem a conclusão. Essa separação reduz afirmações prematuras e torna claro o que ainda precisa ser verificado.

Evidência também é informação sensível. O acesso deve seguir necessidade de conhecimento, política de retenção e requisitos legais e contratuais. Cópias não devem circular em canais improvisados ou permanecer em pastas sem controle. Em casos que possam exigir investigação formal, a equipe deve acionar especialistas e seguir os procedimentos aplicáveis de preservação, evitando alterar dados originais sem necessidade ou autorização.

## Papéis e interfaces entre áreas

O CSIRT raramente responde sozinho. Uma estrutura mínima identifica coordenação do incidente, analistas ou triagistas, responsáveis por sistemas, comunicação, assessoria jurídica, privacidade, risco, continuidade e liderança decisora. Em uma equipe pequena, uma pessoa pode cumprir mais de um papel, desde que conflitos, disponibilidade e substituição sejam considerados. Em situações graves, acumular tarefas incompatíveis pode prejudicar a análise e a comunicação.

A coordenação mantém visão comum: objetivo imediato, situação conhecida, incertezas, decisões pendentes, responsáveis e horários de atualização. Isso não significa comandar tecnicamente todas as áreas. O responsável pelo serviço conhece impactos e dependências; o administrador executa mudanças dentro de sua autoridade; o CSIRT ajuda a sincronizar trabalho e registrar efeitos esperados. Liderança resolve trade-offs que ultrapassam o mandato técnico.

Jurídico e privacidade devem ser acionados quando os fatos puderem envolver obrigações, dados pessoais, preservação ou comunicação externa. O CSIRT fornece fatos conhecidos e limitações; não deve transformar suspeitas em conclusões legais. Comunicação corporativa coordena mensagens públicas ou internas conforme política. Recursos humanos pode participar quando houver questões de conduta ou segurança de pessoas, respeitando confidencialidade e processo adequado.

## Gravidade, prioridade e cobertura horária

Níveis de gravidade orientam a urgência e o escalonamento; não são uma medida exata do dano. Uma classificação simples pode considerar impacto observado ou plausível, abrangência, criticidade do serviço, exposição de dados, continuidade, incerteza e possibilidade de agravamento. A equipe precisa conseguir reclassificar quando surgirem novos fatos, registrando a razão e o momento da mudança.

Cada nível precisa associar ações: quem é notificado, qual função coordena, que frequência de atualização é esperada, quais decisões precisam de autoridade superior e quando fornecedores são acionados. O objetivo é evitar que os rótulos “alto” e “crítico” existam sem consequências operacionais. Uma classificação sem rota de decisão cria aparência de processo, mas não remove bloqueios.

Cobertura horária exige uma escolha explícita. Atendimento em horário comercial, sobreaviso e operação contínua têm custos, riscos e requisitos distintos. Uma equipe sem plantão deve publicar um caminho para incidentes fora do expediente, com critério de acionamento e autoridade disponível. Um canal monitorado continuamente não garante, por si só, que haverá especialistas ou aprovadores acordados em todos os horários.

## Cenários contrastantes para testar o desenho

Os dois cenários a seguir são hipotéticos e defensivos. Eles demonstram por que o CSIRT precisa tanto de um caminho rápido para riscos graves quanto de um mecanismo disciplinado para lidar com sinais ambíguos.

No primeiro cenário, o monitoramento identifica logins incomuns associados a uma conta privilegiada em um serviço de negócio importante. O sinal é plausível, mas a equipe ainda não sabe se corresponde a uma atividade autorizada. O CSIRT registra a origem e o período do alerta, aciona o dono da identidade e o responsável pelo serviço, preserva os registros disponíveis conforme o procedimento e verifica mudanças aprovadas e contexto operacional. Se a hipótese de uso não autorizado ganhar sustentação, a equipe reúne a autoridade definida para decidir medidas sobre a conta e acompanha os impactos. O alerta inicial orienta a investigação; ainda não prova comprometimento.

No segundo cenário, uma aplicação apresenta lentidão após uma mudança planejada, enquanto usuários relatam falhas. A proximidade temporal sugere uma possível relação com a mudança, mas não demonstra causa nem exclui atividade maliciosa. O CSIRT consulta o histórico de mudança e as equipes responsáveis, avalia se há sinais de segurança e coordena a análise sem rotular automaticamente a indisponibilidade como ataque. Se os dados apontarem para falha operacional, o caso pode seguir o processo de gestão de serviço, preservando o registro do motivo da decisão e os sinais que foram verificados.

## Erros comuns ao estruturar a equipe

Um erro recorrente é começar por ferramentas e deixar mandato e interfaces para depois. Uma plataforma pode reunir alertas, mas não decide quem autoriza uma contenção, quem informa o jurídico ou como um fornecedor deve responder. A tecnologia deve apoiar um processo definido e ser escolhida conforme volume, integrações, controles de acesso, retenção e capacidade de operação.

Outro erro é prometer disponibilidade 24 horas por dia sem escala sustentável, substitutos ou autoridade de decisão. O resultado pode ser um canal aparentemente emergencial que ninguém atende, ou uma pessoa sobrecarregada que concentra conhecimento e aprovação. A cobertura precisa corresponder a pessoas, procedimentos e orçamento reais.

Também é comum tratar cada alerta como incidente confirmado. Isso aumenta ruído, desgasta as relações com as áreas e pode gerar comunicações precipitadas. O extremo oposto é exigir certeza antes de mobilizar responsáveis, atrasando a contenção. Uma boa triagem explica por que o sinal requer atenção e explicita o nível de confiança, sem confundir cautela com inação.

## Como avaliar se a capacidade funciona

A avaliação começa por evidências do processo, não por uma única pontuação. A organização pode acompanhar se os relatos chegam ao canal apropriado, se a classificação e a reclassificação têm justificativa, se os responsáveis são encontrados, se decisões têm aprovador identificado e se tarefas abertas sobrevivem a trocas de turno. Esses sinais mostram onde o processo falha sem sugerir que qualquer incidente pode ser resolvido em tempo fixo.

Indicadores devem ser definidos com contexto e propósito. Tempo entre recebimento e primeira análise, por exemplo, só é interpretável se a organização definir o que conta como recebimento, análise e horário de cobertura. O volume de casos encerrados não prova qualidade; uma redução pode refletir prevenção melhor, subnotificação ou alteração de escopo. Métricas não devem ser inventadas para parecer precisão, nem usadas isoladamente para comparar equipes com responsabilidades diferentes.

Revisões pós-incidente e de exercícios devem perguntar se o mandato permitiu agir, quais dependências atrasaram a resposta, se as fontes de evidência estavam acessíveis, se as comunicações foram compreendidas e se as decisões respeitaram a autoridade definida. A revisão procura melhorias no sistema de trabalho, além de registrar ações individuais quando necessário. Cada melhoria deve ter responsável, critério de conclusão e acompanhamento.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa permite validar coordenação sem alterar sistemas de produção. Defina previamente objetivo, participantes, duração, cenário fictício, regras de segurança e observadores. Um cenário útil pode começar com um alerta ambíguo em uma conta de serviço e evoluir com informações incompletas sobre impacto e disponibilidade. Os participantes discutem decisões e comunicações; o facilitador introduz atualizações preparadas, sem exigir conhecimento de um incidente real.

Um laboratório técnico autorizado pode testar procedimentos em ambiente isolado e com ativos sob controle da organização. A finalidade pode ser verificar se a equipe consegue localizar registros, documentar uma análise, acionar o dono do sistema e passar o caso a outra equipe. O exercício não deve atingir terceiros nem usar contas, dados ou infraestrutura sem autorização. Se houver ferramenta de simulação, limites e regras devem estar documentados e aprovados pelos responsáveis.

Ao final, registre observações como fatos do exercício, interpretações e propostas separadamente. “O contato não respondeu durante a janela” é observação; “a escala não é adequada” é interpretação a confirmar; “publicar um substituto por função” pode ser uma ação proposta. Atribua responsáveis e datas acordadas às melhorias. Não transforme um exercício em prova de que o CSIRT responderá do mesmo modo em todo incidente real.

## Roteiro de implementação progressiva

### 1. Entender o ambiente e os compromissos

Mapeie serviços críticos, unidades, localidades, provedores, requisitos contratuais, obrigações aplicáveis e processos já existentes de segurança e continuidade. Identifique onde estão os registros relevantes e quem controla cada fonte. A intenção não é criar um inventário perfeito antes de começar; é conhecer as dependências que definem quem precisa participar de uma resposta.

### 2. Aprovar mandato e fronteiras

Redija uma carta curta com propósito, autoridade, público, escopo, serviços iniciais, limites e mecanismo de escalonamento. Valide com a liderança que responde pelo risco e com as áreas que executarão as ações. Defina uma rota para resolver divergências e uma autoridade substituta para situações em que o decisor principal esteja indisponível.

### 3. Descrever serviços e estabelecer canais

Publique instruções de acionamento com exemplos do tipo de informação útil, canais normais e urgentes, horários cobertos e procedimento quando o canal principal estiver indisponível. Evite exigir que o relator conclua que se trata de um ataque; ele deve poder descrever o que observou. Oriente que informações sensíveis sejam enviadas por meio apropriado e que o relato não seja atrasado para preencher campos não essenciais.

### 4. Definir classificação, papéis e decisões

Adote uma escala de gravidade manejável, critérios de revisão e ações ligadas a cada faixa. Documente quem coordena, quem executa, quem aprova e quem precisa ser consultado ou informado. Inclua caminho de escalonamento para impacto em serviço crítico, suspeita envolvendo dados, conflito entre áreas e indisponibilidade do decisor.

### 5. Preparar pessoas, contatos e ferramentas

Atribua papéis titulares e substitutos, planeje treinamento e combine como a equipe troca turnos. Mantenha contatos de emergência e relações com fornecedores em local autorizado e recuperável quando ferramentas corporativas comuns estiverem afetadas. Defina como a organização comunica internamente e quem aprova mensagens externas.

Só então ajuste ferramentas às necessidades: gestão de casos, armazenamento controlado, coleta de registros, comunicação segura e integração com monitoramento. Avalie permissões, trilhas de auditoria, disponibilidade, exportação, retenção e dependência de fornecedores. A automação pode reduzir tarefas repetitivas, mas o processo deve prever tratamento manual quando uma integração falhar.

### 6. Exercitar, corrigir e expandir

Faça um exercício de mesa com participantes que realmente teriam de decidir e agir. Converta lacunas em ações priorizadas e reveja a carta de mandato quando o exercício revelar autoridade ambígua. Depois, execute uma simulação técnica segura para validar acesso a fontes e passagem entre equipes, conforme o risco e a maturidade.

## FAQ

Não necessariamente de uma equipe separada e exclusiva. Toda organização precisa definir como receberá e coordenará relatos de incidentes, mas pode cumprir essa função com uma equipe existente, um serviço compartilhado ou apoio contratado, desde que escopo, autoridade, contatos e responsabilidades estejam claros. O nome da estrutura não substitui a capacidade real.

Não há um número universal que possa ser recomendado sem conhecer cobertura, volume, criticidade e serviços. Uma estrutura inicial pode distribuir papéis entre profissionais existentes e especialistas de outras áreas, com substitutos definidos. Se a operação depende continuamente de uma pessoa, isso é uma dependência a reconhecer e mitigar, não uma garantia de disponibilidade.

### O CSIRT deve operar 24 horas por dia?

A cobertura deve derivar do risco, dos compromissos e da capacidade de sustentar a escala. Algumas organizações precisam de acionamento contínuo; outras podem ter atendimento em horário definido e um caminho de emergência para casos graves. O importante é dizer o que está coberto, quem atende e que autoridade está disponível fora do expediente.

### Quem decide isolar um sistema?

A decisão depende do mandato, da criticidade e das consequências. O CSIRT pode recomendar ou coordenar a ação, mas a aprovação pode caber ao dono do serviço, à liderança de plantão ou a uma autoridade delegada. Uma política deve indicar o responsável e o substituto, além de como registrar a justificativa e avaliar os efeitos sobre continuidade.

O SOC pode detectar e triar sinais; o CSIRT pode coordenar a resposta quando um caso exige investigação e trabalho entre áreas. Em equipes combinadas, defina critérios de passagem, responsáveis por caso e informações necessárias. Um alerta não deve desaparecer entre filas, e uma equipe não deve presumir que a outra assumiu uma tarefa sem confirmação.

Não existe conjunto universal. A equipe precisa de meios confiáveis para receber relatos, comunicar-se, registrar cronologia e decisões, consultar evidências autorizadas e manter contatos. Ferramentas especializadas podem ajudar conforme escala e requisitos, mas devem ser escolhidas depois de entender processos, integrações, acesso e manutenção.

### Como saber se um incidente está confirmado?

Confirmação depende de critérios organizacionais e evidências contextualizadas, não de um único alerta ou rótulo de produto. Registre o que foi observado, a fonte, as explicações alternativas e o que falta verificar. A classificação pode permanecer provisória e mudar com novos dados. O importante é que a incerteza não esconda o risco nem seja apresentada como certeza.

Apoio externo pode ser apropriado quando faltam especialidades, capacidade de escala, independência ou meios de análise. A decisão deve considerar escopo contratado, confidencialidade, jurisdição, acesso a dados, coordenação com a equipe interna e processo de acionamento. Um fornecedor não assume automaticamente as decisões de risco e continuidade que pertencem à organização.

## O capítulo relacionado e o limite de uma referência

O capítulo 7 do manuscrito original, dedicado à estrutura, aos papéis e à coordenação do Black Team, oferece um ponto de conexão para refletir sobre responsabilidades e colaboração entre funções de segurança. Essa relação é útil quando a organização está definindo como a equipe de resposta se integra a uma estrutura mais ampla e como evita lacunas de autoridade.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como referência complementar para esse contexto. A leitura não substitui documentação técnica atualizada, treinamento, acordos formais nem julgamento da equipe diante das condições concretas de um incidente. O CSIRT precisa manter seus procedimentos alinhados ao ambiente e revisá-los quando mudam serviços, riscos, pessoas e obrigações.
