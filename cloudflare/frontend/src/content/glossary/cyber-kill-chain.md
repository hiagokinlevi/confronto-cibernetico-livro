# Cyber Kill Chain

## Definição e propósito

Cyber Kill Chain, também chamada Kill Chain, é um modelo que representa etapas de uma operação de ataque para localizar oportunidades de detecção e interrupção. A ideia central é observar a atividade adversária como uma sequência de objetivos e ações que, em conjunto, podem levar a um impacto. Ao decompor essa atividade, equipes de segurança conseguem perguntar não apenas “houve uma invasão?”, mas também “que sinais surgiram antes, durante e depois do acesso inicial, e em que ponto ainda era possível reduzir o dano?”.

A expressão *kill chain* vem de uma forma de organizar uma cadeia de ações que culmina em um resultado. No contexto cibernético, o modelo conhecido como Cyber Kill Chain foi difundido pela Lockheed Martin e divide uma operação em sete etapas: reconhecimento, armamento, entrega, exploração, instalação, comando e controle e ações sobre objetivos. Essas etapas servem como referências analíticas. Elas não afirmam que todo incidente percorre, de modo observável e linear, sete caixas sucessivas.

O valor do modelo está em tornar explícitas as dependências e as oportunidades defensivas. Se uma ação anterior à execução do código malicioso for identificada, por exemplo, a organização pode bloquear a entrega ou reduzir a probabilidade de comprometimento. Se o invasor já obteve acesso, controles de identidade, segmentação, monitoramento e resposta ainda podem impedir que o acesso se transforme em persistência, movimentação interna, coleta ou interrupção de serviços. A cadeia ajuda a procurar pontos de contenção em diferentes momentos, não apenas no primeiro alerta.

## As etapas como lentes de análise

Os nomes abaixo descrevem funções gerais observadas em certas operações. Na prática, atividades podem ser omitidas, combinadas, repetidas, realizadas por terceiros ou ficar invisíveis para os registros disponíveis.

### Reconhecimento

Nesta etapa, o operador reúne informações que podem orientar a escolha de alvos e a preparação de uma abordagem. O objeto da observação pode ser uma organização, pessoas, serviços expostos, relações com fornecedores ou características de um ambiente. Parte dessa coleta pode ocorrer em fontes públicas; outra parte pode aparecer como consultas, tentativas de conexão ou padrões de interação com sistemas da organização.

Para a defesa, a distinção relevante não é simplesmente entre “público” e “privado”, mas entre uma atividade isolada e um conjunto contextualizado. Uma consulta a um domínio, por si só, raramente demonstra intenção hostil. Volume, repetição, seleção de serviços, horários, origem, relação com eventos posteriores e comparação com o comportamento normal ajudam a avaliar se há um padrão que mereça investigação. Registros de DNS, firewall, proxy, aplicações expostas e serviços de identidade podem oferecer peças diferentes desse quadro, cada qual com lacunas próprias.

### Armamento

Armamento designa a preparação de recursos que serão usados na operação, como uma mensagem com conteúdo malicioso ou um artefato destinado a explorar uma condição vulnerável. O termo descreve uma função no modelo, não implica que a equipe defensora necessariamente verá a preparação acontecer. Ela pode ocorrer fora da infraestrutura monitorada, ser terceirizada ou utilizar ferramentas já existentes.

Por isso, é comum inferir a preparação a partir do que chega ao ambiente, em vez de observar sua produção. Um anexo, arquivo, link, script ou componente detectado pode indicar o tipo de recurso preparado, mas essa inferência precisa ser sustentada por análise e contexto. A presença de um arquivo suspeito não prova que ele tenha sido executado; um alerta de ferramenta de segurança pode identificar uma família ou comportamento provável sem explicar quem preparou o material nem com que intenção.

### Entrega

Entrega é a introdução do recurso ou da interação de ataque no alcance do alvo. Pode envolver correio eletrônico, navegação, um serviço exposto, uma mídia removível, uma relação de confiança ou outra via. Essa etapa chama atenção para controles preventivos e de inspeção: filtros de mensagem, proteção de navegação, gestão de exposição, políticas de acesso e mecanismos que reduzam a entrada de conteúdo indesejado.

A evidência costuma estar distribuída. Um gateway pode registrar que uma mensagem foi recebida, mas não se ela foi aberta. Um proxy pode mostrar uma conexão, sem estabelecer que o conteúdo foi executado. Um sistema de endpoint pode registrar a gravação de um arquivo, enquanto a telemetria de identidade revela uma sessão posterior. Correlacionar horários, identificadores de mensagem, nomes de host, contas e indicadores de arquivo é mais informativo do que tratar cada alerta como descrição completa do incidente.

### Exploração

Exploração é o uso de uma condição ou interação para obter execução, acesso ou outro efeito inicial. O modelo não exige que isso corresponda sempre a uma vulnerabilidade de software: a ação pode depender de uma configuração fraca, de uma interação humana ou de uma credencial utilizada indevidamente. A investigação deve distinguir tentativa de sucesso. Uma requisição que parece explorar uma falha pode ter sido bloqueada; a ausência de bloqueio, por outro lado, não prova por si só que a exploração funcionou.

Logs de aplicações, eventos do sistema operacional, telemetria de endpoint, registros de autenticação e alertas de prevenção podem ajudar a estabelecer o resultado. É importante preservar a sequência temporal e a origem desses dados. Relógios dessincronizados, coleta parcial e retenção curta podem criar uma cronologia enganosa. A pergunta defensiva é o que o sistema efetivamente fez, que principal ou processo estava envolvido e quais evidências independentes confirmam a interpretação.

### Instalação

