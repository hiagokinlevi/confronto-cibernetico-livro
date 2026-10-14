# EDR na investigação de incidentes

## A pergunta que orienta a investigação

Quando uma equipe recebe um alerta sobre uma estação de trabalho, o que ela consegue afirmar com base nos dados do EDR — e o que ainda precisa confirmar em outra fonte? Essa é a pergunta central para quem pesquisa como usar detecção e resposta em endpoint durante uma investigação. O desafio não consiste apenas em localizar um processo suspeito. É necessário estabelecer uma sequência temporal, compreender o alcance observado, separar fatos de interpretações e registrar lacunas sem transformá-las em certezas.

O EDR pode mostrar que determinado processo foi iniciado, que arquivo foi criado, que conexão foi observada pelo sensor ou que uma ação foi bloqueada. Esses registros ajudam a formular hipóteses e a decidir os próximos passos. Sozinhos, porém, não provam necessariamente quem operava a máquina, qual conteúdo foi transferido, se uma conta foi comprometida ou se todos os equipamentos relacionados foram examinados. Uma investigação responsável apresenta cada afirmação junto da evidência que a sustenta e explicita o que permanece desconhecido.

A resposta curta é que EDR reúne telemetria de endpoints para examinar processos, conexões, arquivos e ações do usuário. Seu valor depende de cobertura efetiva e da capacidade de correlacionar eventos com outras fontes. Isso desloca a atenção de uma pergunta estreita — “o agente está instalado?” — para questões verificáveis: quais dispositivos enviam dados, que eventos estão disponíveis, desde quando, com que atraso e sob quais limitações?

## O que o EDR observa

EDR é a categoria de ferramentas que combina coleta de eventos em endpoints com recursos de detecção, investigação e resposta. Endpoint pode ser uma estação, um servidor, uma máquina virtual ou outro ativo computacional sob gestão. O agente local observa atividades selecionadas pelo produto e envia registros a uma plataforma central, onde analistas podem pesquisar eventos, receber alertas e, conforme a configuração e a autorização, executar ações de contenção.

A telemetria pode incluir criação e encerramento de processos, relações entre processos, hashes de arquivos, alterações em determinados locais, conexões de rede atribuídas a processos, eventos de autenticação observados localmente e decisões do próprio sensor. A lista exata depende do sistema operacional, da versão do agente, da política aplicada, dos módulos habilitados e do plano de retenção. Um campo que aparece para uma família de dispositivos pode estar ausente em outra. “EDR coleta tudo” não é uma premissa segura.

Também é importante distinguir evento bruto, alerta e interpretação. Um evento bruto registra uma observação, como a criação de um processo com determinado caminho e horário. Um alerta é uma avaliação produzida por regra, modelo ou política. A interpretação é a conclusão provisória de quem investiga, que considera o alerta, o contexto e outras evidências. Um alerta de comportamento incomum merece triagem; não equivale, por si só, à confirmação de comprometimento. De modo semelhante, a ausência de alerta não comprova ausência de atividade: a atividade pode não ter sido coletada, reconhecida, retida ou encaminhada.

O agente é uma fonte de visibilidade, não uma janela infalível para tudo que ocorreu no endpoint. Há máquinas desligadas ou desconectadas, falhas de comunicação, sensores desativados, versões incompatíveis, exclusões configuradas, eventos descartados por limites de desempenho e períodos fora da retenção. A plataforma pode indicar parte desses estados, mas a equipe deve verificar o que cada indicador significa no ambiente concreto. Inventário de instalação e telemetria recente são coisas diferentes.

## Contexto operacional: cobertura antes do alerta

Investigações confiáveis começam com uma noção de alcance. Uma organização pode ter milhares de registros de dispositivos e ainda não saber quais ativos importantes estão produzindo dados úteis. O inventário deve ser comparado com a população que se espera proteger: estações ativas, servidores, ambientes de nuvem, sistemas de terceiros e ativos temporários, conforme o escopo. Diferenças não devem ser resolvidas por suposição. Um dispositivo sem evento recente pode estar desligado, fora da rede, desinstalado ou com falha; cada possibilidade pede uma verificação distinta.

