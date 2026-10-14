# Relatório de análise forense digital



## Pergunta central: que decisão o relatório precisa apoiar?

Quem procura orientação sobre um relatório de análise forense digital normalmente não quer apenas uma lista de arquivos examinados. Precisa saber o que aconteceu, quando ocorreu, quais sistemas e dados podem ter sido afetados e o que ainda não é possível afirmar. A pergunta central, portanto, é: como transformar vestígios técnicos em conclusões rastreáveis, úteis e proporcionais à evidência disponível?

A resposta começa antes da coleta. Uma equipe precisa definir a finalidade do trabalho e o público que usará o resultado. Um relatório destinado a orientar a contenção durante um incidente tem prazo, nível de detalhe e linguagem diferentes daqueles de uma apuração interna retrospectiva ou de uma análise preparada para apoiar uma decisão jurídica. Em todos os casos, porém, deve ser possível seguir o caminho entre uma conclusão e os artefatos que a sustentam.

O relatório não é a investigação inteira, nem substitui o registro operacional da resposta. Ele apresenta, de forma organizada, o escopo, o método, as fontes, os achados, as limitações e as implicações que podem ser sustentadas. Também mostra quais perguntas ficaram abertas e por quê. Essa fronteira protege o leitor de interpretar como fato aquilo que é apenas uma hipótese de trabalho.

## O que é e o que não é um relatório forense

Um relatório forense é um registro analítico de um exame realizado sobre fontes de evidência delimitadas. Ele documenta como os dados foram obtidos ou recebidos, quais procedimentos foram aplicados, o que foi observado e como as observações apoiam determinadas interpretações. Seu valor depende da capacidade de um leitor competente verificar essa relação sem precisar confiar apenas na autoridade de quem escreveu.

Ele não é um inventário de capturas de tela, um resumo de alertas de ferramentas, uma transcrição de entrevistas nem uma reconstrução onisciente do incidente. Essas peças podem integrar a base do trabalho, desde que identificadas e contextualizadas. A ferramenta que emitiu um alerta não prova, sozinha, que uma pessoa executou uma ação; uma tela com um evento prova que aquele conteúdo foi observado naquele contexto, mas não necessariamente que o relógio do sistema estava correto ou que o evento ocorreu exatamente no instante exibido.

Também não é uma promessa de atribuição. Vestígios podem mostrar uso de uma conta, execução de um processo ou acesso a um recurso. Nem sempre permitem identificar quem estava por trás da sessão, se a credencial foi usada por seu titular ou se um evento foi deliberado. A distinção entre atividade observada e identidade atribuída é essencial para evitar conclusões maiores que os dados.

## Contexto operacional: a análise ocorre dentro da resposta

Em incidentes ativos, preservar evidência compete com a necessidade de conter dano. Desligar um equipamento pode interromper atividade maliciosa, mas também eliminar dados voláteis. Isolar uma estação da rede pode reduzir risco e manter seu estado local, mas pode alterar conexões e registros. A escolha depende do cenário, da criticidade do serviço, da autorização e do risco imediato; não existe regra universal de que sempre se deve coletar tudo antes de agir.

Por isso, a análise precisa registrar decisões de resposta que afetaram fontes ou sua disponibilidade. Se uma máquina foi reiniciada para restaurar um serviço antes de uma aquisição, o relatório deve dizer quando isso ocorreu, quem autorizou e que tipo de evidência pode ter deixado de existir. O registro não é uma confissão de falha: é contexto indispensável para interpretar ausências e delimitar o que o exame ainda pode responder.

O trabalho costuma evoluir em ciclos. Uma hipótese inicial orienta a coleta; a coleta pode confirmar, enfraquecer ou reformular a hipótese; novas necessidades podem exigir autorização adicional. O relatório deve indicar quando uma conclusão é provisória e quando foi atualizada. Se houver versões sucessivas, convém descrever o que mudou, a razão da mudança e quais dados novos foram incorporados, evitando que leitores comparem documentos sem perceber diferenças de escopo.

## Definição de escopo e perguntas examináveis

Um escopo útil delimita sistemas, contas, fontes, período, eventos e perguntas. “Investigar o incidente” é amplo demais. Uma formulação melhor poderia perguntar se uma conta corporativa acessou determinado repositório durante uma janela específica, se arquivos selecionados foram transferidos e quais registros independentes podem corroborar a sequência. As perguntas não devem antecipar a resposta nem presumir intenção ou autoria.

