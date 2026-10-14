# Cadeia de custódia de evidência digital

## Pergunta central: como demonstrar que uma evidência digital permaneceu íntegra e compreensível?

Uma equipe pode localizar um arquivo, preservar um computador ou receber registros de um provedor e, ainda assim, não conseguir explicar com segurança o que aquele material representa. A pergunta decisiva não é apenas “o que encontramos?”, mas também: quem teve contato com o item, em que momento, por qual razão, mediante qual procedimento e sob quais condições? A cadeia de custódia organiza respostas verificáveis a essas perguntas.

Em uma investigação de segurança, a evidência costuma atravessar várias fases: identificação, coleta, preservação, transporte, armazenamento, exame, revisão e eventual apresentação a outras áreas. Cada passagem pode mudar o contexto ou o estado do material. Um arquivo pode ser copiado; um dispositivo pode ser desligado; um registro pode ser exportado em formato diferente; uma captura pode perder metadados; um pacote pode ser aberto para análise. A cadeia registra essas ações e permite distinguir o que foi observado originalmente do que foi produzido durante o trabalho.

Isso não transforma automaticamente uma evidência em prova conclusiva. Um registro preservado pode ser autêntico e ainda ser ambíguo; um hash pode coincidir e a interpretação estar errada; uma coleta pode ser bem documentada e ter escopo insuficiente. A cadeia de custódia sustenta a confiabilidade e a revisão do material. Ela não substitui a análise técnica, a autorização adequada, a avaliação jurídica ou a explicação dos limites.

## O que a cadeia de custódia registra

### Registro contínuo de controle e contexto

Cadeia de custódia é o histórico documentado de identificação, posse, controle, movimentação, armazenamento e tratamento de uma evidência. Na prática, o registro começa quando o item é reconhecido como potencialmente relevante e continua enquanto a organização mantém responsabilidade por ele. Deve incluir quem o identificou, quem autorizou a coleta, quem o coletou, de onde veio, quando isso ocorreu, como foi acondicionado e quais transferências ou operações vieram depois.



### Integridade, autenticidade e interpretação são questões distintas

Integridade diz respeito a alterações não detectadas no material entre pontos definidos. Um hash criptográfico calculado no momento da aquisição e novamente em uma cópia pode ajudar a verificar igualdade de conteúdo entre esses pontos. Ele não comprova sozinho quem criou o arquivo, se o relógio da origem estava correto, se a coleta abrangeu tudo o que era relevante ou se o item foi obtido com autorização.



## Por que a resposta a incidentes precisa desse controle

### A preservação começa durante decisões operacionais

Resposta a incidentes exige conter danos, restaurar serviços e proteger pessoas e ativos. Algumas ações urgentes alteram sistemas: isolar uma estação, reiniciar um servidor, revogar credenciais, bloquear uma conta ou restaurar uma imagem. A cadeia não deve impedir a contenção necessária, mas precisa tornar visíveis as decisões que mudaram o ambiente. Registrar a hora, o responsável, a justificativa, o estado anterior conhecido e o efeito esperado ajuda a preservar contexto para a análise posterior.



### Confiança entre equipes depende de registros legíveis

O material pode circular entre operações, resposta a incidentes, forense, jurídico, privacidade, recursos humanos e auditoria. Cada grupo precisa entender o que recebeu e o que pode fazer com ele. Um pacote sem rótulo, uma mídia sem lacre identificado ou um arquivo sem procedência cria dependência da memória de quem o coletou. Quando essa pessoa não está disponível, a análise se torna mais lenta e mais sujeita a suposições.



## Decidir o que coletar sem ampliar o escopo

### Objetivo, autorização e proporcionalidade

Antes de coletar, defina a pergunta investigativa e o escopo necessário para respondê-la. “Preservar tudo” parece prudente, mas pode ser impraticável, desproporcional ou incompatível com privacidade, contrato e capacidade de armazenamento. Uma coleta direcionada pode reduzir exposição; uma aquisição mais ampla pode ser necessária para preservar contexto que ainda não é conhecido. A justificativa deve explicar a escolha, as limitações e a pessoa responsável pela autorização.



### Prioridade e ordem de volatilidade