A primeira decisão prática é estabelecer um marco temporal. Para o evento investigado, determine quando a suspeita foi identificada, qual janela anterior é relevante e até que momento os dados estão disponíveis. A janela não deve ser escolhida apenas pela conveniência da interface. Considere a data do primeiro indício, o tempo de retenção, a precisão dos relógios, a latência de ingestão e os períodos de atividade do ativo. Se o relógio do endpoint diverge do serviço central ou de um sistema de identidade, a ordem aparente pode estar errada.

A segunda decisão é verificar atualidade e continuidade. Um registro recente mostra que algum dado chegou, mas não garante fluxo contínuo. Compare horários de última comunicação, intervalos entre eventos e a expectativa operacional do dispositivo. Em caso de atraso, anote o horário do evento e o horário de recebimento quando ambos estiverem disponíveis. Essa distinção evita atribuir a uma sequência uma ordem baseada apenas no momento em que os registros chegaram ao console.

A terceira decisão é delimitar a população examinada. Informe quais máquinas foram consultadas, quais responderam, quais estavam fora de alcance e quais não faziam parte da busca. Essa transparência é especialmente importante quando uma conclusão depende de ausência. “Não encontramos evidência nos dados consultados” descreve o trabalho realizado. “A atividade não ocorreu” afirma algo muito mais amplo e geralmente não é sustentado por uma busca limitada.

## Reconstruir uma sequência sem saltar para conclusões

A árvore de processos costuma ser um ponto de partida útil. Para um evento selecionado, o analista pode examinar o processo que o iniciou, seus processos filhos, caminho, usuário associado, linha de comando registrada, horário e identificadores disponíveis. A relação entre processos ajuda a responder como uma atividade começou e quais ações subsequentes foram observadas. Ela não resolve automaticamente se a atividade era autorizada ou maliciosa.

Uma reconstrução cuidadosa registra os elementos com precisão. Em vez de escrever “um programa suspeito executou um arquivo”, registre, por exemplo, que o sensor observou determinado executável, em certo caminho e horário, iniciado por um processo pai identificado, sob um contexto de usuário específico. Se a interface mostra uma linha de comando, preserve-a conforme a política de evidências e as regras de privacidade. Uma linha de comando pode conter dados sensíveis; o acesso e a reprodução devem ser limitados ao necessário.

Em seguida, procure os eventos adjacentes que ajudam a testar a hipótese: criação ou alteração de arquivo, conexão atribuída ao processo, carregamento de componente, evento de autenticação ou ação de bloqueio. A relação temporal deve ser plausível e sustentada pelos identificadores e horários disponíveis. Dois registros próximos no tempo não são automaticamente causais. Uma conexão observada no mesmo endpoint, por exemplo, pode pertencer a outro processo ou serviço.

A granularidade da telemetria importa. Um nome de arquivo pode ser ambíguo; um hash pode identificar o conteúdo observado, mas não explicar a intenção; um nome de domínio pode resolver para diferentes endereços ao longo do tempo; uma conexão registrada pode informar destino e processo sem mostrar o conteúdo transmitido. Evite converter um indicador em narrativa completa. Quando a pergunta for “o que foi enviado?”, a telemetria de conexão talvez não baste: registros de proxy, DNS, firewall, aplicação ou serviço de destino podem ser necessários, respeitando disponibilidade e escopo.

A investigação também deve considerar explicações benignas plausíveis. Ferramentas administrativas, atualizadores, scripts corporativos e softwares de suporte podem executar ações que pareçam incomuns fora do contexto. Verifique proprietário, finalidade, janela de manutenção e aprovação, sem tratar uma explicação verbal como confirmação suficiente. A pergunta não é apenas se o processo é conhecido, mas se aquela execução, naquele dispositivo, com aquela origem e naquele momento, corresponde ao uso esperado.

## Fontes de evidência e o que cada uma pode responder

O EDR é uma fonte de endpoint. Ele pode ajudar a identificar relações entre processos, artefatos locais, ações observadas pelo sensor e conexões atribuídas a processos. As limitações são próprias de coleta e retenção do produto e da configuração aplicada. A evidência deve ser preservada com contexto: dispositivo, identificador do evento, horário original, horário de ingestão quando disponível, versão do sensor, consulta utilizada e forma de exportação.

