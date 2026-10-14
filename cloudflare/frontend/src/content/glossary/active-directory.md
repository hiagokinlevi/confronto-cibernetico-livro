# Active Directory

## Conceito e finalidade

Active Directory, também chamado AD ou diretório ativo, é um serviço de identidade e administração de recursos usado em muitos ambientes Windows corporativos. Ele organiza informações sobre contas, computadores, grupos e outros objetos de rede e oferece meios para localizar esses objetos, autenticar identidades e aplicar configurações administrativas. Em vez de cada computador manter isoladamente a lista de usuários e regras da organização, o diretório permite que políticas e relações de confiança sejam administradas de maneira centralizada.

Sua função não se limita a permitir que alguém entre em uma estação Windows. Aplicações, servidores, dispositivos e serviços podem consultar identidades e grupos para decidir quem pode acessar determinado recurso. O diretório também guarda atributos que ajudam a descrever objetos, por exemplo, o nome de uma conta, a unidade organizacional em que ela está, ou a quais grupos pertence. Esses dados e relações formam parte do contexto de autorização, embora a decisão de acesso também possa depender da aplicação, do sistema operacional e de controles fora do diretório.

## Organização lógica

### Domínios, árvores e florestas

Um domínio é um limite administrativo e de replicação de diretório que reúne objetos sob uma estrutura comum de nomes e políticas. Os domínios são identificados por um nome DNS, como `corp.exemplo`. Uma organização pode manter mais de um domínio. Domínios relacionados podem ser agrupados em uma árvore e, em uma floresta, compartilhar elementos fundamentais de identidade e confiança. A floresta é frequentemente o limite de segurança mais amplo do AD tradicional, mas isso não significa que todo objeto ou servidor tenha os mesmos privilégios nem que todas as relações sejam equivalentes.

### Objetos e atributos

O diretório representa entidades como objetos. Um objeto pode corresponder a uma pessoa, uma conta de serviço, um computador, um grupo ou uma unidade organizacional. Cada objeto possui atributos e um identificador que o distingue no diretório. O nome apresentado em uma tela não é necessariamente único nem suficiente para identificar a conta: nomes podem mudar, ser reutilizados em sistemas diferentes ou aparecer de formas distintas em registros. Uma investigação robusta correlaciona identificadores, domínio, período e origem do evento.

A associação a grupos é especialmente relevante porque muitos sistemas concedem acesso a grupos em vez de manter permissões individuais. A cadeia de associação pode incluir grupos dentro de outros grupos. Essa composição facilita a administração cotidiana, mas torna menos óbvio o efeito final de uma alteração. Ao avaliar uma conta, é preciso compreender tanto os grupos diretos quanto as relações transitivas aplicáveis, além das permissões efetivas no recurso de destino. Um nome de grupo que parece privilegiado não prova sozinho que uma conta tenha controle irrestrito.

## Componentes e funcionamento

Os controladores de domínio são servidores que hospedam o serviço de diretório e participam da autenticação e administração do domínio. Em uma implantação com vários controladores, as alterações são replicadas entre eles para manter cópias coerentes do diretório, respeitando a topologia e o estado de conectividade. A existência de mais de um controlador melhora a disponibilidade, mas também significa que a equipe precisa saber qual servidor respondeu a uma consulta ou registrou uma alteração, e se a replicação estava saudável no período analisado.

## Uso na administração defensiva

O diretório é útil para dar identidade consistente a usuários e computadores, organizar permissões e aplicar configurações comuns em uma frota Windows. Na administração diária, equipes criam e desativam contas, alteram grupos, registram máquinas, delegam tarefas e revisam políticas. Essas operações devem seguir processos de aprovação, princípio do menor privilégio e separação de funções. Contas administrativas usadas para tarefas rotineiras elevam o impacto de erros e roubos de credenciais; contas de serviço sem proprietário ou finalidade documentada podem permanecer ativas além do necessário.

## Onde aparece numa investigação

A equipe pode examinar registros de segurança dos controladores, eventos de autenticação dos sistemas de origem e destino, histórico de alterações de objetos e grupos, auditoria de políticas, telemetria de endpoint e registros de aplicações. Os eventos locais variam com a política de auditoria, a versão, a retenção e o encaminhamento configurados. Dados de inventário ou exportações do diretório mostram um estado observado em determinado momento; não necessariamente preservam a história completa de como esse estado surgiu.

## Exemplo hipotético de análise

Imagine que uma conta de suporte, normalmente usada para tarefas em estações de usuários, apareça em registros de um servidor financeiro fora da janela habitual. Em paralelo, o diretório mostra que ela foi adicionada a um grupo que concede acesso administrativo a esse servidor. O achado inicial aponta uma hipótese de elevação de acesso, mas ainda não explica quem fez a inclusão, se o acesso foi efetivo ou se havia uma mudança autorizada.

A equipe compara o evento de alteração no controlador com registros do sistema de origem, identidade que executou a mudança, aprovação de mudança, estado anterior conhecido do grupo e telemetria do servidor financeiro. Se a identidade que realizou a alteração também apresenta atividade anômala, a hipótese ganha força; se um chamado aprovado coincide com o horário e o administrador confirma a atividade, a interpretação pode ser benigna. O exemplo ilustra a necessidade de correlacionar controle de identidade, destino e processo operacional, sem presumir que uma linha isolada descreva todo o incidente.

## Evidências, alcance e limites

