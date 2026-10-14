# Resposta a ataque de phishing corporativo

## A pergunta que organiza a resposta

Quando uma mensagem de phishing chega ao ambiente corporativo, a pergunta decisiva não é apenas “quem recebeu o e-mail?”, mas “qual caminho de risco se confirmou e que evidência sustenta essa conclusão?”. Uma mensagem pode permanecer sem interação, ter sido aberta, ter levado alguém a informar uma senha, ter iniciado uma autenticação aprovada por engano, ter induzido o download de um arquivo ou ter provocado uma alteração de pagamento. Cada situação pede uma contenção diferente. Tratar todas como simples limpeza de caixa postal deixa lacunas; tratar toda suspeita como invasão confirmada pode interromper operações sem necessidade.

O objetivo operacional é reduzir o risco enquanto a equipe preserva informações suficientes para entender o ocorrido e recuperar a operação com segurança. Isso exige um ciclo: receber o sinal, classificar a exposição, definir contenção proporcional, procurar efeitos relacionados, restaurar condições confiáveis e registrar decisões. Nenhum passo isolado demonstra que o incidente terminou. A remoção do e-mail, por exemplo, não encerra uma sessão já autenticada nem recupera um documento enviado a um destinatário externo.

## O que significa um ataque de phishing corporativo

Phishing é o uso de uma comunicação enganosa para induzir uma pessoa a executar uma ação que favorece o atacante ou expõe a organização. O canal pode ser e-mail, mensagem de colaboração, SMS, ligação ou uma combinação deles. No ambiente empresarial, a mensagem costuma se apoiar em rotinas reconhecíveis: convite para compartilhar arquivo, aviso de entrega, aprovação de despesa, solicitação de atualização cadastral ou pedido urgente de um gestor. Aparência profissional não comprova legitimidade, e erros de redação tampouco são requisito para que a mensagem seja maliciosa.

É útil distinguir três caminhos iniciais, sem presumir que sejam mutuamente exclusivos. No caminho de credenciais, a pessoa informa senha, código ou outro fator em uma página que imita um serviço. No caminho de sessão, a interação pode levar à aprovação de uma solicitação de autenticação ou ao uso indevido de uma sessão já estabelecida. No caminho de execução ou ação, a pessoa abre um anexo, instala algo, habilita conteúdo ou segue instruções para mudar dados e processos. Uma campanha pode combinar esses caminhos, e a investigação precisa verificar cada um que faça sentido diante dos fatos.

## Contexto: por que a resposta não começa pela exclusão

O e-mail é uma porta de entrada, não necessariamente o lugar onde o risco persiste. Se houve captura de credencial, apagar a mensagem não altera a senha, não invalida tokens já emitidos e não remove sessões em outros dispositivos. Se houve mudança de regra na caixa postal, a limpeza da mensagem original não desfaz o encaminhamento. Se um arquivo foi aberto, a exclusão da cópia recebida não demonstra que o dispositivo voltou a um estado confiável. Se uma solicitação financeira foi atendida, apagar o pedido não reverte a transação.

O tempo importa, mas urgência não é sinônimo de improviso. Uma conta com atividade suspeita pode exigir revogação de sessões e bloqueio temporário; uma mensagem entregue a muitos destinatários pode exigir busca e remoção centralizada. A decisão deve considerar alcance, sensibilidade do ativo, privilégio da identidade, sinais de atividade posterior e impacto de interromper a conta. A equipe registra por que escolheu uma ação e quando irá reavaliar seus efeitos.

## Primeiro enquadramento: alerta, fato e hipótese

Uma triagem eficiente mantém três categorias visíveis. “Alerta” é o sinal que justifica análise: relato de usuário, detecção automática, aviso de fornecedor ou anomalia operacional. “Fato confirmado” é algo sustentado por evidência verificável, como a mensagem presente em uma caixa, um registro de autenticação bem-sucedida ou uma regra de encaminhamento criada no período analisado. “Hipótese” é uma explicação que ainda precisa de confirmação, por exemplo, que a autenticação incomum decorreu do link recebido ou que um anexo executou código.

No registro do incidente, use linguagem observável: “o provedor registra sessão iniciada às 10h14” é mais preciso que “o atacante entrou às 10h14” quando a autoria não está estabelecida. “A pessoa relata ter digitado a senha” deve continuar sendo um relato até que a entrevista ou outro registro o confirme. As conclusões podem mudar; preserve a linha do tempo das revisões, a fonte de cada dado e o responsável pela interpretação.

