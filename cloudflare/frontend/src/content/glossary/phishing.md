# Phishing

## Definição e propósito

Phishing é uma tentativa de enganar alguém por meio de uma mensagem ou página falsa para obter dados, conseguir acesso ou induzir a execução de código. O elemento central é a manipulação da confiança: a comunicação é apresentada como se viesse de uma pessoa, empresa, serviço ou processo legítimo, mas busca levar o destinatário a uma ação que favorece o adversário. Essa ação pode ser informar uma senha, aprovar uma solicitação, abrir um arquivo ou interagir com um endereço que conduz a uma página controlada por terceiros.

O termo descreve uma técnica de ataque, não um resultado garantido. Uma mensagem suspeita pode ser entregue, bloqueada, ignorada ou reportada; uma interação pode ocorrer sem que haja exposição de dados; e um dado fornecido pode ou não ser válido. Por isso, a classificação deve registrar o que foi observado e em que etapa o caso se encontra. Dizer apenas “houve phishing” pode ocultar a diferença entre uma tentativa impedida e uma conta efetivamente utilizada pelo adversário.

## Como a fraude se organiza

Em geral, a tentativa combina três componentes: uma identidade ou situação que pareça plausível, uma solicitação ou oportunidade que provoque uma reação e um destino ou ação que permita alcançar o objetivo. A identidade pode imitar um fornecedor, um colega ou um serviço conhecido. A solicitação pode alegar que há um documento pendente, um problema de conta ou uma alteração que precisa ser confirmada. O destino pode ser uma página que reproduz a aparência de um portal legítimo, um anexo ou uma conversa que continua por outro canal.

## Por que o termo é útil

“Phishing” oferece uma categoria concisa para registrar uma tentativa de indução por mensagem ou página enganosa. É útil em triagem, comunicação entre equipes e análise de incidentes porque aponta para um mecanismo de ataque, sem antecipar que a fraude teve êxito. A categoria também ajuda a reunir evidências que, vistas separadamente, podem parecer triviais: mensagens parecidas recebidas por várias pessoas, acessos a um domínio suspeito, um relato de credenciais informadas e uma autenticação incomum logo depois.

Na documentação, convém combinar o rótulo com uma descrição do estágio e do objetivo provável. Por exemplo: “tentativa de phishing reportada, sem clique confirmado” é mais informativo que apenas “phishing”. Se houve acesso à página, mas não há evidência de envio de dados, essa distinção deve constar. Se uma conta foi acessada após a exposição de credenciais, o registro deve dizer que há indícios de comprometimento da conta, em vez de tratar a ocorrência como uma mensagem isolada.

## Sinais e evidências

Entre os sinais que merecem avaliação estão discrepâncias entre o nome apresentado e o endereço efetivo, domínios que se parecem com os de uma organização legítima, solicitações inesperadas de autenticação ou pagamento, urgência incomum, anexos sem contexto e instruções que contornam controles habituais. Nenhum item isolado é decisivo. Um fornecedor legítimo pode enviar uma mensagem urgente; um domínio desconhecido pode pertencer a um serviço válido; e uma mensagem bem redigida pode ser fraudulenta. O valor está na combinação com contexto e evidência técnica.

Cabeçalhos de e-mail, resultados de autenticação do domínio remetente, registros de gateway, telemetria do navegador, logs de DNS, proxy ou firewall e eventos de autenticação podem acrescentar contexto. A disponibilidade e a confiabilidade desses registros variam conforme o ambiente e a retenção. Uma falha de autenticação de remetente pode apoiar a hipótese de falsificação, mas não prova por si só intenção maliciosa; a aprovação técnica também não garante que a mensagem seja segura, pois uma conta legítima pode ter sido abusada.

Evidências de interação ajudam a estabelecer o alcance. Registros podem indicar que um link foi requisitado, um anexo foi aberto ou uma sessão de autenticação ocorreu. Porém, um clique registrado não prova que uma pessoa tenha visualizado o conteúdo: filtros automáticos, ferramentas de segurança e pré-visualizações podem acessar links. Da mesma maneira, ausência de um evento em determinado log não demonstra que nada ocorreu se a fonte não registra esse tipo de ação, estava indisponível ou já descartou os dados.

## Etapas e avaliação do impacto

Essa sequência é um modelo de investigação, não uma escala automática de gravidade. Uma tentativa pode gerar impacto sem clique, como quando uma mensagem induz uma transferência por outro processo; uma interação pode não expor nada; e um invasor pode obter acesso por credenciais já comprometidas, sem relação causal com a mensagem em análise. A equipe deve demonstrar as ligações entre eventos e indicar incertezas.

## Resposta defensiva

A resposta começa por interromper a exposição e esclarecer o que ocorreu. Se a mensagem ainda estiver em circulação, os responsáveis podem removê-la ou bloqueá-la de acordo com as capacidades e regras da organização, identificar destinatários e avisar as pessoas potencialmente afetadas por um canal confiável. Uma notificação deve orientar ações concretas, como não interagir com o conteúdo e encaminhar a mensagem à equipe responsável, sem reproduzir links de forma que facilite um clique acidental.

Se houver suspeita de credenciais expostas, a equipe deve avaliar a redefinição ou revogação dos fatores de acesso pertinentes e verificar sessões existentes, tokens, métodos de recuperação e autenticações recentes. Trocar uma senha pode ser insuficiente se uma sessão ativa ou outro mecanismo de acesso continuar válido. A resposta deve seguir as capacidades do serviço e o plano de incidentes, ponderando continuidade operacional e risco. Se houve uma autorização financeira ou administrativa, as equipes responsáveis por esse processo precisam ser envolvidas com rapidez.

