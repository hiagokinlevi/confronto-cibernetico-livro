# Pass-the-Hash

## Definição e ideia central

Pass-the-Hash, frequentemente abreviado como PtH, é o uso indevido de um hash de autenticação para obter acesso sem conhecer a senha correspondente em texto claro. Em determinados mecanismos de autenticação, o segredo empregado para provar a identidade não precisa ser a senha digitada pelo usuário: um valor derivado dela, mantido ou obtido em uma máquina, pode ser suficiente para produzir uma prova de autenticação. O ataque consiste em reaproveitar esse material no contexto apropriado, fazendo-se passar pela conta a que ele está associado.

Um hash de senha não é, por si só, uma senha em texto claro. É um valor produzido por uma função criptográfica e pode ser armazenado para viabilizar verificações ou participar de determinados protocolos. O fato de ser derivado não o torna inofensivo: em alguns cenários ele funciona como um segredo reutilizável. A formulação precisa é, portanto, “material de autenticação suficiente para um fluxo específico”, e não “qualquer hash permite entrar em qualquer sistema”.

## Contexto de autenticação

O PtH é mais associado a ambientes Windows e à autenticação integrada que pode usar material de credencial derivado da senha, especialmente em redes que empregam NTLM. Nesses contextos, um hash NT pode ter valor prático para autenticação em certas condições. A possibilidade concreta varia conforme o protocolo, a configuração do host, a identidade, a relação de confiança entre sistemas, as políticas locais e os mecanismos adicionais exigidos pelo serviço.

Autenticação e autorização são etapas distintas. A primeira responde quem está apresentando uma identidade válida; a segunda determina o que essa identidade pode fazer. Mesmo quando o uso indevido do hash é aceito, o acesso resultante permanece limitado pelas permissões concedidas à conta e pelas restrições do serviço. ## Como o abuso se encaixa numa cadeia de intrusão

Em geral, o PtH não é o ponto inicial obrigatório de uma invasão. Ele pode aparecer depois que um invasor obtém execução ou acesso administrativo em um host e consegue alcançar material de credencial em memória, em armazenamento protegido ou por meio de outro componente que o detenha. O acesso prévio pode decorrer de comprometimento da estação, exploração de uma vulnerabilidade, uso indevido de uma conta ou movimento a partir de outro sistema. Esta descrição é contextual, não uma sequência necessária nem um procedimento de exploração.

O termo nomeia o abuso de um material de autenticação específico; não descreve toda a intrusão. Uma ocorrência pode ser um episódio isolado, uma etapa de uma cadeia maior ou uma hipótese investigativa ainda não confirmada. Para avaliar o impacto, é preciso reconstruir de onde veio o material, qual conta ele representa, onde foi apresentado, que sessões foram criadas e que ações sucederam a autenticação.

## Onde aparece numa investigação

Os registros úteis variam por ambiente, mas podem incluir eventos de autenticação no host de origem e no destino, criação e encerramento de sessões, uso de serviços remotos, acesso a compartilhamentos, alterações de conta ou grupo, execução de processos e conexões de rede entre máquinas. Logs do provedor de identidade, controles de endpoint, sensores de rede e trilhas administrativas podem acrescentar contexto. O analista deve procurar padrões que, juntos, sejam incompatíveis com o uso esperado: uma conta acessando um host fora de sua rotina, autenticações em sequência entre sistemas sem relação aparente, logon remoto seguido de atividade administrativa incomum, ou uso de uma conta em horários e origens atípicos. Cada indicador admite explicações legítimas, como suporte remoto, tarefas agendadas ou mudanças de infraestrutura. O valor está na combinação com contexto e evidências independentes.

## Evidências e interpretação

Evidências que podem apoiar a hipótese incluem alertas de ferramentas de segurança sobre acesso a material de credencial, sinais de leitura incomum de áreas sensíveis do sistema, processos com comportamento anômalo, autenticação de rede fora do padrão e criação de sessões remotas inesperadas. Uma ferramenta pode classificar uma atividade como tentativa de extração ou reutilização; essa classificação deve ser validada com dados brutos, versão da ferramenta, configuração e sequência temporal. Ferramentas administrativas legítimas podem produzir sinais semelhantes.

## Exemplo hipotético

Imagine que uma estação de trabalho de uma equipe de suporte seja comprometida. Dias depois, uma conta administrativa usada naquela estação autentica-se num servidor que raramente acessa. A autenticação é seguida pela criação de uma sessão remota e por consulta a diretórios sensíveis. A equipe encontra também um alerta de acesso incomum a material de credencial na estação original. Essa combinação justifica investigar PtH: há uma possível fonte do segredo, uma identidade plausível e uso remoto posterior.

Ainda assim, o cenário não confirma sozinho o mecanismo. A conta pode ter sido usada por um técnico legítimo, a sessão pode ter sido iniciada por uma tarefa aprovada, ou outra credencial pode explicar o acesso. A equipe deve comparar a atividade com chamados de suporte, inventário de ferramentas, registros de autenticação e processos nos dois hosts. Se não conseguir demonstrar que o hash foi o material empregado, a conclusão deve permanecer como “uso suspeito de credencial compatível com PtH” ou formulação equivalente, e não como certeza.

## Distinções com termos próximos

**Roubo ou extração de credenciais** descreve a obtenção de segredos ou materiais de autenticação. Pode ser o antecedente do PtH, mas não é sinônimo: extrair um hash sem reutilizá-lo não demonstra Pass-the-Hash. Da mesma forma, é possível haver uso indevido de credencial obtida por outro caminho sem que o hash tenha sido extraído localmente.

**Quebra de senha** é a tentativa de descobrir uma senha que corresponda a um hash, por adivinhação ou busca. O PtH não exige recuperar a senha em texto claro; o valor é usado diretamente num fluxo que o aceita. As duas atividades podem aparecer na mesma operação, mas são técnicas e evidências diferentes.

