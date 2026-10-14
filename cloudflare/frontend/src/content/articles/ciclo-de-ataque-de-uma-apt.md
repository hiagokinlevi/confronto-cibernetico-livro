# Ciclo de ataque de uma APT

## Pergunta central: o que o ciclo permite descobrir?

Quando uma equipe encontra um arquivo suspeito, uma autenticação incomum ou uma transferência de dados fora do padrão, a questão imediata costuma ser “o que aconteceu?”. Em uma investigação de ameaça persistente avançada, há outra pergunta igualmente importante: “que partes da atividade ainda não conseguimos explicar?”.

A utilidade do modelo não está em adivinhar uma campanha inteira a partir de um alerta. Está em construir um mapa provisório de hipóteses, confrontá-las com registros independentes e atualizá-las à medida que surgem fatos.

O enquadramento é especialmente útil quando a atividade se estende por dias ou meses, atravessa equipes e tecnologias, ou aparece inicialmente como um incidente pequeno. Um acesso remoto legítimo usado fora do padrão pode parecer problema de identidade; uma conta de serviço abusada, problema de configuração; um volume de saída atípico, problema de rede. Consideradas juntas, essas ocorrências podem formar uma hipótese coerente.

A palavra APT é usada para descrever adversários e operações com capacidade, persistência e objetivos definidos, mas não identifica por si só um grupo específico nem assegura que toda campanha seja sofisticada em cada etapa. Algumas operações combinam ferramentas comuns, credenciais válidas e períodos de baixa atividade. “Avançada” não significa invisível, infalível ou tecnicamente inédita.

## O que se entende por ciclo de ataque

Um ciclo de ataque é uma representação das fases e decisões que podem compor uma operação adversária. Modelos conhecidos dão nomes diferentes às etapas e variam em granularidade.

Essa lista é uma lente, não um protocolo que todo intruso segue. Uma intrusão pode começar com uma conta já comprometida, sem que a organização tenha observado a preparação. O acesso pode surgir por um fornecedor, serviço exposto, dispositivo remoto ou código malicioso entregue a um usuário. O atacante pode alcançar o objetivo usando o primeiro sistema invadido, sem movimentação lateral.

Por isso, convém separar três conceitos. Fase é uma categoria analítica ampla, como reconhecimento ou coleta. Técnica é uma maneira observada ou suspeita de executar uma tarefa, descrita com maior precisão. Evidência é o registro concreto: evento de autenticação, alteração de configuração, alerta de endpoint, conexão de rede, mensagem recebida ou depoimento.

O ciclo tampouco é uma medida de gravidade. Uma operação que alcança um ativo crítico sem uma longa cadeia de fases pode causar risco maior do que uma tentativa extensa que foi bloqueada cedo.

## APT como campanha, não como rótulo de alerta

A expressão “campanha APT” costuma ser aplicada a atividade persistente que sugere planejamento e um objetivo estratégico ou operacional. A classificação pode ser apropriada quando há um conjunto de sinais consistentes: acesso prolongado ou renovado, seleção de alvos, adaptação ao ambiente, busca por informação específica e ações coordenadas.

Um indício não basta para afirmar persistência avançada. Um programa indesejado que executa uma vez, uma senha exposta ou um alerta de varredura merecem tratamento conforme o risco, mas não demonstram automaticamente uma campanha.

Na comunicação interna, vale distinguir “confirmado”, “provável”, “possível” e “não avaliado”, definindo o significado desses termos de modo consistente. Confirmado deve apontar para evidência revisada e contexto suficiente; provável descreve a melhor explicação disponível quando ainda há lacunas; possível indica uma hipótese que merece validação; não avaliado sinaliza que a pergunta permanece em aberto.

## Como usar as etapas sem forçar uma linha reta

### Preparação e reconhecimento

Antes de tentar entrar, um adversário pode reunir informações públicas e técnicas sobre a organização, seus domínios, tecnologias, relações comerciais, pessoas ou serviços acessíveis. A preparação pode ocorrer fora da rede da vítima e não deixar registros nos sistemas internos. Isso limita o que a equipe consegue confirmar retrospectivamente.

