# Estratégia de backup para incidentes

## A pergunta que orienta a busca

Quando uma intrusão interrompe sistemas, quais cópias permitem retomar os serviços com segurança, em que ordem e dentro de que prazo? Essa é a pergunta central por trás de uma estratégia de backup para incidentes. Ela não se resolve escolhendo uma frequência de cópia ou comprando armazenamento. Exige combinar prioridades de negócio, proteção contra adulteração, capacidade de restauração, validação técnica e autoridade para declarar um serviço confiável.

A resposta curta é que backups só ajudam depois de uma intrusão se forem íntegros, recuperáveis e protegidos contra o mesmo adversário que comprometeu a produção. Planejar cópias e planejar restaurações são problemas distintos. Uma tarefa marcada como concluída demonstra, no máximo, que determinado processo informou ter copiado dados. Não demonstra por si só que a cópia contém o estado necessário, que as credenciais de recuperação continuam disponíveis, que o formato será lido ou que o serviço voltará a operar corretamente.

Este artigo trata do preparo defensivo para incidentes, inclusive ransomware, destruição acidental, comprometimento de identidade e falha de infraestrutura. O foco é decidir o que preservar, como separar as cópias do ambiente operacional e como testar uma recuperação completa. Os exemplos de incidente adiante são hipotéticos. Eles ilustram decisões possíveis e não descrevem casos reais nem garantem resultados.

## O que significa recuperar, e o que não significa

Backup é uma cópia mantida para permitir a recuperação de dados ou sistemas após perda, corrupção ou indisponibilidade. Recuperação é o processo mais amplo de reconstruir um serviço em condição aceitável: encontrar uma cópia adequada, obter os componentes e as chaves necessários, restaurar dados e configuração, validar dependências, verificar segurança e devolver o serviço aos usuários com autorização explícita.

Uma cópia pode estar intacta e ainda assim ser inadequada. Talvez seja antiga demais, não inclua configurações essenciais, dependa de uma conta indisponível ou exija uma versão de software que a equipe não consegue obter. Pode também conter registros que já estavam corrompidos antes da cópia ou arquivos maliciosos que foram preservados junto com dados legítimos. Integridade da cópia não equivale a confiança no conteúdo restaurado.

Convém separar pelo menos quatro afirmações. “A cópia foi criada” é evidência de execução do processo, dentro do escopo observado. “A cópia pode ser lida” indica que os dados estão acessíveis e decodificáveis. “A aplicação foi restaurada” exige que componentes e dados tenham sido reunidos em um ambiente utilizável. “A aplicação está segura e apta a voltar” acrescenta validação de origem, configuração, identidade, dependências e risco residual. Cada afirmação exige evidência diferente.

## Contexto: por que uma intrusão muda as decisões

Em um incidente cibernético, a organização pode não saber inicialmente quando o invasor obteve acesso, quais contas foram usadas, que sistemas foram alterados ou se o ambiente de backup foi alcançado. A incerteza importa. Restaurar cedo demais pode reintroduzir um mecanismo de persistência, uma conta comprometida, uma configuração vulnerável ou dados adulterados. Esperar por certeza absoluta, por outro lado, pode prolongar uma interrupção evitável. O plano precisa prever decisões sob evidência incompleta e registrar quem as toma.

O adversário pode visar os próprios mecanismos de recuperação. Se a mesma identidade administrativa controla produção, catálogo de backup, retenção e exclusão, um único comprometimento pode afetar várias camadas. Acesso por rede permanente, credenciais reutilizadas e permissões amplas aumentam o alcance potencial de uma conta. Isso é uma hipótese de risco a avaliar no desenho; não prova que toda plataforma ou todo ambiente seja vulnerável da mesma maneira.

## Decidir o que recuperar primeiro

A prioridade não deve ser definida pelo tamanho do servidor, pela facilidade de restauração nem por quem solicita com mais urgência. Comece pelos serviços que sustentam objetivos de negócio e obrigações relevantes. Para cada serviço, descreva o impacto de indisponibilidade, os grupos afetados, as dependências e a perda de dados tolerável. Uma classificação útil explica por que um serviço vem antes de outro, em vez de apenas atribuir uma etiqueta de criticidade.

