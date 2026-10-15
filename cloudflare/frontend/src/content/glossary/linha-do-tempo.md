# Linha do tempo

## Definição

Linha do tempo, também chamada timeline forense, é a ordenação de eventos provenientes de uma ou mais fontes para reconstruir a sequência provável de uma intrusão ou de outra atividade investigada. Ela organiza observações registradas em momentos distintos — como uma autenticação, a criação de um processo, uma alteração de arquivo ou uma conexão de rede — em uma representação temporal que permita comparar o que ocorreu, onde foi observado e com que grau de confiança.

A linha do tempo não é necessariamente uma lista única de horários verdadeiros e perfeitamente comparáveis. É um modelo de trabalho construído a partir de registros incompletos, relógios que podem estar desalinhados, formatos diferentes e mecanismos de coleta com atrasos. Seu valor está em tornar explícitas as relações temporais que as evidências sustentam, separando fatos observados de interpretações e hipóteses. Uma sequência pode ser útil mesmo quando alguns horários são aproximados ou quando há lacunas, desde que essas incertezas estejam documentadas.

## Para que serve

A linha do tempo ajuda a responder perguntas que dependem de ordem e contexto. Por exemplo: qual atividade foi observada primeiro? Uma sessão de acesso precedeu uma alteração de configuração? O mesmo identificador de conta aparece em sistemas diferentes durante uma janela compatível? A interrupção de um serviço ocorreu antes ou depois de uma ação de contenção? Essas perguntas não são respondidas apenas juntando registros: é necessário avaliar como cada horário foi produzido e se duas marcas de tempo podem ser comparadas.

A ferramenta é útil tanto para confirmar quanto para refutar uma hipótese. Se a equipe suspeita que um evento de autenticação permitiu uma ação subsequente, uma ordem temporal compatível é necessária, mas não basta para provar que uma coisa causou a outra. Em sentido inverso, se a ação atribuída a uma sessão aparece antes de qualquer registro de estabelecimento dessa sessão, a divergência pode revelar um problema de relógio, uma fonte ausente, um evento retrospectivo ou uma hipótese inadequada. A linha do tempo deve facilitar esse exame crítico, não induzir a aceitar a primeira narrativa coerente.

## Como é construída

### Seleção e preservação das fontes

### Normalização temporal

Fontes diferentes podem apresentar horário local, UTC, um deslocamento explícito, uma data sem fuso ou uma representação numérica cuja unidade não é evidente. A normalização converte os valores para uma referência comum, preservando também o valor original e as informações disponíveis sobre fuso e formato. Converter para UTC facilita a comparação, mas não corrige automaticamente relógios incorretos nem recupera um fuso que nunca foi registrado.

É necessário separar pelo menos três noções frequentemente confundidas: o horário em que o evento teria ocorrido segundo o sistema que o registrou; o horário em que o evento foi recebido ou ingerido pela plataforma de monitoramento; e o horário em que o analista coletou ou exportou o dado. Esses valores respondem a perguntas diferentes. Uma diferença entre ocorrência e ingestão pode decorrer de fila, conectividade intermitente, processamento em lote ou atraso de transporte. Usar a chegada ao repositório como se fosse a ocorrência pode inverter a ordem aparente de ações.

A interpretação depende ainda da semântica do campo. Um registro pode indicar o início de uma sessão, sua expiração, a conclusão de uma operação ou o momento em que um sensor percebeu uma comunicação. Até campos chamados `timestamp` podem representar etapas diferentes. Quando o significado não estiver documentado ou validado, convém descrever a marca como “horário registrado pela fonte” em vez de atribuir-lhe precisão sem fundamento.

Antes de comparar marcas de tempo, vale classificar a qualidade temporal de cada fonte. Uma fonte pode ter horário sincronizado e resolução conhecida; outra pode registrar apenas o minuto; uma terceira pode não informar fuso. Essa classificação não precisa virar uma nota numérica: uma descrição curta, aplicada de modo consistente, já impede que a aparência de precisão determine o peso da evidência. Quando não se sabe o desvio do relógio, é mais rigoroso indicar que a ordem entre dois eventos permanece aberta do que aplicar uma correção arbitrária. Se uma janela estimada for usada para orientar a busca, registre-a como hipótese de trabalho e atualize-a quando aparecerem observações melhores.

### Correlação e ordenação

Depois da normalização, os eventos são relacionados por atributos como identificador de sessão, conta, host, endereço, processo, recurso acessado ou identificador de solicitação. Nenhum atributo isolado garante identidade. Um endereço pode ser compartilhado; nomes de host podem ser reutilizados; uma conta pode gerar sessões simultâneas; identificadores podem ter escopo limitado ou ser reciclados. A correlação fica mais forte quando vários atributos independentes e compatíveis apontam para a mesma relação, e mais fraca quando depende de coincidência temporal ou de um único valor genérico.

A ordenação pode ser direta quando há horários confiáveis e comparáveis. Em outros casos, é melhor registrar que dois eventos ocorreram dentro de uma janela, ou que sua ordem é indeterminada. Se um sistema arredonda o horário ao segundo e outro registra milissegundos, pequenas diferenças numéricas não significam necessariamente que o evento mais preciso ocorreu primeiro. Uma representação honesta pode usar intervalos, faixas de incerteza, empates ou relações como “antes de”, “depois de” e “ordem não estabelecida”.

## Evidências e sinais de uma reconstrução confiável

