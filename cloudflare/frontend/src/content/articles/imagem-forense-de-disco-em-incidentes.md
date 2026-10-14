# Imagem forense de disco em incidentes

## Qual pergunta a equipe precisa responder antes de coletar uma imagem?

A pergunta central não é simplesmente “como copiar o disco?”. É: **que decisão da resposta ao incidente depende de preservar o conteúdo de qual mídia, em que intervalo, com qual impacto aceitável sobre o serviço?** Essa formulação evita transformar a aquisição em ritual. Uma imagem pode esclarecer a sequência de eventos, preservar arquivos apagados ou permitir que especialistas trabalhem sem manipular o equipamento original. Também pode consumir horas, exigir parada ou produzir uma cópia de valor limitado se o dado relevante estiver em memória, em um serviço remoto ou em um volume que muda continuamente.

Essa distinção muda a coleta. Se a pergunta é se um arquivo específico foi criado em uma estação, uma aquisição lógica direcionada, registros do sistema e telemetria podem bastar, conforme a política e o objetivo. Se é necessário investigar artefatos removidos, estruturas de sistema de arquivos ou atividade distribuída por áreas não alocadas, uma imagem mais abrangente pode ser apropriada. Se o computador está ligado e há suspeita de material apenas em memória, desligá-lo para facilitar uma imagem de disco pode destruir justamente o dado mais urgente. Nenhuma dessas escolhas é universal: o escopo deve acompanhar a pergunta e a autorização.

Uma imagem forense é uma representação adquirida e documentada de uma mídia ou volume, feita com um método que busca preservar dados e registrar limitações. O termo “imagem” não significa necessariamente uma fotografia binária completa, idêntica em todos os aspectos a cada bit físico do dispositivo. Pode haver formatos que comprimem ou omitem áreas, imagens de volume em vez de dispositivo inteiro e formatos de contêiner com metadados próprios. O relatório deve dizer com precisão o que foi coletado, como, quando e o que ficou fora.

## O que a imagem preserva — e o que deixa de fora

Uma imagem pode conservar arquivos existentes, metadados do sistema de arquivos, registros de alocação e, dependendo do método, conteúdo não alocado que ainda não foi sobrescrito. Esses elementos podem ajudar a responder perguntas como “o que estava presente?”, “que nomes e horários foram registrados?” e “há restos de conteúdo apagado?”. A resposta exige interpretação: horários podem estar em fusos diferentes, ser alterados por software ou refletir cópia e sincronização em vez da criação original. A presença de um arquivo não demonstra execução; a ausência pode decorrer de sobrescrita, criptografia, coleta lógica ou limite do método.

A imagem não captura automaticamente o estado da memória volátil, conexões de rede, processos ativos, chaves que só existem em memória, sessões autenticadas ou o conteúdo completo de plataformas em nuvem. Também não reúne necessariamente logs de identidade, correio, firewall, EDR, proxy, hipervisor e provedores de armazenamento. Essas fontes têm ciclos de retenção e controles de acesso próprios. Uma investigação bem planejada pode combinar aquisições de disco com coleta de memória, exportações de serviço, registros de autenticação, cópias de backup e depoimentos operacionais, sem confundir cada fonte com outra.

Criptografia é uma limitação importante. Se o volume estava desbloqueado no momento da coleta, uma aquisição lógica feita pela interface do sistema pode mostrar arquivos em claro, mas não equivale a uma imagem física da mídia. Se o equipamento for desligado e a chave não estiver disponível depois, a imagem de baixo nível talvez contenha apenas dados cifrados. Por outro lado, coletar um volume desbloqueado não garante que todas as chaves ou todos os dados de sessão tenham sido preservados. A decisão precisa considerar o estado observado, as regras de tratamento e a capacidade da equipe; não se deve presumir que desligar ou manter ligado seja sempre a opção correta.

## Contexto operacional: preservar sem perder a resposta

Considere três dimensões. A primeira é a volatilidade: o que muda ou desaparece com o tempo, uma reinicialização, o encerramento da sessão ou uma rotação de logs? A segunda é o impacto: que efeito a aquisição terá sobre disponibilidade, integridade operacional, privacidade e segurança? A terceira é a suficiência: que fontes, em combinação, podem responder à pergunta com menor interferência? Essas dimensões podem apontar em direções diferentes. Um sistema ligado pode preservar dados voláteis, porém a atividade contínua altera o disco. Um desligamento pode reduzir alterações posteriores, porém apagar sessões e chaves. Não existe neutralidade perfeita; existe decisão explícita, justificada e registrada.