Dois conceitos ajudam a organizar a conversa. O objetivo de tempo de recuperação, conhecido como RTO, expressa quanto tempo de indisponibilidade uma função pode tolerar segundo a decisão de negócio. O objetivo de ponto de recuperação, ou RPO, expressa a quantidade de dados ou o intervalo de atualizações que pode ser perdido. Eles são metas, não provas de capacidade. Um RTO aprovado não significa que uma restauração já foi executada nesse prazo; um RPO definido não demonstra que há uma cópia utilizável naquele ponto.

Mapeie as dependências antes de ordenar a recuperação. Identidade, DNS, certificados, rede, armazenamento, hipervisores, imagens de sistema, repositórios de software, licenças, chaves criptográficas e serviços de terceiros podem ser pré-requisitos. Uma aplicação restaurada sem identidade confiável pode não autenticar usuários; um banco sem certificados ou chaves pode permanecer ilegível. Se o serviço de backup depende da mesma identidade que está sob investigação, inclua uma forma documentada e controlada de acesso alternativo.

## Retenção, frequência e escolha do ponto de retorno

A retenção define por quanto tempo cópias e versões anteriores ficam disponíveis. A frequência define com que intervalo novos pontos são criados. Ambas devem refletir o RPO, a velocidade de mudança dos dados, os requisitos legais e operacionais, a capacidade de armazenamento e o tempo necessário para localizar e validar uma versão. Uma retenção longa não compensa uma frequência insuficiente; uma frequência alta não ajuda se todas as versões antigas forem removidas antes de se detectar uma adulteração silenciosa.

Em um incidente, escolher o ponto mais recente pode ser uma má decisão se a invasão ou corrupção já existia nesse ponto. Escolher um ponto muito antigo pode perder transações legítimas e criar problemas de reconciliação. A equipe precisa combinar evidências de segurança e conhecimento do sistema para avaliar candidatos. Registre o horário da cópia, o estado conhecido de atualização, os indicadores que sustentam a escolha e as incertezas restantes. A data do arquivo, sozinha, não prova que ele é limpo.

## Isolamento e controle das cópias

Uma cópia de recuperação precisa permanecer fora do alcance de uma falha ou de uma identidade comprometida na produção. Isso pode envolver separação de contas administrativas, autenticação forte, permissões mínimas, aprovação adicional para exclusão, retenção protegida contra alteração, redes dedicadas, mídia desconectada em janelas controladas ou uma combinação desses mecanismos. A arquitetura e o modelo operacional definem o que é apropriado; o rótulo “imutável” ou “offline” não encerra a análise.

Pergunte o que um administrador de produção pode fazer no ambiente de backup. Ele pode listar cópias? Alterar políticas? Reduzir retenção? Excluir catálogos? Mudar a identidade de recuperação? Se uma única credencial tiver poder para executar todas essas ações, o isolamento pode existir só na documentação. Avalie também credenciais de emergência, contas de serviço, integrações e estações administrativas, pois uma separação nominal pode ser contornada por dependências compartilhadas.

Use identidades distintas e escopo limitado sempre que possível. Separe funções de operar cópias, aprovar mudanças de retenção e autorizar exclusões. Acesso administrativo deve ser concedido pelo tempo e para a finalidade necessários, com registro e revisão. Para ações de alto impacto, uma segunda aprovação pode reduzir erros e abuso, mas precisa ter um procedimento utilizável em uma emergência. Controle que ninguém consegue acionar quando necessário não é controle eficaz.

Proteja também o caminho de recuperação. Credenciais, chaves de criptografia, instruções, catálogos e arquivos de configuração precisam estar disponíveis para pessoas autorizadas sem ficarem expostos junto com as cópias. Desenhe uma cadeia de custódia operacional: quem pode solicitar uma chave, como a identidade é verificada, onde a autorização fica registrada e como se evita depender de um serviço indisponível. Teste a recuperação de acesso com participantes autorizados e sem revelar segredos em relatórios ou conversas.

## Evidências para orientar decisões

Durante a resposta, distinguir observação, inferência e hipótese evita transformar suspeita em fato. Uma trilha de auditoria pode confirmar que uma conta solicitou a exclusão de um conjunto em determinado horário, se o registro for confiável e completo. Isso não identifica necessariamente a pessoa por trás da conta nem demonstra sozinho o motivo. Uma falha de autenticação pode indicar erro de configuração, credencial inválida ou atividade maliciosa. Correlacione fontes e descreva o grau de confiança.

