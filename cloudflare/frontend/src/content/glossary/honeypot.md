# Honeypot

## Conceito

Honeypot, também chamado de isca digital, é um recurso controlado que simula um alvo para observar tentativas de interação maliciosa. Pode se apresentar como serviço de rede, aplicação, conta, arquivo, dispositivo ou conjunto de recursos que pareça plausível a quem o encontra. A simulação é deliberada: o operador escolhe o que estará visível, quais interações serão aceitas e que dados serão registrados. Seu propósito defensivo é produzir observações sobre atividades dirigidas à isca, com menos ambiguidade do que a encontrada em muitos sistemas de uso cotidiano.

O termo pode designar a técnica, a instância implantada ou o conjunto de dados e procedimentos de análise que a acompanha. Um recurso apresentado como isca, mas sem monitoramento ou finalidade de observação, pode não cumprir esse papel. Em contrapartida, uma emulação simples, se controlada e instrumentada, pode responder a uma pergunta útil de inteligência. Seu valor depende menos de parecer sofisticada do que de produzir evidências interpretáveis para uma necessidade concreta.

## Finalidade de inteligência

Uma isca ajuda a perceber quais recursos são sondados, que protocolos ou caminhos atraem tentativas e que sequência de ações pode ocorrer após o primeiro contato. Pode indicar que uma infraestrutura está sendo examinada ou que uma atividade ampla alcançou um endereço exposto. Também pode registrar nomes de usuário tentados, parâmetros enviados, arquivos apresentados ou endereços de origem observados. Esses dados apoiam hipóteses e direcionam a coleta; raramente explicam sozinhos quem agiu, com qual motivação ou contra qual organização.

Honeypots apoiam detecção, pesquisa de ameaças, validação de hipóteses, treinamento e enriquecimento de investigações. Em uma rede corporativa, um ativo que não deveria receber conexões pode sinalizar reconhecimento interno, erro de configuração ou comunicação entre segmentos. Em uma rede pública, um serviço simulado pode revelar sondagens que não seriam visíveis em sistemas comuns. O alcance da inferência precisa acompanhar o da observação: contato com a isca significa que houve interação observável com aquele recurso, não que um ambiente produtivo foi comprometido.

## Funcionamento defensivo

A operação começa pela definição do escopo: que fenômeno se deseja observar, em qual zona da rede e durante quanto tempo. Em seguida, escolhe-se uma representação adequada, como um serviço fictício com respostas limitadas ou um recurso marcador em local controlado. A aparência deve ser plausível para receber interações, sem introduzir desnecessariamente um sistema real, credenciais válidas ou dados sensíveis. Maior fidelidade pode aumentar a riqueza dos registros, mas também amplia a complexidade, o custo e os riscos de contenção.

A coleta registra elementos suficientes para reconstruir a interação: horário com referência consistente, serviço envolvido, sequência de solicitações, respostas emitidas e metadados de conexão disponíveis. O conteúdo precisa de controles de acesso, retenção e proteção contra alteração. Convém registrar a configuração vigente, mudanças feitas e interrupções de coleta. Sem essa trilha, é difícil diferenciar uma alteração real no comportamento observado de uma mudança no próprio sensor.
## Formas e níveis de interação

Uma forma comum de organizar honeypots considera o nível de interação permitido. Em baixa interação, o recurso oferece uma representação estreita e controlada, com respostas limitadas. Isso tende a reduzir exposição e facilitar manutenção, mas pode não revelar ações que dependam de um comportamento mais completo. Em alta interação, a simulação se aproxima de um ambiente funcional e pode mostrar uma sequência mais rica. Em contrapartida, exige contenção e observabilidade rigorosas, pois aumenta a possibilidade de comportamento inesperado ou uso indevido.

O escopo também varia. Um honeypot individual representa um recurso. Uma honeynet reúne diversas iscas e componentes de monitoramento, formando um cenário mais amplo. Em redes internas, localização e segmentação podem ser tão importantes quanto realismo: uma isca em segmento sensível observa interações diferentes das de outra exposta à internet.
## Uso em investigação

