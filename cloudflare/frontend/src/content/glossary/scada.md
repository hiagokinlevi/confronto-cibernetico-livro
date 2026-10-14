# SCADA

## O que significa

SCADA é a sigla de *Supervisory Control and Data Acquisition*, expressão traduzida como supervisão, controle e aquisição de dados. Designa uma categoria de sistemas empregada para acompanhar e comandar processos industriais ou de infraestrutura. Em vez de ser uma máquina única, SCADA costuma ser um arranjo de componentes que reúne informações vindas do processo, apresenta estados aos operadores e encaminha comandos autorizados aos equipamentos de campo.

O termo é usado de maneiras diferentes no setor. Pode indicar a categoria tecnológica, a plataforma de software de supervisão, ou, informalmente, o conjunto instalado em uma unidade. Ao ler inventários, relatórios ou conversas de operação, convém verificar qual desses sentidos está em uso. Uma tela chamada “SCADA” não representa necessariamente todos os componentes envolvidos no controle de uma instalação.

## Componentes e fluxo de informação

Uma arquitetura típica inclui uma interface de operação, funções de supervisão e registro, uma rede de comunicação e dispositivos que interagem com o processo. Entre esses dispositivos podem estar controladores lógicos programáveis, unidades remotas de telemetria, sensores, instrumentos e atuadores. A composição varia conforme a indústria, o porte, a idade da instalação e as decisões de engenharia; não há uma topologia única que defina todo SCADA.

## Uso na operação e na defesa

Do ponto de vista defensivo, SCADA é útil como conceito para delimitar o ambiente que precisa ser entendido e protegido. Ele ajuda a fazer perguntas como: quais funções dependem da supervisão? Quais controles permanecem locais? Que caminhos ligam estações de operação a controladores? Que serviços de suporte, como autenticação, cópia de segurança e sincronização de horário, podem afetar a disponibilidade ou a confiabilidade dos dados? As respostas apoiam inventário, análise de risco, segmentação, monitoramento e planejamento de continuidade.

As medidas defensivas devem se integrar à governança da operação: inventários atualizados, acesso individualizado e limitado à função, controle de mudanças, cópias verificadas, monitoramento compatível com os equipamentos e testes planejados são exemplos de práticas que podem reduzir risco. A implantação precisa respeitar requisitos de disponibilidade e segurança física. Uma ferramenta ou política concebida para redes corporativas pode ser inadequada se provocar tráfego inesperado, reinicialização ou perda de comunicação em um processo ativo.

## Onde aparece numa investigação

Em uma investigação de incidente, referências a SCADA podem aparecer em diagramas de rede, listas de ativos, nomes de estações, telas de operação, chamados de manutenção, registros de alarmes e históricos de processo. Também podem surgir em registros de acesso remoto, autenticação, mudanças de configuração, comunicação entre servidores e controladores e documentação de fornecedores. Nenhuma dessas fontes, sozinha, demonstra que houve comprometimento; elas ajudam a formular e testar hipóteses.

A origem e a integridade das evidências precisam ser preservadas. Antes de coletar, reiniciar ou alterar uma estação, é importante registrar o estado observado, os responsáveis presentes, o horário local e a referência temporal usada. Exportações de histórico e alarmes devem manter contexto suficiente para identificar fonte, intervalo e possíveis filtros. Se a aquisição puder afetar um processo em operação, a equipe técnica deve avaliar um método seguro, em coordenação com o responsável operacional.

## Evidências que ajudam a reconhecer o ambiente

A identificação começa pelo papel funcional, não pelo rótulo de um equipamento. Uma estação que apresenta sinóticos, estados de campo, alarmes e comandos associados a um processo pode integrar a função SCADA. Um controlador que executa lógica local pode ser parte do ambiente, embora não seja por si só toda a plataforma supervisória. Uma planilha com dados industriais, por outro lado, não basta para classificar seu sistema de origem.

Para avaliar um dado específico, perguntas práticas incluem: qual dispositivo o produziu? O valor é bruto, convertido ou calculado? Qual a unidade e a faixa esperada? Quando foi atualizado pela última vez? O sistema informa qualidade inválida, substituída ou obsoleta? Houve manutenção, troca de instrumento ou alteração de escala? Um valor sem essas informações pode ser tecnicamente correto e ainda assim induzir uma conclusão operacional errada.

Também importa distinguir evidência de interpretação. Um registro de comando pode demonstrar que uma solicitação foi emitida pelo sistema, mas não necessariamente que o equipamento a executou. Um alarme pode indicar uma condição do processo, uma falha de comunicação ou uma regra configurada de modo inadequado. Um evento isolado ganha força quando coincide com outros sinais independentes e com o conhecimento do processo.

## Distinções com termos próximos

SCADA não é sinônimo de tecnologia operacional, ou OT. OT é um termo mais amplo para tecnologias que monitoram ou alteram processos físicos; pode abranger SCADA, sistemas de controle distribuído, controladores, instrumentação e outras funções. Dizer que um ativo é OT descreve seu contexto de uso, sem afirmar que ele pertence a uma arquitetura SCADA.

Essas distinções evitam dois erros: tratar todos os ativos industriais como se fossem intercambiáveis e supor que comprometer uma tela significa controlar fisicamente todo o processo. O impacto depende de permissões, conectividade, lógica, intertravamentos, estado do equipamento e barreiras independentes. Uma análise responsável descreve o componente e sua função observada, em vez de depender exclusivamente de uma sigla.