Fontes úteis incluem registros de autenticação e administração, histórico de tarefas e retenção, inventário de cópias, alertas do armazenamento, telemetria de endpoints, registros de mudanças, estado dos catálogos, documentação de dependências e evidências de validação de restauração. Cada fonte tem limitações: retenção curta, relógios desalinhados, escopo parcial, exportação incompleta ou possível alteração por um administrador comprometido. Preserve o contexto e os horários, e registre lacunas conhecidas.

## Papéis e autoridade

O proprietário do serviço define impacto, prioridade e tolerância à perda em conjunto com as áreas de negócio. A equipe de infraestrutura ou plataforma mantém mecanismos de cópia, inventários e procedimentos de restauração. Segurança avalia o comprometimento, os limites de confiança e os critérios para considerar um ambiente limpo. A equipe de aplicação valida funções, consistência e integrações. Dados, privacidade e jurídico orientam retenção e preservação quando aplicável. Continuidade de negócios coordena dependências e comunicação. A composição varia; o que importa é atribuir decisões e substitutos nominalmente.

Defina quem pode declarar que um ambiente de destino está suficientemente isolado, quem escolhe o ponto de retorno, quem aprova a restauração de dados e quem libera o serviço para usuários. Em uma organização menor, uma pessoa pode acumular papéis, mas as responsabilidades ainda devem estar explícitas. Um procedimento que diz “a equipe decidirá” deixa sem resposta quem tem autoridade quando segurança, operação e negócio discordam.

## Exemplos defensivos e cenários contrastantes

Cenário hipotético: uma organização detecta que uma conta administrativa de produção foi comprometida. A equipe não sabe ainda se essa identidade alcançava o serviço de backup. O procedimento prevê suspender acessos afetados, preservar os registros disponíveis e verificar por uma identidade administrativa separada quais cópias e políticas continuam acessíveis. A equipe seleciona um conjunto de candidatos, restaura em rede isolada e compara estado e comportamento com evidências anteriores. A decisão não se baseia apenas no fato de a tarefa de cópia ter terminado.

Outro cenário hipotético: um serviço foi restaurado a partir de uma cópia aparentemente íntegra, mas os usuários relatam dados recentes ausentes. A equipe evita sobrescrever a fonte preservada e compara o intervalo disponível com registros transacionais, filas e evidências de negócio. Uma reconciliação controlada pode recuperar parte das operações, mas precisa de regras de idempotência e aprovação do proprietário dos dados. Reinserir registros sem compreender duplicidade pode causar uma segunda falha.

## Testes de restauração que demonstram capacidade

Escolha dados representativos sem expor informações desnecessárias. Use conjuntos sintéticos ou mascarados quando possível; se dados reais forem necessários, aplique autorização, acesso mínimo, armazenamento controlado e descarte definido. A representatividade deve incluir formatos, volume, relacionamentos e casos de borda importantes para o serviço, sem transformar o teste em uma cópia indiscriminada de dados sensíveis.

Execute a restauração em ambiente controlado e isolado. Descreva como impedir conexões acidentais com sistemas de produção, envio de mensagens reais, cobrança, publicação ou alteração de registros externos. Em aplicações com integrações, substitua dependências por simulações autorizadas ou configure modos de teste documentados. Registre as limitações: uma simulação não comprova o comportamento do serviço real quando a integração for reativada.

Meça o tempo por etapa, não apenas o tempo total. Localizar a cópia, obter autorização, recuperar credenciais, provisionar recursos, restaurar dados, reconstruir configuração, validar aplicação e aprovar retorno podem ter responsáveis e esperas diferentes. Esse detalhamento mostra onde o prazo se forma. Informe o escopo medido, o tamanho e o estado do ambiente, as premissas e os pontos manuais. Um resultado de laboratório não deve ser apresentado como previsão garantida para um incidente maior.

A validação funcional deve ser feita com o proprietário da aplicação. Exemplos incluem autenticação de teste, leitura e gravação autorizadas em dados descartáveis, consistência entre registros relacionados, execução de uma transação simulada, geração de relatórios esperados e verificação de integrações substituídas. Para um sistema de arquivos, a checagem pode envolver permissões, caminhos e amostras de conteúdo; para um banco, integridade estrutural e consultas de negócio. Os critérios variam e precisam ser documentados por serviço.

Teste também a procedência e a limpeza do ambiente. Antes de restaurar, a equipe deve ter uma base de sistema e ferramentas com origem verificável. Depois, deve inspecionar configurações, contas, tarefas agendadas, chaves e dependências segundo os procedimentos internos de segurança. Uma varredura automatizada pode contribuir com evidência, mas não prova isoladamente que o ambiente está livre de comprometimento. A validação combina controles, contexto do incidente e revisão humana especializada.

