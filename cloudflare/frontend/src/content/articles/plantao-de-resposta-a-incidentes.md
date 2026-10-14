# Plantão de resposta a incidentes

## O que o plantão cobre e o que não deve prometer

Plantão não é sinônimo de investigação completa. Seu primeiro objetivo é receber e qualificar o alerta, confirmar que existe um evento que merece atenção, preservar a continuidade da comunicação e acionar os recursos adequados. A equipe pode tomar medidas iniciais previamente autorizadas, mas a análise aprofundada, a recuperação e a comunicação externa podem envolver grupos diferentes e durar muito além do turno de quem recebeu o primeiro chamado.

O escopo precisa dizer quais serviços e ambientes estão cobertos, que tipos de sinal entram na fila, quais horários têm cobertura, quais obrigações são internas ou contratuais e o que deve ocorrer quando o alerta se refere a um fornecedor ou parceiro. “Cobertura de segurança” é expressão ampla demais se não esclarecer se inclui endpoints, identidade, nuvem, rede, aplicações, instalações físicas e abuso de contas. Uma lacuna declarada pode ser tratada; uma lacuna escondida numa promessa genérica tende a aparecer no pior momento.

O limite da atuação inicial é especialmente importante. A pessoa de plantão deve saber o que pode fazer sem aprovação adicional, o que exige validação de outra função e o que deve ser escalado imediatamente. Por exemplo, pode estar autorizada a abrir um incidente, registrar horários, preservar referências e suspender uma sessão de usuário segundo um procedimento aprovado. A interrupção de um serviço crítico, a comunicação a clientes ou a desativação ampla de contas pode requerer autoridade superior e avaliação de impacto. Esses limites dependem do ambiente; não devem ser improvisados pelo artigo, pelo fornecedor ou por um técnico isolado.

## Contexto operacional: disponibilidade é uma cadeia

Um alerta percorre uma cadeia: alguém ou algum sistema percebe algo, encaminha a informação, uma pessoa confirma o recebimento, avalia o risco, obtém autoridade e ferramentas, toma ou coordena uma decisão e comunica o próximo passo. Uma falha em qualquer elo afeta o conjunto. A escala, portanto, é apenas uma peça entre detecção, comunicação, decisão e execução.

O segundo problema é o contexto. Alertas raramente chegam com todas as respostas: qual ativo foi afetado, qual serviço depende dele, se há atividade confirmada, que contenção já foi tentada, quem aprovou a ação e qual é o próximo horário de atualização. Um plantonista que recebe somente “ver isso urgente” precisa gastar tempo reconstruindo a situação. Um registro inicial consistente reduz lacunas sem transformar o formulário em barreira para pedir ajuda.

O quarto problema é a capacidade sustentada. Uma resposta prolongada não pode depender de que o primeiro atendente permaneça indefinidamente acordado. Deve haver um responsável pela coordenação, especialistas convocáveis e um plano de rendição. A passagem não encerra automaticamente a responsabilidade; ela transfere de modo explícito o estado atual e registra quem assumiu. Se não houver confirmação do sucessor, a pessoa que está saindo continua sendo o ponto de contato até a escalada definida, respeitando limites de jornada e segurança ocupacional.

## Evidências para decidir sem confundir indício e confirmação

No início, o plantão costuma trabalhar com informação incompleta. Um alerta automático é evidência de que uma regra ou mecanismo detectou uma condição; não é, sozinho, prova de comprometimento. Uma mensagem de usuário é evidência de que ele observou determinado comportamento; pode ser precisa, parcial ou mal interpretada. Um relato de fornecedor é uma fonte relevante, mas é preciso saber o que ele observou diretamente, que dados examinou e qual é o horário de referência.

Os exemplos acima são modelos hipotéticos de raciocínio, não relatos de incidentes reais. Eles mostram por que o plantão deve separar fatos observados, interpretações e hipóteses. Uma nota pode indicar: “Fato: houve falha de login às 02h14 segundo o painel X. Hipótese: pode haver tentativa automatizada. Ainda não sabemos se a conta foi acessada.” Esse formato ajuda quem assume o turno a não converter uma suspeita em conclusão ao repetir o resumo.

Preservar evidência não significa coletar indiscriminadamente tudo que possa ser acessado. A resposta deve respeitar políticas, privacidade, legislação aplicável, retenção e escopo autorizado. Registre quem obteve a informação, onde ela foi armazenada, quando e por qual processo. Se a coleta exceder a experiência do plantonista ou envolver dados sensíveis, escale para a função responsável. Um registro claro de limitações é mais útil do que sugerir certeza que os dados não sustentam.

