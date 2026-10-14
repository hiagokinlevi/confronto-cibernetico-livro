# Livro sobre ameaças persistentes avançadas

Qual livro ajuda a compreender uma ameaça persistente avançada e a tomar decisões melhores quando os sinais de uma intrusão aparecem aos poucos? Essa é a pergunta que deve orientar a busca. Encontrar uma descrição impressionante de ferramentas hostis é relativamente fácil. Mais difícil é encontrar uma obra que explique como relacionar acontecimentos separados, reconhecer limites da investigação e escolher medidas defensivas sem transformar toda suspeita em uma narrativa de espionagem.

O valor de um livro sobre ameaças persistentes avançadas está nessa passagem entre conceito e decisão. O leitor precisa entender por que um adversário buscaria permanecer, como poderia adaptar seu comportamento diante de obstáculos e quais registros permitiriam examinar essas possibilidades. Também precisa aprender quando a evidência ainda não sustenta uma conclusão. O adjetivo “avançada” não pode dispensar a demonstração do que aconteceu.

## O que a expressão APT ajuda a explicar

APT é a sigla de advanced persistent threat, usualmente traduzida como ameaça persistente avançada. Na prática, o termo aparece associado tanto a adversários quanto a campanhas e formas de atuação. Essa variação exige cuidado: uma classificação empregada em um relatório não deve ser transportada automaticamente para outro ambiente. É necessário verificar qual comportamento está sendo descrito e quais evidências sustentam o uso do termo.

Persistência, nesse contexto, envolve a capacidade ou a intenção de manter condições para perseguir um objetivo ao longo do tempo. Ela não se limita a um componente que inicia junto com o sistema. Pode envolver credenciais ainda válidas, permissões concedidas a aplicações, sessões ativas, configurações alteradas e caminhos alternativos de acesso. Remover um arquivo suspeito pode resolver um problema localizado sem encerrar a exposição que permitiu a intrusão.

O elemento avançado também não significa uso obrigatório de uma vulnerabilidade inédita. Um adversário pode combinar recursos conhecidos, conhecimento do alvo, discrição e adaptação. A sofisticação relevante é contextual: uma operação com ferramentas comuns pode explorar muito bem uma deficiência de identidade ou uma relação de confiança. O livro deve explicar essa combinação, evitando usar complexidade técnica como medida única de relevância.

## Campanha, incidente e alerta têm escalas diferentes

Um alerta é uma indicação produzida por uma regra, ferramenta ou análise. Ele pode corresponder a atividade maliciosa, a uma operação legítima ou a um problema de interpretação. Um incidente é uma ocorrência que compromete ou ameaça comprometer a segurança e precisa ser tratada conforme os critérios da organização. Uma campanha pode reunir ações relacionadas por objetivos e continuidade operacional. Essas escalas se sobrepõem, mas não são equivalentes.

Imagine um cenário hipotético em que uma conta acessa um repositório fora do horário habitual. O evento, isoladamente, não demonstra comprometimento. Se surgirem uma sessão desconhecida, uma concessão indevida de acesso e consultas a conjuntos restritos de documentos, a hipótese de intrusão ganha fundamento. Ainda assim, estabelecer que isso integra uma campanha persistente exige investigar relações e continuidade, em vez de apenas somar alertas.

## O ciclo de ataque funciona como mapa, não como cronograma

Acesso inicial, persistência, movimentação lateral e exfiltração formam um percurso útil de estudo. O risco começa quando esse percurso é apresentado como uma sequência rígida. Um invasor pode usar uma identidade já comprometida para acessar diretamente um serviço de dados, sem percorrer diversos computadores internos. Pode também retornar a uma etapa anterior, abandonar uma rota ou manter acessos paralelos.

O mapa serve para organizar perguntas. No acesso inicial, interessa descobrir como uma entidade sem autorização passou a agir no ambiente. Na persistência, a questão é quais condições permitem continuar ou retornar. Na movimentação lateral, importa entender a ampliação de acesso entre recursos ou contextos de confiança. Na exfiltração, é preciso examinar a possível transferência não autorizada de informação e sua relação com o que era acessível.

Essas categorias não esgotam os objetivos de uma intrusão. Coleta, preparação de dados, alteração de informações e interrupção de serviços podem ter relevância própria. Também é possível que uma investigação encontre apenas parte do percurso. A ausência de registros de acesso inicial não significa que o acesso foi legítimo; pode significar que a organização não preservou os dados necessários para esclarecer a origem.