## Decidir qual caminho ocorreu

### Mensagem recebida sem interação conhecida

Se a mensagem foi entregue, mas não há evidência de clique, resposta, abertura de anexo ou autenticação relacionada, o foco inicial é determinar o alcance e impedir novas interações. A equipe pode localizar mensagens com características comuns, retirar cópias da circulação por meios administrativos e avisar as pessoas afetadas com orientação curta. Deve conferir se houve resposta, encaminhamento ou acesso a arquivos vinculados, em vez de concluir que “ninguém clicou” apenas porque o alerta veio do filtro de correio.

### Credencial possivelmente exposta

Quando a pessoa informa que digitou a senha, trate a credencial como comprometida até que a equipe execute a política de recuperação. Redefinir a senha por um canal confiável é uma medida inicial, mas a equipe deve verificar se a identidade usa a mesma credencial em outros serviços, se há métodos de recuperação alterados e se ocorreram autenticações posteriores. A política pode exigir revogação de sessões e tokens, redefinição de fatores de autenticação ou validação de dispositivos confiáveis. O procedimento depende do provedor de identidade e do impacto operacional da conta.

Uma senha alterada não prova que todo acesso indevido cessou. Sessões podem continuar válidas conforme a arquitetura e a configuração; tokens podem ter duração própria; integrações e credenciais de aplicativo podem seguir outro ciclo. A equipe de identidade deve confirmar quais mecanismos foram invalidados, observar novas tentativas e avaliar se o usuário possui privilégios ou acesso a dados especialmente sensíveis. Se a conta foi usada para enviar mensagens, identifique os destinatários e interrompa a propagação sem apagar os registros necessários.

### Sessão ou conta com atividade suspeita

Uma sessão suspeita pode aparecer como autenticação bem-sucedida seguida de acesso a recursos, criação de regras, alteração de configurações ou envio de mensagens. Um endereço de rede isolado é um indicador, não uma atribuição automática. Compare a atividade com o padrão esperado da pessoa, o estado do dispositivo, o tipo de autenticação, o recurso acessado e outros eventos próximos. A ausência de um evento nos registros disponíveis não prova que ele não ocorreu; primeiro confirme a cobertura, retenção e fuso horário das fontes consultadas.

Se a evidência indicar risco ativo, a contenção pode incluir bloqueio temporário da identidade, revogação de sessões, retirada de métodos de autenticação suspeitos e revisão de regras e delegações. A escolha entre desabilitar a conta e manter acesso com sessão revogada depende do risco e do impacto. Uma conta de atendimento ou de operação essencial pode exigir uma substituição preparada para preservar o serviço. O responsável pela área deve conhecer o impacto, enquanto a equipe de segurança mantém a decisão de risco e o registro técnico.

### Anexo, download ou execução possível

Quando houver indício de execução maliciosa ou atividade persistente, a equipe de endpoint decide se isola o dispositivo da rede, preserva dados voláteis conforme procedimento, coleta artefatos e inicia recuperação por imagem confiável. Isolamento pode interromper operações locais e deve ser coordenado com o dono do serviço. Em caso de dispositivo pessoal usado para trabalho, as ações precisam respeitar o modelo de gestão e as regras de privacidade. Não execute o arquivo novamente para reproduzir o efeito em um equipamento de produção.

### Fraude ou mudança de processo

Se a alteração ainda não foi executada, suspenda o fluxo até a validação pelo procedimento normal. Se já ocorreu, preserve registros do pedido e da aprovação, identifique os sistemas e pessoas que participaram e acione os responsáveis internos apropriados. A equipe técnica pode ajudar a determinar acesso a contas e documentos; a área financeira conduz a resposta do processo. Um incidente de phishing pode, portanto, produzir risco mesmo sem malware ou conta claramente comprometida.

## Fontes de evidência e como interpretá-las

### Mensagem e infraestrutura de correio

Preserve a mensagem em formato que retenha metadados, quando a plataforma permitir, e registre caixa, destinatário, horário e identificador. Examine remetente exibido e endereço real, domínio, cabeçalhos, rota de entrega, URLs e anexos por meio de ferramentas aprovadas. O nome visível do remetente pode ser falsificado ou imitar um contato; o domínio autenticado ajuda a avaliar a origem, mas não garante que o conteúdo seja benigno. Encaminhar a mensagem como anexo pode preservar mais contexto do que copiar e colar o texto, desde que esse procedimento seja compatível com as ferramentas e regras internas.

