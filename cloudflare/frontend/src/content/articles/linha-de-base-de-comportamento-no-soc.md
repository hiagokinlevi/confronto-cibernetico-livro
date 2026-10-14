# Linha de base de comportamento no SOC

## Pergunta central: como saber se um desvio merece investigação?

Uma linha de base ajuda o SOC a responder a uma pergunta cotidiana e difícil: o comportamento observado agora é compatível com o que esse usuário, equipamento ou serviço costuma fazer, dadas sua função e as condições atuais da operação? A resposta não é simplesmente “sim” ou “não”. Um acesso fora do padrão pode ser atividade legítima de plantão, uma mudança aprovada, uma conta usada por outra pessoa ou um indício de comprometimento. O perfil estatístico aponta diferenças; contexto e evidências determinam o que elas significam.

## O que significa comportamento esperado

### A referência precisa ter sujeito, contexto e período

### Linha de base não é lista de permissões

Uma linha de base descreve o que os dados e o contexto indicam como recorrente ou esperado; uma política de autorização define o que a organização permite. Os dois conceitos se relacionam, mas não coincidem. Uma ação proibida que ocorre repetidamente não passa a ser autorizada por ser frequente. Inversamente, uma atividade legítima e permitida pode ser rara e, portanto, aparecer como desvio. Para determinar autorização, consulte controles, aprovações e responsáveis apropriados, e não apenas o histórico de eventos.

### O que pode ser modelado

## Por que o SOC precisa de uma referência contextual

### O volume de eventos não explica o significado

Sistemas de identidade, nuvem, endpoints e rede podem produzir muitos registros. Uma regra fixa é eficaz quando há uma condição bem definida, como uma alteração administrativa que sempre exige aprovação. Porém, comportamentos legítimos variam entre pessoas, serviços e períodos. Limiares únicos podem gerar falsos positivos em uma equipe e não perceber mudanças relevantes em outra. A linha de base acrescenta comparação contextual, sem eliminar a necessidade de regras estáveis para controles conhecidos.

### Variabilidade normal é parte da operação

Operações reais têm lançamentos, incidentes, migrações, auditorias, picos sazonais e trabalho fora do expediente. Um SOC que trate toda variação como ameaça cria fadiga; um SOC que incorpore toda mudança automaticamente pode absorver atividade suspeita. Consulte calendários, escalas e registros de mudança como contexto, sem tratá-los como prova de legitimidade.

### A linha de base pode expor mudanças graduais

Uma alteração pequena, repetida ao longo de semanas, pode parecer normal se a comparação observar apenas o passado recente. Perfis que se atualizam sem controle podem acompanhar uma deriva operacional ou um comportamento persistente indevido. Por outro lado, congelar o modelo por muito tempo faz com que rotinas legítimas deixem de ser representadas. A solução não é escolher entre adaptação e estabilidade, mas definir como mudanças são avaliadas, aprovadas, versionadas e revertidas.

## Decisões de desenho antes de coletar dados

### Comece por casos de uso, não pela ferramenta

Antes de configurar um produto, descreva o problema de detecção. Uma formulação útil diz qual entidade e comportamento serão observados, qual decisão o alerta deve apoiar e quais fontes podem corroborar a hipótese. “Detectar anomalias em nuvem” é amplo demais. “Identificar alterações de configuração fora das janelas registradas para um conjunto de serviços críticos e encaminhar a revisão do responsável” delimita uma finalidade, ainda que a implementação exija ajustes.

### Escolha entidades e grupos com significado operacional

Agrupar contas por departamento pode ser insuficiente: duas pessoas da mesma área podem ter acessos e rotinas diferentes. Agrupar apenas por privilégios também pode juntar administradores de plataforma, operadores de banco de dados e contas de contingência. A segmentação deve usar atributos que expliquem o comportamento: função, sistema atendido, criticidade, modalidade de trabalho, tipo de identidade e responsabilidade operacional.

### Defina janelas temporais compatíveis com a rotina

O horário local, o fuso dos registros e o horário de verão podem alterar a leitura. Sistemas em regiões diferentes podem registrar UTC, horário local ou uma combinação dos dois. Normalizar timestamps para análise e preservar o valor original e o fuso de origem permite correlacionar eventos sem apagar a procedência. Uma atividade às duas da manhã no painel pode corresponder a um horário comercial em outra região ou ser consequência de configuração inadequada.

### Selecione características com propósito

