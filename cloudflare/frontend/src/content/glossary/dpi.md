# DPI



## Definição e escopo

DPI, sigla de *Deep Packet Inspection*, é a inspeção detalhada de pacotes usada para classificar tráfego e buscar padrões relevantes. Em vez de considerar somente informações externas à comunicação, como endereços, portas, protocolo de transporte e volume, uma solução com DPI pode examinar campos de protocolos e, quando tecnicamente possível, partes do conteúdo transportado. O objetivo defensivo é reconhecer a natureza ou o contexto do tráfego com mais precisão para apoiar políticas, detecção, registro e investigação.

DPI é uma capacidade de análise, não uma conclusão automática sobre intenção. Identificar um padrão compatível com certa aplicação, transferência ou protocolo não demonstra, por si só, que houve abuso, comprometimento ou violação de política. A classificação precisa ser associada ao contexto: quem se comunicou, em que momento, por qual caminho, com que finalidade aparente e segundo quais critérios a regra foi aplicada.

## O que pode ser observado

Um pacote contém informações de controle e dados associados à comunicação. A análise tradicional de rede costuma trabalhar sobretudo com metadados visíveis nos cabeçalhos: endereços de origem e destino, portas, protocolo, tamanho, direção e temporização. Isso já permite agrupar fluxos e identificar comportamentos, mas nem sempre diferencia aplicações que usam os mesmos protocolos e portas. O DPI amplia a análise quando interpreta estruturas internas reconhecíveis ou procura padrões no conteúdo disponível.

Em termos defensivos, uma implementação pode combinar diferentes sinais, por exemplo:

Esses sinais não são equivalentes. Uma assinatura de bytes pode indicar compatibilidade com um formato, enquanto uma sequência coerente de mensagens pode sustentar a identificação de um protocolo. Nenhum dos dois, isoladamente, necessariamente revela o significado completo da atividade. A solução pode inferir uma categoria provável sem reconstruir toda a conversa, ou pode registrar somente que uma regra foi acionada.

## Como funciona em uma arquitetura defensiva

O sensor recebe uma cópia do tráfego ou está posicionado em linha no caminho de comunicação. A posição determina quais trechos da rede são visíveis e em que direção. Um sensor de perímetro pode enxergar comunicações que atravessam a fronteira monitorada, mas não necessariamente o tráfego entre dois sistemas internos. Um sensor em uma rede de servidores pode observar interações que não passam pelo perímetro. Portanto, ausência de evento em determinado equipamento não significa ausência de comunicação: pode significar apenas que o tráfego não atravessou aquele ponto.

## Criptografia e limites de visibilidade

A criptografia protege o conteúdo contra leitura por observadores que não tenham acesso às chaves ou a um ponto autorizado de inspeção. Quando o payload está cifrado, o DPI não pode simplesmente interpretar seu conteúdo como se estivesse em texto claro. Ainda podem existir metadados observáveis e características do fluxo que sustentem classificações limitadas, mas elas não equivalem à leitura da aplicação. O que pode ser visto depende do protocolo, de sua versão, dos pontos de terminação e dos campos expostos naquele contexto.

## Utilidade em detecção e investigação

DPI é útil quando a equipe precisa distinguir tráfego que parece igual nos metadados básicos, localizar o uso de protocolos ou serviços em pontos inesperados, identificar padrões de comunicação relevantes para uma regra defensiva ou enriquecer a triagem de um evento. Pode apoiar a segmentação de tráfego por aplicação, a revisão de políticas, o monitoramento de serviços autorizados e a investigação de conexões suspeitas. Sua utilidade aumenta quando os resultados podem ser correlacionados com telemetria de endpoints, DNS, autenticação, firewall, proxy e inventário de ativos.

Na investigação, o DPI pode aparecer como evento do sensor, atributo de um fluxo, rótulo de aplicação, registro de política ou evidência em uma captura de pacotes. O analista deve identificar qual dessas fontes está consultando. Um rótulo derivado de classificação não tem o mesmo valor probatório de um payload preservado e interpretável; uma captura pode, por sua vez, estar incompleta ou conter somente parte de uma sessão. O registro precisa ser interpretado segundo sua origem e seus limites.

## Evidências e leitura de alertas

Para reconhecer uma ocorrência de DPI e avaliar sua força, procure campos como identificador e descrição da regra, categoria atribuída, protocolo ou aplicação inferida, endereços e portas, direção, horário, sensor, política aplicada e ação resultante. Quando presentes, versão de assinatura, nível de confiança, número de pacotes examinados e motivo de encerramento da inspeção ajudam a explicar a classificação. Os nomes e formatos variam entre fornecedores, então é necessário consultar a definição local dos campos, em vez de deduzir seu significado apenas pelo rótulo.

## Diferenças em relação a termos próximos

**Inspeção de cabeçalhos** concentra-se nos campos de controle do pacote e não implica interpretação do payload. Pode ser suficiente para roteamento, filtragem e muitas análises de fluxo. DPI pode incluir esses campos, mas pretende examinar informações internas adicionais quando elas são acessíveis e relevantes.

**Análise de fluxo** agrega metadados sobre conversações, como origem, destino, duração, volume e direção. É valiosa mesmo quando o conteúdo está cifrado. DPI pode usar os mesmos metadados, porém a expressão costuma indicar análise de estruturas ou padrões mais detalhados do protocolo ou do payload. Na prática, plataformas podem combinar ambas as abordagens; o rótulo comercial não determina sozinho o método empregado.

## Erros de interpretação e limitações