### Identidade e autenticação

Registros de identidade ajudam a construir a sequência de tentativas, êxitos, falhas, desafios de autenticação, alteração de senha, cadastro de fatores, criação de aplicativos, consentimentos e mudanças de privilégio. Correlacione a conta, o horário e o recurso com a mensagem. Confirme a zona horária, a retenção dos registros e se os eventos de todas as aplicações relevantes são encaminhados para a fonte consultada.

### Dispositivo, rede e aplicações

A telemetria do endpoint pode registrar navegador, arquivo, processo, alerta, conexão e estado de proteção. Inventário e gestão de dispositivos ajudam a saber se o equipamento é corporativo e quais controles estavam ativos. Registros de proxy, DNS, firewall ou navegação podem mostrar resolução ou conexão com um domínio; uma consulta DNS não prova que a pessoa abriu uma página, e uma conexão não prova que uma carga foi executada.

### Evidência humana e linha do tempo

Entrevistar a pessoa afetada é uma fonte importante e não substitui registros técnicos. Peça uma sequência simples, sem solicitar que a pessoa reconstrua detalhes que não recorda: quando viu a mensagem, que ação tomou, em qual dispositivo, que página ou aviso apareceu e se houve solicitação de autenticação. Registre palavras importantes como relato, não como fato técnico. Evite armazenar senhas, códigos de uso único ou dados pessoais desnecessários.

## Papéis e decisões coordenadas

O centro de operações de segurança ou a função de plantão recebe e classifica o sinal, reúne evidências e coordena a investigação técnica. A equipe de identidade executa mudanças em contas, sessões e fatores, explicando o alcance de cada ação. A equipe de correio pesquisa e remove mensagens quando autorizado, preservando o necessário para análise. A equipe de endpoint avalia isolamento, coleta e reconstrução de dispositivos. Esses papéis podem estar reunidos em equipes pequenas; a responsabilidade precisa continuar explícita.

Defina quem pode autorizar bloqueio de conta, isolamento de dispositivo, remoção em massa e interrupção de um fluxo financeiro. Em incidentes graves, o responsável por comando do incidente prioriza a resposta e resolve dependências. Uma pessoa registra decisões e horário, inclusive ações que foram consideradas e adiadas. Essa governança reduz atrasos sem transformar cada medida técnica em uma reunião; os critérios podem ser acordados antes do incidente.

## Cenários hipotéticos contrastantes

### Hipótese A: campanha removida antes de interação confirmada

Imagine uma mensagem de compartilhamento falso entregue a vários funcionários. Um deles a relata, mas não lembra se clicou. A busca localiza cópias semelhantes e o registro de correio mostra entrega em diversas caixas. Não há, naquele momento, evento correspondente no serviço de identidade nem sinal de execução no dispositivo. Esses dados sustentam entrega e relato, mas não provam que ninguém interagiu. A resposta verifica os destinatários, consulta registros disponíveis, remove as cópias com escopo validado e comunica uma orientação para reportar qualquer interação posterior.

### Hipótese B: senha informada e autenticação subsequente

Imagine que uma analista relate ter digitado sua senha em uma página de aparência corporativa. Pouco depois, há uma autenticação bem-sucedida no serviço de identidade, e a conta envia uma mensagem para contatos internos. A combinação de relato, sessão e envio sustenta uma hipótese forte de uso indevido. A equipe revoga sessões conforme a capacidade do serviço, redefine a credencial por processo confiável, verifica fatores e regras, interrompe o envio e procura mensagens semelhantes recebidas pelos contatos.

### Hipótese C: anexo aberto em estação de trabalho

Imagine que um funcionário abra um documento inesperado e habilite uma funcionalidade solicitada por ele. O relato torna a execução possível, mas não demonstra que houve código malicioso. A equipe de endpoint consulta a telemetria, preserva os registros disponíveis e decide se isola a estação. Se houver processo ou conexão suspeita consistente, a contenção ganha prioridade; se não houver, a ausência de alerta é tratada dentro da cobertura conhecida, e a investigação considera outras fontes.

### Hipótese D: pedido de alteração de pagamento

Imagine que uma mensagem aparentemente enviada por um fornecedor solicite mudança urgente de conta bancária. A mensagem é suspeita, mas não há sinal de comprometimento da caixa postal do funcionário. A ação imediata é suspender a alteração e confirmar os dados por um contato já cadastrado, não pelo telefone fornecido na mensagem. Finanças registra se a mudança foi solicitada, aprovada ou executada; segurança preserva a mensagem e verifica se outras contas ou processos receberam pedidos semelhantes.

