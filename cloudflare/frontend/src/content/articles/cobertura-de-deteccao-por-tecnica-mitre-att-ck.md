# Cobertura de detecção por técnica MITRE ATT&CK

## Pergunta central: o que significa dizer que uma técnica está coberta?

Quando uma equipe afirma que detecta uma técnica do MITRE ATT&CK, que evidência sustenta essa afirmação? A pergunta parece simples, mas costuma esconder várias outras: qual comportamento foi observado, em qual plataforma, por qual fonte de dados, com que lógica, em que condições de execução e com qual resultado operacional? Sem essas respostas, a palavra “cobertura” pode significar desde a existência de um evento bruto até uma detecção validada que chega ao analista com contexto suficiente para investigação.

A resposta prática começa por delimitar a afirmação. Em vez de “cobrimos execução”, uma equipe pode dizer: “em estações Windows gerenciadas, os eventos de criação de processos chegam ao repositório, uma regra identifica um padrão específico associado à técnica em determinado contexto, o alerta foi exercitado em laboratório autorizado e a cobertura não inclui servidores Linux nem execuções sem os campos necessários”. Essa formulação é menos vistosa, mas permite decidir o próximo investimento e reduz a chance de uma caixa marcada ser interpretada como garantia.

## Definição operacional e limites do vocabulário

### Técnica, comportamento e hipótese de detecção

No ATT&CK, uma técnica representa uma forma de alcançar um objetivo tático. Uma técnica pode reunir comportamentos distintos e, em muitos casos, há subtécnicas que descrevem variações mais específicas. A nomenclatura e a organização do ATT&CK evoluem; por isso, a equipe deve registrar a versão ou a data de referência usada na análise. Um identificador conhecido ajuda a evitar ambiguidades, mas não substitui a descrição do comportamento que interessa observar.

Há pelo menos quatro objetos diferentes que às vezes recebem o mesmo rótulo de cobertura. A fonte pode coletar um evento. O pipeline pode transportar e normalizar esse evento. Uma lógica pode selecionar uma combinação de sinais. E o fluxo operacional pode converter o alerta em triagem e decisão. Ter a primeira camada não prova que as demais funcionam. De modo inverso, uma regra bem construída não consegue detectar evidência que nunca foi coletada, perdeu campos importantes ou chegou tarde demais.

### Cobertura como registro de evidências

Uma definição operacional útil trata cobertura como um registro estruturado de evidências e limites para uma combinação de comportamento, ambiente e objetivo de detecção. O registro não precisa ser uma plataforma nova nem um índice complexo. Pode começar em um inventário governado, desde que diferencie estado implementado de estado testado e deixe claro quem validou cada afirmação.

A equipe pode usar estados descritivos, sem convertê-los automaticamente em nota. “Não avaliada”, “telemetria disponível”, “hipótese documentada”, “regra implantada”, “regra validada no laboratório”, “observada em produção” e “limitação conhecida” contam histórias diferentes. Os estados não formam necessariamente uma escada linear: uma detecção pode ser validada em laboratório e ainda não ter sido observada em produção; pode funcionar em um ambiente e falhar em outro; ou pode ter sido efetiva no passado e estar degradada após mudança de coleta.

## Contexto: para que serve a métrica e para que não serve

A cobertura por técnica ajuda a orientar perguntas de gestão: quais comportamentos relevantes não têm evidência observável? Onde uma mudança de plataforma cria uma lacuna? Quais regras dependem de uma fonte que está prestes a ser descontinuada? Há concentração de esforço em uma área enquanto serviços críticos permanecem sem avaliação? O valor está no diagnóstico e no acompanhamento das decisões, não em produzir um percentual que pareça representar a segurança inteira.

A métrica não responde isoladamente se a organização está segura, se um ataque será impedido ou se o SOC responderá dentro de um prazo adequado. Também não mede diretamente a dificuldade de um adversário, a frequência de uma técnica em determinado setor, o custo de um falso positivo ou o impacto de uma indisponibilidade. Para responder a essas questões, a cobertura deve ser combinada com evidências operacionais, criticidade de ativos, análise de risco, qualidade da triagem e resultados de exercícios autorizados.

## Delimitar o escopo antes de avaliar

### Ambiente e ativos

Comece definindo o que está sendo avaliado: endpoints corporativos, servidores, serviços em nuvem, identidade, rede, aplicações industriais ou outro domínio. Registre sistemas operacionais, provedores, regiões, versões relevantes e grupos de equipamentos. Uma regra validada em uma frota homogênea não pode ser presumida efetiva em uma população com agentes, políticas ou configurações diferentes.

