# Hash de integridade em evidências digitais

## Quando um hash ajuda a responder se uma evidência mudou?

A pergunta central de quem pesquisa o tema costuma ser direta: como demonstrar que um arquivo ou uma imagem forense permaneceu igual entre a coleta e a análise? Uma função hash criptográfica resume uma sequência de bytes em uma saída de tamanho fixo. Ao calcular o hash de uma mesma sequência com o mesmo algoritmo, obtém-se o mesmo valor. Se os bytes forem alterados, mesmo que por uma mudança pequena, o resultado normalmente será diferente. Essa comparação oferece um controle prático de integridade: permite detectar divergências entre cópias ou entre momentos distintos.

O valor, porém, responde a uma pergunta estreita. Ele indica se duas entradas produzem a mesma saída segundo determinado algoritmo; não revela, por si só, quem criou o arquivo, de qual dispositivo ele veio, se a coleta foi autorizada, se todos os dados relevantes foram preservados ou se a interpretação do analista está correta. Um hash não transforma um arquivo em prova autossuficiente. É uma peça dentro de um processo documentado, no qual origem, contexto, método, custódia e análise precisam ser considerados em conjunto.

A distinção entre integridade e autenticidade é essencial. Integridade diz respeito à ausência de alterações detectadas na comparação definida. Autenticidade envolve a relação entre o objeto apresentado e a origem ou identidade que se atribui a ele. Um arquivo pode conservar exatamente os mesmos bytes desde uma coleta inadequada. Do mesmo modo, um hash pode corresponder perfeitamente a uma cópia produzida de um arquivo adulterado antes da aquisição. Nesse caso, a comparação confirma estabilidade posterior, não a história anterior do conteúdo.

Há também uma diferença entre prova e alerta. Um hash diferente é um alerta de divergência: algo precisa ser explicado. Pode ter havido alteração, mas também erro de seleção, conversão, compressão, normalização, leitura de um objeto diferente ou falha de registro. Hashes iguais são evidência favorável de igualdade de bytes para as entradas comparadas, dentro das limitações do algoritmo e do procedimento. Não provam completude nem contexto. A conclusão responsável precisa expressar exatamente esse alcance.

## O que o resultado representa

### Uma função sobre bytes

Uma função hash criptográfica recebe dados de qualquer tamanho e produz uma sequência de tamanho definido, frequentemente representada em hexadecimal. No uso forense, o objeto pode ser um arquivo individual, um contêiner, uma imagem de mídia, um pacote de exportação ou outro artefato cuja sequência binária seja reproduzível. O resultado depende do algoritmo escolhido e dos bytes efetivamente lidos. Alterar nome ou caminho não altera o hash do conteúdo; alterar metadados armazenados dentro do próprio arquivo altera os bytes e, em regra, altera o resultado.

Isso torna necessária a precisão sobre o objeto comparado. “O hash do notebook” é uma descrição insuficiente. Foi calculado sobre uma imagem bit a bit do disco? Sobre uma partição? Sobre um arquivo de exportação? Sobre uma pasta percorrida por uma ferramenta? Cada escopo representa um conjunto diferente. Uma imagem de disco pode incluir espaço não alocado e estruturas que uma exportação lógica não contém. Um arquivo extraído pode ter sido regravado durante a extração, com metadados diferentes do objeto de origem. O relatório deve nomear o objeto, seu escopo e como foi obtido.

### Algoritmos e adequação

### O que hashes iguais e diferentes permitem dizer

Se duas cópias foram calculadas com o mesmo algoritmo e apresentam o mesmo valor, a equipe pode dizer que os resultados são consistentes com a igualdade dos bytes comparados. Para a maioria dos usos operacionais, uma função adequada torna extremamente improvável que conteúdos diferentes produzam acidentalmente o mesmo valor. Ainda assim, a afirmação deve indicar o método e não extrapolar para autoria, intenção ou validade jurídica. “Os hashes coincidem” é uma observação reproduzível; “o documento é autêntico” é uma conclusão mais ampla que exige evidências adicionais.

