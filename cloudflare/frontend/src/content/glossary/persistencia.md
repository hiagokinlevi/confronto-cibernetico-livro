# Persistência

## Definição e alcance

Persistência (*persistence*) é a capacidade de manter ou recuperar acesso a um ambiente depois de interrupções ou de ações defensivas. O conceito descreve um resultado ao longo do tempo: uma presença que não desaparece necessariamente quando uma sessão termina, uma máquina reinicia, uma credencial é trocada ou um componente malicioso é removido. Em segurança, costuma ser tratada como uma fase ou objetivo de uma intrusão, mas a palavra também aparece para descrever mecanismos legítimos de software. O contexto e as evidências determinam qual sentido se aplica.

Persistir não significa permanecer conectado sem interrupção. Um invasor pode perder temporariamente uma sessão e recuperar acesso mais tarde por outra via. Também pode manter uma capacidade latente sem usá-la durante dias ou semanas. Por isso, a observação de uma desconexão, de um período sem alertas ou de uma máquina aparentemente limpa não demonstra, por si só, que o acesso foi eliminado.

A definição não afirma que toda persistência seja sofisticada, bem-sucedida ou instalada no próprio computador. O acesso pode depender de uma conta válida, de uma configuração alterada, de um serviço, de uma integração ou de outro recurso do ambiente. Uma ação defensiva pode interromper uma via e deixar outra intacta. O ponto essencial é a continuidade ou a possibilidade de retorno, não a forma particular usada para alcançá-la.

## Função em uma intrusão

Uma intrusão pode envolver descoberta, acesso, execução, movimentação entre sistemas e outros objetivos, sem seguir uma sequência linear. Persistência torna-se relevante quando o agente busca conservar uma oportunidade de acesso além da sessão ou do evento inicial. Isso pode ampliar o tempo disponível para observar, coletar dados, alterar recursos ou retomar atividades após contenção parcial.

A capacidade de retornar não é igual ao uso efetivo dela. Uma sessão ativa pode existir sem um caminho duradouro identificado; inversamente, um mecanismo de retorno pode permanecer sem atividade visível. Para a defesa, a pergunta útil vai além de “o processo suspeito foi encerrado?”: que condições ainda permitiriam a retomada? Isso inclui identidades, configurações, dependências e relações de confiança, além dos arquivos e processos da máquina afetada.

## Formas que pode assumir

Os caminhos variam conforme arquitetura, privilégios e controles. As categorias abaixo orientam a investigação, mas nenhuma comprova comprometimento isoladamente.

- **Identidades e credenciais:** contas ou permissões alteradas sem justificativa, credenciais expostas, sessões ou tokens válidos e fatores de autenticação modificados.
- **Execução recorrente:** tarefas, serviços, itens de inicialização, extensões ou componentes acionados no logon, na inicialização ou periodicamente.
- **Configuração e administração:** mudanças em políticas, ferramentas de gerenciamento, atualizações, regras de acesso ou automações.
- **Integrações e confiança:** aplicativos autorizados, chaves, contas de serviço e conexões com terceiros que mantenham capacidade de acesso.
- **Recursos distribuídos:** servidores, nuvem, dispositivos de rede e ambientes de desenvolvimento fora do equipamento do primeiro alerta.

A mesma conta de serviço ou tarefa pode ser legítima. Apure quem criou ou alterou o recurso, quando, com quais privilégios e se a finalidade observada corresponde ao propósito documentado.

## Como investigar defensivamente

Delimite identidades, dispositivos, aplicações, redes e períodos possivelmente envolvidos. Escopo estreito favorece pontos cegos; escopo amplo sem prioridade atrasa a contenção. Revise os limites quando surgirem vínculos e registre hipóteses, confiança e fatos que as sustentam.

### Construir uma linha do tempo

