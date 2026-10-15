# CSIRT

## Conceito e escopo

CSIRT é uma equipe ou capacidade organizada para receber, coordenar e tratar incidentes de segurança de um público definido. A sigla deriva de *Computer Security Incident Response Team*, expressão usada para nomear uma equipe de resposta a incidentes de segurança computacional. Na prática, o nome não garante que exista um grupo separado, uma estrutura permanente ou uma operação ininterrupta: o serviço pode ser prestado por profissionais dedicados, por uma unidade que acumula outras funções ou por uma combinação de equipes internas e fornecedores. O que caracteriza a capacidade é o mandato reconhecível e a possibilidade de conduzir ou coordenar o tratamento de ocorrências dentro de limites estabelecidos.

O público definido pode ser uma organização, um conjunto de unidades, uma comunidade de clientes, uma rede acadêmica, um setor ou outro grupo que tenha relação formal com o serviço. Essa delimitação importa porque determina quem pode acionar a equipe, que ativos ela pode ajudar a proteger, quais informações pode receber e a quem deve comunicar decisões. Um CSIRT corporativo, por exemplo, tende a atender as áreas e os ambientes da própria organização; um serviço voltado a uma comunidade pode receber notificações de diferentes participantes e facilitar coordenação entre eles. O rótulo, sozinho, não permite saber qual dessas configurações existe.

## Mandato, público e serviços

Um CSIRT eficaz precisa de um mandato que possa ser entendido antes de uma crise. O mandato esclarece sua autoridade, responsabilidades e fronteiras: que eventos entram em seu escopo, quais ambientes e pessoas estão cobertos, que decisões pode tomar, quais dependem de outra autoridade e como resolve situações fora do escopo. Sem isso, solicitantes podem esperar que a equipe desligue sistemas ou declare um incidente quando ela só tem atribuição consultiva; inversamente, a equipe pode hesitar diante de uma ação urgente por não saber quem tem poder para autorizá-la.

Os serviços variam conforme a finalidade e os recursos. Podem incluir recebimento e triagem de relatos, análise inicial, coordenação de resposta, orientação técnica, apoio à investigação, acompanhamento de vulnerabilidades relacionadas a incidentes, comunicação de alertas e compartilhamento de indicadores ou lições. Uma lista de serviços deve dizer o que é oferecido e em que condições, e não apenas apresentar nomes amplos. “Análise forense”, por exemplo, pode significar desde aconselhamento para preservar dados até exame especializado de imagens e dispositivos; essas entregas não são equivalentes.

Também é necessário explicitar as condições de atendimento. Horários, prioridades, prazos indicativos, idiomas, canais autorizados, requisitos mínimos da notificação e formas de escalonamento ajudam a estabelecer expectativas realistas. Um canal de emergência pode ter regras de uso diferentes de um formulário rotineiro. Se o atendimento ocorrer em regime limitado, essa limitação deve estar visível para que uma pessoa não conclua, sem confirmação, que um e-mail será visto imediatamente. A nota prática é direta: mandato, serviços, horários e canais de acionamento precisam ser conhecidos antes de uma crise.

## Como funciona a resposta

O tratamento costuma começar com um relato ou sinal: uma pessoa informa atividade suspeita, uma ferramenta gera um alerta, um fornecedor comunica exposição, ou uma equipe técnica identifica comportamento anômalo. O CSIRT registra o que recebeu, quando recebeu, por qual canal, quem é o contato e quais sistemas ou serviços parecem afetados. Um registro consistente cria uma linha de acompanhamento e permite que a equipe volte às fontes originais, em vez de depender de lembranças ou mensagens dispersas.

Na triagem, a equipe busca determinar se o relato tem relação com segurança, se é plausível, qual público e ativos podem estar envolvidos e que urgência exige. A triagem não é uma conclusão definitiva sobre causa ou autoria. Ela pode classificar o caso provisoriamente, pedir detalhes, relacionar relatos que parecem fazer parte do mesmo evento e encaminhar uma questão operacional que não seja incidente de segurança. Priorizar requer considerar impacto potencial, exposição, criticidade do serviço, extensão conhecida, possibilidade de propagação e incerteza. Um sinal pouco conclusivo pode justificar atenção rápida se envolver um serviço essencial; um alerta conhecido e isolado pode exigir validação antes de mobilizar uma resposta ampla.

