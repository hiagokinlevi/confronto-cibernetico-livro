# Papéis em uma equipe de resposta a incidentes


Quem deve investigar, decidir, comunicar e restaurar durante um incidente?

## Quem deve investigar, decidir, comunicar e restaurar durante um incidente?

Quando um alerta chega, a primeira dificuldade raramente é saber que existe uma tela vermelha. A dificuldade é transformar sinais incompletos em uma decisão coordenada: quem valida o alerta, quem preserva os registros, quem pode interromper um serviço, quem informa as áreas afetadas e quem autoriza a retomada. Uma equipe de resposta a incidentes precisa tornar essas responsabilidades explícitas antes que a pressão do tempo e a incerteza façam cada pessoa agir segundo uma interpretação diferente.

A resposta curta é que não há uma escala universal de cargos nem uma composição fixa válida para toda organização. Há funções que precisam ser cobertas, mesmo que uma pessoa acumule mais de uma em uma equipe pequena. O desenho deve esclarecer autoridade, limites, substitutos e caminhos de escalonamento. O objetivo não é criar cerimônia em torno de cada alerta: é evitar que uma decisão crítica fique sem dono ou receba ordens incompatíveis.

Este artigo trata da coordenação defensiva de incidentes em ambientes próprios ou cuja resposta tenha sido autorizada. Os exemplos de situações são hipotéticos. Um alerta é uma indicação que merece avaliação, não prova de comprometimento. Uma hipótese orienta a investigação, mas não deve ser apresentada como fato. Uma evidência é um artefato ou registro coletado e contextualizado, cuja confiabilidade e limitações precisam ser consideradas. Essa distinção sustenta decisões proporcionais e comunicação honesta.


O que significa ter papéis definidos

## O que significa ter papéis definidos

Papel é um conjunto de responsabilidades atribuídas a alguém durante determinada fase ou tipo de incidente. Não é necessariamente um cargo formal, uma pessoa exclusiva nem um departamento. Em uma empresa com um centro de operações de segurança, analistas diferentes podem executar triagem, análise e coordenação. Em uma organização pequena, a mesma pessoa pode fazer a triagem e iniciar uma análise, mas deve saber quem tem autoridade para aprovar uma contenção de alto impacto.

Uma responsabilidade descreve o trabalho esperado: preservar registros, avaliar escopo ou manter o diário de decisões. Autoridade descreve o que a pessoa pode decidir sem pedir autorização adicional. Um limite informa o que exige aprovação de outra função. Essas três coisas não são intercambiáveis. Dizer que “a equipe de segurança cuida do incidente” não explica quem pode desligar uma integração de pagamentos, revogar sessões de uma conta executiva ou declarar que um sistema pode voltar a operar.

A equipe também precisa separar a gestão do incidente do trabalho técnico. O responsável pela coordenação mantém a visão do conjunto, define o ritmo das atualizações e encaminha decisões. Especialistas investigam e executam ações em seus domínios. A liderança de negócio avalia impacto operacional e aceita ou rejeita riscos dentro de sua autoridade. Em certos casos, uma mesma pessoa pode cobrir duas funções, mas precisa anunciar quando está atuando em cada uma e identificar um substituto para tarefas simultâneas.

Papéis explícitos não garantem que uma resposta terá sucesso. Eles reduzem ambiguidades que podem ser evitadas. Não substituem procedimentos técnicos, contrato com provedores, conhecimento do ambiente, julgamento profissional ou prática. Tampouco transformam uma suspeita em confirmação: a qualidade da conclusão depende da evidência disponível e da forma como foi coletada e interpretada.


Contexto: por que a estrutura muda durante a crise

## Contexto: por que a estrutura muda durante a crise

Antes do incidente, a estrutura pode parecer simples. Durante a resposta, o cenário pode crescer: um alerta de endpoint leva à investigação de uma conta, que revela acesso a uma aplicação compartilhada, enquanto a área de negócio identifica indisponibilidade. É possível que cada descoberta altere a prioridade. O modelo de papéis precisa permitir ampliar a equipe e delegar frentes sem apagar quem responde pelo quadro geral.

Gravidade não é apenas uma etiqueta atribuída por uma ferramenta. A classificação deve considerar, entre outros fatores, os ativos afetados, a sensibilidade dos dados, a extensão confirmada ou possível, a interrupção de serviço, o risco de propagação, as obrigações contratuais e regulatórias aplicáveis e a capacidade de recuperação. Uma pontuação técnica pode apoiar, mas não substitui a avaliação de contexto. Um alerta com severidade alta pode ser falso positivo; um sinal inicialmente modesto pode adquirir relevância ao se correlacionar com outros eventos.

