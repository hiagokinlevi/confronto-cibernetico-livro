# DLL Hijacking

## Conceito

DLL Hijacking, ou sequestro de DLL, é o abuso da forma como um programa localiza e carrega bibliotecas de vínculo dinâmico para fazer com que código diferente do esperado seja executado no contexto desse programa. DLL é a extensão usual de bibliotecas desse tipo no Windows. O termo descreve uma técnica de execução ou persistência, não uma família de malware, um único defeito de software nem qualquer ocorrência em que uma biblioteca suspeita apareça no computador.

Em condições normais, uma aplicação solicita uma biblioteca pelo nome ou por um caminho, e o sistema operacional resolve essa solicitação segundo regras que dependem da forma de carregamento, das configurações do processo, da versão do Windows e de outros fatores. Se a solicitação não fixa uma localização confiável, ou se a aplicação pesquisa em diretórios que um usuário ou processo menos privilegiado pode modificar, uma cópia não autorizada pode ser escolhida antes da biblioteca legítima ou no lugar dela. Ao carregá-la, o processo pode executar código contido nela. A definição essencial, portanto, é o abuso da ordem ou do contexto de busca de bibliotecas para induzir uma aplicação a executar código inesperado.

A imagem de “trocar uma peça” ajuda, mas é incompleta: não é necessário substituir o arquivo legítimo. Pode bastar colocar uma biblioteca com o nome esperado em um local que será consultado primeiro. Também pode haver desvio por caminhos relativos, diretórios de trabalho, configuração de busca ou dependências encadeadas. ## Como o carregamento cria a oportunidade

O risco aparece quando a aplicação encontra uma biblioteca diferente da pretendida. Isso pode ocorrer ao carregar um componente opcional, durante uma atualização ou por meio de uma dependência. Quem consegue gravar em um diretório pesquisado, ou influenciar o ambiente do processo, pode explorar a discrepância. A mera presença do arquivo não prova carregamento, e o carregamento isolado não prova intenção maliciosa.

O código da biblioteca é executado dentro do processo que a carrega. Isso pode dar acesso aos recursos e às permissões daquele processo, além de permitir que a atividade pareça associada ao aplicativo legítimo. ## Variações e limites do termo

Há também técnicas próximas que não são sinônimas perfeitas. Uma substituição direta altera ou troca o arquivo legítimo em sua localização; o sequestro pode ocorrer sem tocar nessa cópia. Injeção de processo insere código em um processo que já está em execução e não depende necessariamente da resolução de uma DLL solicitada pelo próprio programa. Sequestro de caminho ou de diretório descreve a influência sobre uma localização pesquisada e pode abranger executáveis, scripts ou outros recursos, enquanto DLL Hijacking se refere especificamente ao carregamento de bibliotecas. Abuso de COM, busca de executáveis e carregamento de módulos de outras plataformas podem ter lógica parecida, mas têm mecanismos e evidências próprios.

O rótulo também não deve ser aplicado a toda DLL sem assinatura, desconhecida ou localizada fora de uma pasta de sistema. Software legítimo pode distribuir bibliotecas privadas junto ao executável, e componentes internos podem ter assinatura ausente. Inversamente, uma assinatura válida não garante que o arquivo foi carregado pela aplicação esperada nem que a versão seja apropriada para aquele contexto. O que importa é a relação entre solicitante, resolução efetiva, arquivo encontrado, integridade e comportamento.

## Por que o termo é útil

## Evidências para reconhecer o mecanismo

Em seguida, compare o arquivo encontrado com a versão esperada. Hashes, tamanho, datas, assinatura, metadados, conteúdo, dependências e procedência ajudam a avaliar integridade. Nenhum atributo isolado resolve a questão: datas podem ser preservadas ou alteradas, nomes podem ser copiados e arquivos assinados também podem ser usados indevidamente. Quando possível, compare com uma fonte confiável da mesma versão e arquitetura do aplicativo. Guarde a cópia e os dados de aquisição com cadeia de custódia compatível com a investigação.

O contexto do diretório é decisivo. Determine se a localização era pesquisada naquele caso específico e se podia ser modificada pela identidade que preparou ou controlou o ambiente. Examine ACLs, proprietário, permissões herdadas, diretório de trabalho, configurações da aplicação e alterações recentes. Um diretório gravável por usuários comuns pode explicar a possibilidade, mas só constitui caminho explorável se a aplicação efetivamente o consultar na resolução relevante. Do mesmo modo, encontrar o arquivo em local incomum não basta se o processo nunca o mapeou.

## Exemplo hipotético

Imagine um visualizador legítimo que carrega uma DLL opcional pelo nome ao abrir determinado tipo de documento. A instalação usa uma pasta da aplicação protegida, mas, por uma configuração ou escolha de diretório, a resolução também considera uma pasta de trabalho modificável. Um invasor com acesso limitado prepara nessa pasta uma biblioteca com o nome solicitado. Quando um usuário abre o documento, o visualizador pode carregar essa cópia e executar seu código com as permissões do usuário. Esse cenário é hipotético: ele ilustra a relação entre solicitação, ordem de busca e permissões, sem descrever um procedimento de exploração aplicável.

## Distinções importantes

### Carregamento lateral de DLL

“Carregamento lateral” costuma descrever o uso de um executável legítimo para carregar uma DLL fornecida junto dele ou encontrada em uma localização conveniente. É frequentemente citado como uma forma de execução ou disfarce associada ao DLL Hijacking. A terminologia não é uniforme entre equipes e publicações; convém registrar o evento observável: executável, módulo, caminho, solicitante e mecanismo de resolução.

