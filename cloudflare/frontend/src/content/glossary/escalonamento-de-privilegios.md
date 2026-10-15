# Escalonamento de privilégios

## Conceito e lugar na sequência do ataque

Escalonamento de privilégios, também chamado de elevação de privilégios ou *privilege escalation*, é a ampliação das permissões disponíveis ao adversário depois que ele obtém acesso inicial a um sistema, serviço, dispositivo ou ambiente. O acesso inicial responde à pergunta “o que o intruso conseguiu alcançar?”; o escalonamento descreve uma mudança subsequente no que ele pode fazer. Uma sessão que antes podia apenas consultar arquivos de uma aplicação, por exemplo, passa a controlar dados de outros usuários ou funções administrativas. A mudança pode ocorrer dentro de um único equipamento ou atravessar limites entre contas, serviços, máquinas e ambientes.

A definição não exige que o invasor obtenha uma conta de administrador, nem que uma vulnerabilidade de software seja explorada. O ponto central é a relação entre o conjunto de ações autorizadas antes e depois. Uma conta de serviço que passa a ler um segredo adicional, um usuário que assume uma função de gestão e uma sessão que consegue executar ações reservadas ao sistema são situações diferentes, mas podem representar ampliação de privilégios. A análise deve identificar qual permissão mudou, em que contexto e por qual mecanismo aparente.

O conceito é frequentemente tratado como uma fase do ataque porque permissões maiores podem ampliar o alcance e o impacto de uma intrusão. Isso não significa que todos os incidentes avancem em uma ordem fixa. O adversário pode começar com permissões elevadas, obter mais acesso sem uma etapa claramente separada, ou permanecer restrito durante toda a atividade observada. Em uma investigação, portanto, “escalonamento” é uma hipótese sobre uma mudança de capacidade, não um marco que se presume ter ocorrido apenas porque houve comprometimento.

É comum distinguir escalonamento vertical e horizontal. No vertical, a sessão passa a poder realizar ações de nível superior às que antes lhe eram permitidas, como administrar um serviço ou alterar configurações protegidas. No horizontal, obtém-se acesso a recursos de outra identidade ou área de mesmo nível aparente, como dados de outro usuário. A distinção ajuda a descrever o alcance, mas não substitui a análise das permissões concretas: níveis e fronteiras variam entre produtos, organizações e arquiteturas.

## Como a ampliação pode acontecer

Há mais de uma família de causas. Uma exploração técnica pode aproveitar uma falha de software, configuração ou isolamento para ultrapassar a fronteira de autorização prevista. Outra possibilidade é o uso indevido de credenciais que já pertencem a uma conta privilegiada: não há necessariamente aumento técnico das permissões da conta, mas há uma mudança na identidade sob a qual o adversário opera. Também pode haver abuso de uma delegação, função ou mecanismo legítimo de administração, quando a capacidade concedida é usada fora do propósito ou do contexto esperado.

“Legítimo” também precisa ser entendido com cuidado. Uma concessão administrativa pode ser válida e necessária quando feita por pessoa autorizada, para finalidade definida e pelo processo previsto. A mesma função ou alteração, feita por um intruso que controla uma sessão legítima, ou por alguém sem autorização, pode compor o incidente. O registro de que uma permissão foi concedida não prova que a concessão foi legítima; é preciso examinar autoria, autenticação, aprovação, contexto, duração e correspondência com a atividade esperada.

## Evidências e investigação

A investigação busca reconstruir a diferença entre o estado anterior e o posterior, além de explicar a transição. Evidências úteis podem incluir eventos de autenticação e autorização, histórico de associação a grupos ou funções, concessões e revogações, alterações de política, criação ou modificação de contas, registros de execução de processos e trilhas de auditoria de serviços. Em ambientes distribuídos, registros de identidade, sistemas operacionais, aplicações, infraestrutura e provedores de nuvem podem mostrar partes distintas da mesma sequência.

O valor de um registro depende do que ele efetivamente demonstra. Uma autenticação bem-sucedida mostra que uma identidade foi aceita, mas não necessariamente que o titular legítimo a usou. Um evento de atribuição de função mostra uma alteração registrada, mas pode não dizer se a função foi usada depois. Um processo executado por uma conta com poder elevado confirma o contexto de execução, não a origem da autoridade nem a intenção. Correlacionar fontes permite construir uma cronologia: identidade apresentada, origem e momento da sessão, autorização concedida, recurso acessado e ação realizada.

Também são relevantes as evidências negativas, desde que interpretadas com prudência. A ausência de um evento em um sistema não demonstra que a transição não ocorreu: a auditoria pode estar desativada, incompleta, sujeita a retenção curta ou fora do caminho observado. Diferenças entre relógios dificultam ordenar eventos; contas compartilhadas reduzem a atribuição individual; e alterações feitas por processos automatizados podem parecer atividade humana. O investigador deve registrar limitações de cobertura e grau de confiança, em vez de transformar falta de telemetria em certeza.

## Exemplos hipotéticos

Considere um serviço de atendimento que, por uma regra de autorização defeituosa, permite a uma sessão comum consultar registros pertencentes a outros clientes. Se a sessão explorada passa a acessar dados além do escopo original, há uma ampliação horizontal do acesso disponível. O exemplo não depende de a conta se tornar administradora: a fronteira relevante é a autorização sobre os registros. A análise defensiva procuraria relacionar a sessão, as consultas observadas, a regra aplicável e os registros acessados, sem concluir automaticamente que houve alteração de privilégios persistente.