Cada pergunta precisa ser tecnicamente examinável. “O funcionário roubou os dados?” mistura ocorrência, identidade, intenção e enquadramento. Um conjunto mais preciso separa: houve acesso ao conjunto de dados? Quais registros mostram esse acesso? Há evidência de exportação ou transferência? Qual conta ou dispositivo esteve associado? Quais elementos permitem ou impedem relacionar a atividade a uma pessoa? O relatório pode responder partes e declarar que outras não são respondíveis com as fontes disponíveis.

É importante explicitar exclusões. Pode não ter sido examinado o conteúdo de caixas postais, dispositivos pessoais, serviços fora da organização ou dados anteriores a determinado período. Limites decorrem de autorização, retenção, custo, disponibilidade ou relevância, mas devem ser descritos em termos compreensíveis. O leitor precisa saber se “não foi encontrado” significa que uma busca delimitada não retornou resultado, e não que o evento nunca ocorreu.

## Método, preservação e rastreabilidade

A seção de método deve permitir compreender como a evidência chegou ao analista e como foi tratada. Para cada fonte, registre identificador, responsável pela obtenção ou entrega, data e horário relevantes, condição observada, meio de transferência e procedimento de preservação. Em aquisições forenses, documente ferramenta e versão, parâmetros pertinentes, erros e verificações de integridade aplicáveis. Não é preciso despejar cada detalhe de operação no corpo principal, mas o detalhe necessário à reprodução ou revisão precisa estar disponível em apêndice ou registro referenciado.

Hashes criptográficos podem ajudar a verificar se um arquivo ou imagem permaneceu idêntico entre etapas. O relatório deve indicar qual objeto foi calculado, em qual etapa e qual algoritmo foi empregado. Um hash não prova que a aquisição capturou todos os dados corretos, que o dispositivo estava em determinado estado, nem que a interpretação posterior é correta. Ele é um controle de integridade sobre um objeto definido, não um selo geral de autenticidade para toda a investigação.

A cadeia de custódia registra transferências, acessos e condições de guarda relevantes. Em ambientes corporativos, algumas evidências vêm de exportações de plataformas, consoles ou provedores internos em vez de mídia física. Nesses casos, documente quem executou a exportação, sob qual autorização, quais filtros e intervalo foram aplicados, e como o resultado foi armazenado. Se a plataforma não oferece cadeia formal de custódia, registre o procedimento realmente adotado e suas limitações, sem sugerir uma garantia que não existiu.

## Fontes de evidência e o que cada uma pode sustentar

A escolha de fontes deve seguir as perguntas. Registros de autenticação podem mostrar tentativas, sucessos, fatores utilizados, endereço de origem e identificadores de sessão, conforme a plataforma. Não demonstram necessariamente quem operou a conta. Mudanças de retenção, diferenças entre relógios e campos omitidos podem alterar a interpretação. Uma sequência de autenticações é mais forte quando relacionada a registros de aplicação, endpoint ou rede com identificadores compatíveis.

Logs de endpoint podem registrar criação de processos, conexões, alterações de arquivos ou eventos de segurança. Sua cobertura depende da configuração, do agente, da retenção e da integridade da fonte. A ausência de um evento em um log não prova que ele não ocorreu: o mecanismo talvez não estivesse habilitado, o registro pode ter sido descartado, o período pode estar fora da retenção ou o artefato pode não ser gerado para aquela ação.

Registros de nuvem e aplicações SaaS podem indicar acessos, downloads, compartilhamentos e alterações administrativas. A semântica varia entre produtos: “download” pode representar solicitação, preparação de pacote ou transferência concluída. Antes de formular uma conclusão, confira a documentação aplicável à versão e ao tipo de evento. Se não houver campos que distingam intenção de conclusão, o texto deve preservar essa ambiguidade.

## Linha do tempo: ordenar sem fabricar precisão

Uma linha do tempo conecta eventos de fontes diferentes. Antes de ordenar, identifique fuso horário, formato, precisão e possível desvio de relógio de cada sistema. Um evento armazenado em UTC e outro exibido em horário local podem parecer incompatíveis se a conversão não estiver documentada. Algumas fontes registram o instante de recepção; outras, o momento informado pelo dispositivo. Uma diferença de minutos pode ser relevante ou normal, conforme a arquitetura.