Logs de identidade ajudam a investigar autenticações, emissão ou uso de credenciais, alterações de conta e decisões de acesso. Eles respondem perguntas diferentes das de um endpoint: qual identidade autenticou, por qual mecanismo, de onde e com qual resultado, conforme os campos do provedor. Uma sessão atribuída a uma conta não prova, isoladamente, qual pessoa a controlou. A comparação com atividade local, fatores de autenticação, endereço de origem e eventos de sessão pode sustentar ou enfraquecer uma hipótese.

Logs de rede podem acrescentar resolução DNS, fluxos, decisões de firewall, inspeção de proxy e outros metadados. Cada sistema tem cobertura e resolução próprias. Um registro de DNS pode demonstrar uma consulta observada por aquele resolvedor, mas não necessariamente que um processo específico iniciou a consulta. Um registro de firewall pode mostrar uma conexão permitida ou bloqueada segundo o ponto de observação, sem revelar o conteúdo da sessão. A correlação com EDR requer compatibilidade temporal e, quando possível, identificadores de dispositivo, endereço, processo ou sessão.

Serviços de nuvem e aplicações podem registrar operações realizadas em contas e recursos. Eles são relevantes quando a hipótese envolve acesso a arquivos, alterações administrativas, criação de tokens ou uso de APIs. Os nomes dos eventos e a retenção variam por serviço; o analista deve consultar a documentação atual do fornecedor para interpretar os campos. Uma ação registrada em uma aplicação pode corroborar uma sequência, mas deve ser relacionada à identidade, ao dispositivo e à sessão com cuidado.

Registros de gestão de dispositivos, inventário, configuração e mudança ajudam a explicar o estado esperado do ativo: quem é responsável, que política estava aplicada e se houve manutenção autorizada. Tickets, aprovações e comunicação operacional são contexto útil, não substitutos de telemetria. Um ticket pode explicar uma atividade, mas a correspondência deve ser conferida quanto ao horário, ativo e escopo.

A coleta de memória, imagem de disco ou outros artefatos forenses pode ser apropriada em situações de maior impacto ou quando a telemetria disponível não responde perguntas críticas. A decisão exige equipe competente, base autorizada, preservação adequada e avaliação de impacto operacional e de privacidade. Nem toda investigação precisa de aquisição forense extensa. Por outro lado, uma busca no console não deve ser apresentada como equivalente a uma análise forense completa.

## Fatos, hipóteses e alertas

Um relatório útil separa observações de inferências. Fato observado: o console registra que o dispositivo A reportou um processo B às 14h05, segundo o relógio apresentado pela plataforma. Hipótese: o processo B pode estar relacionado ao alerta C porque há proximidade temporal e uma relação de processos compatível. Confirmação pendente: validar o usuário com o provedor de identidade e verificar se a conexão registrada corresponde ao mesmo processo. Essa estrutura deixa claro o que já se sabe e o que a equipe está tentando descobrir.

A força de uma hipótese aumenta quando fontes independentes convergem sobre a mesma sequência. “Independentes” não significa apenas múltiplas telas da mesma plataforma: pode haver uma origem comum ou uma ingestão derivada. Registre a proveniência de cada dado e evite contar duas vezes a mesma observação reproduzida em painéis diferentes. Uma evidência corroborante deve acrescentar uma perspectiva própria ou confirmar um elo distinto da cadeia.

Alertas são sinais de priorização. A gravidade atribuída pelo produto pode ajudar a ordenar a triagem, mas a prioridade operacional deve levar em conta criticidade do ativo, contexto, impacto potencial e confiabilidade da coleta. Um alerta crítico em um servidor de alto impacto pode exigir contenção rápida; uma detecção de baixa confiança em um ambiente de laboratório pode demandar validação antes de interromper serviço. O processo de decisão deve ser definido pela organização, não improvisado por uma pontuação isolada.

A linguagem do relatório deve refletir a evidência. Use “observado”, “registrado”, “compatível com”, “sugere” e “não foi possível determinar” de maneira precisa. Reserve “confirmado” para afirmações com suporte suficiente segundo os critérios adotados. Se os dados forem incompletos, a conclusão pode ser parcial. Explicitar a limitação é parte do resultado, não uma falha de redação.

## Papéis e decisões durante a resposta

A pessoa que faz a triagem inicial valida o alerta, registra o identificador do caso e verifica o estado do dispositivo e do sensor. Ela pode executar consultas autorizadas e identificar lacunas imediatas. Não deve presumir que tem autoridade para isolar um ativo ou desabilitar uma conta apenas por possuir acesso técnico à ferramenta.