A resposta deve usar níveis de escalonamento compreensíveis. Um incidente limitado a um dispositivo de teste isolado pode permanecer com uma célula técnica. Um evento que afete identidade corporativa, dados de clientes ou serviço essencial pode requerer coordenação ampliada, liderança de negócio, jurídico, privacidade, comunicação e fornecedores. As condições exatas dependem da organização. O procedimento deve indicar quem pode elevar ou reduzir o nível, com base em quais informações e como registrar a mudança.

A disponibilidade das pessoas também é parte do contexto. Férias, fusos horários, indisponibilidade do provedor e sobrecarga da equipe tornam frágil qualquer processo que dependa de uma única pessoa. Uma função sem substituto pode existir no organograma e continuar ausente na prática. O plano precisa especificar contatos de plantão, substituição, meios alternativos de contato e o que fazer quando o aprovador não responde dentro do intervalo definido internamente.


A matriz de responsabilidades: da triagem à comunicação

## A matriz de responsabilidades: da triagem à comunicação

Uma matriz útil não precisa ser extensa, mas deve nomear as funções que participam das decisões e indicar quem executa, quem aprova, quem presta consulta e quem precisa ser informado. A distinção costuma ser descrita como RACI: responsável pela execução, autoridade final, consultado e informado. O acrônimo é uma convenção, não uma garantia de clareza. Para cada atividade crítica, deve haver uma pessoa ou função responsável por realizá-la e uma autoridade decisória claramente identificada. Se houver dois aprovadores com poderes conflitantes, a matriz deve explicar como resolver o impasse.

Abaixo, os rótulos descrevem funções genéricas. A organização deve substituir nomes genéricos por cargos, equipes e substitutos reais. “Aprova” não significa necessariamente que a pessoa executa; “consulta” não significa que ela pode vetar. As regras de emergência, delegação e indisponibilidade precisam ser registradas à parte.

### Triagem e abertura do incidente

O analista de triagem recebe a notificação, verifica se ela contém contexto suficiente e procura distinguir uma condição rotineira de um evento que exige resposta. Registra horário de recebimento, origem do alerta, ativo ou conta relacionados, dados iniciais e lacunas conhecidas. Pode correlacionar sinais disponíveis em fontes aprovadas, mas deve evitar declarar comprometimento com base apenas no nome ou na severidade de uma detecção.

A triagem pode ser responsabilidade do centro de operações, de um plantonista de segurança ou de uma função equivalente. A liderança do incidente decide quando abrir formalmente uma coordenação, atribui identificador, convoca papéis necessários e define a próxima atualização. Se o analista não conseguir excluir a hipótese com segurança, deve escalar conforme critérios previamente acordados, em vez de encerrar por falta de evidência imediata.

Na matriz, a execução da triagem cabe ao analista designado; a decisão de escalar ou encerrar segue o procedimento e a autoridade do líder de resposta. Operações, identidade ou a equipe proprietária do sistema podem ser consultadas para confirmar se uma atividade era esperada. O gestor responsável pelo serviço é informado quando a investigação puder afetar a disponibilidade. A consulta ao dono do sistema é uma fonte contextual, não uma confirmação automática de legitimidade.

### Investigação e análise forense

A função de investigação constrói e testa hipóteses sobre sequência, escopo e impacto. Pode trabalhar com registros de autenticação, eventos de endpoint, auditoria de nuvem, telemetria de rede, alterações de configuração, chamados e cronologia operacional. Deve registrar de onde veio cada artefato, quando foi obtido, qual relógio ou fuso foi usado, quem teve acesso e quais transformações foram feitas. O nível de formalidade varia conforme a finalidade e os requisitos aplicáveis, mas a rastreabilidade não deve ser improvisada depois.

A análise forense procura preservar a capacidade de examinar os dados sem alterar indevidamente a fonte. A pessoa responsável precisa conhecer as ferramentas aprovadas, a retenção disponível, os limites de coleta e o processo de custódia adotado pela organização. Quando há possibilidade de uso jurídico, investigação trabalhista, comunicação a autoridades ou obrigação regulatória, jurídico e privacidade devem orientar a preservação e o acesso conforme suas competências. Este texto não oferece parecer legal.

