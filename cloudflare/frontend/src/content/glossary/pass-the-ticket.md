# Pass-the-Ticket

## Definição

Pass-the-Ticket (PtT) é a reutilização indevida de um tíquete de autenticação para assumir acesso a recursos em um ambiente de identidade. Em vez de autenticar-se novamente com a senha da conta, o agente da ameaça apresenta um tíquete válido que já foi emitido para uma identidade. Se o serviço de destino aceitar esse tíquete e as condições de autorização forem satisfeitas, a sessão pode ser reconhecida como pertencente àquela identidade.

O termo descreve uma forma de abuso de material de autenticação, não uma família única de ferramentas nem uma vulnerabilidade específica. O tíquete funciona como uma credencial temporária, com escopo e propriedades definidos pelo protocolo e pela infraestrutura. Seu uso pode ser legítimo: tíquetes são parte normal do funcionamento de sistemas de autenticação integrada. PtT ocorre quando alguém que não deveria dispor daquele material o reaproveita para obter ou manter acesso.

## Contexto técnico

Em arquiteturas que usam Kerberos, um usuário ou serviço obtém tíquetes que comprovam sua identidade perante componentes confiáveis do domínio. De forma simplificada, um tíquete de concessão de tíquetes (TGT) permite solicitar tíquetes destinados a serviços; um tíquete de serviço é apresentado ao serviço correspondente para estabelecer a autenticação. Os detalhes variam conforme implementação, configuração, versões e mecanismos auxiliares.

## O que acontece conceitualmente

Uma sequência de alto nível pode ser entendida assim: um tíquete é emitido para uma identidade; o material torna-se acessível a um agente não autorizado; ele é apresentado a um serviço que confia naquela identidade; e o serviço concede uma sessão ou operação compatível com as permissões da conta. A exposição pode decorrer de comprometimento de uma máquina, sessão, processo, armazenamento ou outra falha de proteção. Este verbete não descreve procedimentos para extrair, modificar ou apresentar tíquetes.

O acesso resultante herda principalmente as permissões associadas à identidade e ao serviço, em lugar de criar privilégios por si só. Se a conta só puder ler determinado conjunto de dados, a posse de seu tíquete não transforma automaticamente essa conta em administradora. Por outro lado, uma conta privilegiada pode dar ao invasor um alcance amplo, especialmente quando seus direitos se estendem a sistemas ou serviços sensíveis.

## Diferenças em relação a técnicas próximas

PtT costuma ser confundido com Pass-the-Hash (PtH). No PtH, a técnica explora material derivado da senha, como um hash, em fluxos de autenticação que o aceitam. Em PtT, o material reaproveitado é um tíquete. Os dois podem evitar o conhecimento da senha em determinadas circunstâncias, mas os artefatos, protocolos, registros e condições de uso são diferentes. Um alerta sobre credencial derivada não deve ser renomeado como PtT sem evidência de tíquete.

Também é diferente de roubo ou furto de tíquete. Esses termos se referem à obtenção não autorizada do artefato; PtT enfatiza seu reaproveitamento para autenticação. Na prática, uma investigação pode demonstrar o uso anômalo sem descobrir como o tíquete foi obtido, ou identificar acesso ao material sem provar que ele foi apresentado com sucesso. Separar aquisição, posse, apresentação e aceitação ajuda a expressar o que se sabe e o que ainda é hipótese.

Pass-the-Hash, PtT e Pass-the-Cookie compartilham a ideia ampla de reutilizar material de autenticação, mas não são intercambiáveis. Um cookie de sessão pertence a outro contexto de aplicação e pode representar uma sessão já autenticada. Já a reutilização de uma senha, a autenticação por token e o abuso de credenciais armazenadas também têm características próprias. O ponto em comum não apaga a necessidade de identificar o artefato observado.

Por fim, delegação Kerberos, autenticação integrada e renovação de tíquetes são comportamentos legítimos em muitos ambientes. Uma delegação configurada pode permitir que um serviço atue em nome de um usuário sob condições previstas. A existência de um tíquete de serviço ou de acessos a vários recursos não caracteriza, isoladamente, PtT. É necessário determinar se o uso e o caminho de obtenção estavam autorizados.