O responsável pela investigação coordena hipóteses, fontes e cronologia. Ele decide quais perguntas precisam ser respondidas, quais dados são proporcionais e quem deve revisá-los. Em incidentes com impacto relevante, a coordenação deve incluir resposta a incidentes, segurança de identidade e rede, operações, responsável pelo sistema e, quando aplicável, privacidade, jurídico e liderança. A participação varia de acordo com as regras internas e a jurisdição.

A equipe de operações avalia as consequências de ações sobre a disponibilidade. Isolar um endpoint pode interromper um serviço, uma atividade de negócio ou uma coleta adicional. A contenção é uma decisão operacional com base em risco, urgência, autoridade e alternativas. Quando há perigo imediato, procedimentos previamente aprovados podem orientar a ação; a justificativa, o momento, o aprovador e o resultado devem ficar registrados.

O administrador da plataforma EDR mantém políticas, sensores, integrações, permissões e retenção, mas não deve ser a única fonte de validação da própria cobertura. A equipe de ativos ou gestão de configuração pode comparar inventário e presença do agente. Auditores ou revisores independentes podem verificar amostras e evidências de estado. Essa divisão reduz pontos cegos e permite que limitações técnicas sejam vistas como parte do escopo.

A organização deve definir quem pode consultar dados sensíveis, exportá-los, preservá-los e aprovar respostas. Logs de endpoint podem conter nomes de usuário, caminhos pessoais, conteúdo incidental ou informações de atividade. Aplicar controle de acesso e minimização não reduz a qualidade da investigação; ajuda a mantê-la dentro de finalidade legítima e a preservar confiança.

## Cenários hipotéticos: mesma evidência, decisões diferentes

Considere um cenário hipotético em que uma estação de trabalho gera um alerta sobre um executável iniciado por um aplicativo de escritório. O EDR mostra horário, árvore de processos e um arquivo criado. Isso é evidência de atividade observada, mas não confirma por si só exploração, execução maliciosa ou impacto. A equipe verifica se o arquivo e o processo correspondem a uma atualização ou fluxo de trabalho autorizado, compara o horário com inventário e mudanças aprovadas e consulta identidade e rede para corroborar a sequência. Se não houver telemetria contínua, a conclusão limita-se ao período efetivamente observado.

Em outro cenário hipotético, o mesmo tipo de alerta aparece em um servidor crítico, mas o sensor está sem comunicação desde antes do horário indicado por uma fonte externa. O risco operacional e a incerteza são maiores. A equipe não deve tratar ausência de eventos como prova de que nada ocorreu. O responsável pelo sistema e a resposta a incidentes precisam avaliar se uma ação de contenção é necessária, enquanto a equipe busca logs alternativos e confirma a última observação válida do agente. A decisão pode ser diferente da tomada na estação, ainda que o nome do alerta seja igual.

Um terceiro cenário hipotético envolve uma conexão atribuída a um processo aparentemente conhecido. A lista de reputação do produto não apresenta alerta, mas o destino não corresponde ao padrão de uso do ativo. O nome do processo não encerra a análise: pode haver instalação legítima, configuração alterada, uso por terceiros ou atribuição imprecisa. DNS, proxy, firewall, inventário de software e contexto de mudança podem esclarecer o caso. Enquanto a conexão é apenas uma observação, a hipótese de exfiltração não deve ser reportada como fato.

Os cenários ilustram por que a ação não deve derivar mecanicamente do alerta. Criticidade, qualidade da telemetria, impacto potencial e custo de interrupção entram na decisão. O mesmo registro pode justificar monitoramento adicional em um ambiente e contenção em outro, desde que a diferença seja documentada e coerente com o procedimento de resposta.

## Erros comuns que enfraquecem a conclusão

O erro mais frequente é confundir agente instalado com cobertura efetiva. A presença em uma lista de ativos não demonstra que a política correta estava aplicada, que os eventos necessários eram coletados ou que a plataforma recebeu dados no período analisado. A correção é verificar comunicação, estado do sensor, política, versão e eventos recentes por grupos de ativos relevantes.