Também é importante explicitar lacunas de visibilidade. Se uma unidade não está sob gerenciamento, se determinado serviço não exporta eventos, ou se a retenção não permite investigar o período necessário, isso não deve desaparecer em uma média. A ausência de dados é uma condição de risco e uma decisão de arquitetura ou governança, não uma falha a ser escondida em uma célula vazia.

### Ameaças e objetivos de detecção

A organização pode selecionar técnicas a partir de cenários de ameaça relevantes, inteligência contextual, incidentes internos, requisitos regulatórios aplicáveis e arquitetura. Essa seleção não precisa reproduzir todo o ATT&CK. Ela precisa ser defensável: por que certos comportamentos foram incluídos, quais ativos poderiam ser afetados e que consequência operacional justificaria uma detecção.

A meta deve ser uma afirmação prática. Uma equipe pode buscar identificar uma família de comportamentos em cargas de trabalho críticas, ou obter sinais suficientes para investigar uso anômalo de uma identidade privilegiada. A formulação deve caber no escopo real da telemetria. “Detectar qualquer uso da técnica em toda a empresa” normalmente é amplo demais para orientar uma regra ou um teste.

## Fontes de evidência e rastreabilidade

### Telemetria, transporte e qualidade dos dados

A segunda evidência é a disponibilidade ponta a ponta. Confirme que os eventos chegam ao destino esperado, em volume e intervalo compatíveis com o uso, que os campos necessários são preservados e que os relógios e identificadores permitem correlacionar registros. Um painel de saúde pode mostrar que um agente está instalado, enquanto uma mudança de política deixou de coletar o evento específico. Uma amostra de eventos recentes, com dados sensíveis protegidos, ajuda a verificar o conteúdo efetivamente recebido.

### Lógica, alertas e investigação

Para cada lógica de detecção, registre a intenção, os sinais utilizados, os filtros, as condições de correlação, o proprietário, o local de execução e o estado de implantação. Relacione a regra a um comportamento ATT&CK quando essa relação estiver sustentada, e documente a justificativa. Uma regra que detecta um artefato muito específico talvez cubra uma variante limitada; uma regra mais ampla pode capturar comportamentos diversos, mas gerar muitos eventos benignos. O mapeamento não deve esconder esse compromisso.

A investigação completa o quadro. Um analista deve conseguir responder que comportamento foi observado, quais hipóteses benignas são plausíveis, quais dados adicionais faltam, qual contenção é autorizada e quando escalar. Se o alerta dispara, mas não pode ser atribuído a um ativo ou usuário, a detecção pode ser tecnicamente sensível e operacionalmente fraca. Registre essas dificuldades como limitações, em vez de atribuir cobertura plena.

### Testes e observações

A evidência de teste deve indicar o que foi exercitado, em qual ambiente, com qual versão de regra e fonte, qual resultado se esperava e o que foi observado. Um teste autorizado e controlado pode verificar que o sinal aparece, que a regra o seleciona e que o alerta chega ao fluxo definido. O teste deve usar métodos seguros, dados sintéticos ou simuladores aprovados, sem executar ações contra terceiros nem produzir efeitos fora do laboratório.

## Modelo de registro por técnica e ambiente

Um registro consistente pode ser curto, desde que responda a perguntas decisivas. Identifique a técnica e a versão do ATT&CK consultada; descreva o comportamento de interesse; liste ambientes e ativos no escopo; indique a fonte e os campos necessários; aponte a regra e sua condição de implantação; resuma o teste e a data; registre o resultado operacional conhecido; identifique limitações, dependências e responsável pela revisão.

A granularidade precisa equilibrar utilidade e custo. Um registro separado para cada técnica e subtécnica em cada versão de sistema pode se tornar impossível de manter. Agrupar é aceitável quando as condições são realmente compartilhadas e as diferenças continuam visíveis. Por exemplo, duas plataformas podem usar a mesma hipótese, mas depender de fontes e campos diferentes; um registro comum pode apontar para evidências específicas por plataforma, mas não deve insinuar equivalência automática.

### Deriva da telemetria e cobertura ao longo do tempo

