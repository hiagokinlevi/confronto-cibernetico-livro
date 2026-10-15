# Resposta a ransomware em empresas

## A pergunta que orienta a busca

Quando uma empresa identifica arquivos inacessíveis, servidores renomeados, notas de resgate ou sinais de cópia indevida de dados, o que deve fazer primeiro para reduzir o impacto sem destruir evidências nem comprometer a recuperação? A resposta depende do que está confirmado, dos caminhos ainda ativos e dos serviços que sustentam o negócio. Não existe sequência universal que dispense julgamento: uma máquina isolada pode conter um único evento, enquanto uma conta privilegiada comprometida pode permitir que o incidente alcance ambientes distintos.

A decisão inicial não é escolher entre “parar tudo” e “continuar operando como se nada tivesse acontecido”. É interromper, com coordenação, as rotas que podem ampliar o dano e preservar condições para compreender o que ocorreu. Isso envolve segurança, tecnologia, continuidade, jurídico, privacidade, comunicação e liderança. A equipe precisa distinguir fatos observados, hipóteses plausíveis e perguntas ainda sem resposta. Uma nota de extorsão prova que alguém deixou aquela mensagem; por si só, não prova quem a deixou, se os dados foram realmente copiados ou se a ameaça se estende a outros sistemas.
## O que significa responder a um incidente de ransomware

Ransomware é uma categoria de atividade maliciosa associada à indisponibilidade ou ao comprometimento de dados e sistemas. Em alguns incidentes, arquivos são criptografados; em outros, a extorsão envolve ameaça de divulgar informações, interromper serviços ou manter acesso. O rótulo não descreve sozinho a causa, o alcance nem a etapa do evento. Um alerta de ferramenta pode indicar comportamento compatível, sem confirmar que houve criptografia em escala. Arquivos alterados, processos interrompidos, credenciais usadas de forma inesperada e notas de resgate são observações que precisam ser correlacionadas.

Resposta a incidente é o conjunto coordenado de ações para detectar, analisar, conter, erradicar e recuperar, mantendo documentação e comunicação apropriadas. No caso de ransomware, a equipe também precisa cuidar da continuidade operacional e avaliar se houve acesso ou extração de dados. Conter significa reduzir a capacidade de o evento se espalhar ou continuar; não significa apagar todo vestígio nem desligar indiscriminadamente cada ativo. Erradicar envolve remover as causas e mecanismos de persistência identificados, com evidência suficiente para sustentar a decisão. Recuperar é restabelecer serviços em uma ordem deliberada e validar seu funcionamento e segurança.
## O contexto muda a prioridade

A primeira classificação deve considerar impacto e risco atual. Um sistema de faturamento indisponível pode afetar operações e obrigações de prazo; um controlador de ambiente industrial pode envolver segurança física; uma estação isolada pode ter impacto limitado, mas estar conectada a uma identidade com privilégios extensos. A criticidade não é determinada somente pela quantidade de arquivos afetados. Dependências, exposição externa, sensibilidade de dados, redundância e consequências de interrupção também importam.

A equipe deve identificar serviços essenciais, processos manuais possíveis e dependências técnicas. Uma aplicação pode parecer disponível, mas depender de autenticação, DNS, armazenamento, mensageria ou integrações que já estão comprometidos. Da mesma forma, a restauração de um banco de dados pode ser inútil se a aplicação que o consome permanecer indisponível. Uma visão de dependências atualizada ajuda a escolher ordem de recuperação; se estiver desatualizada, deve ser tratada como referência inicial a confirmar, não como verdade completa.
## Primeiras decisões: conter sem perder orientação

Ao confirmar sinais consistentes de comprometimento, acione o plano de resposta e estabeleça uma liderança operacional. O plano pode indicar quem declara o incidente, como convocar especialistas, quem aprova interrupções e onde registrar decisões. Se o documento estiver incompleto, a equipe deve criar uma estrutura mínima durante a resposta: um responsável pela coordenação, um canal seguro de trabalho, um registro cronológico e uma lista de tarefas com dono e estado. O canal não deve depender de contas ou dispositivos sob suspeita.

A prioridade imediata é reduzir caminhos de propagação. A ação depende da evidência e do risco: isolar um endpoint afetado da rede, restringir comunicações entre segmentos, suspender sessões ou credenciais suspeitas, bloquear um mecanismo de acesso remoto ou pausar uma integração pode ser apropriado. Mas cada medida pode interromper operações legítimas, eliminar visibilidade ou deslocar a atividade para outro caminho. Antes de agir, quando o tempo permitir, defina o objetivo da contenção, os ativos atingidos, o efeito esperado e como verificar o resultado.
## Como avaliar a extensão e a possível exfiltração