Outro erro é interpretar ausência de alerta como evidência de ausência. Um controle pode não detectar uma atividade, o evento pode estar fora da regra, a coleta pode falhar ou a retenção pode ter expirado. Redija o resultado em termos da busca realizada e procure fontes complementares conforme a pergunta.

Também é comum assumir que a linha temporal do console corresponde à ordem exata dos acontecimentos. Atrasos, fusos horários, relógios divergentes e filas de ingestão podem alterar a aparência. Preserve timestamps originais e normalize a comparação de forma explícita, anotando a zona horária e incertezas relevantes.

Um quarto erro é atribuir uma ação a uma pessoa apenas porque o evento aparece associado à sua conta. Contas compartilhadas, sessões abertas, credenciais comprometidas e serviços automatizados são possibilidades que precisam ser avaliadas. O EDR pode indicar o contexto local de usuário; logs de identidade e aplicação ajudam a distinguir a sessão, mas também não identificam necessariamente a pessoa física sem contexto adicional.

Por fim, há o risco de executar contenção sem avaliar efeitos ou preservar contexto. Isolar, desligar ou limpar um dispositivo pode afetar operações e eliminar dados voláteis. Isso não significa adiar sempre uma ação urgente; significa adotar um fluxo de decisão que considere urgência, impacto, autorização e evidência que se pretende preservar. Registre o que foi feito e por quê.

## Critérios para avaliar a capacidade de investigação

Uma avaliação prática começa com perguntas observáveis. A organização consegue listar os endpoints esperados e reconciliar a lista com os dispositivos que reportaram recentemente? Consegue identificar ativos sem dados e encaminhar a investigação da causa? Os campos necessários para as hipóteses mais frequentes estão disponíveis e retidos pelo tempo compatível com a resposta operacional? A equipe sabe qual horário representa o evento e qual representa sua chegada à plataforma?

Avalie também a capacidade de pesquisa. Um analista consegue partir de um alerta e recuperar processo pai e filhos, usuário contextual, artefatos e conexões relevantes, dentro dos controles de acesso? Consegue exportar ou preservar os registros com identificadores e proveniência? Consegue distinguir uma consulta reproduzível de uma captura de tela sem contexto? O procedimento deve permitir revisão por outra pessoa competente.

Integrações merecem verificação específica. Confirme se os dados de identidade, rede e nuvem estão disponíveis para o período necessário, se os campos de junção são consistentes e se os relógios podem ser comparados. Uma integração exibida como “conectada” não prova que cada evento esperado foi ingerido. Teste o caminho com eventos autorizados e conhecidos, conforme a política do ambiente, e registre o resultado e as limitações.

A capacidade de resposta também é parte da avaliação. Verifique quem pode isolar um dispositivo, quais aprovações são exigidas, como se restaura o funcionamento e como se lida com um ativo essencial. O objetivo da revisão é descobrir se a equipe consegue decidir e agir de forma controlada, não presumir que uma função do produto será segura em qualquer contexto.

Métricas podem ser úteis quando definidas com cuidado, mas números sem método criam falsa precisão. Se a organização acompanhar atualidade, cobertura ou tempo de triagem, explicite população, período, regra de cálculo, exclusões e fonte. Não misture endpoints desligados com sensores desativados sem distingui-los. Uma tendência de melhoria é informativa apenas quando a definição permanece comparável.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode testar se a equipe separa observação, hipótese e confirmação. Use um caso sintético, sem artefatos reais perigosos: um alerta hipotético aponta um processo filho inesperado; um endpoint reportou eventos durante parte do período; o log de identidade confirma uma autenticação da conta; os dados de rede chegam com atraso. O facilitador entrega informações em etapas e pede que o grupo declare o que sabe, o que não sabe, que fonte consultaria e quem aprova qualquer contenção.

O exercício deve testar as lacunas, não induzir uma conclusão predeterminada. Em uma rodada, informe que o ativo é uma estação de teste e que há uma mudança aprovada. Em outra, informe que é um servidor essencial, sem comunicação recente do agente e sem confirmação da mudança. Pergunte como a decisão muda e que informação poderia reduzir a incerteza. Não há uma resposta universal: o grupo deve justificar sua escolha conforme critérios e procedimentos internos.

