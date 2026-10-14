# Threat Intelligence

## Definição

Threat Intelligence, ou inteligência de ameaças, é o processo de transformar informações sobre adversários, campanhas e técnicas em contexto útil para decisões defensivas. O resultado não é simplesmente uma coleção de endereços IP, domínios, hashes ou nomes de grupos. É uma compreensão organizada do que pode ameaçar uma organização, de como essa ameaça se relaciona com seus sistemas e de quais ações são razoáveis diante das evidências disponíveis.

A expressão também designa os dados e análises produzidos pelo processo. Convém distinguir informação bruta, análise contextualizada e decisão: uma lista recebida de um fornecedor é informação; relacioná-la a uma atividade observada, avaliar sua confiabilidade e relevância local é análise; bloquear, investigar ou monitorar é uma decisão. A inteligência apoia a decisão, mas não a substitui.

## O que transforma informação em inteligência

Uma observação ganha valor quando interpretada em relação a uma pergunta defensiva. “Este domínio apareceu em uma campanha contra organizações como a nossa?” pode orientar uma investigação. “Este domínio aparece em algum feed?” é menos útil: a presença em uma fonte não esclarece se representa risco para os ativos em questão.

Uma análise consistente considera:

- **Origem:** quem coletou ou publicou a informação, por qual método e com quais limitações.
- **Tempo:** quando o fato foi observado, quando a análise foi produzida e por quanto tempo permanece plausível.
- **Contexto:** campanha, comportamento, infraestrutura ou atividade relacionados.
- **Confiança:** força do suporte para a conclusão, dada a qualidade e independência das evidências.
- **Relevância:** relação possível com os sistemas, dados, usuários e objetivos da organização.
- **Ação:** que decisão pode ser apoiada e quais custos acompanham essa escolha.

Esses elementos podem estar em uma nota curta, sem relatório formal. Sem eles, uma informação pode parecer precisa e ainda induzir erro. Um endereço pode ter sido malicioso em certo período, depois ser usado legitimamente ou compartilhado por operadores distintos. Um hash identifica um arquivo específico, mas pode dizer pouco sobre outras partes da atividade. Uma atribuição pode ser plausível sem ser necessária para conter o incidente.

## Como funciona o ciclo defensivo

O trabalho começa com uma necessidade de decisão e retorna à equipe que precisa agir. Em linhas gerais, envolve formular perguntas, coletar informação pertinente, avaliar sua qualidade, relacioná-la ao ambiente, comunicar a conclusão e observar o efeito da resposta. Não é uma sequência burocrática nem precisa ser igual em todas as organizações.

### Requisitos e coleta

O ponto de partida é saber o que precisa ser decidido. A resposta a incidentes pode querer determinar se um alerta combina com uma campanha conhecida; operações de segurança podem priorizar indicadores presentes nos registros; a gestão pode compreender que ameaças afetam processos críticos. Cada público precisa de nível de detalhe e prazo diferentes.

Perguntas delimitadas evitam coleta indiscriminada. “O que está acontecendo?” pode iniciar uma crise, mas deve dar lugar a questões verificáveis: quais ativos foram afetados, que comportamentos foram observados, que hipótese explica os fatos e que evidência mudaria a avaliação? Quem precisa agir em minutos requer uma resposta concisa; uma revisão de risco pode exigir contexto de longo prazo.

As fontes incluem telemetria interna, registros de rede e autenticação, alertas, análise de artefatos, relatos de equipes, avisos de fornecedores e compartilhamento entre organizações. Elas têm alcances diferentes: dados locais mostram eventos no ambiente observado; relatórios externos podem contextualizar técnicas ou campanhas. Nenhuma fonte oferece necessariamente a visão completa.

Coletar não é validar. Importa saber se a fonte relata observação direta ou inferência, se houve corroboração, se é possível erro e se a informação continua atual. Duas publicações que repetem a mesma alegação não são necessariamente confirmações independentes.

### Análise e retorno