O alcance da autorização merece a mesma clareza que o escopo técnico. Uma autorização para coletar um computador corporativo não se estende automaticamente a dispositivos pessoais, contas externas, conteúdo de terceiros ou todos os volumes acessíveis pela mesma credencial. Em investigação interna, a equipe deve seguir os processos de privacidade, retenção, jurídico e recursos humanos aplicáveis. Em ambientes compartilhados, identificar a fronteira entre dados do cliente, do provedor e de outros ocupantes é parte do planejamento. Se essa fronteira for incerta, restrinja a coleta ao que está autorizado enquanto busca orientação adequada.

## Como escolher alvo, janela e método

Comece por definir o ativo com identificadores que reduzam ambiguidade: nome de host, número patrimonial, identificador de instância ou de volume, usuário associado, localização e responsável operacional. Registre quando esses dados foram confirmados e por qual fonte. Nomes de host podem ser duplicados ou alterados; endereços de rede podem ser reutilizados. Um identificador isolado raramente é suficiente para vincular sem dúvida a mídia ao alerta.

Em seguida, escreva hipóteses concorrentes. Por exemplo: uma ferramenta administrativa legítima gerou o alerta; houve execução não autorizada; uma atualização alterou o arquivo; ou o evento foi causado por atividade automatizada. Para cada hipótese, indique qual fonte pode apoiá-la ou enfraquecê-la. A imagem pode mostrar contexto de sistema, mas registros de identidade podem estabelecer se uma sessão foi usada, e o inventário de mudanças pode explicar uma atualização. Hipóteses não são conclusões e devem continuar identificadas como tais até serem avaliadas.

Escolha entre aquisição física, aquisição lógica ou coleta direcionada com base no objetivo e na viabilidade. A aquisição física busca copiar o espaço acessível do dispositivo ou de uma camada de armazenamento definida. A lógica coleta arquivos e estruturas disponibilizados pelo sistema ou por uma interface. A coleta direcionada limita-se a itens definidos, como diretórios, artefatos ou logs. Cada opção tem vantagens e limitações: abrangência, tempo, impacto, acesso a conteúdo cifrado, preservação de áreas não alocadas e facilidade de validar. O nome do método não substitui a descrição concreta do que ele inclui.

Pergunte também se o volume é estático ou está mudando. Uma cópia obtida enquanto o sistema continua gravando pode conter estados de momentos distintos e não formar uma visão consistente. Mecanismos de snapshot podem reduzir essa inconsistência em ambientes que os suportam, mas precisam ser documentados e não eliminam todos os efeitos do ambiente. A equipe deve registrar se o serviço permaneceu ativo, se houve suspensão, se a aquisição usou snapshot e como foram tratados arquivos abertos ou blocos mutáveis.

## Fontes de evidência pertinentes

Telemetria de EDR, antivírus, firewall, DNS, proxy e rede pode registrar eventos que não aparecem no disco. Esses dados podem ser agregados, amostrados ou removidos por regras de retenção. A equipe deve coletar o registro bruto disponível quando autorizado e anotar a consulta ou filtro usado. Uma detecção automatizada é um alerta para investigação; não equivale por si só a uma prova completa de execução maliciosa.

Em serviços de nuvem e SaaS, há logs de auditoria, versões de objetos, histórico de compartilhamento, registros de acesso e cópias de configuração. A coleta depende de permissões e mecanismos do provedor. Um disco local não representa a conta remota inteira, e a exportação de um serviço não representa todo o dispositivo. Quando necessário, solicite a preservação ou exportação pelo canal autorizado, registre o escopo e mantenha a origem identificada.

## Integridade, cadeia de custódia e reprodutibilidade

Integridade não é um único hash nem uma etiqueta “forense”. É uma cadeia de registros que permite explicar o caminho entre a origem, a aquisição, o armazenamento e a análise. Antes de coletar, identifique o dispositivo e o estado observado. Fotografe ou registre conexões e indicadores relevantes quando isso for autorizado e seguro. Anote data e hora com fuso, pessoa responsável, ferramenta e versão, método, opções relevantes, destino da imagem, capacidade e espaço livre, mensagens de erro e interrupções.

Calcule hashes criptográficos do artefato adquirido usando algoritmos aceitos pela política da organização. Registre algoritmo, ferramenta, momento do cálculo e resultado no registro do caso. Sempre que possível, calcule novamente após a transferência ou no recebimento, comparando os valores. Hashes iguais apoiam a conclusão de que os bytes comparados não mudaram entre aqueles pontos de verificação. Eles não provam que a origem foi identificada corretamente, que a aquisição incluiu tudo, que o sistema estava íntegro antes da coleta ou que a interpretação posterior está correta.

