# Nessus

## Conceito e finalidade

Nessus, também chamado de scanner Nessus, é uma ferramenta de avaliação de vulnerabilidades que identifica exposições e configurações que precisam ser revistas. Em um processo defensivo, examina ativos dentro de um escopo definido e compara sinais observáveis — serviços acessíveis, versões anunciadas, respostas a verificações e, quando há credenciais autorizadas, configurações internas — com verificações mantidas para a ferramenta. O resultado é um conjunto de achados para análise, não um veredito independente sobre a segurança da organização.

“Vulnerabilidade identificada” exige interpretação. Às vezes, a ferramenta observa diretamente uma condição, como um serviço acessível ou uma configuração divergente. Em outros casos, infere a presença de uma vulnerabilidade a partir de versão, plataforma ou comportamento compatível com uma verificação. A inferência pode estar correta, mas inventários imprecisos, componentes corrigidos por retroporte, respostas alteradas por intermediários e diferenças entre o sinal detectado e a instalação real podem produzir conclusões equivocadas.

## Como funciona em uma avaliação defensiva

Uma avaliação começa com propósito, escopo e autorização. O escopo indica os endereços, nomes ou grupos de ativos que podem ser examinados e, se necessário, os períodos permitidos. A configuração seleciona verificações e opções pertinentes, como uso de credenciais aprovadas, intensidade e limites de execução. Uma varredura fora do escopo pode causar interrupções ou violar regras da organização; uma coleta superficial pode deixar de revelar aspectos internos que só aparecem com autenticação.

Um relatório associa achados a ativos e costuma apresentar descrição, evidência observada, referência técnica, severidade e recomendações. Os campos dependem da verificação e da configuração. A severidade automática é um sinal de triagem, não uma prioridade contextual: pode não refletir função do ativo, exposição efetiva, controles compensatórios, probabilidade local, impacto para o negócio ou risco de uma mudança. A equipe precisa ponderar essas dimensões.

## Usos e presença na investigação

O Nessus aparece em programas de gestão de vulnerabilidades, auditorias técnicas e revisões de configuração. Pode ajudar a compor uma linha de base, localizar exposições, apoiar a confirmação de correções e gerar evidências para revisão. Também permite comparar grupos de sistemas sob um método comum, desde que os parâmetros sejam documentados e suficientemente consistentes.

Em uma investigação de incidente, um relatório pode ajudar a reconstruir a superfície técnica de um ativo em certo momento. Um achado conhecido indica uma condição potencialmente relevante; não demonstra que houve exploração. A descoberta de serviços inesperados ou configurações pode orientar perguntas à equipe de resposta. Como a avaliação é parcial e datada, correlacione-a com registros de autenticação, telemetria de endpoint, fluxos de rede, alterações de configuração, inventário e cronologia do incidente.

O relatório pode alimentar um fluxo de tratamento: validação, classificação contextual, atribuição de responsável, decisão de mitigação ou correção, registro de eventual exceção e confirmação posterior. O scanner localiza condições e ajuda a acompanhá-las; o processo de gestão decide como tratá-las. Sem responsáveis, prazos e reavaliação, produzir relatórios repetidos aumenta o volume de trabalho sem necessariamente reduzir a exposição.

## Evidências e interpretação

Um relatório exportado, um registro de execução ou uma captura do console podem indicar o uso do Nessus. São úteis a identificação da avaliação, horário, escopo declarado, configuração, ativos alcançados, estado de conclusão e detalhes dos achados. Preserve, quando possível, uma cópia íntegra do relatório de origem: resumos e planilhas derivadas podem omitir campos, filtros, itens informativos ou evidências. Registre a origem do arquivo e as transformações feitas nele.

Um relatório antigo é evidência histórica, não retrato garantido do ambiente atual. Uma execução sem achados pode refletir escopo incompleto, host indisponível, tráfego bloqueado, credenciais insuficientes ou verificações não selecionadas. Não traduza “sem achados” por “seguro”. Endereços dinâmicos, balanceadores, máquinas efêmeras e mudanças de DNS também podem romper a correspondência entre o ativo registrado e o sistema examinado.

## Validação e priorização

Valide cada achado relevante em proporção ao impacto potencial e à incerteza. Confirme a identidade e a função do ativo; examine a evidência; determine se a condição se aplica à versão, ao componente e à configuração instalados. Em seguida, considere exposição, dados tratados, controles, dependências e consequência operacional. A prioridade combina esses elementos com a severidade técnica, sem transformar uma pontuação automática em ordem universal de trabalho.

Falso positivo é um achado que, após validação, não se aplica, talvez por versão inferida incorretamente ou correção do fornecedor que não alterou o identificador observado. Falso negativo é uma condição existente que a verificação não detectou, por falta de alcance, credenciais, suporte à plataforma ou cobertura. Esses termos descrevem o resultado da validação; não garantem que outros achados estejam corretos nem que todo o relatório seja inútil.

## Limitações e erros comuns

O Nessus avalia o que consegue observar pelas verificações e condições configuradas. Não é inventário infalível, análise completa de código, certificação de segurança ou prova de ausência de risco. Não substitui revisão arquitetural, testes de aplicação, monitoramento, gestão de identidade ou análise de ameaças. A cobertura pode ser desigual em dispositivos embarcados, aplicações proprietárias, plataformas pouco comuns e ativos que não respondem às verificações esperadas.