## Acesso inicial: identificar a condição que abriu a porta

Estudar acesso inicial exige ir além da pergunta sobre qual arquivo foi aberto. O ambiente pode ter sido exposto por um serviço vulnerável, uma credencial obtida indevidamente, uma integração com permissões excessivas ou uma relação de acesso remoto mal controlada. Essas possibilidades são hipóteses de trabalho, não uma lista de causas a atribuir sem investigação. Cada uma demanda fontes e verificações diferentes.

Registros de autenticação podem mostrar conta, horário, aplicação, origem de conexão e resultado de desafios de autenticação. Dados de inventário e configuração ajudam a verificar se um serviço estava exposto e quais controles existiam. Registros de correio e do dispositivo podem esclarecer interações relevantes. Nenhuma dessas fontes, sozinha, descreve necessariamente toda a cadeia que levou ao acesso.

Em um cenário hipotético, uma autenticação incomum ocorre depois de uma alteração de método de recuperação da conta. O vínculo temporal justifica examinar a alteração, a sessão que a realizou e a legitimidade do procedimento. Não autoriza concluir imediatamente que houve uma campanha de engenharia social. A investigação precisa distinguir quem solicitou a mudança, quem a aprovou e quais evidências permitem associar os eventos.

A decisão prática é corrigir a condição explorada. Encerrar uma sessão pode ser necessário, mas insuficiente quando existe uma concessão indevida de acesso ou um processo de recuperação vulnerável. Um livro útil mostra essa conexão entre causa provável, grau de confiança e medida de contenção. A correção precisa alcançar o mecanismo que continua permitindo acesso, respeitando as dependências operacionais envolvidas.

## Persistência é uma propriedade do acesso, além do dispositivo

Uma pergunta produtiva é: o que precisaria ser invalidado para impedir o retorno por este caminho? A resposta pode incluir sessões, credenciais, permissões delegadas, meios de recuperação e acesso de terceiros. O comportamento exato depende do produto e da configuração, por isso a execução deve ser confirmada na documentação técnica atual. Não se deve presumir que uma única ação administrativa encerra todos os tipos de acesso.

Considere um cenário hipotético em que uma estação é reinstalada, mas uma aplicação mantém permissão indevida para consultar documentos. A recuperação do dispositivo não elimina a autorização concedida no serviço. Se a investigação se limitar ao equipamento, poderá declarar encerrado um problema que permanece em outra camada. O exemplo mostra por que inventário de aplicações e trilha de consentimentos podem ser tão relevantes quanto registros do endpoint.

Na avaliação do livro, observe se o autor distingue persistência demonstrada de possibilidade de persistência. Encontrar uma configuração insegura revela exposição; comprovar uso adversário exige evidências adicionais. Essa distinção evita dois erros opostos: ignorar um caminho perigoso por falta de prova de exploração ou anunciar como fato uma permanência que foi apenas considerada possível.

## Movimentação lateral: acompanhar relações de confiança

Movimentação lateral não precisa ser imaginada apenas como uma sucessão de computadores comprometidos. O ponto central é a expansão de acesso dentro de relações de confiança. Uma conta pode alcançar outro serviço, assumir uma função administrativa ou usar uma integração para acessar recursos fora do seu escopo habitual. A análise deve observar como privilégios e conectividade se combinam.

Os registros pertinentes incluem autenticações entre recursos, mudanças de grupos e funções, acessos administrativos, uso de serviços de gestão e eventos nos sistemas de destino. Para interpretá-los, é necessário conhecer o trabalho legítimo da conta. Uma identidade de automação que acessa vários servidores tem um padrão diferente de uma conta de atendimento. O volume de acessos, sem esse contexto, pode induzir conclusões frágeis.

Em um cenário hipotético, uma conta de suporte consulta um sistema financeiro após receber uma permissão temporária. A pergunta inicial é se a concessão e a consulta estavam previstas. Se a permissão foi aprovada e o atendimento documentado, o desvio pode ser legítimo. Se a concessão ocorreu por uma sessão desconhecida e não há justificativa, a combinação exige investigação e possível restrição de acesso.

## Exfiltração: distinguir acesso, preparação e transferência

