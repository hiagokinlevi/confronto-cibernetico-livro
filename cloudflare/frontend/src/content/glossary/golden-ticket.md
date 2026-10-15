# Golden Ticket

## Conceito

Golden Ticket, ou tíquete dourado, é um tíquete Kerberos forjado a partir de segredos de alto privilégio de um domínio comprometido. Em termos práticos, o atacante que obtém material criptográfico associado à conta de serviço do centro de distribuição de chaves do Kerberos (KRBTGT) pode produzir tíquetes de concessão de tíquetes (TGTs) que parecem ter sido emitidos pelo domínio. Um TGT legítimo é a credencial temporária que permite ao cliente solicitar tíquetes de serviço para recursos; o Golden Ticket falsifica essa etapa de confiança e pode representar identidades e atributos que não correspondem a uma autenticação normal.

O valor do artefato está menos em uma sessão específica e mais na possibilidade de se apresentar como uma identidade aceita pelo domínio. A identidade escolhida pode ser privilegiada, mas não precisa ser uma conta administrativa conhecida. Grupos, identificadores e outros atributos contidos no tíquete podem ser usados para tentar obter autorização ampla, conforme as políticas e os serviços envolvidos. A aceitação não equivale a controle irrestrito de todo recurso: cada serviço ainda aplica suas regras, e diferentes sistemas podem validar os tíquetes de modos distintos.

A palavra “dourado” descreve a importância do tíquete para quem o forja, não uma categoria oficial de credencial nem uma propriedade visível ao usuário. É uma técnica de persistência e falsificação de identidade associada a comprometimento profundo do Active Directory. Ela é especialmente relevante porque pode permitir acesso sem repetir o processo habitual de autenticação da conta representada, enquanto os segredos que a sustentam permanecerem utilizáveis.

## Contexto Kerberos necessário

Kerberos autentica por tíquetes. Em um domínio Windows, o controlador de domínio atua como centro de distribuição de chaves: o cliente obtém primeiro um tíquete de concessão de tíquetes (TGT) e o apresenta para solicitar tíquetes de serviço destinados a servidores e aplicações. O serviço valida o tíquete e aplica suas regras de autorização; a senha do usuário não é enviada a cada recurso acessado.

A conta interna KRBTGT fornece o segredo usado para assinar e validar TGTs. Quem obtém esse material pode fabricar TGTs aceitos pelo domínio, dentro das condições de validade e configuração. Isso distingue Golden Ticket de roubo de um tíquete legítimo: a credencial é criada com atributos escolhidos. A aceitação não torna todo recurso automaticamente acessível; serviços, políticas, replicação entre controladores e expiração afetam o resultado. A senha da identidade representada e o segredo KRBTGT são distintos.

## Por que o termo importa

Golden Ticket sinaliza violação profunda da fronteira de identidade: o invasor alcançou, ou recebeu de outro agente, material capaz de contornar a emissão normal de TGTs. A investigação deve apurar como KRBTGT foi exposta, quais controladores ou backups foram acessados, quais identidades foram representadas e que serviços aceitaram tíquetes suspeitos.

Um acesso pode aparecer associado a uma conta válida sem demonstrar que seu titular iniciou a autenticação. Os registros podem estar distribuídos entre controladores, estações e servidores. A falta de um evento esperado não prova falsificação: auditoria incompleta, retenção curta ou atendimento por outro controlador podem explicar a lacuna. É preciso correlacionar contexto, origem, horário, duração, tipo de logon e comportamento histórico.

## Como reconhecer e investigar

Não há campo universal que marque um tíquete como Golden Ticket. A análise procura incoerências entre o tíquete, o histórico da identidade e o fluxo normal. Um indício isolado pode ter explicação legítima; a hipótese se fortalece quando fontes independentes convergem.

- Eventos de concessão de TGT e de serviço nos controladores podem revelar sequências incompletas ou incompatíveis. A ausência de registro também pode ser falha de auditoria ou coleta.
- Compare identificadores e grupos apresentados com o diretório e o histórico: privilégios inesperados, identidade inexistente ou desativada e atributos divergentes merecem investigação.
- Períodos de validade, horários, origem e padrão de acesso atípicos são sinais contextuais. Políticas, migrações e relógios desalinhados também os explicam.
- Logs dos serviços podem mostrar acesso privilegiado sem antecedente compatível. Registros de controladores, endpoints e rede ajudam a reconstruir a sessão, mas nenhuma fonte isolada garante identificação.
- Acesso anômalo a controladores, memória sensível ou backups pode explicar a exposição do segredo; não prova, sozinho, uso de tíquete forjado.

Construa uma linha do tempo correlacionando autenticações, acesso a serviços, alterações no diretório e atividade nos controladores que atenderam as solicitações. Considere diferenças de relógio e retenção. Preserve os dados originais e documente as lacunas.

Investigue também o que a identidade fez: recursos consultados, mudanças em contas ou grupos, serviços instalados e possível obtenção de outras credenciais. A capacidade de usar um tíquete não prova que cada ação ocorreu. Separe capacidade, tentativa e impacto observado.

## Exemplo hipotético

Em uma organização, uma conta de serviço acessa de madrugada um servidor de arquivos com privilégios elevados. O histórico da conta não mostra esse padrão, e o controlador não registra uma sequência de concessão de TGT compatível com a sessão. Na mesma janela, há indício independente de acesso não autorizado a um controlador de domínio. A combinação justifica investigar falsificação e conter o risco, mas não fecha o diagnóstico: falha de coleta, delegação ou manutenção legítima também precisam ser avaliadas. A hipótese ganha força com correlação técnica e evidência de exposição do segredo.

