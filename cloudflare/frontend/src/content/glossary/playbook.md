# Playbook

## Definição e finalidade

Um playbook, também chamado roteiro de resposta, é uma sequência documentada de ações e decisões preparada para uma classe de incidente. Pode orientar, por exemplo, a resposta a uma credencial exposta, a uma suspeita de ransomware ou a uma conta usada de forma indevida. Seu propósito é transformar princípios, responsabilidades e conhecimento operacional em um caminho utilizável sob pressão. O documento ajuda a equipe a agir com coordenação, registrar o que foi feito e decidir quando avançar, interromper ou escalar uma atividade.

“Sequência” não significa receita rígida. Incidentes têm lacunas, sinais contraditórios e mudanças rápidas. Um roteiro combina ações com condições: o que observar, qual decisão depende disso, quem pode tomá-la e que alternativa seguir se a hipótese não se confirmar. Orienta o raciocínio e reduz omissões, sem substituir julgamento técnico.

O nível de detalhe varia conforme público e risco: pode incluir critérios gerenciais, comunicação ou passos técnicos para analistas autorizados. Deve esclarecer limites de atuação e apontar políticas, contatos, formulários e procedimentos complementares, sem duplicar toda a documentação organizacional.

## Estrutura de um roteiro utilizável

Um playbook delimita o cenário, indícios iniciais e condições de ativação. Estabelece coordenação, funções participantes e decisões que exigem autorização. Ativá-lo organiza a avaliação; não confirma automaticamente um comprometimento.

As ações devem ser claras, verificáveis e ligadas a um propósito. “Investigar a conta” precisa indicar quais informações consultar, quem pode fazê-lo e como registrar o resultado. Detalhe excessivo envelhece e pode induzir ações inadequadas; convém especificar intenção, pré-condições e resultado esperado, referenciando instruções técnicas controladas quando necessário.

Decisões centrais podem incluir distinguir falso alerta de incidente provável, limitar acesso, interromper serviço, envolver áreas jurídicas, privacidade, comunicação ou fornecedores e passar da contenção à recuperação. Critérios devem mostrar quais fatos importam e quem avalia os riscos. Para informação insuficiente, deve existir escalonamento, não falsa certeza.

Registre horário e fonte dos alertas, hipóteses, consultas, aprovações, medidas, sistemas afetados e fundamentos das decisões. Separe observações de interpretações e assinale incertezas: uma suposição repetida pode parecer fato confirmado.

Manutenção é parte do roteiro: responsáveis, contatos, sistemas, dependências e permissões mudam. Sem dono e revisão, o documento pode indicar pessoas indisponíveis ou ações inseguras. Exercícios revelam ambiguidades, aprovações lentas e papéis desconhecidos.

## Como funciona na resposta defensiva

O roteiro apoia um ciclo de avaliação, decisão e revisão. Diante de um sinal, a equipe verifica o escopo e reúne informações para escolher próximos passos. Ações podem ocorrer em paralelo se papéis e dependências estiverem claros. Depois, observa os efeitos e atualiza a avaliação; se os fatos divergirem, adapta o caminho ou escala a exceção.

A contenção não é universal: revogar sessão pode interromper atividade legítima; isolar equipamento pode eliminar dados voláteis. Pondere urgência, alcance, continuidade, preservação e autoridade para aprovar impacto relevante.

Antes de devolver um sistema ao uso, avalie se a causa provável foi tratada, os acessos revistos, dados e configurações íntegros e a monitoração capaz de detectar recorrência. O roteiro define verificações e responsáveis, mas não garante que todo impacto foi localizado; registre evidências e nível de confiança.

## Onde aparece na investigação

O playbook pode estar em biblioteca de procedimentos, sistema de incidentes ou materiais de exercício. Durante a investigação, orienta verificações, contatos e registros; depois, ajuda a reconstruir decisões e lacunas entre processo previsto e execução.

Roteiro de ransomware não prova criptografia maliciosa; alerta de credencial exposta não confirma uso por terceiros. Separe procedimento previsto, vestígios técnicos e ações registradas.

