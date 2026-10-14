# Weaponization

## Conceito

Weaponization, traduzido neste glossário como preparação do artefato, é a fase da Cyber Kill Chain em que se prepara um meio técnico para uso posterior na operação de ataque. O meio pode ser um arquivo, um conjunto de componentes, uma configuração ou outro recurso que será empregado no curso da operação. O termo descreve uma etapa de preparação; por si só, não afirma que o meio chegou à vítima, foi executado, produziu efeito ou sequer foi usado com sucesso.

A palavra artefato pode sugerir um único objeto acabado, como um executável, mas a atividade não precisa se resumir a isso. O que importa é a relação entre o recurso preparado e seu emprego pretendido na operação. Um componente pode ser reunido a outros, adaptado a um contexto ou organizado para que uma etapa posterior possa utilizá-lo. A análise defensiva deve evitar pressupor um formato específico, uma técnica particular ou uma sequência invariável.

A Cyber Kill Chain é um modelo que organiza atividades de uma operação em fases conceituais. Nesse enquadramento, weaponization ocupa o espaço entre a escolha do meio de ataque e as etapas voltadas a fazê-lo chegar ao alvo. A ordem ajuda a raciocinar sobre a operação, mas não obriga todo incidente a apresentar fases separadas, visíveis ou lineares. Atividades podem ser simultâneas, repetidas, terceirizadas ou realizadas fora da infraestrutura observada pela organização.

## O que a fase explica

A fase ajuda a formular uma pergunta sobre a preparação do adversário: que meio técnico foi deixado pronto para uma utilização posterior? Não responde sozinha a perguntas como quem o preparou, em que local, quando, para qual vítima ou se a preparação foi concluída. Essas respostas dependem de evidências e de contexto. A classificação é uma hipótese analítica útil, não uma prova automática de intenção ou autoria.

## Lugar na sequência do ataque

A utilidade do modelo está em conectar ações que, vistas isoladamente, parecem desconexas. Uma equipe pode identificar atividade de preparação, mas ainda não ter evidência de entrega ou de execução na rede da vítima. Em outro caso, pode encontrar um artefato no endpoint sem conseguir determinar quando ou onde ele foi preparado. O modelo permite descrever essas lacunas sem preencher o que não se sabe.

Weaponization antecede conceitualmente a entrega na representação tradicional da cadeia. Isso não significa que toda preparação seja concluída muito antes, nem que exista sempre um intervalo observável entre as duas atividades. Um recurso pode ser preparado pouco antes do uso, ajustado durante uma campanha ou refeito após uma tentativa frustrada. A investigação deve registrar a cronologia sustentada pelas fontes disponíveis, em vez de converter a ordem didática do modelo em uma linha do tempo presumida.

A fase pode ocorrer fora do ambiente da vítima. Um serviço externo, uma infraestrutura controlada por terceiros ou um sistema do próprio adversário pode participar da preparação, sem deixar registros nos coletores da organização alvo. Por isso, a falta de evidência local sobre essa fase não exclui o ataque. Ao mesmo tempo, essa possibilidade não autoriza concluir que houve preparação externa: é uma explicação compatível com a ausência de logs, entre várias outras, e precisa ser diferenciada de falhas de coleta, retenção insuficiente ou simples inexistência da atividade.

## Por que o conceito é útil

O termo é especialmente útil quando equipes precisam separar o preparo de um recurso de seu transporte, acesso ou efeito. Essa separação melhora a comunicação: “há indícios de preparação” é uma afirmação mais limitada do que “o artefato foi entregue” ou “o ataque foi executado”. Em relatórios, reuniões de incidente e linhas do tempo, usar a fase com esse cuidado evita que uma hipótese sobre o estágio inicial pareça uma confirmação de comprometimento.

## Evidências e investigação

A fase raramente aparece como um evento único com o rótulo “weaponization” nos registros da vítima. Em geral, o investigador infere a preparação ao combinar evidências indiretas, cada uma com limitações próprias. O artefato recuperado pode revelar características úteis para comparação, mas não necessariamente onde foi produzido. Metadados podem ser alterados, copiados ou perdidos. Uma data embutida em um arquivo não deve ser tratada como horário confiável sem validação independente.

Fontes que podem contribuir incluem:

- Cópias preservadas do artefato, com hash calculado no processo de aquisição e cadeia de custódia documentada.
- Registros de endpoint, gateway de correio, proxy, repositório de arquivos ou ferramenta de segurança que indiquem quando e em que contexto o objeto foi observado.
- Informações de proveniência, assinatura, atributos e estrutura do arquivo, avaliadas como sinais sujeitos a falsificação ou ausência.
- Comparação com amostras semelhantes encontradas em outros ativos ou em incidentes relacionados, respeitando a qualidade e a origem desses dados.
- Telemetria de desenvolvimento, distribuição ou armazenamento que tenha sido obtida legitimamente e possa esclarecer a sequência de preparação.

Nenhuma dessas fontes, isolada, costuma estabelecer toda a fase. Hashes ajudam a reconhecer uma cópia idêntica, mas uma alteração mínima muda o valor e pode impedir a correspondência. Similaridade estrutural pode sugerir relação entre amostras, mas também gerar agrupamentos incorretos. Assinaturas e nomes podem ser falsificados; sua ausência tampouco prova malícia. A análise deve documentar método, escopo, horários, origem dos dados e grau de confiança, além de distinguir observação direta de inferência.

## Perspectiva defensiva

## Exemplos hipotéticos