Registre a base temporal usada e as transformações aplicadas. Quando o desvio não puder ser medido, apresente o horário como reportado pela fonte e evite uma ordem mais precisa que os dados permitem. Agrupar eventos por intervalo pode ser mais honesto que atribuir uma sequência de segundos. A linha do tempo deve sinalizar lacunas, eventos sem relógio confiável e períodos sem cobertura, em vez de interpolá-los silenciosamente.

Uma entrada bem formada informa data e hora normalizadas, fonte, identificador do evento, descrição concisa, relação com a pergunta e referência à evidência. O leitor técnico deve conseguir localizar o registro original. A descrição não deve inserir inferência: “o processo X iniciou” pode ser observação; “o invasor iniciou o processo” acrescenta atribuição. Se a hipótese for importante, mantenha-a em campo separado e explique sua base.

## Achados: observação, inferência e impacto

Um achado é mais claro quando começa pelo que foi observado, indica a fonte e então explica o significado possível. Por exemplo: “O registro de auditoria da aplicação mostra uma sessão autenticada para a conta A, às 14h03 UTC, seguida por solicitações de leitura a três objetos listados no anexo. O campo de sessão coincide com o evento de autenticação S. Isso sustenta que a conta foi usada para solicitar acesso aos objetos; os registros não identificam a pessoa que controlava a sessão.” A formulação deixa visível o alcance e a fronteira da conclusão.

Separar níveis de afirmação evita exageros. “Observado” descreve conteúdo presente em uma fonte. “Corroborado” indica apoio por outra fonte independente ou parcialmente independente. “Inferido” descreve uma interpretação que vai além do campo diretamente registrado. “Não determinado” sinaliza que as fontes não resolvem a questão. Esses termos precisam ser usados de modo consistente no documento e, se necessário, definidos no início.

A relação entre evidência e hipótese merece explicitação. Para cada conclusão importante, indique os artefatos que a apoiam, o que poderia contradizê-la e as explicações alternativas relevantes consideradas. Não é necessário enumerar qualquer possibilidade imaginável; basta tratar alternativas plausíveis que mudariam a decisão. Se uma conta compartilhada, sincronização automática ou processo de manutenção explicar o mesmo padrão, diga se houve dados para testar essa possibilidade.

## Grau de confiança e limites

O grau de confiança não deve ser um adjetivo decorativo. Ele resume a força e a convergência da evidência para uma proposição delimitada. Uma avaliação pode considerar autenticidade e integridade da fonte, cobertura temporal, independência entre fontes, consistência dos relógios, qualidade da coleta, explicações alternativas e estabilidade da interpretação. O relatório deve explicar os fatores que elevam ou reduzem a confiança, sem fingir que existe uma fórmula universal aplicável a qualquer incidente.

Uma classificação qualitativa — por exemplo, alta, moderada ou baixa — só ajuda quando os termos são definidos para o trabalho. “Alta confiança de que a conta foi usada” não é “alta confiança de que determinada pessoa usou a conta”. O objeto da confiança precisa estar explícito. Evite percentuais sem base metodológica e não converta confiança técnica em probabilidade matemática improvisada.

Limitações são parte do resultado. Podem incluir logs ausentes, retenção curta, fonte indisponível, relógios sem sincronização conhecida, coleta parcial, ferramenta sem validação para aquele formato ou necessidade de excluir dados por autorização. Explique a consequência concreta: qual conclusão foi restringida, que alternativas não puderam ser avaliadas e se a lacuna altera a decisão imediata.

## Papéis, revisão e comunicação

O analista documenta procedimentos e interpretações, mas não decide sozinho todas as consequências organizacionais. A equipe de resposta pode precisar conter ativos; responsáveis pelo sistema explicam a arquitetura; segurança da informação avalia risco; jurídico orienta obrigações e preservação; privacidade considera dados pessoais; gestores determinam prioridades de negócio. O relatório deve deixar claro quais papéis contribuíram e quais decisões foram tomadas por autoridades competentes, sem atribuir ao exame técnico decisões que não lhe cabem.

A revisão técnica verifica cálculos, filtros, identificação de fontes, coerência da linha do tempo e ligação entre conclusão e artefatos. A revisão editorial verifica se um leitor não especialista entende as implicações sem confundir hipótese com fato. Se houver restrições de acesso, defina versões ou anexos apropriados e controle de distribuição. Dados pessoais, segredos empresariais e informações de terceiros devem ser tratados conforme autorização e política pertinente; incluir tudo por conveniência amplia exposição sem necessariamente melhorar a análise.