## Por que o termo é útil

O rótulo PtT ajuda a descrever um modo de autenticação sem atribuir de imediato uma ferramenta, uma pessoa ou uma motivação. É útil em relatórios de incidente quando há sinais de que um tíquete foi reaproveitado, mas a obtenção inicial do material ainda não está esclarecida. Também ajuda a organizar hipóteses de investigação: qual identidade foi representada, que recurso aceitou a autenticação e qual evento pode explicar a emissão ou exposição anterior.

## Evidências e investigação

A análise depende de eventos de autenticação, emissão de tíquetes e contexto das contas envolvidas. A investigação começa por delimitar a conta, a janela de tempo e os ativos suspeitos. Em seguida, relaciona registros disponíveis dos controladores de domínio com eventos de logon e auditoria nos sistemas de origem e destino. A cobertura varia: políticas de auditoria, retenção, encaminhamento e produto de segurança podem deixar lacunas importantes.

Entre os sinais que podem merecer correlação estão:

- solicitações de tíquetes associadas a horários, clientes ou destinos atípicos para aquela identidade;
- autenticações em serviços que não combinam com a função, rotina ou histórico recente da conta;
- uso quase simultâneo de uma mesma identidade em origens incompatíveis ou geograficamente distantes, quando a telemetria permite avaliar isso;
- logons de rede sem um padrão correspondente de atividade interativa esperado, ou o inverso;
- acessos a recursos sensíveis logo após uma atividade suspeita no endpoint, como comprometimento ou execução anômala;
- diferenças entre o tipo de autenticação observado e aquele normalmente empregado pelo serviço.

Esses sinais não são indicadores exclusivos. Um usuário pode trocar de estação, trabalhar fora do horário, usar VPN, executar manutenção ou provocar acessos indiretos por meio de aplicações. Serviços automatizados também podem autenticar em nome de usuários. Um alerta só se fortalece quando várias fontes independentes concordam e a explicação legítima é examinada.

Os eventos Kerberos de emissão e solicitação, incluindo registros de TGT e tíquetes de serviço, podem ajudar a reconstruir a sequência, se a auditoria correspondente estava habilitada e os registros foram preservados. Eventos de logon nos endpoints e servidores podem mostrar que uma identidade foi aceita, mas nem sempre identificam claramente como o material chegou ao cliente. Telemetria de EDR pode contextualizar processos e sessões; inventário de ativos e registros de mudanças podem explicar comportamentos esperados.

É importante distinguir o evento de solicitação do sucesso de acesso. Uma solicitação incomum pode falhar, e uma autenticação aceita pode não gerar uma operação relevante. Logs de aplicação, compartilhamento de arquivos, serviços remotos e sistemas de administração podem mostrar o que foi feito depois do logon. A ausência desses registros não demonstra ausência de atividade: talvez a auditoria não estivesse configurada, o evento tenha expirado ou o serviço não produza a evidência esperada.

## Exemplo hipotético

Imagine que a conta de uma analista costuma acessar um servidor de arquivos a partir do notebook corporativo durante o expediente. Em uma madrugada, os registros mostram que a mesma identidade acessou um serviço administrativo a partir de uma estação que não aparece no histórico recente. Pouco antes, o sistema de identidade registrou emissão de tíquetes para essa conta; no mesmo intervalo, a estação conhecida da analista apresentou sinais de comprometimento.

Esse conjunto justificaria investigar possível reutilização de tíquete, mas ainda não provaria PtT. A equipe verificaria se a analista estava de plantão, se a estação incomum é legítima, se algum serviço automatizado agiu em seu nome, se os relógios estão sincronizados e se o acesso ao serviço foi efetivamente aceito. Também buscaria atividade do endpoint que pudesse explicar exposição de material de autenticação e ações realizadas após o logon. Se os registros não mostrarem apresentação de tíquete ou a identidade tiver sido autenticada por outro método, a hipótese deve ser ajustada.