A investigação pode produzir resultados graduais: observação confirmada, hipótese apoiada, hipótese enfraquecida e questão ainda em aberto. Essa linguagem evita que uma possibilidade se transforme em certeza por repetição em reuniões. O investigador recomenda ações e explica riscos técnicos; a autoridade de contenção avalia consequências operacionais e aprova conforme limites predefinidos. Uma equipe forense não deve ser tratada como responsável por decidir sozinha a interrupção de um serviço crítico apenas porque detectou atividade suspeita.

### Contenção e mitigação

A função de contenção recomenda e, após autorização, executa medidas para reduzir risco ou impedir propagação. Exemplos defensivos incluem isolar um dispositivo corporativo, revogar sessões específicas, suspender uma credencial, bloquear um indicador em controles administrados pela organização ou desabilitar temporariamente uma integração comprometida. A medida deve ter escopo definido, justificativa, responsável, horário, impacto esperado, plano de reversão e condição para reavaliação.

A autoridade para aprovar depende do alcance. Uma ação reversível em um endpoint isolado pode estar delegada ao líder técnico de plantão. Suspender uma conta de serviço central ou interromper um processo de negócio pode exigir aprovação do proprietário do serviço ou da liderança de incidente, conforme a política local. A organização deve prever uma via de emergência para reduzir risco iminente quando o aprovador usual estiver indisponível, com limites e registro posterior claramente definidos.

Contenção não é sinônimo de correção completa. Bloquear um sinal observado pode reduzir a exposição, mas não prova que todos os acessos foram removidos. Desligar abruptamente um equipamento pode eliminar dados voláteis úteis ou afetar serviços dependentes. A equipe precisa comparar rapidez, preservação de evidência, risco de propagação e continuidade. Quando a decisão precisar privilegiar a segurança ou a disponibilidade, registre a razão e o que permanece desconhecido.

### Aprovações e aceitação de risco

Aprovação é uma decisão com consequências. Para funcionar durante a crise, precisa indicar qual autoridade se aplica a cada tipo de ação, qual informação mínima é necessária, como documentar a escolha e quem assume a função se a autoridade estiver ausente. Não é razoável esperar que um analista técnico aprove sozinho uma interrupção de negócio que ultrapassa seu mandato, nem que uma liderança sem entendimento técnico escolha detalhes de coleta sem a recomendação dos especialistas.

### Comunicação e registro

A função de comunicação mantém mensagens consistentes para públicos diferentes. O líder de incidente fornece fatos autorizados e estado operacional; comunicação corporativa adapta mensagens ao público; jurídico, privacidade e relações com clientes avaliam conteúdo e obrigações quando aplicável. A pessoa responsável por falar com clientes, imprensa, reguladores ou parceiros deve estar designada de antemão. A equipe técnica não deve fazer promessas públicas nem divulgar dados sensíveis fora do canal e da autoridade aprovados.

### Recuperação e encerramento

A recuperação devolve serviços a uma condição operacional autorizada depois das ações de contenção e correção. Operações e o proprietário do serviço executam ou coordenam a restauração; segurança verifica controles e condições relacionadas ao incidente; o líder acompanha dependências e pendências. As condições de retorno devem incluir validações específicas do serviço, monitoramento reforçado e critérios de interrupção caso reapareçam sinais relevantes.

## Quem compõe a equipe e como distribuir funções

Uma equipe central de resposta costuma reunir coordenação, análise de segurança, operações de infraestrutura, identidade e aplicações. Nem toda organização precisa de uma unidade dedicada em tempo integral. O essencial é saber como mobilizar as competências necessárias, inclusive as de fora da área de segurança. O modelo pode ser centralizado, federado entre unidades ou apoiado por um provedor contratado. Em qualquer desenho, a organização continua precisando conhecer suas próprias autoridades e serviços críticos.

### Coordenação do incidente

O líder de resposta mantém o plano de trabalho, convoca participantes, define prioridades e cadência, controla dependências e encaminha decisões para a autoridade competente. Não precisa ser a pessoa mais especialista em cada tecnologia. Sua contribuição é manter as frentes conectadas e detectar lacunas: uma equipe pode estar coletando evidência enquanto outra restaura o serviço a partir de uma imagem que ainda não foi validada.

### Analistas e especialistas técnicos

Analistas de segurança avaliam alertas e correlacionam eventos. Especialistas de endpoint, rede, identidade, nuvem, banco de dados ou aplicações interpretam telemetria e executam mudanças dentro de suas permissões. Administradores e engenheiros de plataforma conhecem dependências e restrições que nem sempre aparecem nos consoles de segurança. Donos dos dados ajudam a determinar sensibilidade e uso esperado.