Uma linha do tempo pode ser reconhecida em relatórios de incidente, painéis de investigação, planilhas de correlação, consultas salvas e notas de analista. O formato varia; o que importa é a presença de eventos com origem identificada e uma lógica explícita para compará-los. Evidências que ajudam a sustentá-la incluem logs brutos ou exportações preservadas, documentação de campos e fusos, registros de sincronização, metadados de coleta, identificadores de correlação e observações de fontes que compartilham um evento.

## Exemplo hipotético

Considere, hipoteticamente, uma equipe que investiga alterações inesperadas em um serviço interno. O provedor de identidade registra uma autenticação às 14h02 no horário local; o agente de endpoint informa uma execução às 18h04 UTC; a plataforma central recebe o evento de endpoint às 18h11 UTC; e a aplicação registra uma alteração às 18h06 UTC. A equipe confirma que, naquele dia, o horário local do primeiro registro estava quatro horas atrás de UTC. Após converter a marca da autenticação, os horários aparentes ficam próximos, mas a ingestão tardia do endpoint não deve ser tratada como horário de execução.

Essa proximidade é um ponto de partida para investigar, não uma prova de que a autenticação causou a alteração. Os analistas verificam se a conta, o host, a sessão e o contexto da aplicação são compatíveis; consultam o conteúdo original; e procuram evidências independentes, como uma trilha de auditoria da operação e informações sobre o processo que a realizou. Se o agente só registrar o início do processo com precisão de minuto, a equipe não deve afirmar uma ordem de segundos entre processo e alteração. A conclusão pode ser que os eventos são temporalmente compatíveis, mas a ligação causal permanece incerta.

## Distinções com termos próximos

- **Log ou registro de evento:** é uma observação produzida por um sistema. Uma coleção de logs pode alimentar uma linha do tempo, mas não se torna automaticamente uma reconstrução correlacionada.
- **Trilha de auditoria:** reúne registros de ações relevantes para prestação de contas ou revisão. Pode ser uma fonte importante, mas pode cobrir apenas um serviço, ter retenção própria e não explicar eventos em outros componentes.
- **Sequência de eventos:** descreve uma ordem. A linha do tempo acrescenta contexto temporal e proveniência, podendo preservar incertezas em vez de forçar uma ordem total.
- **Narrativa do incidente:** explica uma interpretação dos fatos. A cronologia pode sustentá-la, mas deve manter os fatos observados distinguíveis das inferências narrativas.
- **Grafo de ataque ou de relações:** representa entidades e vínculos, como conta, host, processo e recurso. Pode mostrar caminhos sem afirmar quando cada relação ocorreu; a linha do tempo enfatiza a dimensão temporal. As duas representações podem se complementar.
- **Linha do tempo de sistema de arquivos:** organiza metadados de arquivos e diretórios, como criação, modificação e acesso, conforme o sistema e a ferramenta os disponibilizam. É um recorte especializado e não equivale à cronologia completa de uma intrusão.

## Limitações e erros de interpretação

O erro mais comum é transformar proximidade temporal em causalidade. Dois eventos próximos podem estar relacionados, mas também podem ser coincidência, atividade paralela ou efeitos de uma terceira ação. Para sustentar causalidade, são necessárias evidências sobre o mecanismo e a relação entre os eventos, não apenas sua posição em uma lista. Da mesma forma, uma ordem temporal incompatível pode enfraquecer uma hipótese, mas antes é preciso descartar diferenças de relógio, atrasos, semântica distinta e coleta incompleta.

Por fim, a ferramenta pode misturar dados de fontes comprometidas ou sob controle do agente investigado. Um registro pode ter sido apagado, alterado, forjado ou emitido por um sistema cuja integridade não foi verificada. Inconsistências não devem ser descartadas como ruído sem exame, mas também não provam manipulação por si sós. A confiabilidade da fonte é parte da avaliação, assim como a confiabilidade do relógio e da cadeia de coleta.

## Uso na resposta a incidentes

Durante a resposta, a cronologia deve servir decisões concretas. Pode apoiar a delimitação de ativos e contas a investigar, a escolha de fontes adicionais, a priorização de coleta volátil, a avaliação do alcance de uma alteração e a verificação de quando uma medida defensiva entrou em vigor. A equipe pode manter uma versão operacional resumida para coordenação e uma base detalhada com eventos e referências, desde que ambas permaneçam alinhadas e indiquem a hora de atualização.

## Perguntas frequentes

### Uma linha do tempo prova quem realizou a intrusão?

Não por si só. Ela pode relacionar atividades a uma conta, sessão, dispositivo ou serviço, mas a atribuição a uma pessoa ou grupo exige evidências adicionais e uma análise própria. Registros temporais ajudam a testar a compatibilidade de uma hipótese; não convertem automaticamente uma identidade técnica em identidade humana.

### É necessário converter todos os horários para UTC?

Uma referência comum costuma facilitar a comparação entre sistemas, mas a conversão não é obrigatória em toda apresentação e não corrige erro de relógio. Preserve o valor original, indique o fuso conhecido e documente a conversão. Se o fuso for desconhecido, marque a incerteza em vez de escolher um deslocamento presumido.

### Como representar eventos cuja ordem não pode ser determinada?

### Um evento ausente significa que a ação não aconteceu?

### Quantas fontes são suficientes para confirmar um evento?

## Relação com o capítulo

Na organização da versão original, o capítulo 8 é o contexto relacionado a este verbete. A linha do tempo funciona como recurso de análise forense para ordenar evidências de fontes distintas e explicitar os limites dessa reconstrução. Seu uso disciplinado ajuda a comunicar o que se sabe, o que se estima e o que permanece sem confirmação durante a investigação.
