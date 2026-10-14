# Engenharia reversa

## Conceito e escopo

Engenharia reversa é o estudo de um programa ou artefato para entender sua estrutura, seu comportamento e seus objetivos sem depender do código-fonte. Na forense digital, o analista parte do que pode examinar ou observar — bytes, formatos, instruções, arquivos alterados, processos, mensagens e respostas — para construir uma explicação verificável sobre o objeto. Ele pode ser um executável, uma biblioteca, um documento com conteúdo ativo, um script, um firmware ou outro componente técnico relevante.

Engenharia reversa não é sinônimo de atribuição de autoria. Identificar uma rotina, uma dependência ou uma semelhança entre amostras pode ajudar a caracterizá-las, mas não prova quem criou o artefato, a intenção de quem o utilizou ou sua execução em um sistema específico. Essas conclusões dependem de evidências adicionais e de contexto.

## Utilidade na investigação

Em um incidente, alertas e registros podem mostrar que algo ocorreu sem explicar o que o programa envolvido fazia. Um arquivo suspeito aparece em uma estação, uma conexão é registrada, ou um documento com conteúdo ativo é encontrado. A análise reversa ajuda a relacionar o artefato a ações possíveis ou observadas e a formular as próximas perguntas: que dados foram lidos, que mudanças ocorreram, que sistemas podem ter sido afetados e que vestígios devem ser buscados.

Esse conhecimento pode orientar a triagem de amostras, a busca por artefatos relacionados, a avaliação de impacto e a criação de detecções. Também ajuda a diferenciar uma capacidade embutida de uma ação efetivamente registrada. O valor depende da pergunta: para determinar quando um arquivo chegou ao computador, metadados e registros de aquisição podem ser mais úteis; para avaliar que configuração um executável tenta modificar, examinar sua lógica e comportamento pode ser decisivo.

## Abordagens de análise

O trabalho começa pela delimitação da pergunta e do objeto. Registra-se a origem da amostra, as condições de aquisição, propriedades relevantes e, quando aplicável, um identificador criptográfico. Preservar o original e trabalhar sobre uma cópia identificada facilita a revisão e reduz o risco de alterar a evidência. A cadeia de custódia e o controle de acesso também importam quando o material integra uma investigação formal.

### Inspeção estática

Na análise estática, o artefato é examinado sem ser executado. O analista pode observar formato, cabeçalhos, seções, dependências, recursos embutidos, cadeias de caracteres e instruções. Essas pistas ajudam a formular hipóteses sobre a função do programa, mas devem ser interpretadas no contexto: uma cadeia pode estar inativa ou pertencer a uma biblioteca incluída no pacote. A ausência de texto legível não demonstra ausência de uma função; dados podem estar compactados, cifrados ou construídos durante a execução.

### Observação dinâmica

Na análise dinâmica, o examinador observa o artefato em execução e registra efeitos como processos criados, arquivos acessados ou alterados, mudanças de configuração e tentativas de comunicação. O teste deve ocorrer em ambiente controlado, isolado de sistemas e dados de produção. É importante registrar a configuração, as entradas, os horários e as ferramentas usadas, pois o comportamento observado depende das condições do teste.

Uma amostra pode agir de modo diferente conforme o sistema, os dados disponíveis ou uma condição específica. Pode também permanecer inativa no laboratório. Por isso, um efeito não observado em uma execução não é prova de que nunca ocorre. A observação dinâmica responde ao que aconteceu naquela execução; outras condições podem exigir análises separadas, sempre com controles adequados.

As abordagens estática e dinâmica se complementam. A execução pode revelar ações difíceis de inferir pelo arquivo; a inspeção interna pode indicar caminhos que o teste não ativou. Comparar ambas permite descobrir contradições e limites. Ao documentar o resultado, convém separar fatos registrados, interpretações e hipóteses pendentes. “O processo abriu determinado arquivo” é uma observação; afirmar que “coletou todos os documentos do usuário” é uma conclusão mais ampla, que requer evidência adicional.

## Evidências e sua interpretação

Não há um sinal único que caracterize a engenharia reversa. O que sustenta a conclusão é a relação explícita entre o artefato, as observações e a interpretação. Evidências relevantes podem incluir:

- estrutura e formato do arquivo, dependências e recursos incorporados;
- instruções ou cadeias associadas a operações possíveis, consideradas no contexto;
- registros da execução, como acesso a arquivos, criação de processos e conexões tentadas;
- diferenças no ambiente antes e depois de uma execução controlada;
- relações entre a amostra e outros componentes encontrados no incidente;
- anotações, capturas e logs que registrem condições e ferramentas empregadas.

Esses elementos respondem a perguntas diferentes. Uma referência a uma função pode mostrar que o programa tem meios de executar uma operação, não que a executou. Um registro de acesso pode demonstrar uma operação sem revelar seu propósito. Um arquivo novo pode ser compatível com uma ação da amostra, mas outros processos também podem tê-lo criado. Quanto mais abrangente a conclusão, mais necessário é mostrar como as evidências a sustentam e que alternativas foram consideradas.

## Exemplo hipotético