## Critérios para avaliar a prontidão

Compare metas e resultados sem esconder diferenças. Se a restauração observada levou mais tempo que a meta, registre a lacuna, a causa e a decisão de tratamento. Se o teste foi menor que o serviço real, declare o limite em vez de extrapolar. Se um teste teve sucesso, registre o que passou e o que não foi exercitado. Uma pontuação agregada pode ser útil para acompanhar trabalho, mas não substitui a descrição das evidências e das exceções.

Critérios de prontidão devem contemplar a saída. Como se decide que o ambiente está pronto para reconectar? Como se bloqueia uma restauração incompleta? Como se acompanha integridade dos dados depois da liberação? Quem compara transações e trata divergências? Recuperação não termina no primeiro acesso: pode haver monitoramento reforçado, reconciliação e restrições temporárias, todos com responsáveis e condição de encerramento.

## Erros comuns e como corrigi-los

Um erro recorrente é tratar sucesso de tarefa como sucesso de recuperação. Corrija associando a cada serviço um teste de restauração e uma validação funcional. Se a organização não consegue testar todo o ambiente com frequência, escolha componentes e fluxos representativos com justificativa, mantenha testes maiores planejados e declare as áreas não cobertas.

Outro problema é selecionar a cópia mais recente sem considerar quando a alteração começou. Corrija definindo como comparar candidatos, quais fontes informam o intervalo confiável e quem aprova o risco de perda. Não trate horário de criação como prova de limpeza. Se não for possível determinar um ponto seguro com confiança, exponha a incerteza e decida com as funções responsáveis.

## Exercício de mesa e laboratório autorizado

Um exercício de mesa pode começar com uma situação hipotética: durante a madrugada, o monitoramento informa que várias estações e um servidor de aplicação exibem sinais de criptografia não autorizada. O serviço de identidade apresenta alertas de acesso incomum. O painel de backup mostra uma cópia concluída, mas ainda não há confirmação independente de que as credenciais administrativas de produção não possam alterá-la. O objetivo não é adivinhar o atacante; é praticar decisões e identificar dependências.

Convide operações, segurança, aplicação, negócio, continuidade e as funções necessárias para retenção e comunicação. Dê ao grupo fatos em etapas, alguns confirmados e outros explicitamente incertos. Pergunte quem declara incidente, quais acessos são suspensos, como se verifica a independência das cópias, quem preserva evidência e quem escolhe o ponto de recuperação. Registre decisões, premissas e informação que cada papel precisa para agir.

Um laboratório autorizado pode então exercitar uma aplicação de teste com dados sintéticos, cópia identificada e ambiente segmentado. Antes de iniciar, obtenha autorização do responsável, defina escopo, limites, janela, participantes, dados, ações externas proibidas e condição de parada. Confirme que o laboratório não pode enviar tráfego ou alterar produção por engano. Se essas condições não puderem ser garantidas, mantenha o exercício no formato de mesa.

Durante a restauração, registre o ponto escolhido, as aprovações, os tempos por etapa, os erros e as verificações feitas. Valide uma função de negócio acordada e a limpeza do ambiente conforme a política interna. No encerramento, remova dados de teste segundo o procedimento aprovado, confirme que acessos temporários foram revogados e produza uma lista de ações com responsáveis e datas. Não transforme um exercício bem-sucedido em afirmação de imunidade a incidentes futuros.

## Roteiro de implementação

Comece com um inventário proporcional ao ambiente. Liste serviços, proprietários, conjuntos de dados, locais de cópia, dependências, identidades administrativas, retenção e procedimento existente. Marque lacunas como desconhecidas em vez de preenchê-las com suposições. Priorize sistemas cuja perda teria impacto operacional relevante ou cujo caminho de recuperação seja compartilhado por muitos outros.

Escreva procedimentos por serviço ou por padrão de arquitetura, com pré-requisitos, ordem, responsáveis, critérios de seleção de ponto, comandos de operação aprovados pela organização, verificações e condições de interrupção. Este artigo não fornece comandos; os passos técnicos precisam vir da documentação vigente da plataforma e da arquitetura local. Mantenha cópias das instruções e contatos em um local acessível durante falha, com controles de acesso adequados.

## Perguntas frequentes

### Backups em nuvem são automaticamente isolados?

