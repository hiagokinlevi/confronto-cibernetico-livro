# Exercício de mesa de incidente cibernético

## A pergunta que orienta a busca

Como uma organização pode descobrir, antes de uma crise real, se as pessoas responsáveis por responder a um incidente conseguem interpretar informações incompletas, tomar decisões autorizadas e coordenar ações entre tecnologia, negócio, jurídico e comunicação? Um exercício de mesa ajuda a responder a essa pergunta por meio de uma situação hipotética apresentada em etapas. Os participantes conversam sobre o que fariam, quais dados precisariam consultar, quem poderia decidir e como registrariam as escolhas. O cenário não modifica sistemas de produção, não comprova que controles técnicos funcionam e não prevê com certeza o comportamento durante um incidente. Seu valor está em tornar visíveis as dependências e ambiguidades do processo.

## O que é e o que não é

### Definição operacional

Um exercício de mesa é uma discussão facilitada, com participantes que representam funções relevantes, conduzida a partir de um cenário fictício ou didático. Um facilitador libera fatos gradualmente, chamados de injetáveis, e pede que o grupo descreva decisões e próximos passos. Os injetáveis podem chegar por texto, mensagem ou relato oral. Não é necessário simular telas, operar ferramentas ou acessar ambientes reais.

### Limites do formato

Uma conversa não testa se uma regra de detecção gera alertas corretos, se uma cópia de segurança pode ser restaurada, se uma equipe consegue conter tecnicamente um host ou se um canal alternativo permanece disponível quando a identidade corporativa é comprometida. Essas perguntas exigem evidência de outras atividades, como validações técnicas, ensaios de recuperação e testes autorizados.

## Contexto: resposta a incidentes como ciclo de trabalho

### O lugar da preparação

A resposta a incidentes não começa quando alguém anuncia que há uma crise. Preparação anterior define responsabilidades, contatos, recursos, critérios para escalar e formas de acessar informações relevantes. Durante a identificação e a análise, a equipe reúne e qualifica indícios, estima alcance e registra o que ainda não sabe. Na contenção, busca limitar o impacto sem destruir opções importantes para investigação ou continuidade.

### Relação com modelos e procedimentos

Um modelo de resposta, como o associado às fases do NIST, fornece vocabulário para planejar e discutir atividades. Ele ajuda a perceber que preparação, detecção, resposta e melhoria se relacionam. Não é um roteiro automático nem substitui os procedimentos internos, as obrigações legais pertinentes ou os requisitos específicos de um setor.

## Definir o objetivo antes do cenário

### Escolha uma pergunta testável

A pauta deve começar por uma pergunta que possa ser observada durante a discussão. Exemplos: “A equipe sabe quem pode aprovar a desativação de uma conta privilegiada fora do horário comercial?”; “Há uma fonte acessível para confirmar quais serviços usam a identidade afetada?”; “Como a liderança equilibra a continuidade de um serviço com a necessidade de limitar uma possível exfiltração?”.

### Escopo e regras da sessão

Registre quais serviços, unidades, fornecedores e períodos estão dentro do cenário. Estabeleça uma data e um horário fictícios, indicando se a ocorrência acontece em expediente, à noite, em fim de semana ou durante uma janela crítica. Esclareça se há equipe de plantão e se as pessoas presentes podem falar em nome de suas áreas.

## Preparação do exercício

### Participantes e responsabilidades

Convide pessoas que tenham conhecimento ou autoridade relevante para o objetivo, em vez de tentar reunir toda a empresa. Uma composição possível inclui resposta a incidentes, operações de tecnologia, segurança, identidade, continuidade, liderança do serviço afetado, comunicação, jurídico, privacidade e gestão de fornecedores. Nem todo cenário exige todos esses papéis.

### Materiais e premissas

Prepare uma narrativa breve, um conjunto de injetáveis em ordem e uma folha de registro. Os injetáveis devem indicar hora, canal e grau de confiança da informação dentro do cenário. Uma planilha simples ou documento compartilhado pode conter campos para: dado recebido, interpretação, decisão, responsável, aprovação necessária, ação dependente, comunicação e dúvida.

## Fontes de evidência: alerta, hipótese e confirmação

### Classificar a informação

Um alerta é um sinal que merece triagem. Pode vir de uma ferramenta, de um usuário, de um provedor ou de outra equipe. Ele não prova sozinho que houve comprometimento. Uma hipótese é uma explicação possível para sinais observados, como uso indevido de uma conta ou atividade automatizada. Uma prova, no sentido operacional do exercício, é uma evidência qualificada e documentada que sustenta uma conclusão dentro do escopo definido.

