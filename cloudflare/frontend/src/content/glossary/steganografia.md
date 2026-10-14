# Steganografia

## Conceito

Steganografia é a ocultação de informação dentro de outro conteúdo, como uma imagem ou um áudio, de modo que a própria presença da informação fique disfarçada. O conteúdo que carrega a mensagem costuma ser chamado de portador ou meio de cobertura; o dado oculto pode ser texto, uma sequência de bytes ou outro conteúdo digital. Para quem observa apenas a superfície, o arquivo pode parecer uma fotografia, uma gravação ou um documento comum. Essa aparência, porém, não demonstra que o arquivo esteja íntegro ou que não contenha dados adicionais.

A ideia central é diferente de simplesmente proteger o significado de uma mensagem. Na esteganografia, procura-se reduzir a percepção de que existe uma mensagem ou atividade a investigar. Uma comunicação pode ser compreensível caso seja encontrada, ou pode estar protegida por criptografia; a ocultação e a proteção do conteúdo são propriedades distintas e podem, em tese, aparecer juntas. O termo também é usado para técnicas que escondem dados em estruturas digitais sem necessariamente produzir um arquivo visual ou sonoro reconhecível como portador.

Para a análise de segurança, convém separar três perguntas: existe conteúdo fora do esperado? Esse conteúdo foi inserido intencionalmente para ocultar informação? E, se foi, que significado ou finalidade ele tem? Uma irregularidade responde, no máximo, à primeira pergunta. A intenção e a finalidade dependem de contexto, comparação e evidências complementares.

## Como pode aparecer em arquivos digitais

Arquivos digitais são representações estruturadas. Uma imagem, por exemplo, pode conter amostras de cor, cabeçalhos, metadados, perfis, miniaturas e outros componentes. Um áudio pode ter quadros, canais, metadados e dados de codificação. Há também formatos compostos, como documentos que incorporam imagens, fontes, anexos e objetos. Em princípio, uma técnica pode aproveitar dados que não chamam a atenção na apresentação habitual, alterações sutis nos valores representados ou regiões e campos que certos programas ignoram.

A capacidade de esconder dados depende do portador, do formato e das transformações que o arquivo atravessa. Alterar uma imagem pode deixar diferenças imperceptíveis a olho nu e ainda modificar seus dados internos. Por outro lado, uma conversão, recompressão, recorte, ajuste de volume ou transcodificação pode destruir ou corromper o conteúdo oculto. Não existe uma única forma universal de esteganografia nem um sinal visual que a identifique em todos os casos. Uma técnica que funciona em um formato pode ser inviável ou facilmente detectável em outro.

## Uso em segurança e investigação

O termo é útil quando uma equipe precisa avaliar se um objeto aparentemente comum transportou dados ou se uma transferência teve finalidade diferente da declarada. Em resposta a incidentes, pode orientar a preservação de arquivos recebidos, enviados ou encontrados em sistemas afetados, bem como a análise de anexos, repositórios de arquivos, mídias removíveis e tráfego associado. Também ajuda a formular perguntas sobre a origem, o caminho e as transformações sofridas pelo material.

Na investigação, a esteganografia pode ser considerada como hipótese em casos de exfiltração, comunicação não autorizada, distribuição de conteúdo ou armazenamento disfarçado. Isso não significa que toda imagem ou gravação enviada para fora da organização seja suspeita. O valor da hipótese depende de indicadores independentes: comportamento de processo, acesso a arquivos, padrões de transferência, divergência em relação a versões conhecidas ou achados técnicos consistentes no próprio objeto.

## Evidências e análise defensiva

A suspeita precisa de análise do arquivo e do fluxo de transferência. A aparência visual normal não prova integridade. A análise deve começar pela preservação do original, registrando de onde veio, quando foi coletado, quem teve acesso e quais ferramentas foram usadas. Trabalhar sobre cópias reduz o risco de alterar evidências; registrar hashes antes e depois das etapas ajuda a identificar mudanças no material examinado. Um hash diferente não revela, sozinho, se houve esteganografia: ele apenas indica que os bytes comparados não são idênticos.

É útil validar a estrutura do arquivo e compará-la com o formato declarado. Uma extensão pode não corresponder ao conteúdo real, dados podem aparecer depois do fim esperado de uma estrutura ou haver campos incomuns, objetos embutidos e inconsistências entre ferramentas. Esses achados justificam investigação, mas não são conclusivos: softwares legítimos produzem metadados variados, formatos podem admitir extensões e sistemas podem anexar informações sem finalidade de ocultação.

Métodos estatísticos ou ferramentas especializadas podem apontar padrões que merecem exame. A interpretação depende do modelo usado, do formato e da população de referência. Um alerta automatizado não equivale a confirmação, e a ausência de alerta não prova ausência de conteúdo oculto. Ferramentas podem ter falsos positivos, não reconhecer métodos desconhecidos ou falhar diante de transformações. Registre versões, parâmetros relevantes e resultados para que outra pessoa possa reproduzir a análise.

## Fluxo de transferência e contexto

O fluxo ajuda a distinguir alteração intencional de variação normal. É importante saber quem criou ou recebeu o arquivo, por qual aplicação, em que horário e por quais serviços ele passou. Plataformas de mensagens e redes sociais podem redimensionar, recomprimir ou converter mídias; gateways podem inspecionar anexos; sistemas de backup podem preservar versões diferentes. Cada etapa pode apagar sinais, introduzir mudanças ou criar cópias com características distintas.

## Exemplo hipotético

Imagine que uma estação corporativa envie uma imagem de aparência comum para um serviço externo pouco usado. Esse evento isolado pode corresponder a uma atividade legítima. A equipe observa, porém, que um processo sem relação aparente com edição de imagens leu arquivos sensíveis, gerou a imagem pouco antes da transferência e repetiu o mesmo padrão em dias diferentes. A hipótese de ocultação ganha relevância porque há sinais independentes sobre acesso, criação e envio; ainda assim, não está confirmada.

