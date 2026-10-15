# Hash

## Conceito

Em forense digital, **hash** é o valor calculado a partir de dados para comparar a integridade entre cópias ou entre momentos diferentes. Também chamado de hash criptográfico, ele é produzido por uma função que recebe uma sequência de bytes e devolve uma sequência de tamanho definido, chamada resumo ou digest. O resultado funciona como uma impressão digital matemática dos bytes examinados: se o conteúdo muda, a saída normalmente muda de forma imprevisível.

A palavra “integridade” precisa ser entendida com escopo preciso. Comparar dois hashes iguais, calculados com o mesmo algoritmo e sobre a mesma sequência de bytes, é uma forte indicação de que as sequências são idênticas. O hash não descreve o conteúdo, não explica como ele foi criado e não revela quem o forneceu. Tampouco atesta, por si só, que a coleta incluiu tudo o que deveria incluir. Ele responde a uma pergunta delimitada: os dados que foram submetidos ao cálculo produziram o mesmo resumo?

Hash também designa, em outros contextos de computação, valores usados para indexação, armazenamento ou identificação. Neste verbete, o foco é o hash criptográfico empregado para verificar e documentar evidências digitais. A propriedade relevante não é apenas produzir resultados compactos, mas tornar impraticável, com algoritmos adequados, encontrar entradas distintas que gerem deliberadamente o mesmo resultado ou reconstruir a entrada a partir do resumo.

## Como funciona

Uma função de hash criptográfico processa os bytes de entrada segundo regras determinísticas. “Determinística” significa que a mesma entrada, interpretada da mesma maneira e processada pelo mesmo algoritmo, sempre produz a mesma saída. O tamanho do arquivo não determina o tamanho do digest: um arquivo pequeno e uma imagem de disco grande geram valores de comprimento fixo para aquele algoritmo.

Uma alteração de um único bit tende a causar uma mudança extensa no resultado, fenômeno conhecido como efeito avalanche. Isso torna o hash útil para detectar alterações acidentais ou deliberadas entre dois objetos comparados. A função, porém, não registra quais bytes mudaram, em que posição ocorreu uma alteração nem quando ela aconteceu. Para localizar diferenças, é necessário comparar os dados ou usar ferramentas que apresentem diferenças; o resumo, sozinho, é apenas um sinal compacto de igualdade ou desigualdade.

O algoritmo faz parte do significado do valor. Um digest sem identificação do algoritmo é incompleto: valores de algoritmos diferentes podem ter comprimentos distintos, e não se deve comparar um com o outro como se fossem resultados equivalentes. Registros forenses devem associar explicitamente o hash ao nome do algoritmo e ao objeto preciso que foi submetido ao cálculo. Quando houver dúvidas sobre grafia ou formato, a comparação deve ser feita com o valor integral, sem omitir caracteres ou normalizar a cadeia de maneira que altere seu conteúdo.

A colisão ocorre quando duas entradas diferentes produzem o mesmo digest. Hashes criptográficos são projetados para dificultar essa busca, mas nenhuma saída de tamanho finito pode distinguir matematicamente todas as entradas possíveis. Assim, a igualdade de hash é uma evidência técnica muito forte de igualdade dos bytes no uso forense comum, mas não uma demonstração lógica absoluta para qualquer cenário concebível. A escolha de algoritmos reconhecidos e apropriados ao contexto reduz o risco de que a comparação dependa de uma função enfraquecida.

## Papel na cadeia de custódia

O cálculo do hash pode ser usado em diferentes pontos da cadeia de custódia para registrar o estado de um objeto digital. Por exemplo, uma equipe pode calcular o digest de uma imagem forense após sua aquisição, registrar o resultado no formulário de coleta e recalculá-lo quando uma cópia de trabalho for preparada. Se os resultados coincidirem, isso sustenta que os bytes comparados permaneceram iguais entre os cálculos. A documentação deve tornar claro qual objeto foi lido em cada etapa e em que momento a verificação ocorreu.

A comparação só é informativa se as entradas forem equivalentes. Calcular o hash de um disco físico inteiro e compará-lo ao hash de uma partição extraída não é uma comparação válida, mesmo que a partição contenha dados originados daquele disco. Da mesma forma, um arquivo compactado e os arquivos extraídos dele são objetos diferentes. Diferenças de representação, como incluir ou excluir cabeçalhos, metadados do contêiner, espaço não alocado ou setores defeituosos substituídos, também mudam a entrada submetida à função.