### Limitações e cadeia de custódia

Um registro de autenticação pode demonstrar que uma credencial foi utilizada em determinada circunstância, mas não explica automaticamente quem controlava a sessão nem o que ocorreu depois. Endereços de rede, horários e alertas podem ser incompletos ou ter interpretações alternativas. Durante a discussão, peça que os participantes apontem limites e corroboradores possíveis.

## Decisões práticas durante uma intrusão hipotética

### Do primeiro alerta à triagem

Considere um cenário hipotético: no início de um dia útil, a equipe recebe um alerta automatizado de autenticação atípica em uma conta com acesso administrativo. O alerta está marcado como prioridade elevada, mas não há indicação confirmada de acesso a dados. Uma pessoa da operação encaminha a notificação ao canal de segurança. A primeira conversa não deveria saltar diretamente para a conclusão de invasão.

### Contas e recursos afetados

No segundo injetável do cenário, a equipe identifica a mesma conta em mais de um serviço e encontra outra autenticação suspeita em uma conta relacionada. Esse dado hipotético amplia a pergunta de escopo: a equipe conhece a relação entre identidades, privilégios e aplicações? A lista de serviços é confiável? Há uma identidade de emergência ou uma conta técnica com credenciais compartilhadas?

### Possível exfiltração e comunicação

Mais tarde, um alerta hipotético aponta transferência incomum de dados a partir de um serviço que a conta afetada poderia acessar. A informação ainda não está validada: o padrão pode corresponder a uma tarefa legítima, a uma falha de classificação ou a uma ação não autorizada. Essa etapa testa como a organização fala sobre impacto em meio à incerteza.

### Decisão de restaurar

Na etapa final, o cenário hipotético informa que um serviço foi interrompido preventivamente e que existe uma cópia de segurança recente. A liderança pergunta quando o serviço pode voltar. A presença de uma cópia não demonstra que ela é íntegra, que contém os dados necessários ou que a causa do incidente foi removida. A decisão de restaurar depende de critérios de prontidão definidos pela organização e de coordenação entre quem opera o serviço, segurança, continuidade e responsáveis pelo negócio.

## Papéis e autoridade

### Quem recomenda, decide e executa

Uma fonte frequente de atraso é a confusão entre recomendar uma medida, aprová-la e executá-la. Para cada decisão relevante, pergunte quem formula a recomendação, quem avalia impacto, quem possui autoridade final e quem a implementa. Esses papéis podem ser distribuídos por serviço e horário. A pessoa que lidera a investigação nem sempre pode autorizar interrupções comerciais; a liderança do serviço pode não ter competência para determinar a preservação de evidências.

### Interfaces entre áreas e fornecedores

A equipe de segurança pode detectar, mas depender da operação para executar mudanças. A operação pode precisar de uma avaliação de negócio antes de interromper um serviço. Comunicação pode precisar de fatos consolidados, enquanto jurídico e privacidade avaliam requisitos aplicáveis. Fornecedores podem controlar registros ou componentes indisponíveis internamente.

## Cenários contrastantes para aprofundar a discussão

### Serviço crítico ou serviço de apoio

Um mesmo sinal pode exigir respostas diferentes conforme o serviço afetado. Se a conta suspeita controla um sistema de apoio não crítico, talvez haja uma alternativa operacional simples. Se dá suporte a uma função essencial, suspendê-la pode interromper atendimento, produção ou acesso de usuários.

### Expediente ou fora do expediente

Durante o expediente, equipes e gestores podem estar acessíveis, mas também ocupados com uma atividade de negócio intensa. À noite, pode haver menos aprovadores e menor acesso a especialistas. Compare como o mesmo alerta seria tratado nos dois períodos: qual é o caminho de plantão, como se convoca um substituto e que decisões podem ser tomadas antes de uma reunião completa?

### Evidência clara ou sinal ambíguo

Uma hipótese com dados consistentes pode testar coordenação de contenção; um sinal ambíguo pode testar triagem e disciplina de comunicação. Ambos são úteis, mas não devem ser confundidos. O primeiro explora o que fazer quando a equipe tem base suficiente para uma decisão.

### Canal primário disponível ou comprometido

Se a comunicação corporativa funciona, a equipe ainda precisa considerar controle de acesso e circulação apropriada de dados. Se o canal depende de uma conta ou serviço em investigação, o problema muda: como convocar pessoas e preservar coordenação sem ampliar exposição?

