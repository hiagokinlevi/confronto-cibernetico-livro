# ICS

## Definição e escopo

ICS é a sigla de *Industrial Control Systems*, ou sistemas de controle industrial: um conjunto de tecnologias que monitora ou controla processos físicos em ambientes industriais. A expressão designa um domínio funcional, não um produto, protocolo ou equipamento específico. Um ICS pode reunir sensores, controladores, interfaces de operação, computadores de engenharia, redes de comunicação e sistemas de supervisão. A composição varia conforme o processo e a organização.

O elemento central é a relação entre informação e uma operação física. Uma medição pode representar temperatura, pressão, nível, velocidade, posição ou estado de uma máquina. Um comando pode alterar uma válvula, motor, disjuntor, bomba ou outro elemento do processo. Entre a medição e a ação há lógica de controle, operadores, comunicações e mecanismos de proteção. Nem todo componente executa todas essas funções, e nem toda informação que aparece na tela de operação é uma medição direta: pode ser calculada, filtrada, armazenada ou recebida de outro sistema.

A categoria aparece em fábricas, instalações de energia, água e saneamento, transporte, edifícios e outras operações com processos físicos. “Industrial” não restringe o termo a uma fábrica convencional. É mais útil observar o papel exercido pelo sistema e o efeito possível de sua operação do que confiar apenas no nome do setor ou na marca dos equipamentos.

## Componentes e relações

Uma instalação pode conter dispositivos de campo, controladores, estações de operação e sistemas de supervisão. Dispositivos de campo medem condições ou realizam ações; controladores executam lógica de controle; estações permitem observar estados, reconhecer alarmes ou solicitar mudanças; sistemas de supervisão agregam dados e oferecem uma visão mais ampla da operação. Há ainda estações de engenharia usadas para configurar ou manter controladores, servidores de histórico, serviços de tempo e equipamentos de rede. Essas categorias são funcionais: um mesmo equipamento pode acumular papéis, e a arquitetura concreta pode diferir bastante.

O fluxo de dados não é necessariamente unidirecional. Valores seguem do processo para telas e históricos, enquanto comandos, parâmetros e configurações podem seguir no sentido oposto. Alguns sistemas trocam dados com planejamento, manutenção, gestão de energia ou sistemas corporativos; outros são segmentados ou têm conectividade limitada. Uma ligação entre redes, por si só, não demonstra que qualquer computador corporativo possa comandar diretamente o processo. É preciso identificar os caminhos, as permissões, os intermediários e as condições técnicas que tornam possível uma ação.

## Como pensar sobre operação e defesa

A defesa de ICS começa com uma compreensão operacional: quais funções são necessárias, que variáveis são observadas, quais ações podem alterar o processo e quais condições exigem intervenção humana. Um inventário útil registra ativos, função, localização lógica e física, responsável, dependências, caminhos de comunicação e criticidade operacional. A lista de endereços de rede é apenas uma parte desse inventário. Sem associação entre ativo e função, um alerta pode ser tecnicamente correto e ainda não indicar o risco real para a operação.

Medidas defensivas incluem segmentação adequada, controle de acesso, contas individualizadas quando compatível, gestão de mudanças, proteção de estações de engenharia, cópias de segurança verificadas e monitoramento ajustado ao ambiente. A observação passiva da rede costuma ser valiosa porque pode revelar comunicações e mudanças sem interagir diretamente com equipamentos de controle. Ainda assim, uma captura parcial não descreve toda a instalação, e tráfego incomum não é automaticamente malicioso. Há equipamentos antigos, comunicações periódicas, redundância e rotinas de manutenção que produzem padrões diferentes dos de uma rede de escritório. Antes de bloquear ou sondar um ativo, equipes de segurança devem coordenar com operadores e responsáveis técnicos, avaliar o risco de interrupção e escolher métodos compatíveis com o processo.

## Onde aparece em uma investigação