### Negócio, jurídico, privacidade e comunicação

Lideranças de negócio identificam processos críticos, consequências de indisponibilidade, tolerâncias e alternativas operacionais. Elas ajudam a escolher entre opções técnicas com custos diferentes, sem substituir análise de segurança. A continuidade de negócios e recuperação de desastres podem orientar prioridades, dependências e ordem de retorno.

### Provedores e terceiros

Serviços de nuvem, telecomunicações, MSSPs, processadores e fornecedores de software podem deter registros, controles ou capacidade de ação indispensáveis. Contratos e procedimentos devem definir como abrir chamados de incidente, qual informação será compartilhada, quais prazos e formatos de evidência existem e quem pode autorizar mudanças no serviço contratado. A equipe deve conhecer os limites de visibilidade e retenção antes de uma crise.

## Evidências pertinentes: o que cada papel deve observar

A utilidade de uma evidência depende da pergunta investigada. Logs de autenticação podem apoiar uma análise de acesso; eventos de endpoint podem explicar processos observados; auditoria de nuvem pode mostrar alterações; registros de proxy ou DNS podem contribuir para uma cronologia; chamados de mudança ajudam a identificar atividade autorizada. Nenhuma dessas fontes, isoladamente, prova toda a narrativa. Cobertura, retenção, integridade, relógios, configuração e lacunas precisam ser levados em conta.

## Decisões práticas sob incerteza

A maioria das decisões ocorre antes de haver uma explicação completa. Para tornar a escolha defensável, explicite quatro elementos: fatos confirmados, hipóteses, risco de esperar e custo ou efeito da ação. A equipe também deve declarar o que não sabe. Uma contenção pode ser necessária mesmo sem confirmação final, mas a justificativa deve dizer que se trata de uma medida preventiva diante de evidência parcial, e não de uma certeza retrospectiva.

## Exemplos defensivos e cenários contrastantes

### Hipotético: atividade administrativa esperada

Uma ferramenta sinaliza uma alteração de política em um serviço interno. O alerta é válido no sentido de que a mudança ocorreu, mas não estabelece se foi indevida. Triagem consulta o calendário de mudança e o dono do serviço; investigação compara identidade, horário e registro de aprovação; operações confirma o estado observado. Se a alteração corresponder a uma mudança autorizada e os registros forem coerentes, a equipe documenta a validação e encerra ou reduz a prioridade segundo o procedimento.

### Hipotético: credencial com comportamento incomum

Um alerta indica uso de uma conta fora do padrão habitual. Isso é um sinal de atenção, não confirmação de roubo de credencial. A triagem verifica se há mudança de horário, localização estimada ou dispositivo; investigação consulta os registros disponíveis e verifica se houve manutenção, automação ou mudança de rotina. A liderança de identidade informa quais sessões ou tokens podem ser revogados e qual impacto uma suspensão teria em dependências legítimas.

### Hipotético: serviço essencial com telemetria incompleta

Uma aplicação crítica apresenta instabilidade e alertas correlatos, mas os logs de uma dependência externa estão temporariamente indisponíveis. A equipe não deve preencher a lacuna com uma narrativa conveniente. O líder de resposta reúne operações, segurança, fornecedor e proprietário do serviço; as equipes separam indisponibilidade confirmada, sinais observados e causas ainda possíveis. A decisão de desativar uma integração ou manter o serviço degradado depende do risco de cada opção e da autoridade estabelecida.

## Passagem de plantão: continuidade entre pessoas e turnos

A passagem de plantão é uma transferência de responsabilidade, não apenas um resumo informal. A pessoa que sai deve indicar o estado atual do incidente, o que mudou, quais ações continuam em andamento, quais decisões foram tomadas e por quem, quais hipóteses estão abertas, quais evidências foram preservadas e onde podem ser consultadas, quais prazos ou eventos exigem atenção e quem deve ser contatado. O próximo responsável confirma recebimento e repete as prioridades críticas com suas próprias palavras.

## Erros comuns de desenho e operação

Um erro é atribuir a decisão a “todos”. Em crise, consenso implícito pode significar que ninguém se sente autorizado a agir. A matriz deve apontar uma autoridade final por decisão e um método para lidar com divergência. Consultar especialistas é necessário, mas não transforma cada consulta em aprovação obrigatória.

## Critérios para avaliar se os papéis funcionam