Não. A localização em nuvem, por si só, não define quem pode acessar ou apagar as cópias, quais identidades controlam a conta, nem se a retenção pode ser alterada. Avalie permissões, separação administrativa, proteção contra exclusão, credenciais de emergência, registros e dependências do provedor. Confirme os recursos e limites na documentação atual do serviço utilizado.

### Uma cópia imutável elimina o risco de ransomware?

Não. Proteções contra alteração podem dificultar a remoção de determinadas cópias durante uma janela, conforme configuração e modelo do serviço, mas não provam que o conteúdo é limpo nem que a restauração será funcional. O ambiente, as chaves, as identidades, as políticas e a validação continuam relevantes. Trate a imutabilidade como uma camada a verificar, não como garantia absoluta.

### Replicação substitui backup?

Em geral, não deve ser presumido. Replicação pode ajudar na disponibilidade, mas pode propagar alterações destrutivas ou corrupção. Backups versionados podem oferecer pontos históricos, com custos e tempos diferentes. A arquitetura deve explicar que tipo de falha cada mecanismo cobre e como se recupera quando uma alteração indesejada já foi replicada.

### Qual frequência de cópia devo escolher?

Escolha a partir da perda de dados tolerável, da taxa de mudança, da capacidade de execução e dos requisitos do serviço. Defina o RPO com o proprietário do processo e confirme por evidência que os pontos disponíveis e os testes correspondem à meta. A frequência adequada para um conjunto de dados pode não servir para outro, mesmo que ambos pertençam à mesma aplicação.

### Quanto tempo manter as cópias?

Não há prazo universal. Considere o tempo necessário para detectar corrupção ou intrusão, a necessidade de recuperação, os requisitos legais e contratuais, os custos e a política de descarte. Documente a decisão e envolva as áreas competentes. Retenção maior amplia opções históricas, mas também mantém dados por mais tempo e exige governança.

### É seguro restaurar a cópia mais recente?

Somente se as evidências e os critérios de segurança sustentarem essa escolha. A cópia mais recente pode incluir alterações feitas durante um comprometimento não detectado. Compare candidatos, estado da aplicação, registros disponíveis e impacto de perder atualizações. Registre o que é fato, o que é inferência e qual risco foi aceito.

### Um teste de alguns arquivos é suficiente?

Ele demonstra uma capacidade limitada de leitura e restauração de arquivos. Não comprova que uma aplicação completa pode ser reconstruída, que os dados são consistentes ou que os usuários conseguem realizar suas funções. Faça testes proporcionais à criticidade e declare com precisão o escopo que cada resultado cobre.

### Como testar sem expor dados pessoais?

Prefira dados sintéticos ou mascarados que preservem as características necessárias para o teste. Quando dados reais forem indispensáveis, obtenha autorização, restrinja acesso, proteja o ambiente, evite integrações externas e defina o descarte. Consulte privacidade e jurídico sobre requisitos aplicáveis à organização e ao conjunto de dados.

### Como saber se o ambiente restaurado está limpo?

Não há uma única verificação que prove isso em todos os casos. Use uma origem confiável para sistemas e ferramentas, avalie contas e configurações, aplique controles de segurança, compare com evidências do incidente e valide com as equipes competentes. Documente limitações e monitore o serviço após a liberação. Uma varredura pode ajudar, mas não deve ser tratada como prova isolada.

### O que fazer quando a restauração demora mais que a meta?

Registre o resultado e identifique onde o tempo foi consumido: acesso, provisão, transferência, configuração, dependência, validação ou aprovação. O proprietário do processo deve decidir se reduz a tolerância, aceita a lacuna temporariamente ou prioriza uma correção. Não altere a métrica para fazer o teste parecer bem-sucedido; preserve o histórico e acompanhe a ação corretiva.

### Quem decide a volta à produção?

A organização deve nomear essa autoridade no plano. Normalmente, segurança informa o risco e os critérios de limpeza, operações confirma estabilidade técnica e o proprietário do serviço avalia a função de negócio; a autoridade final e eventuais aprovações adicionais precisam estar claras. Um serviço tecnicamente acessível não está automaticamente autorizado a voltar.

## Leitura relacionada

No capítulo 8, dedicado a operações de resposta, contenção e recuperação, o livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece contexto para pensar como a recuperação se integra ao trabalho de resposta. A leitura pode complementar a discussão sobre responsabilidades e decisões, mas não substitui documentação técnica atualizada, treinamento prático nem o julgamento da equipe diante das evidências do ambiente.