## Decisões de desenho: cobertura, escala e acionamento

Antes de definir turnos, a organização deve mapear a janela em que precisa de resposta e os tipos de incidentes que justificam convocação fora do expediente. Isso pode ser feito examinando serviços críticos, acordos de atendimento, dependências externas, consequências de atraso e alertas que de fato requerem ação humana imediata. Não se deve copiar a escala de outra organização sem entender sua operação. O volume de alertas, a dispersão geográfica e a maturidade dos fornecedores alteram o desenho.

Os critérios de acionamento devem orientar decisões sem exigir diagnóstico completo antes do primeiro contato. A equipe pode distinguir: alerta que deve ser registrado e analisado no próximo expediente; evento que requer avaliação rápida pelo plantão; e sinal de impacto potencial relevante que exige convocação imediata de coordenação e especialistas. Esses níveis devem ser ligados a condições compreensíveis, como serviço afetado, evidência de acesso não autorizado, indisponibilidade, possível exposição de dados ou propagação para outros sistemas. Os exemplos não formam uma classificação universal; cada organização os adapta e aprova.

O processo deve prever ausência simultânea, conflito de interesse e indisponibilidade de liderança. Se a pessoa primária estiver envolvida no evento, sem conectividade ou já ocupada em outro incidente, o substituto deve poder assumir sem buscar uma autorização impossível. Se quem precisa aprovar uma medida não responder, a matriz de autoridade deve dizer qual função alternativa decide e em que limite. “Ligar para o gestor” não resolve se não houver uma segunda rota nem regra de continuidade.

## Papéis: quem coordena, quem executa e quem informa

O modelo de Black Team descrito no capítulo relacionado do manuscrito enfatiza estrutura, papéis e coordenação. Para o plantão, a consequência prática é separar funções, mesmo que uma mesma pessoa acumule algumas delas em uma equipe pequena. Nomear papéis reduz a chance de tarefas essenciais ficarem implícitas. Em uma operação maior, as responsabilidades podem ser distribuídas por grupos e turnos; numa equipe enxuta, uma matriz simples ainda deixa claro quem decide e quem deve ser chamado.

O coordenador do incidente organiza prioridades, define a cadência de atualização, mantém o quadro de situação e acompanha decisões pendentes. A coordenação evita que vários especialistas executem ações incompatíveis ou que a equipe perca de vista o impacto operacional. Em incidentes menores, o atendente pode coordenar. Quando o impacto cresce ou há múltiplos domínios, outra pessoa deve assumir explicitamente essa função para que o primeiro atendente possa continuar a análise.

O registro do incidente é uma responsabilidade compartilhada, mas deve haver uma pessoa incumbida de manter a linha do tempo e as decisões. Cada atualização importante deve conter horário, autor ou fonte, informação nova, decisão e responsável pela próxima ação. Separar o que foi observado do que foi inferido permite revisão posterior e reduz a chance de que a narrativa se transforme conforme o turno muda.

## Acessos emergenciais sem dependência de uma única credencial

O plantão deve conseguir alcançar as ferramentas necessárias sem depender da senha pessoal de um colega, de um token deixado em uma gaveta ou de uma conta compartilhada sem rastreabilidade. Acesso emergencial é um mecanismo controlado, documentado e testado para funções específicas. Ele não deve se tornar um caminho permanente de privilégio amplo. Princípios como privilégio mínimo, autenticação forte, registro de uso e revisão após a emergência ajudam a equilibrar velocidade e controle.

Uma conta de emergência, quando necessária, deve ter escopo e finalidade determinados, custódia definida, monitoramento de uso e procedimento para rotação ou revogação após a ativação. As pessoas de plantão devem saber como solicitar acesso, quem aprova, como registrar o motivo e como comunicar o uso. O segredo não deve ser copiado para documentos de escala, mensagens de grupo ou anotações pessoais. A existência da conta não autoriza acesso a ambientes fora do escopo do incidente.

Verificar acessos é parte da prontidão. Em ensaios autorizados, confirme que a pessoa consegue autenticar-se, localizar o painel correto, consultar o procedimento e obter a aprovação prevista. Não realize testes que provoquem mudanças em produção sem autorização específica. Para caminhos de alto impacto, prefira uma simulação, ambiente controlado ou validação de leitura. A evidência da verificação deve registrar resultado, data, responsável e limitações, sem registrar segredos.

## Passagem entre turnos e memória operacional