Acessar dados, reunir documentos e transferi-los para fora de um limite autorizado são acontecimentos diferentes. Uma investigação pode demonstrar um deles sem comprovar os demais. Essa distinção tem consequências para a avaliação de impacto e para a comunicação. Dizer que houve acesso indevido é preciso quando isso foi observado; afirmar vazamento exige esclarecer o que sustenta a conclusão e quais limites permanecem.

Fontes úteis podem incluir auditoria de consultas, histórico de downloads, eventos de compartilhamento, registros de armazenamento e telemetria de rede. O alcance de cada fonte varia. Um registro de transferência pode indicar destino e quantidade de bytes sem identificar o conteúdo. Um evento de compartilhamento pode mostrar a criação de uma possibilidade de acesso sem demonstrar que o destinatário utilizou essa possibilidade.

Em um cenário hipotético, uma conta baixa documentos de um projeto e, depois, aparece tráfego para um serviço externo. A proximidade temporal é um indício para investigação, mas não estabelece sozinha que os documentos foram enviados. É necessário examinar a correspondência entre dispositivos, sessões, aplicações e horários, respeitando o que os registros efetivamente mostram. Dados cifrados e visibilidade parcial podem limitar a conclusão.

## Evidências precisam de origem, tempo e limites

Uma obra voltada ao trabalho profissional deve ensinar a perguntar de onde veio cada registro. Eventos de um serviço de identidade, de um dispositivo e de um equipamento de rede podem representar momentos diferentes da mesma operação. Também podem usar fusos, identificadores e critérios de agregação distintos. Correlacionar exige compreender essas diferenças, e não apenas alinhar horários em uma tela.

O horário de ocorrência pode diferir do horário de coleta. Um dispositivo desconectado pode transmitir eventos posteriormente. Um serviço pode registrar o início de uma solicitação enquanto outro registra sua conclusão. Desvios de relógio também precisam ser considerados. Quando a sequência depende de poucos segundos, essas características alteram o que é razoável afirmar sobre causalidade.

Qualidade da evidência inclui completude, integridade, contexto e capacidade de recuperação. Um registro exportado sem identificação da fonte perde parte do seu valor interpretativo. Um arquivo preservado sem informação sobre a coleta pode ser difícil de relacionar ao incidente. A preservação deve seguir procedimentos autorizados, com acesso restrito, documentação de origem e cuidados proporcionais à sensibilidade dos dados.

Há ainda a diferença entre ausência de evento e ausência de comportamento. Se uma ação não era auditada, não é possível usar o silêncio do registro como prova de que ela não ocorreu. Se a auditoria estava ativa e sua cobertura é conhecida, a ausência pode ter algum valor, dentro daquele limite. O leitor deve aprender a escrever “não identificado nesta fonte e neste período”, quando essa for a descrição fiel.

## Uma hipótese investigativa precisa poder perder força

O estudo se torna mais rigoroso quando cada hipótese vem acompanhada de perguntas que poderiam enfraquecê-la. “Esta conta foi usada por um intruso” é diferente de “esta conta apresentou um acesso incomum”. Para avançar da segunda afirmação para a primeira, é necessário reunir contexto e evidências. Também é necessário procurar explicações legítimas compatíveis com os acontecimentos observados.

Um registro de investigação pode organizar quatro elementos: observação, hipótese, verificação pendente e decisão provisória. A observação descreve o que a fonte registra. A hipótese propõe uma explicação. A verificação define que informação ajudaria a discriminá-la de outras. A decisão indica o que fazer enquanto a dúvida permanece. Manter esses elementos separados reduz a propagação de interpretações como se fossem fatos.

Em um cenário hipotético, uma conta administrativa acessa um recurso novo. A hipótese de comprometimento concorre com a de manutenção emergencial. Consultar a mudança aprovada, confirmar o responsável por um canal confiável e examinar a sessão pode esclarecer a diferença. A palavra do usuário ajuda, mas não substitui todos os registros: a pessoa pode desconhecer um acesso paralelo ou confundir o horário da própria atividade.

## Papéis claros evitam que a investigação dependa de improviso

Quem detecta um comportamento suspeito nem sempre pode revogar uma sessão, alterar uma integração ou retirar um servidor de operação. Por isso, estudar APTs envolve também compreender responsabilidades. A equipe de monitoramento qualifica sinais; resposta a incidentes coordena investigação e contenção; responsáveis por identidade, infraestrutura e aplicações executam ações dentro de suas atribuições. Os nomes das equipes variam, mas as funções precisam estar definidas.