Organize autenticações, alertas, mudanças administrativas, instalação ou execução de componentes e ações de resposta. Confirme fuso, sincronização e atrasos de ingestão. A sequência orienta perguntas, mas coincidência temporal não prova causalidade. Relacione eventos a identidades e recursos: nomes de conta, endereços e processos podem ser compartilhados, reutilizados ou falsificados. Origem, método, privilégios, dispositivo e atividade subsequente dão contexto.

### Procurar relações

Inventarie contas humanas e não humanas, grupos, permissões, credenciais, sessões, aplicações autorizadas, serviços, tarefas, inicialização, ferramentas administrativas e integrações pertinentes. Para itens incomuns, procure relação com a atividade observada: proximidade temporal, mesma identidade ou infraestrutura, origem relacionada e corroboração independente.

O caminho de retorno pode estar em uma conta de nuvem, automação, aplicação conectada ou sistema de identidade, não no computador do primeiro alerta. Compare o estado atual com configuração aprovada ou histórico confiável. Diferenças apontam alterações, mas não provam abuso; se faltar referência íntegra, declare a limitação e consulte registros independentes e responsáveis pelo sistema.

## Evidências e interpretação

Podem ajudar trilhas de autenticação e auditoria, histórico de mudanças, inventários de configuração, telemetria de processos e serviços e registros de provedores de identidade ou nuvem. Em dispositivos, observe alterações em arquivos, configurações de execução, serviços, tarefas e inicialização. Em serviços remotos, procure registros de criação de contas, concessão de consentimento, emissão e uso de credenciais, políticas e atividade administrativa.

Combine fontes com funções distintas: criação pode indicar quando um recurso surgiu, autenticação pode revelar uso e auditoria pode apontar quem alterou. Nenhuma necessariamente conta toda a história. Falta de registro pode significar que não houve ação, mas também auditoria desabilitada, retenção expirada, falha de coleta ou perda de visibilidade. Trate ausência como limite de observação, não como prova de inatividade.

Preserve fonte, horário, responsável pela coleta e transformações aplicadas. Se a resposta alterar o estado do sistema, registre o quê, quando e por quem. Colete dados voláteis quando viável, sem atrasar medida indispensável para reduzir dano. Uma configuração desconhecida é pista, não veredito: avalie origem, autorização, finalidade, prevalência em ativos equivalentes, comportamento e relação com o incidente. Registre também evidência contrária e não atribua intenção com base em uma anomalia isolada.

## Exemplo hipotético

Uma equipe detecta atividade incomum em uma estação e desativa o processo relacionado. Os alertas cessam, mas a revisão de autenticações e mudanças administrativas encontra uma conta de serviço cuja permissão foi ampliada no mesmo intervalo. Como a conta atende uma integração legítima, sua presença não prova abuso. A equipe verifica responsável, justificativa, origem da autenticação, escopo da permissão e vínculo com a atividade, consultando também o proprietário da integração.

Se os registros confirmarem mudança não autorizada ligada ao incidente, a conta ou permissão pode constituir via de retorno que sobreviveu à interrupção local. A resposta trata a identidade e avalia sistemas que confiaram nela. Se a mudança for autorizada e sem vínculo, documenta essa explicação e mantém abertas outras hipóteses. O exemplo mostra que persistência orienta a busca por continuidade, mas não substitui validar evidências.

## Persistência, acesso inicial e movimento lateral

**Acesso inicial** é a entrada ou obtenção da primeira posição; persistência é manter ou recuperar acesso. Uma ação pode contribuir para ambos, e talvez não seja possível datar cada fase de imediato. Ainda assim, bloquear a via inicial observada não garante que os meios de retorno foram removidos.

**Movimento lateral** é a passagem entre posições ou recursos no ambiente. Pode criar caminhos adicionais, mas não é sinônimo de persistência: pode haver retorno sem deslocamento entre sistemas ou deslocamento sem mecanismo duradouro identificado. A investigação reconstrói tanto a extensão quanto as condições de retorno.