**Exemplo hipotético 1 — arquivo preparado antes do recebimento.** Uma equipe recebe uma amostra suspeita anexada a uma mensagem e confirma que um controle a colocou em quarentena. A equipe preserva o arquivo e os registros do gateway, mas não possui telemetria de onde ele foi construído. É razoável registrar que há um artefato associado à tentativa e que o meio estava disponível para entrega. Não é possível afirmar, só com esses dados, quem fez a preparação, quando ocorreu ou se o anexo foi executado em outro sistema.

**Exemplo hipotético 3 — bloqueio sem comprometimento confirmado.** Uma plataforma de segurança impede a gravação de um objeto suspeito no endpoint. A organização pode afirmar que o controle bloqueou aquela tentativa conforme o evento registrado. Para determinar se houve outras vias de acesso, deve correlacionar a ocorrência com mensagens, conexões, outros endpoints e alertas relacionados. O bloqueio é uma evidência importante, mas não demonstra por si só que a operação inteira terminou ali.

## Diferenças entre termos próximos

**Preparação do artefato e entrega.** Preparar é deixar um meio técnico pronto para emprego posterior. Entregar é fazê-lo chegar ao ambiente ou usuário alvo, conforme o modelo adotado. Um artefato preparado pode nunca ser enviado; um objeto recebido pode ter sido obtido de um repositório legítimo e não ter sido preparado especificamente para aquela tentativa. Evidências de uma etapa não devem ser usadas como substitutas automáticas da outra.

**Preparação do artefato e exploração.** Exploração diz respeito ao uso de uma fraqueza para obter um efeito, como execução ou acesso, segundo o contexto técnico. A preparação pode envolver recursos relacionados a uma exploração, mas não equivale a explorar. Encontrar um arquivo que parece preparado para uma finalidade não comprova que a vulnerabilidade foi acionada ou que houve execução bem-sucedida.

**Preparação do artefato e desenvolvimento de malware.** Desenvolvimento descreve a criação ou evolução de software malicioso como atividade mais ampla. Weaponization, na cadeia, é uma fase funcional da operação: preparar um meio para uso posterior. Pode haver sobreposição, mas os termos não são sinônimos perfeitos. Nem todo desenvolvimento resulta em uma operação identificada, e a preparação de um meio pode usar recursos existentes, sem que o investigador veja um processo de desenvolvimento.

**Preparação do artefato e comprometimento.** Comprometimento é uma condição ou resultado sobre ativos e contas, definida pelo contexto da investigação. A fase de preparação não confirma comprometimento. Uma operação pode ser interrompida antes de chegar à vítima; também pode haver comprometimento sem evidência preservada da preparação.

## Limitações e erros de interpretação

Um erro frequente é tratar cada fase como uma caixa obrigatória, com começo e fim nítidos. A Cyber Kill Chain simplifica operações complexas para facilitar a análise. Casos reais podem não seguir uma sequência única, podem repetir ações e podem deixar evidências em fases diferentes ao mesmo tempo. A classificação deve servir à explicação, não substituir a cronologia observada.

Outro erro é supor que a ausência de sinais locais comprova que nada ocorreu. A preparação pode estar fora do alcance dos sensores da vítima, mas a ausência também pode resultar de lacunas de registro, relógios dessincronizados, retenção curta, coleta incompleta ou destruição de evidência. O relatório deve explicitar qual dessas possibilidades foi avaliada e quais permanecem abertas.

O oposto também é arriscado: observar um artefato e atribuir-lhe automaticamente intenção maliciosa ou vínculo com um ator conhecido. Uma característica isolada raramente sustenta atribuição. Nomes, domínios, certificados, padrões de código ou semelhança visual podem ser imitados, reutilizados ou compartilhados. Atribuição exige um conjunto mais amplo de evidências, análise de hipóteses alternativas e linguagem calibrada ao grau de confiança.

Por fim, a fase pode ser útil para comunicação mesmo quando não é possível reconstruí-la. Isso não significa preencher a lacuna com uma narrativa plausível. É melhor dizer que a preparação não foi observada diretamente, indicar o que sustenta a inferência e apontar os dados ausentes do que relatar uma sequência especulativa como fato.

## Implicações para resposta a incidentes

Ao encontrar um possível artefato preparado, a equipe deve preservar evidências adequadas, delimitar os sistemas e contas relacionados e avaliar se houve entrega, execução ou efeito. A classificação inicial pode mudar quando novos dados aparecem. O registro do incidente deve manter essa evolução: hipótese inicial, evidência que a sustentava, evidência posterior e motivo para revisar a avaliação.

## Perguntas frequentes

### A organização precisa observar weaponization para confirmar um ataque?

Não. A organização pode confirmar etapas posteriores por evidências próprias, mesmo sem observar a preparação. Também pode ter indícios de preparação sem confirmação de entrega ou execução. O relatório deve descrever cada afirmação segundo a evidência disponível.

### Um arquivo suspeito encontrado no endpoint prova que ele foi preparado para atacar aquela organização?

Não. O arquivo pode ter sido recebido de outra forma, copiado entre sistemas ou estar presente por motivo legítimo. A finalidade e a relação com uma operação exigem contexto, correlação e avaliação de hipóteses alternativas.

### Se não há registros locais da fase, o incidente pode ser descartado?

Não com base apenas nessa ausência. Primeiro é preciso avaliar cobertura, retenção, integridade dos registros e quais partes da operação ocorreram fora do ambiente. A conclusão deve refletir o escopo efetivamente investigado.

## Relação com o capítulo original

No capítulo 1 da versão original de *Confronto Cibernético*, o conceito se encaixa na leitura das fases da Cyber Kill Chain. Para o glossário, o ponto central é tratar weaponization como preparação de um meio técnico para uso posterior e manter explícita a diferença entre essa preparação, a entrega e os efeitos observados no ambiente da vítima.