Nem toda fonte tem a mesma persistência. Informações em memória, estado de conexões e sessões ativas podem desaparecer rapidamente; discos e backups tendem a persistir por mais tempo, embora também possam ser sobrescritos. Registros em serviços externos podem seguir retenção própria ou depender de solicitação tempestiva. A prioridade deve refletir valor probatório provável, volatilidade, risco de alteração, impacto na operação e custo de coleta.



## Fontes de evidência e cuidados específicos

### Dispositivos e mídias físicas

Computadores, celulares, unidades removíveis e equipamentos de rede precisam de identificadores que evitem confusão. Registre fabricante e modelo quando visíveis, número de série, etiqueta patrimonial, estado aparente, conexões relevantes, localização e pessoa que detinha o item. Fotografias podem documentar estado e acondicionamento, desde que sejam armazenadas como registros associados e não substituam a ficha descritiva.



### Arquivos, e-mail e registros de aplicação

Arquivos individuais trazem metadados úteis, mas estes podem refletir cópia, sincronização, ferramenta ou relógio local. Preserve o arquivo recebido e seus metadados disponíveis. Registre caminho, nome, tamanho, tipo aparente, origem e horário de aquisição. Evite renomear ou converter o original sem manter uma cópia preservada e documentar a transformação. Se for necessário extrair conteúdo de um contêiner, registre o item pai, a ferramenta, a operação e a relação entre os arquivos resultantes.



### Nuvem, identidade e plataformas de terceiros

Registros de identidade, auditoria administrativa, correio hospedado, armazenamento e ferramentas de colaboração têm modelos de retenção e acesso próprios. A equipe deve registrar tenant ou ambiente, identificador da organização, conta consultada, privilégio usado, filtros e período. Uma exportação pode conter horários normalizados, nomes de campos específicos do produto ou lacunas de retenção; a documentação do fornecedor e a configuração vigente ajudam a interpretar esses detalhes.


### Capturas, notas e entrevistas

Capturas de tela, fotografias, gravações e notas podem preservar uma observação que não pode ser repetida. Elas também podem omitir contexto, sofrer edição ou ser confundidas com o dado subjacente. Identifique quem capturou, em qual sistema ou ambiente, em que momento, por qual método e para qual finalidade. Guarde o arquivo original da captura e registre transformações usadas para destacar ou ocultar informações em uma cópia de apresentação.


## Papéis e responsabilidades ao longo do percurso

### Quem identifica e autoriza

O identificador reconhece um item potencialmente relevante e informa sua origem e contexto inicial. Pode ser um analista de monitoramento, administrador, responsável pelo sistema ou pessoa que reportou o incidente. Sua função não é antecipar conclusões forenses, mas descrever o que observou, preservar o contexto disponível e acionar o procedimento apropriado.


### Quem coleta, recebe e analisa

O coletor executa o método aprovado e documenta as condições reais. Deve identificar ferramentas e versões relevantes, parâmetros, horários, sistemas envolvidos e problemas ocorridos. Se uma etapa falhar, registrar a falha é melhor do que apresentar uma sequência idealizada. O coletor não deve ocultar uma intervenção incidental que possa explicar diferenças entre o estado observado e o material adquirido.



### Separação de funções e acesso mínimo

Separar quem autoriza, coleta e revisa reduz erros e conflitos, mas nem sempre é viável. Em uma equipe pequena, use controles compensatórios: segunda pessoa presente em etapas críticas, revisão por alguém fora da análise, registro automatizado de acesso ou aprovação posterior dentro de prazo definido. O controle deve ser proporcional à sensibilidade e à relevância do item.


## Como estruturar um registro utilizável

### Identificação e descrição inicial

Cada item precisa de um identificador persistente e não ambíguo. O identificador deve aparecer no registro, na embalagem e nas referências a relatórios. Evite códigos que se repetem por ano ou que dependem apenas do nome do equipamento. A ficha deve relacionar o item ao incidente e indicar se é objeto físico, conjunto de dados, arquivo, imagem, exportação ou derivado.



### Transferências, armazenamento e acesso

Para cada transferência, registre item, origem e destino, pessoas envolvidas, data e hora, finalidade, meio de transporte ou canal e confirmação de recebimento. Lacres numerados ajudam no controle físico; o número do lacre deve constar na saída e na chegada. Se o lacre estiver rompido, registre quem observou, quando, a condição e a ação tomada. Não substitua silenciosamente um lacre sem preservar o histórico.



