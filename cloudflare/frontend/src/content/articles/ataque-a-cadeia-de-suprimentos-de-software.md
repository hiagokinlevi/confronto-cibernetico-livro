# Ataque à cadeia de suprimentos de software

## Pergunta central: como responder quando um componente confiável pode ter sido comprometido?

Quando surge um alerta sobre uma biblioteca, um pacote, uma ferramenta de compilação ou um serviço de fornecedor, a pergunta urgente não é apenas “estamos usando isso?”. É: que versões e caminhos de entrega poderiam alcançar nossos sistemas, quais sinais indicam que o material foi realmente executado ou usado de forma maliciosa, e que medidas reduzem o risco sem interromper funções essenciais?

Essa distinção orienta a comunicação e a resposta. Uma versão listada em um aviso de segurança pode estar presente em um repositório, imagem ou estação de trabalho, mas isso não prova que tenha sido instalada em produção.

A cadeia de suprimentos de software inclui pessoas, organizações, processos, serviços e artefatos envolvidos para produzir, distribuir, instalar, atualizar e operar software. Um incidente nessa cadeia pode se propagar porque consumidores confiam em um fornecedor, em um mantenedor, em uma identidade de publicação, em um serviço de integração ou em um componente transitivo.

Este artigo trata a resposta como um trabalho coordenado: identificar o que pode estar envolvido; preservar dados suficientes para decidir; conter por escopo; recuperar de forma controlada; e aprender sem converter incerteza em certeza artificial. Não pressupõe que todo alerta seja incidente confirmado, nem que a ausência de alerta signifique ausência de exposição.

## O que caracteriza um risco na cadeia de fornecimento

### Do código à operação

Um produto pode incorporar código próprio, bibliotecas externas diretas e transitivas, imagens-base, plugins, modelos ou pacotes de dados. Pode ser compilado em um serviço hospedado, por agentes de integração contínua, em máquinas de desenvolvimento ou por um fornecedor.

Uma falha de cadeia não é sinônimo de vulnerabilidade em uma biblioteca. Pode haver vulnerabilidade explorável em um componente legítimo; adulteração de código ou de artefato; comprometimento de conta de mantenedor; publicação acidental de versão defeituosa; uso indevido de credenciais de automação; ou dependência de um serviço externo que alterou seu comportamento.

O risco depende de como o componente entra no ambiente e do que pode fazer nele. Uma biblioteca compilada dentro de um executável tem uma trilha diferente de um pacote instalado no início da execução.

### Relação de confiança e propagação

A confiança pode estar embutida em configurações: atualização automática, publicação sem revisão, chave de assinatura de longa duração, credencial de CI com amplo escopo, lista de registros autorizados ou processo de aprovação que aceita qualquer versão assinada. A assinatura pode demonstrar que certo artefato foi assinado por uma identidade, mas, por si só, não prova que o conteúdo seja benigno nem que a identidade não tenha sido abusada.

Uma cadeia pode alcançar muitas organizações sem que todas tenham a mesma exposição. Elas podem consumir versões diferentes, usar subconjuntos distintos do produto, bloquear execução por controles próprios ou receber o artefato por canais separados.

### Exposição, execução e comprometimento

“Exposto” pode significar que um sistema contém uma versão sob investigação, que um pipeline poderia baixá-la ou que uma conta tinha permissão para consumi-la. “Executado” exige evidência de que o conteúdo participou de um processo, tarefa ou construção.

Evidências negativas também têm limite. Não encontrar um processo em registros com retenção curta não prova que ele nunca existiu.

## Decisões práticas nas primeiras horas

### Definir escopo antes de escolher a intervenção

A equipe deve identificar o nome e o ecossistema do componente, versões e intervalos relevantes, origem do alerta, artefatos conhecidos, canais de distribuição e datas de publicação ou retirada, quando confirmadas por fontes confiáveis. Em seguida, deve relacionar esses dados com inventários internos.

A primeira classificação deve ser provisória e datada. Registre o que se sabe, o que se supõe e o que falta.

### Conter sem apagar a trilha

As opções podem incluir bloquear temporariamente novas aquisições de uma versão, suspender uma atualização automática, colocar em quarentena artefatos, restringir uma credencial, desabilitar integração ou isolar um ativo. A escolha depende da probabilidade e gravidade do dano, do papel do componente, das alternativas disponíveis, da reversibilidade da ação e do custo de indisponibilidade.