Em laboratório autorizado, a equipe pode usar uma máquina controlada e eventos benignos previamente definidos para verificar se a telemetria esperada aparece, quanto demora a chegar e se os campos podem ser correlacionados com fontes simuladas ou de teste. O laboratório deve ter escopo, responsáveis, janela, critérios de interrupção e limpeza aprovados. Não se deve testar em ativos de terceiros nem introduzir comportamento ofensivo em ambiente de produção para “ver se o EDR pega”.

Ao final, registre lacunas concretas: ativo não inventariado, política inconsistente, atraso de ingestão, campo ausente, retenção insuficiente, consulta difícil de reproduzir ou indefinição de autoridade. Cada achado deve ter responsável e próximo passo verificável. O valor do exercício está na capacidade de corrigir o processo antes de um incidente real.

## Roteiro de implementação orientado à investigação

Comece definindo quais perguntas de investigação a capacidade precisa responder. Exemplos: que processo originou uma atividade? Que dispositivo e usuário contextual foram observados? Há evidência de conexão associada? Qual o alcance temporal e quais ativos estão sem dados? Perguntas concretas ajudam a selecionar telemetria e a evitar coletar dados sem propósito claro.

Em seguida, mapeie os ativos e as responsabilidades. Identifique proprietários, sistemas operacionais, criticidade, ambientes de uso e exceções legítimas. Compare o inventário com a implantação do agente e classifique lacunas de forma que possam ser acompanhadas. Dispositivos temporários, servidores especializados e endpoints de terceiros podem exigir procedimentos próprios.

Defina políticas de coleta com base em risco e finalidade. Documente quais categorias de eventos são necessárias, quais exclusões existem, quais grupos recebem configurações distintas e como mudanças são aprovadas. Avalie impacto de desempenho e privacidade, bem como armazenamento e retenção. Uma configuração uniforme pode não ser adequada para todos os ativos, mas diferenças precisam ser intencionais e conhecidas pela resposta a incidentes.

Estabeleça monitoramento da saúde do sensor. A equipe deve receber sinalização útil para agentes sem comunicação, versões fora de suporte, falhas de atualização e políticas divergentes. Defina como separar uma indisponibilidade temporária de uma lacuna persistente e como escalar quando a falha afeta um ativo crítico. O processo de saúde do agente é uma parte da capacidade de detecção, não uma tarefa administrativa isolada.

Integre as fontes que respondem a perguntas diferentes. Priorize dados de identidade, rede e aplicações conforme os riscos do ambiente. Documente campos comuns, conversões de horário, retenção e limites de cada origem. Verifique a integração com eventos controlados e mantenha referências à documentação técnica vigente do fornecedor, pois nomes, comportamento e disponibilidade de campos podem mudar entre versões.

Crie procedimentos de triagem e preservação. Eles devem orientar o registro do caso, consulta à linha temporal, verificação da cobertura, coleta de evidência, classificação de hipótese, escalonamento e documentação de contenção. Inclua como lidar com logs atrasados, equipamentos offline, dados sensíveis e eventos cuja interpretação depende de especialista. Um procedimento curto e praticado pode ser mais eficaz que um manual extenso nunca usado.

Por último, faça revisões periódicas com casos hipotéticos e incidentes internos adequadamente autorizados. Atualize o roteiro quando houver mudança de plataforma, ambiente, retenção ou requisitos. Registre os limites conhecidos e valide se as equipes de operação e resposta entendem o alcance da ferramenta. A implantação só amadurece quando as pessoas sabem o que podem afirmar a partir dos dados e como agir quando faltam dados.

## Como escrever o relatório de alcance

Toda conclusão de uma investigação baseada em EDR deve vir acompanhada do escopo da observação. Informe a população consultada, o intervalo de tempo, a data de extração, os dispositivos sem dados e os critérios que definiram “recente” ou “coberto”. Se a plataforma apresentou atraso, registre essa condição. Caso uma parte dos ativos estivesse desligada ou sem comunicação, trate-a como não observada no período em questão.

Descreva as fontes usadas e o papel de cada uma. Por exemplo, o EDR estabeleceu a relação entre processos; o provedor de identidade registrou autenticação; o proxy mostrou uma solicitação no intervalo compatível. Se uma fonte não estava disponível, indique a pergunta que ficou sem resposta. Isso permite que outro analista revise o raciocínio sem confundir ausência de dado com resultado negativo.

