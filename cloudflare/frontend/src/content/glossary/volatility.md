# Volatility

## Conceito

Volatility é uma ferramenta de análise de imagens de memória usada para examinar processos e outros artefatos voláteis. Uma imagem de memória representa dados capturados da memória principal de um sistema em determinado momento. Sua análise pode revelar vestígios que não estão disponíveis em uma coleta limitada a arquivos em disco, como estruturas de processos, módulos carregados, informações de rede ainda representadas no sistema e dados temporários de aplicações. Volatility Framework é um sinônimo usado para se referir à ferramenta e ao conjunto de recursos associado a ela.

A ferramenta interpreta dados da imagem com base em estruturas do sistema operacional e apresenta resultados em forma que o analista possa examinar. Não cria um histórico completo do computador nem determina sozinha se uma atividade foi maliciosa. Ela permite formular consultas sobre o estado capturado e relacionar elementos que, em bytes brutos, seriam difíceis de reconhecer. O significado de cada resultado depende da captura, da compatibilidade com a plataforma e do contexto investigativo.

A memória é volátil porque seu conteúdo muda durante a operação e tende a desaparecer quando o sistema é desligado. Por isso, uma imagem é um recorte transitório. Um processo que terminou antes da coleta pode já não estar representado; uma atividade iniciada depois não aparecerá. Dados podem ter sido substituídos, liberados ou preservados apenas parcialmente. A captura descreve o que foi possível obter em uma janela específica, não tudo o que ocorreu antes ou depois.

## O que pode ser examinado

O sistema operacional mantém estruturas em memória para administrar tarefas, espaços de endereçamento, módulos e outros recursos. Volatility usa conhecimento dessas estruturas para localizar elementos que possam responder a uma pergunta forense. Entre as categorias examináveis estão processos e suas relações, componentes executáveis ou bibliotecas associados, informações de rede presentes na imagem e fragmentos ou estruturas relacionados ao estado do sistema. O alcance exato varia com a versão da ferramenta, o sistema operacional, a arquitetura e o suporte ao modelo de dados correspondente.

A existência de conteúdo compatível com um programa não prova que ele foi executado, que teve sucesso ou que causou impacto. O conteúdo pode ser residual, estar incompleto ou pertencer a atividade legítima. Da mesma forma, não encontrar um elemento não prova que ele nunca existiu: talvez tenha terminado antes da coleta, sido sobrescrito, ficado fora do escopo da aquisição ou não sido reconhecido pela análise. A formulação tecnicamente responsável delimita o achado à imagem e ao método utilizados.

## Uso na investigação defensiva

A análise de memória é útil quando a pergunta depende do que estava carregado ou representado no sistema durante ou logo após um incidente. Pode ajudar a caracterizar atividade suspeita, identificar relações entre processos, priorizar sistemas para investigação e sugerir que outras evidências sejam preservadas. Também pode esclarecer diferenças entre o estado observado e o que aparece em disco, como uma tarefa sem correspondência óbvia com um arquivo atualmente disponível. Essas diferenças são pistas, não conclusões automáticas.

Em uma resposta a incidentes, Volatility costuma ser empregada depois de uma aquisição autorizada e documentada. A equipe define a pergunta, preserva a imagem original e analisa uma cópia controlada. Os resultados podem orientar verificações adicionais e decisões de contenção, mas não substituem a avaliação do risco operacional. Se houver ameaça ativa, proteger sistemas e pessoas pode exigir ação imediata, mesmo que isso altere o estado que se pretendia examinar. A decisão, o horário e os efeitos previsíveis devem ser registrados.

O valor da análise não se limita a procurar malware. Uma conexão associada a uma tarefa inesperada, um módulo sem explicação ou dados temporários podem ajudar a reconstruir o contexto e direcionar a coleta de outras fontes. Em um possível incidente envolvendo credenciais, por exemplo, a presença de dados potencialmente sensíveis pode justificar avaliação de exposição e medidas de proteção. Não permite afirmar, sem evidência adicional, que uma senha específica foi acessada ou usada.

## Aquisição, compatibilidade e interpretação

A qualidade dos resultados depende da qualidade da aquisição e da compatibilidade com o sistema analisado. Uma imagem parcial, interrompida, corrompida ou obtida com alterações relevantes pode não representar de modo confiável a memória pretendida. A coleta ocorre enquanto o sistema continua mudando; assim, diferentes estruturas podem refletir instantes ligeiramente distintos. A imagem não deve ser descrita como um retrato perfeitamente simultâneo de todos os componentes.

A compatibilidade envolve sistema operacional, versão, arquitetura e estruturas que a ferramenta espera interpretar. Uma incompatibilidade pode causar falha evidente, omissão de dados ou resultados que parecem plausíveis, mas estão incorretos. Se a execução indicar erro ou suporte incompleto, uma análise parcial não deve ser tratada como resultado negativo. O relatório deve dizer o que foi possível interpretar e o que permaneceu desconhecido.

Antes de avaliar um achado, registre a origem da imagem, o equipamento e sistema esperados, o horário e o método de coleta, as transformações feitas, a versão da ferramenta e os parâmetros relevantes. Preserve a imagem original e mantenha a análise rastreável. Um resultado pode ser reproduzido e revisado por outro profissional se os dados de processamento e a saída pertinente forem conservados.

A interpretação deve separar três níveis. A observação descreve o que a análise apresentou; a inferência propõe o que isso pode significar; a conclusão atribui significado ou responsabilidade em grau mais forte. Por exemplo, observar uma associação entre duas estruturas não prova por si só uma relação causal entre atividades. A linguagem deve refletir a força da evidência e explicitar hipóteses alternativas.

