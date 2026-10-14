# BloodHound

## Visão geral

BloodHound é uma ferramenta de análise de relações de privilégio em ambientes de identidade. Ela organiza objetos — como contas de usuário, grupos, computadores e recursos — e as relações que os conectam em uma representação que permite examinar caminhos de acesso. Em vez de observar cada permissão isoladamente, a equipe pode perguntar que sequência de relações poderia levar de uma identidade inicial a outra com maior capacidade ou a um recurso sensível.

Essa perspectiva é valiosa porque o risco de uma identidade não depende apenas dos privilégios atribuídos diretamente a ela. A associação a grupos, a delegação de controle, as permissões sobre objetos e outras relações de confiança podem se combinar. Uma permissão aparentemente restrita pode se tornar relevante quando encadeada com outras. BloodHound ajuda a tornar essas conexões visíveis e investigáveis; não decide, por si só, se uma rota é explorável na situação concreta nem se alguém a utilizou.

A ferramenta é mais bem entendida como apoio à descoberta e à análise de exposição. Seus resultados representam relações observadas ou inferidas a partir dos dados coletados e do modelo usado. A conclusão depende da cobertura e da interpretação dos dados, além dos controles fora da representação.

## O que significa um caminho de acesso

Um caminho é uma sequência de relações entre objetos. Cada ligação expressa alguma forma de associação, controle ou capacidade relevante para a análise. Por exemplo, uma conta pode pertencer a um grupo; esse grupo pode ter uma permissão sobre um computador; e uma relação adicional pode conectar esse computador a uma função administrativa. Consideradas em conjunto, as ligações podem indicar uma rota potencial entre a conta e um privilégio ou recurso de interesse.

O caminho não equivale necessariamente a uma sequência de ações já executadas, nem a uma receita pronta. É uma hipótese sobre a estrutura de acesso que merece validação. Uma ligação pode estar desatualizada, sujeita a uma condição não representada, limitada por controles compensatórios ou interpretada de modo diferente da intenção original. Também pode existir uma rota real que não aparece porque os dados disponíveis não cobrem o objeto ou a relação relevante.

Há, portanto, três planos que convém manter separados:

- **Estrutura:** quais objetos e relações estão representados no conjunto analisado.
- **Possibilidade:** que encadeamentos parecem conferir uma capacidade, segundo o modelo e os dados.
- **Atividade:** que ações foram de fato realizadas por uma identidade, em determinado período.

BloodHound é particularmente útil nos dois primeiros planos. Para estabelecer atividade, a investigação precisa de outras evidências, como registros de autenticação, auditoria de mudanças, telemetria de endpoints e eventos de acesso a recursos. A presença de um caminho não prova exploração; a ausência de um caminho também não prova que não houve comprometimento.

## Como a análise funciona em termos defensivos

Em linhas gerais, o trabalho envolve obter dados sobre objetos e relações do ambiente de identidade, organizá-los em um modelo de grafo e consultar esse modelo para entender conectividade e exposição. Um grafo representa entidades como nós e relações como arestas. Essa forma de organização facilita perceber conexões indiretas que seriam difíceis de acompanhar em listas de permissões ou relatórios separados.

A coleta pode envolver informações de diretório e de outros componentes relacionados ao ambiente, conforme o escopo e os recursos utilizados. O conjunto resultante é uma fotografia parcial do que foi observado. Ele não é automaticamente uma visão universal de todo o ambiente: sistemas fora do escopo, dados indisponíveis, permissões de coleta insuficientes e diferenças entre fontes podem deixar lacunas. O momento da coleta também importa, porque grupos, contas, permissões e configurações mudam.

Depois de representadas as relações, a equipe pode explorar perguntas defensivas: quais identidades têm ligação indireta com ativos importantes? Que contas concentram conexões de alto impacto? Há rotas evitáveis a partir de contas comuns? Quais mudanças quebrariam ou encurtariam caminhos de risco? O resultado orienta uma revisão, não substitui a confirmação com os proprietários dos sistemas nem a análise de controles efetivos.

## Onde é útil

Em uma revisão preventiva, a equipe pode começar por ativos considerados críticos e rastrear as relações que os tornam alcançáveis. A pergunta não é somente “quem tem acesso direto?”, mas também “que encadeamentos de controle podem produzir acesso, e quais deles são necessários para a operação?”. Essa visão favorece decisões graduais: remover uma associação desnecessária, restringir uma delegação, separar funções ou fortalecer a monitoração de um vínculo que não possa ser removido imediatamente.

## Evidências e interpretação na investigação

A representação produzida pela ferramenta é evidência da análise feita sobre determinado conjunto de dados, não evidência automática de uma intrusão. Para que uma conclusão seja auditável, registre a origem dos dados, a janela temporal, o escopo, os filtros e as premissas relevantes. Preserve também a saída da análise conforme os procedimentos de tratamento de evidências da organização, evitando expor dados de identidade além do necessário.

Para determinar se uma rota foi usada, procure evidências temporais independentes e correlacione-as com identidades, sistemas e eventos. Registros de autenticação podem indicar sessões; auditoria pode mostrar alterações de associação ou configuração; telemetria do endpoint pode revelar processos e conexões; registros do recurso podem mostrar acessos. A disponibilidade e a retenção variam. Uma lacuna de log limita a conclusão, mas não deve ser convertida em afirmação de que nada ocorreu.

## Exemplo hipotético

Considere uma organização fictícia em que uma conta de suporte de uso diário pertence a um grupo com permissão de administração sobre um servidor de aplicações. Esse servidor, por sua vez, possui uma relação de controle que pode afetar uma conta usada em uma função sensível. Uma análise do grafo mostra uma cadeia entre a conta de suporte e essa função. O achado não demonstra que a conta de suporte tenha alterado o servidor ou assumido a função. Ele mostra que a cadeia merece validação e pode representar uma exposição evitável.