Registre também as decisões tomadas: isolamento, bloqueio, redefinição de credencial ou observação continuada, conforme aplicável. Para cada ação, documente horário, responsável, autorização e impacto conhecido. Caso uma ação tenha sido postergada, explique o motivo operacional e o critério para reavaliar. O relatório deve permitir entender tanto o que foi visto quanto como a organização respondeu.

## Perguntas frequentes

### Se o EDR não gerou alerta, posso encerrar a suspeita?

Não apenas por esse motivo. A ausência de alerta pode significar que não houve atividade reconhecida, mas também pode refletir falta de coleta, configuração, retenção, comunicação ou cobertura. Verifique os eventos disponíveis, o estado do sensor e a pergunta concreta. Se a hipótese envolver identidade, rede ou serviço em nuvem, consulte as fontes correspondentes.

### Um agente ativo garante que a máquina foi monitorada o tempo todo?

Não. Um estado ativo em determinado momento não prova continuidade retroativa. Confira a última comunicação, os intervalos observados, a política aplicada e os horários do caso. Se houver lacunas, inclua-as no relatório de alcance.

### O EDR prova que uma pessoa realizou uma ação?

Em geral, ele registra contexto técnico associado ao dispositivo e à sessão ou conta observada. Atribuir a ação a uma pessoa requer outras evidências e análise das circunstâncias, como registros de identidade, sessões, controles de acesso e possibilidade de credenciais compartilhadas ou comprometidas. Evite transformar o nome de uma conta em identificação pessoal conclusiva.

### A telemetria de processo demonstra que houve exfiltração?

Não necessariamente. Uma conexão associada a um processo pode mostrar que houve comunicação observada, mas não determina por si só o conteúdo, a finalidade ou a quantidade efetivamente transferida. Para avaliar transferência, podem ser necessários registros de rede, proxy, aplicação ou destino, e talvez dados forenses adicionais. A disponibilidade depende do ambiente.

### Quando devo correlacionar com logs de identidade ou rede?

Sempre que a hipótese dependa de autenticação, uso de conta, origem de sessão, comunicação com destino ou sequência entre sistemas. A correlação é especialmente valiosa quando o EDR fornece uma observação local, mas não responde quem autenticou, o que foi acessado ou como o tráfego foi tratado. Use campos e horários compatíveis, e registre as limitações de cada fonte.

### Quanto tempo de retenção é suficiente?

Não há um prazo universal. A necessidade depende do tempo até a descoberta, dos requisitos legais e internos, do custo, da capacidade de busca e do tipo de investigação esperado. A organização deve comparar o prazo de retenção com seus próprios cenários e obrigações, documentar a escolha e reavaliá-la quando o risco ou a arquitetura mudar.

### Posso confiar na classificação de gravidade do fornecedor?

Use-a como sinal para priorização, não como veredito. Confira o ativo, o comportamento registrado, a qualidade da telemetria e o contexto de negócio. Uma classificação pode ser útil para ordenar a fila, mas a decisão final e sua justificativa pertencem ao processo de resposta da organização.

### Devo isolar imediatamente todo endpoint com alerta?

A decisão depende de urgência, impacto potencial, criticidade do ativo, confiança na evidência e consequência da interrupção. Procedimentos aprovados podem estabelecer ações imediatas em determinadas condições. Em outros casos, a equipe pode precisar preservar contexto ou consultar o responsável pelo serviço. Qualquer decisão deve seguir a autoridade definida e ser documentada.

### Capturas de tela bastam para preservar evidência?

Capturas podem registrar uma visualização, mas frequentemente não preservam todos os campos, identificadores, filtros, horários e metadados necessários à revisão. Siga o procedimento institucional para exportar ou preservar dados, mantendo proveniência e controle de acesso. A forma adequada depende da plataforma e dos requisitos aplicáveis.

## Relação com o capítulo do manuscrito

No capítulo 6, “Black Teams na identificação e resposta a incidentes”, o manuscrito de Hiago Kin Levi, publicado pela Editora Brasport, aborda a atuação de equipes na identificação e resposta. O uso de EDR se relaciona a esse tema porque oferece uma fonte para investigar atividades em endpoints e apoiar decisões de resposta. A leitura pode contribuir para o contexto organizacional, mas não substitui documentação técnica atualizada, treinamento prático nem o julgamento da equipe diante das evidências e limitações do ambiente.