## Exemplos hipotéticos

### Processo com nome familiar

Após um alerta, uma equipe preserva a memória de uma estação e encontra uma tarefa com nome parecido ao de um componente legítimo, mas em relação incomum com outros processos. Isso é uma pista. A equipe registra os atributos observados e compara o período aproximado com telemetria do endpoint, eventos de execução e arquivos em disco. Se essas fontes independentes apontarem para execução e alteração não autorizadas, a hipótese de atividade maliciosa ganha suporte. Se não houver arquivo correspondente, pode haver remoção, outra origem de execução, limitação da coleta ou erro interpretativo. O nome incomum, isoladamente, não prova comprometimento.

### Conexão associada a uma tarefa

Em um servidor com tráfego suspeito, a análise associa uma estrutura de conexão a um processo. A associação pode orientar a busca por registros de firewall, telemetria de rede e eventos da aplicação. Não revela necessariamente o conteúdo transmitido, a identidade de quem controlava o destino ou a intenção do processo. A estrutura pode ser residual ou incompleta. Bloquear um endereço ou encerrar a tarefa deve considerar a atividade em curso, o risco, a criticidade do serviço e a possibilidade de preservar evidência adicional. A ferramenta apoia a decisão, mas não a toma.

## Distinções com termos próximos

**Imagem de memória** é a evidência capturada; **Volatility** é uma ferramenta usada para interpretá-la. A aquisição de memória é o processo de obter a imagem; a análise de memória é o exame de seu conteúdo. Ferramentas de aquisição e análise podem ser distintas. Uma boa análise não repara uma coleta inadequada, e uma coleta íntegra não garante interpretação correta.

**Forense de memória** é a atividade mais ampla de preservação e interpretação de evidências em memória. Volatility é uma ferramenta dentro desse campo. **Análise de disco** examina artefatos preservados em armazenamento; a memória apresenta um estado transitório e pode complementar ou contradizer os dados em disco. **Monitoramento em tempo real** observa o sistema durante sua operação; a análise posterior de uma imagem estática não equivale a monitoramento contínuo.

Um **indicador de comprometimento** é um sinal usado para reconhecer ou investigar possível comprometimento. Um nome, endereço ou processo mostrado na análise pode ser indicador, mas não é automaticamente conclusivo. Nomes podem ser imitados, endereços podem ter uso legítimo e componentes confiáveis podem ser abusados. A ferramenta organiza evidências; a classificação exige contexto e validação.

## Limitações e erros comuns

O primeiro erro é tratar a saída como verdade completa. A consulta só alcança o que foi capturado e o que a implementação consegue interpretar. Cobertura limitada, incompatibilidade, corrupção, mudanças de versão e estruturas alteradas por software malicioso podem reduzir a confiabilidade. Em ambientes modificados ou incomuns, os pressupostos sobre as estruturas podem não se aplicar integralmente.

Outro erro é equiparar ausência a inexistência. O artefato pode ter sido sobrescrito, não estar incluído ou não ser reconhecido. A afirmação adequada é “não foi observado nesta imagem com este método”, seguida do escopo e das limitações. O erro inverso é tratar qualquer fragmento como prova de execução: os dados podem ser residuais, pertencer a um cache ou ter uma explicação legítima.

Processos e conexões listados não devem ser classificados como maliciosos somente por parecerem incomuns. Indicadores, nomes conhecidos e reputação podem ajudar na triagem, mas dependem do ambiente e podem envelhecer. Verifique sua origem e aplicabilidade, bem como a possibilidade de atividade administrativa ou de software legítimo. Um achado ganha força quando há relação temporal e técnica com o incidente e confirmação por evidências independentes.

Também é um erro dizer que a ferramenta “provou” uma hipótese quando ela apenas produziu uma observação compatível. Um relatório robusto distingue dado observado, inferência, alternativas e conclusão. A ausência de alerta não atesta que o sistema estava limpo; um alerta tampouco estabelece sozinho impacto, intenção ou autoria. A confiança deve ser proporcional à qualidade e à convergência das fontes.

## Perguntas frequentes

### Volatility encontra qualquer malware?

Não. O alcance depende da imagem, do suporte à plataforma e dos métodos aplicados. Pode revelar indícios úteis, mas ausência de achados não demonstra que o sistema estava livre de comprometimento.

### Um processo listado estava necessariamente ativo?

Não necessariamente no sentido de estar executando normalmente no instante exato da captura. A saída pode refletir uma estrutura residual, inconsistente ou incompleta. Correlacione-a com outras fontes e descreva precisamente o observado.

### Um resultado negativo encerra a investigação?

Não por si só. Significa que o método aplicado não produziu o achado esperado naquela imagem. Verifique aquisição, integridade, compatibilidade e escopo, e compare com fontes independentes.

### A ferramenta substitui análise de disco ou telemetria?

Não. Cada fonte responde a perguntas diferentes e tem lacunas próprias. Memória, disco e telemetria se complementam; a correlação costuma produzir explicações mais defensáveis do que uma fonte isolada.

## Relação com o capítulo 8

Na versão original do manuscrito, o capítulo 8 é a referência para este verbete. O tema deve ser entendido como parte da investigação forense: analisar uma imagem de memória com atenção à qualidade da aquisição e à compatibilidade, interpretar os resultados como evidências contextualizadas e correlacioná-los antes de convertê-los em conclusões sobre o incidente.