Um fluxo de trabalho defensivo costuma separar o original preservado da cópia de análise. O hash registrado no momento da aquisição pode servir de referência; cópias posteriores são verificadas contra ele antes do exame ou do compartilhamento. Se os valores divergirem, a resposta correta não é presumir imediatamente adulteração. É preciso verificar se o objeto, o escopo da leitura, o algoritmo, a versão da ferramenta, o tratamento de erros e o instante de cálculo foram comparáveis. Também se deve preservar os registros originais e descrever a discrepância, em vez de substituir silenciosamente um resultado pelo outro.

O hash é uma peça da cadeia de custódia, não a cadeia inteira. Essa cadeia também depende de quem coletou o material, sob qual autorização, como o dispositivo foi identificado, que método foi usado, quais ferramentas e configurações participaram, como o material foi acondicionado, quem teve acesso a ele e como as transferências foram registradas. Uma sequência de hashes consistentes pode sustentar a estabilidade de um conjunto de bytes; não corrige uma identificação equivocada do equipamento nem uma lacuna de documentação.

## Onde aparece na investigação

Hashes aparecem em relatórios de aquisição, manifestos de arquivos, logs de ferramentas forenses, registros de transferência, catálogos de evidências, inventários de imagens de disco e sistemas de gestão de casos. Podem acompanhar arquivos exportados de estações de trabalho, anexos, imagens de memória, registros de nuvem ou pacotes entregues a outra equipe. Em cada caso, a pergunta prática é o que exatamente foi resumido: um arquivo isolado, uma coleção em determinada ordem, um contêiner completo ou uma imagem bit a bit.

Em resposta a incidentes, a equipe pode calcular hashes de artefatos preservados para verificar que o material entregue à análise corresponde ao coletado. Um digest também pode ser usado para reconhecer arquivos idênticos em cópias de trabalho e evitar análises repetidas, desde que tamanho, algoritmo e procedência sejam considerados. Se um indicador de comprometimento incluir um hash, ele pode ajudar a procurar por um arquivo com os mesmos bytes em fontes examinadas. A correspondência aponta para igualdade do conteúdo resumido, mas não prova, isoladamente, que o arquivo foi executado, que causou um incidente ou que todas as cópias relevantes foram encontradas.

A interpretação de logs deve considerar o momento do cálculo. Um hash gerado antes da transferência e outro calculado depois dela podem indicar se a transferência preservou os bytes, desde que os objetos comparados sejam os mesmos. Um digest registrado apenas ao fim do processo não permite inferir, sem registros anteriores, que nada mudou durante as etapas precedentes. A cronologia e a associação entre cada valor e seu objeto são tão importantes quanto a cadeia de caracteres do digest.

## Evidências para reconhecer e avaliar

Ao encontrar um hash em documentação ou ferramenta, procure elementos que permitam reproduzir ou interpretar a comparação:

- nome do algoritmo usado e valor completo do digest;
- identificação do objeto resumido, com caminho, nome, identificador de evidência ou descrição da imagem;
- escopo e método de leitura, incluindo se houve leitura integral ou apenas de uma região;
- data e hora do cálculo, com fuso horário ou indicação do padrão adotado;
- ferramenta, versão, parâmetros relevantes e resultado de eventuais erros de leitura;
- identidade de quem calculou, contexto da coleta e vínculo com os registros de custódia;
- relação entre o valor de referência e o valor recalculado, com indicação clara de igualdade ou divergência.

Esses dados permitem avaliar se dois valores são comparáveis e se a conclusão se limita ao que os registros sustentam. Uma planilha com nomes de arquivos e digests, desacompanhada de origem e contexto, pode ser útil para localizar correspondências, mas tem valor limitado para reconstruir a aquisição. Uma captura de tela pode documentar a exibição de um resultado, porém registros exportáveis e documentação do procedimento facilitam a revisão independente.

Se um valor não corresponder, preserve os dois resultados e investigue a diferença de modo rastreável. Confira espaços em branco inseridos na cópia do digest, truncamento, troca de algoritmo, arquivo alterado por conversão, leitura parcial ou erro da ferramenta. Verifique também se o próprio arquivo foi regravado por um processo normal, como atualização de metadados ou exportação, pois a comparação pode revelar uma mudança legítima. A divergência é um achado que precisa de explicação; não é, isoladamente, prova de fraude.

## Exemplo hipotético

