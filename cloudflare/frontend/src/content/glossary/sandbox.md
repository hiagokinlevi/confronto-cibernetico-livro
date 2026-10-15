# Sandbox

## Conceito e finalidade

Sandbox, ou ambiente isolado, é um contexto controlado no qual se pode observar o comportamento de um arquivo ou código suspeito sem executá-lo na produção. A ideia é reduzir a possibilidade de que a observação afete sistemas, dados e serviços reais. Em vez de confiar apenas no nome do arquivo, em sua aparência ou em uma detecção automatizada, a equipe acompanha o que ele tenta fazer quando recebe condições para funcionar: que processos inicia, que arquivos consulta ou altera, que destinos de rede procura e como reage ao ambiente.

O termo não designa um produto específico nem uma garantia absoluta. Pode referir-se a uma máquina virtual, computador dedicado, contêiner restrito, execução descartável ou plataforma especializada. Esses mecanismos oferecem graus diferentes de separação. O sandbox combina controle, isolamento, observabilidade e possibilidade de descarte ou restauração.

Na forense, o sandbox é sobretudo um meio de produzir observações reproduzíveis e limitadas. A amostra continua sendo potencialmente hostil; portanto, a análise busca conhecer sua atividade sem permitir que ela alcance ativos de produção ou que os dados da investigação sejam contaminados. O resultado é uma fonte de evidências entre várias, a ser confrontada com registros, artefatos do sistema e contexto do incidente.

## Como o isolamento funciona

Um sandbox reúne controles que limitam o que a execução pode alcançar. A camada de separação pode ser fornecida por um hipervisor, pelo sistema operacional, por uma política de execução ou por uma infraestrutura remota. Ela define fronteiras para memória, processos, arquivos, dispositivos e rede. A força dessa fronteira depende da implementação, da configuração e das falhas conhecidas ou desconhecidas do mecanismo subjacente.

Antes da observação, o analista define o estado inicial: sistema operacional, programas instalados, contas sem privilégios desnecessários, diretórios de trabalho e condições de rede. Também registra a configuração relevante. Esse cuidado importa porque o comportamento depende do contexto. Um documento pode exigir um aplicativo específico; um instalador pode verificar a presença de componentes; um código pode agir de modo diferente conforme o idioma, o horário ou os recursos disponíveis. Uma execução sem esses elementos pode não revelar a atividade esperada.

Durante a execução, sensores coletam eventos. Entre eles podem estar criação de processos, carregamento de módulos, gravação e remoção de arquivos, mudanças em configurações, consultas de resolução de nomes, conexões tentadas e mensagens apresentadas ao usuário. Capturas de tela e gravações de sessão ajudam a registrar o que é visível, mas não substituem os registros técnicos. A coleta deve usar relógios coerentes e preservar a sequência dos fatos, pois a ordem pode distinguir uma ação inicial de uma reação posterior.

## Uso na investigação forense

O sandbox é útil quando uma equipe precisa caracterizar um artefato sem abrir ou executar esse material em uma estação de trabalho comum. Pode apoiar a análise de um anexo recebido por e-mail, de um instalador encontrado em um computador, de um script recuperado em um servidor ou de um documento que aparenta conter conteúdo ativo. A pergunta não é apenas “o que este arquivo é?”, mas “o que fez, tentou fazer ou poderia fazer sob determinadas condições?”.

Na triagem, uma execução controlada pode ajudar a priorizar amostras. A equipe observa se há comportamento compatível com persistência, coleta de informações, alteração de arquivos, comunicação externa ou exibição de uma interface enganosa. Esses sinais orientam a investigação e a busca de evidências correlatas em sistemas afetados. A classificação continua provisória: um comportamento suspeito não identifica sozinho o responsável, a intenção, o alcance ou o impacto real do incidente.

## Evidências e interpretação

Podem ser relevantes, conforme o caso:

- hash e características do arquivo submetido, com registro da origem e do momento da aquisição;
- árvore de processos, argumentos observados e relações entre processos;
- arquivos criados, lidos, modificados ou removidos, com caminhos e horários;
- alterações de configuração, permissões ou mecanismos de inicialização;
- consultas e conexões de rede, endereços envolvidos e respostas recebidas;
- mensagens exibidas, janelas abertas e ações que exigiram interação;
- configuração do laboratório, duração da observação e eventos de erro;
- capturas de memória ou outros artefatos, quando coletados por procedimento apropriado.

Cada registro tem limites. Uma conexão tentada demonstra uma tentativa no contexto observado, não que a comunicação tenha sido concluída ou que um servidor tenha respondido. Uma conexão bem-sucedida tampouco comprova, por si só, que dados foram enviados com sucesso ou que alguém os recebeu. A criação de um arquivo pode ser consequência de uma instalação legítima ou de uma ação hostil; o conteúdo e a relação com outros eventos precisam ser examinados. A evidência ganha significado quando é ligada à pergunta concreta da investigação e corroborada por fontes independentes.

A ausência de evento exige cuidado especial. “Não observei alteração” descreve o resultado da coleta, enquanto “a amostra não altera o sistema” é uma afirmação muito mais ampla. O registro negativo só vale para o intervalo, a configuração, os sensores e as condições da execução. Se não havia acesso a um serviço externo, por exemplo, não se pode concluir que o código nunca tentaria contatá-lo em outra situação.

## Exemplo hipotético

Uma equipe recebe um documento suspeito que foi anexado a uma mensagem de phishing reportada por uma pessoa da organização. Depois de preservar o arquivo e registrar seu hash, os analistas preparam um ambiente isolado com a versão do aplicativo necessária para abrir documentos daquele tipo. A rede de laboratório não tem rota para os sistemas corporativos e registra as tentativas de comunicação. A equipe inicia a observação, abre o documento de forma controlada e registra os eventos.

No cenário hipotético, o documento exibe uma página com instruções para habilitar conteúdo. Após a interação, um processo associado ao aplicativo tenta iniciar outro programa, grava um arquivo em um diretório temporário e consulta um domínio que não responde na rede simulada. Esses fatos justificam ampliar a investigação: procurar nos registros de e-mail quem recebeu o anexo, verificar se houve abertura em outros endpoints e comparar os caminhos e horários com a telemetria disponível. A observação não autoriza afirmar que houve comprometimento. A simulação não forneceu resposta ao domínio, o ambiente pode diferir dos equipamentos dos usuários e a equipe não viu eventual atividade posterior.

## Limitações e fontes de erro

Algumas amostras detectam sinais associados à análise: nomes de ferramentas, dispositivos virtuais, ausência de atividade humana ou características incomuns do sistema. Podem então encerrar a execução, permanecer inativas ou apresentar um comportamento diferente. Outras dependem de uma data, de um idioma, de uma conta, de um arquivo anterior, de uma resposta de rede ou de interação específica. Há ainda códigos que aguardam muito tempo ou só atuam depois de uma condição que não foi reproduzida. Por isso, uma execução silenciosa não é prova de benignidade.

A nota prática é direta: certas amostras detectam que estão sendo analisadas ou dependem de condições externas; o resultado não constitui prova completa. Essa ressalva não torna a técnica inútil. Ela delimita o alcance da conclusão e indica que a análise deve ser combinada com métodos estáticos, busca de indicadores, revisão de registros e exame de sistemas potencialmente afetados.

## Distinções com termos próximos

Sandbox e máquina virtual não são sinônimos perfeitos. Uma máquina virtual é uma forma de executar um sistema convidado sobre uma camada de virtualização. Ela pode ser usada como sandbox quando está configurada para análise, com isolamento, observabilidade e controles adequados. Uma máquina virtual conectada à rede corporativa, com pastas compartilhadas e acesso a contas reais, não se torna segura para análise apenas por ser virtual.

