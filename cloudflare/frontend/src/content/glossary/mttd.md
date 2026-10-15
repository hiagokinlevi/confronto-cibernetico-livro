# MTTD

## Definição e escopo

MTTD é a sigla de *Mean Time to Detect*, ou tempo médio para detectar. Em segurança defensiva, mede o intervalo médio entre o início estimado de um evento e o momento em que esse evento é detectado. A palavra “evento” pode designar uma atividade maliciosa, uma falha relevante, uma exposição ou outra condição que a organização decidiu monitorar. A métrica não informa, por si só, se a detecção foi correta, se alguém compreendeu a gravidade, se houve contenção nem se o impacto foi pequeno. Ela resume uma duração definida sob regras determinadas.

A ideia é simples; a medição não é. Para cada caso incluído, é preciso identificar dois marcos temporais: quando a condição começou, conforme as evidências disponíveis, e quando os mecanismos de defesa ou as pessoas a reconheceram como algo que exigia atenção. A diferença entre esses horários é o tempo de detecção daquele caso. O MTTD resulta da agregação dos intervalos escolhidos. Sem uma definição consistente de início, detecção, população e janela de análise, dois valores chamados MTTD podem descrever coisas muito diferentes.

“Detecção” também precisa ter um significado operacional. Uma ocorrência pode produzir um registro em uma ferramenta sem que ninguém o veja; pode gerar um alerta que é descartado como ruído; ou pode ser identificada durante uma análise posterior, sem alerta inicial. Uma equipe pode considerar detecção o primeiro sinal automatizado que atende a um critério, enquanto outra considera o momento em que um analista valida que há um incidente. Ambas as convenções podem ser úteis, mas respondem a perguntas distintas. A definição adotada deve acompanhar o número publicado.

## Como calcular e documentar

Para um conjunto de ocorrências com início e detecção conhecidos, calcula-se cada duração e depois sua média aritmética: somam-se os intervalos e divide-se pela quantidade de casos incluídos. O resultado costuma ser apresentado em uma unidade compreensível, como horas ou dias. Essa operação não elimina as decisões anteriores. É necessário estabelecer previamente quais casos pertencem ao conjunto, qual fonte fornece cada horário, qual fuso horário será usado e como serão tratados registros corrigidos ou duplicados.

O início raramente é observado diretamente. Muitas vezes ele é estimado retrospectivamente a partir de trilhas de auditoria, telemetria de endpoint, registros de autenticação, alterações em sistemas, mensagens de usuários ou artefatos preservados em uma investigação. Convém distinguir “primeira atividade observada” de “início provável”: a evidência mais antiga que sobreviveu não prova que a atividade começou naquele instante. Se a estimativa tiver uma margem de incerteza, conservar essa informação é mais honesto do que registrar um horário com precisão aparente de segundos.

O marco final depende da pergunta. Se a intenção é avaliar cobertura de monitoramento, pode ser o primeiro alerta que satisfez um critério documentado. Se a intenção é medir reconhecimento humano, pode ser a primeira triagem que identificou a natureza suspeita do sinal. Se o objetivo é acompanhar o processo inteiro até a confirmação, esse instante deve ser medido em outra série ou explicitado como regra. Não se deve trocar silenciosamente o marco final entre períodos, equipes ou categorias de incidente.

## O que o MTTD mostra — e o que não mostra

Um MTTD menor pode indicar que sinais relevantes estão chegando mais cedo à equipe ou que controles estão reconhecendo uma atividade antes. Isso pode ampliar o tempo disponível para investigar e limitar consequências. Ainda assim, uma redução não demonstra automaticamente melhoria: pode decorrer de uma população com eventos mais fáceis de reconhecer, de um marco inicial estimado de forma diferente ou da exclusão de casos longos. O número serve como indicador de tendência e como convite à análise dos casos, não como explicação causal isolada.

A média é sensível a valores extremos. Alguns eventos detectados rapidamente podem coexistir com um caso que permaneceu sem reconhecimento durante muito tempo. A média pode subir por causa desse caso, ou parecer aceitável quando muitos casos curtos diluem poucos atrasos graves. Por isso, é útil acompanhar a distribuição: quantidade de casos, mediana, faixas ou percentis, além de exemplos qualitativos. Essas estatísticas complementares não substituem a definição; ajudam a evitar que um único número esconda formatos diferentes de desempenho.

MTTD não mede diretamente a qualidade do diagnóstico, o tempo até a contenção, a duração total da exposição, a perda financeira ou a eficácia da recuperação. Um alerta precoce que não seja triado pode não produzir ação útil. Um evento pode ser detectado tarde, mas contido depressa; outro pode ser detectado cedo e permanecer ativo por falhas de coordenação. Cada uma dessas dimensões requer observação própria. Interpretar MTTD como uma nota geral da equipe confunde etapas diferentes e pode incentivar comportamentos contraproducentes, como priorizar alertas fáceis em detrimento de investigações complexas.

## Onde aparece na investigação defensiva

Durante a resposta a incidentes, a equipe reconstrói uma cronologia para entender o que ocorreu, quais sistemas foram afetados e que decisões foram tomadas. O tempo de início provável ajuda a ordenar eventos; o horário da primeira detecção ajuda a localizar quando a organização passou a ter uma oportunidade concreta de investigar. Comparar os dois permite perguntar quanto tempo a atividade ficou sem reconhecimento e quais controles ou processos poderiam ter produzido sinal antes.