Antes de remover um pacote ou reconstruir um host, considere que logs, caches, arquivos temporários e metadados podem ser úteis. Preserve cópias controladas de manifestos, imagens, pacotes, registros de instalação e evidências relevantes, respeitando as políticas de privacidade e retenção.

### Equilibrar proteção e continuidade

Retirar o componente sem avaliar compatibilidade pode produzir falhas em cascata: dependências deixam de resolver, plugins param, imagens não constroem, aplicações falham na inicialização ou uma versão substituta altera comportamento. Isso não torna a permanência automaticamente aceitável.

Uma versão corrigida anunciada pelo fornecedor não é automaticamente segura para todos os ambientes. É preciso confirmar sua procedência e compatibilidade, validar o pacote recebido e testar a aplicação em condições representativas.

### Comunicar níveis de certeza

Uma atualização operacional pode separar: fatos verificados; hipóteses em avaliação; medidas já adotadas; impacto conhecido; perguntas em aberto; e próxima revisão. Evite expressões categóricas com base apenas em um aviso externo.

Mensagens a clientes e parceiros devem ser coordenadas com os responsáveis por comunicação, contratos e privacidade, sem omitir obrigações aplicáveis. Compartilhe o necessário para proteção e investigação, usando canais adequados.

## Fontes de evidência e o que cada uma pode responder

### Inventário de software e artefatos

Manifestos de dependência, arquivos de bloqueio, SBOMs, registros de build, catálogos de aplicações, inventários de imagens e relatórios de scanners ajudam a localizar componentes declarados ou observados. É importante saber quando foram gerados, se representam o código-fonte ou o artefato final, quais camadas cobrem e como lidam com dependências transitivas.

Compare identificadores, versão, origem, hash e contexto de empacotamento. Em alguns ecossistemas, a versão exibida por uma ferramenta não corresponde exatamente ao conteúdo baixado.

### Registros de construção e publicação

Logs de integração contínua, trilhas de auditoria do registro, eventos de assinatura, aprovações e alterações de configuração podem ajudar a determinar quem publicou um artefato, quais identidades foram usadas e que entradas participaram da construção. Eles também podem revelar lacunas: logs desativados, retenção vencida, agente efêmero sem coleta ou processo que não registra dependências resolvidas.

Um registro de publicação não demonstra, isoladamente, que o autor indicado foi a pessoa que agiu. A credencial poderia ter sido compartilhada ou comprometida; a identidade poderia ser automatizada; o relógio do sistema poderia estar desalinhado.

### Telemetria de execução e rede

Registros de processo, carregamento de módulos, alterações de arquivos, autenticação, DNS, proxy, firewall e fluxo de rede podem ajudar a identificar execução e comportamento. A relevância depende da instrumentação, cobertura, relógio, retenção, normalização e qualidade dos nomes de processo.

Construa a janela temporal a partir das fontes do incidente e das datas em que o componente esteve disponível internamente. Considere relógios em fusos diferentes, atrasos de ingestão e retenção.

### Evidência do fornecedor e fontes públicas

Comunicados do mantenedor, avisos de segurança, repositórios oficiais e canais do fornecedor podem explicar versões afetadas, correções, indicadores e cronologia. Verifique data, escopo e atualização do comunicado.

Solicite informações objetivas ao fornecedor: identificadores de artefatos, intervalo de versões, canais afetados, mecanismo de correção, evidências preservadas, medidas sobre credenciais ou sistemas de publicação e limitações da investigação. A equipe consumidora deve registrar pedidos e respostas, mas manter sua própria avaliação.

### Preservação e qualidade probatória

A investigação técnica pode interagir com exigências legais, regulatórias, contratuais e de privacidade. Defina quem pode coletar, onde armazenar, como controlar acesso e como registrar transformações.

Uma evidência deve ser descrita junto com sua origem, método de coleta, período e limitações conhecidas. Capturas de tela sem metadados, relatórios exportados sem filtros documentados ou arquivos editados manualmente podem perder valor.

## Papéis e coordenação da resposta

### Dono do produto e equipes de engenharia

A equipe que mantém o produto identifica onde a dependência é declarada, como é resolvida, quais funcionalidades a usam e o que muda ao atualizar ou remover. Também define uma correção compatível, monta artefatos a partir de fontes confiáveis e valida regressões funcionais.