Uma passagem útil responde a cinco perguntas: o que sabemos, o que ainda é hipótese, o que já foi feito, o que está pendente e quem está responsável pelo próximo passo? Acrescente impacto conhecido, serviços afetados, contatos acionados, aprovações recebidas, restrições, links internos controlados para registros e horário da próxima atualização. Se não há incidente ativo, a passagem ainda deve indicar alertas em observação, mudanças recentes no ambiente e indisponibilidades que alterem a resposta.

Evite resumos narrativos longos sem estrutura. Uma linha do tempo curta, decisões e pendências identificáveis facilitam a leitura sob pressão. Ao mesmo tempo, não reduza tudo a códigos internos que só a equipe diurna entende. Use linguagem direta, identifique siglas e aponte a fonte da informação. A passagem deve permitir que alguém competente, mas não envolvido até então, retome a coordenação sem precisar reconstruir o caso desde o início.

Uma passagem também é uma decisão de responsabilidade. O sucessor deve aceitar explicitamente; o predecessor deve confirmar o que foi transferido. Se houver desacordo sobre estado ou prioridade, registre-o e encaminhe à coordenação. A continuidade não se resolve com a frase “está no ticket” se ninguém verifica quem o assumiu. Para incidentes que atravessam vários turnos, cada transferência deve preservar a linha de decisão, não apenas o estado técnico mais recente.

## Dois cenários hipotéticos para testar o desenho

No primeiro cenário hipotético, um alerta fora do horário indica atividade incomum em uma conta com acesso a um serviço importante. O alerta chega ao contato primário, que confirma o recebimento, consulta registros autorizados e verifica que ainda não há evidência de alteração no serviço. O responsável registra os horários e a fonte, contata o proprietário da conta por uma rota alternativa e aciona o especialista de identidade conforme o critério aprovado. A hipótese de comprometimento permanece aberta; uma sessão suspeita é tratada segundo a política de contenção previamente autorizada. O coordenador define a próxima atualização e informa operações sobre o risco sem afirmar impacto não confirmado.

No segundo cenário hipotético, a ferramenta principal de alertas fica indisponível durante uma falha mais ampla de conectividade, enquanto uma pessoa usuária relata comportamento inesperado em um sistema. O canal usual de mensagens corporativas também está degradado. O plantonista tenta o contato alternativo publicado, localiza a lista controlada de escalonamento e registra a limitação de telemetria. A coordenação chama operações para avaliar disponibilidade e convoca o fornecedor segundo o contrato. A equipe não conclui que houve ataque apenas porque os sistemas falharam; mantém hipóteses separadas para falha técnica e atividade maliciosa até obter evidência.

Um terceiro cenário hipotético pode explorar a troca de turno no meio de um incidente: o responsável primário precisa encerrar sua jornada, mas uma ação de recuperação aguarda validação. O substituto recebe a linha do tempo, verifica a decisão pendente, confirma com a coordenação que assumiu e recebe os contatos que já foram acionados. A equipe avalia se a especialidade necessária está coberta no próximo período. Esse exercício mostra que continuidade humana é parte da resposta; exigir disponibilidade ilimitada cria risco de erro, esgotamento e dependência pessoal.

## Erros frequentes que enfraquecem a cobertura

O erro mais simples é publicar uma escala sem confirmação de disponibilidade. Férias, afastamentos, viagens, fusos e compromissos já conhecidos devem atualizar o titular e o substituto. A escala precisa ter proprietário e data de revisão. Mudanças devem chegar a quem encaminha alertas, não apenas à própria equipe. Um documento correto no repositório errado continua sendo uma rota quebrada.

Concentrar conhecimento em uma única pessoa também é uma falha de projeto. Um especialista pode conhecer uma plataforma em profundidade, mas se somente ele sabe acessar os registros, interpretar a topologia ou localizar o contato do fornecedor, a equipe não tem substituição efetiva. A resposta é distribuir documentação, treinar pessoas suficientes e reduzir pontos únicos de falha. Isso não significa tornar todos especialistas em tudo; significa conseguir manter a coordenação e acionar a competência adequada.

Finalmente, algumas equipes ensaiam apenas um cenário ideal, com todos disponíveis e sistemas funcionais. Esse tipo de ensaio confirma pouco sobre a capacidade de operar em falha. Testes úteis introduzem perda de canal, contato desatualizado, dúvida sobre autoridade ou sucessor ausente, sem causar mudanças não autorizadas em produção. O propósito é aprender onde o processo se rompe e corrigir a causa, não avaliar indivíduos por uma resposta perfeita.

## Como avaliar se o plantão está funcionando