O primeiro sinal pode ser um evento registrado diretamente: conexão, tentativa de autenticação, consulta a uma rota fictícia ou acesso a um marcador. O evento pode chegar como alerta ou ser encontrado durante análise de registros. O analista valida que o ativo era uma isca naquele momento, verifica se não havia teste autorizado e confirma que relógio e coleta funcionavam. Mudanças de inventário, exercícios internos e varreduras aprovadas podem produzir registros semelhantes a uma intrusão.

A qualidade probatória exige preservar registros originais, documentar a coleta e manter cadeia de custódia quando o contexto exigir. Uma captura parcial deve ser descrita como parcial. A ausência de registros não demonstra ausência de tentativa: a coleta pode ter falhado, o tráfego pode ter seguido outra rota ou a isca pode não ter atraído a interação. Conteúdo recebido pode ter sido forjado pelo emissor ou modificado durante a transmissão. A equipe deve separar o observado, o inferido e o ainda desconhecido.
## Evidências e interpretação

Elementos úteis incluem horário, endereços e portas envolvidos, duração e ordem das conexões, cabeçalhos ou parâmetros recebidos, respostas da simulação e identificadores dos artefatos capturados. Em interações mais ricas, podem existir registros de arquivos ou comandos apresentados à instância. Também é necessário saber qual configuração estava ativa, quais serviços eram simulados e quais limitações de captura existiam. O registro de uma tentativa de login demonstra que um nome foi submetido, mas não que a senha fosse válida em algum sistema real.

Também é preciso separar atividade automatizada de atividade dirigida. Uma tentativa pode vir de uma varredura genérica de endereços sem conhecimento específico do alvo. Uma sequência mais adaptada pode sugerir seleção ou persistência, mas ainda admite explicações alternativas. O caráter fictício do serviço não elimina falsos positivos operacionais: scanners internos, pesquisadores autorizados e equipes de segurança podem tocar a isca em atividades legítimas. Registrar testes e janelas autorizadas reduz confusão.
## Exemplo hipotético

Uma equipe coloca em rede isolada um serviço fictício de administração, sem dados de produção nem credenciais reutilizadas. A política permite monitorar conexões recebidas, mas bloqueia tentativas de saída para segmentos corporativos. A isca registra conexões vindas de um equipamento interno e consultas a funções que simula. O achado indica que aquele equipamento interagiu com o recurso; não esclarece se a causa foi um usuário, programa automatizado, teste ou processo comprometido.

Em outro exemplo, uma conta-canário é inserida em um repositório de teste acessível a um grupo restrito. Surge um alerta quando a conta é usada. A investigação verifica quem tinha acesso, se houve cópia ou sincronização automática e se a conta foi usada em exercício. O sinal indica possível exposição ou interesse, mas não revela sozinho exfiltração, intenção maliciosa ou identidade de quem a utilizou.

## Distinções com conceitos próximos

Um honeypot difere de um firewall: a função principal da isca é observar interações com um alvo simulado; o firewall aplica regras e pode bloquear ou permitir comunicações. Ambos podem coexistir, mas produzem evidências distintas. Um sistema de detecção de intrusão procura padrões em tráfego ou hosts. A isca pode ser uma fonte complementar, em que interações inesperadas merecem investigação, embora nem todo alerta seja verdadeiro ou malicioso.

“Canary token” costuma designar um marcador que gera sinal quando acessado ou usado. Pode ser uma forma estreita de isca, mas nem sempre permite observar além do acionamento. “Honeynet” é um conjunto coordenado de iscas. “Engano cibernético” ou deception é categoria mais ampla de estratégias que introduzem sinais ou recursos enganosos para detectar, atrasar ou estudar atividade adversária. Um honeypot pode integrar essa estratégia, mas os termos não são sinônimos perfeitos. Ao documentar o projeto, diga qual recurso foi simulado e o que registra.