O exemplo não descreve uma sequência operacional de ataque. Ele ilustra o tipo de correlação e validação necessária para transformar um alerta em uma conclusão técnica proporcional às evidências.

## Limitações e erros de interpretação

Outro erro é supor que tíquetes têm validade universal ou que toda troca de senha os invalida imediatamente em todos os sistemas. O ciclo de vida e a aceitação dependem da arquitetura, do tipo de tíquete, das políticas e do estado de cada componente. Da mesma forma, um tíquete expirado, revogado ou incompatível pode não ser aceito. A equipe deve verificar o comportamento real do ambiente, sem aplicar uma regra simplificada a todos os casos.

## Resposta a incidentes e redução de risco

Quando a hipótese é plausível, a resposta deve conter o acesso e preservar evidências. A equipe pode isolar ou restringir o endpoint suspeito conforme o impacto, proteger os serviços e contas afetados e registrar a linha do tempo antes que os dados sejam sobrescritos. A contenção precisa considerar dependências operacionais: desabilitar uma conta de serviço crítica sem plano pode interromper sistemas, enquanto aguardar certeza total pode ampliar o acesso indevido.

Revogar sessões, limitar a conta, redefinir credenciais e invalidar material de autenticação são medidas que dependem do sistema e do alcance do comprometimento. Trocar a senha, por si só, pode não encerrar imediatamente todos os acessos já estabelecidos. O plano deve identificar os mecanismos aplicáveis, o risco de interromper serviços e como verificar a efetividade da contenção. Se uma conta privilegiada for envolvida, revisar também relações de delegação, permissões e outras identidades potencialmente expostas.

Após conter, examine o endpoint que pode ter exposto a credencial, a conta representada, os serviços acessados e possíveis alterações feitas durante as sessões. Preserve logs relevantes, inclusive do domínio e das aplicações, segundo a política de retenção e as necessidades de investigação. Corrija a causa inicial quando identificada; sem isso, uma sessão ou um novo acesso podem ser obtidos por outro caminho.

## Perguntas frequentes

### PtT significa que a senha foi descoberta?

Não necessariamente. A técnica se refere ao reaproveitamento de um tíquete. A senha pode não ter sido conhecida pelo agente. Ainda assim, a investigação deve avaliar se a senha, a sessão ou outros fatores também foram expostos, pois o tíquete observado pode ser apenas parte de um comprometimento mais amplo.

### Uma solicitação incomum de tíquete confirma um ataque?

Não. Ela constitui um indício que requer contexto e correlação. Deve-se verificar se o pedido foi seguido de autenticação aceita, se o cliente e o serviço são esperados e se existe uma explicação operacional plausível. Uma solicitação isolada não demonstra reutilização indevida.

### Mudar a senha encerra o acesso?

Não se deve presumir isso. Sessões existentes, tíquetes já emitidos e mecanismos de renovação podem ter comportamento próprio. A resposta precisa considerar a implementação concreta, os tempos de validade e as opções de revogação ou invalidação disponíveis, além de confirmar nos registros se o acesso cessou.

### O que registrar em um relatório?

Descreva a identidade, os sistemas de origem e destino, o tipo de autenticação observado, os eventos que sustentam a hipótese, o nível de confiança e as lacunas de telemetria. Separe fatos confirmados de inferências. Se não for possível demonstrar que um tíquete foi reapresentado, prefira dizer “possível abuso de tíquete” ou “atividade compatível com PtT” e explicitar o que falta confirmar.

## Relação com o capítulo

Na versão original, Pass-the-Ticket se relaciona ao capítulo 6. O conceito ajuda a compreender como material de autenticação pode ser abusado para acessar recursos e por que a investigação precisa ligar eventos de emissão e autenticação ao contexto da conta, do endpoint e do serviço. A referência ao capítulo situa o tema; a análise de cada incidente continua dependendo das evidências do ambiente observado.