ICS pode surgir na investigação como ativo diretamente afetado, ambiente relacionado, origem de telemetria ou dependência de uma operação interrompida. A apuração pode começar por um alarme no processo, uma falha de comunicação, uma alteração de configuração, um evento de conta ou uma notificação corporativa. Nenhum desses sinais, sozinho, estabelece que houve comprometimento de controle industrial. A investigação precisa relacionar evidências digitais ao comportamento observado e à cronologia operacional.

Fontes possíveis incluem registros de estações de operação e engenharia, eventos de autenticação, registros de servidores, históricos de processo, alarmes, configurações de controladores, inventários, diagramas, capturas de rede e anotações de turno. Os registros podem estar incompletos, usar relógios diferentes ou ser sobrescritos por retenção limitada. Históricos de processo mostram valores registrados, mas podem não provar quem iniciou uma mudança. Um registro de login demonstra atividade de uma conta; sem contexto adicional, não identifica necessariamente a pessoa que a usou nem a intenção da ação.

## Evidências e reconhecimento

Para reconhecer um ambiente ICS, procure sinais convergentes, não uma palavra-chave isolada. Nomes de ativos associados a controladores, interfaces de supervisão ou engenharia; diagramas de processo; referências a pontos de medição e alarmes; comunicações entre estações e controladores; e documentação de operação podem indicar a função industrial. Protocolos especializados ou portas conhecidas podem ser pistas, mas sua presença não basta para classificar um equipamento: podem existir em laboratórios, gateways, simuladores ou redes sem controle direto do processo.

## Resposta a incidentes em ambiente industrial

A resposta começa por avaliar o estado do processo e a segurança das pessoas. O responsável operacional deve participar da decisão sobre contenção, mudanças de modo, isolamento de ativos e retorno ao serviço. Uma ação comum em TI, como desligar uma máquina, bloquear uma comunicação ou forçar uma atualização, pode retirar visibilidade ou controle necessários. Também é possível que manter uma ligação disponível represente risco maior; essa decisão depende de evidências e da avaliação conjunta, não de uma regra universal.

É útil separar, sem perder as relações, três perguntas: há indício de atividade não autorizada? Que função digital foi afetada? Qual é a consequência operacional observada ou plausível? Um evento pode afetar uma estação sem alcançar o controlador; uma falha operacional pode ocorrer sem intrusão; e uma alteração digital pode não produzir efeito físico perceptível. Registrar essas diferenças evita tanto exagerar a conclusão quanto descartar um risco por não haver dano imediatamente visível.

A contenção deve ser planejada com opções graduais e critérios de interrupção. Pode envolver desabilitar uma conta, restringir um caminho de rede, preservar uma estação, aumentar a observação ou transferir determinadas atividades para procedimentos locais, conforme o desenho e as instruções aprovadas. A equipe deve saber quem pode autorizar cada mudança e como confirmar que ela não remove uma função crítica. A restauração precisa considerar configurações conhecidas, integridade de cópias, disponibilidade de peças e validação operacional antes de retomar o serviço.

## Distinções importantes

### ICS e OT

OT, ou tecnologia operacional, é uma expressão ampla para tecnologias que monitoram ou afetam processos físicos. ICS é frequentemente usado para sistemas de controle dentro desse universo. Os termos se sobrepõem, e organizações podem usá-los de formas diferentes. Em um documento, é melhor verificar a definição local antes de concluir que “OT” e “ICS” têm exatamente o mesmo alcance.

### ICS e SCADA

SCADA, isto é, supervisão, controle e aquisição de dados, nomeia um tipo de abordagem ou sistema de supervisão e controle. Um sistema SCADA pode fazer parte de um ICS, mas ICS é um termo guarda-chuva mais amplo. Nem todo ICS é descrito como SCADA, e a presença de uma tela de supervisão não basta para determinar a arquitetura ou o grau de controle remoto.

### ICS e DCS