Imagine que uma equipe autorizada adquira uma imagem de um notebook corporativo para investigar uma interrupção de serviço. Logo após a aquisição, calcula o hash da imagem completa e registra o algoritmo, o nome do arquivo de imagem, o horário, a ferramenta e o identificador do caso. Uma analista recebe uma cópia de trabalho, calcula novamente o hash da imagem completa e obtém o mesmo resultado. Essa coincidência dá suporte à conclusão de que os bytes comparados da cópia são iguais aos da imagem de referência naquele ponto do processo.

Mais tarde, outro relatório lista um hash diferente para um arquivo extraído da imagem. Isso não contradiz a verificação anterior: o segundo digest descreve um objeto interno, não a imagem inteira. Se a equipe gerar uma versão descompactada ou converter o arquivo para outro formato e o resumo mudar, a divergência também não demonstra automaticamente adulteração. A investigação deve registrar a transformação e preservar o objeto original para que seja possível distinguir conteúdo coletado de produto derivado.

Suponha, ainda, que o digest da cópia de trabalho não coincida com o da imagem de referência. A equipe deve interromper conclusões que dependam da identidade dos objetos, preservar a cópia divergente e conferir o escopo do cálculo e os registros da transferência. Pode ser necessário produzir uma nova cópia a partir da fonte preservada, documentando a operação. O resultado só deve ser tratado como resolvido quando a discrepância puder ser explicada ou quando a limitação permanecer explicitamente registrada.

## Distinções importantes

**Hash e criptografia:** a criptografia transforma dados para que possam ser recuperados com uma chave apropriada. Um hash criptográfico não é um método de cifrar arquivos e, em geral, não oferece operação inversa para recuperar a entrada. Ele serve para produzir um resumo comparável.

**Hash e checksum:** checksum é um termo amplo para valores usados na detecção de erros. Alguns mecanismos simples detectam alterações acidentais, mas não foram projetados para resistir a um adversário que tente produzir deliberadamente uma mesma saída. Um hash criptográfico é escolhido por propriedades de segurança específicas; os termos não devem ser tratados como sinônimos sem considerar o mecanismo empregado.

**Hash e assinatura digital:** uma assinatura digital combina operações criptográficas e uma chave privada para vincular uma mensagem a uma chave, podendo ser verificada com uma chave pública. O hash pode participar da assinatura como resumo dos dados, mas um digest sozinho não autentica o autor nem prova que uma pessoa ou organização produziu o arquivo.

**Hash e carimbo de tempo:** o digest não contém uma data verificável de criação. Uma data pode ser associada ao valor por um serviço de carimbo de tempo ou por registros mantidos por um sistema, mas essa evidência vem do mecanismo e de sua documentação, não do hash isolado.

**Hash e criptografia com chave (HMAC):** um código de autenticação baseado em hash utiliza um segredo compartilhado e pode sustentar uma verificação de autenticidade entre participantes que controlam esse segredo. Como um hash simples não usa uma chave, ele não oferece essa garantia. A presença de um valor com aparência de digest não permite concluir qual desses mecanismos foi utilizado; é preciso identificar o método e o contexto.

## Limitações e erros de interpretação

O erro mais comum é transformar “os hashes coincidem” em “a evidência é autêntica e completa”. A igualdade sustenta que os objetos efetivamente resumidos têm os mesmos bytes, sob a comparação realizada. Não comprova que a fonte estava correta, que a coleta foi completa, que não houve alteração antes do primeiro cálculo ou que o equipamento atribuído era o que se acreditava ser. Para sustentar autenticidade e completude, é necessário relacionar o digest a uma coleta documentada e a outras evidências.

Outro erro é ignorar o escopo. Um hash calculado sobre um arquivo não representa automaticamente seu diretório, os metadados externos, as permissões, o sistema de arquivos ou o dispositivo de origem. Um manifesto pode listar hashes individuais, mas sua cobertura depende de como os arquivos foram selecionados e de como as omissões foram registradas. Em imagens de disco, setores ilegíveis ou áreas não incluídas precisam ser documentados, pois um resultado calculado sobre os bytes disponíveis não demonstra que todos os bytes do dispositivo foram capturados.

