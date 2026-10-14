# Recuperação

## Conceito

Recuperação (em inglês, *recovery*) é a restauração controlada de sistemas e serviços após uma interrupção, falha ou incidente, acompanhada da validação de integridade e de monitoramento reforçado. No contexto de resposta a incidentes, não significa simplesmente ligar novamente uma máquina ou copiar dados de volta. É uma fase decisória: a equipe precisa demonstrar, com evidências adequadas ao impacto, que os recursos podem voltar a operar sem reintroduzir a causa do incidente nem ampliar o dano.

O termo cobre tanto ações técnicas — reconstruir um servidor, restaurar arquivos, reativar uma aplicação ou restabelecer uma conexão — quanto coordenação operacional. Proprietários de serviço, segurança, infraestrutura, continuidade, suporte e áreas afetadas podem ter responsabilidades diferentes. A recuperação só é bem-sucedida quando o serviço necessário retorna com condições conhecidas, controles suficientes e responsáveis cientes do risco residual.

Recuperar não apaga o incidente. Uma organização pode recuperar a disponibilidade sem ter concluído a investigação, e pode encerrar a contenção técnica sem que todos os serviços estejam recuperados. O estado operacional e o estado investigativo se relacionam, mas não são equivalentes. A equipe deve deixar claro o que voltou, o que continua degradado, quais hipóteses permanecem abertas e quem aceitou as consequências de prosseguir.

## Contexto na resposta a incidentes

## Como funciona defensivamente

### Decidir o que pode voltar

Antes de restaurar, a equipe estabelece o escopo: ativos, contas, dados e serviços afetados; o que foi isolado; o que foi alterado; e que dependências precisam estar disponíveis. Essa visão pode ser incompleta, sobretudo no início. Convém registrar explicitamente lacunas e hipóteses, para que uma decisão posterior não seja apresentada como certeza retrospectiva.

Em seguida, define-se o estado pretendido. Para cada componente, pode ser necessário escolher entre limpeza validada, reconstrução a partir de uma base confiável, restauração de cópia de segurança ou combinação dessas opções. A escolha depende da natureza do dano, da confiabilidade das fontes e do custo de preservar a operação. Uma cópia antiga pode não conter alterações recentes; uma máquina aparentemente limpa pode conservar configurações inseguras; uma reconstrução pode falhar se depender de credenciais ou serviços comprometidos. Nenhum método é universalmente superior.

### Restaurar com controles

A restauração deve partir de fontes consideradas confiáveis e de procedimentos conhecidos. Isso não significa que a etiqueta “backup” prove segurança. É necessário avaliar a procedência da cópia, a época a que corresponde, sua integridade técnica e a possibilidade de que tenha sido produzida quando o ambiente já estava afetado. Quando houver dúvida razoável, preservar a cópia e examiná-la em contexto controlado pode ser mais apropriado do que conectá-la diretamente à produção.

### Validar e acompanhar

Depois da reativação, o monitoramento reforçado observa indicadores técnicos e operacionais: alertas, falhas incomuns, mudanças de configuração, autenticações, tráfego, desempenho e relatos de usuários. O objetivo é perceber tanto recorrência quanto defeitos introduzidos pela própria recuperação. Esse acompanhamento precisa ter responsáveis, período ou condição de encerramento e caminho de escalonamento. “Monitorar de perto” sem dizer quem observa e o que fará diante de um sinal é uma promessa difícil de executar.

## Critérios de retorno

Os critérios de retorno transformam a expressão “está pronto” em perguntas verificáveis. Seu conteúdo depende do serviço e da severidade do incidente, mas costuma incluir os seguintes pontos:

