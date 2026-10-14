# Execução

## Conceito

Execução é a etapa em que um comando, script ou programa é executado no alvo para produzir um efeito planejado. Em uma sequência de ataque, ela descreve uma mudança de estado: instruções deixam de estar apenas armazenadas, transmitidas ou preparadas e passam a ser processadas por um ambiente computacional. O efeito pode ser tão limitado quanto consultar um recurso ou tão amplo quanto alterar dados, iniciar outro processo ou estabelecer condições para uma ação posterior. O termo, por si só, não informa se a ação teve êxito, se era autorizada, nem qual intenção a motivou.

Execução também é uma palavra usada em vários níveis. Pode designar o início de um processo, o processamento de uma instrução dentro de um processo já existente ou a invocação de uma tarefa por um serviço. Em análise de segurança, costuma ser mais útil dizer exatamente qual unidade foi observada: por exemplo, “o serviço iniciou o interpretador”, “a tarefa foi disparada” ou “o processo filho tentou abrir um arquivo”. Isso torna a afirmação verificável e evita atribuir ao evento um alcance que a telemetria não demonstra.
## Posição na sequência do ataque

A execução é uma fase analítica, não necessariamente uma etapa isolada e ordenada de modo rígido. Uma atividade pode incluir preparação, entrega de um artefato, execução, obtenção de acesso a recursos, comunicação com outros sistemas e efeitos posteriores. Em incidentes reais, ações podem se sobrepor, repetir-se ou ocorrer em ordem diferente. A fase ajuda a formular perguntas sobre o que o agente fez no alvo, mas não prova que todas as demais fases ocorreram nem que o objetivo final foi alcançado.

A distinção entre execução e impacto também evita exageros. Um programa pode iniciar sem modificar dados, e uma alteração pode ser realizada por uma ferramenta legítima ou por uma tarefa previamente configurada. Para sustentar que houve impacto, é necessário procurar evidências do efeito relevante: arquivos modificados, configurações alteradas, serviços interrompidos, dados acessados ou outra consequência observável. A execução pode ser uma condição necessária para alguns efeitos, mas não é sinônimo deles.
## O que acontece no sistema

De forma geral, o sistema recebe uma solicitação para iniciar ou continuar uma unidade de trabalho. Um componente, como um usuário, serviço, agendador ou outro processo, faz a solicitação; o ambiente escolhe o programa ou contexto pertinente; e o sistema operacional ou o próprio aplicativo processa as instruções. As permissões disponíveis, as políticas vigentes, os recursos acessíveis e o estado do equipamento condicionam o resultado. Essa descrição não pressupõe uma plataforma específica nem implica que todo evento gere um processo novo.

O contexto de segurança influencia o que a execução pode alcançar. Uma identidade com permissões restritas pode consultar somente alguns recursos; uma conta de serviço pode ter acesso amplo a dados operacionais; uma sessão interativa pode herdar variáveis, diretórios ou credenciais disponíveis naquele contexto. O evento de início não revela sozinho todas as permissões efetivas, e uma identidade exibida no registro pode representar apenas uma parte da cadeia. A investigação precisa relacionar usuário, sessão, processo iniciador, processo iniciado e recursos efetivamente acessados.
## Como reconhecer evidências

A investigação combina sinais que respondem a perguntas distintas. Um registro de criação de processo pode indicar que um iniciador solicitou um executável, sob determinada conta e em certo horário. Um registro de tarefa pode mostrar que um mecanismo de automação disparou uma ação. Telemetria de endpoint pode acrescentar árvore de processos, integridade, arquivo associado ou atividade de rede. Logs de autenticação e de serviços podem esclarecer quem tinha uma sessão ou qual componente iniciou a solicitação. Nenhum desses registros, isoladamente, descreve necessariamente a intenção ou o efeito completo.

Entre as fontes úteis estão, conforme a plataforma e a configuração: eventos do sistema operacional, auditoria de processos, registros de autenticação, logs de aplicações e serviços, histórico de tarefas, telemetria de segurança, inventário de software e registros de alterações em arquivos ou configurações. Alertas de antivírus ou de detecção comportamental podem orientar a busca, mas são conclusões automatizadas que devem ser confrontadas com eventos originais. A retenção, os filtros, a sincronização de relógios e os privilégios de coleta determinam o que pode ser visto.
## Relação entre processo, usuário, argumentos e horário

A nota prática central é relacionar processo, usuário, argumentos e horário antes de concluir que uma execução foi maliciosa. Cada elemento corrige a leitura dos demais. O nome de um programa isolado costuma ser pouco informativo; uma linha de comando fora do padrão pode ser relevante, mas também pode pertencer a uma rotina legítima; uma conta privilegiada pode ser esperada para manutenção ou pode ter sido usada indevidamente. A conclusão deve emergir da combinação e da comparação com a atividade normal daquele equipamento e daquela função.

Para o usuário, verifique a identidade efetiva, o tipo de conta, a sessão, a origem de autenticação e a função habitual do equipamento. Uma conta de serviço pode ser usada por vários componentes; atribuir a atividade a uma pessoa apenas porque o nome de usuário aparece no log pode ser incorreto. Considere delegação, execução agendada, autenticação não interativa e possíveis lacunas entre a identidade apresentada e quem controlava a sessão. Preserve a distinção entre “executado sob a conta” e “executado pela pessoa”.
## Uso na defesa e na investigação

O conceito é útil para separar alerta de ação observada. Um arquivo detectado em disco, uma conexão permitida e uma tentativa de autenticação são indícios diferentes. Quando a equipe estabelece que houve execução, pode perguntar qual componente a iniciou, em que contexto, o que foi processado e quais efeitos se seguiram. Essa decomposição ajuda a delimitar o incidente: um artefato bloqueado antes do início demanda uma resposta distinta de um processo que iniciou e acessou recursos importantes.