## Limitações e riscos

A isca mostra somente a atividade que chega até ela. Um agente pode ignorá-la, reconhecê-la, usar caminhos não observados ou adaptar seu comportamento. Portanto, os registros não representam necessariamente toda a atividade de uma campanha nem todas as ameaças relevantes. Uma isca em determinado segmento ou serviço não oferece visão neutra da rede: sua posição e aparência selecionam as interações observáveis.

Registros podem conter dados pessoais, segredos submetidos por terceiros ou conteúdo malicioso. O tratamento deve seguir políticas de acesso, retenção, compartilhamento e resposta aplicáveis. Capturar mais não é sempre melhor: a coleta deve ser proporcional à pergunta, com proteção contra execução acidental de arquivos e abertura de links. Evidências compartilhadas externamente devem ser avaliadas para remover dados desnecessários e evitar exposição da arquitetura defensiva.
## Resposta a incidentes e governança

Um alerta deve chegar à triagem com contexto: qual é a isca, onde está, que atividade é esperada e quem pode autorizar testes. Primeiro, valida-se a observação e descartam-se manutenção ou varredura aprovada. Depois, avalia-se se o tráfego veio de fora ou de ativo interno, se há comunicações correlatas e se o caso exige conter, preservar ou escalar. O procedimento deve evitar interação manual improvisada com o emissor e execução de material recebido sem controles apropriados.

A governança começa antes da implantação. Um responsável define objetivo, escopo, localização, limites de conectividade, dados coletados, prazo de retenção, acesso aos registros, escalonamento e condições de desligamento. A equipe documenta como reconhecer a isca no inventário interno sem expor sua identidade além do necessário. Revisões periódicas confirmam se o objetivo continua válido e se a configuração respeita a segmentação e as políticas vigentes.
## Erros de interpretação frequentes

Um erro comum é atribuir atividade a pessoa ou grupo com base em endereço, nome de usuário ou artefato isolado. São pistas, não identidades. Outro é chamar qualquer conexão de ataque confirmado. O contato pode ser acidental, automatizado, autorizado ou resultar de erro de configuração. Uma descrição inicial factual — “houve uma tentativa de conexão registrada pela isca” — é mais precisa do que uma conclusão antecipada.
## Perguntas frequentes

### Precisa conter um sistema real?

Não. Pode ser uma emulação limitada ou um marcador. O essencial é representar deliberadamente um alvo, permanecer sob controle e permitir observação conforme um objetivo definido. Componentes reais ou simulados alteram riqueza e risco, mas não eliminam a necessidade de isolamento.

### Toda interação confirma um ataque?

Não. Confirma que houve interação observável com o recurso, se a coleta estiver correta. A natureza maliciosa depende da análise de testes autorizados, automação, erros e explicações alternativas. “Evento suspeito a investigar” pode ser classificação inicial mais precisa.

### Identifica quem está por trás da atividade?

Não por si só. Pode registrar indicadores que apoiem uma investigação, mas endereços, nomes e arquivos podem ser enganosos ou pertencer a intermediários. Atribuição exige corroborar fontes independentes e comunicar confiança e lacunas.

### Onde deve ser instalado?

Depende da pergunta. Uma isca externa observa interações com serviço exposto; uma interna pode sinalizar atividade inesperada entre segmentos. A posição deve respeitar arquitetura, objetivo e contenção. Não existe localização universalmente correta.

### Um alerta significa que a produção está comprometida?

Não. É motivo para triagem, sobretudo quando a interação parte de ativo interno ou se correlaciona com outros eventos. A conclusão depende de examinar sistemas reais e evidências associadas; a isca isolada não mede a extensão de um incidente.

## Relação com o capítulo

Na versão original, o capítulo 7 oferece o contexto relacionado a este verbete. O honeypot se insere na inteligência como meio controlado de produzir observações sobre interações dirigidas a alvos simulados.