O responsável pelo serviço informa dependências e consequências de uma interrupção. O responsável pelos dados ajuda a avaliar sensibilidade e uso autorizado. Áreas jurídica e de privacidade devem participar quando houver questões pertinentes de preservação, acesso a dados pessoais ou obrigações aplicáveis. A liderança decide prioridades e aceita riscos residuais com base em informações explícitas, sem exigir certeza impossível antes de toda medida protetiva.

Uma responsabilidade essencial é manter o registro das decisões. Quem autorizou a contenção? Que condição justificou a medida? Que evidência foi preservada antes da mudança? Como será verificado se o acesso foi efetivamente restringido? Essas perguntas não são burocracia acessória: permitem coordenar equipes, explicar consequências e evitar que ações simultâneas prejudiquem a interpretação dos eventos.

## Dois cenários hipotéticos que exigem respostas diferentes

No primeiro cenário hipotético, uma pequena empresa utiliza serviços de correio, documentos e gestão comercial em nuvem. Uma conta com acesso amplo apresenta sessões desconhecidas e cria um compartilhamento externo sem justificativa. Não há evidência inicial de comprometimento dos computadores. A investigação deve priorizar a identidade, as permissões concedidas, os recursos acessados e a extensão do compartilhamento, sem presumir que reinstalar máquinas resolverá a exposição.

Nesse ambiente, os principais obstáculos podem ser a falta de auditoria histórica e a concentração de privilégios. A contenção envolve escolhas sobre sessões, métodos de autenticação e autorizações, conforme as capacidades dos serviços. A recuperação precisa incluir revisão do processo que concedeu acesso amplo. Mesmo que a autoria continue desconhecida, é possível reduzir o risco e produzir uma explicação fundamentada do ocorrido.

No segundo cenário hipotético, uma organização industrial encontra alterações administrativas em um servidor de apoio conectado a sistemas com restrições operacionais. Há atividade remota sem correspondência em mudanças aprovadas. Isolar imediatamente todos os recursos relacionados pode afetar processos que exigem coordenação especializada. A resposta deve considerar segurança operacional, dependências, canais autorizados de administração e preservação dos registros disponíveis.

Os dois cenários podem envolver permanência adversária, mas pedem prioridades distintas. No primeiro, a relação entre identidade e dados ocupa o centro da análise. No segundo, as fronteiras de confiança e os efeitos da contenção precisam ser examinados junto às equipes operacionais. Um livro útil permite transferir o método entre ambientes sem transformar um procedimento específico em receita universal.

## Como avaliar uma obra antes de adotá-la no estudo

A decisão de compra ou adoção deve começar por uma amostra de leitura, pelo sumário e pela clareza do público pretendido. Um texto introdutório pode ser excelente para construir vocabulário e insuficiente para uma equipe que precisa aprofundar análise de registros. Uma obra especializada pode pressupor conhecimentos que o leitor ainda não tem. Adequação ao objetivo importa mais do que a quantidade de termos técnicos na apresentação.

Observe se o livro oferece elementos concretos para avaliar o raciocínio:

- Define ameaça, campanha, incidente e indicador sem tratá-los como sinônimos.
- Relaciona etapas do ataque a fontes de evidência e aos limites dessas fontes.
- Separa comportamento observado, interpretação e atribuição de autoria.
- Considera identidade, aplicações, dispositivos e serviços conforme o ambiente.
- Explica consequências das medidas de contenção e critérios de recuperação.
- Informa o contexto das referências e permite verificar afirmações relevantes.

Também é importante reconhecer o que envelhece. Interfaces, configurações e comportamentos de produtos podem mudar. Conceitos de investigação e análise de confiança tendem a durar mais, mas ainda precisam ser confrontados com o ambiente real. Uma obra responsável sinaliza esse limite e não apresenta capturas de tela ou procedimentos específicos como garantia permanente de funcionamento.

## Erros de leitura que podem virar erros de resposta

