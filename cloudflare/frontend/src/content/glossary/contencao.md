# Contenção

## Definição

Contenção é o conjunto de ações defensivas destinado a limitar a capacidade de um adversário de continuar causando dano enquanto a organização investiga o incidente. Seu propósito imediato é reduzir oportunidades de persistência, movimentação, acesso a dados, interrupção de serviços ou uso de recursos comprometidos. A contenção cria condições para que a investigação e a recuperação prossigam com menor exposição; ela não determina, por si só, a causa do incidente nem prova que a ameaça foi eliminada.

A palavra também aparece como *containment* em materiais técnicos. Em ambos os usos, a ideia central é estabelecer limites para a atividade adversária e para seus efeitos. Esses limites podem ser aplicados a uma conta, equipamento, segmento de rede, aplicação, serviço, conjunto de credenciais ou fluxo de dados. A escolha depende do que se sabe, do que está em risco e do que a organização pode interromper sem causar um impacto maior.

Uma medida de contenção pode ser temporária, seletiva e reversível. Pode ainda ser ampla ou persistir durante etapas posteriores, se a avaliação de risco assim exigir. A ação deve ser orientada pelo objetivo e pela evidência disponível: reduzir a capacidade de causar dano, sem transformar uma hipótese em certeza nem interromper indiscriminadamente operações legítimas.

## Objetivo e lugar na resposta

A contenção costuma ser considerada quando há indícios razoáveis de atividade não autorizada ou de comprometimento em andamento. A equipe não precisa conhecer toda a sequência do incidente para agir sobre um risco urgente. Se uma sessão suspeita ainda permite acesso a informações sensíveis, por exemplo, pode ser necessário restringir essa sessão antes de concluir como ela foi obtida. Em outros casos, a investigação inicial recomenda observar por um período curto, desde que o risco de esperar seja aceitável.

A resposta a incidentes combina atividades que frequentemente se sobrepõem: identificar o que ocorreu, limitar danos, remover condições que permitem a atividade, restaurar serviços e acompanhar sinais de retorno. Contenção não é uma etapa isolada com fronteiras rígidas. A equipe pode descobrir novas informações durante uma medida, revê-la e aplicar outra; pode também preservar sistemas para análise e, ao mesmo tempo, restringir os caminhos de acesso mais perigosos.

## Quando é útil

A contenção é particularmente útil quando a atividade parece continuar, quando há risco plausível de acesso ou dano adicional, ou quando a equipe precisa ganhar tempo para determinar a extensão do incidente. Ela também pode reduzir a área em que a investigação precisa procurar sinais relacionados. Uma conta suspensa, por exemplo, limita um caminho enquanto analistas verificam sessões, alterações e recursos associados.

A decisão pode ser difícil quando o ativo suspeito sustenta um processo essencial. Nesse caso, a pergunta não é apenas “há indício de comprometimento?”, mas também “que dano pode ocorrer se a equipe esperar, e que dano pode ocorrer se restringir agora?”. Pode ser possível escolher uma medida intermediária: limitar uma função específica, exigir uma validação adicional, bloquear um destino restrito ou transferir uma atividade para um procedimento temporário. A solução depende do contexto; não existe uma regra universal de que toda suspeita exige desligamento imediato.

O termo também é útil para comunicar prioridades. Em uma reunião de incidente, dizer que uma equipe está “contendo” deve indicar quais capacidades estão sendo limitadas, em quais ativos, com que justificativa e por quanto tempo se pretende manter a medida antes de reavaliá-la. Sem essa especificidade, a palavra pode ocultar que diferentes equipes entendem “contenção” de maneiras incompatíveis.

## Evidências e investigação

A investigação ajuda a reconhecer quando uma medida é necessária e a verificar se ela teve o efeito esperado. Evidências úteis incluem registros de autenticação e de sessão, alertas de ferramentas defensivas, alterações de configuração, eventos de acesso a dados, comunicações observadas, inventário de ativos, relatos de usuários e registros de mudanças feitos pela própria resposta. Nenhum desses elementos, isoladamente, prova necessariamente a presença de um adversário: eventos podem ser incompletos, atrasados, ambíguos ou gerados por atividades legítimas.

É importante distinguir evidência do incidente de evidência da intervenção. A primeira pode indicar uma conta utilizada fora do padrão ou uma mudança não reconhecida. A segunda registra que a equipe revogou sessões, isolou um equipamento, alterou uma regra ou interrompeu um serviço. Ambas são necessárias: sem a primeira, a decisão pode não ter fundamento claro; sem a segunda, torna-se difícil explicar por que os sinais cessaram, se a restrição foi aplicada corretamente e que efeitos ela produziu.

Registros devem permitir reconstruir a sequência: o que foi observado, quando, por quem, qual decisão foi tomada, quais ativos foram afetados, quais aprovações foram obtidas e como a efetividade foi avaliada. Relógios desalinhados, retenção limitada, lacunas de cobertura ou alterações no próprio sistema podem reduzir a confiança na cronologia. Convém anotar essas limitações em vez de preencher os vazios com suposições.

A contenção pode mudar a evidência disponível. Encerrar uma sessão pode remover estado volátil; reiniciar um sistema pode apagar informações temporárias; alterar uma regra pode modificar registros futuros. Por isso, a equipe deve avaliar previamente o que precisa registrar ou preservar, sem atrasar uma ação urgente por uma coleta que não seja viável. A decisão não é entre “investigar” e “conter”: em muitos incidentes, são atividades coordenadas, com uma pessoa acompanhando o risco e outra preservando os dados que ainda podem ser obtidos.