A defesa pode reduzir exposição desnecessária, manter inventário de serviços e responsáveis e revisar a informação pública divulgada por canais institucionais. Isso não elimina o reconhecimento; torna mais fácil identificar quais ativos existem e avaliar tentativas direcionadas.

### Acesso inicial e execução

O acesso inicial descreve o caminho pelo qual o adversário obtém uma presença ou uma capacidade de agir no ambiente. Pode envolver credencial comprometida, serviço vulnerável, relação de confiança, estação remota ou interação de um usuário.

Para investigar, alinhe eventos de identidade, endpoint, e-mail, aplicações e perímetro no mesmo intervalo de tempo. Pergunte quem iniciou a sessão, de qual dispositivo e local lógico, se o método de autenticação era esperado, que processo ou ação veio em seguida e se o ativo tinha motivo legítimo para realizá-la.

### Persistência e evasão

Persistência é a capacidade de recuperar ou manter acesso depois de uma interrupção, reinicialização, expiração de sessão ou mudança operacional. Pode residir em uma conta, configuração, integração, agendamento, aplicativo, dispositivo ou relacionamento de confiança.

A investigação deve comparar o estado atual com uma referência confiável quando ela existir e conferir alterações recentes com seus responsáveis. Mudanças autorizadas também deixam rastros e podem parecer suspeitas quando falta contexto; registros de mudança, inventário e confirmação do proprietário ajudam a separar manutenção de atividade inexplicada.

Evasão atravessa diversas fases. Um intruso pode tentar reduzir registros, usar ferramentas administrativas já presentes ou escolher horários e canais que se confundem com a rotina. Uma janela sem alertas não confirma que não houve atividade: pode haver coleta incompleta, retenção curta, sensor desconectado ou uma técnica fora da cobertura.

### Descoberta, privilégios e movimento interno

Depois de entrar, um adversário pode mapear usuários, grupos, sistemas, compartilhamentos, aplicações, rotas de administração e dados. Essas ações podem se parecer com atividades legítimas de inventário e suporte.

A obtenção de privilégios pode ocorrer por abuso de permissões existentes, falha de configuração ou acesso a outra identidade. O movimento lateral é o uso de uma posição para alcançar outro recurso.

O princípio do menor privilégio reduz o que uma identidade comprometida consegue alcançar, mas sua aplicação exige conhecer processos e dependências. Uma conta de serviço pode parecer ampla porque sustenta um sistema essencial; remover seus acessos sem validar impacto pode interromper a operação.

### Coleta, preparação e objetivo

A coleta pode abranger documentos, mensagens, bancos de dados, credenciais, configurações ou informações operacionais. O atacante pode selecionar, copiar, comprimir ou preparar materiais antes de transferi-los.

O objetivo final não é sempre exfiltrar dados. Pode envolver espionagem, fraude, interrupção, preparação para uma operação posterior ou acesso mantido para uso futuro. Às vezes o adversário realiza uma ação visível; em outras, o resultado relevante é a possibilidade de voltar.

### Comando, controle e saída de dados

Sistemas comprometidos podem trocar instruções ou resultados com infraestrutura sob controle do operador, mas esse canal pode se misturar a serviços comuns da internet ou utilizar conexões iniciadas pelo próprio equipamento. A defesa deve observar destino, periodicidade, volume, processo associado, identidade, resolução de nomes e relação com outras ações no endpoint.

Exfiltração é a transferência não autorizada de informação para fora do limite de confiança. Nem todo grande envio é exfiltração, e uma transferência pequena pode ser relevante se contiver um conjunto sensível.

## Decisões práticas durante a investigação

### Definir escopo sem atrasar a contenção

A equipe precisa decidir quais ativos e identidades fazem parte do incidente, o que pode ser isolado e quais atividades precisam continuar. Comece com o fato de maior confiança e delimite o intervalo: primeira observação, última atividade conhecida, sistemas envolvidos e fontes de registro disponíveis.

A contenção pode incluir bloqueio de sessão, redefinição controlada de credencial, isolamento de um endpoint, restrição temporária de acesso ou suspensão de integração. A escolha depende do caminho suspeito, do risco de continuidade e do efeito para o negócio.

Não confunda contenção com erradicação. Revogar uma sessão pode impedir o uso daquela sessão e deixar intacta outra identidade ou mecanismo de acesso. Reinstalar um computador pode remover evidência local sem fechar a rota que o comprometeu.