## Limitações e interpretações equivocadas

SCADA não garante que os dados sejam corretos, completos ou atuais. A cadeia de medição pode falhar no sensor, na conversão, na comunicação, no armazenamento ou na apresentação. Um operador pode ver uma indicação plausível que não corresponde ao estado físico. Por isso, leituras críticas podem demandar confirmação por instrumentos, inspeção ou fontes independentes, conforme o procedimento operacional.

Outro equívoco é presumir que a perda da supervisão sempre interrompe o processo — ou que nunca o interrompe. Algumas instalações mantêm controle local e passam a operar com visibilidade reduzida; outras dependem de serviços supervisórios para funções relevantes. Há ainda estados intermediários, degradados ou manuais. Somente a documentação e a validação com operação permitem saber o comportamento previsto e o que é seguro fazer.

Há limitações de observabilidade. Logs podem não existir, ter retenção curta, usar relógios diferentes ou registrar apenas parte da cadeia de comando. A ausência de um evento em determinada fonte não prova que a ação não ocorreu. Da mesma forma, um alerta de segurança em uma estação associada a SCADA não prova que o processo foi alterado. A conclusão deve separar fatos observados, lacunas de evidência e hipóteses ainda em avaliação.

## Resposta a incidentes em ambiente SCADA

A primeira prioridade é compreender o estado do processo e proteger pessoas. A equipe de resposta deve trabalhar com operação, engenharia e segurança física para decidir que observações e intervenções são aceitáveis. Uma ação aparentemente rotineira — bloquear uma comunicação, desligar uma estação ou aplicar uma atualização — pode retirar visibilidade, afetar redundância ou mudar o comportamento do processo. A decisão depende do cenário e dos procedimentos locais, portanto não há uma sequência universal de contenção.

A coordenação precisa definir quem tem autoridade operacional, quem avalia evidência digital, quais canais permanecem disponíveis e como registrar decisões. Se houver suspeita de comandos não autorizados, a equipe pode precisar confirmar o estado diretamente com operadores ou por meios independentes, sem presumir que a tela suspeita seja confiável. Mudanças de resposta em ambientes industriais exigem coordenação com operação e segurança física, porque a contenção digital pode produzir efeitos concretos no processo.

Após estabilizar a situação, a revisão deve identificar causas e condições contribuintes sem se limitar à máquina inicialmente alertada. Pode ser necessário revisar caminhos de acesso, mudanças recentes, dependências de suporte, práticas de manutenção, cobertura de registro e capacidade de operar em modo degradado. O objetivo é corrigir o que favoreceu o incidente e melhorar a detecção e a recuperação, com mudanças testadas e controladas.

## Exemplo hipotético

Imagine uma estação de tratamento que acompanha níveis de reservatórios distribuídos e apresenta alarmes numa sala de controle. Sensores enviam medições a unidades remotas; um operador observa tendências e pode solicitar a abertura ou o fechamento de uma válvula conforme procedimentos. Uma interrupção na comunicação faz a tela manter por algum tempo o último valor recebido, marcado como desatualizado. O controlador local conserva uma lógica de proteção previamente configurada.

O exemplo mostra por que é importante separar quatro afirmações: houve uma conexão; houve perda de comunicação; a tela apresentou determinado estado; e o equipamento físico assumiu determinado estado. Cada uma exige evidência própria. SCADA ajuda a organizar a investigação, mas o nome da categoria não substitui a comprovação de causa e efeito.

## Perguntas frequentes

### SCADA é um produto específico?

Não necessariamente. O termo descreve uma categoria e também pode ser usado informalmente para uma plataforma ou instalação. É preciso identificar fabricante, versão, componentes e funções quando esses detalhes forem relevantes à análise.

### Uma HMI é um SCADA?

Não por definição. HMI designa a interface de interação com o processo. Ela pode integrar um sistema SCADA, mas uma interface isolada não representa necessariamente aquisição de dados, supervisão distribuída ou todos os caminhos de comando.

### A perda do servidor SCADA para o processo?

Não há resposta universal. O comportamento depende da arquitetura, da lógica local e do processo. Pode haver continuidade automática, operação degradada, perda de visibilidade ou impacto mais amplo. A resposta correta deve vir dos procedimentos e da validação com a equipe responsável pela instalação.

### Um alarme prova que ocorreu um ataque?

Não. Alarmes são sinais operacionais que podem decorrer de condições físicas, falhas de instrumento ou comunicação, configuração, manutenção ou atividade não autorizada. A hipótese de ataque precisa ser corroborada com evidências técnicas e contexto operacional.

### Por que não aplicar imediatamente a contenção comum de TI?

Porque o efeito de uma contenção depende do papel da conexão ou do ativo no processo. Isolar um componente pode reduzir risco de acesso indevido, mas também remover observabilidade ou redundância. A medida deve ser avaliada por segurança e operação em conjunto, segundo o risco imediato.

## Relação com o capítulo original

No capítulo 8 da versão original do manuscrito, SCADA funciona como referência para discutir sistemas que ligam observação digital a processos físicos. Este verbete aprofunda o vocabulário necessário para reconhecer componentes, interpretar evidências e coordenar decisões defensivas com as equipes responsáveis pela operação.