### Registro de análise e derivados

Uma operação analítica pode produzir relatórios, extrações, conversões, imagens, índices ou arquivos de trabalho. Registre qual item de entrada foi utilizado, qual ferramenta e versão, quais parâmetros relevantes, quem executou, quando e onde o resultado foi gravado. Vincule cada derivado ao item pai. Se um resultado for filtrado, normalizado ou redigido, documente a transformação e mantenha a versão necessária para revisão.



## Exemplos defensivos e cenários contrastantes

### Cenário hipotético: contenção de estação de trabalho

Imagine que uma equipe receba um alerta de atividade suspeita em uma estação corporativa. Uma pessoa de operações confirma o identificador patrimonial e o usuário associado, mas não afirma que o usuário executou a atividade. O líder de resposta consulta o procedimento aprovado, define uma janela temporal e decide isolar a estação da rede para reduzir risco. O diário registra horário, método de isolamento e responsável; a ficha de evidência vincula o equipamento e descreve seu estado observado.



### Cenário hipotético: exportação de auditoria em nuvem

Em outro cenário, uma equipe precisa preservar eventos administrativos de um ambiente SaaS. Um operador com privilégio aprovado seleciona uma janela de tempo e exporta os registros no formato oferecido pelo serviço. A equipe guarda o arquivo recebido sem editá-lo, calcula um hash naquele momento e anota a organização consultada, os filtros, o fuso informado pelo produto e o horário da exportação.



### Quando há uma lacuna documental

Considere, ainda hipoteticamente, um arquivo que chegou à equipe por uma pasta compartilhada. A pessoa que o colocou ali não é conhecida, não há horário confiável e ninguém calculou hash no recebimento. A equipe pode ainda conseguir analisá-lo de modo útil, mas precisa descrevê-lo como material recebido com procedência incompleta. Deve preservar o estado atual, calcular um hash agora, registrar quem o obteve e buscar evidências independentes sobre a origem, se autorizado.


## Erros comuns e como tratá-los

### Documentar depois, de memória

Anotações tardias tendem a fundir horários, pessoas e etapas. Quando uma ficha não pôde ser preenchida no momento, registre o atraso, a razão e a fonte usada para reconstruir os dados. Diferencie fato observado, registro automatizado consultado e lembrança. Preserve a versão original da nota e mantenha adendos datados, sem sobrescrever o histórico.

### Confundir hash com prova de origem

Um valor de hash igual é uma verificação de igualdade do conteúdo coberto, entre os momentos em que foi calculado. Não é assinatura de uma pessoa, carimbo temporal confiável nem prova de que a fonte era legítima. Registre quando, onde e sobre qual objeto o valor foi calculado. Para proveniência, mantenha também recibos, contexto da fonte, autorização e identificação do coletor.

### Usar horários sem fuso ou sem contexto

“10:00” pode significar horários diferentes em equipamentos, regiões e períodos de mudança de fuso. Use uma convenção consistente, como UTC ou horário local com deslocamento explícito, e mantenha o horário de origem quando for útil. Se converter horários, anote a regra e preserve o valor original. Não ajuste silenciosamente uma linha de log para fazê-la coincidir com outra fonte.

### Tratar lacre como solução suficiente

Um lacre ajuda a perceber abertura física, mas não controla cópias digitais, acessos remotos, substituição de mídia ou manipulação anterior à embalagem. Combine identificação, acesso controlado, registros de armazenamento e verificações técnicas. Um lacre intacto não demonstra que o conteúdo estava íntegro antes de ser lacrado.

### Misturar originais e cópias de análise

Pastas com nomes como “final”, “final2” e “cópia nova” deixam a equipe sem referência inequívoca. Use identificadores, vínculos pai-filho e estado da versão. Marque preservado, cópia de trabalho, derivado e material de apresentação. Se a ferramenta altera o arquivo ao abrir ou exportar, registre esse comportamento conhecido e trabalhe sobre uma cópia quando possível.

### Preencher campos com texto vago

“Recebido por equipe”, “coletado do servidor” ou “verificado” não identificam pessoas, sistemas nem verificações. Prefira nomes ou identificadores funcionais, fonte concreta e método. Se a política restringir nomes pessoais, use identificadores controlados que permitam recuperar a identidade por responsáveis autorizados. A ficha deve ser legível para uma revisão futura sem depender de explicações orais.