Determinar alcance é construir uma narrativa verificável a partir de fontes distintas. A equipe começa por identificar ativos com sinais diretos, contas usadas, horários e conexões observadas. Em seguida, busca relações: autenticações da mesma identidade, atividade administrativa correlata, compartilhamentos acessíveis, endpoints que se comunicaram, tarefas agendadas ou mudanças de configuração. Uma correspondência isolada pode ser legítima; a combinação de horário, identidade, destino e comportamento pode elevar ou reduzir a confiança numa hipótese.

O cenário pode incluir exfiltração além da criptografia. A possibilidade deve ser avaliada separadamente, porque evidência de criptografia não comprova cópia de dados e ausência de alerta de transferência não prova que ela não ocorreu. Tráfego de saída, registros de armazenamento, auditoria de aplicações, histórico de acesso a arquivos, telemetria de endpoint e registros de identidade podem contribuir. Retenção limitada, lacunas de instrumentação, criptografia de tráfego ou acesso por serviço intermediário podem reduzir visibilidade. A equipe deve registrar essas limitações e evitar transformar “não encontramos” em “não aconteceu”.

Uma hipótese deve ser explicitada com grau de confiança e fundamento. Por exemplo: “há indícios de acesso a uma pasta de contratos por uma conta de serviço, mas os registros disponíveis não mostram se os arquivos foram transferidos”. Essa formulação separa o dado observado da inferência e da lacuna. A conclusão pode mudar com novos registros. Manter essa distinção reduz tanto o risco de minimizar um evento como o de comunicar uma afirmação ainda não sustentada.

## Fontes de evidência e seus limites

Registros de identidade ajudam a reconstruir logins, falhas, mudanças de credencial, criação de contas, concessões de privilégio e uso de autenticação multifator. São especialmente úteis para avaliar se uma conta foi usada fora do padrão ou em sistemas inesperados. Contudo, identidade legítima usada por pessoa não autorizada pode produzir eventos aparentemente válidos. O registro precisa ser correlacionado com dispositivo, localização aproximada, horário, sessão e ação subsequente, respeitando limites da fonte e da retenção.

Telemetria de endpoint pode apontar processos, alterações de arquivos, execução de ferramentas administrativas, conexões e alertas comportamentais. Ela ajuda a reconstruir sequência e identificar hosts relacionados. A cobertura não é uniforme: sensores podem estar ausentes, desatualizados, desativados ou sem comunicação. Um sistema sem alerta pode simplesmente não ter produzido ou enviado dados. A equipe deve anotar cobertura e estado dos agentes, em vez de presumir que todo ativo foi monitorado da mesma forma.

Registros de armazenamento e aplicações podem indicar leituras, downloads, alterações, compartilhamentos, versões ou operações de recuperação. Em serviços gerenciados, verifique disponibilidade, escopo, integridade e configuração de auditoria. Um registro de acesso pode representar uma operação técnica do serviço, não necessariamente visualização humana do conteúdo. Um evento de sincronização pode ser esperado ou parte de um fluxo suspeito. A interpretação deve considerar a função do serviço, o ator identificado e o padrão histórico relevante.
## Papéis e coordenação entre equipes

A liderança do incidente define prioridades, arbitra conflitos e mantém um quadro comum de situação. Pode ser uma pessoa de segurança ou continuidade designada, conforme o plano da organização, mas precisa ter autoridade para convocar funções e obter decisões. A equipe técnica executa contenção, coleta, erradicação e recuperação com registro das mudanças. Separar claramente quem coordena e quem executa ajuda a evitar ordens concorrentes, sobretudo quando várias áreas operam em paralelo.

Operações de TI e responsáveis por sistemas conhecem dependências, janelas, rotinas de cópia e impactos de desligamento. Segurança da informação conduz análise de ameaças e coordena a preservação de evidências. Identidade e rede ajudam a limitar acessos e rotas. Continuidade e donos de negócio avaliam serviços essenciais, alternativas e critérios de retomada. Backup e armazenamento verificam integridade e isolamento de cópias. Privacidade e jurídico analisam dados, contratos, preservação e comunicações obrigatórias com base nos fatos disponíveis.