Uma detecção validada pode perder qualidade sem que a regra seja alterada. Um agente atualizado muda nomes ou disponibilidade de campos; uma política de auditoria é substituída; um serviço passa a operar em outra região; ou o volume cresce até que filtros e limites de ingestão descartem eventos. Esses casos são deriva de telemetria: a hipótese continua escrita e a regra continua ativa, mas a evidência que sustentava a cobertura se degradou. Monitorar a saúde geral do coletor ajuda, porém não basta quando a fonte reporta disponibilidade sem confirmar os campos usados pela regra.

A manutenção pode incluir verificações de presença e qualidade para os campos críticos, amostras controladas, alertas de queda de volume interpretados junto com sazonalidade e revisão após mudanças de configuração. Um volume baixo pode ser normal em períodos de menor atividade; um volume alto pode refletir uma mudança legítima. Portanto, limites automáticos servem como sinais para investigação, não como prova de falha ou de ataque. Registre qual equipe responde ao sinal e como a degradação afeta as afirmações de cobertura relacionadas.

## Papéis e decisões compartilhadas

A engenharia de detecção define hipóteses, lógica e critérios de validação. A equipe de plataforma e observabilidade garante que a telemetria necessária seja coletada, transportada e retida. Operações de segurança avaliam a triagem, o contexto do alerta e a capacidade de escalar. Resposta a incidentes ajuda a determinar quais sinais seriam úteis durante uma investigação real e quais decisões precisam de autorização. Donos de aplicações e serviços explicam comportamentos normais e janelas de mudança. Gestão de risco e liderança definem prioridades e aceitam ou mitigam lacunas de forma consciente.

A responsabilidade sobre a lacuna também precisa ser clara. Uma técnica sem cobertura pode demandar instrumentação, ajuste de regra, procedimento, mitigação preventiva, aceitação explícita ou retirada do escopo com justificativa. Não basta encaminhar a célula a uma equipe sem definir o resultado esperado e a data de reavaliação. A decisão pode ser técnica, operacional ou de risco, mas deve ser rastreável.

## Priorizar sem perseguir a matriz inteira

Uma priorização defensável combina criticidade do ativo, exposição, relevância do comportamento, qualidade dos sinais disponíveis, impacto potencial, custo de implementação e capacidade de responder ao alerta. Não é necessário converter tudo em uma fórmula. Uma conversa estruturada, registrada e revisável costuma ser mais útil que uma pontuação com pesos arbitrários que aparenta precisão matemática.

A prioridade deve levar em conta a capacidade de agir. Um alerta para o qual não há equipe de plantão, contexto ou procedimento pode não reduzir o risco esperado. A decisão pode ser ampliar capacidade, limitar o escopo do alerta, criar uma ação de contenção autorizada ou escolher outro controle. A métrica expõe essa dependência; não a resolve sozinha.

## Cenários contrastantes, ambos hipotéticos

### Mesma técnica, visibilidade diferente

Considere, em um cenário hipotético, uma organização com estações Windows gerenciadas e cargas Linux em nuvem. A hipótese de detecção depende de eventos de criação de processo e de atributos que identificam usuário e processo pai. Nas estações, a fonte está habilitada, os campos são preservados e um teste controlado produz um alerta investigável. Nas cargas Linux, a configuração não coleta os mesmos atributos e parte dos recursos é efêmera. Uma visão consolidada que marca a técnica como coberta apagaria uma diferença essencial. O registro correto mostra validação no primeiro ambiente e lacuna no segundo, além da decisão sobre quais cargas justificam instrumentação.

### Fonte disponível, alerta sem contexto suficiente

Em outro cenário hipotético, logs de autenticação chegam ao repositório e uma regra sinaliza uma sequência incomum. O alerta não identifica claramente a aplicação envolvida, e os registros não permitem distinguir uma automação aprovada de uma ação manual. A equipe pode afirmar que há telemetria e que a regra foi acionada, mas não que a detecção oferece uma triagem eficaz. A melhoria pode estar em enriquecer identidade e aplicação, alinhar com o dono do serviço ou ajustar a hipótese para reduzir ambiguidade.

### Prevenção eficaz e detecção não demonstrada

Em um terceiro cenário hipotético, um controle preventivo bloqueia uma ação de risco em um endpoint, mas a organização não coleta o evento necessário para gerar um alerta de detecção. A prevenção pode ser eficaz para aquele caso testado; a cobertura de detecção permanece não demonstrada. Se o controle falhar, for desativado ou estiver ausente em outro grupo, a equipe talvez não tenha visibilidade para investigar.

## Exemplos defensivos seguros de avaliação