Instalação representa a criação de meios para manter ou retomar acesso, quando isso faz parte da operação. Pode se manifestar como alterações em arquivos, tarefas, serviços, configurações, contas, extensões ou mecanismos de inicialização. Nem todo invasor instala um componente novo: uma conta comprometida ou uma ferramenta administrativa legítima pode oferecer continuidade suficiente. Tampouco toda alteração incomum constitui persistência maliciosa; atualizações e atividades de suporte também mudam o estado dos sistemas.

A análise defensiva combina inventário, comparação com uma linha de base, autoria e horário das mudanças, processos associados e relação com outras atividades suspeitas. O contexto de administração é decisivo. Uma alteração feita por uma conta autorizada pode continuar sendo imprópria se a sessão tiver sido comprometida, se o escopo não corresponder a uma mudança aprovada ou se houver atividade paralela incompatível. Registrar a proveniência dos eventos permite investigar essas diferenças sem atribuir intenção com base em um único artefato.

### Comando e controle

Comando e controle descreve a comunicação que permite ao operador coordenar sistemas comprometidos ou receber informações deles. A comunicação pode usar protocolos e serviços comuns, infraestrutura dedicada ou intermediários legítimos. O uso de um serviço popular, um endereço conhecido ou uma conexão cifrada não prova legitimidade nem malícia. Indicadores de rede precisam ser interpretados junto com o processo que iniciou a conexão, o dispositivo, a conta, o destino e o padrão temporal.

Fontes úteis incluem DNS, proxy, firewall, telemetria de fluxo, registros de endpoint e informações de reputação disponíveis à organização. Cada uma responde a perguntas diferentes: houve resolução de nome, tentativa de conexão, transferência de dados ou processo associado? Uma conexão observada não revela necessariamente o conteúdo transmitido, e a falta de uma conexão registrada pode refletir ausência de visibilidade, não ausência de comunicação. A investigação deve anotar esse limite, em especial quando tráfego cifrado ou intermediado restringe a inspeção.

### Ações sobre objetivos

Esta etapa reúne atividades que buscam o resultado pretendido, como coleta, acesso a dados, movimentação para outros sistemas, alteração de informações, interrupção de serviços ou preparação para extorsão. O impacto pode ocorrer sem uma sequência visível de estágios anteriores. Um invasor que usa credenciais válidas pode acessar recursos diretamente; uma operação pode ainda terceirizar parte do trabalho ou aproveitar acesso já estabelecido por outra pessoa.

## Como transformar o mapa em controles

Para cada atividade relevante, associe uma oportunidade defensiva concreta. Antes do acesso, isso pode significar reduzir serviços expostos, filtrar conteúdo ou exigir autenticação resistente a abuso. Depois de uma autenticação suspeita, pode significar validar o dispositivo, exigir nova comprovação, revogar sessões ou restringir privilégios. Quando há indícios de acesso a dados, pode ser necessário limitar a rota de saída, preservar cópias e avaliar o alcance. São exemplos de objetivos defensivos; a escolha depende da arquitetura, das consequências de interromper o serviço e dos procedimentos aprovados pela organização.

Um mapa de cobertura deve registrar também as condições para que o controle funcione: quais registros precisam estar habilitados, quem recebe o alerta, que contexto acompanha a notificação e quem pode agir. Um alerta sem responsável ou sem mecanismo de contenção pode ter pouca utilidade. Da mesma forma, um bloqueio automatizado pode interromper uma operação legítima se a regra não considerar o contexto. Exercícios e revisões de incidentes podem revelar essas dependências e indicar melhorias específicas, sem tratar a simples existência de uma ferramenta como prova de defesa efetiva.

A cadeia também ajuda a conversar entre equipes com vocabulários diferentes. Uma equipe de rede pode descrever um fluxo; a equipe de endpoint, a execução de um processo; e a equipe de identidade, o uso de uma conta. Relacionar esses registros a objetivos gerais torna mais clara a passagem de responsabilidade e permite formular perguntas comuns. Para que isso funcione, os nomes das etapas devem permanecer hipóteses organizadoras, e os eventos originais precisam continuar acessíveis para revisão técnica.

## Perguntas frequentes
### Toda operação passa pelas sete etapas?

Não. As etapas são uma estrutura analítica, não uma sequência obrigatória. Uma operação pode pular, repetir ou combinar fases, e os registros disponíveis podem não mostrar algumas delas. A ausência de evidência de uma etapa deve ser registrada como limite do conhecimento, não automaticamente como prova de que ela não ocorreu.


### Como usar o modelo para avaliar cobertura defensiva?

Relacione hipóteses de atividade a telemetria, controles, responsáveis e ações possíveis. Avalie se a equipe consegue identificar o evento com tempo e contexto suficientes para agir. Um controle listado em uma etapa não garante cobertura; a validação depende de cenários representativos, qualidade dos dados, operação contínua e capacidade de resposta.


### Quando a Cyber Kill Chain é especialmente útil?

Quando é preciso explicar uma operação de forma compreensível, organizar uma linha do tempo, discutir pontos de interrupção ou revelar lacunas entre controles e fontes de dados. Para registrar técnicas específicas, pode ser necessário complementar o modelo com uma taxonomia mais detalhada; para gerenciar a resposta inteira, são necessários processos próprios de incidente.

No capítulo 1 da versão original do manuscrito, o conceito se relaciona à apresentação de modelos para compreender operações cibernéticas. Neste verbete, a cadeia é tratada como instrumento para estruturar perguntas defensivas e localizar possibilidades de detecção e interrupção. Sua leitura mais produtiva preserva a utilidade do mapa sem confundir a representação com a sequência exata de um caso real.