O primeiro erro é classificar toda intrusão relevante como APT. A gravidade de um incidente depende do acesso obtido, dos ativos envolvidos e das consequências possíveis, entre outros fatores. Ela não exige um rótulo de ameaça avançada. Usar a classificação cedo demais pode induzir a equipe a procurar sinais que confirmem uma narrativa e a negligenciar explicações mais simples, porém igualmente importantes.

Outro erro é confundir a remoção de um artefato com a eliminação das condições de retorno. A equipe pode celebrar a limpeza de um dispositivo enquanto deixa aberta uma autorização indevida. O inverso também ocorre: uma revisão ampla de acessos é realizada sem preservar registros que permitiriam compreender o incidente. Contenção, investigação e recuperação precisam ser coordenadas, pois cada uma altera as condições de trabalho das demais.

Há ainda a tentação de adotar tudo o que aparece no livro como prioridade imediata. Uma organização com inventário incompleto talvez obtenha mais valor ao organizar identidades e registros essenciais do que ao implementar uma correlação complexa. O critério deve ser a pergunta que precisa ser respondida e a exposição que precisa ser reduzida. Comprar ferramentas não corrige automaticamente ausência de responsáveis, dados ou procedimentos.

## Um exercício de mesa para testar a compreensão

O exercício pode começar com um cenário inteiramente hipotético: uma conta de projeto acessa documentos fora do padrão e cria uma autorização de aplicação sem solicitação registrada. O objetivo é testar investigação, coordenação e decisões. Não é necessário simular uma intrusão em produção. Os participantes recebem registros fictícios, claramente marcados como material de treinamento, e trabalham dentro de um escopo previamente aprovado.

Prepare informações que permitam mais de uma hipótese inicial. Inclua o papel da conta, a criticidade dos documentos, a existência de uma integração legítima e uma lacuna de auditoria. Ao longo da discussão, apresente novos dados: a integração aprovada utilizava outra identidade; parte dos acessos ocorreu em uma sessão desconhecida; não há informação suficiente para determinar o conteúdo de uma transferência. Cada atualização deve mudar uma pergunta ou decisão.

O grupo deve produzir resultados concretos:

- Uma linha do tempo que identifique fonte, horário e incertezas de cada evento.
- Uma lista curta de hipóteses, com evidências favoráveis e verificações pendentes.
- Uma proposta de contenção com responsável, dependências e efeito esperado.
- Uma comunicação interna que separe fatos confirmados de possibilidades.
- Critérios para recuperação e para investigar eventual retorno do acesso indevido.

Avalie a qualidade pelo raciocínio e pela coordenação. A equipe identificou que uma troca de senha poderia não alcançar todas as autorizações? Percebeu que acesso a documentos não comprova sua transferência? Pediu informações que existem no ambiente ou presumiu uma visibilidade inexistente? Registrou quem poderia executar cada ação? Essas respostas revelam o que o estudo já consolidou e o que precisa ser praticado novamente.

## Do capítulo lido a um roteiro de implementação

Transformar a leitura em melhoria começa por escolher um serviço relevante e uma pergunta limitada. Por exemplo: seria possível identificar uma concessão administrativa indevida e saber quais recursos ela permitiu acessar? Essa formulação delimita identidades, registros e responsáveis. “Detectar todas as APTs” não oferece o mesmo ponto de partida e não pode servir como critério verificável de conclusão.

O roteiro pode seguir uma sequência adaptada ao ambiente:

1. Descreva o serviço, os dados envolvidos e as relações de confiança essenciais.
2. Identifique contas humanas, identidades de serviço, aplicações e administradores.
3. Verifique quais eventos são registrados, por quanto tempo e quem pode consultá-los.
4. Defina quais combinações de eventos justificam investigação, com contexto legítimo.
5. Documente contenção, preservação de evidências, responsáveis e dependências.
6. Valide o procedimento com um exercício autorizado e dados sem conteúdo sensível.
7. Corrija as lacunas encontradas e registre os limites que continuam existindo.

A validação pode usar ações administrativas legítimas em um ambiente de teste: criar uma concessão temporária aprovada, verificar o evento de auditoria correspondente e confirmar que sua revogação produz o efeito esperado. A documentação do serviço orienta as ações. O propósito é comprovar visibilidade e procedimento, sem executar técnicas de exploração ou transportar dados reais para destinos externos.