Preserve o original adquirido como evidência mestra em armazenamento controlado, com acesso limitado e trilha de auditoria adequada. Faça cópia de trabalho para análise, verificando sua correspondência com o original por hash quando aplicável. Registre toda transferência, abertura, conversão e operação que produza derivado. Para análises que alteram metadados ou índices, use derivados identificados e mantenha o original sem alterações. A política aplicável define retenção, criptografia, acesso, descarte autorizado e resposta a solicitações legais.

## Papéis e decisões compartilhadas

O responsável pelo incidente coordena prioridades, define a pergunta operacional e registra decisões. Ele ou ela deve saber quando a equipe precisa conter, quando pode preservar e quem tem autoridade para aceitar impacto no serviço. O investigador digital escolhe e executa o método dentro do escopo, registra limitações e mantém separação entre dado observado e interpretação. O administrador do sistema explica dependências, estado do serviço, acesso e mudanças previstas; não deve ser colocado na posição de aprovar sozinho a própria coleta quando houver conflito de interesse.

## Cenários contrastantes: mesma técnica, decisões diferentes

**Cenário hipotético — estação de trabalho isolada.** Uma estação corporativa está ligada, já foi isolada da rede por procedimento autorizado e há suspeita de que um arquivo local foi alterado. A equipe registra o estado, consulta o usuário responsável e verifica se existe uma tarefa de manutenção programada. Se a pergunta depende de restos apagados ou de contexto do sistema de arquivos, uma imagem de mídia pode ser útil. Se a principal evidência pode estar em uma sessão ativa, a equipe avalia coleta volátil antes do desligamento. A hipótese de alteração maliciosa permanece hipótese até ser comparada com logs, inventário e contexto de mudança.

**Cenário hipotético — servidor de produção com função crítica.** Um servidor apresenta atividade anormal, mas sustenta um serviço essencial. A equipe não presume que uma imagem completa imediata seja a primeira medida. Ela consulta o responsável operacional, preserva logs remotos disponíveis, documenta a contenção e avalia snapshot ou coleta em janela coordenada. Se a parada causar dano relevante, pode ser mais adequado registrar e coletar uma amostra de evidência autorizada, manter telemetria e programar aquisição mais abrangente. Essa escolha reduz interferência, mas deixa limitações que devem ser explicitadas.

**Cenário hipotético — notebook criptografado fora da rede.** O computador está ligado e o proprietário informa que está acessível por uma sessão aberta. A equipe verifica autorização, condição física, risco de alteração e orientação institucional antes de escolher entre coletar estado acessível, preservar dados voláteis ou encerrar a sessão. Se o equipamento for desligado, dados desbloqueados podem se tornar inacessíveis. Se permanecer ligado, processos e sincronizações podem modificar conteúdo. O cenário não fornece uma resposta automática: explicita o dilema e a necessidade de registrar a decisão.

## Erros comuns que reduzem o valor da coleta

Um erro frequente é desligar imediatamente o equipamento para “preservar o disco”. O desligamento interrompe gravações futuras, mas também altera o estado e pode apagar memória, sessões e chaves. O oposto — deixar ligado indefinidamente — também não preserva tudo: o sistema continua mudando e pode executar tarefas automáticas. A equipe deve avaliar as fontes voláteis e o impacto antes de escolher, registrar a decisão e agir de forma coordenada.

Confundir captura lógica com cópia física leva a conclusões excessivas. Uma coleta por arquivos visíveis pode ser adequada, mas não representa setores não alocados. Uma imagem de volume pode omitir outras partições. Uma exportação de snapshot pode omitir memória e estado de rede. A redação do relatório deve usar o termo que descreve o objeto real e listar inclusões e exclusões conhecidas.

Confiar apenas no hash também é insuficiente. O hash ajuda a detectar alteração posterior do arquivo comparado, mas não valida sozinho a ferramenta, a seleção da origem, a completude ou o significado do conteúdo. É preciso conservar registros do processo e validar o resultado segundo procedimento documentado. Um valor de hash copiado sem contexto é pouco útil para reconstruir o que aconteceu.

Analisar diretamente o original pode alterá-lo, sobretudo quando o sistema ou a ferramenta monta a mídia com escrita habilitada. A prática segura é preservar a evidência mestra e analisar cópia de trabalho, usando controles apropriados para evitar escrita e registrando os derivados. Mesmo uma operação de leitura pode acionar comportamento de sistema em algumas condições; por isso, a equipe deve seguir método adequado ao equipamento e à finalidade.