## Erros comuns de desenho e facilitação

### Cenário excessivamente técnico ou dramático

Um enredo cheio de detalhes de ferramentas pode excluir quem precisa tomar decisões de negócio e comunicação. Um cenário alarmista pode conduzir participantes a uma reação emocional, sem clareza sobre o objetivo. Use o nível técnico necessário para produzir decisões observáveis.

### Ausência de objetivo e excesso de improviso

Uma conversa sem objetivo tende a virar revisão de políticas, relatos de experiências antigas ou debate sobre ferramentas. Defina as perguntas de avaliação antes de escrever injetáveis e corte detalhes que não servem a elas. Ao mesmo tempo, não transforme o roteiro numa trilha fechada em que só existe uma resposta aceitável.

### Confundir rapidez com qualidade

Um cronômetro pode ajudar a organizar blocos, mas não deve virar placar individual. A velocidade isolada não mede a qualidade de uma decisão que depende de evidência, autoridade, consequências e coordenação.

### Transformar a reunião em auditoria punitiva

Quando participantes acreditam que a sessão serve para identificar culpados, podem ocultar incertezas e apresentar respostas ensaiadas. O patrocinador deve comunicar a finalidade de melhoria e proteger a discussão contra uso indevido de comentários individuais.

### Não fechar o ciclo de melhoria

Um relatório que termina em “lições aprendidas” sem tarefas concretas tende a perder efeito. Cada achado deve ser descrito com evidência observada, impacto potencial, responsável pela análise, próxima ação e prazo acordado. A correção pode envolver atualizar contatos, aprovar autoridade, testar uma restauração, esclarecer uma cláusula de fornecedor ou melhorar uma fonte de registros.

## Critérios de avaliação úteis

### Clareza de papéis e escalonamento

Observe se os participantes conseguiram apontar responsável pela triagem, liderança da resposta, aprovadores, executores e substitutos. Registre se a indicação veio de procedimento acessível, conhecimento pessoal ou inferência feita na sala. Note em que ponto houve incerteza e que consequência poderia ter.

### Uso de evidências e comunicação

Verifique se o grupo separou fato, hipótese e incógnita. Note se pediu fontes específicas, identificou quem as obteria e considerou limitações como retenção, horário ou completude. Observe se decisões e atualizações registram o grau de confiança e se a mensagem proposta evita declarações não sustentadas.

### Qualidade das decisões e continuidade

Para uma ação de contenção ou restauração, observe se o grupo identificou impacto no serviço, autoridade, condições de execução, dependências e acompanhamento. Registre quais alternativas foram consideradas e em que informação se basearam.

### Indicadores qualitativos sem falsa precisão

Uma síntese pode agrupar observações em categorias como “definido e acessível”, “definido, mas não localizado”, “dependente de conhecimento informal”, “não definido” e “não avaliado”. Essas categorias ajudam a priorizar sem alegar uma medida estatística. O registro deve incluir exemplos e indicar o escopo da sessão.

## Exercício de mesa: roteiro de uma sessão

### Abertura e contrato de participação

Comece apresentando objetivo, escopo, duração prevista, regras e papéis. Reforce que o cenário é hipotético, que as ações serão apenas discutidas e que sistemas reais não serão alterados. Explique como serão registradas decisões e como os achados serão acompanhados.

### Rodada um: alerta inicial

Apresente o alerta de autenticação atípica. Pergunte o que o grupo sabe, o que considera hipótese, qual informação falta e quem inicia a triagem. Peça que indiquem a fonte a consultar, o responsável por obtê-la, o registro que será criado e o critério para envolver outras funções. Não ofereça imediatamente a resposta técnica.

### Rodada dois: ampliação do escopo

Libere o dado hipotético de que a conta aparece em mais de um serviço e há outra autenticação suspeita relacionada. Pergunte como a equipe verifica quais contas e recursos podem estar associados. Explore inventário, privilégio, identidade de serviço, proprietário de aplicação e dependência de fornecedor.

### Rodada três: possível exfiltração

Apresente uma indicação não confirmada de transferência incomum. Diga expressamente que ainda não se sabe se a atividade é legítima ou se houve acesso a dados. Solicite que participantes nomeiem os registros e especialistas necessários, e distingam o que poderia ser comunicado agora do que precisa de validação.

### Rodada quatro: restauração e acompanhamento