- A cópia ou fonte de restauração tem origem conhecida e foi considerada confiável; sua integridade e adequação temporal foram avaliadas.
- A causa provável foi contida ou removida na medida necessária para reativar o componente, e os controles que reduzem a chance de recorrência estão ativos.
- As credenciais potencialmente expostas foram revistas, com rotação ou revogação quando indicada, e os acessos administrativos e de serviço foram reavaliados.
- Testes funcionais e verificações de integridade produziram resultados aceitáveis; falhas conhecidas têm impacto compreendido e responsável designado.
- Dependências, integrações, permissões e salvaguardas foram verificadas na sequência planejada.
- O monitoramento reforçado está funcionando, há pessoas responsáveis por acompanhá-lo e existe um procedimento para interromper ou reverter a reativação.
- Um responsável autorizado compreende as limitações e aceita formalmente o risco residual relevante.

A aceitação do risco não transfere a responsabilidade técnica nem converte um defeito em condição segura. Ela documenta uma decisão de governança: quem decide conhece a evidência disponível, a incerteza e as consequências prováveis. Se a situação mudar — por exemplo, surgir evidência de que a fonte de restauração também foi afetada —, a aceitação anterior pode deixar de ser válida.

## Onde aparece na investigação

A recuperação é também um conjunto de ações que deixa vestígios. Registros de configuração, inventário de imagens, eventos de inicialização, logs de autenticação, histórico de alterações, registros de acesso ao armazenamento, alertas de monitoramento, chamados e aprovações podem ajudar a estabelecer quando um componente foi restaurado, por quem e com qual fonte. Comparar horários e identificadores entre esses registros ajuda a reconstruir a sequência, desde que diferenças de relógio e retenção sejam consideradas.

Esses vestígios podem responder perguntas como: a máquina foi reinstalada ou apenas reiniciada? Qual cópia foi usada? Houve alteração de credenciais antes da volta? Que validações foram executadas? O serviço voltou gradualmente ou de uma só vez? Um alerta posterior corresponde a comportamento já observado antes da restauração ou a uma condição nova? Respostas confiáveis normalmente combinam registros, artefatos técnicos e confirmação de pessoas envolvidas.

Preservar evidência e recuperar serviço podem competir por tempo e recursos. Uma imagem de disco ou memória volátil pode ser valiosa para a investigação, enquanto a urgência pede reconstituição imediata do ativo. A equipe deve avaliar o valor probatório, a criticidade e alternativas, como coletar dados antes da reconstrução ou manter uma cópia isolada. A decisão depende do caso; “recuperar” não deve servir como justificativa automática para apagar evidências ainda necessárias.

Também é importante distinguir os logs de restauração dos dados restaurados. Um registro de execução pode mostrar que a tarefa terminou sem erro, mas não provar que o conteúdo era íntegro, completo ou anterior à intrusão. Da mesma forma, a ausência de alertas não comprova ausência de comprometimento: a telemetria pode estar incompleta, desativada ou ainda sem atividade suficiente para revelar o problema.

## Evidências de recuperação adequada

Uma recuperação confiável costuma ser sustentada por um conjunto coerente de evidências, e não por um único indicador. Entre os elementos úteis estão a identificação da fonte e do ponto de restauração, resultados de verificações de integridade, comparação com configurações aprovadas, testes representativos do serviço, registros de revisão de credenciais, validação de controles de acesso e observações do monitoramento após a reativação.

## Exemplo hipotético

Considere uma organização que interrompe um serviço de arquivos após detectar alterações inesperadas em documentos. A equipe isola o servidor e identifica uma cópia de segurança anterior às mudanças observadas. Antes de restaurá-la, confirma a data e a procedência da cópia, compara os registros disponíveis, verifica a possibilidade de comprometimento dos sistemas de administração e preserva os dados necessários à investigação.

O exemplo não pressupõe que uma cópia anterior seja necessariamente segura, nem que a ausência de novos alertas encerre o caso. Ele ilustra como a decisão combina fonte confiável, controles, testes, observação e uma opção de reversão. Em outra situação, uma cópia pode estar contaminada ou uma reconstrução pode ser inviável no prazo necessário; os critérios devem então refletir alternativas e riscos específicos.

