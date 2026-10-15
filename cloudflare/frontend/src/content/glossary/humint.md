# HUMINT

## Definição e escopo

HUMINT, abreviação de *Human Intelligence* (inteligência de fontes humanas), é informação obtida por meio de pessoas e avaliada no contexto de uma investigação ou operação de inteligência. A expressão designa tanto uma disciplina de coleta quanto, em uso corrente, o conjunto de informações que chega por essa via. O elemento decisivo é a origem humana: alguém observou, ouviu, vivenciou, recordou, interpretou ou comunicou algo relevante. A informação não se torna verdadeira apenas porque veio de uma pessoa, nem deixa de ser HUMINT porque foi transmitida por telefone, mensagem ou entrevista remota.

Em segurança cibernética, HUMINT pode contribuir para compreender intenções, relações, decisões, rotinas e circunstâncias que registros técnicos isolados não revelam. Uma pessoa pode explicar por que uma conta foi usada, quem autorizou determinada mudança, como uma mensagem foi percebida ou qual processo interno estava em curso. Essas declarações são pistas e evidências potenciais, sujeitas a avaliação. A disciplina não é sinônimo de “conversa informal”: exige contexto, registro adequado, análise de confiabilidade e cuidado com os efeitos sobre pessoas e organizações.

## O que a fonte humana pode revelar

Uma fonte humana oferece uma perspectiva situada. Ela pode ter acesso a fatos, mas também tem limites de atenção, memória, compreensão e perspectiva. Seu relato costuma ser mais forte para explicar o que a própria pessoa fez, viu ou recebeu diretamente do que para afirmar o que outros pretendiam ou o que ocorreu em sistemas aos quais não tinha acesso. A distância entre experiência e conclusão precisa ficar explícita.

No contexto cibernético, uma fonte pode esclarecer se uma solicitação de pagamento parecia habitual, quem participou de uma decisão de acesso, como alguém respondeu a uma mensagem suspeita, quais tarefas foram feitas manualmente durante uma indisponibilidade ou quais equipes conheciam uma exceção operacional.

## Como avaliar um relato

A avaliação começa separando observação, lembrança, interpretação e conclusão. “Vi uma janela de login aparecer” é diferente de “o invasor entrou”; a segunda afirmação já incorpora uma interpretação que pode depender de logs, contexto e conhecimento técnico. Ao documentar a fala, convém preservar as palavras importantes da fonte, indicar o que foi perguntado e registrar o momento e as condições do relato. Uma paráfrase pode ser mais legível, mas não deve transformar uma hipótese do entrevistador em afirmação da pessoa.

A confiabilidade da fonte e a credibilidade de uma afirmação são dimensões relacionadas, mas distintas. Uma pessoa pode ter histórico de relatos precisos e estar enganada sobre um episódio específico. Outra, cuja confiabilidade ainda não foi estabelecida, pode apresentar um detalhe que registros independentes confirmam. A análise deve avaliar cada afirmação relevante, em vez de atribuir um selo geral de verdade ou falsidade à pessoa.

A verificação independente deve procurar convergência com evidências de natureza distinta, como registros de autenticação, histórico de mensagens, tickets, documentação de mudanças, cópias preservadas de arquivos ou relatos de outras pessoas. A independência importa: três colegas repetindo uma mesma informação recebida de um único interlocutor podem representar uma única origem, não três confirmações. Também é necessário preservar divergências. Se horários, nomes ou sequências não coincidem, a diferença pode refletir relógios desalinhados, lembranças incompletas, processos paralelos ou erro; não deve ser apagada para produzir uma narrativa uniforme.

## Lugar na investigação cibernética

A HUMINT costuma aparecer em diferentes fases de uma investigação. No início, um chamado de funcionário ou cliente pode sinalizar que algo merece triagem. Durante a contenção, entrevistas podem ajudar a determinar quais ações são seguras, quem depende de um serviço e quais mudanças ocorreram perto do incidente. Na análise, relatos podem orientar a busca por evidências técnicas e ajudar a interpretar eventos ambíguos. Na recuperação, pessoas que operam processos afetados podem apontar impactos que a telemetria não registra. Em revisões posteriores, a experiência dos participantes pode revelar falhas de comunicação, treinamento ou desenho de processo.