O exemplo mostra por que detecções baseadas apenas em nomes de contas privilegiadas falham. Um agente pode representar conta de aparência comum com atributos amplos. Regras úteis cruzam identidade, grupos, origem, serviço de destino e coerência da emissão, sem tratar um único indicador como prova.

## Distinções com técnicas próximas

**Pass-the-Ticket** reutiliza um tíquete obtido previamente, em geral roubado de uma sessão. O artefato pode ser legítimo, embora seu uso seja indevido; a investigação procura a sessão e o endpoint de origem. Golden Ticket fabrica TGTs com segredo KRBTGT e exige avaliar a confiança do domínio.

**Silver Ticket** falsifica um tíquete de serviço para um destino específico usando o segredo da conta de serviço correspondente. Pode ser apresentado diretamente ao serviço, produzindo trilha diferente nos controladores. Seu alcance tende a ser mais delimitado, mas pode coexistir com Golden Ticket.

O uso de credenciais administrativas por autenticação normal, ou o abuso de políticas de emissão, também é grave, mas não comprova comprometimento de KRBTGT. A classificação deve indicar qual segredo foi exposto e que tipo de tíquete foi manipulado.

## Limitações e erros de interpretação

A falta de um evento pode decorrer de auditoria ausente, encaminhamento interrompido, sobrescrita ou processamento em outro controlador. Horários incomuns podem refletir relógios desalinhados; contas desativadas podem aparecer em artefatos antigos; grupos e acessos mudam legitimamente. Compare alterações aprovadas, responsáveis e fontes independentes, registrando grau de confiança e lacunas.

Trocar a senha da conta representada não é remediação suficiente se KRBTGT foi comprometida. No sentido oposto, uma anomalia Kerberos não comprova por si só posse desse segredo: tíquete roubado, configuração, delegação ou atividade legítima podem produzir sinais parecidos. Reiniciar servidores, apagar tíquetes em uma estação ou bloquear uma conta pode interromper uma sessão, mas não restaura a raiz de confiança nem remove persistência adicional.

## Resposta e recuperação

Trate o caso como possível comprometimento de domínio. Preserve evidências e limite o acesso adversário a controladores e sistemas de administração. Identidade, resposta a incidentes e responsáveis por serviços críticos devem coordenar a contenção, pois mudanças isoladas podem interromper autenticação e aplicações.

Se a exposição de KRBTGT for confirmada ou altamente provável, a recuperação costuma exigir redefinições coordenadas e em etapas, com replicação entre controladores e janela para que tíquetes antigos deixem de ser aceitos. Uma única troca pode não remover todo material de chave anterior ainda aceito. Siga procedimento validado para a versão e o estado do ambiente; confirme replicação e impacto antes de avançar.

Planeje a operação conhecendo controladores ativos, estado de replicação, backups, contas de serviço e dependências Kerberos. Se um invasor ainda controla um controlador ou mantém privilégios para obter o segredo, poderá expor a nova chave. Portanto, investigue a via inicial, proteja estações administrativas, procure persistência e avalie credenciais relacionadas. Rotação indiscriminada sem escopo pode causar indisponibilidade sem corrigir a causa.

Após a mudança, valide a saúde dos controladores, observe autenticações e teste serviços essenciais. A conclusão requer evidência de que a confiança foi restaurada e o acesso adversário removido ou contido; uma senha alterada ou um alerta silenciado não basta.

## Quando o termo é útil

Na triagem, “Golden Ticket” nomeia uma hipótese específica quando os sinais apontam para TGT fabricado com material KRBTGT. O registro do incidente deve explicitar evidências, controladores e serviços envolvidos, impacto confirmado e incertezas; o rótulo não substitui a descrição. Para defesa, o conceito ressalta proteger controladores, credenciais administrativas, backups e caminhos de recuperação, além de centralizar auditoria suficiente para comparar emissão e uso de tíquetes.

## Perguntas frequentes

### Trocar a senha da conta apresentada no tíquete resolve?

Não necessariamente. A conta representada e KRBTGT são segredos diferentes. A mudança pode ser necessária para conter o comprometimento daquela identidade, mas não invalida por si só a capacidade de emitir TGTs forjados se o segredo KRBTGT continuar comprometido.

### Um Golden Ticket garante acesso a qualquer sistema do domínio?

Não. Ele pode permitir que uma identidade forjada seja aceita em determinados fluxos, mas o acesso depende da validade do tíquete, da configuração dos serviços, dos privilégios e das decisões de autorização. Recursos fora do domínio ou com validação própria podem se comportar de outro modo.

### É possível confirmar o uso só por um log?

Em geral, não é prudente. A análise deve combinar registros de controladores, endpoints e serviços com atributos, horários, origem e contexto operacional. Um alerta pode justificar contenção e investigação, mas a confiança na conclusão cresce com evidências independentes e coerentes.

### A rotação do segredo encerra o incidente?

Não por si só. Ela é parte da recuperação quando a chave foi exposta, mas o agente pode permanecer no ambiente ou recuperar o segredo se a causa não for removida. É necessário verificar replicação, invalidar a confiança comprometida conforme o procedimento aplicável e investigar persistência e credenciais relacionadas.

## Relação com o capítulo

Na versão original, o capítulo 6 oferece o contexto para relacionar Golden Ticket à falsificação de identidade Kerberos e ao comprometimento do domínio. Neste verbete, o ponto central é interpretar o tíquete como evidência de uma falha na raiz de confiança, investigar sua origem e planejar recuperação coordenada.