Na análise, evidências são comparadas com hipóteses concorrentes. Uma técnica comum pode surgir em atividades sem relação entre si; similaridade parcial não comprova vínculo com uma campanha. A conclusão deve separar observações, interpretações e lacunas, registrando a confiança e, quando útil, o que poderia alterá-la.

A comunicação deve servir à decisão. Monitoramento pode precisar de condições para buscar atividade nos registros; resposta a incidentes, de hipóteses priorizadas; liderança, de impacto e opções. Disseminar não significa enviar todos os dados a todos: origem, restrições de compartilhamento e necessidade de acesso também contam.

O retorno operacional fecha o ciclo. Falsos positivos, hipóteses descartadas e efeitos colaterais de uma ação devem atualizar a avaliação e os requisitos futuros. Sem retorno, a equipe pode acumular material sem saber se ajudou a decidir.

## Uso na investigação e na defesa

Durante um incidente, a inteligência ajuda a ampliar ou restringir hipóteses. Se um registro mostra conexão com um domínio sinalizado, a equipe pode buscar outros eventos, identificar ativos e usuários envolvidos e comparar horários, processos e sinais de autenticação. A informação externa pode sugerir o que procurar, mas a ausência desses sinais não prova que nada ocorreu: a visibilidade pode ser incompleta ou a atividade pode ter mudado.

Uma hipótese deve ser confrontada com evidências locais. Um relato sobre determinada técnica pode orientar a busca por eventos compatíveis, mas encontrar um elemento isolado raramente basta para confirmar comprometimento. A investigação registra o que observou, em quais fontes, durante qual janela e com quais limitações.

### Exemplo hipotético

Uma empresa recebe aviso de que certo domínio foi associado a uma campanha de roubo de credenciais. O aviso informa fonte e data, mas não prova que a empresa foi alvo. A equipe verifica consultas DNS e conexões nos registros disponíveis, identifica ativos e usuários e examina horário, processo de origem, eventos próximos e autenticações anômalas.

Se não encontra ocorrência, registra que não observou atividade nas fontes e na janela examinadas, sem alegar ausência absoluta. Uma conexão isolada pode indicar vários comportamentos e não demonstra, sozinha, que uma credencial foi capturada. Se surgirem autenticações suspeitas e outros indícios, a hipótese se fortalece e pode justificar contenção, proteção de contas e busca ampliada, conforme os procedimentos da organização. O indicador orienta a investigação; origem, validade, evidência local e relação com os ativos sustentam a decisão.

## Evidências e indicadores

Indicadores de comprometimento (IOCs) são observáveis que podem sugerir atividade maliciosa, como endereços, domínios, URLs, hashes, nomes de arquivos e outros artefatos. São parte possível da inteligência, não seu sinônimo. Podem apoiar busca, alerta ou bloqueio, mas têm alcance limitado e validade variável.

Um indicador isolado tem pouco valor sem origem, validade temporal e relação com os ativos protegidos. Pergunte quem o observou, em que circunstâncias, quando foi visto, se a associação é direta ou inferida, se há uso legítimo possível, se é específico o bastante para automatização e qual seria o custo de um bloqueio incorreto. Uma correspondência pode bastar para iniciar triagem, mas não necessariamente para interromper um serviço crítico.

Registros de autenticação, DNS, proxy, firewall, endpoint, correio e aplicações, assim como artefatos preservados conforme o processo de investigação, ajudam a testar hipóteses. A disponibilidade e retenção variam. “Não encontramos” quer dizer que as fontes consultadas não mostraram correspondência, não que nada ocorreu.

## Distinções com termos próximos

### Dado, informação e inteligência

Um dado é uma observação ou valor; informação é o dado organizado para compreensão; inteligência acrescenta avaliação e contexto orientados a uma decisão. Essa distinção é útil, embora o vocabulário varie. Um feed formatado não se torna análise apenas por estar classificado em uma ferramenta.

## Limitações e erros de interpretação

