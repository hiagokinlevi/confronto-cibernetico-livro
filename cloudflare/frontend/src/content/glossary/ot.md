# OT

## Conceito

OT, sigla de Operational Technology, ou tecnologia operacional, designa tecnologias que controlam ou observam equipamentos e processos do mundo físico. O termo abrange componentes digitais, sistemas de controle, instrumentos, redes e práticas que permitem acompanhar uma operação ou influenciar seu comportamento. Uma instalação pode usar OT para medir temperatura, indicar a posição de uma válvula, regular a velocidade de um motor, controlar uma linha de produção ou supervisionar o fornecimento de um serviço essencial.

O ponto central não é o formato do equipamento nem o setor econômico, mas a relação com o processo físico. Um sensor conectado a um sistema de supervisão pode fazer parte da OT porque produz uma medição usada para compreender a operação. Um controlador pode pertencer ao mesmo ambiente porque transforma uma lógica de controle em sinais que acionam equipamentos. Em ambos os casos, a tecnologia está ligada à observação ou ao controle de algo que existe fora do computador.

## O que a OT faz

Uma operação costuma combinar observação, decisão e ação. Instrumentos medem variáveis físicas; sistemas apresentam essas informações; operadores ou lógicas automáticas avaliam condições; e dispositivos de campo alteram o processo. A OT conecta partes desse ciclo, ainda que as funções estejam distribuídas entre vários equipamentos e camadas.

Um sistema de supervisão pode mostrar tendências, alarmes e estados de máquinas sem executar diretamente cada ação de controle. Um controlador local, por sua vez, pode manter uma variável dentro de uma faixa definida mesmo quando a comunicação com uma interface central está indisponível. A separação entre supervisão e controle direto varia conforme o projeto. Por isso, chamar qualquer tela industrial de “o controlador” pode levar a uma compreensão errada de onde uma decisão é tomada.

## Onde aparece e como reconhecer

Na investigação, o reconhecimento costuma resultar da combinação de inventário, contexto de rede, função declarada e observação da operação. Uma lista de ativos pode indicar fabricantes, modelos, endereços, versões e localizações, mas esses campos podem estar incompletos ou desatualizados. Diagramas de arquitetura ajudam a entender conexões; registros de manutenção explicam substituições; e entrevistas com operadores esclarecem para que serve um equipamento e em que condições é usado.

Entre as evidências que ajudam a reconhecer OT estão:

- a presença de interfaces de operação, telas de supervisão, controladores, instrumentos ou estações de engenharia;
- a comunicação recorrente entre componentes de controle, sistemas de supervisão, historiadores e redes corporativas;
- nomes de ativos, etiquetas de painel, documentação de engenharia e referências a linhas, áreas ou unidades de processo;
- eventos de mudança de modo, alteração de configuração, perda de comunicação, alarmes e comandos, quando esses registros existem e podem ser consultados com segurança;
- observações físicas, como indicadores locais, estado de motores e válvulas, ou diferenças entre a tela e o equipamento.

Nenhum sinal isolado é conclusivo. Um computador com aparência industrial pode exercer uma função administrativa; um servidor comum pode sustentar uma função relevante para a operação. Uma conexão de rede com um segmento associado a OT não prova que cada ativo ali tenha função de controle. A classificação deve ser confirmada com as pessoas responsáveis e com a documentação disponível, sem presumir que o nome do dispositivo descreva fielmente seu papel atual.

## OT e tecnologia da informação

Tecnologia da informação, ou TI, costuma tratar de dados, aplicações e serviços usados para comunicação, administração e processamento. OT trata da observação ou do controle de processos físicos. Essa distinção é útil para organizar responsabilidades e riscos, mas as fronteiras não são absolutas: sistemas de TI podem apoiar operações, e dados de OT podem ser armazenados ou analisados em plataformas corporativas.

## Segurança e defesa em contexto operacional

Defender OT começa por entender o processo e seus limites seguros, além dos ativos digitais. Uma lista de vulnerabilidades sem contexto pode destacar um componente conhecido, mas não revela se ele está em uso, se há alternativa de operação ou se a correção pode ser instalada sem risco. A avaliação precisa considerar a função do ativo, suas dependências, a janela disponível e quem tem autoridade para aprovar mudanças.

Medidas defensivas incluem manter inventário e diagramas atualizados, restringir acessos conforme a necessidade, separar funções quando a arquitetura permitir e acompanhar conexões entre redes. Acesso remoto, contas de fornecedores e estações usadas para engenharia merecem atenção porque podem ligar atividades externas ou administrativas a sistemas operacionais. O objetivo é conhecer e controlar esses caminhos, não presumir que qualquer acesso remoto seja indevido.

Atualizações e correções exigem planejamento. Compatibilidade, validação, disponibilidade de peças e possibilidade de retorno a uma configuração conhecida podem ser relevantes. Adiar uma correção sem avaliação também tem custo: mantém exposição e pode dificultar uma resposta futura. A decisão equilibrada documenta risco, alternativas e condições para execução, com participação de segurança, engenharia e operação.

## Investigação e evidências

Uma investigação envolvendo OT procura responder tanto o que ocorreu nos sistemas quanto o que mudou no processo físico. A sequência temporal pode incluir um acesso a uma estação, uma alteração de configuração, uma perda de comunicação e uma resposta de operador. Esses eventos podem ser registrados em lugares diferentes e usar relógios que não estão perfeitamente sincronizados. A linha do tempo deve anotar fontes, diferenças de horário e lacunas, em vez de transformar correlação em causalidade.