## Exemplo hipotético

Uma equipe observa atividade incomum em uma conta que acessa documentos internos. Como ainda não sabe se a sessão foi autorizada, revoga as sessões ativas e restringe temporariamente a conta, após avaliar o impacto para a pessoa e para as operações que dependem dela. A equipe registra os horários, preserva os eventos de autenticação disponíveis e verifica se a atividade alcançou outros recursos. Se a pessoa confirma uma tarefa legítima, a hipótese pode ser revista; se os sinais persistem por outros meios, a contenção inicial não foi suficiente. Em ambos os casos, a restrição é uma decisão de risco revisável, não uma conclusão sobre autoria nem prova de resolução.

## Distinções importantes

### Contenção e erradicação

Contenção limita a capacidade de continuar causando dano. Erradicação trata da remoção da presença ou das condições que sustentam a atividade adversária, conforme a compreensão construída pela investigação. Bloquear temporariamente uma conta pode conter um caminho; a equipe ainda precisa determinar se há outras contas, sessões ou mecanismos de acesso. Confundir as duas ações cria uma falsa sensação de encerramento e pode levar à recuperação prematura.

### Contenção e recuperação

Recuperação restabelece operações em condições consideradas aceitáveis e monitora se elas permanecem estáveis. Uma organização pode restaurar parte do serviço enquanto mantém restrições em outro componente. Assim, recuperação e contenção podem coexistir. Reabrir um acesso ou reconectar um ativo sem critérios claros pode desfazer a redução de risco; por outro lado, manter restrições sem reavaliação pode prolongar impacto operacional sem benefício correspondente.

## Limitações e erros de interpretação

A contenção não elimina automaticamente persistência, acesso alternativo, cópias de dados já obtidas ou impactos já produzidos. Ela pode reduzir um caminho conhecido sem controlar todos os caminhos relevantes. Um adversário pode parar de gerar sinais observáveis sem ter perdido capacidade, e um alerta pode cessar porque a telemetria deixou de funcionar. Portanto, ausência de novos eventos após uma mudança é um indício a avaliar, não prova suficiente de que o problema acabou.

Uma ação ampla pode interromper serviços, afetar usuários, prejudicar coleta e criar riscos secundários. Uma ação estreita demais pode dar aparência de controle enquanto a atividade continua em outro lugar. Também há risco de modificar dados ou configurações que seriam úteis para entender o incidente. A escolha deve ser feita com participação dos responsáveis pelo serviço e com consciência das dependências, especialmente em ambientes em que uma mudança local afeta outros sistemas.

Erros frequentes incluem tratar qualquer alerta como confirmação; deixar medidas temporárias sem dono ou prazo; não registrar o estado anterior à alteração; bloquear um único indicador e presumir que todo o acesso foi removido; restaurar cedo demais; e usar “contido” como sinônimo de “resolvido”. Há ainda o erro oposto: adiar toda medida até que a equipe tenha certeza completa. Em incidentes reais, certeza pode não ser alcançável a tempo; a decisão deve explicitar incerteza e risco residual.

## Implicações para a resposta a incidentes

Antes de agir, a equipe deve identificar o objetivo, os ativos em escopo, os impactos esperados, as dependências e o nível de urgência. A informação pode estar incompleta; isso não impede uma decisão, mas torna importante registrar a hipótese e o grau de confiança. Quando possível, a ação deve ser coordenada com quem opera o serviço e com quem mantém os registros relevantes. Em incidentes graves, a autoridade para agir e a cadeia de comunicação devem estar claras, para evitar atrasos e alterações conflitantes.

Uma decisão sólida deixa claro o risco residual. Mesmo após uma contenção bem aplicada, pode haver dados já acessados, sistemas ainda não avaliados ou incerteza sobre o alcance. Esse quadro deve alimentar a decisão sobre investigar mais, manter a restrição, ampliar o escopo ou avançar para remoção e recuperação. A revisão periódica é essencial: medida emergencial não deve persistir apenas porque foi a primeira decisão tomada.

A nota prática é direta: escolha medidas proporcionais ao impacto e preserve evidências necessárias antes de alterações irreversíveis. Na prática, isso exige equilibrar velocidade e qualidade da investigação, documentar exceções e considerar continuidade do negócio. A proporção pode mudar conforme surgem evidências, e a preservação pode ceder diante de ameaça imediata; o essencial é que a decisão seja deliberada, rastreável e revisada.

## Perguntas frequentes

### É preciso ter certeza de que houve ataque para conter?

Não necessariamente. Pode haver motivo suficiente para limitar um risco antes de confirmar todas as causas, sobretudo quando a demora permite dano adicional. A equipe deve diferenciar suspeita de confirmação e escolher uma ação compatível com a incerteza, registrando por que ela foi considerada necessária. Se a hipótese for descartada, a restrição deve ser reavaliada e removida ou substituída conforme apropriado.

## Relação com o capítulo

Na organização original do manuscrito, o capítulo 8 oferece o contexto de resposta a incidentes em que a contenção se encaixa: uma intervenção para limitar danos enquanto a investigação continua. O conceito é mais útil quando tratado como decisão revisável, apoiada por evidências e vinculada a um risco específico, em vez de uma declaração genérica de que o incidente terminou.