A inteligência pode estar incompleta, atrasada, enviesada por lacunas de coleta ou inadequada a um ambiente específico. Relatórios externos podem descrever uma campanha de forma agregada, sem permitir concluir que um evento local está relacionado. Fontes divergem porque observam períodos, vítimas ou aspectos diferentes; deve-se examinar o que cada uma sustenta, não escolher automaticamente a mais conhecida.

Erros comuns incluem tratar uma correspondência com indicador como confirmação de comprometimento, tomar ausência de indicador como prova de segurança e confundir confiança na fonte com confiança em cada conclusão. Uma fonte geralmente confiável pode publicar hipótese preliminar; uma fonte nova pode oferecer evidência verificável. A confiança deve se referir à afirmação concreta.

Nomes de grupos e classificações podem sugerir fronteiras claras onde há sobreposição, ferramentas compartilhadas ou atividade sem atribuição. Categorias organizam análise, mas não devem esconder incerteza. A defesa pode agir sobre comportamento observado sem decidir quem o executou.

Excesso de indicadores gera ruído, alertas repetidos e bloqueios com efeitos colaterais: serviços legítimos podem ser afetados e equipes podem perder tempo. A adoção deve considerar impacto, reversibilidade, cobertura dos controles e possibilidade de monitorar antes de bloquear. Pressa não elimina a avaliação das consequências.

## Implicações para resposta a incidentes

A inteligência pode priorizar investigação, ampliar escopo e sugerir possíveis passos de uma atividade, sempre vinculada às evidências do caso. Um relatório sobre técnicas associadas a uma campanha indica onde procurar, não prova que todas foram usadas. Registre hipóteses, evidências favoráveis e contrárias, fontes e lacunas.

A resposta pode variar de monitoramento a contenção. Uma ocorrência de baixa confiança pode justificar enriquecimento; evidência local forte e impacto potencial elevado podem justificar contenção urgente, mesmo sem atribuição. A decisão considera plano de resposta, criticidade, custo de interrupção e risco de esperar. Inteligência informa essa ponderação, mas não substitui autoridade ou julgamento operacional.

Registre a justificativa das ações: fonte, contexto, período e motivo para bloquear ou monitorar. Ao encerrar o incidente, compare hipóteses com os fatos, identifique dados ausentes e ajuste detecções. O compartilhamento posterior deve distinguir observação de inferência e respeitar obrigações, confidencialidade e proteção de dados; remover contexto demais pode inutilizar a informação, e divulgar detalhes excessivos pode criar risco.

## Perguntas frequentes

### Um feed de indicadores já é Threat Intelligence?

É uma fonte possível. Por si só, não demonstra avaliação de origem, atualidade, contexto ou relevância local. Integrá-lo a uma ferramenta facilita busca e bloqueio, mas não transforma cada item em conclusão confiável.

### Toda inteligência precisa identificar o adversário?

Não. Muitas decisões dependem do comportamento, impacto e evidência local. Se a identidade não for necessária ou estiver mal sustentada, é mais rigoroso deixá-la em aberto.

### Quando um indicador deve ser bloqueado?

Não há regra universal baseada apenas no tipo de indicador. Considere qualidade, atualidade, confiança da associação, risco de falso positivo e efeito operacional. Monitorar ou validar pode ser adequado; risco grave e evidência suficiente podem exigir ação imediata conforme o plano da organização.

### Como avaliar uma análise?

Verifique se separa fatos de inferências, informa origem e datas, explica contexto, reconhece lacunas e sustenta conclusões. A confiança é específica: uma publicação pode descrever um artefato com precisão e ter baixa certeza sobre a campanha associada.

## Relação com o capítulo 5

Na versão original do manuscrito, o capítulo 5 oferece o contexto relacionado a este verbete. A leitura conjunta conecta a transformação de informação em decisão defensiva à aplicação do conceito no confronto cibernético. Este texto complementa esse contexto com critérios de uso; não substitui evidências que a equipe precisa reunir no caso concreto.