A avaliação deve observar a capacidade de percorrer o processo e a qualidade das decisões, não apenas contar alertas ou premiar velocidade. Uma medida pode parecer boa enquanto alertas são fechados sem análise, enquanto o tempo começa a ser contado apenas depois do atraso de encaminhamento ou enquanto a equipe evita escalar para proteger um indicador. Antes de adotar qualquer número, defina o que ele representa, de qual fonte vem e que comportamento pode incentivar.

Indicadores de qualidade podem examinar se o registro distingue fatos de hipóteses, se as decisões têm autoridade e justificativa identificadas, se os dados mínimos foram preservados, se a comunicação indica incerteza e próximo passo e se as ações ficaram dentro do escopo aprovado. Uma revisão amostral de chamados, com proteção adequada de dados, pode encontrar padrões como alertas sem dono, contatos desatualizados e dependência de um único especialista. A análise deve buscar falhas de processo e condições de trabalho, não culpados convenientes.

Depois de um incidente ou exercício, conduza uma revisão proporcional. Reconstrua a sequência, valide as fontes, identifique decisões acertadas e pontos de confusão, ouça quem executou o trabalho e registre ações de melhoria com responsável e prazo. Não transforme a revisão em busca retroativa por uma resposta perfeita com informação que ninguém possuía na hora. Pergunte quais sinais estavam disponíveis, quais controles limitaram a ação e que mudança teria tornado a próxima resposta mais clara.

## Exercício de mesa e laboratório autorizado

Um exercício de mesa pode ser feito fora do horário comercial para verificar escalonamento, autoridade e transferência de contexto sem tocar em sistemas de produção. Reúna a pessoa de plantão, o substituto, a coordenação, um representante de operações e as funções de apoio relevantes. Uma pessoa facilitadora apresenta uma sequência curta de mensagens e atualizações. Os participantes explicam o que fariam, onde registrariam a decisão e quem chamariam; não executam ações técnicas reais.

Antes do exercício, delimite dados fictícios, canais de teste, participantes e autoridade para interromper a simulação. Avise as áreas que poderiam confundir uma mensagem simulada com incidente real. Marque claramente os artefatos de exercício e impeça seu envio a clientes, autoridades ou fornecedores como se fossem notificações verdadeiras. Combine uma palavra de encerramento e um facilitador que mantenha controle do tempo e das injeções. Essas precauções preservam a segurança e a confiança no processo.

Repita exercícios quando houver mudanças relevantes de equipe, ferramentas, arquitetura, fornecedor ou procedimento. A frequência deve ser suficiente para detectar deriva sem criar fadiga ou exigir trabalho permanente. Para times pequenos, uma sessão curta de mesa pode trazer mais valor do que uma simulação complexa que ninguém consegue manter. O aprendizado depende de fechar ações e testar se a correção realmente removeu a dependência encontrada.

## Roteiro de implementação

Comece delimitando o objetivo e o escopo. Liste os serviços que requerem resposta fora do expediente, horários, fontes de alerta, compromissos contratuais e impactos de atraso. Identifique explicitamente as áreas sem cobertura. Converse com operações e responsáveis pelos serviços para saber quais ações podem interromper funcionamento e quais dados são necessários para avaliar cada alerta.

Construa os canais de contato com redundância e controle. Mantenha listas em fonte autorizada, acessível ao plantão e protegida conforme a sensibilidade. Verifique a atualização com quem encaminha alertas e com os contatos responsáveis. Analise dependências entre identidade, rede, telefonia e ferramentas de colaboração. Não trate duas rotas como independentes se ambas desaparecem sob a mesma falha.

Treine as pessoas antes de depender do processo. Faça um ensaio em horário alternativo, valide os contatos, percorra os passos de acesso e pratique a passagem de turno. Registre falhas e ajuste a documentação. Se uma pessoa não consegue cumprir a função por falta de autoridade, treinamento ou recurso, corrija o desenho em vez de apenas atualizar a escala.

Uma sequência mínima de implantação pode ser concluída em ciclos: mapear cobertura e riscos; aprovar autoridade e níveis de decisão; montar escala e canais alternativos; validar acesso e documentação; executar um exercício de mesa; corrigir lacunas; e estabelecer revisão periódica. Em cada ciclo, guarde evidência proporcional do que foi verificado e das limitações. Isso permite que a liderança veja a diferença entre uma capacidade desenhada e uma capacidade testada.

## Perguntas frequentes

### Uma empresa pequena precisa manter alguém acordado a noite inteira?

