# SOC

## Conceito e função

SOC é a sigla de *Security Operations Center*, também chamado centro de operações de segurança. Designa uma função organizada para acompanhar continuamente eventos relacionados à segurança, avaliar alertas e fazer a triagem inicial, com encaminhamento de incidentes quando necessário. O núcleo do conceito é operacional: manter uma visão corrente dos sinais disponíveis, decidir quais merecem atenção e levar os casos relevantes à equipe ou ao processo capaz de investigá-los e tratá-los.

## O trabalho cotidiano

O SOC recebe sinais de fontes como registros de autenticação, sistemas operacionais, serviços em nuvem, ferramentas de proteção de dispositivos, redes e aplicações. A disponibilidade e a qualidade desses dados variam. A equipe pode normalizar campos, associar eventos ao mesmo usuário ou ativo, aplicar regras de detecção e priorizar os resultados. Essas etapas ajudam a transformar registros dispersos em algo que possa ser avaliado, mas não provam, isoladamente, que houve comprometimento.

Quando um alerta chega à fila, o analista verifica o que a regra realmente observou, qual contexto está disponível e se há explicações benignas plausíveis. Pode conferir horários, identidade, ativo, origem do sinal, mudanças recentes e alertas relacionados. O propósito da triagem é decidir o próximo passo proporcional à evidência: encerrar com justificativa, pedir contexto a uma área, manter sob observação, aprofundar a investigação ou escalar como possível incidente.

A priorização combina gravidade potencial e contexto. Um sinal associado a uma conta privilegiada ou a um serviço crítico pode exigir atenção diferente do mesmo sinal em um ambiente de teste. Ao mesmo tempo, classificações automáticas não devem ser tratadas como juízo final. A urgência depende também da confiança na detecção, da exposição do ativo, da possibilidade de impacto e do tempo disponível para conter ou esclarecer o caso.

## Alerta, evento e incidente

Evento é uma ocorrência registrada: por exemplo, uma autenticação, uma alteração de configuração ou uma conexão. Um alerta é uma indicação produzida por uma regra, análise ou ferramenta de que um conjunto de eventos pode merecer atenção. Incidente é uma situação avaliada como relevante para a segurança e que requer coordenação e ações de resposta segundo os critérios da organização. Os termos não são intercambiáveis: um alerta pode ser falso positivo, benigno ou inconclusivo; um incidente pode ser reconhecido por múltiplos sinais, inclusive sem um alerta automático claro.

A triagem faz a passagem entre suspeita e entendimento inicial. Nem sempre consegue determinar causa, extensão ou intenção. Seu resultado pode ser uma hipótese com grau de confiança, não uma conclusão definitiva. A equipe deve deixar explícita a diferença entre fato observado e interpretação: “houve várias tentativas de autenticação” é uma observação; “a conta foi tomada” é uma conclusão que exige evidências adicionais. Essa distinção evita que uma hipótese inicial se transforme em certeza por repetição.

## Relação com resposta a incidentes

O SOC frequentemente é a porta de entrada operacional de um incidente, mas não precisa ser a equipe que conduz todas as etapas da resposta. Em algumas estruturas, analistas do SOC também investigam e contêm; em outras, encaminham o caso a uma equipe de resposta, segurança de produto, tecnologia, privacidade, continuidade ou liderança. A divisão é organizacional. O ponto essencial é haver responsabilidade explícita, autoridade compatível com as ações e um caminho de transferência que funcione fora do organograma.

Um encaminhamento útil inclui resumo do que motivou a escalada, horários e fuso adotado, ativos e identidades envolvidos, fontes consultadas, evidências preservadas, verificações realizadas, hipóteses consideradas e lacunas conhecidas. Deve informar a prioridade atribuída, o motivo dela, os riscos de aguardar e a pessoa ou grupo que precisa agir. Se houve contenção ou outra medida, registre quem a autorizou, quando ocorreu e qual foi o efeito observado. Isso dá continuidade sem obrigar a equipe receptora a reconstruir tudo do zero.

## Evidências e investigação

Na investigação, a existência de um SOC aparece tanto nos registros técnicos quanto nos rastros de trabalho. Podem ser relevantes alertas, eventos de origem, casos em uma plataforma de gestão, anotações de triagem, horários de abertura e escalonamento, mensagens de handoff, decisões de encerramento e registros de plantão. Esses materiais mostram como a organização percebeu e tratou um sinal; não demonstram automaticamente que a equipe viu todos os eventos ou que a detecção funcionava corretamente.

Para reconstruir uma sequência, é necessário entender a proveniência dos dados: de qual sistema vieram, qual relógio os produziu, se houve atraso de ingestão, retenção ou perda, e que transformações foram aplicadas. Horários em fusos diferentes podem produzir uma cronologia enganosa. Campos normalizados podem esconder diferenças entre fontes. Uma busca sem resultados pode significar ausência da atividade, mas também falta de telemetria, retenção insuficiente, filtro inadequado ou atraso. A ausência de registro, portanto, precisa ser interpretada junto às limitações de coleta.

## Exemplo hipotético de triagem

Considere uma organização que recebe um alerta de autenticações incomuns em uma conta com acesso a dados internos. O alerta informa tentativas em horários diferentes e uma autenticação bem-sucedida, mas não identifica, por si só, quem usou a conta nem se houve acesso indevido. O SOC confirma a fonte dos registros, compara os horários, verifica se a conta e o serviço estão corretos e procura sinais relacionados no período disponível. Também consulta o contexto operacional autorizado, como uma mudança planejada ou atividade de suporte.

