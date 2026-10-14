# Spear-phishing

## Conceito

Spear-phishing, também chamado de phishing direcionado, é uma mensagem fraudulenta adaptada a uma pessoa ou organização para induzir acesso, entrega de credenciais ou execução. A adaptação pode estar no destinatário, no assunto, no conteúdo, no momento escolhido ou na aparência de legitimidade construída a partir de informações sobre a vítima. O canal mais comum na imaginação de quem ouve o termo é o e-mail, mas o princípio não depende exclusivamente dele: mensagens em serviços de colaboração, redes sociais, SMS ou outros meios podem cumprir função semelhante.

O elemento que define a modalidade é o direcionamento. Em vez de abordar uma audiência indistinta com uma isca genérica, o remetente apresenta um contexto que parece pertinente ao alvo: uma atividade de trabalho, uma relação profissional, uma rotina de acesso ou uma comunicação que a pessoa esperaria receber. A mensagem pode ser individualizada para uma única pessoa ou preparada para um conjunto delimitado, como uma equipe, uma área ou os funcionários de uma organização. Não é necessário que cada mensagem seja escrita manualmente nem que contenha informação exclusiva para ser considerada direcionada.

A fraude busca obter uma ação ou uma oportunidade de ação. A vítima pode ser levada a abrir um link, visitar uma página, informar senha ou código de autenticação, aprovar uma solicitação, abrir um arquivo ou executar algo. Em alguns casos, o objetivo imediato é apenas iniciar uma conversa ou confirmar que um endereço está ativo, criando condições para contato posterior. A mensagem é, portanto, uma etapa de uma cadeia possível, e não a prova de que o objetivo final foi alcançado.

## Como reconhecer o direcionamento

A personalização pode ser explícita, como o uso do nome, cargo, projeto ou empresa da pessoa, ou mais sutil, como a referência a um processo interno, a um fornecedor conhecido ou a uma janela de atividade plausível. O conteúdo pode imitar o estilo de comunicações legítimas e explorar expectativa, urgência, confiança ou preocupação. Essas características, isoladas, não confirmam fraude: mensagens legítimas também podem ser urgentes, personalizadas ou conter links. O julgamento depende de contexto e evidências convergentes.

## Objetivos e efeitos possíveis

O spear-phishing pode servir a objetivos distintos, e a mensagem por si só não revela qual deles se aplica. Entre os resultados pretendidos estão a captura de credenciais, o acesso a uma conta, a instalação ou abertura de conteúdo, a obtenção de informações, a aprovação de uma operação ou o estabelecimento de contato com a vítima. Em ambientes corporativos, uma conta comprometida pode permitir leitura de mensagens, coleta de documentos, fraude em conversas ou envio de novas mensagens a colegas e parceiros. O alcance depende dos privilégios da conta, das proteções em vigor e do que ocorreu após a interação.

É importante separar intenção, tentativa e impacto. Uma mensagem pode ter sido concebida para roubar credenciais sem que alguém a abra. Um clique pode carregar uma página sem que dados sejam enviados. A entrega de uma senha não prova, por si só, que a conta foi usada com sucesso; por outro lado, o desaparecimento da mensagem não prova que a conta esteja segura. A investigação deve determinar, com o grau de certeza disponível, quais ações ocorreram e quais consequências são sustentadas por registros.

## Onde aparece na investigação

Uma investigação costuma correlacionar fontes que, sozinhas, contam apenas partes do ocorrido. A mensagem original pode mostrar remetente aparente, destinatários, assunto, horário, links e anexos. Os registros do serviço de correio podem indicar entrega, quarentena, encaminhamento, abertura ou remoção, conforme a plataforma e a retenção disponível. Telemetria de navegador, proxy, DNS, endpoint e identidade pode esclarecer se houve navegação, download, processo ou autenticação. Logs de aplicações podem revelar alterações posteriores, como criação de regras de caixa postal, mudanças em fatores de autenticação ou acesso a recursos.