## Exemplo hipotético

Suponha que uma organização investigue um acesso indevido a uma conta. Uma trilha confiável mostra atividade suspeita às 02h, mas a equipe não consegue determinar se houve atividade anterior; um alerta de comportamento aparece às 05h e é encaminhado para análise; a confirmação ocorre às 07h. Se a regra de detecção for o primeiro alerta acionável, o intervalo observado é de três horas. Se a pergunta for quando a equipe reconheceu um incidente confirmado, o intervalo é de cinco horas. Nenhum dos números é “o MTTD verdadeiro” sem a convenção correspondente. A investigação deve registrar a incerteza do início e explicar o marco final usado.

## Distinções com métricas próximas

MTTD é frequentemente comparado a MTTI (*Mean Time to Identify*), MTTA (*Mean Time to Acknowledge*) e MTTR (*Mean Time to Respond* ou *Recover*, conforme a convenção). Os nomes e as definições variam entre organizações e ferramentas, portanto não basta comparar siglas. Em geral, reconhecimento, confirmação, início de resposta, contenção e recuperação são marcos diferentes. Um painel precisa nomeá-los e definir o que cada um significa no processo local.

O MTTD se concentra no intervalo entre início estimado e detecção. O tempo de resposta costuma começar após algum marco de detecção ou confirmação e terminar em outro marco de ação, como contenção. Já o tempo de recuperação observa o retorno a uma condição operacional definida. Mesmo quando uma organização chama esses intervalos por siglas semelhantes, cada métrica deve ter início e fim descritos. Somar ou comparar valores com fronteiras diferentes gera conclusões enganosas.

A taxa de detecção responde a outra pergunta: que proporção de eventos relevantes foi reconhecida, sob determinado critério? O MTTD considera a duração dos casos que entraram no cálculo. Se só forem incluídos eventos detectados, os eventos ainda não percebidos ficam invisíveis e podem fazer o desempenho parecer melhor. Taxa, volume de casos não detectados e MTTD se complementam. Nenhum deles, isoladamente, descreve toda a capacidade defensiva.

## Casos sem horário conhecido e dados censurados

O horário de início pode ser desconhecido porque não há registros suficientes, porque o evento começou antes do período de retenção ou porque a atividade não deixa um sinal observável confiável. Não atribua a esses casos um horário arbitrário apenas para preencher o campo. O resultado passaria a refletir a conveniência do preenchimento e não evidência. Uma opção é excluí-los do cálculo principal, informando a quantidade e a proporção; outra é apresentar uma análise separada com limites ou categorias de incerteza, quando a metodologia comportar isso.

## Limitações e erros de interpretação

Há ainda risco de otimização do indicador. Se a equipe for avaliada somente pelo MTTD, pode haver pressão para classificar sinais incertos como detecções, excluir casos sem horário, privilegiar eventos simples ou encerrar a medição no alerta inicial mesmo quando a investigação não o reconheceu. O indicador deve apoiar aprendizagem e alocação de recursos, não substituir avaliação de qualidade. Revisões de casos, critérios de precisão e acompanhamento dos não detectados ajudam a manter a métrica ligada ao propósito defensivo.

## Uso na melhoria da defesa e na resposta

## Perguntas frequentes

### Um MTTD baixo significa que a organização está segura?

Não. Significa apenas que, para os casos incluídos e segundo os marcos adotados, o intervalo médio foi menor. A métrica não mede todas as ameaças, não detecta atividades que ficaram fora da população e não informa se a resposta foi eficaz. Deve ser lida com cobertura, qualidade de detecção, casos em aberto e resultados da resposta.

Depende da pergunta, e a regra deve ser declarada. O primeiro alerta acionável ajuda a avaliar a geração do sinal; a confirmação ajuda a avaliar o reconhecimento analítico. Se ambas as etapas forem importantes, acompanhe-as separadamente. Não altere o marco para fazer o resultado parecer melhor ou para compará-lo a uma série que mede outra etapa.

### Como lidar com um início que só pode ser estimado?

Registre a evidência, a estimativa e sua incerteza. Se houver apenas um limite temporal, preserve-o como limite em vez de inventar um instante. Exclua ou segmente casos sem horário estimável, informe quantos são e avalie se essa exclusão favorece artificialmente o resultado. Quando a investigação atualizar a estimativa, documente a revisão.

A média corresponde ao MTTD em seu sentido usual, mas pode ser puxada por durações extremas. A mediana informa o ponto central da distribuição e é menos sensível a esses extremos. Para gestão, muitas vezes é mais esclarecedor apresentar média, mediana, quantidade e distribuição, além de investigar atrasos importantes. A escolha não corrige problemas de definição ou de dados.

Eles não têm um tempo final de detecção observado. Devem aparecer como casos abertos, com idade observada ou tratamento estatístico apropriado, em vez de receber uma duração final inventada. Sua presença e o método de tratamento precisam ser visíveis para que a média dos casos concluídos não seja interpretada como retrato de todos os eventos.

## Relação com o capítulo 9

Na organização da versão original, o capítulo 9 é o ponto relacionado a esta métrica. O verbete oferece uma referência para ler qualquer número de MTTD com atenção às evidências, aos marcos temporais e às exclusões. Em uma discussão sobre capacidade defensiva, a pergunta produtiva não é somente “qual foi a média?”, mas também “o que foi contado, o que ficou de fora e em que etapa se perdeu tempo?”.
