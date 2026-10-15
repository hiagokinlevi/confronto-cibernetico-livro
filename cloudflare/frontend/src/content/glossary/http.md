# HTTP

## Definição e papel

HTTP, sigla de Hypertext Transfer Protocol, é um protocolo de troca de requisições e respostas amplamente usado por aplicações web. Ele estabelece convenções para que um cliente solicite uma operação a um servidor e para que este devolva um resultado, um erro ou uma indicação de que a interação deve prosseguir de outra forma.

A definição é deliberadamente mais ampla que “protocolo da web”.

## Como a troca funciona

Uma interação típica começa com um cliente que prepara uma requisição endereçada a um servidor. Ela contém informações de controle, como o método solicitado, o recurso de destino e campos de cabeçalho.

O método ajuda a expressar a intenção protocolar, mas não prova o que a aplicação fez. Um método de leitura sugere consulta; métodos associados a envio ou alteração sugerem que dados podem ter sido submetidos.

O código de estado resume como o servidor tratou a requisição: pode indicar sucesso, redirecionamento, erro atribuído ao cliente ou falha do lado do servidor, entre outras condições. Não é um registro completo da operação.

Cabeçalhos carregam metadados usados por clientes, servidores e intermediários. Podem descrever o tipo e o tamanho do conteúdo, indicar preferências, transportar informações de cache, autenticação ou cookies, e informar aspectos da conexão.

HTTP não exige que cada requisição represente uma página inteira. Uma tela pode provocar diversas chamadas para scripts, imagens, fontes e serviços de dados.

## HTTP, transporte e proteção da comunicação

HTTP define a semântica das mensagens, mas a comunicação precisa de mecanismos de transporte para atravessar a rede. Em implantações comuns, observadores podem encontrar HTTP sobre conexões TCP; existem também versões e modos de uso associados a outros transportes.

HTTP sem proteção criptográfica deixa partes relevantes da comunicação observáveis no caminho, conforme o ponto de captura. Isso pode expor destinos, caminhos, cabeçalhos e conteúdo, além de permitir alteração por um intermediário capaz de interferir no tráfego.

A proteção do canal não torna a atividade automaticamente confiável. Um serviço malicioso pode usar HTTPS, e um domínio legítimo pode hospedar uma aplicação comprometida.

Intermediários — como proxies, gateways, balanceadores e caches — podem receber, encaminhar, modificar ou registrar mensagens, de acordo com sua configuração. Em TLS, um intermediário só vê o conteúdo protegido se estiver posicionado e configurado para terminar ou inspecionar a sessão, ou se houver outra fonte de telemetria.

## O que HTTP revela em uma investigação

HTTP pode ser útil para reconstruir a sequência de uma atividade web e relacionar um endpoint a um processo, usuário, destino e horário. Em registros de proxy ou de aplicação, campos como endereço de origem, identidade autenticada, host, caminho, método, código de resposta, volume transferido e duração ajudam a formular essa narrativa.

A força da evidência depende da fonte. Um log de servidor descreve o que aquele servidor registrou ao receber uma requisição, não necessariamente tudo que ocorreu no cliente.

Campos que ajudam a reconhecer e contextualizar uma transação incluem:

- Endereços IP e portas locais e remotos, horário, duração e direção dos bytes, para estabelecer a conexão e a janela temporal.
- Host ou nome de destino, caminho, método, parâmetros e códigos de resposta, quando a fonte tem visibilidade do conteúdo HTTP.
- Cabeçalhos relevantes, como tipo de conteúdo, agente do cliente, identificadores de requisição, encaminhamento e informações de autenticação, observando que podem ser omitidos ou alterados.
- Corpo da mensagem, se coletado e autorizado, e sua relação com o tamanho, a codificação e o tipo declarados nos cabeçalhos.
- Nome, caminho, usuário e processo responsável pela conexão, além de conexões próximas no tempo e atividade de DNS correspondente.
- Resultado de resolução de nome, certificado observado, destino de rede, reputação e histórico do ativo, como elementos de contexto, nunca como prova isolada.

