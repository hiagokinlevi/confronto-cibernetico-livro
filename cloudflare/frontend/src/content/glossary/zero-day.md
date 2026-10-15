# Zero-day

## Conceito central

Zero-day, também chamado dia zero, descreve uma vulnerabilidade para a qual os defensores ainda não dispõem de uma correção ou que ainda não conhecem quando ela é explorada. A definição concentra-se na relação entre a falha e o estado de conhecimento e de resposta dos responsáveis pelo sistema. Não basta que o defeito seja novo, grave ou tenha sido divulgado há pouco: é necessário que, no momento relevante, a vulnerabilidade esteja sem correção disponível ou permaneça desconhecida pelos defensores.

Essa condição é temporal. Uma falha pode ser desconhecida por uma organização, mas já conhecida por um fornecedor ou por pesquisadores; pode haver uma atualização privada em teste, sem que exista correção acessível ao público; ou um patch pode ter sido publicado e ainda não ter sido aplicado em determinado ambiente. Cada situação exige descrição própria. O rótulo deve esclarecer a quem falta conhecimento ou correção e em que momento, em vez de funcionar como sinônimo vago de “ataque sofisticado”.

Na prática, “zero-day” costuma nomear a vulnerabilidade, mas também aparece como atalho para falar de um ataque que a explora. Para evitar ambiguidade, convém separar os elementos: a falha é a vulnerabilidade; o mecanismo e a sequência usados para tirar proveito dela compõem a exploração; a atividade observada contra sistemas é o ataque; e a ausência de correção ou de conhecimento defensivo é a condição que justifica o qualificativo. Uma investigação pode confirmar a exploração de uma falha sem conseguir provar que ela era desconhecida, ou confirmar que não havia patch sem demonstrar que houve exploração.

## O que o termo não afirma



Também não quer dizer que a exploração tenha ocorrido no “dia zero” contado a partir de uma divulgação, descoberta ou instalação. O nome não fornece uma cronologia universal. Sem uma referência explícita — por exemplo, “antes da primeira correção disponibilizada pelo fornecedor” — a palavra pode esconder divergências sobre o marco temporal usado por quem relata o caso.

Uma falha antiga pode vir a ser tratada como zero-day se continuar desconhecida pelos defensores relevantes quando for explorada. Inversamente, uma falha recém-descoberta deixa de satisfazer a condição de ausência de correção assim que uma correção apropriada se torna disponível, ainda que a organização afetada não a tenha instalado. Nesse segundo caso, o risco pode continuar alto, mas a descrição precisa é outra: a falha está sem correção aplicada naquele ambiente, não necessariamente sem correção disponível.

## Contexto de uso

O termo é mais útil para comunicar uma lacuna de defesa que não pode ser fechada imediatamente pelo fluxo normal de atualização. Ele chama atenção para a incerteza: pode não haver assinatura, regra ou orientação específica; o fornecedor pode ainda estar analisando o problema; e a equipe talvez não conheça todos os produtos, versões ou configurações afetados. Essa incerteza pede contenção proporcional e busca ativa de sinais, sem presumir que a organização esteja indefesa.





## Como pensar a condição defensivamente

A resposta começa por delimitar o que se sabe. É preciso identificar o produto, componente, versões e configurações possivelmente afetados; a fonte da alegação; o marco temporal; e o estado da correção. “Sem patch” pode significar que o fornecedor ainda não publicou atualização, que publicou uma correção apenas para algumas versões, que há uma mitigação oficial sem patch ou que a equipe simplesmente ainda não encontrou o aviso. Esses estados não são intercambiáveis.

Enquanto a correção não está disponível, a organização pode reduzir exposição e limitar consequências. As medidas dependem da arquitetura e das orientações confiáveis para o produto: desativar temporariamente uma função vulnerável, restringir acesso ao componente, isolá-lo de redes não necessárias, aplicar uma configuração de mitigação validada, reforçar controles de autenticação ou aumentar a observação de eventos relevantes. Nenhuma medida deve ser tratada como universal. Desativar um serviço pode interromper uma atividade essencial; uma configuração improvisada pode criar uma falha nova; e um controle de perímetro não ajuda se o caminho de ataque não atravessa aquele perímetro.

Controles compensatórios não corrigem o defeito no código. Eles procuram impedir que a condição vulnerável seja alcançada, diminuir a probabilidade de exploração ou limitar o impacto caso ela ocorra. A equipe deve registrar a medida aplicada, os sistemas cobertos, as exceções, o responsável e o critério de remoção. Isso evita que uma mitigação temporária permaneça esquecida após a chegada do patch ou seja presumida em ativos que não a receberam.



## Evidências na investigação





Os indícios de exploração podem ser diretos ou circunstanciais. Um registro que documente uma requisição incompatível com o uso normal e um efeito característico da falha pode apoiar a hipótese. Uma sequência de eventos nos sistemas afetados, corroborada por artefatos independentes, pode fortalecer a conclusão. Já um alerta genérico, uma indisponibilidade ou um pico de tráfego isolado costuma ser insuficiente para atribuir o evento à vulnerabilidade. O analista deve comparar hipóteses alternativas, como erro de configuração, falha de atualização, uso legítimo atípico ou outra vulnerabilidade.

Também importa distinguir descoberta e conhecimento. Um relatório técnico publicado depois do incidente pode demonstrar que a falha era explorável, mas não necessariamente provar que os defensores já a conheciam antes. Um aviso privado ou uma atualização restrita pode alterar o quadro para certos destinatários sem alterar o estado de outros. Ao descrever a condição, explicite o escopo: “não havia correção pública para a versão X naquela data” é mais preciso do que “ninguém conhecia a falha”.