Informe que há uma cópia de segurança recente e que o serviço segue indisponível no cenário. Pergunte quem avalia a cópia, quais critérios de recuperação se aplicam, quem decide a retomada e como a equipe acompanha o serviço depois. Inclua dependências e possibilidade de retorno à análise se aparecer novo sinal.

### Debriefing imediato

Reserve tempo para perguntar o que facilitou a decisão, o que a dificultou e que informação ou autoridade faltou. Comece por perguntas abertas e depois retorne aos objetivos definidos. Convide cada área a apontar uma interface que precisa melhorar. Evite perguntar “quem errou?”; prefira “qual elemento do processo tornaria essa decisão mais clara na próxima vez?”.

## Roteiro de implementação e melhoria

### Da necessidade ao plano

1. Escolha uma pergunta de preparação vinculada a um risco e a um processo real da organização.
2. Defina serviços, participantes, período, limites e resultados observáveis.
3. Confirme políticas e procedimentos relevantes, anotando lacunas em vez de presumir regras.
4. Escreva uma narrativa curta e injetáveis graduais que sustentem decisões coerentes.
5. Prepare um facilitador, um anotador, um formato de registro e materiais sintéticos.
6. Realize a sessão, separando fatos hipotéticos, interpretações e incógnitas.
7. Faça o debriefing, valide o registro e atribua responsáveis e prazos às ações aceitas.
8. Acompanhe correções e escolha uma validação posterior adequada a cada tipo de lacuna.

### Priorizar ações

As ações posteriores podem variar entre correções imediatas, investigação adicional, decisão de liderança e validação técnica. Uma lista de contatos desatualizada pode exigir atualização e verificação de acesso. Uma dúvida sobre autorização pode exigir decisão formal e comunicação. Uma hipótese de que a restauração é viável pode requerer um ensaio autorizado com os responsáveis técnicos.

### Verificar a melhoria

A verificação depende do tipo de ação. Uma atualização de procedimento pode ser revisada por responsáveis e apresentada às equipes afetadas. Um contato pode ser verificado por um teste de comunicação autorizado e claramente identificado. Uma capacidade de recuperação exige validação técnica definida e supervisionada. Uma nova regra de autoridade pode ser confirmada em um exercício futuro.

## Quando escolher mesa, laboratório ou simulação operacional

Uma mesa é apropriada quando a pergunta envolve autoridade, coordenação, interpretação de informação, comunicação ou prioridades. Ela demanda preparação e participação, mas não exige que sistemas reais sejam manipulados. Um laboratório autorizado é mais adequado para verificar comportamento técnico em ambiente controlado, como a interação de componentes ou procedimentos de recuperação, desde que escopo, autorização, salvaguardas e responsáveis estejam definidos.

## Perguntas frequentes

### Quanto tempo deve durar?

Não existe duração única adequada. O tempo depende do número de participantes, das decisões, da familiaridade com o processo e do objetivo. Uma sessão concisa pode explorar uma sequência limitada; um exercício interfuncional pode precisar de mais tempo para discutir interfaces e registrar achados. Reserve espaço para abertura e debriefing.

### Quem deve participar?

Inclua quem toma, recomenda, executa ou precisa ser consultado nas decisões do cenário. Isso pode envolver segurança, tecnologia, operação do serviço, negócio, continuidade, comunicação, jurídico, privacidade e fornecedores. A lista varia. Se uma função essencial não puder participar, registre a lacuna e defina como suas decisões serão verificadas depois.

### É necessário usar um incidente real?

Não. Um cenário hipotético pode testar processos sem expor detalhes confidenciais e permite adaptar a sequência ao objetivo. Se a organização usar material de um caso real, precisa ter autorização e tratar dados com cuidado. Deve ainda separar o que foi confirmado no caso original daquilo que foi alterado para a simulação.

### Como manter o exercício realista sem revelar dados sensíveis?

Use nomes, contas, horários, mensagens e registros sintéticos. Preserve a estrutura da decisão — uma conta privilegiada, dependências de serviço, evidência incompleta — sem reproduzir identificadores reais. Marque cada material como fictício e conduza a sessão em ambiente e canais de treinamento.

### A mesa mede o desempenho individual?

Seu propósito recomendado é examinar o processo coletivo e as condições que apoiam decisões. É possível observar participação ou conhecimento de funções, mas classificar pessoas por rapidez pode desestimular perguntas e ocultar lacunas. Registre comportamentos ligados ao objetivo de forma contextual, sem transformar a reunião numa avaliação individual não anunciada.

