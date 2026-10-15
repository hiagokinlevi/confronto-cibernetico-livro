# Linha de base

## Conceito

Uma linha de base é um registro organizado do comportamento usual de usuários, serviços ou dispositivos, usado para identificar desvios. Em segurança defensiva, ela oferece um ponto de comparação: diante de uma observação atual, a equipe avalia se o evento é compatível com o que se conhece daquele contexto, se representa uma mudança explicável ou se merece investigação. O termo também é chamado de *baseline*.

“Usual” não significa necessariamente seguro, correto ou desejável. Significa observado e considerado representativo dentro de determinado período, ambiente e finalidade. Uma conta pode ter um padrão frequente de acessos que inclui um privilégio excessivo; se esse padrão for incorporado sem avaliação, a linha de base o descreve, mas não o aprova. Por isso, a construção do registro envolve critérios técnicos e julgamento: é preciso decidir quais comportamentos observar, por quanto tempo, com que nível de detalhe e sob quais condições.

A linha de base não é uma lista universal de ações permitidas. É uma referência contextual e revisável. O comportamento esperado de uma estação de trabalho de desenvolvimento difere do de um servidor de arquivos; a atividade de uma conta de suporte pode variar conforme o plantão; e um serviço pode mudar de padrão após uma atualização planejada. Uma comparação só é útil quando considera essas diferenças.

## O que pode compor uma linha de base

O conteúdo depende da pergunta de detecção. Para usuários, podem ser relevantes horários e origens de acesso, sistemas utilizados, tipos de recurso consultados e relações habituais entre conta, dispositivo e aplicação. Para serviços, observam-se dependências, volume e direção de comunicações, chamadas entre componentes, tarefas recorrentes e respostas esperadas. Para dispositivos, podem importar programas normalmente presentes, processos recorrentes, configuração, conexões e papéis desempenhados na rede.

## Como funciona na detecção defensiva

Em termos simples, o processo tem quatro partes. Primeiro, selecionam-se fontes de telemetria que observem o comportamento em questão, como registros de autenticação, auditoria de sistemas, eventos de endpoint ou fluxos de rede. Depois, os dados são associados a entidades e contextos — por exemplo, conta, dispositivo, função, aplicação, local de trabalho e janela temporal. Em seguida, registra-se o padrão de referência. Por fim, observações recentes são comparadas com ele e os desvios são priorizados para análise.

A comparação pode ser explícita ou probabilística. Uma regra explícita pode sinalizar uma conta que acessa pela primeira vez um serviço sensível. Um modelo estatístico pode indicar que uma sequência de acessos ou um volume se afasta do histórico associado àquela entidade. Em qualquer caso, o resultado é um indício, não uma conclusão sobre intenção ou comprometimento. Um desvio pode ser legítimo; um evento malicioso pode ocorrer dentro do comportamento já conhecido.

## Construção e manutenção

Antes de transformar dados em referência, convém verificar a qualidade da telemetria: lacunas, relógios desalinhados, duplicidade, retenção incompleta, mudança de formato e associação incorreta entre identidades podem distorcer o padrão. Se um dispositivo troca de nome ou uma conta é reutilizada, por exemplo, registros de entidades diferentes podem ser agregados como se fossem uma só. A linha de base resultante parecerá consistente, mas comparará históricos que não pertencem ao mesmo sujeito.

A manutenção é parte do controle. Mudanças autorizadas — implantação de software, reorganização de funções, novos serviços, fusão de ambientes ou trabalho remoto — podem exigir revisão do perfil. Essa atualização deve ter motivo, escopo e momento identificáveis. Se cada alerta for resolvido apenas ampliando a referência, desvios sucessivos acabam absorvidos e a detecção perde capacidade de apontar mudanças importantes. A equipe deve registrar por que uma alteração foi incorporada e avaliar se a nova expectativa é apropriada.

## Uso durante a investigação

Em uma investigação, a linha de base ajuda a responder se o evento é novo para aquela entidade, se representa uma alteração de escala, se ocorre fora do contexto usual ou se diverge de pares comparáveis. Ela pode orientar a busca em registros: qual conta, dispositivo, aplicação ou relação merece ser examinada; desde quando o desvio aparece; e que outros eventos ocorreram antes ou depois.

O desvio deve ser tratado como ponto de partida. A equipe pode verificar se houve mudança aprovada, atividade de manutenção, chamado associado, alteração de função ou evento operacional conhecido. Também pode comparar autenticações, atividade de endpoint, registros de aplicação, mudanças de configuração e fluxos de rede. A convergência de fontes independentes fortalece uma hipótese; a ausência de eventos em uma fonte com cobertura incompleta não a elimina.

É útil preservar a referência que existia no momento do alerta, junto com os dados usados na comparação e a versão das regras ou do modelo. Sem isso, uma atualização posterior pode alterar o que era considerado usual e tornar difícil reconstruir por que a atividade chamou atenção. Na documentação do caso, convém distinguir observação (“a conta acessou o serviço pela primeira vez no período analisado”) de interpretação (“o acesso foi autorizado”) e de conclusão (“houve uso indevido”).

## Exemplos hipotéticos

**Exemplo 1 — conta administrativa.** Em uma organização hipotética, registros de vários meses mostram que uma conta de administração de banco de dados costuma ser usada a partir de uma estação de gestão e durante janelas de manutenção. Surge uma autenticação da mesma conta em um equipamento de uso geral, seguida de acesso fora da janela registrada. A comparação justifica triagem, mas não determina que houve invasão: uma intervenção emergencial pode explicar o padrão. A investigação consulta o registro de mudanças, a identidade do operador, os eventos do equipamento e as ações realizadas no banco.