Para reconhecer qual roteiro foi aplicado e avaliar sua execução, podem ser úteis:

- o documento vigente, sua versão, data de revisão e responsável;
- o registro de abertura do caso e a justificativa para ativá-lo;
- cronologia de decisões, aprovações e mudanças de responsável;
- tickets, notas de análise, mensagens de coordenação e registros de passagem de turno;
- alertas e dados técnicos que sustentaram cada avaliação, preservados conforme as regras da organização;
- registros de execução de ações, como revogação de sessão ou isolamento, com horário e identidade responsável;
- resultados de exercícios, revisões posteriores e alterações feitas em resposta a problemas encontrados.

A disponibilidade depende de ferramentas e retenção. Verifique integridade, origem, horário e lacunas. Um ticket concluído não prova efeito técnico; confronte-o com registros do sistema.

## Exemplo hipotético: credencial exposta

Imagine que uma organização receba a informação de que uma credencial corporativa foi publicada em local acessível indevidamente. O roteiro pode indicar como registrar a origem do aviso sem redistribuir o segredo, quem avalia se a credencial ainda é válida e quais fontes autorizadas consultar para procurar uso incompatível com o esperado. Pode também definir quem decide pela troca da credencial ou revogação de sessões, como envolver o responsável pelo sistema e que sinais justificam ampliar a investigação para outras contas ou serviços.

Publicação não equivale a acesso indevido: a credencial pode estar expirada, ser de teste ou não ter sido usada. Ausência de atividade em uma fonte limitada tampouco prova ausência de uso. O roteiro explicita as perguntas e registra fundamentos. Evidências possíveis incluem metadados do aviso, estado da credencial, autenticações disponíveis e confirmação do proprietário, sem replicar o segredo em canais desnecessários.

## Exemplo hipotético: suspeita de ransomware

Considere um alerta de monitoramento acompanhado por relatos de arquivos inacessíveis em alguns equipamentos. O playbook correspondente pode organizar a triagem para distinguir indisponibilidade acidental de atividade maliciosa, orientar a preservação de informações relevantes e estabelecer como coordenar segurança, infraestrutura e continuidade do negócio. A depender do risco e da confirmação, pode haver uma decisão de isolar determinados ativos, suspender acessos ou acionar responsáveis por recuperação.

O rótulo não determina alcance, autoria ou perda de dados. Pergunte quais sistemas foram afetados, se há sinais adicionais, se as cópias de segurança são confiáveis, quais serviços são críticos e que ações podem agravar a interrupção. É exemplo hipotético, não sequência universal.

## Distinções com termos próximos

Um **procedimento operacional** explica uma tarefa delimitada; o playbook reúne ou referencia procedimentos e acrescenta gatilhos, papéis, decisões e escalonamento para um cenário. Um **plano de resposta a incidentes** costuma definir governança e fases gerais, enquanto o roteiro trata uma família de eventos com maior especificidade. Eles se complementam.

Um **checklist** lista verificações e pode integrar o roteiro, mas costuma explicar menos sobre critérios e alternativas. **Runbook** é frequentemente empregado para instruções operacionais técnicas; algumas organizações usam o termo como sinônimo de playbook. Mais que o rótulo, importa se o documento orienta uma operação delimitada ou uma resposta coordenada. **Política** define regras; **árvore de decisão** representa caminhos condicionais. Nenhum desses formatos, isoladamente, necessariamente cobre responsabilidades, registros, comunicação e recuperação.

## Limitações e erros de interpretação

Um playbook não prevê todos os incidentes nem elimina análise. Cenários novos combinam roteiros e sinais incompletos. Se o caso sair do escopo ou uma ação tiver efeitos imprevistos, adapte e escale. Seguir instruções literalmente pode causar interrupção, perda de evidências ou atraso.