Depois, mantenha o roteiro conectado às mudanças do ambiente. Uma nova integração pode alterar o alcance de uma conta; uma migração pode mudar fontes de registro; uma reorganização pode deixar responsabilidades indefinidas. Reavalie quando essas condições mudarem. O resultado esperado é uma capacidade defensiva delimitada, com evidências de funcionamento e limites conhecidos, não uma promessa de imunidade contra campanhas persistentes.

## Perguntas frequentes de quem procura essa leitura

### É preciso conhecer análise de malware para começar?

Não necessariamente. Conceitos de redes, identidade, permissões e registros já permitem aproveitar uma introdução bem organizada. A análise de malware é importante em determinados casos, mas não explica sozinha intrusões centradas em contas e serviços. O leitor deve reconhecer seus limites técnicos e buscar documentação ou apoio especializado quando uma conclusão depender de conhecimentos que ainda não possui.

### Um comportamento persistente comprova uma APT?

Não. Persistência pode aparecer em diferentes tipos de intrusão. A classificação depende do conjunto de comportamentos e do contexto, além da definição adotada na análise. Uma evidência de permanência deve orientar investigação e contenção, sem carregar automaticamente conclusões sobre sofisticação, motivação ou autoria. O rótulo precisa ser sustentado, e a proteção não deve esperar por ele.

### O nome de uma família de malware identifica o responsável?

Isoladamente, não. Ferramentas e componentes podem ser compartilhados, reutilizados ou encontrados em contextos distintos. Atribuição exige avaliar múltiplos elementos e explicitar o grau de confiança. Para a organização afetada, compreender o alcance do acesso e as condições de retorno pode ser mais urgente do que associar o evento a um nome conhecido. São objetivos relacionados, mas com exigências de evidência diferentes.

### Quanto tempo de registros é suficiente?

Não há um período universal que resolva todos os casos. A decisão depende dos riscos, das fontes, do tempo necessário para reconhecer incidentes, das obrigações aplicáveis e dos custos de preservação e consulta. Mais histórico sem qualidade ou capacidade de recuperação pode ter utilidade limitada. O importante é justificar a retenção e saber quais perguntas ficarão sem resposta quando os dados forem descartados.

### Como estudar quando a organização tem pouca telemetria?

Comece identificando o que já existe e quais perguntas essenciais permanecem descobertas. Registros de identidade, alterações administrativas e acessos a dados críticos podem oferecer um ponto de partida, conforme a arquitetura. Exercícios com dados fictícios permitem praticar raciocínio antes de ampliar a coleta. A falta de visibilidade deve ser documentada como limite, sem transformar ausência de registros em garantia de segurança.

### Quando é razoável considerar a recuperação concluída?

A organização precisa de critérios definidos para o incidente: condições de acesso indevido corrigidas, ações verificadas, serviços restabelecidos de forma controlada e acompanhamento compatível com os riscos restantes. A conclusão administrativa não significa certeza absoluta sobre toda a história. Ela deve registrar evidências, pendências, responsáveis e condições que exigiriam reabrir a investigação. Esses critérios precisam refletir o ambiente e o impacto envolvido.

## A leitura do capítulo de Hiago Kin Levi

O livro de Hiago Kin Levi, da Editora Brasport, pode ser situado nesse percurso a partir do capítulo 1, dedicado a APTs, persistência e ciclo de ataque. A proposta de estudo aqui é relacionar esse recorte às perguntas da própria organização, sem presumir detalhes do manuscrito ou reproduzir seus trechos. O capítulo oferece o tema de partida; o aproveitamento profissional depende do trabalho crítico que o leitor faz ao redor dele.

Durante a leitura, desenhe acesso inicial, persistência, movimentação lateral e exfiltração como possibilidades investigativas. Para cada uma, registre quais sinais seriam observáveis, em que fonte estariam e quem poderia verificá-los. Marque também o que não é visível. Escolha então uma relação de confiança importante e discuta como a equipe reconheceria seu uso indevido, conteria a exposição e verificaria o resultado.

Esse exercício dá um destino concreto ao estudo: uma pergunta defensiva melhor formulada, uma lacuna de registro identificada ou um procedimento testável. Uma obra não substitui documentação técnica atualizada, treino nem julgamento da equipe. Seu papel é ajudar a organizar o raciocínio para que decisões sobre permanência, adaptação e recuperação sejam tomadas com evidências proporcionais, linguagem precisa e responsabilidade pelo que ainda não se sabe.