Uma revisão de cobertura pode começar por um comportamento relacionado à identidade, sem simular abuso. A equipe verifica se eventos de autenticação e alterações administrativas estão habilitados nos sistemas relevantes, se identificadores persistem no pipeline e se o alerta inclui conta, origem, recurso e horário. Em seguida, compara os registros com uma alteração administrativa legítima, aprovada e previamente agendada. O objetivo é compreender a linha de base e validar o contexto, sem realizar tentativas de acesso não autorizadas.

## Erros comuns e como corrigi-los

### Tratar presença de dado como capacidade de detectar

O primeiro erro é considerar que uma fonte habilitada equivale a uma detecção. Dados podem existir sem regra, regra pode não estar implantada e alerta pode não ser triado. Para corrigir, registre cada elo e a evidência correspondente. Use linguagem de estado que mostre o estágio alcançado e não colapse coleta, lógica e operação em um único campo “sim”.

### Somar caixas e publicar uma porcentagem sem contexto

### Mapear regras por associação vaga

### Confundir teste positivo com robustez

### Ignorar falsos positivos e custo operacional

### Não registrar ausência e expiração de evidência

### Maximizar coleta sem governança

## Critérios de avaliação para uma afirmação de cobertura

Uma revisão útil pode percorrer perguntas verificáveis. A técnica foi selecionada por uma razão vinculada a ativos ou cenários relevantes? O comportamento está descrito de forma concreta? A fonte necessária existe e está habilitada em todo o escopo alegado? Os campos críticos chegam completos? A lógica está implantada e versionada? O teste autorizado exercitou o caminho de dados e o alerta? O alerta permite atribuição e investigação? As condições benignas e limitações são conhecidas? Existe um responsável para manter e revalidar a afirmação?

A avaliação pode resultar em uma conclusão qualitativa. “Cobertura validada para a hipótese e ambientes descritos” indica que a cadeia foi verificada dentro de limites explícitos. “Parcial” pode indicar que há telemetria e regra, mas faltam ambientes, campos, teste ou qualidade de triagem. “Não demonstrada” pode ser a conclusão correta quando não há evidência suficiente, mesmo que a equipe suspeite que algum controle esteja funcionando. “Não aplicável ao escopo atual” deve ter justificativa e data de revisão, especialmente se o ambiente puder mudar.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode validar decisões sem gerar comportamento técnico. Escolha uma hipótese e apresente aos participantes um conjunto fictício de eventos, incluindo dados incompletos e uma explicação benigna plausível. Pergunte quais evidências seriam necessárias para confirmar ou descartar a hipótese, quem pode obter esses dados, quais ações de contenção estão autorizadas e como se comunicaria a incerteza. Não use nomes de organizações reais nem dados pessoais reais na simulação.

Em um laboratório, delimite previamente sistemas, contas, rede, simulador, janela e critérios de interrupção. Use ferramenta aprovada e comportamento benigno documentado. Confirme que alertas e integrações permanecem no ambiente controlado. Verifique os eventos desde a origem até o caso de investigação, compare resultado esperado e observado e recolha evidências suficientes para outra pessoa revisar. Não amplie o teste para sistemas de produção sem autorização e planejamento específicos.

## Roteiro de implementação

### Primeira etapa: construir inventário e linguagem comum

Reúna representantes de detecção, plataforma, operações e resposta a incidentes. Defina a versão de referência do ATT&CK, o escopo de ativos, a forma de registrar ambientes e a diferença entre telemetria, regra, teste e observação operacional. Escolha um conjunto inicial de comportamentos relevantes com justificativa. Não tente preencher a matriz inteira antes de entender a qualidade dos dados disponíveis.

### Segunda etapa: formular hipóteses testáveis

Para cada comportamento selecionado, escreva o sinal que se espera observar, em quais ativos, em quais condições e quais explicações benignas podem produzir algo semelhante. Relacione a hipótese à técnica ou subtécnica adequada, mas deixe explícito se o vínculo é amplo ou específico. Escolha critérios para considerar a hipótese útil: dados suficientes, alerta atribuível, triagem possível e encaminhamento definido.

### Terceira etapa: instrumentar e validar o caminho

Implemente coleta e parsing em um ambiente controlado, confirme os campos e monitore saúde da fonte. Aplique a regra com controle de versão e documente escopo e exclusões. Execute o teste autorizado escolhido e acompanhe cada etapa, desde a geração do evento até o alerta e a triagem. Corrija falhas de transporte, normalização, contexto ou encaminhamento antes de declarar a hipótese validada.

### Quarta etapa: registrar limites e atribuir decisões

