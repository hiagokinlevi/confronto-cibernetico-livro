# Red Team

## Definição e propósito

**Red Team**, ou **equipe ofensiva**, é uma equipe que simula comportamentos de adversários para testar hipóteses e controles dentro de um escopo autorizado. O propósito não é demonstrar que uma organização é “invulnerável”, nem obter acesso pelo maior número possível de meios. É produzir evidências sobre como pessoas, processos e tecnologias se comportam diante de situações adversas plausíveis, para que a organização consiga reconhecer falhas, medir sua capacidade de resposta e corrigir lacunas.

O trabalho combina uma perspectiva de ameaça com regras de engajamento acordadas. A equipe adota objetivos e comportamentos que representem riscos relevantes ao ambiente avaliado, enquanto permanece sujeita a limites explícitos de sistemas, horários, técnicas, dados e impacto. A autorização e o escopo não são formalidades: definem a diferença entre um exercício legítimo e uma atividade não autorizada, além de orientar decisões em tempo real quando surge uma condição imprevista.

## Como funciona em uma organização

### Objetivo, escopo e segurança

O planejamento começa pela pergunta de negócio ou de segurança. Por exemplo: “A equipe de defesa perceberia uma tentativa simulada de acessar dados de um ambiente específico?” A pergunta deve ser traduzida em objetivos observáveis e critérios de interrupção. Isso permite distinguir um resultado de segurança de uma simples narrativa de sucesso ou fracasso.

As partes responsáveis definem o que está autorizado, quais ativos ficam fora do exercício, que tipos de ação são aceitáveis e como interromper a atividade. Também combinam canais de contato para situações de risco, tratamento de dados encontrados, preservação de evidências, período de execução e procedimento em caso de incidente real. O escopo deve ser compreensível para quem executa, para quem opera os sistemas e para quem responderá a um alerta. Ambiguidades em nomes de ambientes, contas, fornecedores ou redes podem levar a ações além do pretendido.

A autorização precisa abranger os ativos e as relações relevantes. Uma organização pode controlar uma aplicação, mas depender de um provedor, parceiro ou serviço compartilhado que não está coberto pela mesma permissão. Nesses casos, o exercício deve respeitar os limites de autoridade de cada parte e excluir caminhos que impliquem terceiros sem autorização apropriada. “Está conectado à rede da empresa” não é critério suficiente para considerar um alvo dentro do escopo.

### Hipóteses e simulação

A equipe formula hipóteses sobre comportamentos adversários e sobre as defesas que poderiam detectá-los ou impedi-los. Uma hipótese útil é específica o bastante para ser confrontada por evidências: por exemplo, que uma mudança suspeita em determinado tipo de conta geraria um alerta investigado por uma equipe responsável. A hipótese não afirma antecipadamente que o controle falhará; ela identifica algo a observar.

Em seguida, escolhem-se ações simuladas compatíveis com os objetivos e limites acordados. A equipe pode reproduzir sinais ou sequências de comportamento sem causar o efeito final que um adversário procuraria. Em certas circunstâncias, pode ser suficiente demonstrar que uma condição de risco existe e parar antes de acessar ou alterar dados. Em outras, é necessário testar se uma equipe humana percebe um sinal, o classifica e aciona uma resposta. A escolha deve equilibrar valor de teste, segurança operacional e representatividade.

### Observação e aprendizado

Durante a execução, a equipe registra ações, horários, sistemas envolvidos, decisões e resultados relevantes. A observação não se limita a saber se uma barreira bloqueou uma ação. Importa também se os sistemas produziram telemetria, se ela chegou ao lugar esperado, se um alerta tinha contexto suficiente e se os profissionais conseguiram tomar uma decisão. Um controle pode funcionar tecnicamente e ainda deixar uma lacuna de processo, como uma fila sem responsável ou uma notificação sem prioridade clara.

## Relação com a defesa

Red Team é uma atividade ofensiva em perspectiva, mas sua finalidade organizacional é defensiva. A equipe encena comportamentos que permitem observar se controles e equipes de proteção funcionam como um sistema. Ela não substitui a equipe defensiva, a gestão de vulnerabilidades, a arquitetura segura ou a resposta a incidentes. Seu valor depende de uma colaboração que preserve a independência da observação e, ao mesmo tempo, permita que os achados sejam entendidos e corrigidos.

A comunicação dos resultados deve permitir correção. Isso inclui apresentar contexto suficiente para reproduzir ou verificar o problema de forma controlada, indicar os sistemas e processos envolvidos e distinguir observação direta de interpretação. Os defensores precisam saber quais ações foram simuladas e quais efeitos não ocorreram. Esse cuidado evita que um achado seja tratado como incidente real ou que uma vulnerabilidade não validada seja apresentada como fato estabelecido.