### Substituição de biblioteca

Na substituição, o arquivo esperado é alterado ou trocado. No sequestro por ordem de busca, o original pode permanecer intacto enquanto outra cópia é escolhida. Os dois cenários podem produzir execução de código por biblioteca, mas requerem investigação distinta: um enfatiza integridade da instalação; o outro, ordem de busca e permissões de diretório.

### Injeção de processo

Na injeção, o código é introduzido em um processo por uma técnica que não depende necessariamente de uma solicitação normal de carregamento feita pelo programa. Uma ferramenta pode usar ambas as técnicas em momentos diferentes. A observação de uma DLL em memória não determina, por si só, se houve carregamento normal, injeção ou outro método; é necessário examinar a cadeia de eventos e a telemetria disponível.

## Interpretações equivocadas

Um erro frequente é atribuir execução à biblioteca que apenas existe no disco. Outro é considerar qualquer diretório não padrão malicioso ou concluir que um programa foi comprometido porque carregou uma DLL fora de uma pasta conhecida. Aplicações portáteis, plugins, componentes de fornecedores e atualizações podem justificar caminhos diferentes. A conclusão depende da expectativa válida para aquela instalação e daquele momento.

Também é comum presumir que “o Windows procura primeiro em X” sem confirmar as condições do processo. A ordem de resolução depende da modalidade de carregamento e de configurações; regras simplificadas podem estar desatualizadas ou não se aplicar. A equipe deve reconstruir o ambiente concreto e consultar documentação técnica correspondente à versão em análise. Não se deve transformar uma possibilidade genérica em fato do incidente.

## Prevenção e redução de risco

Do lado do desenvolvimento e da administração, a prioridade é tornar previsível a resolução das dependências. Aplicações devem preferir caminhos e mecanismos de carregamento que restrinjam a busca a locais confiáveis, evitar depender de diretórios de trabalho controláveis e validar as bibliotecas esperadas. O fornecedor deve considerar bibliotecas ausentes, dependências transitivas e chamadas feitas por componentes de terceiros; corrigir apenas o executável principal pode deixar a mesma condição em uma dependência.

## Resposta a incidentes

Se houver suspeita, preserve primeiro os dados voláteis e a evidência do carregamento, dentro das capacidades e prioridades do ambiente. Registre processo, usuário, horário, linha de comando, diretório de trabalho, módulos mapeados e conexões observadas. Colete a DLL e metadados sem executá-la em uma estação de análise comum. Documente origem, hash, permissões e estado do diretório, e proteja cópias para análise. Isolar o equipamento pode ser necessário diante de atividade ativa, mas a decisão deve considerar continuidade operacional e risco de propagação.

A investigação deve responder a uma sequência de perguntas: qual processo solicitou ou carregou o módulo; qual arquivo e caminho foram resolvidos; por que essa localização foi considerada; quem podia gravar nela; quando o arquivo foi introduzido; que código ou comportamento foi observado; e quais processos ou sistemas foram afetados. Investigue também outros dispositivos com a mesma aplicação, configuração e diretório vulnerável. A presença da mesma DLL pode indicar distribuição comum ou implantação autorizada, então compare versões e contexto antes de ampliar o escopo.

O relatório final deve separar observação de inferência. Por exemplo: “o processo carregou a DLL do caminho A” é uma observação se sustentada pelo evento; “a ordem de busca permitiu o carregamento” é uma explicação que precisa de evidência de configuração e resolução; “um ator preparou o arquivo para obter execução” é uma conclusão sobre intenção, que requer elementos adicionais. Essa distinção melhora decisões de contenção, comunicação e atribuição.

## Perguntas frequentes

### Toda DLL carregada de uma pasta gravável indica ataque?

Não. É um sinal que justifica examinar a aplicação, as permissões e a procedência do arquivo. A confirmação exige demonstrar que a biblioteca foi carregada, que o caminho era inesperado ou não autorizado e que a explicação legítima não se aplica. Um caminho gravável aumenta a exposição, mas não revela sozinho quem o utilizou nem com qual intenção.

### Como distinguir um componente legítimo de uma cópia indevida?

Compare a DLL com o pacote ou a instalação esperada para a mesma versão, arquitetura e configuração. Considere assinatura, hash, metadados, dependências, origem e histórico de instalação. Em seguida, confirme se aquela aplicação deveria carregá-la daquele caminho. Uma diferença pode decorrer de atualização, plugin ou personalização autorizada; valide com registros e responsáveis antes de classificar como comprometimento.

### O que registrar quando não há telemetria do carregador?

Declare a limitação e busque evidências complementares: memória coletada, rastros do sistema, logs do produto de segurança, inventário de arquivos, horários de criação e execução, configuração do processo e reprodução controlada em ambiente isolado equivalente. Evidências indiretas podem sustentar uma hipótese, mas devem ser descritas como tal. Não afirmar o caminho efetivo quando ele não foi observado evita transformar correlação em certeza.

## Relação com o capítulo

Na organização original do livro, o termo se relaciona ao capítulo 1 como vocabulário para compreender uma via de execução de código por meio de aplicações e bibliotecas. Sua utilidade no glossário está em conectar o comportamento observado ao mecanismo que precisa ser confirmado: o caminho efetivo de carregamento e a integridade das bibliotecas. Essa formulação permite que equipes descrevam o risco com precisão sem presumir, apenas pelo nome do processo ou pela presença de um arquivo, que houve sequestro.