## Exemplo hipotético





## Distinções com termos próximos

**Vulnerabilidade desconhecida** enfatiza o estado de conhecimento, mas deve sempre indicar desconhecida por quem. O fabricante, a comunidade de pesquisa, um grupo atacante e a equipe defensora podem ter conhecimentos diferentes ao mesmo tempo. Zero-day, no uso definido aqui, também comporta a condição de ausência de correção disponível; por isso, “desconhecida” isoladamente não resolve a pergunta sobre patch.

**Vulnerabilidade recém-divulgada** descreve a proximidade de uma divulgação, não o estado anterior da correção nem a data em que começou a ser explorada. Uma falha pode ser divulgada depois de uma exploração conhecida ou após um patch já estar publicado. A data da notícia não estabelece quando o problema surgiu ou quando os atacantes tiveram conhecimento dele.

**Vulnerabilidade sem patch** descreve diretamente a disponibilidade de correção, mas pode não significar que os defensores desconheçam a falha. Um fornecedor pode reconhecer publicamente um problema e ainda não ter terminado uma atualização. Essa expressão é muitas vezes preferível quando a evidência sustenta a falta de correção, mas não permite dizer que a falha era desconhecida.

**Exploração de dia n** é uma forma de descrever uma exploração depois de existir uma correção ou divulgação, frequentemente usada para enfatizar que os sistemas ainda não foram atualizados. O número não substitui a cronologia concreta. Um sistema vulnerável pode continuar exposto depois do patch sem que a falha continue sendo zero-day no sentido de ausência de correção disponível.



## Limitações e erros de interpretação

O principal risco semântico é usar “zero-day” como intensificador de gravidade. A gravidade depende de fatores como impacto possível, exposição, facilidade de exploração, privilégios necessários, ativos afetados e consequências para a operação. A condição de não haver correção torna a gestão mais difícil, mas não informa sozinha a severidade. Uma falha de alcance limitado pode ser menos urgente do que outra vulnerabilidade já corrigida, porém amplamente explorada em sistemas críticos sem atualização aplicada.

Outro erro é afirmar que um incidente foi causado por zero-day apenas porque o ataque foi detectado antes da publicação de um aviso. A equipe precisa estabelecer que a falha foi explorada e que a condição de conhecimento ou correção se aplicava no intervalo analisado. A sequência temporal pode ser difícil de reconstruir; a descoberta tardia de um artefato não revela automaticamente quando ocorreu a intrusão.



Há limites práticos para a certeza. Registros podem ser insuficientes; fornecedores podem divulgar informações em etapas; diferentes versões podem ter condições distintas; e uma mitigação pode reduzir os sinais observáveis. O relatório deve separar fato confirmado, inferência e desconhecido. Por exemplo: “o fornecedor não havia publicado correção para a versão identificada na data do acesso” pode ser confirmado por um aviso datado; “o invasor conhecia a falha havia meses” exigiria evidência independente e não deve ser inferido apenas porque o ataque foi bem-sucedido.

## Resposta a incidentes e prioridades

Ao surgir uma alegação plausível de zero-day, a equipe deve validar se os ativos estão no escopo e se existe orientação confiável. Em paralelo, pode elevar a observação, procurar sinais compatíveis com exploração e aplicar controles compensatórios proporcionais. Uma decisão documentada ajuda a explicar por que determinado serviço foi isolado, mantido com acesso restrito ou temporariamente desativado, e quais riscos residuais foram aceitos.

Se houver sinais de comprometimento, a resposta não deve parar na mitigação da vulnerabilidade. É preciso investigar o alcance, preservar evidências, conter acessos indevidos e avaliar persistência, movimentação para outros sistemas e exposição de dados. Remover o vetor de entrada pode impedir novas explorações, mas não remove automaticamente um invasor já presente nem reverte alterações feitas. A recuperação deve considerar a integridade dos sistemas e os procedimentos de continuidade da organização.

Quando uma correção se torna disponível, a organização deve confirmar que ela se aplica às versões e configurações afetadas, priorizar os ativos conforme risco e exposição, implantá-la pelo processo de mudança apropriado e verificar o resultado. Em seguida, deve reavaliar as mitigações temporárias e removê-las apenas quando deixarem de ser necessárias. Se o fornecedor oferecer primeiro uma solução alternativa e depois um patch, registre qual foi usada em cada ativo; “mitigado” e “corrigido” não são estados equivalentes.



## Perguntas frequentes



### Um ataque zero-day sempre passa despercebido?

Não. Pode não haver uma assinatura específica ou uma regra pronta, mas comportamentos anormais, efeitos no sistema e atividade posterior podem ser observáveis. A capacidade de detectar depende da telemetria disponível, da qualidade dos registros, do comportamento produzido e da hipótese investigativa. “Não detectado por uma ferramenta” também não equivale a “indetectável”.



### Se o patch existe, mas não foi instalado, é zero-day?

Em geral, não pela condição de ausência de correção disponível. O ambiente continua vulnerável e precisa de atualização ou de outra medida efetiva, mas a descrição deve distinguir atraso de implantação da inexistência de patch. A perspectiva local de desconhecimento pode ser mencionada separadamente, sem alterar o fato de que havia correção acessível.



## Relação com o capítulo

Na versão original, o capítulo 4 é o ponto de referência para este verbete. O conceito ajuda a interpretar ataques em que a defesa precisa agir antes de contar com uma correção, mantendo separadas a falha técnica, a exploração observada e a condição temporal que caracteriza o zero-day.