Quando existe indício de execução de código, a investigação deve tratar o dispositivo como potencialmente afetado e correlacionar o evento com alertas de proteção, processos, arquivos, conexões e outras atividades relevantes. Isolar um equipamento pode limitar a propagação, mas também interromper trabalho ou evidências voláteis; a decisão deve seguir o plano e a avaliação do caso. A remoção de um arquivo, sem entender como chegou ao sistema e se houve execução, pode eliminar evidência sem resolver o problema.

## Distinções importantes

Phishing não é sinônimo de spam. Spam descreve mensagens não solicitadas, geralmente em grande volume, e pode ser publicidade ou conteúdo indesejado sem intenção de obter acesso ou induzir uma ação prejudicial. Uma mensagem pode ser spam e também phishing, mas a categoria depende do propósito e da técnica, não apenas do fato de ser indesejada.

Também não é sinônimo de malware. Malware é software malicioso; phishing é uma forma de indução que pode levar alguém a executar código ou entregar dados. Uma campanha pode usar um arquivo malicioso, mas pode também buscar uma senha sem instalar programa algum. Inversamente, malware pode chegar por outros meios que não envolvem uma mensagem fraudulenta.

A falsificação de identidade pode compor o phishing, mas não o define por completo. Uma mensagem pode fingir ser de um executivo, por exemplo, para induzir uma ação. Já uma conta verdadeira comprometida pode enviar conteúdo enganoso sem falsificar o remetente. “Engenharia social” é uma categoria mais ampla para técnicas que influenciam pessoas; phishing é uma modalidade que costuma usar mensagens ou páginas falsas como veículo. Os termos podem coexistir na descrição quando cada um acrescenta informação.

Uma página falsa não é automaticamente evidência de que uma conta foi comprometida. É preciso verificar se houve envio de dados, autenticação, concessão de acesso ou uso posterior. Da mesma forma, uma tentativa de phishing não deve ser chamada de violação de dados sem evidência de acesso ou exposição de informação. A terminologia precisa evita que relatórios transformem risco potencial em fato consumado.

## Limitações e erros de interpretação

Um erro comum é concluir que a mensagem era segura porque passou pelos filtros ou veio de um endereço conhecido. Filtros reduzem risco, mas podem não detectar conteúdo novo, e remetentes legítimos podem estar comprometidos. O procedimento adequado é considerar a natureza do pedido, confirmar solicitações sensíveis por canal independente e reportar inconsistências, mesmo quando a mensagem parece familiar.

Outro erro é atribuir intenção a partir de um único indicador. Um domínio recém-observado, uma falha de autenticação ou um endereço semelhante pode justificar investigação, mas não permite identificar automaticamente o autor, sua localização ou motivação. A infraestrutura pode ser compartilhada, comprometida ou intermediada. Atribuição requer evidência mais ampla e, em geral, permanece sujeita a incerteza.

Campanhas simuladas para treinamento exigem cuidado especial na interpretação. Uma falha em uma simulação pode indicar oportunidade de melhorar processos, clareza dos canais de reporte ou controles, mas não é prova de que uma pessoa causaria um incidente real. Métricas de clique, sem contexto, podem incentivar culpabilização e ocultar a eficácia de barreiras técnicas. A avaliação deve servir à melhoria do sistema e respeitar as políticas aplicáveis.

## Exemplos hipotéticos

**Exemplo 1 — solicitação de autenticação.** Uma funcionária recebe uma mensagem que aparenta vir do suporte interno e diz que o acesso será suspenso. O link abre uma página visualmente semelhante ao portal da empresa. Ela percebe que o domínio é diferente e reporta a mensagem sem inserir dados. A tentativa foi recebida e examinada, mas não há evidência de exposição de credenciais. A investigação ainda pode verificar se outras pessoas receberam o mesmo conteúdo.

**Exemplo 2 — conta potencialmente comprometida.** Um prestador informa que abriu um link e digitou a senha corporativa. Pouco depois, os registros mostram uma autenticação bem-sucedida em horário e contexto incomuns. A proximidade temporal é relevante, mas a equipe deve avaliar se a credencial foi usada pelo adversário e se a sessão está ativa. A resposta pode incluir revogação de acesso, análise dos eventos da conta e busca por mensagens enviadas a partir dela.

## Perguntas frequentes

### Todo phishing precisa conter um link?

Não. A tentativa pode solicitar dados em uma resposta, induzir uma aprovação, pedir que um arquivo seja aberto ou continuar por uma conversa. Um link é comum, mas não é requisito para classificar o mecanismo como phishing.

### Se a pessoa clicou, a conta foi comprometida?

Não necessariamente. O clique demonstra uma forma de interação, se o evento foi atribuído corretamente, mas não comprova que houve envio de credenciais, execução de código ou acesso posterior. É necessário examinar o que aconteceu após a interação e quais registros estão disponíveis.

### Uma página com aparência legítima pode ser confiável?

A aparência não é prova. Confirme o domínio e o contexto por um canal conhecido, especialmente antes de fornecer credenciais ou aprovar uma operação. Em caso de dúvida, acesse o serviço por um caminho já estabelecido, em vez de seguir a instrução da mensagem.

### Quando encerrar a investigação?

O encerramento depende do objetivo e do procedimento de resposta. Deve haver uma justificativa para o escopo considerado: destinatários identificados, interações avaliadas, recursos possivelmente afetados, medidas tomadas e lacunas relevantes. Se a origem ou o uso posterior não puderem ser confirmados, registre essa incerteza em vez de converter a falta de evidência em certeza.

## Relação com o capítulo do manuscrito

Na versão original do manuscrito, o capítulo 6 é o ponto de referência indicado para este conceito. No glossário, a entrada funciona como consulta independente: define a técnica e oferece critérios para distinguir a tentativa do impacto efetivamente demonstrado durante uma investigação.