## Onde aparece na investigação e como reconhecer

O termo pode surgir em planos de exercício, regras de engajamento, comunicações de autorização, tickets de mudança, relatórios de avaliação, registros de alertas e retrospectivas de incidentes. Em uma investigação, essas referências ajudam a determinar se uma atividade suspeita pode ter sido parte de uma simulação, mas nenhuma etiqueta isolada encerra a análise. Um nome de projeto, uma conta conhecida ou uma mensagem informal não comprovam que toda ação observada estava autorizada.

Evidências que ajudam a reconhecer um exercício legítimo incluem documentação de escopo aprovada, datas e janelas acordadas, identificadores de atividade, contatos de controle, lista de ativos cobertos, registros de execução e comunicação de encerramento. A coerência entre esses elementos importa: horários, origem, sistemas e ações observadas devem se alinhar com o que foi aprovado. A equipe de resposta pode confirmar a autorização por um canal previamente definido, em vez de confiar em informações fornecidas pelo próprio evento suspeito.

Quando a equipe defensiva não conhece o exercício, uma pessoa de controle — às vezes chamada de coordenador ou controlador do exercício — pode confirmar se determinada atividade pertence à simulação. Essa confirmação deve ser rápida o bastante para reduzir risco, mas não deve exigir que analistas ignorem alertas sem validação. O desenho do exercício precisa antecipar como essa confirmação será feita sem revelar detalhes a quem está sendo avaliado, quando a ocultação fizer parte do objetivo.

## Exemplos hipotéticos

**Exemplo hipotético: alerta de identidade.** Uma equipe autorizada testa a hipótese de que uma sequência simulada de alterações em uma conta privilegiada será correlacionada e encaminhada ao time responsável. O exercício não altera permissões reais fora do que foi aprovado. A defesa recebe um alerta, mas o classifica como mudança administrativa rotineira porque faltam contexto e vínculo com uma solicitação. O achado não é simplesmente “o alerta falhou”: a detecção ocorreu, mas o processo de triagem não distinguiu a atividade suspeita. A correção pode envolver dados de contexto e critérios de escalonamento, seguida de nova validação.

**Exemplo hipotético: sinal confundido com incidente.** Uma organização realiza uma simulação não anunciada a analistas de plantão, com controles de segurança e um canal de interrupção conhecido por um responsável independente. Durante o período, surge um alerta real de origem diferente. A equipe não o descarta por estar ocorrendo um exercício: compara a evidência com o escopo e aciona a resposta normal. A retrospectiva verifica tanto a condução da simulação quanto o tratamento do evento real. A coexistência dos dois eventos mostra por que atividades simuladas e incidentes precisam continuar distinguíveis.

## Distinções com termos próximos

**Red Team e teste de penetração.** Um teste de penetração costuma se concentrar em identificar e validar vulnerabilidades em ativos ou sistemas definidos. Um exercício de Red Team pode ter objetivos mais amplos, como testar a capacidade de detecção, investigação e resposta ao longo de uma situação simulada. Há sobreposição: uma operação pode usar técnicas de teste de segurança e ainda avaliar processos defensivos. O nome do trabalho, por si só, não determina seu alcance; objetivos, escopo e critérios é que esclarecem a diferença.

**Red Team e equipe de resposta a incidentes.** A equipe de resposta investiga e contém eventos, sejam eles reais ou simulados conforme o exercício. A equipe ofensiva produz a atividade de teste e evidências relacionadas à hipótese. Elas podem interagir durante ou após a execução, mas não têm a mesma função. Tratar os dois papéis como intercambiáveis cria confusão sobre quem autoriza ações, quem decide a contenção e quem mantém a cadeia de comunicação.

**Red Team e Purple Team.** “Purple Team” costuma descrever uma abordagem colaborativa em que participantes ofensivos e defensivos trabalham juntos para testar e melhorar detecções e controles. Não é necessariamente uma equipe permanente nem um formato único. Um exercício de Red Team pode incluir momentos de colaboração semelhantes, especialmente na revisão, sem deixar de ser uma simulação orientada a objetivos. A distinção prática está no desenho do trabalho e no grau de compartilhamento durante a atividade.

**Red Team e equipe adversária real.** A semelhança de comportamentos não torna as duas atividades equivalentes. O exercício tem autorização, limites, responsáveis e objetivo de aprendizagem; um adversário real age sem essa autorização e pode causar dano deliberado. Em uma investigação, a intenção alegada precisa ser confrontada com autorização e evidências. Uma organização não deve presumir que uma atividade desconhecida é benigna apenas porque se parece com um teste.

