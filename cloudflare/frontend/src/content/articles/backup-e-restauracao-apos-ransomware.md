# Backup e restauração após ransomware

## A pergunta que orienta a busca

Como uma organização pode recuperar dados e serviços após um ransomware sem restaurar a intrusão junto com os arquivos, sem confiar cegamente em cópias potencialmente alteradas e sem confundir a existência de backup com capacidade real de retomada? A resposta exige mais do que escolher uma data no calendário e iniciar uma cópia. É preciso estabelecer o que ocorreu, quais cópias permanecem acessíveis e confiáveis, que serviços devem voltar primeiro, em quais condições técnicas e de segurança, e como demonstrar que a recuperação atende ao negócio.

A resposta curta é que backups úteis precisam estar disponíveis, íntegros e protegidos contra alterações pelo atacante. A restauração deve seguir prioridades de negócio e requisitos de segurança. Amostras precisam ser recuperadas e conferidas; o ambiente de restauração deve ser separado; e a origem temporal do comprometimento deve ser investigada antes da volta dos dados. A presença de uma cópia, por si só, não confirma que ela esteja limpa, completa ou rápida o bastante para o serviço.

## O que significa recuperar depois de um ransomware

Backup é uma cópia feita para permitir recuperação de dados ou estados anteriores. Replicação mantém uma cópia atualizada em outro local ou sistema. Alta disponibilidade tenta preservar o serviço diante de falhas, muitas vezes reproduzindo alterações quase imediatamente. Essas funções se complementam, mas não são equivalentes. Se a exclusão ou a cifragem é replicada, a réplica pode acompanhar o dano. Se o ambiente principal está comprometido, uma cópia sincronizada pode carregar alterações indesejadas. A capacidade de voltar a um ponto anterior e isolado depende de retenção, controle de acesso e desenho da solução.

Uma cópia também não é automaticamente uma prova de integridade. Ela pode ter sido alterada antes de ser protegida, conter corrupção preexistente, estar incompleta por falhas de execução ou ter sido armazenada com permissões que permitiram ao invasor apagá-la. A palavra “backup” descreve uma função pretendida; não certifica o estado de um conjunto de dados concreto. A evidência depende de registros, controles, testes e verificações compatíveis com a tecnologia e com o tipo de dado.

## Por que a recuperação exige decisões diferentes

O problema temporal é central. Uma cópia recente pode conter dados mais completos e ainda assim ter sido criada depois que o atacante obteve acesso. Uma cópia antiga pode preceder a invasão, mas impor perda operacional inaceitável ou não atender a obrigações de retenção. A equipe precisa avaliar vários pontos de restauração, quando disponíveis, em vez de tratar a última cópia como escolha automática. A decisão depende do que se sabe sobre a intrusão e do que ainda é incerto.

Há também uma diferença entre recuperar o dado e recuperar a confiança no serviço. Uma aplicação pode abrir e responder a uma consulta, enquanto uma conta privilegiada ainda permite controle externo. A infraestrutura pode parecer normal e conservar uma tarefa agendada maliciosa. O arquivo pode ter uma assinatura válida, mas a configuração associada ter sido modificada. Portanto, a validação técnica deve considerar o caminho de operação, as identidades e as dependências, não apenas a legibilidade dos arquivos.

## Prioridades de negócio e objetivos de recuperação

Dois conceitos ajudam a transformar urgência em critérios. O objetivo de ponto de recuperação, conhecido como RPO, expressa a quantidade de dados que a organização admite perder, normalmente em termos de tempo. O objetivo de tempo de recuperação, ou RTO, expressa quanto tempo um serviço pode permanecer indisponível antes de ultrapassar a tolerância estabelecida. Não são garantias automáticas da ferramenta. São requisitos que precisam ser comparados com capacidades demonstradas em testes e com recursos realmente disponíveis.

Esses objetivos devem ser definidos por serviço e dependência. Perguntar “qual é o RTO da empresa?” pode esconder que aplicações diferentes têm necessidades incompatíveis. Uma plataforma de pedidos pode depender de identidade corporativa, DNS, rede, banco de dados, sistema financeiro, integração com transportadora e equipe de suporte. Se qualquer dependência essencial está indisponível, restaurar apenas a plataforma não cumpre a meta. A análise de impacto no negócio deve identificar a ordem necessária e as alternativas temporárias.