Comunicação corporativa prepara mensagens coerentes para colaboradores, clientes, parceiros e público, em coordenação com as áreas responsáveis. Recursos humanos pode orientar questões de pessoal e canais internos. Compras ou gestão de fornecedores ajuda a identificar serviços terceirizados afetados e deveres de notificação. Seguradora, se houver cobertura e os termos exigirem contato, deve ser envolvida por representantes autorizados. Órgãos públicos ou autoridades competentes podem ser contatados segundo obrigações e avaliação jurídica. Nem toda função precisa receber todos os detalhes técnicos; cada grupo necessita de informação suficiente para cumprir seu papel.
## Comunicação: precisão sob pressão

Uma atualização útil separa o que foi confirmado, o que está sendo investigado, o impacto conhecido, as ações em curso e o que ainda não pode ser afirmado. “Alguns serviços foram isolados por precaução” descreve uma ação. “Todos os dados estão seguros” exige prova que talvez não exista. A comunicação deve ter horário e responsável, informar quando haverá nova atualização e evitar especular sobre autoria, pagamento, volume de dados ou prazo de recuperação.

Internamente, colaboradores precisam saber como reportar sinais, quais dispositivos e canais usar e quais procedimentos operacionais temporários seguir. Uma instrução ambígua pode levar pessoas a reconectar equipamentos, apagar arquivos ou contatar falsos suportes. As orientações devem ser simples, distribuídas por canais considerados confiáveis e atualizadas conforme a situação. Evite pedir que usuários investiguem por conta própria ou compartilhem arquivos suspeitos em canais não controlados.
## Recuperação começa com confiança, não com pressa

Antes de restaurar, confirme que a rota de acesso inicial foi tratada ou que as medidas compensatórias foram avaliadas e aprovadas. A equipe deve procurar mecanismos de persistência, contas e chaves expostas, integrações comprometidas, configurações alteradas e sistemas relacionados. Redefinir uma senha sem revisar sessões ativas, credenciais reutilizadas, tokens, chaves e privilégios pode deixar acessos válidos em circulação. A abordagem precisa seguir os controles do ambiente e considerar dependências de serviços.

Defina uma ordem por prioridade de negócio e dependências. Restaurar primeiro identidade, rede ou serviços compartilhados pode ser necessário, mas também pode reintroduzir risco se esses componentes não tiverem sido avaliados. Um ambiente de recuperação isolado permite validar imagens, configurações, contas e aplicações antes de expor sistemas ao restante da rede. A sequência deve ser revista conforme surgem evidências e conforme a capacidade de operação manual se altera.

A restauração rápida sem fechar o acesso inicial pode provocar nova criptografia. O mesmo pode ocorrer se a equipe reintroduzir credenciais comprometidas, reconectar um segmento sem avaliar o movimento lateral ou restaurar componentes a partir de cópias não confiáveis. Recuperação, portanto, deve ter condições de entrada, responsáveis e pontos de verificação, não apenas uma meta de horário. A pressão por retomada é real; ela não elimina o custo de reiniciar uma segunda vez.

## Cenários hipotéticos que pedem decisões diferentes

**Cenário hipotético: estação isolada em uma área administrativa.** Um usuário relata arquivos com extensão alterada e uma nota de resgate. A equipe confirma alterações em um dispositivo, sem sinais observados em outros ativos até aquele momento. O dispositivo é isolado segundo o procedimento local, a equipe registra a hora e identifica a conta associada. A investigação verifica compartilhamentos acessíveis, autenticações próximas e telemetria de hosts relacionados. O fato confirmado é a alteração de arquivos naquele equipamento; a hipótese de alcance limitado só ganha confiança após verificar conexões e fontes relevantes. A organização evita afirmar que o evento está contido antes de avaliar caminhos de acesso.

**Cenário hipotético: sistema essencial indisponível com alternativa manual limitada.** Um serviço de agendamento utilizado em atendimento fica inacessível após sinais de ransomware. A equipe de negócio determina quais funções podem continuar de forma manual sem comprometer segurança ou rastreabilidade. Tecnologia isola componentes suspeitos, mas não habilita uma cópia de recuperação até verificar sua integridade e as identidades administrativas envolvidas. A decisão sobre retomada parcial considera o risco de exposição, o acúmulo de trabalho e a capacidade de reconciliar registros manuais mais tarde. O plano não presume que “disponível” significa “seguro”.

## Erros comuns que ampliam o problema

Desligar todos os sistemas sem avaliar contexto pode interromper serviços críticos, eliminar dados voláteis e dificultar a investigação. Em algumas situações, interromper energia ou rede será necessário; a questão é aplicar a medida com objetivo, autoridade e registro. A equipe deve saber que informação pode perder e como preservar o que for viável, sem atrasar uma contenção urgente diante de dano em curso.

