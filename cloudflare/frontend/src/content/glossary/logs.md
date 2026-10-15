# Logs

## Definição e papel na detecção

Logs, ou registros de eventos, são registros de ações e estados de sistemas que permitem reconstruir eventos durante uma investigação. Um log pode documentar que um processo foi iniciado, que uma conta autenticou, que uma regra de acesso foi aplicada, que um serviço apresentou erro ou que um equipamento alterou seu estado. O registro costuma ser produzido pelo próprio sistema ou por um componente que observa sua operação. Seu valor defensivo está em preservar vestígios que, vistos em conjunto, ajudam a responder o que ocorreu, em que ordem provável, em quais ativos e sob quais condições.

Um registro não é a realidade completa do evento. É uma representação produzida por um sistema, segundo regras de instrumentação, configuração e formato. Ela pode ser precisa quanto ao que o componente observou e silenciosa quanto ao que não estava habilitado a observar. A interpretação exige, portanto, conhecer a origem, o significado dos campos e as condições em que a coleta ocorreu. Logs fornecem evidência; não dispensam a avaliação de sua confiabilidade nem, por si sós, provam intenção ou causalidade.

## Como são produzidos e organizados

Uma fonte pode registrar fatos em resposta a uma ação — por exemplo, uma decisão de autenticação — ou em intervalos, como o estado periódico de um serviço. Há ainda mensagens geradas quando uma condição é detectada, uma tarefa termina ou uma exceção interrompe o fluxo normal. O nível de detalhe depende do componente, da configuração e, em alguns casos, do volume que a organização aceita coletar. Níveis mais verbosos podem esclarecer sequências, mas também aumentam custo de armazenamento e o trabalho de triagem; níveis muito restritos podem descartar contexto decisivo.

Os registros podem ser gravados localmente, enviados continuamente a um coletor ou encaminhados por lotes. Podem chegar como texto, campos estruturados ou formatos específicos do fabricante. Uma mensagem textual exige interpretação cuidadosa: nomes e valores podem variar entre versões, e texto livre é difícil de consultar de forma uniforme. Registros estruturados separam campos, mas isso não os torna automaticamente corretos. Um campo chamado `user`, por exemplo, pode representar a conta efetiva, a conta solicitada ou um valor informado pelo cliente; só a documentação e o contexto da fonte resolvem a ambiguidade.

Depois da geração, etapas distintas podem transformar o registro: transporte, parsing, normalização, enriquecimento, filtragem, agregação, indexação e armazenamento. Uma falha em qualquer etapa cria lacuna ou distorção. Um parser pode separar incorretamente campos; uma regra de filtragem pode descartar uma categoria; a fila de transporte pode atrasar mensagens; uma conversão pode alterar fuso horário ou precisão. Ao investigar, é útil distinguir o horário do evento, o horário em que o coletor o recebeu e o horário em que a plataforma o indexou, quando esses tempos estão disponíveis.

## O que os logs permitem observar

No trabalho de detecção, logs ajudam a observar ações que dificilmente seriam percebidas por um único alerta isolado. Uma autenticação incomum pode ganhar significado quando associada a uma alteração de privilégio; uma falha de serviço pode ser explicada por uma mudança de configuração; uma conexão pode ser relacionada a um processo que a iniciou. A sequência, a repetição, o resultado e o contexto contribuem para identificar desvio, confirmar uma hipótese ou descartá-la. A ausência de alerta não significa ausência de registro, assim como a presença de um registro não significa que o evento seja malicioso.

## Leitura e correlação durante uma investigação

Uma leitura defensável começa por perguntas delimitadas: qual evento se quer explicar, qual período é relevante e quais fontes poderiam observá-lo? Em seguida, identifica-se a origem de cada registro e avalia-se a integridade do caminho de coleta. Só então é apropriado comparar eventos, agrupar por identificadores e construir uma cronologia. Uma busca ampla por termos familiares pode ser útil para explorar dados, mas seus resultados não devem ser confundidos com uma conclusão: a consulta pode ignorar sinônimos, campos não indexados, formatos diferentes ou mensagens que chegaram atrasadas.

Uma cronologia deve manter explícita a incerteza. Se um host registra horário local e outro registra UTC, ordenar os textos de horário sem conversão pode inverter a sequência. Mesmo após a conversão, relógios dessincronizados, precisão diferente e latência de transporte podem deixar eventos empatados ou aparentemente fora de ordem. Registre o fuso adotado, a fonte temporal e qualquer ajuste aplicado. Quando for possível, compare os horários de evento e recebimento em vez de supor que o primeiro instante disponível represente exatamente o momento da ação.

## Reconhecimento e evidências associadas

Indícios de lacuna incluem períodos sem eventos esperados, fontes que pararam de enviar, filas acumuladas, erros de coleta e diferenças entre o que a configuração deveria registrar e o que foi recebido. Uma lacuna pode decorrer de falha legítima, rotação, filtro, indisponibilidade ou retenção; não demonstra, sozinha, apagamento deliberado. Da mesma forma, uma interrupção em horário suspeito merece investigação, mas não basta para atribuir causa ou autoria. Procure corroborar o intervalo com métricas, estado do agente, registros do coletor, cópias remotas e outras fontes disponíveis.

## Integridade, tempo e retenção

Sincronizar relógios é essencial para ordenar eventos de sistemas diferentes. A sincronização reduz discrepâncias, mas não assegura perfeição: a precisão, a configuração, o fuso e a disponibilidade do mecanismo temporal ainda precisam ser avaliados. Convém guardar horários em representação consistente e preservar o horário original da fonte. Quando há desvio conhecido, documente a estimativa e evite apresentar uma sequência como exata se os dados só permitem uma ordem aproximada.