Uma lista de prioridades útil registra quem aprovou a classificação, que processo o serviço sustenta, de quais componentes depende, qual perda de dados é tolerável, qual indisponibilidade é tolerável e como validar a operação. Ela também descreve o modo degradado possível: planilhas controladas, atendimento por telefone, processamento em lote ou suspensão planejada. Modos alternativos devem preservar confidencialidade, integridade e rastreabilidade; não devem virar atalhos permanentes sem revisão.

## O que investigar antes de escolher um ponto de restauração

A linha do tempo precisa responder a perguntas operacionais, sem exigir certeza impossível antes de qualquer ação. Quando há evidência de primeiro acesso? Quais contas foram usadas? Em que momento surgiram atividades administrativas incomuns, ferramentas remotas não previstas, alterações de políticas ou tarefas persistentes? Quais sistemas tiveram arquivos modificados? Quando os backups foram executados, replicados, catalogados ou sujeitos a retenção? Que fontes registram esses eventos e por quanto tempo permanecem disponíveis?

Fontes pertinentes podem incluir registros de autenticação e identidade, alertas e eventos de endpoint, telemetria de rede, registros de firewall e acesso remoto, logs de serviços em nuvem, alterações de configuração, inventário de ativos, histórico de tarefas de backup, catálogos e trilhas de administração. A disponibilidade depende da arquitetura e da retenção. Se registros estão ausentes, a lacuna deve ser registrada; não é possível reconstruí-los por suposição. Uma equipe pode usar entrevistas e documentação operacional para contextualizar evidências, deixando claro o peso diferente de cada fonte.

A origem temporal do comprometimento não precisa ser um minuto exato para ser útil. Pode ser um intervalo delimitado por eventos confirmados: por exemplo, uma conta demonstravelmente comprometida em uma data e a primeira atividade suspeita visível depois. A equipe pode comparar pontos de backup anteriores e posteriores ao intervalo, examinar amostras e avaliar sinais de alteração. Se a margem de incerteza for grande, esse fato influencia o nível de confiança e os controles adicionais exigidos antes da retomada.

## Como avaliar se os backups são recuperáveis

A avaliação começa pela cobertura: quais dados e componentes estão incluídos, em que frequência, por quanto tempo, em qual local e sob qual conta ou mecanismo de administração? A resposta deve corresponder ao inventário real. Sistemas sem proprietário, bases temporárias, dados mantidos por fornecedores e configurações locais podem escapar de uma política geral. Uma rotina marcada como concluída não demonstra que todos os itens esperados foram capturados.

A disponibilidade é outra dimensão. Uma cópia pode existir e não ser recuperável no momento necessário: mídia pode estar danificada, uma chave pode faltar, o catálogo pode estar indisponível, o fornecedor pode não responder, a largura de banda pode ser insuficiente ou o ambiente de destino pode não ter capacidade. O tempo de restauração depende do volume, da quantidade de arquivos, da arquitetura, da concorrência, da equipe e dos passos de validação. A estimativa de uma ferramenta deve ser confirmada em ensaios realistas.

Integridade deve ser examinada com métodos adequados ao formato e ao risco. Checksums e verificações de consistência podem indicar se um objeto mudou em relação a uma referência conhecida, mas não demonstram que o conteúdo era confiável antes da cópia. Para bases de dados, podem existir verificações próprias de consistência. Para documentos, amostras podem ser abertas e comparadas com registros de negócio. Para uma imagem de sistema, a equipe pode inspecionar configurações, dependências e estado de segurança em um ambiente isolado. Nenhum teste isolado cobre todas essas dimensões.

A limpeza exige uma avaliação distinta. Um conjunto de arquivos pode não apresentar alteração óbvia e ainda estar associado a credenciais roubadas, scripts autorizados abusivamente ou componentes comprometidos. A varredura por ferramentas de segurança fornece sinais úteis, mas um resultado sem detecção não constitui prova absoluta de ausência de ameaça. A confiança aumenta pela combinação de origem temporal plausível, registros coerentes, análise técnica, reconstrução de componentes críticos, rotação de segredos e monitoramento reforçado após a retomada.

## O ambiente de restauração e a ordem técnica

Um ambiente de restauração separado reduz o risco de reinserir material potencialmente comprometido na rede de produção. A separação pode envolver redes, identidades, credenciais administrativas, ferramentas de gestão e caminhos de acesso distintos, conforme o desenho da organização. O essencial é entender as fronteiras e testar se elas funcionam. Um laboratório ligado por uma conta privilegiada compartilhada ou por uma rede amplamente confiável pode oferecer isolamento apenas aparente.