Uma característica deve ajudar a responder à pergunta do caso de uso e ser suficientemente confiável. A origem geográfica aproximada de um endereço pode ser útil para triagem, mas depende de dados de localização e pode errar em VPNs, redes móveis e saídas corporativas centralizadas. O endereço IP observado também pode representar um proxy, não o dispositivo final. Um volume de eventos pode aumentar devido a uma mudança na instrumentação, não a uma mudança de comportamento. Cada atributo precisa de interpretação e limitações conhecidas.

## Evidências e fontes que dão contexto

### Identidade e autenticação

Registros de identidade podem mostrar tentativas, autenticações, fatores, sessões, alterações de credenciais e privilégios. Compare método, dispositivo, aplicação, origem de rede e sequência temporal, considerando federação, VPN e proxies. Um login bem-sucedido registra uma autenticação; não prova que o titular estava presente nem que as ações posteriores eram legítimas.

### Endpoints e servidores

Telemetria de endpoint pode oferecer contexto sobre processo, usuário, integridade, conexões, alterações e sequência de execução. Registros do sistema operacional e de ferramentas administrativas podem complementar esse quadro. A cobertura varia: agentes podem estar ausentes, desligados ou configurados de formas diferentes; nomes de processos podem mudar; ações legítimas de suporte também podem produzir sinais incomuns.

### Rede, aplicações e nuvem

Registros de DNS, proxy, firewall, fluxo de rede, gateway de API e auditoria de nuvem podem revelar destinos, serviços, volumes e mudanças de configuração. Cada fonte observa uma parte diferente. Fluxos indicam comunicação agregada, mas nem sempre conteúdo ou processo; logs de aplicação descrevem operações, porém podem omitir contexto de rede; auditoria de nuvem registra ações do plano de controle, enquanto a atividade de dados pode aparecer em outra fonte.

### Mudanças, calendário e responsabilidade

Sistemas de gestão de mudanças, chamados, agendas de manutenção, escala de plantão, inventário de ativos e catálogo de serviços fornecem contexto operacional. A ausência de uma mudança registrada é relevante para a investigação, mas não é prova de intrusão: o processo pode estar incompleto, a mudança pode ter sido emergencial ou ocorrer em sistema não integrado. Uma aprovação registrada também não encerra a análise se os detalhes, o escopo ou a autoria não corresponderem aos eventos observados.

### Qualidade, cobertura e proveniência

Evidências confiáveis exigem saber de onde vieram, como foram transformadas e quem pode alterá-las. Mantenha identificação da fonte, horário de ingestão, esquema, regras de normalização e retenção. Atrasos de ingestão podem embaralhar uma sequência; duplicações podem inflar volumes; mudanças no agente podem alterar campos. O painel de anomalia deve permitir ao analista chegar aos eventos de origem ou explicar por que isso não é possível.

## Papéis e decisões compartilhadas

### Analista de SOC

O analista valida o escopo do alerta, verifica a qualidade da evidência e formula hipóteses alternativas. Deve identificar o que é diretamente observado, o que foi inferido e o que falta confirmar. Em vez de perguntar apenas “é anômalo?”, pode perguntar “qual atributo divergiu, contra qual grupo e período, qual a magnitude prática da diferença e qual evento independente pode confirmar a explicação?”.

### Engenharia de detecção e administração da plataforma

A engenharia define fontes, transformações, regras de comparação e operação do alerta. Deve versionar alterações e distinguir perfis em observação, aprovados e sob revisão. Administradores garantem disponibilidade, sincronização e controle de configuração, mas a recorrência técnica, por si só, não decide se uma atividade é autorizada.

### Donos de serviço, identidade e risco

O dono do serviço explica a função dos ativos, dependências e ciclos operacionais, além de confirmar mudanças dentro de sua responsabilidade. A equipe de identidade esclarece grupos, tipos de conta e controles de autenticação. Privacidade, jurídico ou governança podem orientar tratamento e retenção de dados conforme as regras aplicáveis à organização. O SOC coordena a avaliação técnica, mas a decisão sobre aceitar risco ou aprovar uma exceção deve seguir a autoridade definida internamente.

## Como interpretar desvios sem transformar alertas em veredictos

### A diferença observada é um sinal para triagem

Um alerta de anomalia deve comunicar o que mudou em termos compreensíveis: entidade, atributo, referência usada, período de comparação, fonte e limitações. Uma pontuação isolada, sem explicação, dificulta avaliação e pode gerar confiança indevida. Quando o método é complexo, ofereça atributos relevantes e uma trilha de evidência suficientemente clara para apoiar revisão humana.

### Considere explicações concorrentes

### Escale pela combinação de impacto e confiança