Se os valores divergem, não se deve apagar o resultado original nem escolher silenciosamente o que parece correto. Preserve as duas saídas, os horários, as identidades dos objetos e as condições do processamento. Verifique se foram selecionados os mesmos bytes, se a transferência terminou, se houve compressão ou mudança de formato, se a ferramenta incluiu cabeçalho, manifesto ou metadados e se um dos objetos foi montado ou aberto com escrita habilitada. A divergência pode indicar alteração relevante, mas a causa precisa ser investigada.

## Onde o controle se encaixa na resposta a incidentes

### Integridade como parte do fluxo, não como evento isolado

Durante uma resposta, equipes fazem triagem, contenção, coleta, transferência, análise, recuperação e comunicação. O hash é mais útil quando integrado a esse fluxo, com pontos de controle definidos. Calcular um valor apenas ao fim da investigação pode ajudar a verificar estabilidade a partir daquele momento, mas deixa sem documentação o intervalo anterior. Calcular na coleta e repetir após transferências relevantes cria marcos comparáveis que ajudam a localizar onde surgiu uma divergência.

A contenção também pode modificar sistemas. Isolar um equipamento da rede, desligá-lo, coletar memória ou iniciar uma ferramenta de aquisição pode alterar estado, arquivos temporários, registros ou metadados. Essas ações podem ser necessárias para reduzir danos ou preservar dados voláteis, mas precisam ser documentadas como parte do contexto. Hash de uma imagem posterior não demonstra que o dispositivo estava intacto antes da intervenção. A equipe deve distinguir alterações inerentes à resposta de alterações não explicadas, sem ocultar nenhuma delas.

### Fontes de evidência pertinentes

Para diretórios e coleções, a equipe precisa definir como cada item será identificado e inventariado. Um hash de arquivo por arquivo permite comparar itens individuais, desde que nomes, caminhos e regras de inclusão sejam registrados. Um manifesto pode reunir os caminhos, tamanhos e valores dos arquivos; o próprio manifesto também deve ser protegido e versionado. Um único hash de um arquivo compactado representa o contêiner completo. Se o contêiner for reempacotado, os bytes podem mudar mesmo que o conjunto lógico de arquivos permaneça igual. A escolha depende da pergunta que a investigação precisa responder.

Artefatos de nuvem ou SaaS introduzem uma distinção entre objeto armazenado e representação exportada. A plataforma pode produzir uma exportação com metadados, normalização ou campos adicionais. O hash da exportação protege a representação recebida, não comprova que ela seja uma cópia binária do estado interno do provedor. Registre identificador da conta ou tenant autorizado, ferramenta ou interface usada, intervalo e filtros, horário, responsável e identificadores de exportação disponíveis. A interpretação dos dados depende também da documentação do serviço e do contexto operacional.

### Papéis e responsabilidades

Quem coleta deve identificar o objeto, usar o método aprovado, registrar condições relevantes e evitar operações desnecessárias que alterem a fonte. Quem recebe uma transferência deve verificar o hash da cópia recebida contra o valor enviado e registrar resultado, horário e identidade. Quem administra o repositório deve proteger arquivos e registros, limitar acesso e manter trilha de auditoria. Quem analisa deve trabalhar sobre cópias designadas, registrar transformações e preservar a evidência original conforme a política aplicável.

## Decisões práticas durante coleta e transferência

### O que registrar no momento da aquisição

Um registro útil conecta o hash a uma coisa concreta. Inclua identificador único do item, descrição, origem, escopo, método de aquisição, nome e versão da ferramenta, algoritmo, valor calculado, horário com fuso, operador e destino inicial. Registre condições que afetem a leitura, como falhas, interrupções, mídia degradada, erros reportados pela ferramenta ou limitações da fonte. Se o cálculo ocorreu sobre o arquivo produzido pela aquisição, diga isso de forma explícita.

A ferramenta também merece registro. Anote produto, versão, configuração essencial e, quando aplicável, versão do sistema operacional ou componente que afeta o resultado. Não é necessário transformar cada coleta em uma enciclopédia de ambiente; registre o suficiente para reproduzir e avaliar a operação. Se uma ferramenta calcula o hash enquanto adquire, indique essa relação. Se outro utilitário calculou o arquivo final depois da aquisição, registre ambos os passos.

### Verificação após transferência

### Repositório e preservação do registro