Um relatório pode conter sumário executivo, corpo analítico e anexos técnicos. O sumário responde o que se sabe, o que não se sabe e quais decisões podem ser necessárias. O corpo apresenta método, fontes, achados e limites. Anexos podem guardar inventários, hashes, consultas, registros selecionados e detalhes de ferramenta. Essa divisão facilita a leitura sem ocultar a trilha de revisão.

## Exemplo hipotético: acesso a um repositório corporativo

Considere um cenário hipotético em que a equipe recebe relato de que documentos internos podem ter sido copiados para fora da organização. A pergunta inicial não deve assumir cópia nem identificar um responsável. A equipe delimita um repositório, duas contas, os registros de auditoria disponíveis e uma janela de quatro dias. O objetivo é verificar solicitações de acesso e sinais de transferência observáveis, não decidir intenção ou autoria humana.

Os registros da aplicação mostram leituras de alguns objetos por uma conta. O provedor de identidade registra autenticação para a mesma conta; um log de endpoint associa uma sessão do navegador a um dispositivo gerenciado. No entanto, a auditoria do repositório não preserva todos os detalhes de transferência, e o proxy reteve apenas parte da janela. A constatação segura é que houve solicitações de leitura associadas à conta e à sessão indicada. A conclusão de que todos os documentos foram baixados excederia os dados.

Uma hipótese alternativa é uma rotina legítima de sincronização iniciada após uma atualização de cliente. A equipe consulta o inventário de software e o registro de mudança, mas não encontra informação suficiente para confirmar se a rotina foi executada naquele dispositivo. Isso não prova uso malicioso nem elimina a possibilidade de sincronização. O relatório descreve a hipótese, o teste realizado e o dado que faltou para resolvê-la.

## Cenários contrastantes: quando a mesma observação muda de sentido

Considere, ainda hipoteticamente, um pico de tráfego de saída associado a uma estação. Em um cenário, há ticket de manutenção, transferência para destino corporativo reconhecido e registro correspondente no serviço de armazenamento aprovado. Em outro, a mesma quantidade aproximada de tráfego aparece sem ticket, para um serviço não reconhecido, durante uma sessão que também gerou alertas de endpoint. O volume isolado não define o evento; contexto, destino, sessão, autorização e correlação mudam a interpretação.

Mesmo no segundo cenário, a ausência de ticket não prova intenção maliciosa. O processo pode ter sido emergencial ou registrado em sistema indisponível. O relatório pode afirmar que não localizou autorização nas fontes consultadas e que a atividade diverge do padrão documentado, mantendo a autoria e a intenção em aberto. O alerta é motivo para investigar e conter; não é prova final.

## Erros comuns que reduzem a credibilidade

Um erro frequente é despejar capturas e logs sem narrativa. O leitor não sabe por que um item foi incluído, que pergunta responde nem que inferência autoriza. Uma imagem sem legenda, origem, horário e referência ao achado é difícil de revisar. O relatório deve selecionar evidências pertinentes, explicar sua função e permitir localizar o dado integral quando necessário.

Outro erro é converter ausência de registro em prova de ausência do evento. Retenção, configuração e cobertura determinam o que uma fonte poderia registrar. Antes de usar um silêncio como evidência, descreva se a fonte estava habilitada, disponível, íntegra e cobrindo o período. Mesmo quando a ausência é informativa, seu alcance deve ser estreito: ela pode reduzir a plausibilidade de uma hipótese sem eliminá-la.

## Critérios para avaliar a qualidade do documento

Um bom relatório permite responder, sem adivinhação, a algumas perguntas: qual questão foi examinada; quais fontes e períodos estavam disponíveis; como foram coletadas e preservadas; o que foi observado; quais inferências foram feitas; que explicações alternativas foram consideradas; que limites persistem; e quais decisões podem ser informadas pelos achados. Se o leitor precisa inferir esses pontos, a apresentação não está completa.

A consistência interna é um critério prático. Datas devem usar convenção clara, identificadores devem ser estáveis, nomes de sistemas não devem variar sem explicação e o resumo precisa refletir as conclusões detalhadas. Cada achado relevante deve apontar para evidência, e cada anexo citado deve existir e ser acessível ao público autorizado. Revisores podem selecionar uma conclusão e seguir suas referências até a fonte original.