## Distinções importantes

### Criptografia

A criptografia transforma uma mensagem para dificultar a leitura por quem não possui a chave. Em geral, o objeto criptografado pode ser reconhecível como dado cifrado, embora isso dependa do contexto. A esteganografia busca disfarçar que há uma mensagem. Uma pode acompanhar a outra: ocultar a existência não substitui a proteção do conteúdo, e criptografar não faz um arquivo parecer uma mídia comum de modo confiável.

### Ofuscação e codificação

Ofuscação torna uma informação ou estrutura menos evidente ou mais difícil de interpretar; codificação representa dados segundo uma convenção. Nenhuma das duas, isoladamente, implica que um conteúdo foi escondido dentro de outro. Uma sequência codificada em um arquivo pode ser simplesmente parte do formato ou uma etapa de processamento. O contexto e a função observada ajudam a distinguir essas situações.

### Marca d'água digital

Uma marca d'água insere informação associada a identificação, proveniência ou gestão de direitos e pode ser visível ou imperceptível. Algumas técnicas compartilham mecanismos com a esteganografia, mas o objetivo costuma ser diferente: uma marca pode anunciar uma associação ou permitir rastreamento, enquanto a esteganografia prioriza disfarçar a existência de uma mensagem. Os limites não são absolutos, então é mais preciso descrever a função demonstrada do que classificar apenas pela aparência.

### Esteganálise

Esteganálise é a análise voltada a detectar ou avaliar a presença de informação ocultada. Pode incluir inspeção estrutural, comparação, análise estatística e correlação contextual. Um resultado de detecção não necessariamente recupera o conteúdo, e a recuperação não estabelece autoria ou intenção. São conclusões distintas e devem ser relatadas separadamente.

## Limitações e interpretações equivocadas

A primeira armadilha é tratar qualquer anomalia como prova. Dados extras podem decorrer de metadados legítimos, formatos incomuns, corrupção, ferramentas de edição, publicidade, miniaturas ou conversões. A segunda é confiar apenas no olhar: uma imagem visualmente normal pode conter diferenças invisíveis, mas também pode ser inteiramente comum. Inspeção visual serve para avaliar a apresentação, não para certificar a estrutura interna.

Outra interpretação equivocada é presumir que um método de detecção encontra todas as técnicas. Os métodos podem depender de pressupostos que não se aplicam ao caso, e transformações do portador podem tanto ocultar sinais quanto introduzir artefatos. Um resultado negativo precisa ser descrito em termos do escopo efetivamente examinado, sem extrapolar para todo método, formato ou estágio anterior da transferência.

Também não se deve inferir intenção a partir do mecanismo isolado. Um software pode incorporar dados auxiliares por razões funcionais, e uma ferramenta de privacidade pode ser usada dentro de uma atividade autorizada. Para atribuir uma ação a uma pessoa ou grupo, são necessárias evidências sobre acesso, controle e contexto; a presença de dados ocultos, mesmo confirmada, não identifica automaticamente quem os colocou ali.

## Resposta a incidentes

Se a hipótese for plausível, preserve o arquivo original e os registros relacionados antes de executar ações que alterem o sistema ou destruam cópias. Documente horários, origem, destino conhecido, ferramentas de coleta e transformações observadas. Restrinja a análise a profissionais autorizados e mantenha os dados extraídos sob controle. Se houver indício de exfiltração, avalie quais informações podem ter sido acessadas e transferidas, usando telemetria de endpoint e rede; a simples existência de conteúdo embutido não mede o impacto.

## Perguntas frequentes

### Uma imagem aparentemente normal pode conter dados ocultos?

Sim. A apresentação visual pode permanecer normal enquanto a estrutura ou os valores internos carregam dados adicionais. Isso não significa que toda imagem precise ser suspeita; significa apenas que a inspeção visual não é um teste de integridade.

### É possível confirmar esteganografia com uma única ferramenta?

Em geral, não se deve tratar um único alerta como confirmação automática. A força da conclusão depende do tipo de evidência, do conhecimento sobre o formato, da qualidade do original e da concordância com outros indícios. Um método pode detectar uma anomalia sem explicar sua origem, e ferramentas diferentes podem ter limitações distintas.

### A esteganografia sempre é maliciosa?

Não. O conceito descreve uma forma de ocultar informação, não uma intenção. O uso pode ser legítimo, experimental ou malicioso. Em um incidente, a autorização, a finalidade e o contexto operacional são decisivos para avaliar a conduta.

### A compressão elimina necessariamente os dados ocultos?

Não há resposta universal. Algumas transformações podem remover ou danificar dados ocultos; outras podem preservar parte deles, e certos métodos podem considerar as transformações esperadas. A equipe deve analisar o formato concreto e o caminho real do arquivo, sem assumir que a conversão sempre limpa ou sempre preserva o conteúdo.

### O que deve constar no relatório?

Descreva o objeto e sua procedência, os passos de preservação e análise, as ferramentas e limitações relevantes, os achados observáveis e o grau de confiança. Separe detecção, recuperação, interpretação e atribuição. Informe quais alternativas foram consideradas e quais registros sustentam a relação com o incidente.

## Relação com o capítulo

No capítulo 1 da versão original do manuscrito, o conceito pode ser situado entre as formas de ocultar comunicação e os desafios de reconhecê-la durante uma investigação. Para o glossário, o ponto prático é manter juntas duas ideias: o arquivo pode parecer comum e, ainda assim, exigir exame técnico; a suspeita só ganha força quando a análise do objeto é relacionada ao fluxo de transferência e ao contexto do sistema.