Definir retenção significa decidir por quanto tempo cada categoria será preservada e em qual camada. A decisão deve considerar o tempo provável entre a ocorrência e a descoberta, necessidades de investigação, obrigações aplicáveis, volume, custo e acesso. Uma política uniforme pode ser simples, mas fontes com importância e custo diferentes podem demandar períodos distintos. A retenção efetiva também depende de rotação local, limites de armazenamento, expiração em serviços, cópias de segurança e regras da plataforma central. “Temos retenção de noventa dias” só é informativo se a equipe puder demonstrar que os dados relevantes permaneceram disponíveis durante esse período.

Proteger integridade envolve reduzir alterações não autorizadas, limitar quem pode ler ou administrar registros, registrar as próprias operações de administração e preservar cópias adequadas. Centralizar os dados pode ajudar quando um sistema investigado deixa de estar disponível ou perde sua cópia local, mas não elimina a necessidade de proteger o coletor e o destino. Controles de acesso, trilha administrativa, armazenamento com proteção contra alteração e procedimentos documentados podem aumentar a confiança. Nenhum controle isolado torna um dado infalível; a conclusão deve considerar o caminho completo, do produtor à análise.

## Limitações e erros de interpretação

Logs são incompletos por natureza. Um sistema registra o que foi programado e configurado para registrar, não tudo que aconteceu. Uma aplicação pode não emitir um evento para uma decisão interna; um agente pode estar desligado; um serviço pode não enviar registros de um tipo específico. Logo, “não encontrei o evento” não equivale a “o evento não ocorreu”. A força dessa ausência depende de demonstrar que a fonte cobria o evento, estava operacional, tinha o nível de detalhe adequado, não filtrava aquela categoria e preservou o intervalo examinado.

A própria busca pode induzir erro. Filtros de tempo, conversão de fuso, paginação, limites de resultados e permissões afetam o que aparece. Termos com acentos, normalização, caixa, codificação ou nomes alternativos podem escapar à consulta. Um painel pode resumir ou descartar campos. Antes de afirmar que nenhum registro existe, verifique o intervalo, a zona temporal, os filtros, a fonte consultada, o status de ingestão e eventuais limites da ferramenta. Anote as condições da consulta para que outra pessoa consiga reproduzir o resultado.

## Implicações para resposta a incidentes

No início da resposta, estabeleça quais sistemas, contas e períodos precisam ser preservados. Registros locais podem ser rotacionados ou sobrescritos, e dados em plataformas externas podem expirar segundo políticas próprias. Uma preservação tempestiva reduz a chance de perda, mas precisa respeitar procedimentos da organização, controles de acesso e requisitos de tratamento de evidência. Registre quem obteve os dados, quando, de qual origem e quais transformações foram feitas. Se houver necessidade de cadeia de custódia formal, siga o procedimento aplicável ao caso, sem presumir que uma exportação comum já atenda a esse padrão.

Ao compartilhar achados, apresente a sequência de forma verificável e evite atribuição excessiva. Inclua os tempos com fuso e incerteza conhecida, explique o significado dos campos decisivos e diferencie a observação da interpretação. Uma formulação como “o registro do serviço indica autenticação bem-sucedida para a conta X às 14h, conforme horário do host” é mais precisa do que afirmar, sem suporte adicional, que determinada pessoa iniciou uma sessão naquele instante. A linguagem cuidadosa ajuda a equipe a tomar medidas proporcionais e facilita revisão posterior.

## Exemplo hipotético

Imagine que uma organização receba um alerta sobre acesso incomum a uma aplicação interna. O registro da aplicação informa uma autenticação aceita; o serviço de identidade mostra a validação da conta; e o sistema operacional do servidor registra, minutos depois, uma alteração de permissão. A equipe não deve tratar a proximidade temporal como prova automática de que a autenticação causou a alteração. Primeiro verifica se os relógios e fusos são comparáveis, se os identificadores ligam as ações, se a conta tinha autorização para a mudança e se há uma atividade de manutenção aprovada.

## Distinções com termos próximos

**Auditoria** costuma designar registros voltados a responder quem fez o quê, quando e com qual resultado ou autorização. Um log de auditoria é uma categoria de log, frequentemente importante para responsabilização e revisão de acesso. Nem todo log tem finalidade de auditoria, e o uso do termo não garante cobertura, integridade ou valor probatório. Verifique a política e o desenho da fonte.

## Perguntas frequentes

### Um log prova que uma pessoa realizou uma ação?

### Se não há registro, posso concluir que nada aconteceu?

Somente quando houver base para confiar que a fonte observava aquele tipo de evento, estava ativa, enviava dados, preservou o período e não aplicou filtros que o removeriam. Mesmo assim, formule a conclusão dentro do escopo verificado. A ausência em uma fonte não elimina a possibilidade de outra fonte ter registrado a atividade.

### É melhor guardar tudo por mais tempo?

### Qual é o primeiro cuidado ao comparar registros de máquinas diferentes?

### Centralizar logs resolve o risco de perda?

## Relação com o capítulo 6

Na versão original, o capítulo 6 é o ponto de referência para este verbete. A função dos logs na detecção pode ser entendida como a preservação de observações que sustentam alertas, cronologias e investigação posterior. O termo reúne uma prática técnica cotidiana e uma condição de qualidade: os registros só ajudam quando a organização consegue explicar sua origem, seu tempo, sua cobertura e seus limites.