### Ignorar mudanças de escopo e incidentes de processo

Uma solicitação pode começar limitada e se ampliar após novas descobertas. Registre a alteração, o motivo e a autorização correspondente. Se um arquivo foi enviado ao destino errado, se uma embalagem foi danificada ou se um comando de aquisição falhou, documente o evento e a contenção. Omitir uma falha transforma um problema gerenciável em uma lacuna de confiança maior.

### Reunir dados sem plano de retenção

Coletas podem conter dados sensíveis e de pessoas não relacionadas. Defina acesso, finalidade, prazo de revisão e destino final conforme regras aplicáveis. A retenção não deve ser decidida isoladamente pelo analista, nem a eliminação deve ocorrer quando há obrigação de preservação. Vincule a decisão às áreas responsáveis e registre o que foi eliminado, quando e por quem, quando a eliminação for autorizada.

## Como avaliar a qualidade de uma cadeia

### Perguntas de revisão

Uma revisão prática começa pela identidade: é possível distinguir este item de todos os demais? A origem e o motivo da coleta estão documentados? A autorização cobre a atividade executada? Os horários têm referência compreensível? A sequência de custódia não contém transferências inexplicadas? As cópias e derivados estão ligados ao material de origem? Essas perguntas testam a reconstrução básica do percurso.



### Discrepâncias e impacto

Nem toda falha tem o mesmo peso. Um erro de digitação corrigido por adendo pode ter efeito limitado se o identificador principal e os recibos forem consistentes. Uma lacuna sobre quem teve acesso a uma mídia pode afetar a confiança na integridade. A ausência de fuso pode tornar ambígua a ordem de eventos. Uma exportação sem filtros registrados pode impedir saber se a busca foi completa. A equipe deve descrever a discrepância, as fontes usadas para esclarecê-la e o efeito sobre as conclusões.


## Exercício de mesa ou laboratório autorizado

### Objetivo e preparação

Um exercício pode testar se a equipe consegue preservar contexto sem interromper indevidamente a resposta. Use um cenário fictício e ativos de laboratório ou dados sintéticos. Não introduza em produção artefatos simulados sem autorização. Defina facilitador, observadores, limite de tempo, objetivos, regras de segurança e critérios de encerramento. O resultado esperado é avaliar o processo, não treinar técnicas contra terceiros.


### Condução do exercício

Peça à equipe para nomear o incidente e cada item, confirmar escopo e autorização, registrar o estado observado e decidir a prioridade de coleta. Apresente uma mudança de cenário: o serviço precisa voltar a operar, mas o equipamento ainda pode conter informação volátil. A equipe deve explicar quem decide, quais opções existem e como documentará a intervenção escolhida.



### Debrief e aprendizado

Após o exercício, compare a linha do tempo do diário de incidente com os registros de cada evidência. Verifique se uma pessoa que não participou consegue localizar a autorização, entender o estado inicial, reproduzir as transferências e identificar quais arquivos foram analisados. Pergunte quais campos foram difíceis de preencher sob pressão e quais informações a ferramenta já registra de maneira confiável.


## Roteiro de implementação em uma organização

### 1. Mapear fontes e responsabilidades

Liste as fontes de evidência que a equipe costuma tratar: endpoints, servidores, identidade, correio, serviços em nuvem, rede, mídias removíveis e comunicações. Para cada fonte, identifique quem pode autorizar, coletar, receber, armazenar e revisar. Inclua equipes terceirizadas e provedores, deixando claro o ponto em que a custódia passa para a organização.


### 2. Definir um procedimento proporcional

Escreva um procedimento que explique gatilhos para preservação, escopo, autorização, identificação, coleta, transferência, armazenamento, análise, revisão e encerramento. Diferencie evidência física, arquivos, imagens e dados obtidos de terceiros quando as etapas mudarem. Inclua um caminho para decisões urgentes e uma maneira de documentar exceções sem paralisar a contenção.


### 3. Preparar armazenamento e ferramentas

Escolha locais de armazenamento compatíveis com classificação, volume, retenção e controles de acesso. Separe material preservado de cópias de trabalho quando viável. Defina cópias de segurança, monitoramento de acesso e recuperação. Para evidência física, estabeleça acondicionamento, inventário, localização e controle de chaves. Para evidência digital, estabeleça nomeação, integridade dos metadados, cálculo de hash e associação entre objetos.