## Contenção proporcional e recuperação

A contenção busca interromper a atividade de risco e limitar efeitos, preservando o serviço quando possível. Para uma campanha sem interação confirmada, pode bastar remover mensagens e bloquear indicadores aprovados no correio. Para credenciais expostas, a prioridade é proteger a identidade e revisar sessões, fatores e métodos de recuperação. Para execução suspeita, a estação pode ser isolada. Para fraude, suspender o fluxo e validar por canal independente pode ser mais urgente do que ações no endpoint.

Recuperar não significa apenas devolver acesso. A equipe confirma que as credenciais e fatores estão sob controle, remove regras ou permissões indevidas, restaura arquivos de fonte confiável, verifica o dispositivo e acompanha atividades posteriores. Uma conta privilegiada pode exigir validação adicional e revisão de ações administrativas. O dono do serviço confirma que as funções essenciais operam. O encerramento ocorre quando critérios estabelecidos são atendidos e os riscos remanescentes são aceitos pela autoridade apropriada.

## Erros comuns que prolongam o incidente

O erro mais imediato é apagar a mensagem e encerrar o caso. Isso reduz a visibilidade e não revoga acessos nem desfaz ações. Se uma remoção for necessária para limitar a exposição, preserve primeiro os dados definidos no procedimento ou utilize os registros centrais de correio para manter evidências. Outro erro é redefinir senha e supor que todos os mecanismos de acesso foram invalidados; a equipe precisa confirmar sessões, fatores, tokens e integrações relevantes.

Outro erro é transformar um indicador em certeza de autoria ou impacto. Um endereço IP, um domínio parecido ou um nome de arquivo pode ajudar a buscar, mas não revela por si só quem agiu ou que dados foram acessados. Bloqueios automáticos sem validação podem afetar serviços legítimos. Da mesma forma, a falta de alerta de endpoint não é prova de ausência de execução quando a cobertura ou retenção são limitadas.

Por fim, não culpabilize quem reportou. Uma cultura em que usuários receiam consequências tende a atrasar o aviso e reduzir detalhes úteis. A resposta deve agradecer o reporte de forma profissional, explicar o que fazer a seguir e conduzir a apuração sem presumir negligência. Uma simulação ou treinamento pode revelar confusão no processo; use os resultados para melhorar canais, instruções e controles, não para expor pessoas.

## Como avaliar a qualidade da resposta

Avalie se a equipe identificou o caminho provável e documentou as evidências que sustentam a classificação. Uma resposta robusta diferencia entrega, interação, comprometimento e impacto, em vez de usar um único rótulo para tudo. Verifique se fontes relevantes foram consultadas e se limitações de cobertura foram reconhecidas. Se a conclusão depende de uma hipótese, o registro deve dizer o que falta para confirmá-la.

Examine a contenção: foi proporcional ao risco? A autoridade estava definida? A ação alcançou o sistema pretendido? Houve verificação posterior? O efeito colateral foi considerado e comunicado? Para credenciais, a revisão deve abordar mecanismos de sessão e autenticação relevantes; para dispositivos, estado de isolamento e recuperação; para fraude, estado da solicitação e canal de confirmação. A avaliação não precisa converter tudo em uma nota numérica.

Uma revisão pós-incidente deve resultar em mudanças concretas: melhorar um procedimento, adicionar cobertura de registro, esclarecer a autoridade para revogar sessões, ajustar uma regra de correio, ensaiar um canal de confirmação financeira ou atualizar uma mensagem aos usuários. Cada ação deve ter responsável e condição de conclusão verificável. A lição aprendida não é “as pessoas precisam prestar mais atenção” quando o processo não oferece um meio simples de reportar ou verificar solicitações.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa permite ensaiar decisões sem enviar mensagens enganosas a pessoas reais nem executar arquivos. Reúna segurança, identidade, correio, suporte, gestor de negócio e comunicação. O facilitador apresenta um cenário hipotético por etapas: primeiro, um usuário reporta uma mensagem; depois, surge um relato de senha informada; por fim, uma evidência adicional sugere alteração de regra ou envio para contatos. A equipe decide em cada etapa que fatos precisa preservar, quem autoriza contenção, quais áreas são chamadas e como comunicará a incerteza.