Confiar em um único alerta cria falsos limites. A ferramenta que detectou criptografia pode não ver acesso a arquivos, sistemas sem sensor ou atividade em uma conta de nuvem. Em sentido oposto, um alerta pode ser falso positivo ou atividade administrativa legítima. Correlacionar fontes, documentar cobertura e identificar incerteza torna a conclusão mais defensável.

Apagar notas, formatar máquinas ou reinstalar sistemas antes de preservar dados pode remover evidências úteis. Em situações de risco operacional, a prioridade pode exigir reconstrução rápida, mas a decisão e as limitações precisam ser registradas. Guardar uma captura de tela sem contexto também é insuficiente: hora, origem, ativo, pessoa e método importam para interpretação posterior.

## Como avaliar a qualidade da resposta

Uma avaliação útil examina se a equipe tomou decisões rastreáveis, e não se conseguiu adivinhar todos os detalhes cedo. Pergunte se houve um responsável identificável, acionamento apropriado, canal de coordenação confiável, prioridade baseada em impacto e registro de ações. Revise se as restrições adotadas atingiram os caminhos de risco e se seus efeitos colaterais foram observados. A resposta é mais robusta quando hipóteses são explicitadas, revisadas e associadas às evidências disponíveis.

A revisão deve produzir mudanças concretas: lacunas de cobertura, inventário desatualizado, autoridade pouco clara, cópias não isoladas, contatos vencidos ou dependências desconhecidas. Cada ação deve ter dono e condição de conclusão. Não é necessário inventar metas numéricas para parecer preciso; indicadores existentes podem ser úteis quando definidos de forma consistente e interpretados com contexto. Uma contagem sem critério comum não prova maturidade.

## Exercício de mesa seguro e autorizado

Uma organização pode ensaiar decisões sem executar malware ou tocar em ambientes de produção. O exercício é hipotético e usa cartões de situação ou mensagens preparadas pelo facilitador. Participam liderança do incidente, segurança, TI, negócio, continuidade, jurídico, privacidade e comunicação. Antes de começar, definem-se escopo, duração, observadores, regras de confidencialidade e objetivo: praticar coordenação e julgamento, não avaliar pessoas individualmente.

O facilitador inicia com um relato: uma aplicação de arquivos apresenta indisponibilidade parcial e um colaborador recebeu uma nota de resgate. O grupo deve dizer o que sabe, o que presume, quem assume coordenação, qual evidência precisa preservar e quais serviços podem ser afetados. A atualização seguinte informa que uma conta administrativa foi usada em horário incomum. A equipe discute contenção, validação da identidade, impactos de desativação e consulta aos donos dos sistemas. Não se exige uma resposta única; os participantes devem explicar a base e o risco de cada decisão.

Na rodada seguinte, surge uma alegação de cópia de documentos e os registros de rede disponíveis têm uma lacuna. O grupo identifica fontes alternativas, descreve o que pode e não pode concluir e decide quem orienta a análise de dados e comunicações. Depois, o facilitador informa que há backup disponível, mas a última restauração completa não foi ensaiada. Os participantes definem condições para testar a cópia, dependências prioritárias, ambiente de validação e critérios para retomada parcial.

Um laboratório autorizado pode complementar a mesa, desde que use ambiente isolado, dados sintéticos, autorização explícita e procedimentos de segurança. O foco pode ser verificar se a equipe consegue detectar alterações simuladas, acionar o fluxo de incidentes, preservar registros, isolar um ativo de teste e restaurar uma imagem controlada. Não é necessário desenvolver ou executar ransomware real para ensaiar coordenação. A validação deve evitar qualquer conexão ou artefato que possa afetar sistemas de terceiros ou produção.

## Roteiro de implementação antes e depois do incidente

**Preparação.** Defina quem pode declarar incidente, quem lidera e como decisões de interrupção são aprovadas fora do horário normal. Mantenha contatos alternativos e um canal de coordenação que não dependa exclusivamente do ambiente corporativo potencialmente comprometido. Documente critérios de severidade, escalonamento, preservação e comunicação em linguagem que as equipes consigam usar sob pressão. Revise a lista de fornecedores e os meios de contato com eles.

**Durante a resposta.** Abra um registro central com horário e fuso, eventos confirmados, hipóteses, decisões, responsáveis, ativos afetados e itens pendentes. Estabeleça um ciclo de atualização com a liderança e donos de negócio. A cada mudança relevante, verifique se a contenção funcionou e se surgiu impacto operacional novo. Revise a avaliação de escopo conforme chegam registros e mantenha separadas as conclusões provisórias das confirmadas.