Armazenar o objeto e seu registro no mesmo local com as mesmas permissões pode facilitar a troca simultânea de ambos. A equipe deve proteger os registros de forma que mudanças sejam identificáveis e atribuíveis, usando controles institucionais apropriados, como acesso restrito, trilha de auditoria, versionamento ou armazenamento com proteção contra alteração. Nenhum controle isolado elimina todos os riscos. O procedimento deve explicar quem pode incluir, consultar, corrigir ou invalidar um registro e como essas ações ficam documentadas.

### Cópia-mestre e cópias de trabalho

Sempre que viável, preserve uma cópia-mestre sob controles de acesso e use cópias de trabalho para examinar, filtrar ou transformar dados. A cópia-mestre representa o objeto preservado após aquisição e verificação; não significa que a fonte original não tenha mudado durante a resposta. Registre qual cópia foi usada em cada atividade e verifique sua relação com a cópia-mestre antes da análise. Se o trabalho exige conversão ou extração, gere um novo objeto de trabalho com identificação própria.

## Cenários defensivos e contrastes

### Cenário hipotético: transferência íntegra

Considere um cenário hipotético em que uma equipe autorizada coleta um arquivo de log, calcula seu hash e registra o escopo e a ferramenta. O arquivo é transferido a um laboratório interno. No recebimento, outra pessoa calcula o hash com o mesmo algoritmo e confirma igualdade. O que se pode concluir? Há evidência de que os bytes do arquivo recebido correspondem aos bytes do arquivo cujo valor foi registrado na origem, desde que identificação, escopo e procedimento estejam corretos. Isso sustenta a integridade da transferência observada.

### Cenário hipotético: divergência após processamento

Em outro cenário hipotético, uma coleção é enviada dentro de um arquivo compactado. O hash do pacote recebido difere do valor registrado antes do envio. A equipe descobre que um processo intermediário recompactou a coleção. Os arquivos internos aparentam ter os mesmos nomes e tamanhos, mas isso não basta. A equipe compara os hashes individuais registrados, verifica o inventário, documenta o reempacotamento e identifica quais metadados do contêiner mudaram.

### Cenário hipotético: coleta parcial

Imagine uma equipe que calcula corretamente o hash de um arquivo exportado, mas percebe depois que o filtro da consulta excluiu um período importante. O valor continua sendo um controle válido para o arquivo exportado. A coleta, contudo, não representa o escopo esperado. Repetir o cálculo não recupera eventos omitidos. A equipe precisa corrigir a coleta, documentar as duas versões e evitar que a cópia incompleta seja apresentada como conjunto completo.

### Cenário hipotético: fonte alterada antes da coleta

## Erros comuns que enfraquecem a conclusão

### Confundir integridade com autenticidade ou verdade

Um hash coincidente não prova que o conteúdo seja verdadeiro, que o remetente seja quem afirma ser ou que a informação descreva corretamente um evento. Um documento falso pode ser preservado sem qualquer mudança. A autenticidade pode depender de assinaturas, origem, cadeia de custódia, sistemas de registro, confirmação independente e contexto. Mesmo esses elementos requerem avaliação; nenhum rótulo isolado resolve todas as questões.

### Calcular sobre o objeto errado

### Não registrar algoritmo ou ferramenta

### Confiar só no valor exibido na tela

### Substituir o registro sem deixar histórico

### Tratar horário como prova automática

### Ignorar erros de leitura

### Calcular somente depois de transformar

### Achar que um manifesto resolve tudo

## Como avaliar a qualidade do procedimento

Uma avaliação deve verificar se a conclusão pode ser reproduzida e se seu alcance é claro. Uma pessoa que não participou da coleta consegue identificar qual objeto foi analisado, localizar o registro, saber qual algoritmo foi usado e entender como a comparação foi feita? Se não, há lacunas documentais mesmo que os valores pareçam plausíveis. Reprodutibilidade é um atributo operacional do processo, não um adjetivo aplicado ao relatório.

Examine se há vínculo entre cada hash e um identificador estável, se os horários incluem fuso, se a ferramenta e a versão aparecem, se transferências relevantes foram verificadas e se divergências foram preservadas e explicadas. Confira se o registro distingue evidência original, cópia-mestre, cópia de trabalho e produto transformado. Verifique também se os controles de acesso e a trilha de auditoria protegem os objetos e registros conforme a política.