O termo também difere de **persistência de dados**, propriedade pela qual dados sobrevivem ao encerramento de um processo. Em resposta a incidentes, refere-se à continuidade da capacidade de acesso malicioso. O contexto separa comportamento normal de tecnologia de intenção adversária.

## Limitações e erros comuns

Registros podem ser incompletos, ter retenção curta ou estar distribuídos entre equipes. Ambientes mudam continuamente; contas compartilhadas e automações dificultam atribuição. Credenciais ou acesso externo podem permitir retorno sem alteração óbvia no endpoint.

Erros recorrentes incluem:

- declarar remoção porque um arquivo foi apagado, processo encerrado ou dispositivo reiniciado;
- procurar só nas máquinas alertadas, ignorando identidade, nuvem e integrações;
- classificar toda tarefa, conta ou serviço desconhecido como malicioso sem validar finalidade;
- tomar falta de alertas como confirmação de limpeza, apesar de coleta incompleta;
- confundir artefato com prova de uso, autoria ou intenção;
- remover recursos legítimos sem demonstrar redução de risco;
- supor que uma varredura cobre todos os caminhos.

A busca indefinida por qualquer possibilidade também impede uma conclusão operacional. Declare escopo, fontes, lacunas e hipóteses descartadas. “Não encontramos evidência nas fontes examinadas” é mais preciso que prometer ausência absoluta.

## Implicações para resposta a incidentes

A contenção deve interromper o abuso e considerar evidências e serviços essenciais. Conforme alcance e criticidade, pode envolver restringir acessos, corrigir permissões, revogar credenciais e sessões, isolar ativos ou limitar integrações. Revogação deve considerar dependências legítimas; corrigir um dispositivo não basta se a identidade que o controlava continuar comprometida.

Depois, remova ou corrija vias confirmadas e dependências relacionadas com os responsáveis pelos serviços. Verifique credenciais antigas, cópias de configuração e permissões equivalentes em recursos correlatos. Recupere de estado confiável, reforce controles e monitore reativação. Uma volta de atividade pode ser via esquecida, nova tentativa ou incidente distinto; compare evidências.

Critérios de encerramento devem refletir o escopo: mudanças não autorizadas tratadas, acessos relevantes invalidados quando cabível, ativos avaliados e registros novamente disponíveis. A nota prática resume a disciplina: verifique contas, serviços, tarefas e outros caminhos de retorno antes de declarar a ameaça removida.

## Perguntas frequentes

### Qualquer mecanismo iniciado com o sistema é malicioso?

Não. Componentes iniciados automaticamente são comuns e legítimos. Origem, autorização, propósito, comportamento e vínculo com o incidente determinam a interpretação.

### Reiniciar o computador remove a persistência?

Pode encerrar atividade em memória ou uma sessão, mas não prova que contas, configurações, credenciais, integrações ou recursos remotos foram corrigidos. Verifique como o acesso poderia retornar.

### Como saber se a ameaça foi removida?

Defina critérios para o incidente: recursos e identidades no escopo examinados, alterações não autorizadas remediadas, acessos invalidados quando necessário e visibilidade adequada. Informe lacunas e não alegue certeza maior que a evidência.

### Persistência exige privilégios elevados?

Não. Uma conta de baixo privilégio pode conservar acesso a uma aplicação ou conjunto de dados. Privilégios elevados ampliam alcance, mas não definem o conceito.

### Não encontrar mecanismos conhecidos prova ausência?

Não. Pode faltar visibilidade, e o retorno pode depender de credenciais válidas ou recurso não examinado. Interprete a ausência segundo cobertura e integridade das fontes.

## Relação com o capítulo

Na versão original, o capítulo 1 situa a persistência entre as fases do ataque. Este verbete enfatiza a leitura defensiva: diante de uma interrupção aparente, verificar quais condições ainda permitiriam recuperar acesso e documentar o alcance da busca.