### Preservar evidências e manter contexto

Registros têm valor limitado quando ninguém sabe de onde vieram, quem os coletou ou se foram alterados. Preserve cópias conforme as regras da organização, anote fuso horário e diferenças entre relógios, mantenha origem, período e método de coleta, e controle quem teve acesso ao material.

Uma linha do tempo deve distinguir hora do evento, hora em que o sistema o registrou e hora em que a equipe tomou conhecimento. Sistemas podem estar dessincronizados; um evento recebido depois pode ter ocorrido antes. Inclua a fonte e o identificador de cada observação para permitir reavaliação.

### Tomar decisões sob evidência incompleta

Em um incidente ativo, talvez seja preciso interromper uma sessão suspeita antes de saber se ela pertence a um invasor ou a um administrador. A decisão pode ser correta se o risco de esperar for maior, mas deve registrar a incerteza e prever validação posterior.

Uma boa decisão explicita o que se sabe, o que se supõe, qual dano se tenta evitar, qual impacto operacional pode ocorrer e que sinal mudaria a escolha. Essa forma de raciocínio ajuda a liderança a comparar opções concretas.

## Fontes de evidência que se complementam

### Identidade e autenticação

Registros de provedores de identidade, diretórios, autenticação multifator, acesso condicional e aplicações podem mostrar criação ou alteração de contas, falhas e êxitos de login, mudanças de fator, elevação de privilégio e revogação de sessões. A interpretação melhora quando se associa o evento à pessoa responsável, ao dispositivo, à localização lógica, ao método de autenticação e à atividade subsequente.

### Endpoint, servidor e aplicações

Telemetria de endpoint pode relacionar processos, arquivos, conexões e alterações de configuração. Registros de sistema e aplicação acrescentam ações em serviços, operações de administração, consultas e acesso a dados. A visibilidade varia conforme agente, política, plataforma, retenção e estado do equipamento.

### Rede, DNS e serviços externos

Fluxos de rede, registros de proxy, resolução de nomes, firewall e gateways mostram comunicação e volume, em geral sem revelar todo o conteúdo. Dados de correlação temporal ajudam a associar uma conexão a um equipamento e a uma atividade local.

### E-mail, colaboração e dados

Trilhas de e-mail e plataformas colaborativas podem mostrar entrega, encaminhamento, acesso, compartilhamento, consentimentos e alterações em regras. Repositórios de dados podem registrar consultas, downloads, permissões e exportações. A granularidade difere entre produtos e configurações; confirme quais ações são efetivamente auditadas e por quanto tempo.

Nenhuma fonte cobre todo o ciclo. O valor surge da correlação: uma identidade abre sessão, um endpoint executa uma atividade, uma aplicação registra acesso e a rede mostra comunicação no mesmo intervalo.

## Papéis e coordenação

O centro de operações de segurança pode detectar eventos, correlacionar alertas e manter a linha do tempo. Resposta a incidentes conduz escopo, contenção e recuperação. Engenharia de identidade, endpoint, rede e nuvem confirma funcionamento, coleta registros e executa mudanças dentro de sua autoridade.

A coordenação funciona melhor quando cada ação tem responsável, prazo, dependências e critério de conclusão. “Investigar a conta” é amplo demais: é melhor definir qual período será examinado, que registros serão consultados, quem pode confirmar o uso esperado e que resultado será comunicado.

Uma organização menor pode reunir vários papéis na mesma pessoa. O princípio continua útil: separar, tanto quanto possível, quem interpreta evidência, quem autoriza impacto operacional e quem comunica conclusões.

## Cenários hipotéticos para comparar hipóteses

### A transferência fora do padrão

Cenário hipotético: o monitoramento registra uma saída incomum de dados de uma estação de trabalho. A primeira hipótese é exfiltração. A equipe verifica o destino, a aplicação que iniciou a conexão, a identidade em uso, os arquivos acessados antes da transferência e se a estação estava realizando uma tarefa autorizada.

Em outro cenário hipotético, o envio é precedido por acesso a repositórios que a conta normalmente não consulta, e o processo de origem não corresponde a uma atividade aprovada. Isso justifica ampliar a investigação para credenciais, sessão, endpoint, repositório e destino.