Outro erro é tratar o roteiro como prova de conformidade ou de prontidão. A existência de um arquivo atualizado não demonstra que as pessoas sabem encontrá-lo, que têm acesso durante uma indisponibilidade ou que as dependências descritas continuam válidas. O inverso também merece cuidado: uma resposta que se desviou do documento pode ter sido justificável diante de fatos novos. A avaliação deve perguntar o que a equipe sabia no momento, que alternativas estavam disponíveis e por que a decisão foi tomada, em vez de julgar apenas com conhecimento posterior.

A automação pode executar partes repetitivas de um playbook, mas amplia a importância de limites claros. Ações automáticas precisam de condições de disparo compreensíveis, permissões proporcionais, registros e mecanismos de interrupção ou revisão quando o impacto for significativo. Um alerta impreciso que dispara bloqueios em massa pode causar dano operacional. Automatizar não transforma um julgamento incerto em certeza nem remove a responsabilidade sobre o resultado.

Também é possível que o roteiro fique tão abrangente que se torne difícil de usar. Um documento longo, sem índice, prioridades ou referências rápidas, pode atrasar a decisão em uma situação urgente. No extremo oposto, um roteiro curto demais pode omitir critérios, responsáveis e exceções críticas. Exercícios com pessoas que realmente ocupariam os papéis de resposta ajudam a testar clareza e acesso; a revisão deve registrar mudanças no ambiente, incidentes aprendidos e pontos em que o texto induziu interpretações diferentes.

## Implicações para a resposta a incidentes

Um roteiro compartilhado estabelece vocabulário e sequência de coordenação: indica a etapa em curso, decisões pendentes e responsáveis. Isso reduz dependência da memória individual e facilita integrar pessoas chamadas durante o caso, desde que o documento esteja acessível e corresponda à realidade. Registre desvios e seus motivos; um roteiro desconhecido ou contraditório pode ampliar a confusão.

Na investigação, indique fontes autorizadas e responsáveis pela coleta, respeitando acesso, retenção e privacidade. Evite concentrar dados sensíveis em cópias do documento ou canais amplos. Na comunicação, diferencie confirmado, hipótese e questão em apuração. O roteiro pode indicar quem aprova mensagens e quando envolver especialistas jurídicos, de privacidade ou contratuais; não deve inventar obrigações universais, pois elas variam conforme contexto.

Após a recuperação, compare o processo previsto com a resposta: gatilhos claros, responsáveis disponíveis, informação faltante, efeitos imprevistos e decisões sem autoridade definida. Converta as lacunas em alterações concretas, com responsável e revisão posterior. O objetivo é melhorar o uso futuro.

## Perguntas frequentes

### Todo incidente exige um playbook próprio?

Não. Um fluxo geral pode bastar para situações simples; cenários recorrentes ou de alto impacto justificam orientação específica e participação de várias áreas. O formato deve caber na capacidade real da equipe.

### Quem deve escrever e aprovar?

A equipe de resposta pode coordenar a elaboração, com contribuições de responsáveis por sistemas, operações e áreas afetadas. Quem aprova deve ter autoridade sobre as medidas descritas. Designe também um responsável pela manutenção.

### Quando revisar e como avaliar?

Revise após mudanças relevantes, exercícios e incidentes que revelem lacunas; não há frequência universal. Em exercícios, observe se as pessoas encontram o documento, entendem gatilhos, identificam responsáveis e chegam a decisões com as informações previstas. Registre dúvidas e atrasos e confirme que as correções foram incorporadas.

### É preciso seguir cada passo literalmente?

O roteiro orienta, mas fatos novos podem exigir desvio. Registre a razão, avalie o efeito e escale quando necessário. Adesão cega é inadequada diante de risco, evidência nova ou decisão autorizada mais recente.

## Relação com o capítulo 2

No contexto do capítulo 2 da versão original, o conceito pode ser lido como a ponte entre uma estratégia geral de resposta e as decisões concretas diante de um evento. O roteiro dá forma documentada a responsabilidades, critérios e ações; seu valor, porém, depende de ser exercitado, mantido e aplicado com atenção às evidências do caso. Esta seção apresenta o conceito de modo independente e não reproduz o texto do manuscrito.