**Red Team e avaliação de controles.** Uma auditoria ou revisão de controles pode verificar documentos, configurações e processos sem simular comportamentos de adversário. Um Red Team pode fornecer evidências práticas sobre controles em contexto, mas não certifica por si só a conformidade integral nem cobre todas as situações possíveis. Os métodos respondem a perguntas diferentes e podem se complementar.

## Limitações e erros de interpretação

Um exercício é uma amostra delimitada, feita em determinado ambiente, período e conjunto de condições. Não demonstra que a organização resistirá a qualquer adversário ou que sistemas não testados estejam seguros. Um resultado favorável indica que certos comportamentos foram impedidos, percebidos ou tratados naquela situação. Mudanças de infraestrutura, equipe, configuração, dependências e ameaças podem alterar o resultado depois do exercício.

Um erro comum é medir qualidade apenas pelo número de sistemas alcançados, alertas produzidos ou falhas encontradas. Esses números sem contexto favorecem volume em vez de aprendizado. Outra leitura equivocada é tratar um alerta como prova de defesa eficaz ou a falta dele como prova de incompetência. O resultado depende da qualidade da telemetria, do contexto, dos critérios de sucesso, das responsabilidades operacionais e das condições do exercício.

Também é incorreto presumir que uma operação de Red Team sempre deve ser secreta, sempre deve tentar atingir o objetivo final ou sempre precisa simular um adversário específico. Esses são aspectos de desenho, não requisitos universais. A escolha depende do risco e da hipótese. A atividade deixa de ser um bom teste quando esconde informação de pessoas que precisam garantir segurança operacional, ou quando ultrapassa o necessário para produzir evidência defensivamente útil.

## Implicações para resposta a incidentes

Se uma ação simulada causar impacto inesperado, exceder escopo ou afetar um serviço crítico, a prioridade é aplicar o mecanismo de interrupção e avaliar a situação. A intenção de testar não elimina a necessidade de tratar consequências reais. O controlador informa a equipe responsável, preserva registros e coordena o encerramento ou a retomada somente conforme as regras aprovadas. Se houver indícios independentes de atividade maliciosa, a investigação segue o fluxo normal, ainda que o exercício esteja em andamento.

## Perguntas frequentes

### Um Red Team precisa explorar uma vulnerabilidade até o fim?

Não. A equipe deve produzir evidência suficiente para responder à hipótese dentro dos limites definidos. Se a demonstração de uma condição de risco já fundamenta uma correção, avançar até um impacto maior pode ser desnecessário. O ponto de parada deve estar combinado antes da execução, e a equipe deve comunicar qualquer condição que exija interromper ou reavaliar o plano.

### A equipe defensiva deve saber que o exercício está ocorrendo?

Depende do objetivo. Se o teste mede descoberta e reação a uma atividade não anunciada, avisar os analistas participantes pode mudar o comportamento observado. Ainda assim, deve haver responsáveis autorizados e um mecanismo de segurança para confirmar e interromper o exercício. Se o objetivo é praticar coordenação ou validar um procedimento específico, compartilhar o cenário pode produzir aprendizado melhor e reduzir confusão.

### Se não houve alerta, o exercício fracassou?

Não necessariamente. A ausência de alerta é uma observação que precisa ser explicada. Pode indicar uma lacuna de detecção, mas também uma falha de coleta, uma hipótese mal formulada ou uma ação que não gerou os sinais previstos. A avaliação deve examinar toda a cadeia: geração da evidência, coleta, análise, encaminhamento, decisão e resposta. Um teste bem desenhado pode produzir um resultado negativo e ainda assim cumprir seu propósito de revelar uma incerteza relevante.

### Como evitar confundir simulação e ataque real?

Use autorização verificável, escopo claro, contatos independentes, registros coerentes e regras de interrupção. Durante uma investigação, confronte a atividade observada com esses elementos; não descarte sinais só porque alguém menciona um exercício. O procedimento precisa permitir confirmação rápida sem tornar a resposta cega a eventos que não pertencem à simulação.

### O que torna um achado acionável?

Um achado acionável descreve o que foi observado, em que condições, qual hipótese ou controle está relacionado e qual risco prático isso representa. Deve distinguir fatos de inferências e indicar limitações da validação. Também precisa apontar quem pode decidir a correção e como verificar depois se ela resolveu a lacuna. Uma lista de técnicas ou uma conclusão genérica não substitui esse contexto.

## Relação com o capítulo

Na organização do manuscrito original de *Confronto Cibernético*, este verbete se relaciona ao capítulo 5. A conexão é a função do Red Team como instrumento de avaliação em contexto: simular comportamentos dentro de autorização, observar a interação entre controles e resposta e devolver os resultados aos defensores para correção.