### O acesso que retorna

Cenário hipotético: uma conta perde uma sessão após uma redefinição de senha, mas novos acessos aparecem dias depois por outro método. Uma conclusão apressada seria afirmar que a redefinição falhou. A equipe compara sessões, dispositivos, fatores de autenticação, tokens, aplicações conectadas e eventos de alteração de conta. Pode descobrir que existe uma integração legítima ainda ativa ou que a identidade tem outro caminho de autenticação.

O caso demonstra por que “trocar a senha” não é sinônimo de eliminar acesso. A ação precisa considerar sessões existentes, credenciais relacionadas, métodos de recuperação, contas vinculadas e permissões concedidas a aplicações, conforme a plataforma.

### Um alerta em ambiente crítico

Cenário hipotético: um servidor operacional registra uma conta privilegiada em horário incomum. O sistema é essencial e não pode ser reiniciado sem coordenação. A equipe preserva eventos disponíveis, consulta o responsável pelo serviço, verifica a origem e a atividade subsequente e avalia restrições que reduzam risco sem interromper o processo.

A resposta não deve assumir que a conta foi comprometida apenas porque o horário é atípico; tampouco que tudo é legítimo porque o serviço é crítico. O contexto operacional é evidência relevante, mas precisa ser confirmado por alguém que conheça a mudança e seus registros.

## Alertas, provas e limites de interpretação

Um alerta é uma indicação de que algo merece triagem. Pode ser gerado por regra, modelo estatístico, fornecedor ou relato humano.

Para cada afirmação relevante, escreva a ligação entre dado e interpretação. “A conta foi usada às 02h” descreve um registro; “um invasor usou a conta” é uma interpretação que precisa de contexto.

Ausência de evidência só é informativa quando a fonte teria condições razoáveis de registrar o evento procurado, cobria o ativo e o período, estava íntegra e foi consultada corretamente. Uma busca sem resultado em uma fonte incompleta não reduz muito a hipótese.

Atribuição a um ator específico exige cautela adicional. Semelhanças de ferramentas, horários, alvos ou infraestrutura podem ser compartilhadas, imitadas ou reaproveitadas.

## Erros comuns ao aplicar o ciclo

Um erro é tratar as fases como uma lista obrigatória e concluir que, se não houve reconhecimento visível, a investigação está incompleta ou o alerta é falso. A atividade preparatória pode ser externa; logs podem ter expirado; o adversário pode ter usado informação pública.

Outro erro é começar pelo indicador mais chamativo e adaptar todas as evidências a ele. Um domínio conhecido, um nome de arquivo ou uma ferramenta pode dominar a narrativa mesmo quando o contexto aponta para outra explicação.

Também é comum equiparar presença persistente a um único mecanismo técnico. Acesso duradouro pode depender de sessões, identidades, integrações, caminhos de administração ou pontos de entrada independentes.

A pressa em fechar a narrativa pode produzir atribuição excessiva, impacto superestimado ou falsa tranquilidade. O relatório deve distinguir o que foi confirmado, provável, possível e não avaliado, informar limites de cobertura e atualizar conclusões quando novos fatos alterarem a leitura.

Por fim, tentar coletar todos os registros antes de agir pode ser tão prejudicial quanto apagar tudo na primeira suspeita. Priorize fontes que expiram, dados voláteis e decisões de contenção com consequências imediatas.

## Critérios para avaliar a qualidade da análise

Uma análise útil deve permitir que outra pessoa entenda a sequência sem depender da memória de quem investigou. A linha do tempo liga eventos às fontes, identifica divergências de relógio e marca lacunas.

O escopo está descrito por ativos, identidades, período e fontes examinadas. Também está claro o que ficou fora, por falta de acesso, retenção, cobertura ou autoridade.

As mudanças de resposta têm responsável, horário, motivação e resultado. A recuperação é verificada com os donos de serviço: sistemas voltaram ao estado esperado, credenciais e sessões relevantes foram tratadas, configurações foram revisadas e monitoramento acompanha recorrência.

O aprendizado transforma lacunas observadas em melhorias com dono e prioridade. Se faltou registro de autenticação, a ação pode ser revisar retenção e cobertura. Se ninguém sabia quem autorizava uma integração, é preciso corrigir inventário e processo.