A ordem de reconstrução deve começar pelos elementos que estabelecem uma base confiável. Dependendo da arquitetura, isso pode incluir dispositivos de gestão, identidade, DNS, registro de tempo, gestão de chaves, ferramentas administrativas e controles de segurança. A ordem exata varia; não existe sequência universal que sirva a todas as organizações. O plano deve registrar dependências e decisões específicas do ambiente, e a equipe deve revalidá-las durante o incidente caso a arquitetura real tenha mudado.

Antes de devolver um serviço à rede, confirme a origem da imagem e dos instaladores, o nível de correção, a configuração esperada, o funcionamento das proteções, os privilégios de contas, os certificados e as conexões autorizadas. Alterar senhas após o incidente é importante, mas o plano deve incluir tokens, chaves, segredos de aplicação e sessões persistentes quando aplicável. Credenciais antigas não devem ser reintroduzidas apenas porque estavam incluídas no backup.

## Quem faz o quê durante a recuperação

A equipe de infraestrutura ou plataforma prepara capacidade, redes, armazenamento, imagens e dependências. A equipe de backup identifica pontos disponíveis, restrições de retenção, métodos de recuperação e incertezas sobre cobertura. Segurança e resposta a incidentes analisam evidências, contenção, identidade, indicadores de comprometimento e critérios para liberar componentes. Essas equipes trabalham juntas: o operador de backup conhece os limites da cópia, enquanto a equipe de segurança ajuda a avaliar o risco de reinserção.

O responsável pelo processo de negócio confirma quais funções são necessárias, qual nível de serviço permite operação, quais registros devem ser conciliados e como verificar resultados reais. Donos de dados esclarecem classificação, retenção e consistência. Jurídico, privacidade e conformidade avaliam notificações, preservação e obrigações aplicáveis, sem substituir o julgamento técnico sobre o estado dos sistemas. Comunicação prepara mensagens para públicos internos e externos com fatos verificados, sem prometer prazos que dependem de evidências ainda ausentes.

Uma matriz simples de responsabilidades evita o vazio entre “quem executa” e “quem aceita”. A pessoa que restaura não deve ser automaticamente a única a atestar consistência do processo de negócio. Defina quem solicita, quem executa, quem valida tecnicamente, quem valida o resultado operacional e quem autoriza a exposição em produção. Uma separação razoável reduz erros e torna as aprovações rastreáveis, mesmo quando a equipe é pequena.

## Exemplos defensivos e cenários contrastantes

Cenário hipotético contrastante: o banco transacional pode ser recuperado de uma cópia recente, mas os logs indicam atividade suspeita anterior à cifragem, e a conta usada para administrar o banco também tinha acesso ao catálogo de backup. A equipe não declara a cópia contaminada sem evidência; tampouco presume que esteja limpa. Ela compara pontos anteriores, preserva registros, avalia exposição das credenciais e considera reconstruir o banco em infraestrutura confiável, aplicando os registros de transação que puder validar. Se não há confiança suficiente, pode manter o serviço fora de produção e ativar um processo manual temporário.

Cenário hipotético com recuperação parcial: a aplicação principal pode ser reconstruída, porém um serviço terceirizado de identidade está indisponível. A equipe avalia se existe uma forma aprovada de autenticação temporária, com acesso mínimo e prazo definido. Se não existir, restaurar a aplicação não produzirá serviço utilizável. O responsável de negócio pode priorizar uma função menor que dependa de menos componentes, enquanto o fornecedor resolve a dependência. Isso é uma escolha operacional baseada no mapa de dependências, não uma falha da equipe de backup.

Em cada cenário, a organização deve distinguir três afirmações: “o backup existe”, “a restauração funcionou” e “o serviço está seguro e atende ao processo”. São afirmações diferentes e exigem evidências diferentes. Confundi-las produz confiança prematura. Uma pasta legível sustenta uma conclusão sobre aquela pasta; não confirma identidade, integridade global ou ausência de acesso persistente.

## Erros comuns que tornam a volta mais arriscada

O primeiro erro é escolher sempre a cópia mais recente. Recência preserva mais alterações, mas pode aumentar o risco de trazer dados de um período comprometido. O erro oposto é escolher automaticamente a cópia mais antiga, ignorando perda de dados, dependências e retenção. A escolha deve comparar pontos disponíveis, linha do tempo, impacto e qualidade da evidência.