O facilitador pode introduzir detalhes que mudam a decisão: o usuário não consegue trocar a senha; o dispositivo é compartilhado; a conta é de atendimento crítico; o link foi acessado por um scanner; a solicitação financeira já entrou em aprovação. O propósito é observar como a equipe pede evidências e atualiza a decisão, não conduzir os participantes a uma resposta decorada. Se ninguém sabe quem pode revogar sessões ou remover uma campanha, essa é uma lacuna operacional concreta.

## Roteiro para implementar uma capacidade de resposta

### Preparar antes do incidente

Mantenha um procedimento curto acessível a plantonistas e equipes de suporte. Ele deve explicar como receber o relato, preservar a mensagem, reunir informações sem expor segredos, classificar caminhos possíveis, acionar os responsáveis e registrar decisões. Inclua contatos de escalonamento e alternativas para fora do horário normal. Garanta que o procedimento reflita as ferramentas e permissões existentes; uma instrução para revogar sessões não ajuda se ninguém sabe quem possui a função.

### Receber e classificar

No momento do alerta, atribua um responsável e um identificador ao caso. Registre horário, pessoa ou sistema que reportou, caixas e ativos envolvidos e a descrição inicial. Preserve a mensagem e os metadados disponíveis antes que a caixa seja alterada. Faça perguntas neutras para determinar se houve clique, resposta, entrada de credencial, aprovação, download, abertura, instalação ou ação financeira. Marque respostas como relatos até que corroboradas.

### Conter e investigar

Selecione a contenção alinhada ao caminho: remoção centralizada de cópias, proteção de identidade, revogação de sessões, análise ou isolamento de dispositivo, suspensão de uma transação. Defina o efeito esperado e confirme que foi alcançado. Em paralelo, investigue alcance e atividades relacionadas em fontes relevantes. Preserve a busca e os resultados de modo que outra pessoa consiga compreender o escopo e repetir a consulta autorizada.

### Recuperar e aprender

Antes de restaurar acesso, confirme que a identidade e os dispositivos atendem aos critérios de confiança definidos. Remova mecanismos indevidos, reponha configurações legítimas e verifique acessos e funções críticas. Oriente a pessoa sobre os canais de reporte e sinais que justificam novo contato. Se dados ou transações podem ter sido afetados, encaminhe a avaliação às áreas responsáveis sem antecipar conclusões sobre obrigações legais.

## Perguntas frequentes

### Apagar o e-mail resolve o incidente?

Não. Pode reduzir a exposição de outras pessoas, mas não revoga uma credencial ou sessão, não remove alterações de conta e não desfaz ações já feitas. Preserve os dados necessários e trate o efeito que realmente ocorreu.

### A pessoa clicou. Isso confirma comprometimento?

Não por si só. O clique indica interação ou evento de acesso que precisa ser interpretado. Verifique se houve entrada de dados, autenticação, download, abertura, execução ou compartilhamento. Registros automatizados também podem acessar links.

### Basta trocar a senha?

### Como agir se não sabemos se houve execução do anexo?

Registre o que a pessoa fez e consulte telemetria e alertas disponíveis. Preserve o estado conforme o procedimento e avalie isolamento se os sinais e o risco justificarem. A falta de alerta só tem valor dentro da cobertura conhecida; não execute novamente o anexo em produção.

### O que dizer a colegas que receberam a mesma mensagem?

### Quando acionar jurídico ou privacidade?

Acione conforme políticas internas e quando houver possibilidade de dados pessoais, divulgação externa, fraude, obrigação contratual ou necessidade de preservar evidências para uma apuração. A equipe técnica fornece fatos e limitações; as áreas competentes avaliam deveres e comunicações aplicáveis.

### É possível concluir que não houve comprometimento?

### Uma mensagem de phishing sempre exige desligar a conta?

Não. A resposta deve acompanhar o risco. Uma tentativa sem interação pode pedir remoção e aviso; uma sessão suspeita pode pedir revogação ou bloqueio; uma conta essencial pode exigir alternativa operacional. A equipe documenta a razão da contenção escolhida e revê a medida quando surgem novos fatos.

### Qual é o papel do usuário durante a resposta?

## Leitura relacionada ao capítulo 8

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode ser apresentado como leitura relacionada ao capítulo 8 do manuscrito original, dedicado às operações de resposta, contenção e recuperação. Essa relação oferece um ponto de continuidade para quem estuda como transformar sinais de incidente em decisões operacionais. A leitura não substitui documentação técnica atualizada, treinamento, procedimentos da organização nem julgamento da equipe diante das evidências concretas.