Avalie se cada atividade crítica tem responsável e autoridade identificáveis, se há substituto disponível e se os limites de ação estão compreensíveis para quem está de plantão. Verifique se participantes sabem como escalar, quais canais são oficiais e onde registrar decisões. A avaliação deve observar a capacidade de explicar o processo, não apenas a existência de um documento aprovado.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode testar coordenação sem tocar em sistemas reais. Escolha um facilitador, observadores e participantes que representem segurança, operações, negócio, comunicação e as funções adicionais pertinentes. Use um cenário fictício, com dados inventados e claramente identificados como exercício. Não use credenciais, dados pessoais reais ou ações em produção. O objetivo é examinar decisões, comunicação e passagem de responsabilidade, não simular técnicas ofensivas.

## Roteiro de implementação

Comece listando serviços, dados e dependências que a organização considera prioritários. Essa lista não precisa capturar todo o inventário para ser útil; deve permitir reconhecer quais áreas precisam ser envolvidas em um evento de alto impacto. Identifique as fontes de evidência e os provedores essenciais, incluindo limitações conhecidas de acesso e retenção.

## Perguntas frequentes

### Toda organização precisa de um Black Team dedicado?

Não necessariamente. O nome Black Team pode ser usado de maneiras diferentes em organizações e materiais. O essencial é que as funções de coordenação e resposta estejam cobertas por pessoas com autoridade e competência, em um modelo compatível com o risco e a escala. Pode haver uma equipe central, uma rede de especialistas convocados ou apoio contratado. A organização deve saber quem coordena e como acionar cada recurso.

### Uma pessoa pode acumular vários papéis?

Pode, especialmente em equipes pequenas. O acúmulo precisa ser explícito e viável no tempo disponível. Não deixe uma pessoa ser, ao mesmo tempo, o único investigador, aprovador, comunicador e operador de recuperação sem prever conflitos de atenção e um substituto. Em uma atividade de alto impacto, separar recomendação e aprovação pode melhorar a revisão, quando houver pessoal suficiente.

### Quem deve declarar que um alerta virou incidente?

A política deve nomear uma função autorizada, geralmente o líder de resposta ou o responsável de plantão. A abertura pode ocorrer com informação incompleta e não significa que a causa ou o impacto estejam confirmados. O registro deve explicar por que a coordenação foi iniciada e quais questões serão avaliadas.

### O analista que detecta um risco pode conter sem aprovação?

Somente dentro de limites delegados e documentados. A organização deve definir ações pré-autorizadas, critérios de urgência, impactos toleráveis e como registrar o uso da autoridade. Para ações fora desses limites, o analista deve escalar. Se a rota normal falhar, aplica-se o procedimento de emergência previamente definido, não uma suposição improvisada de poder.

### Como evitar que a passagem de plantão perca informação?

Use um registro comum, conciso e estruturado, e exija confirmação do turno entrante para prioridades e decisões pendentes. Inclua fatos, hipóteses, ações concluídas, aprovações, fontes preservadas, indisponibilidades, contatos e próximos prazos. Faça a passagem em um canal autorizado e indique onde estão os registros detalhados, sem expor dados desnecessários.

### Como medir a qualidade da coordenação?

Combine revisão documental, exercícios e análise de incidentes concluídos. Observe se responsabilidades foram compreendidas, aprovações chegaram à autoridade correta, evidências e decisões podem ser reconstruídas e comunicação refletiu o grau real de certeza. Métricas internas podem apontar atrasos, mas precisam de definições e contexto; um indicador isolado não mede prontidão nem garante resultado.

### O que fazer quando áreas discordam sobre conter ou manter o serviço?

Explicite os fatos compartilhados, as incertezas e as consequências de cada opção, incluindo risco de esperar e possibilidade de reversão. Especialistas apresentam a avaliação técnica; o proprietário descreve impacto de negócio; a autoridade designada decide dentro de seu mandato. Registre a divergência, a decisão e a condição que fará a equipe reavaliá-la. Se a decisão ultrapassa a autoridade presente, escale pela rota prevista.


## Leitura relacionada ao capítulo 7

O capítulo 7 da versão original aborda a estrutura, os papéis e a coordenação do Black Team. Para quem deseja aprofundar esse enquadramento no contexto do livro de Hiago Kin Levi, publicado pela Editora Brasport, a leitura pode complementar a reflexão sobre organização da equipe e coordenação. A obra não substitui documentação técnica atualizada, treino, conhecimento do ambiente nem julgamento da equipe; a matriz e os procedimentos precisam ser adaptados e exercitados na realidade de cada organização.