Durante a resposta, a equipe acompanha fatos e hipóteses separadamente. Um registro deve indicar o que foi observado, a fonte, o horário e o grau de confirmação, distinguindo isso do que ainda se supõe. O quadro pode mudar à medida que chegam dados de rede, endpoints, identidade, aplicações ou terceiros. Por isso, prazos e conclusões preliminares precisam ser revistos, e mensagens anteriores podem exigir correção. O objetivo não é produzir certeza instantânea, mas reduzir o desconhecido o suficiente para orientar decisões defensivas proporcionais.

## O CSIRT na investigação e nas evidências

Na investigação, o CSIRT pode atuar como ponto de entrada e coordenação entre quem detectou o evento, quem administra os ativos e quem tem competência especializada. A equipe ajuda a formular perguntas: quais contas ou sistemas podem estar envolvidos? Que intervalo de tempo precisa ser examinado? Há registros disponíveis e por quanto tempo são retidos? Quais ações já ocorreram? Quem pode autorizar coleta ou acesso? Essas perguntas orientam a busca sem presumir que a primeira explicação seja correta.

Indícios que ajudam a reconhecer a atuação de um CSIRT incluem um canal de notificação publicado, instruções de escalonamento, critérios de elegibilidade, avisos ou orientações emitidos pela equipe, e registros de incidentes com responsável, cronologia, classificação e encaminhamentos. Internamente, podem existir procedimentos, escala de sobreaviso, contatos de escalonamento, modelos de comunicação, acordos com áreas técnicas e registros de exercícios. Nenhum artefato isolado prova que a capacidade esteja pronta ou seja efetiva; ele demonstra, no máximo, uma parte do arranjo. Uma caixa postal pública sem cobertura definida, por exemplo, não comprova que relatos serão triados no tempo esperado.

## Exemplo hipotético

Imagine que uma funcionária receba uma solicitação inesperada de autenticação e, em seguida, não consiga acessar uma aplicação corporativa. Ela usa o canal de incidente divulgado pela organização. O CSIRT registra horário, aplicação, conta afetada e modo de contato, confirma a identidade por um procedimento independente e encaminha a avaliação à equipe de identidade. Os registros mostram tentativas incomuns, mas ainda não esclarecem se houve acesso indevido. A equipe coordena a revisão de sessões e credenciais, consulta o responsável pela aplicação e preserva os registros relevantes. A liderança decide, com base no impacto e nas orientações técnicas, quais medidas aplicar. Esse exemplo ilustra coordenação defensiva; não afirma que toda indisponibilidade indique comprometimento, nem que o CSIRT tenha autoridade automática para redefinir credenciais.

## Distinções e limites

CSIRT e SOC não são sinônimos perfeitos. Um centro de operações de segurança (SOC) costuma concentrar monitoramento e detecção contínuos, embora sua configuração varie; um CSIRT enfatiza o recebimento, a coordenação e o tratamento de incidentes de um público definido. Uma organização pode integrar as duas funções, separá-las ou contratar partes de cada serviço. Um alerta detectado pelo SOC pode ser encaminhado ao CSIRT para coordenação; a resposta também pode envolver o SOC durante todo o ciclo. O título da unidade não basta para determinar responsabilidades: é preciso consultar os serviços e o mandato reais.

A existência nominal de um CSIRT não assegura cobertura adequada. Uma equipe pequena pode não dispor de especialistas para todo tipo de análise, não operar fora do expediente ou depender de fornecedores. Mesmo uma estrutura madura enfrenta limites de visibilidade, registros incompletos, sistemas legados, informações conflitantes e autoridade distribuída. Reconhecer limites permite acionar os recursos certos e explicitar o risco residual. Prometer investigação completa ou resposta imediata sem capacidade correspondente cria falsa segurança.