**Pass-the-Ticket** refere-se à reutilização indevida de tickets de autenticação, tipicamente associados a Kerberos, em vez de um hash usado no contexto de PtH. Um ticket representa uma credencial temporária emitida por um sistema de autenticação e tem propriedades distintas de um hash de senha. Ver uma autenticação Kerberos não significa que ocorreu Pass-the-Ticket; é preciso identificar o abuso do ticket.

**Credential stuffing** costuma designar tentativas de autenticação com pares de usuário e senha reutilizados em serviços, frequentemente a partir de bases de credenciais previamente expostas. Não é o mesmo que apresentar um hash de autenticação em um protocolo que o aceita. **Pass-the-Password**, por sua vez, descreve o uso da senha conhecida em outra autenticação; o PtH não pressupõe que a senha tenha sido descoberta.

**Movimento lateral** é a progressão entre sistemas ou contas dentro de um ambiente. PtH pode viabilizar um salto lateral, mas movimento lateral pode ocorrer com senhas, tickets, sessões, ferramentas de administração ou outras técnicas. Nomear PtH sem identificar a reutilização do hash mistura uma técnica particular com um objetivo ou padrão mais amplo.

## Limitações e erros de interpretação

A expressão pode ser usada de modo amplo demais. Nem todo acesso remoto com credenciais comprometidas é PtH, e nem toda evidência de hash exposto mostra que ele foi empregado. O termo deve ser reservado para situações em que o material e o mecanismo de reutilização sejam sustentados pela evidência ou, quando ainda incertos, apresentados claramente como hipótese.

A compatibilidade depende do protocolo e da configuração. Controles podem restringir autenticação NTLM, impedir logons remotos para determinados tipos de conta, limitar privilégios administrativos, exigir autenticação multifator em caminhos compatíveis ou segmentar a rede. Tais controles reduzem oportunidades, mas não devem ser tratados como garantia universal. A eficácia varia por serviço, versão, configuração e exceções operacionais; um caminho legado pode continuar permitindo acesso mesmo quando os sistemas mais novos estão protegidos.

## Resposta a incidentes e redução de risco

A contenção precisa considerar que uma credencial reutilizável pode ter alcançado mais de um sistema. Identifique a máquina onde o material foi obtido e preserve evidências relevantes antes de ações que possam apagá-las, quando isso for compatível com a urgência e os procedimentos locais. Isole ou restrinja o host de origem conforme o risco, e examine os destinos que aceitaram autenticações suspeitas. A prioridade é interromper o uso não autorizado sem perder a possibilidade de reconstruir a cadeia.

A resposta deve revisar sessões, credenciais e caminhos laterais, além de conter o host onde o segredo foi obtido. Isso inclui localizar sessões ativas e acessos remotos associados à conta, identificar em quais hosts a identidade foi usada, verificar contas e segredos potencialmente expostos e procurar relações de confiança que permitiriam novas movimentações. Encerrar uma sessão não invalida automaticamente todo material reutilizável; e trocar uma senha sem identificar o escopo pode deixar sessões, cópias ou outros segredos comprometidos sem tratamento.

A rotação de credenciais deve ser planejada conforme a natureza da conta, os serviços dependentes e a evidência disponível. Se houver suspeita de exposição de credencial privilegiada, coordene a revogação ou redefinição com a equipe responsável, atualize dependências legítimas e acompanhe novas tentativas. A simples redefinição não substitui a investigação de persistência, alterações feitas pelo invasor ou outros segredos acessados durante o incidente. Contas de serviço merecem cuidado adicional para evitar indisponibilidade, sem adiar contenção necessária.

Bloquear um protocolo sem mapear dependências pode interromper serviços; exceções sem revisão criam caminhos esquecidos. Inventarie os fluxos, teste mudanças e registre justificativas.

## Perguntas frequentes

### O hash precisa ser quebrado antes de ser usado?

Não necessariamente. A característica central do PtH é que, em determinados fluxos, o hash ou material derivado funciona como credencial suficiente. Recuperar a senha em claro pode ser possível por outros meios, mas não é requisito para o abuso descrito pelo termo.

### Todo hash de senha pode ser passado?

Não. A expressão não se aplica indistintamente a qualquer hash, sistema ou protocolo. O material precisa ser aceito por um mecanismo de autenticação acessível, e condições de configuração, conta e serviço precisam permitir o uso. Conhecer um hash isolado não implica acesso automático.

### A presença de NTLM confirma um ataque?

Não. NTLM pode ser usado legitimamente em ambientes que ainda dependem dele. A investigação deve avaliar quem autenticou, de onde, em qual host, em que contexto e o que ocorreu em seguida. O protocolo é um dado contextual, não um veredito.

### Uma senha redefinida encerra o incidente?

Não por si só. A redefinição pode invalidar usos futuros de determinada credencial, mas é necessário verificar sessões, outros segredos possivelmente expostos, contas relacionadas, persistência e atividades nos destinos. O escopo da resposta depende das evidências e do desenho do ambiente.

### O que registrar quando a certeza é incompleta?

Separe a observação da interpretação. Registre os eventos confirmados, os hosts e contas envolvidos, as fontes examinadas, a lacuna que impede a confirmação e o grau de confiança da hipótese. Atualize a conclusão quando novas evidências forem obtidas, preservando o histórico da análise.

## Relação com o capítulo

Na organização da versão original do manuscrito, o tema se relaciona ao capítulo 1. O verbete amplia a definição revisada ao situar o PtH na autenticação, na investigação de sessões e no movimento entre hosts, mantendo a distinção entre um indício compatível e a confirmação do mecanismo.