Uma coleta sem registro de falhas cria falsa aparência de completude. Dispositivo com setores ilegíveis, desconexão, falta de espaço, interrupção ou formato incompatível exige anotação específica. Uma falha não invalida automaticamente todo o artefato, mas pode afetar a pergunta respondida. O relatório deve permitir que outro analista saiba onde há lacunas e não confunda ausência de dado com ausência do evento.

## Como avaliar se a imagem atende ao objetivo

A primeira pergunta de avaliação é de cobertura: o objeto adquirido corresponde ao alvo e ao escopo planejados? Verifique identificadores, tamanho reportado, volumes esperados e documentação do método. Se o tamanho diverge, investigue a razão antes de seguir; diferenças podem resultar de camadas lógicas, compressão, setores defeituosos ou seleção incorreta. Não trate correspondência de tamanho isolada como validação completa.

A segunda é de integridade: os hashes foram calculados e conferidos nos pontos previstos? O registro identifica algoritmo, ferramenta e arquivos incluídos? Houve transferência, extração ou conversão com resultado documentado? Uma resposta afirmativa dá suporte à estabilidade do artefato entre etapas verificadas, mas não substitui exame de cobertura nem avaliação da origem.

A quarta é de adequação à pergunta: a coleta contém os artefatos necessários para responder ou apenas parece abrangente? Se a pergunta exige saber o que ocorreu em uma conta remota, uma imagem local pode ter valor secundário. Se requer comparar conteúdo apagado, coleta lógica pode ser insuficiente. Se busca determinar se havia uma sessão ativa, a imagem de disco obtida mais tarde não reconstitui necessariamente a memória. A avaliação deve considerar fontes complementares e explicitar o que permanece indeterminado.

## Exercício de mesa para equipe autorizada

O exercício pode ser feito sem tocar em sistemas reais. Apresente uma situação fictícia: uma estação corporativa gera um alerta de alteração de arquivo no fim do expediente; o usuário afirma que instalou uma atualização; a máquina permanece ligada e contém dados criptografados; o serviço de identidade retém logs por período limitado; e a equipe precisa manter a estação disponível para uma atividade importante na manhã seguinte. Não forneça uma causa verdadeira no enunciado. O propósito é praticar decisões e lacunas, não adivinhar um atacante.

Peça à equipe que formule a pergunta de investigação em uma frase e liste fatos confirmados, alertas e hipóteses separadamente. Em seguida, identifique o ativo, os responsáveis, a autorização aplicável e a janela preliminar. Pergunte quais fontes são voláteis, quais têm retenção curta e quais podem ser coletadas sem afetar o serviço. A equipe deve explicar se uma imagem é necessária agora, se é possível um snapshot ou método menos intrusivo e o que ficaria fora da coleta.

Avalie o exercício pela qualidade da justificativa, não pelo volume de dados escolhido. A equipe conseguiu explicar o que pretendia preservar? Reconheceu o risco de desligar e o risco de manter ligado? Delimitou autorização, impacto e escopo? Documentou responsáveis, horários e hashes como parte do processo? Diferenciou evidência de interpretação? Identificou quando escalar para operação, privacidade ou jurídico? O resultado esperado é um plano defensável e compreensível, não uma promessa de descobrir a causa.

## Roteiro de implementação em uma organização

Primeiro, estabeleça uma política que defina quem pode autorizar aquisição, que classes de ativo podem ser coletadas, como tratar dados pessoais e como escalar conflitos entre preservação e disponibilidade. A política precisa indicar quem decide quando o procedimento padrão não se aplica. Não precisa prescrever uma ferramenta única para toda plataforma, mas deve exigir registro de método, versão, origem, escopo, horários, integridade, limitações e armazenamento.

Prepare capacidade antes do incidente. Defina mídia ou armazenamento de evidência aprovado, controle de acesso, espaço disponível, criptografia, registro de custódia e processo de cópia de trabalho. Mantenha ferramentas obtidas de fonte confiável, versões registradas e compatibilidade conhecida. A equipe deve saber validar o pacote e reconhecer mensagens de erro. A preparação não elimina a necessidade de confirmar a situação concreta nem autoriza coleta fora do escopo.