Avalie separadamente quatro dimensões: identidade do objeto, integridade dos bytes, completude da aquisição e interpretação. Para identidade, pergunte se o escopo está claro. Para integridade, examine comparações e registros. Para completude, confronte a aquisição com o requisito investigativo e as limitações da fonte. Para interpretação, procure distinguir fatos observados, inferências, hipóteses e questões não resolvidas. Um procedimento forte não usa o resultado de uma dimensão para declarar as demais automaticamente satisfeitas.

## Exercício de mesa ou laboratório autorizado

Um exercício seguro pode ser realizado com arquivos sintéticos criados para treinamento, sem dados pessoais nem sistemas de terceiros. O facilitador apresenta um pacote de evidências fictício, uma ficha de coleta e dois registros de transferência. O objetivo é que a equipe decida o que pode afirmar, quais dados faltam e quais ações documentar. O exercício não precisa incluir técnicas de intrusão ou simular acesso não autorizado; pode concentrar-se em rastreabilidade, comparação e comunicação.

Na primeira rodada, os valores de origem e destino coincidem. Os participantes devem identificar o algoritmo, escopo, ferramenta, operador e horário, depois redigir uma conclusão limitada à transferência. Pergunte se a evidência contém o intervalo esperado e como isso seria verificado. A resposta não pode ser inferida somente do resultado coincidente. O facilitador pode revelar que o pacote foi gerado por uma exportação com filtro incompleto, destacando a diferença entre integridade e completude.

Ao final, cada grupo produz uma nota curta com fatos confirmados, hipóteses, alertas e limitações. O facilitador avalia clareza, reprodutibilidade e adequação do alcance. Registre as dúvidas recorrentes para revisar o procedimento. Não use um exercício como substituto de treinamento sobre a ferramenta real, nem conclua que a equipe está preparada para uma investigação somente porque completou uma atividade simples.

## Roteiro de implementação

### Definir finalidade e escopo

### Padronizar identificação e registro

Crie identificadores únicos e campos mínimos que acompanhem o objeto ao longo do ciclo de vida. A ficha deve comportar algoritmo, valor, escopo, origem, método, ferramenta e versão, operador, horários com fuso, destino, relação com outros objetos e observações de erro ou transformação. Adapte o formato aos sistemas já usados, desde que seja possível pesquisar, auditar e exportar o histórico. Evite campos livres como única fonte de informação crítica quando uma opção controlada puder reduzir ambiguidade.

### Escolher ferramentas e validar o fluxo

### Proteger evidências e registros

Defina repositório, permissões, retenção, cópias de segurança e trilha de auditoria. Separe, quando apropriado, a cópia-mestre das cópias de trabalho e limite alterações. Proteja o registro de hash contra substituição sem histórico. Determine como tratar incidentes de acesso, perda, corrupção ou divergência e quem deve ser notificado. Essas decisões precisam ser compatíveis com políticas internas e requisitos aplicáveis.

### Incluir verificações em pontos de transferência

Mapeie transferências entre coleta, armazenamento, análise, revisão e entrega. Em cada passagem relevante, estabeleça quem verifica o objeto, quando, com qual registro e como tratar divergências. Se houver transformação intencional, identifique a entrada e a saída e registre a operação em vez de comparar valores incompatíveis. Para entregas externas, combine os controles de integridade com autenticação, confidencialidade e autorização apropriadas.

### Documentar exceções e revisar

O procedimento deve prever casos de mídia danificada, objeto volátil, acesso interrompido, ferramenta indisponível ou limitação de plataforma. A resposta pode exigir priorização ou uma técnica alternativa, mas cada exceção precisa ser justificada e registrada. Faça revisão periódica de amostras e atualize ferramentas, algoritmos e procedimentos com base em documentação técnica atualizada e lições autorizadas. Mudanças devem ter responsável, data e justificativa.

### Comunicar resultados com precisão

Relatórios devem enunciar o que foi calculado, sobre qual objeto, em que momento e com qual resultado. Uma formulação cuidadosa pode dizer: “O valor calculado sobre o arquivo recebido coincide com o valor registrado na coleta, usando o algoritmo identificado; isso sustenta que os bytes comparados permaneceram consistentes entre esses pontos de controle.” Em seguida, informe limitações pertinentes, como ausência de verificação da completude ou da condição anterior à coleta. Evite expressões absolutas como “prova que nada foi alterado” quando o escopo é mais restrito.