O relato integra um quadro de evidências. Uma linha do tempo pode combinar o horário lembrado por alguém com o recebimento indicado por um sistema e o registro de uma plataforma. Cada item deve conservar origem, precisão e referência temporal: memória pode ser aproximada e logs podem atrasar, ter retenção incompleta ou relógio incorreto. O analista explica o que cada fonte sustenta e onde resta incerteza.

## Evidências e rastreabilidade

Um relato é evidência de que determinada comunicação foi feita; por si só, pode não provar que o evento descrito ocorreu exatamente como narrado. Para sustentar uma conclusão, registre quem forneceu a informação, quando, em que contexto e por qual canal, além de distinguir a fala literal de resumo analítico. Anote se houve tradução, interrupção, consulta a documentos durante a conversa ou participação de outras pessoas. Registre também incertezas declaradas pela própria fonte, como “não lembro o horário” ou “ouvi isso de outra equipe”.

Em um registro analítico, é útil rotular claramente: informação relatada, informação corroborada, inferência e lacuna. Uma formulação como “a funcionária relata ter aprovado a solicitação às 10h; o sistema registra uma aprovação às 10h07; ainda não foi estabelecido qual dispositivo iniciou a ação” preserva o que se sabe e o que falta. Essa separação reduz a chance de que uma hipótese passe a circular em relatórios subsequentes como fato confirmado.

## Distinções importantes

HUMINT se distingue de inteligência de sinais, que deriva de interceptação ou análise de sinais e comunicações, e de inteligência de fontes abertas, que usa material publicamente acessível. Uma pessoa pode fornecer um endereço de página pública; a origem da pista é humana, enquanto a coleta e análise do conteúdo público são de fonte aberta. Um e-mail preservado é um artefato digital; o relato de quem o recebeu e o contexto dado por essa pessoa são componentes humanos. Na prática, fontes se complementam, e a classificação deve refletir a proveniência de cada afirmação.

Por fim, HUMINT não é automaticamente uma fonte mais fraca ou mais forte que telemetria. Um registro técnico pode demonstrar que uma conta autenticou em certo momento, mas não quem estava diante do dispositivo. Uma pessoa pode identificar quem usou a conta, mas enganar-se sobre a hora ou a operação executada. A força probatória depende da pergunta, da qualidade da coleta, da integridade do registro e da convergência com outras evidências.

## Limitações e erros de interpretação

Memória humana é reconstrutiva: lembranças podem perder detalhes, incorporar informações posteriores ou ser organizadas para dar coerência a um episódio. Estresse, interrupção, idioma, fadiga, distância temporal e perguntas que sugerem uma resposta podem afetar o relato. A ausência de lembrança não demonstra que um evento não ocorreu; uma lembrança vívida tampouco garante exatidão. Pessoas podem confundir horários locais e universais, nomes de sistemas parecidos, ambiente de teste e produção ou uma notificação com a ação que ela anunciava.

Erros comuns incluem registrar uma inferência como citação, confundir ausência de corroboração com refutação, tratar repetição como confirmação independente e compartilhar a identidade da fonte com pessoas que não precisam conhecê-la. Outro erro é entrevistar sem uma pergunta investigativa clara: isso aumenta coleta irrelevante e pode ampliar exposição de dados pessoais. É preferível delimitar o que a equipe precisa saber, explicar o uso previsto das informações e documentar respostas negativas, incertas ou não lembradas sem pressionar por uma narrativa completa.

## Proteção, ética e limites legais

Coleta e retenção precisam respeitar finalidade, proporcionalidade, políticas internas, leis trabalhistas e de privacidade, obrigações de notificação e regras de preservação de evidências aplicáveis. O regime muda conforme jurisdição, tipo de dado, relação com a fonte e natureza da investigação; este verbete não substitui orientação jurídica. A equipe deve evitar coleta indiscriminada de conversas pessoais, credenciais, dados sensíveis ou informações de terceiros que não sejam necessárias. Se surgir material fora do escopo, o fluxo apropriado deve ser definido com as funções responsáveis.