No incidente, abra um registro de caso, formule a pergunta, confirme a autorização, identifique ativos e responsáveis e avalie a volatilidade. Escolha a fonte e o método proporcionais, coordene contenção e coleta, documente cada ação e valide o artefato. Preserve o original adquirido e analise cópia de trabalho. Correlacione conclusões com outras fontes e escreva limitações. Ao encerrar, guarde evidência conforme a política, registre acessos e transfira aprendizados para procedimentos sem expor dados do caso desnecessariamente.

## Perguntas frequentes

### É sempre necessário criar uma imagem completa?

Não. A necessidade depende da pergunta, do risco de perda, do impacto e do escopo autorizado. Uma aquisição direcionada pode bastar para uma questão estreita, enquanto uma imagem mais ampla pode ser necessária para examinar estruturas de sistema de arquivos ou artefatos não alocados. A equipe deve justificar a escolha e declarar limitações, inclusive quando optar por não criar uma imagem.

### Devo desligar o computador antes da coleta?

Não existe uma resposta universal. Desligar interrompe atividade e pode eliminar memória, sessões e chaves acessíveis; manter ligado permite alterações contínuas. Avalie primeiro quais dados podem desaparecer, a criticidade do serviço, o estado de criptografia e o procedimento autorizado. Registre a decisão e coordene com as pessoas responsáveis.

### Um hash prova que a imagem é autêntica?

Um hash ajuda a verificar se os bytes de um artefato comparado permaneceram iguais entre cálculos. Ele não prova sozinho que a mídia de origem era a correta, que a coleta foi completa, que a ferramenta se comportou como esperado ou que o conteúdo é verdadeiro. A origem, o método e a cadeia de custódia precisam de documentação própria.

### Posso analisar a imagem original diretamente?

A prática recomendada é preservar a evidência mestra e analisar uma cópia de trabalho, com controles para evitar escrita. Registre hashes e operações que gerem derivados. Se uma condição técnica exigir outra abordagem, siga o procedimento autorizado e descreva a razão e os efeitos possíveis.

### Uma imagem encontra arquivos apagados?

Pode preservar conteúdo apagado ainda presente em áreas acessíveis e não sobrescritas, dependendo do método, do sistema de armazenamento e da criptografia. Isso não garante recuperação. O descarte de blocos, a reutilização do espaço, a arquitetura de armazenamento e limites da aquisição podem impedir a recuperação.

### A imagem inclui memória e atividade de rede?

Em geral, uma imagem de disco não equivale a uma captura de memória nem a uma gravação de rede. Processos, sessões, conexões, chaves voláteis e logs externos podem exigir métodos e autorizações próprios. Identifique essas fontes no plano para não atribuir à imagem um alcance que ela não tem.

### Como lidar com erro ou interrupção durante a aquisição?

Pare ou retome segundo o procedimento aprovado, preserve os registros gerados e anote hora, mensagem, estado e decisão. Não oculte a falha nem apresente uma coleta parcial como completa. Avalie que parte da pergunta ainda pode ser respondida e se outra fonte autorizada pode preencher a lacuna.

### Quanto tempo a imagem deve ser mantida?

A retenção segue política organizacional, obrigações aplicáveis, finalidade do caso e eventuais determinações de preservação. A equipe deve limitar acesso e retenção ao necessário, registrar responsáveis e não descartar material sob retenção vigente. Este texto não substitui orientação jurídica ou política institucional.

### O que deve constar no relatório?

Inclua pergunta e escopo, identificação do ativo e da mídia, estado observado, autorização, método e versão, operador, horários e fuso, ferramenta, destino, hashes, falhas, transferências, cópia de trabalho, fontes complementares e limitações. Separe fatos observados, alertas, hipóteses e conclusões. Indique que perguntas permanecem sem resposta.

## Relação com operações de resposta, contenção e recuperação

No capítulo 8 do manuscrito original, o tema se relaciona ao momento em que a equipe precisa preservar evidências sem perder de vista contenção e recuperação. Uma imagem pode apoiar análise posterior e comparação com um estado de referência, mas não deve atrasar automaticamente uma ação necessária para reduzir dano. Da mesma forma, recuperar o serviço sem registrar decisões pode dificultar a compreensão do incidente. A integração entre investigação e operação exige prioridade explícita, comunicação e registro do que foi alterado.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer contexto conceitual sobre operações de resposta, contenção e recuperação. Ele não substitui documentação técnica atualizada das plataformas, treino em ambiente autorizado nem o julgamento da equipe diante das condições concretas do incidente. A escolha do método, a interpretação dos achados e o tratamento de dados continuam dependentes de escopo, evidência e política aplicável.