## Exercício de mesa ou laboratório autorizado

Uma equipe pode treinar o uso do ciclo com um exercício de mesa baseado em fatos inteiramente hipotéticos. O facilitador apresenta, em etapas, um alerta de autenticação, uma atividade em endpoint, um evento de acesso a repositório e uma transferência de rede.

Na primeira rodada, forneça informação incompleta e peça que o grupo escolha quais fontes consultar e qual ação provisória considera. Depois apresente um dado que favorece uma explicação legítima e outro que sugere uma rota de acesso ainda ativa.

Em laboratório autorizado, use máquinas, contas e dados sintéticos sob controle da organização. Defina escopo, janela, responsáveis, telemetria disponível e critério de interrupção antes de começar.

Na revisão, pergunte quais fatos foram decisivos, que fontes estavam ausentes, quais suposições passaram despercebidas e onde uma decisão ficou sem responsável. Não avalie pessoas por terem acertado um desfecho que dependia de informação indisponível.

## Roteiro de implementação na organização

### 1. Escolher um escopo que possa ser sustentado

Comece com os serviços, dados e identidades de maior importância para a organização, considerando exposição, criticidade e capacidade de resposta. Não é necessário modelar todos os ativos ao mesmo tempo.

### 2. Mapear perguntas a fontes e responsáveis

Para cada etapa de interesse, descreva a pergunta de investigação e a fonte que pode respondê-la. Quem usou a identidade? Que equipamento iniciou a ação? Que serviço registrou o acesso?

### 3. Definir critérios de escalonamento e contenção

Acorde antecipadamente quem pode suspender sessões, isolar ativos, restringir integrações e autorizar impacto em serviços. Defina como avaliar risco ativo, sensibilidade dos dados, criticidade operacional e possibilidade de reversão.

### 4. Padronizar registro e comunicação

Use um formato simples para registrar horário, fonte, observação, interpretação, confiança, responsável, ação e resultado. Mantenha termos de confiança consistentes e marque hipóteses em mensagens de status.

### 5. Validar a cobertura e aprender com lacunas

Revise se as fontes realmente registram os eventos esperados e se os dados podem ser consultados durante o prazo útil. Faça exercícios autorizados para testar a coordenação, a coleta e a tomada de decisão.

## Perguntas frequentes

### Uma APT sempre percorre todas as etapas?

Não. O modelo descreve categorias úteis, mas a operação pode pular fases, repeti-las, executá-las em ordem diferente ou deixar pouca evidência em algumas delas.

### Quanto tempo dura um ciclo de ataque?

Não há duração universal. A atividade pode se concentrar em uma janela curta ou se estender por períodos distintos, com intervalos e retornos.

### Todo acesso inicial exige malware?

Não. Uma conta válida, integração, serviço remoto ou outra forma de acesso pode fornecer capacidade sem um arquivo malicioso clássico.

### Um alerta de ferramenta conhecida confirma um ator?

Não. Ferramentas podem ser usadas por diferentes operadores e em atividades autorizadas.

### Se não encontrei persistência, posso encerrar o incidente?

A ausência de um mecanismo identificado não prova que o acesso foi removido. A conclusão depende do escopo, das fontes examinadas, das rotas plausíveis de retorno e do risco residual.

### Como priorizar quando não há equipe grande?

Concentre esforço nos ativos e identidades que combinam maior impacto potencial e exposição, preserve fontes que expiram e estabeleça quem decide ações que afetam serviços. Um processo claro e registros consistentes podem tornar a resposta mais eficaz mesmo com uma equipe pequena; não substituem cobertura técnica necessária.

### O ciclo ajuda a atribuir uma campanha?

Ajuda a organizar comportamento e comparar padrões, mas não identifica sozinho um operador. A atribuição é uma conclusão separada, com requisitos próprios e incerteza.

## Leitura relacionada

O capítulo 1, “APTs, persistência e ciclo de ataque”, do livro de Hiago Kin Levi, publicado pela Editora Brasport, relaciona-se diretamente à discussão deste artigo. A leitura pode oferecer outro ponto de partida para compreender persistência e organizar perguntas sobre uma campanha.