## Perguntas frequentes

### Um hash prova que um arquivo é original?

Não. Ele permite comparar conteúdo em bytes entre objetos ou momentos. Para sustentar origem ou autenticidade, são necessárias evidências sobre procedência, aquisição e contexto, e possivelmente mecanismos adicionais. Um hash calculado hoje não identifica quem criou um arquivo nem quando ele surgiu.

### Hashes iguais significam que a evidência está completa?

Não. Significam que os objetos comparados produziram o mesmo resultado no algoritmo utilizado. A coleção pode ter sido incompleta desde a aquisição. Completeza depende do escopo definido, da fonte, dos filtros, do método de coleta e de validações próprias.

### É necessário calcular o hash mais de uma vez?

Calcule no marco inicial definido pelo processo e após transferências relevantes, além de outros pontos previstos pela política. A repetição deve responder a uma pergunta de controle. Recalcular repetidamente sem registrar objeto, momento e finalidade acrescenta pouco e pode criar confusão entre versões.

Não diretamente. Cada algoritmo produz um valor segundo sua própria função. Para comparar conteúdo, calcule ambos os objetos com o mesmo algoritmo, ou recalcule o objeto disponível com o algoritmo desejado. Registre a transição e mantenha valores anteriores quando tiverem valor histórico ou de interoperabilidade.

### Se um valor divergir, a evidência está comprometida?

A divergência mostra que os resultados não coincidem; sua causa ainda precisa ser apurada. Pode haver alteração, seleção de objeto diferente, transformação autorizada, interrupção ou erro de registro. Preserve os estados e metadados, investigue as causas possíveis e descreva o que foi confirmado. Não declare comprometimento sem evidência suficiente.

São mecanismos relacionados, mas diferentes. Uma assinatura normalmente protege uma mensagem ou um hash assinado e permite verificar vínculo com uma chave, sujeito às condições de confiança e gestão dessa chave. O hash continua útil para comparar bytes. A assinatura não comprova, por si só, que o conteúdo é verdadeiro ou que a coleta foi completa.

Use algoritmos atuais e aceitos pela política e pelo contexto técnico, verificando documentação atualizada. Não se deve escolher um algoritmo apenas porque aparece como padrão em uma ferramenta antiga. Em acervos legados, preserve os valores existentes e avalie a geração de valores adicionais para facilitar validação e interoperabilidade, registrando a decisão.

Não. O hash detecta diferenças quando se compara um valor confiável com o valor recalculado. Ele não impede que alguém modifique o arquivo ou substitua tanto o arquivo quanto um registro desprotegido. Proteção contra alteração requer controles de acesso, armazenamento e auditoria apropriados.

Preserve e identifique a entrada, documente ferramenta, versão e parâmetros da conversão, gere um identificador para a saída e calcule o hash de cada objeto separadamente. Não espere valores iguais depois da conversão. Se a conversão descartar conteúdo ou metadados, avalie se isso afeta a finalidade e registre a limitação.

Depende do contexto e da política. O valor geralmente não revela o conteúdo diretamente, mas pode permitir reconhecer um arquivo conhecido ou expor uma relação entre investigações. Avalie sensibilidade, privacidade, necessidade e risco antes de divulgar. Em relatórios restritos, inclua os detalhes necessários à reprodução sem expor dados desnecessários.

Preserve o objeto disponível e todos os registros de aquisição, incluindo erros e limitações. Explique por que a repetição não foi possível e quais conclusões continuam sustentadas. Não converta ausência de alternativa em certeza. Uma avaliação independente pode ajudar a estabelecer o alcance possível das evidências remanescentes.

## Leitura relacionada ao capítulo de resposta

No capítulo 8, dedicado a operações de resposta, contenção e recuperação, o livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer contexto para pensar o lugar dos controles de evidência dentro de uma operação mais ampla. A conexão relevante é operacional: decisões de contenção e recuperação podem alterar sistemas, enquanto a preservação e a documentação precisam acompanhar essas decisões. A obra não substitui documentação técnica atualizada, treinamento prático nem julgamento da equipe; deve ser lida como uma referência contextual, ao lado das fontes e procedimentos adequados ao caso.