Um teste superficial cria uma impressão enganosa. Confirmar que um arquivo abre não valida permissões, relações entre registros, fórmulas, vínculos, chaves ou comportamento da aplicação. Restaurar uma amostra minúscula em uma máquina preparada não mede o tempo de recuperação de um ambiente completo. Testes devem dizer exatamente o que cobriram e quais aspectos ficaram fora do escopo.

Por fim, equipes às vezes tratam a volta à produção como ponto final. Na prática, ela inicia uma fase de observação reforçada. É preciso acompanhar autenticações, alterações de configuração, comportamento de aplicações, integridade dos dados e alertas. A organização deve ter condições para limitar novamente o serviço caso surjam indícios de reentrada ou inconsistência. Encerrar o incidente é uma decisão posterior, apoiada por critérios e registros.

## Critérios para avaliar uma recuperação

A segurança da plataforma deve ser avaliada separadamente. Identidades e privilégios foram revisados? Segredos que podem ter sido expostos foram substituídos? A configuração corresponde a um padrão conhecido? Os controles de proteção e registro estão ativos? A rede permite apenas comunicações necessárias? Respostas positivas precisam ter base observável e responsável identificado. O resultado de uma varredura é uma fonte de evidência, não um certificado de ausência de comprometimento.

O desempenho de recuperação precisa ser comparado com objetivos, mas também interpretado. Se uma restauração excede o RTO, isso revela uma diferença entre requisito e capacidade observada. Não se deve ocultar a diferença alterando retrospectivamente o objetivo. Pode ser necessário reduzir o escopo inicial, investir em automação, capacidade ou cópias, rever dependências ou negociar uma tolerância de negócio diferente. A decisão é uma ação de melhoria com dono e prazo, não uma nota abstrata.

## Exercício de mesa e laboratório autorizado

A discussão deve testar perguntas concretas. Quem declara o incidente e quem coordena? Como o serviço é isolado sem ampliar o dano? Que registros precisam ser preservados? Quem verifica se a conta de backup foi usada de forma indevida? Qual ponto de restauração será avaliado primeiro e por quê? Que modo alternativo atende o processo? Em que momento o responsável de negócio aceita uma perda de dados? Que sinal impediria a liberação para produção? Como a equipe informa uma estimativa sem transformá-la em promessa?

Um laboratório autorizado pode acrescentar uma restauração controlada de cópias de teste. Use dados fictícios ou adequadamente protegidos, ambiente segregado e autorização dos responsáveis. O ensaio pode medir etapas: obtenção da cópia, recuperação, validação técnica, validação de processo e preparação para liberação. Não conecte conteúdo suspeito a sistemas produtivos para “ver o que acontece”. O propósito é verificar procedimentos, dependências e controles em condições seguras, sem introduzir riscos desnecessários.

## Roteiro de implementação antes do incidente

Comece por inventariar serviços, dados, proprietários e dependências. Identifique quais processos são essenciais, quais dados sustentam cada um e onde as cópias são mantidas. Inclua ambientes em nuvem, serviços contratados, dispositivos especiais, configurações e dados que não vivem em servidores convencionais. Para cada item, registre a pessoa capaz de explicar sua importância e quem pode autorizar uma restauração.

Depois, defina objetivos de recuperação com os donos de negócio. Documente RPO e RTO por serviço, modos degradados, requisitos de integridade e critérios de retorno. Verifique se os objetivos são realistas diante de volume, equipe, conectividade, chaves e capacidade. Se não forem, trate o descompasso como risco com decisão de gestão. Uma meta escrita sem ensaio não é uma capacidade demonstrada.

Prepare um ambiente segregado ou um método aprovado para criá-lo rapidamente. Documente acesso, capacidade, ferramentas, imagens, controles, registros e caminho de transferência para produção. Mantenha instruções atualizadas para reconstruir dependências críticas. A documentação deve ser acessível quando sistemas corporativos estiverem indisponíveis, com cópias protegidas e revisão de quem pode consultá-las.

Teste restaurações com escopo e frequência definidos segundo risco. Inclua amostras representativas, fluxos de aplicação, recuperação de chaves, validação de negócio e medição das etapas. Registre o que foi testado, resultado, limitações e correções. Uma falha de teste é informação valiosa: deve gerar ação, não ser escondida para preservar indicadores de sucesso.