## Cenários hipotéticos contrastantes

### Acesso fora do horário com manutenção registrada

Cenário hipotético: uma conta de administração acessa servidores em horário pouco usual. O alerta compara a conta com seu perfil individual e com o grupo de administradores. Há um chamado aprovado para uma atualização naquele período, mas ele cobre apenas parte dos ativos. A coincidência temporal é um indício contextual, não uma explicação completa.

### Serviço com novo destino após mudança documentada

Cenário hipotético: uma implantação adiciona monitoramento e o serviço passa a falar com um destino novo. Verifique se destino, momento, versão e ativos correspondem ao registro e à justificativa do dono do serviço. A coincidência dá apoio à hipótese de mudança legítima; comunicações em ambientes não previstos ou persistentes após reversão exigem revisão. Nem o alerta prova malícia, nem o chamado autoriza qualquer conexão associada.

### Rotina anormal que já existia há muito tempo

Cenário hipotético: uma investigação revela que uma conta técnica executou por meses operações que não pertencem à sua finalidade declarada. Como essas operações estavam presentes na janela histórica, o modelo passou a representá-las como recorrentes. A linha de base original não indica que a atividade é correta; revela a insuficiência do referencial e a necessidade de reavaliar o período.

## Erros comuns que reduzem a utilidade

### Usar um perfil global para todos

Um único perfil corporativo confunde funções, turnos, regiões, tipos de dispositivo e criticidade. O comportamento de uma equipe de suporte pode parecer anômalo comparado com o de usuários administrativos, enquanto uma conta comprometida se esconde na média de um grupo heterogêneo. Segmentar ajuda, mas segmentar por excesso produz perfis frágeis. Valide os grupos com quem conhece a operação e reveja-os quando funções e serviços mudarem.

### Incorporar eventos automaticamente sem revisão

Atualizar o perfil com todo dado recente faz a referência acompanhar rapidamente mudanças, mas também permite que atividade maliciosa prolongada seja incorporada. A atualização não deve ser tratada como um detalhe invisível do produto. Defina períodos de observação, exclusões justificadas, aprovação e auditoria. Durante incidentes, suspenda ou controle a atualização dos perfis afetados para evitar que a investigação altere a referência usada como comparação.

### Tratar o passado como verdade limpa

Histórico pode conter contas compartilhadas, lacunas de logging, incidentes não detectados, mudanças sem registro e eventos coletados sob outra configuração. Antes de usar uma janela, verifique o que se sabe sobre sua qualidade e o que mudou durante o período. Se uma investigação posterior revelar uma permanência prolongada, reavalie os dados históricos pertinentes e os perfis dependentes. A frequência não corrige uma origem contaminada.

### Confundir pontuação com probabilidade

### Criar exceções sem limite ou responsável

### Ignorar privacidade e finalidade

Dados de comportamento podem revelar hábitos, localização aproximada, relações profissionais e horários. A coleta deve ser proporcional à finalidade de segurança, com acesso restrito, retenção definida e governança adequada. Não use perfil de segurança para avaliar produtividade ou conduta individual fora da finalidade autorizada. A equipe deve seguir políticas internas e requisitos aplicáveis, consultando as áreas responsáveis quando a interpretação for incerta.

### Medir sucesso pelo número de alertas

Mais alertas não significam melhor detecção, assim como menos alertas não provam melhoria. Volume pode cair por falha de ingestão, supressão excessiva ou mudança no perfil; pode subir por mudança legítima de operação. Avalie como os alertas ajudam a confirmar, descartar ou priorizar hipóteses, e se há casos relevantes não representados. Observe também o esforço de triagem e a clareza das evidências, sem perseguir uma taxa isolada.

## Critérios para avaliar a linha de base

### Cobertura e representatividade

Pergunte quais entidades e fontes estão cobertas, quais estão ausentes e se os grupos representam as diferenças operacionais pertinentes. Verifique se eventos de plantão, sazonalidade, mudanças importantes e identidades não humanas aparecem na amostra. Um perfil com longa janela, mas cobertura incompleta, pode ser menos confiável que um referencial menor e bem delimitado. A documentação deve informar limites em linguagem que o analista consiga usar.

### Qualidade da explicação e da evidência

Um alerta útil permite entender por que foi gerado e localizar os eventos relevantes. Observe se a comparação informa período, grupo, característica e procedência. Verifique se a investigação consegue confirmar uma mudança legítima ou avançar para análise aprofundada sem procurar cegamente em múltiplos painéis. Se analistas não conseguem explicar por que um caso disparou, o modelo pode não estar pronto para orientar decisões de alto impacto.