Se houver uma explicação confirmada e coerente, o analista pode documentá-la e encerrar o alerta conforme os critérios aplicáveis. Se persistirem sinais incompatíveis com a atividade esperada, a triagem pode escalar o caso, preservar as referências aos eventos e informar o que permanece incerto. A equipe responsável avalia se deve restringir a conta, investigar outros ativos ou adotar outras medidas. O exemplo não presume ataque nem receita de resposta: ilustra que o alerta inicia uma avaliação, enquanto o incidente depende da análise e dos critérios organizacionais.

## Limitações e erros comuns

O SOC não observa aquilo para o que não há dados, acesso ou capacidade de análise. Fontes incompletas, sistemas não integrados, relógios incorretos, retenção curta e mudanças frequentes podem criar pontos cegos. Regras podem deixar de detectar comportamentos relevantes ou disparar em excesso. Uma ferramenta centralizada não corrige automaticamente problemas de qualidade na origem, e a contratação de cobertura não transfere por completo a responsabilidade da organização por decisões e riscos.

Um erro recorrente é tratar “encerrado” como sinônimo de “não aconteceu”. Encerramento significa que o caso foi resolvido ou dispensado segundo uma justificativa registrada, dentro do alcance da análise realizada. Outro é usar a prioridade como medida exata de dano: classificações são instrumentos de ordenação e podem mudar com novos fatos. Também é equivocado supor que um SOC substitui governança, gestão de vulnerabilidades, continuidade, controles preventivos ou investigação especializada. A função conecta sinais e resposta; não elimina a necessidade dessas capacidades.

## SOC e termos próximos

Centro de operações de segurança é a expansão em português do nome e costuma designar a mesma função. “Equipe de segurança” é mais amplo: pode incluir arquitetura, risco, conformidade, gestão de vulnerabilidades e resposta sem operar monitoramento contínuo. “Equipe de resposta a incidentes” enfatiza coordenação e tratamento de incidentes confirmados ou suspeitos; pode estar dentro do SOC, ser uma unidade separada ou reunir profissionais de várias áreas.

SIEM é uma categoria de tecnologia que coleta e correlaciona registros, entre outras funções, conforme a implementação. Pode apoiar o SOC, mas não é sinônimo de equipe ou processo. SOAR costuma se referir a recursos de orquestração, automação e apoio à resposta; automações podem executar etapas repetitivas, mas precisam de escopo, validação e controles adequados. MDR é uma modalidade de serviço gerenciado de detecção e resposta, cuja oferta concreta varia por fornecedor. Um fornecedor MDR pode apoiar uma operação interna ou prestar parte dela, mas o nome do serviço não esclarece sozinho quem decide, contém e comunica.

## Perguntas frequentes

### Um SOC precisa funcionar 24 horas por dia?

Não existe uma resposta única. A cobertura deve refletir risco, exposição e consequências de atraso. Uma organização pode não conseguir manter analistas próprios em todos os horários e ainda assim definir plantões, escalonamento externo e critérios para eventos fora do expediente. O essencial é não anunciar uma cobertura que o processo real não consegue cumprir e deixar explícitos os períodos e serviços atendidos.

### Todo alerta do SOC é um incidente?

Não. Alerta é um sinal para avaliação, e muitos alertas têm explicação legítima ou não podem ser confirmados. O SOC registra o raciocínio e encaminha casos que satisfazem critérios de escalonamento. Um incidente também pode ser identificado por relato de usuário, auditoria ou equipe técnica sem que uma ferramenta tenha gerado alerta correspondente.

### Como saber se um caso foi transferido corretamente?

O destinatário deve estar identificado, receber contexto suficiente, confirmar a aceitação e indicar o próximo responsável ou estado. A prioridade e o motivo da urgência precisam estar claros. Se não houver confirmação dentro do prazo definido, o fluxo deve indicar uma rota alternativa. Uma mensagem enviada sem confirmação não prova que alguém assumiu o caso.

### Um SOC terceirizado assume a responsabilidade pelo incidente?

O serviço pode executar tarefas contratadas, monitorar fontes e recomendar ou realizar ações dentro da autorização acordada. A responsabilidade, os limites de acesso e a autoridade para agir precisam estar descritos entre as partes. A organização continua precisando saber quais ativos e dados estão cobertos, como a escalada ocorre, quem aprova mudanças de impacto e como evidências e informações serão protegidas.

### Que evidência mostra que o SOC não detectou um caso?

A conclusão exige cautela. É preciso estabelecer quais fontes estavam integradas, em que período, com que retenção e quais detecções estavam ativas. A ausência de um ticket pode ser relevante, mas não basta se o evento nunca chegou à plataforma ou foi registrado em outro fluxo. Compare dados de origem, estado das regras, filas, procedimentos e registros de turno, delimitando o que pode e o que não pode ser demonstrado.

## Relação com o capítulo

Na versão original, o termo se relaciona ao capítulo 7. Nesse contexto, SOC ajuda a descrever a capacidade organizacional que observa sinais de segurança, separa alertas de incidentes e encaminha casos com contexto para quem conduz a resposta. O foco permanece na função e nas responsabilidades: a presença de uma equipe ou plataforma, isoladamente, não prova que a operação tenha cobertura, autoridade, dados e fluxos suficientes para tratar um incidente.