Uma recomendação genérica não é um plano de mudança pronto. Atualizações podem quebrar compatibilidade ou interromper serviços. O responsável técnico deve verificar dependências, testar em condições apropriadas, planejar reversão e escolher uma janela adequada. Se a correção não for viável de imediato, controles temporários e uma exceção com prazo e responsável podem reduzir a exposição enquanto a decisão é acompanhada.

Também é equivocado tratar pontuação como substituto de julgamento. A ferramenta não conhece necessariamente criticidade local, caminhos de acesso, dados sensíveis, tolerância à indisponibilidade ou risco residual. Usar só a severidade pode deixar condições importantes de lado e consumir recursos em itens de menor impacto contextual. A validação humana é parte do processo de avaliação.

## Exemplo hipotético

Uma equipe avalia servidores de uma rede corporativa. Uma execução autorizada associa uma vulnerabilidade à versão aparente de um serviço em servidor de aplicação e marca o achado como grave. A equipe não conclui imediatamente que o sistema está vulnerável nem que foi invadido. Confirma a identidade do ativo, revisa a data e o modo da coleta, examina a evidência e consulta o responsável sobre versão instalada e atualizações. Avalia também a exposição, a função do servidor e os controles existentes.

O cenário é hipotético e ilustra interpretação, não uma configuração ou comportamento garantido do produto. Na prática, sinais e meios de confirmação dependem do sistema, da verificação e dos procedimentos autorizados pela organização.

## Distinções com termos próximos

**Scanner de vulnerabilidades** é a categoria de ferramenta que automatiza verificações para localizar vulnerabilidades ou condições de segurança. Nessus é um produto dessa categoria; seu nome não deve ser usado para designar toda varredura ou todo o processo de gestão.

**Varredura de portas** busca caracterizar serviços que parecem aceitar conexões em endereços e portas. Esse dado pode compor uma avaliação, mas não equivale a identificar e validar vulnerabilidades. Uma porta aberta descreve exposição observada, não prova uma falha explorável.

**Gestão de vulnerabilidades** é o processo contínuo de descoberta, validação, priorização, tratamento, registro de exceções e acompanhamento. O scanner fornece insumos; não decide o tratamento nem garante que um item reportado foi corrigido.

**Análise de incidente** busca determinar o que ocorreu, quando, por quais meios e com quais consequências. Um achado pode contextualizar exposição, mas não estabelece causalidade, acesso não autorizado ou comprometimento. Essas conclusões dependem de evidências da investigação.

## Implicações para resposta a incidentes

Na triagem, um achado ajuda a formular hipóteses: a condição existia no período investigado? O ativo era acessível pela origem relevante? Que impacto poderia ter? Mantenha as perguntas como hipóteses até haver sustentação. Separe estado atual de histórico; uma configuração verificada após contenção ou correção não descreve automaticamente o estado anterior.

Se um achado confirmado puder estar relacionado ao incidente, coordene contenção, correção e preservação de evidências. Uma atualização pode ser urgente, mas também pode alterar artefatos ou a linha do tempo. A decisão depende do risco em curso, dos requisitos de preservação e do plano de resposta. Registre alterações, preserve cópias adequadas e distinga conclusões do scanner das obtidas por outras fontes.

A comunicação deve usar termos precisos. “O Nessus encontrou” relata a saída da ferramenta; “a condição foi confirmada” relata validação; “houve exploração” requer evidência de atividade. A nota de incidente deve indicar ativo, janela temporal, condição, método de confirmação, limitações, impacto conhecido ou desconhecido e ações realizadas. Essa distinção reduz alarmes indevidos sem minimizar uma exposição real.

## Perguntas frequentes

### Um achado crítico significa que o ativo foi comprometido?

Não. A classificação descreve uma condição potencial segundo os critérios aplicados; não prova exploração. Comprometimento requer evidências de atividade e impacto, como registros pertinentes, telemetria e artefatos preservados.

### Um relatório sem achados garante que o sistema está seguro?

Não. Significa que a execução não relatou achados no escopo, cobertura e condições usados. Falhas de alcance, autenticação ou suporte reduzem o que foi observado. Registre ativos não avaliados e verificações incompletas.

### Quando usar avaliação autenticada?

Use-a quando houver autorização, necessidade de visibilidade interna e método aprovado para controlar as credenciais. Pode ampliar a profundidade da coleta, mas requer privilégios proporcionais, auditoria e proteção dos segredos conforme as regras da organização.

### Como resolver divergência com o inventário?

Confirme que as fontes descrevem o mesmo ativo e período. Compare a evidência da detecção com configuração atual e histórico de mudanças. Documente a divergência, a fonte considerada mais confiável e a justificativa; não descarte o achado só porque outra base pode estar desatualizada.

### Instalar a correção permite fechar o achado?

A instalação é uma ação, não confirmação do estado final. Verifique a aplicação no sistema e, quando apropriado, use nova avaliação comparável ou evidência independente. Se não for possível reavaliar, registre os dados disponíveis e a limitação, mantendo o status conforme o procedimento interno.

### O Nessus substitui o inventário?

Não. Pode revelar sistemas que respondem na rede, mas talvez não alcance ativos desligados, isolados, temporários ou fora do escopo. O inventário orienta a cobertura; os resultados podem apontar discrepâncias a investigar.

## Relação com o capítulo 7

No capítulo 7 da versão original, Nessus integra o vocabulário de ferramentas de avaliação. Seu papel é fornecer evidências iniciais sobre exposições e configurações. Análise, decisão e resposta dependem do contexto do ativo, da validação e das demais evidências reunidas pela equipe.