A disponibilidade e o significado dos registros variam. Um evento de abertura em e-mail pode refletir carregamento automático de imagens ou inspeção de segurança, e não leitura humana. Um registro de clique pode corresponder a um scanner que verificou o destino. Um endereço de rede visto no log pode pertencer a uma infraestrutura compartilhada, proxy ou serviço legítimo. Horários podem estar em fusos distintos, e nomes exibidos podem ser falsificados. É preciso considerar a origem de cada dado, a precisão do relógio, o escopo da coleta e as limitações de retenção.

Na análise, preserve a mensagem em formato que mantenha cabeçalhos e conteúdo, além de anotar quando e por quem ela foi coletada. Registre destinatários, identificadores da mensagem, horário e ações conhecidas. Guarde URLs e anexos de modo controlado para análise; não os abra em uma estação comum nem interaja com destinos suspeitos durante a triagem. A preservação deve respeitar políticas internas e privacidade, limitando o acesso a quem conduz a resposta. Capturas de tela podem ajudar a documentar a experiência do usuário, mas não substituem o original, pois omitem dados técnicos e podem alterar ou cortar conteúdo.

## Evidências e interpretação

## Exemplo hipotético

Uma analista recebe uma mensagem que parece vir de uma empresa com a qual sua equipe trabalha. O texto menciona uma revisão de documentos prevista para aquela semana e pede que ela consulte um arquivo por meio de um link. A mensagem usa o nome da analista e o nome do projeto, mas o domínio do endereço não coincide com o domínio usado nas comunicações anteriores. Ela clica, vê uma tela de autenticação e fecha a página sem preencher campos. Nesse ponto, há uma mensagem direcionada e um clique relatado; ainda não há evidência de que credenciais tenham sido entregues ou de que uma sessão tenha sido estabelecida.

## Distinções com termos próximos

Phishing é o termo amplo para mensagens ou abordagens fraudulentas que tentam induzir uma ação, obter informação ou criar uma oportunidade de fraude. Spear-phishing é uma modalidade direcionada, caracterizada pela adaptação ao alvo ou ao contexto do alvo. A fronteira prática nem sempre é nítida: uma mensagem pode ser enviada a várias pessoas de uma mesma organização e ainda assim demonstrar direcionamento. O número de destinatários, sozinho, não decide a classificação.

“Whaling” é usado para descrever phishing que mira pessoas de alta responsabilidade ou influência, como executivos, mas o uso do termo varia. Não é uma categoria mutuamente exclusiva: uma mensagem direcionada a uma liderança pode ser descrita como spear-phishing e, se a organização adotar essa nomenclatura, como whaling. “Comprometimento de e-mail corporativo” costuma designar fraude ou abuso envolvendo contas de e-mail empresariais; pode começar por phishing, mas também ocorrer por outros meios. Portanto, não se deve chamar toda tentativa de spear-phishing de comprometimento de conta.

Smishing e vishing indicam abordagens por SMS e por voz, respectivamente. Podem ser direcionadas e perseguir objetivos semelhantes, mas nomeiam o canal. Uma mensagem de colaboração interna com uma isca personalizada pode ser spear-phishing sem ser e-mail. “Engenharia social” é ainda mais abrangente: inclui técnicas de influência e manipulação que não dependem de uma mensagem digital. Esses termos podem se sobrepor, mas respondem a perguntas diferentes: qual foi a abordagem, por qual canal, contra quem e com que resultado.

## Limitações e erros de interpretação

Outro erro é tratar sinais visuais como checklist decisivo. Erros gramaticais, saudações genéricas, urgência, anexos e domínios estranhos são pistas, não definições. Mensagens legítimas também podem conter esses elementos, e fraudes podem evitá-los. Treinar pessoas apenas para identificar aparência suspeita deixa de lado o contexto do pedido, a validação independente e os controles técnicos. A comunicação de segurança deve facilitar a denúncia sem culpar quem recebeu ou interagiu com a mensagem; a rapidez do relato pode ser mais útil que uma classificação perfeita feita pelo usuário.