Fontes possíveis incluem registros de autenticação e acesso remoto, eventos de sistemas operacionais, alarmes da supervisão, históricos de variáveis, registros de mudança, cópias de configuração, chamados de manutenção e anotações de turno. A disponibilidade varia muito. Um controlador pode manter apenas um histórico limitado; uma estação pode ter sido substituída; uma coleta de logs pode não existir. Ausência de registro não prova que um evento não aconteceu.

Preservar evidências em OT exige cautela com a coleta. Consultas intensivas, varreduras indiscriminadas, reinicializações ou desconexões podem afetar um equipamento ou remover informação volátil. A equipe deve preferir métodos aprovados para o ambiente, coordenar com responsáveis operacionais e registrar o que foi consultado, quando e por quem. Quando a coleta remota não for segura, inspeção local acompanhada pode ser mais apropriada. A prioridade é obter evidência suficiente sem introduzir uma mudança não controlada no processo.

## Resposta a incidentes

Em OT, conter um incidente não é automaticamente sinônimo de desligar o ativo ou cortar toda a rede. Uma contenção pode reduzir o risco cibernético e ao mesmo tempo retirar visibilidade, interromper controle ou provocar uma transição operacional indesejada. Antes da ação, é necessário compreender o que o ativo faz, quais sistemas dependem dele, como o processo reage à perda de comunicação e quem pode avaliar uma condição segura.

A nota prática para este termo é direta: inventário, manutenção e janelas de mudança devem ser considerados antes de aplicar contenção. O inventário permite localizar função e dependências; o calendário de manutenção pode indicar uma oportunidade supervisionada; e a janela de mudança oferece tempo para observar resultados e reverter se necessário. Esses elementos não garantem que uma ação seja segura, mas reduzem o risco de decidir às cegas.

## Limitações e erros de interpretação

OT não é sinônimo de infraestrutura crítica. Há sistemas OT em operações de diferentes níveis de criticidade, e a importância precisa ser avaliada pelo efeito da interrupção ou da alteração naquele contexto. Tampouco todo equipamento conectado é automaticamente um ativo de controle: alguns coletam dados, outros apoiam manutenção, e alguns têm função exclusivamente administrativa.

Outro erro é tratar uma tela como representação perfeita do mundo físico. A interface depende de sensores, comunicações e lógica; pode estar atrasada, em modo manual, com dados congelados ou incompleta. Quando uma decisão depende do estado real, comparar a indicação digital com fontes independentes e confirmar com o operador pode ser necessário. Uma leitura aparentemente normal não elimina a possibilidade de falha em outro ponto do processo.

Também não se deve presumir que o isolamento de rede neutralize todo risco ou seja sempre a contenção correta. Um processo pode depender de comunicação para supervisão, alarmes ou sincronização; remover essa comunicação pode criar um novo problema. Por outro lado, manter conexões sem avaliação pode permitir a continuidade de uma atividade indesejada. O trabalho defensivo consiste em avaliar caminhos e consequências concretas, e não aplicar um slogan técnico a todos os ambientes.

Por fim, a segmentação entre TI e OT não é um estado binário. Pode haver zonas intermediárias, equipamentos compartilhados e exceções necessárias. Diagramas podem não refletir a realidade, e regras de firewall não descrevem sozinhas o uso legítimo de um fluxo. Validação com observação e responsáveis ajuda a identificar divergências entre arquitetura planejada e operação atual.

## Exemplos hipotéticos

Em uma estação de tratamento, operadores observam níveis em uma interface e um controlador local regula uma bomba. Durante uma investigação, o histórico mostra perda de comunicação, enquanto a indicação local sugere que a bomba continua funcionando. A equipe não conclui que houve comprometimento apenas pelo alerta: compara registros, verifica manutenção recente e consulta quem estava no turno. A distinção entre supervisão indisponível e controle interrompido muda a avaliação do incidente.

Em uma linha de produção, uma estação usada para alterar parâmetros fica conectada a uma rede corporativa por um caminho aprovado para suporte. Um acesso fora do horário previsto gera alerta. A equipe confirma se havia manutenção autorizada, preserva os registros disponíveis e avalia a necessidade de limitar temporariamente o caminho com o responsável da linha. O exemplo ilustra que a existência de um acesso remoto é contexto para investigação, não prova isolada de abuso.

## Perguntas frequentes

### OT é apenas hardware industrial?

Não. Pode incluir hardware, software, redes, interfaces e processos de operação ligados à observação ou ao controle físico. O papel funcional importa mais do que a forma do equipamento.

### Todo sistema de supervisão controla diretamente o processo?

Não necessariamente. Alguns sistemas apresentam informações e permitem supervisão, enquanto o controle direto pode residir em controladores locais. A arquitetura específica deve ser confirmada.

### Uma anomalia em OT significa ataque?

Não. Falhas, manutenção, alterações autorizadas, problemas de comunicação e condições do processo também produzem anomalias. A atribuição exige evidências correlacionadas e contexto.

### A contenção deve começar pelo desligamento?

Não há uma resposta universal. Desligar, desconectar ou reiniciar pode afetar o processo e as evidências. A contenção deve ser escolhida com conhecimento da função, das dependências e das condições de segurança.

### Por que o inventário é tão importante?

Porque permite relacionar ativos a funções, locais, responsáveis e dependências. Sem essas informações, até uma medida tecnicamente simples pode atingir um componente essencial ou não reduzir o risco relevante.

## Relação com o capítulo original

Na versão original do manuscrito, o capítulo 8 oferece o contexto de leitura para este termo. Neste glossário, OT serve como referência para interpretar tecnologias relacionadas à operação física e para lembrar que investigação e contenção precisam considerar o processo, seus responsáveis e suas condições de mudança.