### O que fazer quando ninguém sabe a resposta?

Marque a questão como não resolvida, identifique qual pessoa ou documento poderia esclarecê-la e atribua uma verificação. Não aceite uma resposta inventada para manter o roteiro em movimento. A incapacidade de localizar uma política, contato ou fonte pode ser justamente a evidência de que a preparação precisa melhorar.

### Como evitar que a conversa vire uma disputa entre áreas?

Apresente o objetivo como melhoria do processo, peça que as pessoas descrevam limites e dependências de suas funções e mantenha foco em decisões observáveis. Incentive divergências sobre consequências e critérios, mas não atribua falha moral a quem levanta um risco. Quando prioridades entram em conflito, pergunte qual autoridade ou fórum resolve a questão.

### Como saber se a sessão teve utilidade?

Verifique se ela produziu observações específicas, se os participantes identificaram fontes e autoridades, se dúvidas foram registradas corretamente e se ações posteriores têm responsáveis e condições de conclusão. A utilidade também depende de acompanhamento: uma sessão sem execução das melhorias não fecha o ciclo.

### Com que frequência repetir?

A frequência deve acompanhar mudanças de risco, estrutura, tecnologia, fornecedores e responsabilidades, além do progresso das ações. Um exercício pode ser repetido quando uma lacuna importante foi corrigida ou quando um processo mudou. Não há intervalo universal que sirva a toda organização.

### O exercício substitui o plano de resposta?

Não. O plano documenta diretrizes, contatos, autoridade e procedimentos; o exercício verifica se as pessoas conseguem encontrá-los, entendê-los e identificar lacunas. Uma discussão não torna atual um contato obsoleto nem aprova uma exceção.

## Relação com o capítulo sobre resposta a incidentes

As fases de preparação, identificação, contenção, erradicação, recuperação e melhoria oferecem um mapa para organizar a conversa, inclusive quando o cenário não avança de forma linear. A utilidade prática está em examinar as transições: como um alerta vira investigação, como evidência sustenta uma decisão, como contenção considera continuidade e como a recuperação produz acompanhamento e aprendizado.

## Registro e governança dos resultados

### O que documentar depois da sessão

O registro final deve permitir que alguém que não participou entenda o que foi observado sem confundir a ficção com um evento real. Identifique data, objetivo, escopo, funções representadas, premissas, injetáveis e limitações. Para cada observação, descreva o momento da conversa, a informação disponível, a decisão discutida e a evidência que sustentou a conclusão. Use formulações proporcionais: “não foi possível localizar o procedimento durante a sessão” é mais preciso que afirmar que o procedimento inexiste, a menos que essa ausência tenha sido verificada.

Separe o relato dos participantes da análise do facilitador. Se alguém propõe uma ação, isso não significa que a organização a aprovou. Indique quando um ponto exige validação técnica, jurídica ou de governança, e encaminhe-o ao fórum competente. O registro pode conter informação interna sensível; acesso, retenção e distribuição devem seguir as regras da organização. Um resumo executivo deve preservar as incertezas importantes, em vez de simplificar o resultado como aprovação geral.

### Acompanhar sem burocratizar

Uma reunião curta de acompanhamento pode verificar se cada ação tem responsável, prazo e critério de conclusão, e se obstáculos precisam de escalonamento. Agrupe tarefas que dependem da mesma decisão, mas mantenha visível a origem de cada uma no exercício. Se o prazo mudar, registre a razão e a nova data acordada. A finalidade é garantir que as lacunas observadas sejam tratadas, não produzir documentos para arquivar sem uso.

Quando uma ação for concluída, anexe ou referencie evidência adequada: procedimento aprovado, lista de plantão revisada e validada, contato confirmado ou resultado de ensaio autorizado. Não exponha dados operacionais em um relatório amplo apenas para demonstrar trabalho. A liderança pode receber uma síntese de riscos e progresso, enquanto detalhes técnicos ficam com as equipes que precisam deles. Essa separação favorece transparência e acesso proporcional.

## Conclusão: transformar conversa em capacidade

Uma mesa produtiva não tenta adivinhar todos os detalhes de uma invasão. Ela verifica se a organização consegue construir uma visão comum, dizer o que sabe e o que ainda precisa confirmar, localizar quem tem autoridade e escolher próximos passos proporcionais ao impacto. Um cenário hipotético de alerta, contas possivelmente afetadas, transferência de dados ainda não confirmada e decisão de restauração oferece um caminho para discutir essas transições sem tocar em produção.