A equipe verifica as permissões nas fontes originais, confirma que a relação ainda está ativa e consulta o proprietário da aplicação. Descobre que a administração do servidor deveria ser restrita a uma equipe de operações, mas o grupo amplo permaneceu por conveniência. A correção pode ser reduzir a associação e revisar o mecanismo que criou a relação seguinte. Em paralelo, a investigação verifica os registros disponíveis para saber se a conta realizou ações incomuns. A remediação da exposição e a apuração de atividade são tarefas relacionadas, mas têm evidências e conclusões distintas.

## Priorização e remediação

Nem todo caminho merece a mesma resposta. A prioridade depende do impacto do recurso, da sensibilidade da identidade, da viabilidade prática da relação, da exposição da conta de origem e da existência de controles compensatórios. Uma cadeia curta pode ser importante se tocar um ativo crítico, enquanto uma cadeia longa pode depender de condições improváveis ou de objetos já desativados. A extensão do caminho, sozinha, não é uma medida confiável de gravidade.

Após a mudança, uma nova coleta ou verificação direcionada ajuda a confirmar se a relação foi removida e se não surgiu uma rota equivalente. A equipe deve registrar o motivo, o responsável, a exceção aprovada quando houver e o prazo para reavaliação. ## Limitações e erros de interpretação

Outra limitação é a distância entre uma relação representada e o efeito concreto no ambiente. A semântica de permissões pode depender de configurações, condições, políticas ou comportamento específico de um serviço. Uma aresta não necessariamente significa que qualquer pessoa conectada a ela pode executar imediatamente uma ação. Tampouco a ausência de uma aresta significa que o acesso seja impossível por todos os mecanismos ou por caminhos que a coleta não modelou.

Um erro frequente é classificar todo caminho como incidente. Exposição estrutural é uma condição de risco que pode existir sem abuso. Um incidente requer evidências de atividade não autorizada ou outra base definida pelo processo de resposta. Outro erro é considerar a ferramenta um scanner de vulnerabilidades: sua análise central trata de relações de identidade e acesso; não substitui avaliação de falhas de software, configuração de rede ou segurança física.

Também é arriscado priorizar exclusivamente pelo número de ligações, pelo destaque visual ou por uma pontuação sem entender as premissas. Métricas podem ajudar a ordenar a revisão, mas não são uma decisão de risco completa. A organização precisa combinar o resultado com criticidade do ativo, contexto de negócio, controles e evidências. Da mesma forma, um caminho que termina em uma conta privilegiada não prova que essa conta esteja comprometida; apenas indica que as relações observadas podem conectá-la à origem analisada.

## Distinções importantes

**BloodHound e inventário de identidades:** um inventário registra objetos e atributos; a análise de grafo enfatiza relações e encadeamentos entre eles. Um não substitui o outro. O inventário pode ajudar a contextualizar nós, enquanto o grafo aponta conexões que precisam de interpretação.

**BloodHound e gerenciamento de identidade e acesso:** sistemas de gestão provisionam, revisam ou aplicam acessos conforme processos organizacionais. BloodHound analisa relações representadas no conjunto coletado. Encontrar um excesso pode motivar uma revisão ou mudança no sistema de gestão, mas a ferramenta não é, por si só, o processo de aprovação e governança de acesso.

**Caminho potencial e exploração confirmada:** o primeiro descreve uma possibilidade estrutural derivada dos dados; a segunda exige evidências de que uma ação foi realizada. Relatórios devem usar verbos cuidadosos: “identificou uma rota potencial” quando há somente análise de relações; “observou atividade” quando registros sustentam a ação; e “confirmou comprometimento” apenas quando o conjunto de evidências permite essa conclusão.

**BloodHound e resposta a incidentes:** a ferramenta pode apoiar a delimitação e a priorização durante uma investigação, mas não substitui a linha do tempo, a coleta forense, a análise de logs ou a decisão de declarar um incidente. Ela fornece contexto sobre acesso possível, enquanto outras fontes sustentam o que ocorreu.

## Perguntas frequentes

### Encontrar um caminho significa que a conta foi comprometida?

Não. Significa que a representação analisada contém relações que podem formar uma rota de acesso segundo os dados e o modelo. Para afirmar comprometimento, são necessárias evidências de atividade e uma avaliação do contexto. A rota pode justificar prioridade de investigação mesmo sem provar uso.

### A ausência de caminhos elimina o risco?

Não. Pode indicar que nenhuma rota foi encontrada no escopo e nos dados considerados; relações não coletadas ou mecanismos fora do modelo podem continuar relevantes.

### Como escolher por onde começar a correção?

Comece pelos recursos e identidades de maior impacto e valide as relações que os conectam a contas de uso amplo ou pouco controladas. Confirme cada ligação, identifique seu proprietário e avalie a consequência operacional de removê-la. Priorize redução de privilégio sustentável, acompanhada de verificação posterior.

### O que fazer se a relação for necessária ao negócio?

Entenda a necessidade e o responsável, reduza o alcance quando possível e aplique controles adequados ao risco. Registre a justificativa, a aprovação e uma data de revisão. Uma necessidade operacional pode justificar manter acesso, mas não dispensa a avaliação de alternativas e a monitoração proporcional.

## Relação com o capítulo

No capítulo 7 da versão original do manuscrito, BloodHound pode ser situado como ferramenta para compreender caminhos de acesso em ambientes de identidade. O ponto essencial para a leitura técnica é usar essa representação para localizar privilégios excessivos, validar as relações nas fontes correspondentes e orientar correções. A descoberta de um caminho é um achado de exposição; por si só, não demonstra que ele tenha sido percorrido.