### Robustez a mudanças e falhas

Avalie o comportamento em implantação, férias coletivas, virada de ciclo, troca de agente e indisponibilidade de fonte. Um sistema robusto explicita períodos de baixa confiança, evita misturar esquemas incompatíveis e sinaliza alterações na cobertura. Deve existir processo para reavaliar perfis quando um incidente, mudança organizacional ou falha de coleta comprometer a janela histórica.

### Resultado operacional observado

### Revisão independente e capacidade de auditoria

## Exercício de mesa ou laboratório autorizado

### Objetivo e ambiente

O exercício a seguir é hipotético e defensivo. Use dados sintéticos ou um ambiente de laboratório autorizado, sem interagir com sistemas de terceiros. O objetivo é praticar a interpretação de desvio, testar a qualidade das fontes e revisar o processo de atualização do perfil. Não é um procedimento para simular intrusão contra infraestrutura real.

### Condução e perguntas

Apresente o perfil e peça ao grupo que determine: qual entidade e período estão representados; quais características geraram o desvio; quais fontes corroboram os eventos; e quais limitações impedem conclusão. Em seguida, forneça o registro de mudança e pergunte se ele corresponde aos ativos, à janela e às ações observadas. A equipe deve apontar divergências em vez de fazer a evidência caber na explicação preferida.

### Debriefing

Ao final, compare o que era fato observável, inferência razoável e hipótese não confirmada. Registre onde a qualidade de timestamp, cobertura ou atribuição limitou a conclusão. Identifique perguntas que exigem dono de serviço, identidade, privacidade ou resposta a incidentes. Atualize o roteiro de triagem somente quando a equipe puder explicar por que a mudança melhora a decisão e quais efeitos colaterais pode introduzir.

## Roteiro de implementação

### Etapa 1: delimitar finalidade e governança

Escolha um caso de uso que corresponda a uma lacuna concreta de detecção. Defina entidades, comportamento, ambiente, decisão apoiada e responsáveis. Confirme que a finalidade é compatível com as políticas de segurança e privacidade da organização. Descreva quais decisões continuarão dependendo de revisão humana e quais ações poderiam afetar a disponibilidade de serviços.

### Etapa 2: mapear e validar dados

Faça inventário das fontes, proprietários, retenção, campos, atraso e cobertura. Valide timestamps e identificadores que relacionam usuários, dispositivos e sessões. Registre indisponibilidade e mudanças de esquema; se a telemetria não sustentar a pergunta, corrija a lacuna ou reduza o escopo antes de confiar no perfil.

### Etapa 3: definir segmentação e janela

Trabalhe com os donos operacionais para formar grupos com justificativa verificável. Separe contas humanas, contas técnicas e identidades de carga de trabalho quando a diferença alterar a interpretação. Defina janela histórica, ciclos sazonais, fontes excluídas e regras para amostra insuficiente. Determine como férias, troca de função, migração e incidente afetam a validade do perfil.

### Etapa 4: observar em modo controlado

Antes de encaminhar automaticamente, avalie resultados junto a analistas e responsáveis pelo serviço. Examine se os alertas têm explicações úteis, se grupos se misturam e se as fontes mostram o mesmo evento. Registre falsos positivos e limitações com causa específica, sem silenciar categorias amplas por conveniência. Ajustes devem ser versionados para que a equipe compare comportamento antes e depois.

### Etapa 5: integrar a triagem ao fluxo do SOC

Defina os campos que o alerta apresenta e os passos de investigação, incluindo consulta a mudanças, identidade, endpoint, rede e aplicação conforme o caso. Estabeleça critérios de escalonamento, preservação de evidência e comunicação ao responsável pelo serviço. Descreva como encerrar um caso explicado, inconclusivo ou potencialmente incidente, e quem pode aprovar uma alteração do perfil.

### Etapa 6: controlar aprendizagem e exceções

Decida se o perfil atualiza, com que frequência e mediante quais controles. Separe eventos de treinamento de incidentes conhecidos, mudanças em revisão e dados aprovados. Mantenha trilha de quem alterou a referência e qual justificativa foi registrada. Exceções precisam expirar ou passar por revisão; uma exceção vencida não deve desaparecer da auditoria.

### Etapa 7: revisar após mudanças e incidentes

Reavalie o perfil quando houver migração, mudança de função, alteração de instrumentação, incidente ou revelação de atividade histórica inadequada. Identifique quais janelas e entidades foram afetadas e se os resultados anteriores precisam de revisão. A correção pode exigir reprocessamento, ajuste de grupos, nova fonte ou documentação explícita de que a referência não é confiável para determinado período.