### Segurança, resposta a incidentes e operações

Segurança organiza hipóteses, evidências, indicadores e avaliação de risco. Resposta a incidentes coordena a linha do tempo e a tomada de decisão técnica.

### Compras, gestão de fornecedores e jurídico

Compras e gestão de fornecedores localizam contratos, contatos, compromissos de notificação e alternativas comerciais. Jurídico e privacidade avaliam obrigações e limites de divulgação.

### Liderança e comunicação

A liderança decide sobre tolerância a interrupções, prioridade entre serviços e recursos para contenção. Deve receber opções com consequências compreensíveis, não apenas uma lista de indicadores técnicos.

## Cenários hipotéticos contrastantes

### Componente listado, mas sem evidência de implantação

Hipoteticamente, um aviso identifica uma versão potencialmente adulterada de uma ferramenta de desenvolvimento. O inventário mostra essa versão em um arquivo de teste de uma ramificação antiga, enquanto os registros de implantação indicam que os serviços usam outra versão.

Nesse cenário, retirar imediatamente a dependência de todos os projetos pode gerar mudanças desnecessárias. Uma ação proporcional é congelar novas instalações da versão, preservar os registros, verificar os ambientes onde a ferramenta poderia ter sido resolvida e manter a investigação aberta até completar a cobertura.

### Versão presente em serviço de produção

Hipoteticamente, o inventário relaciona uma biblioteca suspeita a uma imagem implantada e o manifesto da imagem confirma a versão. Isso sustenta presença no artefato, não necessariamente execução de código malicioso.

A mitigação pode envolver trocar a dependência, reconstruir a imagem, validar a origem do novo artefato e implantar gradualmente. Caso a execução maliciosa seja confirmada, a resposta passa também a investigar credenciais e dados acessíveis ao processo.

### Ferramenta de build ou identidade de publicação envolvida

Hipoteticamente, um fornecedor informa que um agente de compilação pode ter sido acessado por terceiro. O impacto potencial pode ultrapassar um único pacote, pois o agente talvez tenha recebido código, tokens de publicação ou segredos de implantação.

Se a publicação de artefatos não confiáveis for uma hipótese plausível, simplesmente atualizar o componente usado no produto pode ser insuficiente. Pode ser necessário reconstruir a partir de ambiente conhecido, invalidar artefatos intermediários e revalidar a proveniência.

### Aviso público sem confirmação local

Hipoteticamente, uma notícia se espalha antes de haver detalhes técnicos suficientes. A organização identifica que o produto do fornecedor está em uso, mas não sabe quais módulos ou versões.

Esse cenário contrasta com uma confirmação de execução em um ativo interno, em que a contenção e preservação ganham prioridade imediata. O mesmo alerta inicial pode levar a decisões diferentes conforme contexto e evidência.

## Exemplos defensivos seguros

Uma análise de inventário pode começar por fontes já mantidas: repositórios, registros internos de pacotes, catálogos de imagens e telemetria de implantação. Em vez de procurar apenas o nome do pacote, a equipe confirma identificadores, versões resolvidas e localização do artefato.

Uma validação de artefato pode comparar o hash de uma cópia preservada com a referência publicada por fonte autenticada, verificar a assinatura conforme o procedimento interno e inspecionar metadados de origem. O resultado deve ser interpretado com cuidado: correspondência demonstra igualdade de conteúdo com aquela referência; assinatura válida indica relação com uma identidade de assinatura; nenhuma das duas comprova benignidade.

Um teste de atualização pode ocorrer em ambiente de pré-produção representativo, com a versão anterior preservada e critérios funcionais definidos. A equipe verifica resolução de dependências, inicialização, operações principais, logs e comportamento esperado.

Um exercício de credenciais pode revisar quais segredos estavam acessíveis a um agente de build, quando foram usados e como seriam rotacionados. Faça-o em uma conta e ambiente controlados, sem tentar extrair segredos ou simular acesso não autorizado.

## Erros comuns que ampliam o risco

### Tratar uma lista como prova de comprometimento

Um relatório de dependências pode conter componentes não implantados, dependências de desenvolvimento ou referências desatualizadas. Classificar toda ocorrência como comprometimento pode desviar recursos e gerar comunicação incorreta.