### 4. Treinar por função e testar o fluxo

Treine identificadores para relatar observações sem atribuir autoria prematuramente; coletores para registrar parâmetros e problemas; custodiante para conferir recebimentos; analistas para manter a linhagem de derivados; revisores para avaliar lacunas e limites. Treinamento deve cobrir também privacidade, autorização e comunicação de incidentes de processo.


### 5. Encerrar, reter ou transferir

Ao encerrar o trabalho, confirme que cada item tem estado definido: preservado para revisão, transferido a outra autoridade, retido por obrigação ou elegível para descarte autorizado. Registre responsável, data, base da decisão, destinatário e método. Se cópias derivadas forem mantidas, explique sua finalidade e relação com os itens principais.


## FAQ

### A cadeia de custódia é necessária para toda evidência digital?

O grau de formalidade pode variar com finalidade, risco, política e exigências aplicáveis. Mesmo uma investigação interna simples se beneficia de identificação, origem, responsável, horário e método. Quanto maior a sensibilidade, a possibilidade de contestação ou o impacto da decisão, maior a necessidade de controles e revisão. A equipe deve seguir normas da organização e requisitos específicos do caso.

### Um hash prova que o arquivo é autêntico?

Não sozinho. Um hash permite comparar conteúdo entre pontos em que foi calculado. Para avaliar autenticidade, também são necessários contexto de origem, método de aquisição, controle de acesso e documentação. Se o primeiro hash foi calculado depois do recebimento, ele não informa se o arquivo mudou antes daquele momento.

### Posso analisar o original?

Quando possível, preserve uma referência original e analise uma cópia verificada. Algumas fontes não oferecem um original imutável ou exigem interação com sistema ativo. Nesse caso, documente o estado, a operação e as limitações, estabeleça um ponto de preservação e evite afirmar que não houve alteração se isso não foi verificado.

### O que fazer se a cadeia tiver uma lacuna?

Preserve o material no estado atual, registre a lacuna com honestidade, identifique quando ela foi percebida e busque fontes independentes que possam esclarecer o percurso. Não invente horários ou transferências retroativas. Avalie se a lacuna afeta identidade, integridade, cronologia ou interpretação e restrinja as conclusões de acordo com esse impacto.

### Uma planilha é suficiente?

Pode ser adequada em processos pequenos se tiver controle de acesso, histórico de alterações, identificadores, cópias de segurança e campos claros. Uma planilha sem trilha de edição ou preenchida muito depois pode dificultar a revisão. A ferramenta importa menos que a capacidade de preservar o registro, limitar alterações, auditar acessos e recuperar a sequência.

### Como lidar com dados pessoais que não têm relação com o incidente?

Defina escopo e acesso com as áreas responsáveis, colete apenas o necessário e proteja o material contra consultas sem finalidade. Mantenha a evidência sob retenção aprovada enquanto houver necessidade ou obrigação, e documente decisões de segregação, redaction ou descarte. A equipe técnica não deve presumir que a relevância operacional elimina deveres de privacidade.

### O que muda quando um provedor entrega os dados?

Registre a solicitação, o canal, a pessoa que recebeu, o momento de recebimento e os arquivos entregues. Preserve avisos e documentação do fornecedor, calcule verificações a partir do recebimento e declare limitações sobre o período anterior que a equipe não controla. O material é uma entrega do provedor, não uma aquisição direta da infraestrutura pela equipe.

### A cadeia garante aceitação em um processo externo?

Não. Regras de admissibilidade e valor probatório dependem do contexto e da autoridade competente. A cadeia ajuda a explicar controle, integridade e método, mas não substitui requisitos jurídicos, validação técnica, autorização ou análise. Consulte especialistas quando o uso externo ou a obrigação legal exigir.

### Quanto tempo os registros devem ser mantidos?

O prazo depende de política, finalidade, contrato, obrigação legal, litígio potencial e sensibilidade. Defina retenção com as áreas responsáveis e revise quando a finalidade mudar. O registro de custódia pode precisar ser mantido enquanto a evidência ou a decisão baseada nela permanecer relevante, conforme regras aplicáveis.

## Leitura relacionada ao capítulo de resposta a incidentes