### Etapa 8: manter documentação viva

Documente objetivo, fontes, atributos, janelas, segmentação, limitações, proprietários, versão e processo de revisão. Mantenha um histórico que permita a novos analistas entender o que o perfil significa e reconstruir decisões. Atualize a documentação junto com mudanças operacionais.

## Perguntas frequentes

### Uma atividade anômala é necessariamente maliciosa?

Não. Anômala significa diferente do referencial escolhido. A diferença pode vir de mudança autorizada, contexto, falha de coleta ou comportamento suspeito. O alerta orienta investigação e precisa ser interpretado com evidências adicionais.

### Com que frequência devo recalcular os perfis?

Não existe uma frequência única adequada a todos os serviços. Ela depende do ritmo de mudança, da sazonalidade, da qualidade da janela e do risco de incorporar atividade indevida. Defina uma cadência para revisão, monitore mudanças de cobertura e exija controle antes de promover observações recentes a referência confiável.

### É melhor comparar cada pessoa consigo mesma ou com colegas?

As duas comparações respondem a perguntas diferentes. O perfil individual destaca mudança da própria rotina; o perfil de pares ajuda quando há pouco histórico ou quando se quer entender atividades esperadas para uma função. Use grupos bem justificados e mantenha a comparação individual quando ela for pertinente. Nenhum nível elimina o risco de dados incompletos ou contaminados.

### Como tratar contas de serviço e identidades de máquina?

Modele-as segundo sua função técnica, proprietário, dependências, ambientes e ciclo de execução, separando-as de identidades humanas quando necessário. Registre quais sistemas podem iniciar ou assumir a identidade e quais operações são esperadas. Uma conta sem dono claro ou com uso compartilhado deve ser tratada como limitação de atribuição e prioridade de governança, não como rotina automaticamente confiável.

### Posso usar a linha de base para bloquear uma sessão?

A anomalia isolada raramente fornece contexto suficiente para uma decisão disruptiva. Bloqueio deve seguir política de resposta, considerar evidência independente, impacto operacional e autoridade de aprovação. Controles determinísticos ou sinais fortes podem justificar ação por outros motivos; a linha de base pode contribuir com contexto, mas não deve ser apresentada como prova conclusiva.

### O que fazer quando um incidente revela permanência longa?

Preserve evidências e siga o processo de resposta. Reavalie os dados históricos e os perfis potencialmente influenciados, identifique lacunas e entidades relacionadas e registre quais períodos podem estar contaminados. Não trate recorrência como benignidade; reveja controles e a possibilidade de reconstruir ou invalidar as janelas afetadas.

### Uma linha de base substitui regras de detecção?

Não. Regras determinísticas continuam adequadas para condições conhecidas e controles obrigatórios; indicadores e análise de incidentes tratam outras perguntas. A linha de base complementa essas capacidades com contexto de variação. Uma arquitetura de detecção equilibrada combina abordagens e mantém entendimento sobre limites de cada sinal.

### Como explicar uma pontuação ao analista?

Informe quais características contribuíram, contra que população e intervalo houve comparação, quais dados faltaram e como a pontuação deve ser interpretada. Se não houver explicabilidade suficiente, não use o número como única justificativa para uma ação de alto impacto. A interface deve facilitar consulta aos registros e preservar a distinção entre desvio, evidência e conclusão.

### Como evitar que exceções escondam problemas?

Limite cada exceção a identidades, ativos, comportamento e períodos definidos. Exija justificativa e aprovação, estabeleça vencimento e revise se a atividade ainda corresponde à mudança documentada. Acompanhe exceções usadas repetidamente: elas podem indicar uma lacuna de desenho, um processo operacional não documentado ou uma prática que precisa ser corrigida.

## Relação com o capítulo sobre Black Teams

No capítulo 6, “Black Teams na identificação e resposta a incidentes”, do livro de Hiago Kin Levi, publicado pela Editora Brasport, discute-se a articulação entre identificação e resposta. A linha de base se conecta a esse tema porque oferece contexto para reconhecer desvios, organizar hipóteses e apoiar a passagem da detecção à investigação. Quando surge evidência de atividade persistente, a resposta também precisa voltar ao histórico e questionar se aquilo que parecia normal foi apenas frequente.


Uma obra não substitui documentação técnica atualizada, treinamento, conhecimento do ambiente nem julgamento da equipe. A referência comportamental continua sujeita a validação por dados íntegros, governança clara e revisão diante de novas evidências.