Por fim, uma equipe autorizada concede temporariamente uma função administrativa para uma manutenção aprovada e a revoga ao concluir o trabalho. A alteração, isoladamente, não caracteriza ataque nem escalonamento malicioso. Se, porém, um invasor controlar a sessão do operador e usar a concessão para agir fora da tarefa, a mesma trilha técnica pode participar de um incidente. A distinção depende de atribuição e contexto, não do rótulo da função. Os registros de solicitação, aprovação, identidade, horário e ações subsequentes são necessários para separar os casos.

## Termos próximos e limites da classificação

Escalonamento de privilégios não é sinônimo de acesso inicial. Acesso inicial indica entrada ou primeiro ponto de apoio; escalonamento indica ampliação posterior das capacidades. A distinção temporal é útil, mas pode ser difícil quando a primeira identidade já tem poderes amplos ou quando a atividade começa em um serviço intermediário. Relatar o que foi observado com precisão é mais útil do que forçar toda intrusão a caber numa sequência única.

Também não é igual a movimento lateral. Movimento lateral descreve o deslocamento entre sistemas ou segmentos durante a operação. Esse deslocamento pode ocorrer com a mesma identidade e permissões, sem aumento demonstrável, ou pode depender de uma elevação de privilégios. Inversamente, uma sessão pode obter maior autoridade no mesmo equipamento sem se mover para outro sistema. Os dois conceitos podem aparecer relacionados numa cronologia, mas respondem a perguntas diferentes: “para onde a atividade avançou?” e “o que a atividade passou a poder fazer?”.

Abuso de conta privilegiada descreve o uso indevido de uma identidade que já dispõe de capacidades sensíveis. A expressão não afirma, por si, que houve uma mudança técnica de nível de privilégio. Exploração técnica, por sua vez, descreve a obtenção de um efeito por meio de uma vulnerabilidade ou comportamento técnico; pode resultar em escalonamento, mas o resultado não deve ser presumido apenas porque uma falha foi suspeitada. Concessão administrativa legítima é uma ação autorizada no contexto apropriado. A aparência de uma operação administrativa ou a validade formal de uma identidade não bastam para classificar o uso como legítimo.

## Uso defensivo e resposta a incidentes

O termo é útil para organizar a narrativa de um incidente, definir escopo e priorizar contenção. Se a equipe confirma que uma sessão adquiriu acesso administrativo, deve identificar quais ativos e dados estavam ao alcance dessa sessão e quais ações ocorreram após a mudança. A resposta pode exigir revogar sessões e credenciais, revisar concessões, limitar temporariamente funções, isolar sistemas ou corrigir a condição técnica que permitiu a ampliação. A medida adequada depende do mecanismo e do risco operacional de interromper o serviço.

No trabalho preventivo, a organização pode revisar privilégios concedidos, reduzir permissões permanentes ao necessário, separar funções incompatíveis, exigir aprovação para mudanças sensíveis e monitorar concessões e usos fora do padrão. Controles de acesso fortes reduzem oportunidades, mas não eliminam a necessidade de detectar e responder: identidades válidas podem ser comprometidas, processos autorizados podem ser abusados e políticas podem conter erros. O objetivo defensivo é tornar as fronteiras claras, limitar o alcance de uma falha e produzir evidência suficiente para reconhecer mudanças relevantes.

## Erros de interpretação frequentes

Um erro é chamar qualquer ação administrativa de escalonamento. Uma conta pode ter permissões elevadas desde o início, e seu uso pode ser indevido sem que seu nível tenha mudado. Outro é supor que houve escalonamento porque a atividade parece sofisticada ou produziu dano significativo. Impacto elevado não identifica o mecanismo que o tornou possível. A investigação precisa apontar a mudança de capacidade ou qualificar o caso como uso de privilégio existente.

Por fim, a ausência de alerta não significa ausência de escalonamento. A detecção depende de telemetria, regras, cobertura e retenção. Um ambiente pode registrar a mudança sem gerar alerta, ou não registrar a transição de forma suficiente. Revisar a qualidade da auditoria faz parte das lições do incidente, mas não deve ser confundido com prova retroativa de um evento específico.

## Perguntas frequentes

### Toda elevação de privilégio é maliciosa?

Não. A expressão descreve uma ampliação de permissões, não a intenção de quem a realizou. Uma concessão autorizada para uma tarefa pode ser legítima. O caráter malicioso depende da autorização, da identidade que iniciou ou usou a mudança, da finalidade e das ações resultantes. Em relatórios, é útil separar a constatação técnica da avaliação de intenção.

### Como distinguir hipótese de confirmação?

Confirmação exige evidência de que a permissão ou capacidade aumentou, ou de que uma identidade com autoridade maior foi usada, com escopo e tempo razoavelmente estabelecidos. Uma atividade incomum pode justificar investigação, mas não confirma o mecanismo. Quando os registros não permitem separar hipóteses, o relatório deve indicar o que se sabe, o que se infere e quais lacunas impedem uma conclusão.

## Relação com o capítulo

Na organização da versão original, o termo se relaciona ao capítulo 1 e às fases do ataque. Essa ligação oferece um ponto de orientação para acompanhar como uma intrusão pode ampliar seu alcance após a entrada inicial. A leitura deve preservar a distinção entre a sequência didática e a variedade de trajetórias observadas em ambientes reais: a fase ajuda a organizar a análise, enquanto a evidência determina o que pode ser afirmado sobre cada incidente.