Contêiner também não equivale automaticamente a sandbox. Contêineres isolam processos usando recursos do sistema operacional e podem ser úteis para tarefas controladas, mas compartilham componentes do núcleo com o hospedeiro. A adequação depende da ameaça, da configuração e da fronteira que se pretende impor. Para analisar código hostil, a equipe avalia se o grau de separação atende ao risco e se há controles complementares.

Análise estática examina a amostra sem executá-la, por exemplo, identificando estrutura, texto, metadados ou trechos de código. Análise dinâmica observa o que acontece durante a execução. O sandbox é um dos ambientes possíveis para análise dinâmica; não é a própria análise dinâmica nem substitui a estática. A combinação pode revelar tanto pistas visíveis sem execução quanto ações que só aparecem em tempo de execução.

Emulação e sandbox podem coexistir, mas descrevem aspectos diferentes. Emular é reproduzir, por software, uma arquitetura ou componente; um ambiente de análise pode recorrer a emulação para satisfazer dependências. “Ambiente de teste” é uma expressão mais ampla e pode não ter o objetivo de conter código suspeito. Já um honeypot é um recurso preparado para atrair ou observar atividade, normalmente como parte de uma estratégia de detecção. Embora compartilhe controles e observabilidade, seu propósito não é necessariamente executar uma amostra submetida por um analista.

## Implicações para resposta a incidentes

Uma execução isolada não determina o escopo do incidente. Para saber se houve exposição, é preciso examinar os sistemas onde a amostra esteve presente, a interação dos usuários, os registros disponíveis e os dados potencialmente acessados. O sandbox ajuda a formular hipóteses e a selecionar buscas; não substitui a resposta a incidentes nem permite descartar um comprometimento sem examinar evidências de origem.

Ao comunicar resultados, a equipe deve distinguir observação, interpretação e recomendação. “O processo tentou gravar determinado arquivo durante a execução no ambiente configurado” é observação. “Esse comportamento é compatível com persistência” é interpretação. “Verificar os endpoints que receberam a mensagem” é recomendação. Separar esses níveis torna o relatório mais útil e evita transformar uma hipótese em fato estabelecido.

## Perguntas frequentes

### Um arquivo que não fez nada no sandbox é seguro?

Não. O resultado indica apenas que não foi observado comportamento relevante naquela execução e sob aquelas condições. A amostra pode detectar o ambiente, depender de uma condição ausente ou agir em outro momento. A conclusão deve incluir essas limitações e ser comparada com outras evidências.

### Posso abrir uma amostra suspeita em uma máquina virtual comum?

A virtualização, sozinha, não garante contenção. Antes de uma análise, é necessário avaliar acesso à rede, pastas compartilhadas, dispositivos, contas, área de transferência, privilégios e capacidade de restaurar o estado. Organizações devem usar procedimentos e infraestrutura apropriados ao risco; uma estação de trabalho comum não deve ser tratada como laboratório apenas por executar uma máquina virtual.

### O relatório de uma ferramenta basta como prova?

### Por que repetir uma execução?

Repetir pode revelar se um comportamento depende de tempo, estado ou interação, ou se foi um efeito transitório. A repetição só ajuda quando as condições são registradas e comparáveis. Alterar várias configurações sem controle torna difícil saber qual mudança explica o resultado.

### O sandbox identifica o autor ou a intenção?

Não de forma confiável por si só. Ele pode revelar comportamentos, artefatos e indicadores que apoiem atribuição ou análise de propósito, mas esses juízos exigem contexto e outras fontes. Características do código podem ser copiadas, compartilhadas ou falsificadas.

## Relação com o capítulo

No capítulo 6 da versão original, o termo pode ser entendido como parte do vocabulário de análise forense: um recurso para observar arquivos e códigos suspeitos em condições controladas. A leitura mais rigorosa conserva duas ideias juntas: o isolamento reduz riscos durante a observação, e o resultado continua condicionado ao ambiente e às evidências efetivamente coletadas.