Atualize o inventário de cobertura com evidências e referências consultáveis. Especifique quais plataformas foram testadas, quais não foram, o que depende de configuração e qual impacto da ausência. Para cada lacuna prioritária, identifique uma decisão: corrigir instrumentação, desenvolver outra detecção, aceitar risco, aplicar controle complementar ou retirar do escopo por razão documentada.

### Quinta etapa: manter atualidade e aprender

Vincule revisão a mudanças de fonte, regra, plataforma e arquitetura. Uma alteração em parser pode quebrar campos; uma migração pode criar população sem agente; uma mudança de processo pode tornar uma atividade benigna frequente. Use gestão de mudanças para notificar os responsáveis por hipóteses dependentes. Revalide de forma proporcional ao risco e à volatilidade, em vez de repetir todos os testes sem propósito.

### Interpretar o que o alerta realmente afirma

Um alerta precisa separar observação de inferência. “Uma conta realizou autenticação em circunstância incomum” pode ser observação baseada em eventos; “a conta foi comprometida” é uma hipótese até haver evidência adicional. Essa distinção deve aparecer na descrição, na severidade e no procedimento de triagem. Se o texto do alerta apresenta uma conclusão como fato, o analista pode iniciar contenção desnecessária ou deixar de buscar explicações benignas relevantes.

A equipe pode definir quais dados sustentam cada parte da narrativa: evento original, enriquecimento, regra de correlação e contexto de ativo. Deve também identificar se os campos são confiáveis, se podem estar atrasados e se há fontes independentes. Uma correlação temporal aproxima eventos, mas não prova causalidade. Para uma decisão de contenção, considere impacto, reversibilidade e autoridade prevista no processo. Assim, a cobertura é avaliada tanto pela capacidade de levantar uma hipótese útil quanto pela honestidade com que comunica o grau de certeza.

## Comunicação para liderança e auditoria

Uma apresentação executiva pode mostrar prioridades, dependências e decisões pendentes sem reduzir tudo a um único número. Explique quais grupos de ativos estão no escopo, quais comportamentos foram selecionados e onde a evidência está forte, parcial ou ausente. Destaque uma ou duas lacunas concretas e o investimento ou decisão que as resolveria. Se usar percentual, inclua o método e o estado da evidência, e evite comparações externas sem metodologia comparável.

## Perguntas frequentes

### A organização precisa cobrir todas as técnicas do ATT&CK?

Não necessariamente. O escopo deve refletir ativos, ameaças relevantes, objetivos de proteção, requisitos aplicáveis e capacidade operacional. Técnicas fora do escopo devem ser justificadas e revistas quando o ambiente mudar. A matriz completa pode servir como referência para descobrir temas, mas não é uma lista universal de obrigações de detecção.

### Uma técnica pode ser considerada coberta por uma única regra?

### Como tratar técnicas que aparecem em diferentes plataformas?

### A ausência de alertas significa que a detecção está funcionando?

Não. Pode não ter ocorrido comportamento relevante, ou a fonte pode estar sem dados, a regra pode não estar ativa, o pipeline pode ter descartado eventos ou a janela observada pode ser insuficiente. A ausência de alerta só ganha significado quando interpretada com saúde da fonte, teste controlado e contexto operacional. Mesmo então, não prova que todos os casos seriam detectados.

### Como contabilizar um controle preventivo?

### Qual é a periodicidade correta para revisar a cobertura?

### Como comparar equipes ou organizações?

### O que fazer quando os dados existem, mas o alerta não é acionável?

### Um teste em laboratório comprova eficácia em produção?

## Relação com o capítulo sobre resposta a incidentes

No capítulo 9, dedicado a métricas de resposta a incidentes, o livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece o contexto editorial relacionado à medição e à interpretação de resultados de segurança. Essa leitura pode ajudar a situar a discussão de cobertura dentro de uma visão mais ampla de resposta. A obra não substitui documentação técnica atualizada do MITRE ATT&CK, validação no ambiente, treinamento nem julgamento da equipe.

## Fechamento: uma afirmação que possa ser revista

Uma boa prática não começa pela soma das células. Começa pela seleção de comportamentos que importam, pela confirmação das fontes e pela conversa entre quem coleta, detecta, investiga e decide. Depois, mantém a ligação entre registro e configuração, registra limitações sem constrangimento e revisa as conclusões quando o ambiente ou a evidência mudarem. O resultado não é uma promessa de detecção universal: é uma visão mais honesta da capacidade atual e dos passos concretos para melhorá-la.