## Resposta a incidentes

A primeira ação é preservar a mensagem e registrar o relato da pessoa: o que viu, quando, em qual dispositivo e quais ações realizou. A orientação prática é não apagar o e-mail antes da coleta. Se a mensagem puder ser removida centralmente depois de preservada, a equipe pode reduzir novas interações; a remoção, porém, não reverte um clique, não invalida uma senha entregue e não encerra automaticamente uma sessão. A nota prática é direta: preserve a mensagem e investigue o que ocorreu depois do clique; apagar o e-mail não encerra uma sessão comprometida.

A equipe deve determinar se houve somente recebimento, se o link foi acessado, se dados foram enviados, se um arquivo foi aberto ou se houve autenticação e atividade subsequente. Quando houver indicação de credencial exposta ou uso indevido, a contenção pode incluir redefinir credenciais por canal confiável, revogar sessões e tokens, revisar fatores de autenticação, interromper regras de encaminhamento suspeitas e verificar dispositivos associados. A sequência e o alcance dependem da arquitetura de identidade e dos procedimentos da organização. Uma troca de senha isolada pode ser insuficiente se uma sessão ativa ou mecanismo persistente continuar válido.

## Perguntas frequentes

### Toda mensagem personalizada é spear-phishing?

Não. Personalização também ocorre em comunicação legítima. O termo se aplica quando há uma mensagem fraudulenta adaptada ao alvo para induzir acesso, entrega de credenciais ou execução. Um nome correto ou uma referência a projeto, sem sinais de fraude ou intenção enganosa, não basta para classificar a mensagem.

### Um clique significa que a conta foi comprometida?

Não necessariamente. O clique pode ter levado a uma página sem interação adicional, pode ter sido bloqueado ou pode ter sido registrado por uma ferramenta automática. É preciso correlacionar o relato com telemetria de navegação, endpoint e identidade. Se houve envio de credencial, trate o risco com seriedade mesmo antes de confirmar abuso, mas registre claramente a diferença entre exposição possível e uso comprovado.

### Como confirmar uma solicitação aparentemente legítima?

Use um canal independente já conhecido, como um número de telefone ou endereço obtido em diretório confiável, e confirme a solicitação sem reutilizar links e contatos fornecidos na mensagem suspeita. Para pedidos de pagamento, mudança de dados bancários, acesso ou aprovação, siga o procedimento formal da organização. A verificação é mais confiável quando o canal alternativo não depende da mesma mensagem que está sendo avaliada.

### O que deve ser comunicado no relato?

Informe quando a mensagem chegou, onde foi recebida, qual ação ocorreu e em que momento. Inclua se houve clique, preenchimento de dados, aprovação, download ou abertura de arquivo, além de dispositivo e conta envolvidos. Não é necessário diagnosticar o ataque nem encaminhar links suspeitos a colegas; a equipe de resposta pode coletar a mensagem e orientar os próximos passos.

### Por que guardar a mensagem se ela pode ser removida?

A cópia original sustenta análise de cabeçalhos, conteúdo, destinatários e indicadores, e pode ajudar a localizar outras entregas. Uma captura de tela ou a lembrança do usuário pode não preservar esses dados. Depois da coleta, a remoção pode ser parte da contenção, mas não substitui a investigação das ações posteriores nem as medidas de proteção da conta.

## Relação com o capítulo

Na organização da versão original do manuscrito, o capítulo 6 é o ponto de referência relacionado a este verbete. A leitura do termo deve apoiar a identificação de uma abordagem direcionada e a distinção entre recebimento da mensagem, interação e comprometimento confirmado; a classificação, por si só, não determina o resultado do incidente.