## Exercício de mesa ou laboratório autorizado

Uma equipe pode praticar a elaboração de achados com um conjunto sintético de dados preparado para treinamento, sem acessar sistemas de terceiros nem usar informações pessoais reais. O cenário hipotético apresenta três fontes: eventos de autenticação, auditoria de uma aplicação e um registro de endpoint. Os dados devem conter horários em fusos diferentes, uma lacuna de retenção, uma atividade autorizada e um evento cuja semântica seja ambígua. O objetivo é treinar interpretação, não simular ataque.

A equipe recebe perguntas delimitadas: houve acesso ao recurso indicado? É possível associar o acesso a uma sessão ou dispositivo? O conjunto permite afirmar transferência concluída? Que informação adicional mudaria a conclusão? Cada participante registra observações separadas de inferências e aponta referências aos eventos sintéticos usados. Em seguida, outro participante revisa a linha do tempo e tenta reproduzir o caminho de cada conclusão.

## Roteiro de implementação na organização

A organização pode estabelecer um modelo que comece por finalidade, destinatários, classificação de acesso e perguntas investigáveis. O modelo deve oferecer campos para escopo, período, fontes, autorização, método, limitações e status do documento. Evite preenchimento burocrático sem decisão associada: cada campo deve ajudar a localizar evidência, compreender risco ou revisar uma conclusão.

Defina um processo para preservar fontes e registrar transferências, inclusive exportações de serviços em nuvem. Determine onde guardar originais, cópias de trabalho, resultados derivados e anexos, quem tem acesso e como a retenção será administrada. A solução técnica específica depende da arquitetura e das obrigações aplicáveis; o relatório deve documentar o procedimento realmente usado em cada caso, não presumir que um modelo institucional foi seguido integralmente.

## Perguntas frequentes

### Qual é a diferença entre relatório técnico e relatório executivo?

O relatório técnico detalha fontes, método, eventos e referências para que especialistas revisem a análise. O executivo comunica escopo, conclusões sustentadas, limites e implicações para decisão em linguagem direta. Podem ser partes do mesmo documento ou versões controladas, desde que não se contradigam e que o resumo não esconda uma ressalva capaz de mudar a interpretação.

### É necessário incluir todas as evidências coletadas?

Não. Inclua no corpo e nos anexos o material necessário para sustentar, contextualizar ou contestar achados relevantes. Preserve os dados de origem de acordo com as regras aplicáveis e mantenha referências que permitam revisão. Uma coleção indiscriminada pode aumentar exposição de informação e tornar mais difícil encontrar a evidência importante.

### Um hash prova que a evidência é autêntica?

Um hash permite comparar a integridade de um objeto definido entre momentos em que foi calculado. Ele não demonstra sozinho a origem legítima do objeto, a completude da coleta, a correção do relógio ou a veracidade de sua interpretação. Explique o que foi hasheado, quando e com qual finalidade, e descreva os controles de origem e preservação separadamente.

### Como escrever quando os logs são incompletos?

Identifique quais fontes estavam disponíveis, que intervalo cobriam, quais campos ou períodos faltaram e como isso limita cada conclusão. Evite transformar uma busca sem resultado em afirmação absoluta. Se o risco operacional justificar contenção apesar da lacuna, deixe claro que a medida é preventiva e não prova a hipótese investigada.

### Quem deve assinar o relatório?

A assinatura ou identificação deve refletir quem realizou e revisou o trabalho, conforme política da organização e finalidade do documento. Registre papéis e qualificações relevantes sem sugerir que uma assinatura elimina limitações. Aprovação gerencial da distribuição também não deve ser confundida com validação técnica independente.

## Leitura relacionada

No capítulo 8 de seu livro, Hiago Kin Levi aborda operações de resposta, contenção e recuperação. Esse contexto ajuda a situar o relatório como parte de um processo que também envolve decisões operacionais: preservar o que for possível, reduzir impacto, restaurar serviços e registrar as consequências dessas ações para a análise. A relação é prática, pois uma contenção pode mudar a disponibilidade de fontes e uma recuperação pode alterar o estado de sistemas examinados. O livro, publicado pela Editora Brasport, oferece um ponto de partida para refletir sobre esse fluxo; não substitui documentação técnica atualizada, treino nem julgamento da equipe diante de um caso concreto.