A análise deve preservar a distinção entre observação e inferência. “O proxy registrou uma requisição para determinado host” é uma observação.

## HTTP e comando e controle

Aplicações de C2 podem recorrer a tráfego HTTP porque a comunicação se integra a uma infraestrutura de rede amplamente utilizada. O protocolo pode servir de cobertura para mensagens de controle ou transferência de dados, mas não é inerentemente malicioso.

Padrões que justificam investigação incluem conexões regulares sem uma função operacional conhecida, destinos raros para aquele grupo de máquinas, atividade iniciada por processos incomuns, volume ou direção de dados fora do perfil esperado, caminhos inconsistentes com o software declarado e mudanças abruptas de frequência.

Uma avaliação útil compara a atividade com uma linha de base adequada. Um agente que consulta um serviço a cada intervalo pode ser normal em servidores gerenciados e suspeito em estações onde não deveria existir.

A criptografia cria uma assimetria importante: frequência, duração, volumes, destinos e alguns metadados podem permanecer observáveis enquanto caminhos e corpos ficam ocultos. Esses metadados sustentam hipóteses, mas não demonstram o conteúdo transmitido.

## HTTP em diferentes fontes de evidência

Na captura de rede, HTTP não criptografado pode ser identificado pela estrutura das mensagens, métodos, cabeçalhos e respostas, se a captura começar no ponto certo e não houver codificação ou fragmentação que impeça a reconstrução.

Logs de proxy tendem a oferecer uma visão prática de conexões de saída, políticas aplicadas e destinos, mas variam muito. Alguns registram apenas host e resultado; outros incluem caminho, identidade ou categorias.

Logs do servidor e da aplicação podem mostrar rotas, identidade autenticada e resultado de negócio, mas são delimitados pelo serviço e por suas regras de registro. Um servidor atrás de balanceador pode registrar o endereço do balanceador em vez do cliente original, a menos que haja encaminhamento confiável configurado.

Em endpoints, inventário de processos e telemetria de rede podem atribuir uma conexão a um executável. Nome do processo não basta: um binário legítimo pode ser abusado, substituído ou iniciado com parâmetros inesperados.

DNS, dados de firewall, autenticação e registros de identidade completam partes diferentes da história. A resolução de um nome pode vincular uma consulta a um endereço, mas caches, DNS sobre canais cifrados, balanceamento e respostas variáveis impedem correspondência simples.

## Exemplo hipotético de leitura

Considere uma estação que, durante a madrugada, estabelece conexões HTTPS a um domínio que não aparece no histórico daquele grupo de ativos. O registro do proxy mostra requisições frequentes e respostas pequenas; o agente de endpoint associa as conexões a um executável localizado em diretório temporário, iniciado por um processo de escritório.

A equipe pode então verificar a origem do executável, assinatura e hash, linha de processos, atividade de arquivo, política de software, registros de DNS, certificado e histórico do domínio, além da existência de outras máquinas com a mesma combinação. Se houver telemetria do servidor ou inspeção autorizada, a equipe pode comparar horários, caminhos e identificadores.

Em outro cenário hipotético, um serviço de inventário conhecido consulta um endpoint interno por HTTP em horário programado, usando processo assinado e identidade de serviço documentada. A regularidade e a automação são semelhantes às que podem aparecer num canal de controle.

## Distinções com termos próximos

HTTP é o protocolo de aplicação que estrutura a requisição e a resposta. TCP, TLS, DNS e IP desempenham papéis diferentes na entrega, proteção ou localização da comunicação.

HTTPS costuma designar HTTP protegido por TLS. Não é um protocolo que garante que o site seja honesto ou que a aplicação seja segura; a validação do certificado autentica uma relação com um nome conforme a cadeia de confiança, não a intenção do operador.

Um proxy é um intermediário que pode encaminhar ou controlar requisições. Um log de proxy não é o próprio protocolo, e sua interpretação depende da posição e configuração desse intermediário.

## Limitações e erros de interpretação