Uma equipe encontra um executável desconhecido em um computador administrativo. O nome sugere uma atualização legítima, mas o nome não estabelece sua função. A equipe preserva uma cópia e a executa em uma máquina isolada, sem acesso à rede corporativa. Durante o teste, observa a criação de outro processo, a leitura de uma configuração local e uma tentativa de conexão. A inspeção estática encontra uma rotina compatível com a leitura e uma referência relacionada ao destino.

A conclusão defensável é que, naquela condição controlada, foram observadas essas ações e que elementos internos são coerentes com parte delas. Isso não prova que a conexão ocorreu no computador original, que dados foram enviados ou qual era a intenção do autor. Para responder a essas questões, a equipe precisa correlacionar os achados com registros do equipamento, dados de rede e a linha do tempo do incidente. O exemplo ilustra como a análise explica capacidades e comportamento sem extrapolar para fatos ainda não demonstrados.

## Termos próximos

Engenharia reversa se relaciona com outras atividades, mas tem escopo próprio.

- **Análise de malware** examina software malicioso e seus efeitos. Pode incluir engenharia reversa, mas também triagem, correlação de indicadores e avaliação de impacto sem reconstruir a lógica interna.
- **Análise estática** examina o artefato sem executá-lo; é uma abordagem possível dentro da engenharia reversa, não o conceito inteiro.
- **Análise dinâmica** observa a execução. Pode integrar a engenharia reversa, embora uma observação breve não reconstrua necessariamente a estrutura ou a lógica do programa.
- **Depuração** acompanha a execução para localizar ou compreender problemas. Algumas técnicas são compartilhadas, mas o objetivo de corrigir software difere do objetivo forense de caracterizar evidência.
- **Descompilação** converte uma representação compilada em uma forma mais legível. O resultado é aproximado e constitui apenas uma técnica possível.
- **Resposta a incidentes** coordena contenção, erradicação e recuperação. A engenharia reversa pode informar essas decisões, mas não é uma ação de resposta por si só.

Essas distinções melhoram a comunicação. Dizer apenas que “a amostra foi analisada” não informa se foi executada, se houve exame de instruções ou se a conclusão se baseia em indicadores limitados. O relatório deve nomear métodos relevantes e deixar claro o alcance do trabalho.

## Limites e erros comuns

O ambiente também interfere. Uma amostra pode depender de dados, serviços ou condições ausentes no laboratório. O comportamento visto descreve aquela combinação de amostra, sistema e entradas, não todos os cenários possíveis. É um erro transformar “não observado” em “não acontece”, assim como confundir capacidade identificada com ação realizada. Uma rotina capaz de ler dados não prova que os leu durante o incidente.

Outro erro é inferir intenção ou autoria de uma única característica. Semelhanças de código podem resultar de componentes comuns, ferramentas compartilhadas ou imitação; não bastam, isoladamente, para atribuir uma amostra. Da mesma forma, uma tentativa de comunicação não comprova exfiltração. Para afirmar transferência de dados, é necessário examinar evidências de rede e seu conteúdo, além de correlacionar tempos e processos.

## Contribuição à resposta a incidentes

A análise pode transformar uma amostra em perguntas acionáveis. Se indicar acesso a certo tipo de arquivo, a equipe pode procurar registros e cópias pertinentes. Se revelar tentativa de persistência ou comunicação, pode buscar eventos correlatos nos equipamentos e na rede. Características técnicas também podem apoiar detecções e buscas por variantes, após validação e avaliação do risco de falsos positivos.

A contenção não precisa aguardar a compreensão completa do artefato. Medidas proporcionais podem ser tomadas com base no risco já demonstrado, enquanto o exame prossegue em ambiente isolado. Ao mesmo tempo, remover arquivos ou reconfigurar sistemas afetados pode apagar evidências. A equipe forense e a equipe de resposta devem coordenar coleta e contenção e registrar as alterações realizadas, para preservar tanto a capacidade de proteger os sistemas quanto a de reconstruir os eventos.

## Perguntas frequentes

### É possível fazer engenharia reversa sem o código-fonte?

Sim. O exame parte do artefato e de seus efeitos observáveis. A reconstrução pode ser parcial; não é necessário recuperar uma cópia idêntica do projeto original.

### É obrigatório executar o programa?

Não. A inspeção estática pode responder a algumas perguntas sem execução. A observação dinâmica é útil quando os efeitos em tempo de execução importam, mas requer ambiente controlado e seguro. A escolha depende da pergunta e do risco da amostra.

### Um comportamento observado prova que ocorreu no incidente?

Não. Mostra que a ação ocorreu naquela execução de teste. Para afirmar que aconteceu no sistema afetado, é necessário correlacionar o resultado com evidências daquele sistema e do período investigado.

### Por que registrar hipóteses ainda não confirmadas?

Hipóteses ajudam a orientar verificações, mas não são fatos. Identificá-las como pendentes facilita a revisão e evita que uma explicação provisória passe a ser repetida como conclusão comprovada.

### A análise identifica quem criou o programa?

Não por si só. Características técnicas podem sustentar comparações entre artefatos, mas a atribuição requer contexto e evidências independentes, além de considerar explicações alternativas.

## Relação com o capítulo

Na versão original do manuscrito, o tema se relaciona ao capítulo 8. O verbete desenvolve a definição revisada ao explicar como a engenharia reversa apoia a investigação forense, que evidências podem sustentar suas conclusões e por que hipóteses e limitações devem permanecer explícitas.