Para reconstruir a atividade, acompanhe a cadeia antes e depois do evento: origem da solicitação, autenticação associada, processo iniciador, parâmetros observados, arquivos lidos ou gravados, conexões e alterações subsequentes. O objetivo é responder a perguntas delimitadas, como “o processo chegou a iniciar?”, “sob qual conta?”, “qual recurso foi acessado?” e “há evidência de persistência ou impacto?”. Se a resposta depender de dados ausentes, registre-a como hipótese ou incerteza, em vez de preencher a lacuna com uma narrativa plausível.
## Exemplos hipotéticos

**Exemplo hipotético — manutenção prevista.** Um agente de atualização inicia um programa de instalação sob uma conta de serviço durante uma janela aprovada. Os argumentos apontam para um pacote registrado no inventário, e a telemetria mostra alterações compatíveis com a implantação. Há execução, mas a leitura contextual favorece uma atividade autorizada. A equipe ainda pode verificar a integridade do pacote e a correspondência com o chamado de mudança; a classificação não decorre apenas do nome do executável.

**Exemplo hipotético — cadeia inesperada.** Em uma estação, um documento aberto por um usuário é seguido pelo início de um interpretador cujo processo pai não costuma aparecer nesse fluxo. A conta e o horário são plausíveis, mas os argumentos e as gravações subsequentes não correspondem ao uso habitual. A combinação justifica investigação e contenção proporcional. Ela não prova, sozinha, quem criou o documento nem se houve exfiltração; essas afirmações dependem de outras fontes.

**Exemplo hipotético — automação legítima com comportamento novo.** Uma tarefa agendada executa semanalmente um script de inventário. Em uma ocorrência, o script é iniciado no horário esperado, mas consulta um caminho que não consta da rotina documentada. O agendamento e a conta favorecem uma explicação operacional, enquanto o novo acesso requer validação. Mudança de configuração, atualização recente ou erro de manutenção podem explicar a diferença; também é possível que a tarefa tenha sido alterada. A investigação compara versões, registros de mudança e atividade real, sem decidir apenas pelo caráter familiar do agendador.
## Distinções importantes

**Execução e entrega:** entrega trata de como um artefato ou conteúdo chega a um ambiente ou fica disponível nele; execução trata de seu processamento no alvo. A presença de um arquivo não demonstra que alguém o abriu, e um conteúdo pode ser executado sem deixar um arquivo persistente óbvio. São perguntas relacionadas, mas respondidas por evidências distintas.

**Execução e persistência:** persistência é a manutenção de acesso ou capacidade de ação ao longo do tempo, conforme o contexto de análise. Uma execução isolada pode não criar qualquer mecanismo de retorno. Uma tarefa ou configuração persistente, por sua vez, pode existir sem estar ativa naquele instante. Distinguir configuração, disparo e atividade ajuda a descrever o estado real do sistema.

**Execução e processo:** processo é uma abstração de execução gerenciada pelo sistema, mas nem toda execução relevante corresponde a um processo novo visível. Um processo também pode existir sem realizar a ação suspeita que motivou o alerta. É mais preciso tratar o processo como uma unidade de evidência e descrever o comportamento que foi associado a ele.
## Limitações e erros de interpretação

A telemetria pode ser parcial. Uma política pode não registrar linhas de comando, um sensor pode ter sido instalado depois do evento, um processo pode terminar antes da coleta ou um sistema pode ter sido reiniciado. A ausência de registro, portanto, não equivale sempre à ausência de atividade. A força dessa ausência depende de saber se a fonte estava ativa, configurada para capturar aquele evento, saudável e com retenção suficiente no período investigado.

Entre os erros frequentes estão inferir malícia do nome de um arquivo, presumir que uma conta identifica uma pessoa, tratar uma detecção como prova de execução concluída e equiparar execução a impacto. Outro erro é encerrar a investigação porque o processo tem assinatura válida ou, no sentido inverso, presumir comprometimento por ter sido iniciado fora do horário usual. Indicadores ajudam a priorizar, mas contexto e evidência corroborante sustentam a conclusão.
## Perguntas frequentes

### Um alerta de execução confirma que o programa rodou?

Não necessariamente. O alerta pode representar uma tentativa, uma regra acionada por características do arquivo ou um comportamento bloqueado. Consulte a descrição do produto e procure eventos originais de início e evidências posteriores. Relate exatamente o que a fonte afirma e o que foi corroborado.

### Um processo conhecido pode fazer parte de um ataque?

Sim. Programas legítimos podem ser iniciados por uma conta indevida, com parâmetros incomuns ou contra recursos fora do escopo autorizado. O inverso também vale: um nome pouco familiar não prova ataque. Avalie origem, cadeia, contexto, propósito e efeitos observados.

### Se não há processo registrado, posso concluir que não houve execução?

Somente se a fonte pertinente cobria o evento, estava saudável e tinha a granularidade necessária. Código pode ser processado em contextos que não geram um processo novo evidente, e lacunas de coleta são comuns. Formule a conclusão no limite do que a fonte permite demonstrar.

### Qual é a primeira pergunta para a equipe de resposta?
## Relação com o capítulo

No capítulo 1 da versão original do manuscrito, o termo pode servir como ponto de referência para acompanhar a passagem entre uma intenção ou solicitação e a atividade efetivamente processada no alvo. A leitura técnica ganha precisão quando cada ocorrência é ligada às evidências de contexto e quando execução não é confundida com entrega, acesso, sucesso ou impacto. Essa distinção permite discutir a fase do ataque sem transformar uma sequência possível em uma afirmação automática sobre o incidente.