Por fim, atribua papéis, contatos e autoridade. Confirme contatos de emergência de fornecedores, jurídico, privacidade e liderança. Defina como comunicar estado e incerteza, como aprovar exceções e quando escalar. Revise o plano após mudanças importantes e após exercícios ou incidentes. O roteiro só serve se puder ser encontrado e usado por quem estará de plantão.

## Perguntas frequentes

### Se o backup terminou sem erro, posso restaurá-lo com segurança?

O status de sucesso indica que uma tarefa concluiu de acordo com os critérios da ferramenta. Não demonstra que a origem estava limpa, que todo o escopo esperado foi incluído, que os dados são consistentes para o negócio ou que a cópia resistiu a alterações do atacante. Verifique cobertura, origem temporal, integridade e condições de restauração. Faça testes apropriados e registre o alcance da validação.

### Devo sempre escolher a cópia mais recente?

Não. A cópia mais recente pode reduzir perda de dados, mas pode estar dentro do período de comprometimento ou conter alterações indevidas. Compare pontos candidatos com a linha do tempo e com as necessidades do processo. Quando a evidência for limitada, explicite a incerteza e use controles adicionais, como reconstrução em ambiente confiável e observação reforçada.

### Uma cópia imutável garante que o ransomware não a atingiu?

Não. Imutabilidade pode impedir certas alterações ou exclusões após a gravação e durante condições específicas. Ela não prova que os dados já eram íntegros, que a retenção foi configurada corretamente, que o acesso de recuperação está disponível ou que a restauração não traz configurações comprometidas. É uma medida importante dentro de um conjunto de controles e testes.

### Qual é a diferença entre RPO e RTO?

RPO descreve a perda de dados que o processo pode tolerar, geralmente expressa como intervalo de tempo. RTO descreve o tempo de indisponibilidade tolerável para retomar uma função. Ambos precisam ser acordados com o negócio e comparados com testes. Uma cópia frequente não garante RTO curto, e uma recuperação rápida não garante perda de dados aceitável.

### Posso restaurar arquivos antes de terminar a investigação?

É possível que haja restaurações parciais enquanto a investigação continua, se forem coordenadas e feitas em ambiente controlado. A decisão depende do risco de propagação, da criticidade do serviço, da evidência disponível e da capacidade de conter a intrusão. Não há resposta universal. Registre o que se conhece, quais controles reduzem o risco e quem aceita a incerteza residual.

### Antivírus ou varredura sem alertas provam que a cópia está limpa?

Não. A ausência de detecção é um sinal, não uma prova absoluta. A ferramenta cobre ameaças e condições que consegue identificar. Complemente a análise com origem temporal, registros, inspeção de componentes, revisão de contas e configurações, consistência dos dados e monitoramento após a retomada. Evite transformar um resultado de ferramenta em garantia.

### Quanto tempo levará para restaurar?

Depende do volume, da arquitetura, da disponibilidade de cópias e chaves, da capacidade de transferência, das dependências, da equipe e do tempo de validação. A estimativa mais útil vem de ensaios que reproduzem etapas e limitações relevantes. Durante um incidente, informe intervalos e pressupostos, atualize-os com evidências e evite prometer um horário que ainda depende de fatores desconhecidos.

### O que fazer se não houver um ponto de restauração confiável?

Preserve evidências, contenha o acesso, consulte opções de cópias independentes e avalie a reconstrução a partir de fontes aprovadas. Identifique dados que possam ser recuperados de sistemas não afetados, registros externos ou cópias mantidas por fornecedores, sempre validando sua origem e uso autorizado. O negócio pode operar em modo degradado enquanto as equipes avaliam alternativas. Não invente uma confiança que a evidência não oferece.

### Quando declarar a recuperação concluída?

Quando os critérios aprovados para o escopo estiverem atendidos, os responsáveis técnicos e de negócio tiverem validado o serviço, os riscos residuais estiverem registrados e houver monitoramento adequado. A declaração deve delimitar o que voltou, em que capacidade e quais reconciliações ou verificações continuam. Encerrar um fluxo de restauração não significa necessariamente encerrar a resposta ao incidente.

## Capítulo relacionado

No capítulo 8 de *Confronto Cibernético*, Hiago Kin Levi, publicado pela Editora Brasport, aborda operações de resposta, contenção e recuperação, contexto que ajuda a situar as decisões descritas aqui dentro de uma resposta coordenada. A leitura pode apoiar a reflexão sobre papéis, sequência e preparação, mas não substitui documentação técnica atualizada, treino prático nem julgamento da equipe diante das evidências e condições concretas do ambiente.