A confiança também depende da função escolhida e da forma de uso. Algoritmos podem envelhecer à medida que surgem avanços de análise, e políticas técnicas podem recomendar substituí-los para novos cálculos. Se a evidência é sensível ou a comparação tem consequências relevantes, é prudente registrar algoritmos aceitos pela política vigente e, quando apropriado, mais de um digest. O uso de dois algoritmos não substitui boa coleta, documentação ou controle de acesso, mas pode reduzir a dependência de uma única função.

O digest não é segredo. Publicá-lo pode revelar que um arquivo corresponde a outro já conhecido, e hashes de arquivos previsíveis podem ser comparados com catálogos públicos. Portanto, a divulgação do valor deve ser avaliada junto com o contexto e as regras de privacidade, mas não se deve confundir o hash com uma senha ou uma cópia recuperável do conteúdo. Também não se deve considerar um nome de arquivo ou um hash como prova suficiente de que os dados associados não foram trocados: a associação precisa estar protegida nos registros e no processo de custódia.

## Implicações para resposta a incidentes

Durante um incidente, a prioridade é preservar informações voláteis e evitar alterações desnecessárias na fonte. O cálculo de hash pode exigir leitura do objeto e, em certos ambientes, operações de aquisição podem afetar o sistema ou consumir recursos. A equipe deve seguir o procedimento de coleta aprovado, registrar as ações e escolher um momento em que o cálculo não prejudique a contenção ou a preservação. O hash ajuda a demonstrar estabilidade entre etapas, mas não deve atrasar uma medida urgente de proteção quando há risco operacional relevante; a decisão e seus efeitos precisam ser documentados.

Ao compartilhar artefatos entre equipes, um digest comum oferece uma referência compacta para confirmar que ambas estão analisando os mesmos bytes. A equipe remetente deve comunicar o algoritmo, o objeto preciso e o contexto de cálculo; a receptora deve recalcular o valor sobre a cópia recebida e registrar o resultado. Se a correspondência falhar, convém evitar misturar a cópia divergente com os materiais validados até que a causa seja entendida. Esse cuidado facilita a revisão e reduz a chance de conclusões atribuídas ao arquivo errado.

Em relatórios, formule conclusões proporcionais. “O hash SHA-256 calculado sobre a imagem recebida coincidiu com o valor registrado após a aquisição” descreve a comparação e os objetos envolvidos. “A imagem é genuína” extrapola o que essa igualdade, sozinha, demonstra. Quando não for possível estabelecer uma comparação limpa, declare o que foi calculado, quais diferenças foram observadas e quais inferências ficaram limitadas.

## Perguntas frequentes

### Dois arquivos com o mesmo hash são iguais?

Se o algoritmo e o escopo forem os mesmos e a comparação usar o digest completo, a igualdade é forte evidência de que os bytes são iguais. O risco teórico de colisão não deve ser ignorado em termos matemáticos, mas, com função criptográfica adequada, a igualdade é tratada em geral como evidência operacional robusta. Isso não estabelece origem, autoria ou completude.

### Um hash diferente prova que alguém alterou o arquivo?

Não. O resultado mostra que os objetos comparados produziram saídas diferentes. A causa pode ser alteração, comparação de objetos distintos, transformação de formato, erro de leitura ou diferença no escopo. A origem da divergência deve ser investigada e documentada.

### Posso comparar hashes sem saber qual algoritmo foi usado?

Não de forma tecnicamente confiável. Identifique o algoritmo e confirme que ambos os valores foram calculados sobre a mesma representação dos dados. Comprimento parecido não basta para estabelecer equivalência.

### O hash demonstra quando um arquivo existia?

Não. O cálculo produz um valor a partir dos bytes, não uma data. Horários em metadados podem ajudar na investigação, mas têm limitações próprias; a associação temporal exige registros independentes e contexto confiável.

### O que fazer quando o hash não está documentado?

Se o objeto ainda estiver disponível e puder ser lido com autorização, calcule e registre um digest atual, descrevendo precisamente o objeto, o algoritmo, a ferramenta e o momento. Esse cálculo documenta seu estado presente e não reconstitui retroativamente a condição do objeto na coleta original. A lacuna deve continuar explícita no relatório.

## Relação com o capítulo

No capítulo 8 da versão original, o termo pode ser lido como parte do vocabulário de preservação e análise de evidências. Seu uso rigoroso começa por declarar qual conjunto de bytes foi resumido e termina por limitar a conclusão ao que a comparação permite afirmar. Essa disciplina torna a verificação reproduzível e ajuda a equipe a explicar o peso da evidência sem atribuir ao hash garantias que dependem de outros controles.