Um erro frequente é tratar um nome de aplicação como identidade confirmada. A classificação pode resultar de porta conhecida, padrão parcial ou comportamento compatível; aplicações podem encapsular protocolos, compartilhar infraestrutura ou imitar tráfego comum. O rótulo deve ser lido como resultado do método configurado, com a confiança e o contexto disponíveis, e não como uma descrição infalível.

Outro erro é presumir que “profundo” significa completo. Um equipamento não necessariamente captura cada pacote, examina todo o conteúdo, reconstrói todas as sessões ou conserva os dados por tempo suficiente. A capacidade pode ser limitada por política, desempenho, arquitetura e obrigações de privacidade. Antes de concluir que não houve atividade, verifique cobertura, retenção, amostragem e estado do sensor no período relevante.

## Privacidade, governança e operação

A inspeção de conteúdo merece governança clara. A organização deve definir a finalidade, o escopo de tráfego, os responsáveis, as categorias permitidas, o acesso aos registros, a retenção e o tratamento de dados sensíveis, conforme suas regras e obrigações aplicáveis. A análise jurídica e de privacidade deve considerar o contexto concreto e as jurisdições envolvidas; o termo DPI, sozinho, não determina se uma implantação é apropriada ou permitida.

## Uso na resposta a incidentes

Durante a resposta, DPI pode apoiar a delimitação de escopo e a construção de uma linha do tempo. A equipe pode identificar comunicações relacionadas, procurar outros ativos com classificação semelhante e comparar períodos anteriores e posteriores. A classificação deve orientar perguntas de investigação, não encerrar a análise. Para decisões de contenção, combine a telemetria com evidências independentes e avalie o risco de interromper serviços legítimos.

## Perguntas frequentes

### DPI consegue identificar qualquer aplicação?

Não. A identificação depende dos protocolos e padrões reconhecidos, da visibilidade e da qualidade da implementação. Tráfego cifrado, protocolos novos, encapsulamento e semelhanças entre aplicações podem impedir uma identificação confiável. Um resultado pode ser provável ou parcial.

### DPI sempre lê o conteúdo da comunicação?

Não. A expressão não garante acesso ao payload em texto claro. O sensor pode classificar a partir de metadados, cabeçalhos ou padrões disponíveis. A leitura de conteúdo depende de condições técnicas e de autorização apropriada na arquitetura adotada.

### Um alerta de DPI prova que ocorreu um ataque?

### Como explicar a ausência de alerta?

### DPI substitui logs de endpoint ou análise de fluxo?

## Relação com o capítulo 6



### Critérios de confiança

A confiança de uma classificação depende da qualidade do sinal e da adequação da regra ao tráfego observado. Um identificador obtido a partir de diversos elementos coerentes da sessão tende a ter fundamento diferente de uma correspondência em um único trecho. O analista deve procurar se o produto informa método, nível de confiança ou motivo da classificação; quando não informa, a saída deve ser tratada com cautela. A confiança também é contextual: um protocolo reconhecido em um servidor que oferece aquele serviço é mais plausível do que o mesmo rótulo em um dispositivo sem função relacionada, mas plausibilidade não substitui confirmação.

A avaliação pode ser organizada em perguntas simples: qual observação originou o rótulo? A regra reconheceu conteúdo, estrutura de protocolo ou apenas comportamento? A sessão estava completa? Outros sensores corroboram o achado? Há explicações operacionais legítimas? Responder a essas perguntas torna a detecção reproduzível e ajuda a calibrar severidade sem transformar um único indicador em veredito.

### Mudanças e evasão de classificação

Protocolos e aplicações evoluem. Uma atualização pode alterar mensagens, adicionar campos, mudar o modo de conexão ou encapsular conteúdo de outra forma. Uma regra pode então deixar de reconhecer tráfego legítimo, classificá-lo como desconhecido ou associá-lo a uma categoria ampla. A equipe deve distinguir esse tipo de mudança de uma interrupção do serviço ou de atividade anômala. Comparar a data da mudança com a versão do sensor e com os primeiros eventos diferentes fornece contexto importante.

Também pode ocorrer tentativa deliberada de dificultar a observação, mas a simples incapacidade de classificar não demonstra evasão. Fragmentação, codificação, túnel autorizado, perda de pacotes ou uma implementação não suportada podem produzir resultado semelhante. Uma investigação defensiva deve buscar evidências independentes no endpoint e nos sistemas de destino, registrar a hipótese como hipótese e evitar atribuir intenção com base apenas na opacidade do tráfego.

## Perguntas para revisar um achado

Antes de escalar um resultado, o analista pode registrar: o que foi observado diretamente? Qual regra ou método atribuiu a categoria? Qual parte da rede o sensor cobre? O conteúdo estava disponível ou cifrado? A classificação veio de uma sessão completa? Que fonte independente corrobora o evento? Existe uma atividade aprovada compatível? O que não pode ser concluído com os dados atuais? Essas perguntas curtas ajudam a manter a linguagem proporcional à evidência.

Na comunicação com equipes técnicas e responsáveis pelo negócio, descreva o comportamento e seu impacto potencial sem depender apenas da sigla ou do nome comercial da categoria. Por exemplo, indique que um sensor observou conexões de determinado ativo para um destino em certa janela, classificadas por uma regra específica, e esclareça quais registros confirmaram ou não o contexto. Isso torna o achado compreensível para quem precisa decidir contenção, continuidade do serviço ou coleta adicional.

## Relação com o capítulo 6

No capítulo 6 da versão original, DPI integra o vocabulário de detecção de tráfego. Seu uso faz sentido quando a classificação acrescenta contexto útil aos metadados, e sua interpretação exige declarar os limites de visibilidade, validar a regra acionada e buscar corroboração antes de concluir que houve abuso.