DCS, ou sistema de controle distribuído, designa uma arquitetura de controle distribuída usada em determinados processos. Pode ser componente de um ICS. A distinção ajuda a descrever arquitetura, mas não substitui a análise de ativos, funções e dependências concretas. Não se deve inferir que sistemas com nomes ou fornecedores diferentes tenham o mesmo comportamento de segurança.

### ICS e PLC

PLC, ou controlador lógico programável, é um tipo de controlador que pode executar lógica de controle. É um componente possível de um ICS, não sinônimo do sistema inteiro. Um PLC isolado não descreve automaticamente sensores, rede, estações de operação, supervisão nem procedimentos humanos ao redor do controle.

## Limites e erros de interpretação

Alarmes e dados de processo têm limites. Um valor fora do esperado pode resultar de sensor defeituoso, calibração, operação normal em condição especial, comunicação atrasada ou mudança não autorizada. Um valor aparentemente normal pode ser insuficiente para excluir manipulação, se a medição estiver incompleta ou a fonte não for confiável. Correlacionar múltiplas fontes melhora a análise, mas não elimina incerteza; conclusões devem declarar o que se sabe, o que se infere e o que não foi possível verificar.

## Exemplo hipotético

Considere uma estação de engenharia que passa a comunicar-se com um controlador fora da janela de manutenção. O fato é um sinal que justifica triagem, não prova suficiente de ataque. A equipe preserva registros disponíveis, confirma o horário com a equipe operacional, compara a comunicação com a linha de base e verifica se houve mudança de projeto autorizada. Em paralelo, operadores observam alarmes e variáveis relevantes do processo. Se a atividade não for reconhecida, responsáveis de engenharia, operação e segurança avaliam a contenção que preserve controle seguro e evidências. A conclusão final deve dizer quais ações foram confirmadas, quais efeitos foram observados e quais hipóteses permanecem abertas.

## Perguntas frequentes

### Um ICS precisa estar conectado à internet?

Não. Conectividade externa não define se um conjunto é ICS. Um sistema pode operar sem conexão direta à internet e ainda depender de redes locais, manutenção, troca de arquivos ou integrações internas. A avaliação deve mapear caminhos reais, inclusive os temporários, sem presumir conectividade ou isolamento.

### Todo evento em um ICS é um incidente cibernético?

Não. Falhas de processo, sensores, energia, comunicação e operação podem gerar sintomas semelhantes aos de um evento cibernético. A classificação exige evidência de atividade digital relevante e análise de causas alternativas. Mesmo sem confirmação de intrusão, uma anomalia operacional pode demandar resposta urgente por seus efeitos físicos.

### É seguro desligar o equipamento suspeito?

Não existe resposta universal. Desligar pode interromper o processo, remover visibilidade ou alterar evidências; manter ativo pode permitir atividade prejudicial. A decisão deve ser tomada com responsáveis pela operação e segurança, considerando o estado observado, procedimentos aprovados e alternativas de contenção.

### Como priorizar a proteção?

Comece pelas funções e consequências: identifique o que o ativo faz, de que depende, quem pode alterá-lo e qual seria o impacto de indisponibilidade ou comando indevido. Em seguida, trate exposições e caminhos de acesso, proteja configurações e cópias, monitore mudanças relevantes e ensaie procedimentos de recuperação compatíveis com a instalação.

### Um protocolo conhecido confirma a presença de ICS?

Não por si só. Um protocolo ou porta pode apoiar a hipótese, mas precisa ser interpretado com inventário, função do ativo, contexto de comunicação e documentação. Assinaturas de rede podem falhar diante de encapsulamento, gateways, versões diferentes ou tráfego parcial.

## Relação com o capítulo

No capítulo 8 da versão original, o termo serve para situar sistemas digitais ligados a processos físicos. Seu uso no glossário destaca que uma investigação nesse domínio precisa relacionar ativos e tráfego à operação e às consequências para pessoas e disponibilidade, sem presumir que controles corporativos possam ser aplicados sem adaptação.