Uma porta tradicionalmente associada ao tráfego web é apenas uma convenção. Serviços podem usar portas alternativas, túneis e encapsulamento; também é possível encontrar tráfego que não seja HTTP em uma porta esperada.

Outro erro é tratar o agente do cliente como identidade confiável. Esse cabeçalho é texto fornecido na requisição e pode ser alterado; indica uma alegação do cliente, não prova o software real.

O caminho da URL e os parâmetros podem conter tokens, dados pessoais ou conteúdo operacional. A coleta detalhada aumenta a capacidade de investigar, mas também pode expor informações sensíveis e ampliar o impacto de um vazamento de logs.

Ausência de registro não significa ausência de tráfego. O log pode estar desativado, ter expirado, excluir determinada categoria, ter sido contornado ou não cobrir aquele segmento.

Por fim, volume e periodicidade são sinais fracos sem referência. Uma sequência aparentemente regular pode resultar de temporizadores de software, filas, tentativas após falha ou agregação de eventos.

## Resposta a incidentes

Quando HTTP aparece em um alerta, preserve inicialmente os registros disponíveis e anote a janela de tempo, o fuso, a fonte e a forma de coleta. Evite apagar ou reiniciar o endpoint antes de decidir quais dados voláteis e artefatos locais são necessários.

Se a atividade parecer nociva, medidas de contenção devem considerar impacto operacional e caminhos alternativos. Bloquear um domínio ou endereço pode interromper uma comunicação específica, mas infraestrutura compartilhada ou endereços dinâmicos podem afetar serviços legítimos.

A análise deve buscar o mecanismo no endpoint, não apenas o fluxo de rede. Verifique execução, persistência, arquivos, tarefas, credenciais potencialmente expostas e outros hosts que compartilhem os mesmos indicadores.

Na recuperação, confirme se o processo e a conexão deixaram de ocorrer, se as políticas de saída funcionam e se sistemas legítimos continuam operacionais. Ajuste detecções com base em atributos combinados e explicáveis, como processo, identidade, destino e comportamento, em vez de depender apenas de uma string de cabeçalho ou de um endereço que pode mudar.

## Perguntas frequentes

### Todo tráfego HTTP é tráfego de navegador?

Não. Bibliotecas e clientes HTTP são usados por aplicações móveis, serviços, utilitários, dispositivos e agentes de sistema. Um navegador é apenas um dos possíveis processos de origem. Atribua a comunicação ao componente observado no endpoint e valide se sua função explica o destino e o padrão.

### HTTPS impede a investigação de HTTP?

Não impede, mas limita o que uma captura passiva consegue revelar. Metadados de conexão e volumes ainda podem estar disponíveis, enquanto caminhos, cabeçalhos e corpos costumam permanecer cifrados. Registros de proxy, endpoint ou servidor podem fornecer contexto complementar se forem coletados e retidos. A visibilidade concreta depende do ponto de observação e da arquitetura.

### Uma resposta de sucesso comprova que a operação foi concluída?

Ela comprova apenas que o ponto que gerou aquela resposta informou determinado resultado segundo sua lógica.

### É possível identificar C2 apenas pelo padrão HTTP?

Em geral, o padrão permite levantar e priorizar hipóteses, mas não determina intenção isoladamente. Periodicidade, destino raro e processo inesperado ganham significado quando combinados com contexto do ativo, dados de processo, conteúdo disponível e evidências de outras fontes. Uma conclusão deve explicitar o grau de confiança e as alternativas plausíveis.

### O que registrar ao descrever um evento?

Informe a fonte da evidência, o horário e o fuso, o ativo, o processo quando conhecido, o destino observado, os campos HTTP disponíveis, o resultado registrado e as limitações de visibilidade.

## Relação com o capítulo original

No capítulo 1 da versão original, HTTP se relaciona à infraestrutura que sustenta a comunicação entre aplicações. Para o glossário, a ideia central é manter protocolo e intenção separados: HTTP estrutura a troca; o contexto técnico e operacional determina se aquele uso é esperado, suspeito ou parte de uma atividade de C2.