### Tratar ausência de alerta como prova de segurança

Sensores ausentes, retenção curta, eventos não normalizados e execução em agentes efêmeros podem deixar lacunas. Um painel sem eventos não necessariamente cobre os ativos relevantes.

### Remover indiscriminadamente componentes

Remoção em massa pode quebrar dependências, deixar sistemas sem suporte ou estimular instalações manuais não rastreadas. Também pode destruir evidência.

### Confiar somente na declaração do fornecedor

O fornecedor pode ter visibilidade superior sobre sua infraestrutura, mas desconhecer as configurações, versões e logs do consumidor. A declaração ajuda a formar hipóteses, não substitui conferência local.

### Rotacionar segredos sem plano de dependências

Uma rotação incompleta pode interromper serviços e levar operadores a restaurar o segredo anterior. Se houver fundamento para rotação, identifique consumidores, sequência, prazo, validação e revogação efetiva da credencial antiga.

### Atualizar sem estabelecer procedência

Uma versão nova pode vir do mesmo canal ou processo sob suspeita. Confirme a fonte, os metadados e o caminho de construção, conforme as evidências disponíveis.

### Encerrar cedo demais ou manter a crise indefinida

Encerrar porque a primeira busca não encontrou ocorrências ignora cobertura incompleta. Por outro lado, manter todos os sistemas em estado de crise sem critérios de saída consome atenção e atrasa recuperação.

## Critérios para avaliar a resposta

A avaliação deve perguntar se a organização conseguiu identificar versões e artefatos afetados com proveniência suficiente; se o inventário distinguia desenvolvimento, teste e produção; e se a cobertura das ferramentas foi explicitada. Deve verificar se hipóteses foram ligadas a fontes, períodos e responsáveis, e se fatos confirmados ficaram separados de alertas e inferências.

Também importa examinar a qualidade da decisão de contenção: o escopo correspondeu ao risco conhecido? Os custos de interrupção foram avaliados?

A investigação precisa avaliar se evidências foram preservadas com controle de acesso, se logs relevantes cobriam o período e se as lacunas foram tratadas. A comunicação deve ter sido consistente entre equipes e atualizada quando os fatos mudaram.

Por fim, avalie se as causas sistêmicas receberam encaminhamento: privilégios de publicação excessivos, dependências sem dono, builds não reproduzíveis, identidade compartilhada, falta de inventário ou ausência de plano de atualização. Uma boa resposta não precisa provar que todos esses controles já existiam; precisa transformar falhas observadas em ações priorizadas, com dono e mecanismo de acompanhamento.

## Exercício de mesa autorizado

### Objetivo e preparação

Uma equipe pode realizar um exercício de mesa com cenário inteiramente hipotético: um aviso confiável informa que determinada versão de uma dependência pode ter sido publicada por uma identidade comprometida. O exercício não usa pacote malicioso nem tenta alcançar sistemas externos.

Prepare um inventário fictício com ocorrências em desenvolvimento e produção, um serviço de build compartilhado, retenções de log diferentes e uma dependência transitiva. Não use nomes ou dados que possam ser confundidos com um incidente real.

### Injeções e decisões

Na primeira etapa, entregue o aviso e pergunte qual é a primeira afirmação que a equipe pode fazer com segurança. Espera-se identificar que há um alerta e iniciar a verificação, sem declarar comprometimento local.

Na etapa seguinte, revele que uma imagem de produção contém a dependência, mas não há confirmação de execução do caminho vulnerável. Pergunte que evidências adicionais são necessárias, se há uma ação preventiva proporcional e quem avalia compatibilidade.

Por último, apresente uma correção do fornecedor e uma janela operacional curta. A equipe deve selecionar sequência de validação, responsável por decisão de risco, plano de retorno e critérios para comunicar a atualização.

### Observação e aprendizado

O facilitador registra decisões, premissas, perguntas não respondidas e pontos em que papéis ficaram ambíguos. Observe se alguém confundiu versão presente com execução, alerta com evidência, assinatura com benignidade ou ausência de log com ausência de atividade.

Transforme as observações em ações concretas: completar um inventário, identificar um contato de fornecedor, documentar uma regra de contenção ou ensaiar uma rotação de credencial de teste. Cada ação precisa de dono e revisão futura.