**Na recuperação.** Defina critérios para cada serviço: causa de indisponibilidade compreendida o suficiente, acessos comprometidos tratados, imagem ou backup validado, controles de segurança ativos, teste funcional concluído, monitoramento preparado e responsável de negócio aprovando o retorno. Ajuste a lista para a realidade de cada sistema. Registre exceções e a autoridade que as aprovou. Planeje como reconciliar dados de operação manual e como informar alterações na disponibilidade.

**Após o evento.** Preserve a documentação segundo políticas e orientações aplicáveis. Realize revisão sem busca automática por culpados: reconstrua decisões com as informações que existiam naquele momento e identifique pontos em que processo, ferramenta ou autoridade ajudariam. Revise contratos, contatos, inventário, critérios e exercícios. Compartilhe aprendizados com equipes pertinentes sem expor dados pessoais ou detalhes sensíveis além do necessário.

## FAQ

### Devemos desconectar todos os computadores ao primeiro alerta?
Não há uma regra que sirva a todo ambiente. Isole ativos com sinais ou risco direto segundo o plano, avalie conexões e amplie a contenção conforme a evidência. Uma interrupção ampla pode ser necessária em determinadas condições, mas requer coordenação, avaliação de impacto e registro. Se há dano ativo, priorize interromper a propagação sem ignorar segurança operacional.

### Uma nota de resgate confirma que os dados foram roubados?
Não. Ela confirma que uma mensagem foi encontrada. A alegação de roubo deve ser investigada com registros de identidade, endpoint, rede, armazenamento e aplicações, considerando cobertura e retenção. Mesmo uma busca sem evidência conclusiva não permite afirmar automaticamente que nada foi copiado.

### Devemos desligar a máquina afetada para preservar provas?
Depende da situação e da orientação dos responsáveis técnicos. Desligar pode interromper atividade, mas também perder dados voláteis; manter ligado pode permitir dano adicional. O procedimento deve ponderar risco imediato, necessidades de preservação e capacidade de isolamento. Registre quem decidiu e por quê, e procure apoio de resposta a incidentes quando a equipe não tiver competência para coleta adequada.

### Quando podemos restaurar de backup?
Quando a cópia foi verificada como utilizável e suficientemente confiável, os caminhos de acesso comprometidos foram tratados ou controlados, e há plano para testar e monitorar a retomada. A ordem deve refletir prioridades de negócio e dependências. Se o início do comprometimento é incerto, considere que cópias recentes podem conter alterações não confiáveis.

### A indisponibilidade de um serviço significa que houve criptografia?
Não. Falha de serviço pode decorrer de interrupção, alteração, erro operacional ou outra causa. Correlacione sintomas, alertas, registros e estado dos componentes. Identifique o que está confirmado antes de rotular o evento, sem deixar que a busca por certeza atrase contenção necessária.

### Quem deve falar com clientes ou autoridades?
A organização deve seguir seu plano e as obrigações aplicáveis, com responsáveis designados de jurídico, privacidade e comunicação. A equipe técnica fornece fatos e limitações, mas não deve improvisar notificações ou conclusões. Requisitos dependem de jurisdição, setor, contrato e circunstância; a avaliação deve ser específica ao caso.

### O pagamento garante que os arquivos serão recuperados ou que os dados não serão divulgados?
Não há garantia que possa ser presumida. A decisão envolve riscos técnicos, jurídicos, operacionais e de política da organização. Avalie alternativas de recuperação e continuidade e envolva as autoridades internas e assessores pertinentes. Não baseie a decisão em promessas não verificadas de quem fez a exigência.

### Como saber se o incidente terminou?
Uma retomada funcional não basta. A equipe precisa ter evidência razoável de que os caminhos de acesso e persistência foram tratados, controles estão operacionais, serviços restaurados foram validados e o monitoramento não mostra sinais que contradigam a hipótese de contenção. A conclusão pode ser graduada e revista se aparecer informação nova. Registre riscos residuais e quem aceitou cada um.

## Relação com o capítulo 8

No capítulo 8 da versão original de Confronto Cibernético, dedicado a operações de resposta, contenção e recuperação, Hiago Kin Levi trata de temas próximos às decisões discutidas aqui. A conexão é prática: organizar a ação em etapas ajuda a equipe a reduzir propagação, preservar informação e restaurar serviços com responsabilidade definida. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como leitura complementar para refletir sobre essas operações. Ele não substitui documentação técnica atualizada, treino, orientação jurídica quando aplicável nem julgamento da equipe diante das evidências concretas.