## Erros de interpretação

Um erro frequente é tratar o CSIRT como sinônimo de um software, uma ferramenta de monitoramento ou um endereço de e-mail. Ferramentas podem apoiar a capacidade, mas não definem mandato, julgamento, autoridade nem coordenação. Outro é esperar que a equipe previna todos os incidentes. Reduzir risco e melhorar detecção pode fazer parte de seus serviços, porém a segurança depende de controles, decisões e responsabilidades distribuídas por toda a organização.

Por fim, “resposta a incidentes” não significa agir sem autorização. Em situação urgente, procedimentos previamente aprovados podem permitir medidas imediatas; fora deles, uma ação pode afetar continuidade, privacidade ou obrigações contratuais. A equipe precisa saber qual decisão pode executar, qual deve recomendar e quem deve aprovar. A clareza sobre papéis acelera a resposta porque reduz disputas justamente quando o tempo e as informações são escassos.

## Preparação e perguntas frequentes

Antes de um incidente, organizações e comunidades atendidas podem tornar a capacidade mais útil ao publicar escopo e contatos, manter rotas alternativas se o canal principal estiver indisponível, definir escalonamento, treinar a coleta de informações iniciais e combinar como preservar dados. Uma notificação inicial não precisa conter uma investigação pronta. Em geral, ajuda informar o que aconteceu, quando foi percebido, quais ativos parecem envolvidos, que impacto é observado, quais ações já foram tomadas e como falar com a pessoa responsável. Senhas e dados desnecessários não devem ser enviados em canais comuns.

**Um CSIRT precisa funcionar 24 horas por dia?** Não necessariamente. A cobertura depende do mandato e dos recursos. O público precisa saber se existe atendimento contínuo, sobreaviso ou horário comercial, e o que fazer em uma emergência fora desse período. Um horário não publicado ou ambíguo é uma falha de expectativa, mesmo que a equipe trabalhe com dedicação.

**Qualquer funcionário pode acionar a equipe?** Isso depende do escopo e do processo interno, mas um mecanismo de relato deve ser simples o bastante para que uma suspeita chegue à triagem. A equipe pode validar o vínculo e encaminhar o caso depois. Exigir que a pessoa prove tecnicamente a intrusão antes de reportar impediria justamente a avaliação especializada que o serviço deveria oferecer.

**O CSIRT decide se um incidente deve ser divulgado?** Em geral, ele fornece fatos, avaliação técnica e coordenação; decisões de divulgação dependem de governança e de obrigações aplicáveis, envolvendo as áreas competentes. A resposta técnica não elimina deveres de comunicação, e a equipe não deve assumir essa autoridade apenas por ser o ponto central do caso.

**Toda organização precisa de uma equipe dedicada?** Não. O requisito prático é dispor de capacidade adequada ao risco e saber quem responde. Uma organização pode distribuir funções ou contratar serviços, desde que defina público, autoridade, cobertura, transferência de responsabilidade e acesso aos dados. Terceirizar tarefas não elimina a responsabilidade de compreender o serviço contratado nem de decidir sobre impactos no próprio ambiente.

**Como avaliar se a capacidade funciona?** Observe se relatos chegam ao canal correto, se são reconhecidos e encaminhados, se decisões e responsáveis ficam registrados, se a equipe consegue obter apoio e se ações posteriores reduzem lacunas. Indicadores de atividade podem ajudar, mas números sem contexto não demonstram qualidade. Exercícios e revisões de casos revelam pontos de atrito; resultados devem gerar mudanças com responsáveis e acompanhamento.

## Relação com o capítulo

Na organização da versão original, o CSIRT se relaciona ao capítulo 7. O termo oferece uma lente para compreender quem recebe uma ocorrência, como a coordenação se estrutura e onde começam e terminam as responsabilidades durante a resposta. Ao analisar um caso, a pergunta útil não é apenas “qual equipe aparece?”, mas qual público ela atende, que autoridade recebeu, quais serviços prestou e como articulou as pessoas capazes de proteger e recuperar os sistemas.