Uma fotografia atual do diretório pode ajudar a responder quem existe, quais grupos estão associados e como a estrutura está organizada. Para reconstruir mudanças, são necessários registros históricos e fontes complementares, que podem não estar disponíveis ou conter lacunas. A replicação pode fazer com que controladores observem alterações em momentos diferentes. Uma coleta feita em apenas um deles não deve ser automaticamente tratada como retrato perfeito de toda a floresta naquele instante.

Erros de interpretação frequentes incluem tratar domínio, floresta, OU e grupo como termos intercambiáveis; considerar todo administrador local como administrador do domínio; supor que uma conta desativada deixou de ter sessões ou credenciais válidas em todos os lugares; e concluir que uma política configurada foi efetivamente aplicada. Outro erro é procurar apenas o nome visível de uma conta, ignorando identificadores, mudanças de nome, sistemas homônimos e diferenças de fuso. Um relatório útil explicita o que a evidência comprova, o que apenas sugere e o que ainda não foi observado.

## Resposta a incidentes e recuperação

Quando há indício de comprometimento de privilégios no diretório, o potencial de alcance pode incluir muitos usuários, dispositivos e serviços dependentes de suas decisões de identidade. A resposta precisa ser coordenada entre segurança, administração Windows, rede, equipes de aplicações e responsáveis de negócio. Antes de mudanças amplas, a equipe deve preservar evidências e estabelecer quais controladores, identidades, grupos, políticas e sistemas estão envolvidos. A contenção deve considerar efeitos operacionais: desativar indiscriminadamente contas de serviço ou interromper replicação pode derrubar serviços críticos e dificultar a própria análise.

As ações variam conforme o que foi confirmado. Podem incluir suspender ou restringir identidades afetadas, revogar sessões conforme os mecanismos disponíveis, remover associações não autorizadas, proteger estações administrativas e bloquear caminhos de comunicação usados no incidente. A correção de um único grupo ou senha pode ser insuficiente se houver outras alterações, credenciais expostas ou mecanismos de acesso independentes. A equipe deve verificar o estado em todos os controladores relevantes e acompanhar se as mudanças legítimas de contenção foram replicadas.

## Distinções úteis

Active Directory Domain Services (AD DS) é o serviço de diretório local mais frequentemente referido quando se diz simplesmente “Active Directory” em ambientes Windows tradicionais. Active Directory também é usado como nome guarda-chuva para recursos e produtos relacionados da Microsoft, portanto a conversa técnica deve especificar o componente quando a distinção afetar a análise. Microsoft Entra ID, anteriormente conhecido como Azure Active Directory, é um serviço de identidade em nuvem com arquitetura e capacidades próprias; não é simplesmente outro nome para AD DS. Organizações podem sincronizar identidades entre os dois, mas sincronização não elimina diferenças de objeto, autenticação, política e administração.

O termo “identidade” pode incluir uma pessoa, máquina, serviço ou aplicação. “Conta privilegiada” descreve uma identidade com permissões elevadas em algum escopo, que pode ser um dispositivo, aplicação ou domínio. Não se deve presumir que todo privilégio local decorra do AD, nem que todo objeto do AD possua privilégio administrativo. O escopo efetivo é determinado por vínculos e permissões concretos, examinados no sistema que protege o recurso.

## Perguntas frequentes

### O Active Directory é um servidor?

Não. É um serviço e uma estrutura de diretório sustentados por componentes que incluem controladores de domínio. Na conversa informal, alguém pode chamar um controlador de “o AD”, mas a distinção ajuda a identificar onde a evidência foi coletada e qual parte da infraestrutura está em questão.

### Um login bem-sucedido comprova que o ambiente é seguro?

Não. Ele indica que uma tentativa foi aceita naquele contexto. Não demonstra que a identidade foi usada por seu titular legítimo, que as permissões concedidas são apropriadas ou que outros componentes estejam íntegros. A análise de segurança precisa considerar origem, dispositivo, escopo de acesso e atividade subsequente.

### Toda mudança em grupo privilegiado é maliciosa?

Não. Mudanças administrativas legítimas são comuns. O sinal de interesse está na combinação de quem alterou, o que mudou, quando, de onde, com qual aprovação e que efeitos ocorreram. A falta de registro esperado aumenta a necessidade de esclarecimento, mas não substitui a verificação com o processo operacional.

### Desativar a conta encerra o incidente?

Não necessariamente. A ação reduz a possibilidade de novos usos em certas condições, mas pode não revogar sessões existentes, segredos já expostos, credenciais em outros sistemas ou acessos independentes. A equipe precisa identificar dependências e validar os mecanismos de revogação e recuperação pertinentes.

### O que significa “comprometimento do AD”?

É uma expressão ampla. Pode significar controle de um controlador, abuso de credenciais administrativas, alteração não autorizada de objetos ou perda de confiança na configuração e nos dados do diretório. Um relatório deve nomear o componente e o escopo confirmados, diferenciando evidência direta de hipótese. A expressão, sozinha, não informa quais domínios ou serviços foram afetados.

## Relação com o capítulo

Na versão original do manuscrito, o capítulo 8 é o ponto relacionado a este verbete. O AD merece atenção nesse contexto porque concentra relações de identidade e administração que podem conectar um evento aparentemente restrito a efeitos em outros sistemas. A nota prática é direta: comprometimento de privilégios no diretório pode ampliar o alcance do atacante e exige recuperação coordenada. Isso não significa que toda ocorrência envolvendo uma conta seja um incidente de domínio; significa que a investigação deve medir o escopo real das permissões e das dependências antes de declarar contenção ou recuperação concluídas.