## Distinções importantes

### Recuperação e restauração

Restauração é frequentemente uma ação ou etapa: devolver dados, configuração ou capacidade a um estado anterior ou conhecido. Recuperação é mais abrangente: inclui decidir se e como restaurar, validar o resultado, reintroduzir o serviço, observar seu comportamento e administrar o risco residual. Uma tarefa de restauração pode terminar com sucesso técnico sem satisfazer os requisitos de recuperação.

### Recuperação e erradicação

Erradicação busca remover a causa ou os elementos do incidente que permanecem no ambiente. Recuperação reestabelece a operação depois de controlar esses elementos. Na prática, as atividades se sobrepõem: uma reconstrução pode eliminar componentes não confiáveis e, ao mesmo tempo, preparar o retorno. A sobreposição não elimina a necessidade de avaliar separadamente se a causa foi tratada e se o serviço está pronto.

### Recuperação e continuidade

Continuidade preserva funções prioritárias durante a interrupção, usando capacidades remanescentes ou alternativas. Recuperação restabelece os recursos que sustentarão a operação de modo confiável. Uma contingência temporária pode continuar necessária após o retorno parcial; o encerramento de um plano de continuidade não demonstra, por si só, que todos os sistemas foram recuperados.

### Recuperação e restauração de desastre

“Recuperação de desastre” costuma designar o planejamento e as capacidades voltados a restabelecer serviços após interrupções graves. Recuperação no tratamento de incidentes é mais ampla quanto às causas possíveis e pode ocorrer sem um desastre de grande escala. Os termos se encontram quando um incidente exige reconstruir infraestrutura, mas o escopo e os critérios variam conforme a organização.

## Limitações e erros de interpretação

Há limites inevitáveis. Dados podem ter sido alterados sem que a extensão seja conhecida; registros podem ter sido perdidos; fornecedores ou serviços externos podem impor dependências; e uma organização pode precisar operar com risco residual para evitar dano maior pela indisponibilidade. Nesses casos, transparência sobre o que foi verificado, o que permanece incerto e como a situação será reavaliada é parte da recuperação responsável.

## Implicações para a resposta

## Perguntas frequentes

### Recuperar significa restaurar um backup?

Não. Restaurar uma cópia pode ser um dos meios, mas recuperar inclui avaliar a fonte, preparar o ambiente, validar dados e controles, reativar o serviço de modo controlado e monitorá-lo. Em alguns casos, reconstruir a partir de componentes confiáveis é mais apropriado; em outros, a cópia é parte essencial da solução.

### Quando um serviço está pronto para voltar?

Quando os critérios definidos para aquele serviço foram satisfeitos com evidência adequada: fonte confiável, causa tratada na medida necessária, credenciais revistas, integridade e função verificadas, dependências avaliadas e monitoramento estabelecido. A pessoa autorizada deve compreender as lacunas remanescentes e aceitar o risco residual pertinente. Um prazo de indisponibilidade, sozinho, não é critério técnico.

### O que fazer se surgir um alerta depois da reativação?

Relacionar o alerta ao estado anterior, às ações de recuperação e às hipóteses do incidente; verificar sua fonte e impacto; e seguir o caminho de escalonamento previamente definido. Conforme a evidência, pode ser necessário pausar a ampliação, limitar o serviço ou isolá-lo novamente. O alerta não deve ser descartado como ruído sem análise, nem interpretado automaticamente como prova de recorrência.

## Relação com o capítulo original

Na versão original do manuscrito, o tema se relaciona ao capítulo 8. Neste verbete, recuperação é tratada como uma decisão operacional baseada em confiança verificável: backups confiáveis, credenciais revistas, validação de integridade e monitoramento reforçado formam critérios para um retorno responsável, e não garantias abstratas de que todo risco desapareceu.