O respeito à fonte também é uma questão de qualidade. Uma conversa conduzida com clareza, sem ameaças ou falsas garantias, tende a produzir um registro mais interpretável e reduz o risco de coerção ou contaminação. Deve-se considerar acessibilidade, idioma e possibilidade de acompanhamento apropriado. Se houver potencial conflito disciplinar, criminal ou regulatório, a equipe deve seguir os procedimentos de escalonamento e não improvisar técnicas de entrevista que excedam sua função.

## Uso em resposta a incidentes

Durante um incidente, relatos podem ajudar a localizar contas, dispositivos, mensagens e decisões relevantes. Uma sequência defensiva razoável é identificar a pergunta, registrar quem pode respondê-la, preservar evidências voláteis conforme os procedimentos, conversar com a fonte sem sugerir uma resposta e comparar o relato com artefatos independentes. A ordem concreta depende da urgência e do risco de perda de dados. A equipe deve limitar a distribuição de informações e separar o registro factual da avaliação sobre atribuição ou intenção.

Considere um exemplo hipotético: uma analista informa que recebeu uma mensagem de um dirigente pedindo alteração urgente de dados bancários e que confirmou a solicitação por telefone. A equipe preserva a mensagem e o ticket associado, verifica os dados de chamada disponíveis, compara o procedimento com aprovações registradas e conversa separadamente com as pessoas envolvidas. O relato ajuda a formular hipóteses sobre a sequência e o processo, mas não basta para concluir quem controlava o canal ou qual era a intenção. A resposta pode incluir pausa da transação, contato por canal já validado e revisão de acessos, de acordo com os procedimentos da organização.

Em outro exemplo hipotético, um operador relata que uma conta de serviço foi usada durante uma janela de manutenção por uma pessoa que não costuma administrá-la. A informação pode direcionar a revisão de tickets, registros de autenticação e escala de plantão. Não confirma abuso: a pessoa pode ter recebido autorização informal, a escala pode estar desatualizada ou o registro pode refletir automação. A conclusão deve refletir o cruzamento e as lacunas, evitando atribuição prematura a um indivíduo.

## Perguntas frequentes

### Uma entrevista com funcionário é sempre HUMINT?

Se a informação relevante é obtida de uma pessoa e avaliada no contexto da investigação, ela tem origem HUMINT. Isso não define, por si só, o método formal da entrevista, o tratamento jurídico da declaração ou a confiabilidade da informação. Uma conversa de triagem pode produzir uma pista que depois precisa de validação.

### Quantas fontes são necessárias para confirmar um relato?

Não existe número universal. O que importa é a independência e a adequação das evidências à afirmação. Um registro primário pode confirmar um horário melhor que vários relatos derivados da mesma conversa. Para uma conclusão de alto impacto, a equipe deve explicar o padrão de confirmação usado e as incertezas remanescentes.

### Se a pessoa tem motivo para mentir, o relato deve ser descartado?

Não automaticamente. Um possível interesse é relevante para avaliar a afirmação, mas não é prova de falsidade. Registre o contexto, busque elementos verificáveis e evite inferir intenção apenas com base em comportamento, reputação ou conflito percebido.

### Como lidar com versões diferentes?

Preserve cada versão com sua data e contexto, identifique exatamente quais detalhes divergem e busque evidência que possa esclarecer a diferença. Não force uma síntese antes de entender se as pessoas descrevem etapas distintas, relógios diferentes ou lembranças incompatíveis. Se a lacuna não puder ser resolvida, declare-a no resultado.

## Relação com o capítulo

Na organização da versão original, o capítulo 3 é a referência relacionada a este verbete. HUMINT ajuda a manter visível uma dimensão essencial da análise: sistemas registram ações e estados, enquanto pessoas podem explicar contexto, processo e percepção. Integrar as duas perspectivas exige atribuir cada informação à sua origem, verificar relatos de forma independente, proteger as fontes e respeitar os limites legais.