**Exemplo 2 — serviço interno.** Um serviço hipotético de relatórios envia normalmente requisições a duas dependências internas. Depois de uma alteração de arquitetura aprovada, passa também a consultar uma nova API. A linha de base anterior sinaliza o destino como incomum. Se a equipe mantiver a mudança documentada e revisar o perfil após confirmar o comportamento esperado, o alerta pode ser ajustado sem apagar o histórico do desvio. Se a chamada não corresponder à mudança autorizada, ela merece investigação própria.

**Exemplo 3 — atividade persistente.** Em outro cenário hipotético, um invasor usa uma conta comprometida para executar uma tarefa com a mesma aplicação, faixa horária e destino já comuns à função da vítima. A atividade pode permanecer dentro de parâmetros agregados e não se destacar como anomalia. A linha de base, nesse caso, não basta: a equipe precisa avaliar autorização, conteúdo das ações, sequência temporal, origem da sessão e coerência com a tarefa de trabalho. O exemplo mostra por que “parecido com o habitual” não equivale a “legítimo”.

## Distinções importantes

**Linha de base e política de segurança.** A política define requisitos ou limites aprovados. A linha de base descreve um comportamento observado ou uma referência operacional usada para comparação. Uma política pode afirmar que determinada conta não deve acessar um sistema; a telemetria pode mostrar que isso ocorre regularmente. A divergência não deve ser resolvida automaticamente alterando a política ou normalizando o padrão: é necessário apurar qual dos dois precisa mudar.

**Linha de base e lista de permissões.** Uma lista de permissões restringe explicitamente o que pode ser executado ou aceito, conforme sua implementação. Uma linha de base comportamental pode identificar variações sem bloquear o evento. Um comportamento frequente não se torna permitido apenas por aparecer no histórico, e uma ação permitida não deixa de poder ser abusada.

**Linha de base e indicador de comprometimento.** Um indicador é uma evidência ou característica associada a uma atividade conhecida, como um domínio, arquivo ou padrão de evento específico. A linha de base caracteriza o usual em um contexto. Indicadores podem detectar eventos conhecidos mesmo sem conhecer o histórico local; uma linha de base pode destacar uma mudança inédita, mas não necessariamente identificar sua causa.

**Linha de base e limiar.** O limiar é um valor de corte usado para decidir quando uma medida dispara uma condição. Ele pode ser derivado de uma referência, mas não é sinônimo dela. Um perfil pode conter distribuição e contexto; o limiar reduz parte dessa informação a uma regra de decisão. Limiares mal escolhidos geram excesso de alertas ou deixam de apontar desvios relevantes.

## Limitações e erros de interpretação

A principal limitação é que a referência depende dos dados e das premissas que a produziram. Telemetria ausente torna invisíveis comportamentos; dados enviesados podem representar apenas usuários ou horários mais monitorados; perfis agregados podem apagar diferenças legítimas; e registros contaminados por uma intrusão podem ensinar ao sistema que a atividade maliciosa é normal. Uma linha de base não corrige por si só um inventário incompleto, uma identidade mal atribuída ou uma política confusa.

Um perfil antigo também pode tornar mudanças legítimas suspeitas e intrusões persistentes aparentemente normais. No primeiro caso, a equipe recebe alertas repetidos depois de uma mudança real; no segundo, a atividade maliciosa se mistura a um padrão já aceito. O problema não se resolve apenas encurtando ou alongando a janela: é preciso avaliar a qualidade do histórico, a velocidade de mudança do ambiente e quais comportamentos devem ser detectados por controles adicionais.

## Implicações para resposta a incidentes

Durante um incidente, a referência ajuda a delimitar o que mudou, mas também pode estar comprometida ou desatualizada. A equipe deve considerar se o período de referência inclui sinais iniciais do próprio incidente. Quando houver essa possibilidade, pode ser necessário comparar com fontes alternativas: histórico anterior preservado, ativos equivalentes, registros de mudança, configuração aprovada ou observações de sistemas que não compartilham a mesma dependência de dados.

A preservação é importante. Antes de recalibrar regras ou modelos para reduzir ruído, registre as evidências atuais, o período analisado e os motivos do ajuste. Caso contrário, a resposta pode apagar a distinção entre o padrão anterior e o comportamento surgido durante o evento. A atualização deve ocorrer depois de entender o que mudou e se essa mudança é autorizada, segura e permanente.

## Perguntas frequentes

### Toda organização precisa de uma linha de base?

### Quanto tempo deve durar a coleta?

### Se um evento está dentro da linha de base, posso encerrá-lo como benigno?

Não. Isso apenas mostra que o evento se parece com o comportamento registrado naquele escopo. Verifique autorização, sequência, finalidade e impacto, sobretudo em ações sensíveis. Uma atividade maliciosa pode imitar a rotina ou ocorrer usando uma conta e um dispositivo já habituais.

### Um evento fora da linha de base deve gerar incidente?

### Quando devo atualizar a referência?

## Relação com o capítulo

Na versão original, o capítulo 6 situa a linha de base no contexto de detecção. O conceito oferece uma referência para reconhecer mudanças e organizar a investigação, sempre em conjunto com evidências, contexto operacional e validação humana. Sua aplicação defensiva depende tanto de construir um retrato confiável do comportamento usual quanto de lembrar que esse retrato é provisório e pode estar errado.