## Roteiro de implementação

### Preparar capacidade antes do alerta

Mantenha inventário de aplicações, dependências e artefatos com donos identificáveis. Registre a origem e o método de construção quando isso for viável, bem como ambientes que podem consumir cada pacote.

Estabeleça contatos técnicos e de segurança de fornecedores críticos, canais de aviso e informações que serão solicitadas em um incidente. Documente quem pode congelar publicação, bloquear uma versão, isolar um agente e aprovar exceções.

### Triar e construir o mapa de exposição

Quando receber um aviso, valide sua origem e atualidade. Extraia os identificadores técnicos confirmados, versões e condições de impacto informadas, marcando o que é preliminar.

Construa a cronologia de disponibilidade e uso potencial com as fontes existentes. Priorize ativos conforme exposição, privilégios, sensibilidade dos dados, conectividade e criticidade operacional.

### Escolher contenção e investigar

Compare opções de intervenção e seus efeitos: impedir novas instalações, fixar uma versão conhecida, bloquear um hash, retirar uma integração, restringir acesso, isolar um ativo ou aguardar evidência adicional com controles compensatórios. A medida deve ser específica ao caminho provável.

Investigue primeiro as hipóteses com maior capacidade de explicar dano e maior consequência, sem abandonar caminhos menos prováveis quando a evidência sugerir. Correlacione eventos de publicação, build, execução e rede.

### Recuperar, validar e acompanhar

Defina a correção conforme a natureza do incidente. Pode ser atualizar, remover, substituir, reconstruir ou revogar credenciais; em alguns casos, várias medidas são necessárias.

Após estabilizar, reavalie ativos e credenciais afetados, confirme o estado de exceções e comunique a situação atual com precisão. Documente o que foi confirmado, o que não foi possível determinar e quais ações reduzem o risco residual.

## Perguntas frequentes

### Se o pacote aparece na SBOM, o sistema está comprometido?

Não. A SBOM indica uma relação com o artefato e deve ser entendida conforme sua data, método e cobertura.

### A assinatura válida confirma que a atualização é segura?

Não por si só. Ela pode ajudar a verificar que o artefato foi assinado por uma identidade esperada, segundo a cadeia de confiança usada.

### Devemos bloquear toda versão citada em um alerta?

Depende do escopo do aviso, da confiança na fonte, do uso local e do custo de interrupção. Bloquear preventivamente pode ser razoável se a versão estiver no caminho de aquisição e a medida for controlável.

### Quando é necessário reconstruir uma imagem ou aplicação?

A reconstrução pode ser apropriada quando o artefato foi produzido em um processo potencialmente comprometido, quando não há confiança na cadeia de origem ou quando a correção só pode ser aplicada em novo build. Se a evidência apontar apenas para uma dependência presente em código não executado, o escopo pode ser diferente.

### O que comunicar enquanto a investigação está aberta?

Comunique o alerta recebido, o escopo que está sendo verificado, as medidas adotadas, os fatos confirmados, as limitações da evidência e o momento da próxima atualização. Evite tanto afirmar comprometimento sem suporte quanto declarar segurança porque ainda não surgiu um indicador.

### Como priorizar fornecedores?

Considere o papel do produto, o acesso a dados ou ambientes, a capacidade de publicar ou atualizar componentes, a criticidade dos serviços que dependem dele e a disponibilidade de alternativas. Prioridade não deve ser reduzida a uma pontuação inventada.

### Qual é a diferença entre atualização e recuperação?

Atualizar substitui uma versão ou aplica uma correção. Recuperar é mais amplo: verifica que o artefato confiável chegou aos ambientes, que credenciais potencialmente expostas foram tratadas, que sistemas afetados voltaram a operar e que sinais residuais foram avaliados.

### Como lidar com evidência inconclusiva?

Escreva claramente o que as fontes cobrem e o que não cobrem. Dê prioridade a dados capazes de distinguir hipóteses, preserve a telemetria restante e escolha medidas proporcionais ao risco residual.

## Leitura relacionada ao capítulo 8

O capítulo 8 do livro de Hiago Kin Levi, publicado pela Editora Brasport, relaciona-se a este tema por abordar operações de resposta, contenção e recuperação. Essa leitura pode ajudar a organizar decisões e a pensar sobre a coordenação durante um incidente.