Não necessariamente. A necessidade depende dos serviços, impactos e compromissos de resposta. Algumas organizações podem usar escalada sob chamada, suporte de fornecedor ou cobertura compartilhada, desde que os tempos e limites estejam claros. A decisão deve reconhecer o que não será atendido imediatamente e avaliar se esse intervalo é aceitável. Uma escala que exige disponibilidade permanente sem compensação, descanso ou substituição pode ser insustentável e aumentar o risco operacional.

### O plantonista pode tomar decisões sem consultar a liderança?

Ele deve poder agir dentro de limites previamente aprovados. Procedimentos podem autorizar registro, triagem, abertura de incidente e medidas iniciais específicas. Ações com efeito relevante em clientes, produção, dados ou continuidade podem exigir uma autoridade diferente. O ponto essencial é documentar esses limites e definir o substituto para aprovações indisponíveis; não deixar a decisão para improviso durante a crise.

### Quantas pessoas devem estar na escala?

Não existe um número universal. A escala precisa cobrir as janelas necessárias, ausências previsíveis, descanso, competências e capacidade de substituição. Uma rotação com nomes suficientes, mas sem treinamento ou acesso, não resolve a cobertura. O dimensionamento deve considerar a carga real e revisar se alertas, incidentes prolongados e folgas podem ser acomodados sem concentrar a responsabilidade em poucas pessoas.

### Como saber se um alerta exige acordar alguém?

Use critérios aprovados baseados em impacto potencial, evidência disponível, serviço afetado e urgência de uma decisão humana. Registre incerteza e permita escalada para avaliação sem exigir prova completa. Revise falsos positivos e alertas que chegaram tarde para ajustar a regra. O critério deve ser compreensível a quem está de plantão e coerente com a autoridade necessária para a ação seguinte.

### O que deve ser passado ao próximo turno?

O estado confirmado, as hipóteses, a linha do tempo, o impacto conhecido, as ações tomadas, as aprovações, as pessoas chamadas, as pendências e a próxima atualização. Inclua limitações de telemetria e quem é responsável por cada próximo passo. O sucessor deve confirmar que recebeu a responsabilidade. Uma passagem sem aceite deixa a coordenação ambígua, mesmo quando o registro está completo.

### Como testar o acesso de emergência com segurança?

Prefira validações autorizadas de leitura, simulações ou laboratório isolado. Confirme que a pessoa consegue localizar o mecanismo, solicitar o acesso, cumprir aprovações e registrar o uso. Não execute uma alteração em produção só para provar que a credencial funciona. O teste deve ter escopo, responsável, janela e critério de parada definidos, e não deve expor o segredo no relatório.

### Um fornecedor pode ser responsável pelo plantão?

Um fornecedor pode oferecer monitoramento ou escalada, mas o contrato e a operação devem esclarecer o que ele realmente detecta, em quais horários, por quais canais, com que prazo e o que fica sob responsabilidade do cliente. A organização continua precisando de autoridade para decidir sobre seus serviços e de acesso a contexto suficiente. Teste o contato do fornecedor e mantenha uma rota alternativa caso a pessoa designada não responda.

### Quando a escala precisa ser revista?

Revise-a quando houver mudanças de equipe, serviços, fornecedores, arquitetura, obrigações ou canais. Também faça revisões periódicas e após exercícios ou incidentes que revelem falhas. Uma mudança de telefone ou de função pode invalidar a rota sem alterar o documento visível para quem o consulta. A revisão deve confirmar tanto os nomes quanto os acessos, competências e dependências associadas.

### Como evitar fadiga sem deixar incidentes passarem?

Observe a qualidade e a frequência dos alertas, os horários de acionamento e as decisões tomadas. Ajuste regras ruidosas, melhore enriquecimento do alerta e defina quais eventos podem aguardar o expediente. Preserve uma rota de consulta para casos ambíguos e evite culpar quem escalou de boa-fé. Reduzir chamadas sem examinar o risco pode esconder a falha em vez de corrigi-la.

### Qual é a diferença entre alerta e incidente?

Alerta é um sinal que merece avaliação; incidente é uma situação classificada conforme os critérios e políticas da organização. O alerta pode revelar atividade legítima, erro de configuração, falha operacional ou atividade maliciosa. O plantão registra o que foi observado e conduz a avaliação. O rótulo deve acompanhar a evidência, e a equipe deve revisá-lo quando novas informações mudarem a compreensão.


## Referência ao capítulo 7

O capítulo 7 do manuscrito original trata da estrutura, dos papéis e da coordenação do Black Team, temas que ajudam a organizar responsabilidades durante um plantão. O livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece esse contexto. A obra não substitui documentação técnica atualizada, treinamento, ensaios autorizados nem o julgamento da equipe diante de evidências e impactos concretos.
