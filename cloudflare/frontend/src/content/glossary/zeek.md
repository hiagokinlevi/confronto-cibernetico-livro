# Zeek

## O que é

Zeek é uma ferramenta de monitoramento e análise de tráfego de rede que transforma comunicações observadas em registros estruturados úteis para análise e detecção. Em vez de apresentar apenas pacotes individuais ou depender de alertas prontos, acompanha fluxos, reconhece protocolos e organiza fatos como conexões, consultas DNS, solicitações HTTP e sessões TLS. Os registros disponíveis dependem do tráfego recebido, dos analisadores ativos e da configuração.

O nome designa tanto o software quanto, por extensão, a telemetria que ele produz. “Monitor de rede Zeek” descreve seu uso para observar tráfego em pontos de uma rede. Não significa que veja tudo: a perspectiva é determinada pela posição do sensor, pelos caminhos de rede e pela quantidade de dados que chega à captura. Zeek fornece observações e uma plataforma para lógica de análise; um registro não é, por si só, uma decisão de que houve atividade maliciosa.

Uma conexão com destino incomum, por exemplo, é uma pista que merece contexto. Serviços legítimos podem usar destinos raros, e um padrão suspeito pode ter explicação operacional. A utilidade do registro está em permitir que a equipe faça perguntas verificáveis e relacione a comunicação a outras evidências.

## Como funciona

O sensor recebe tráfego por uma interface, por uma cópia encaminhada por equipamento de rede ou por outro método compatível com a implantação. Em geral, observa uma cópia da comunicação e não participa diretamente dela. Seus componentes acompanham fluxos, identificam protocolos e extraem atributos à medida que os dados chegam. Isso permite reunir contexto de uma sessão em vez de analisar cada pacote como evento independente.

Um registro de conexão pode incluir horários, endereços e portas de origem e destino, protocolo, duração, volume de dados e estado observado. Registros específicos acrescentam atributos reconhecidos por analisadores: DNS pode registrar nomes consultados e respostas; HTTP pode expor método, host, caminho e código de resposta; TLS pode registrar informações disponíveis durante a negociação. Os campos variam com versão, configuração, scripts e condições de captura.

O modelo de eventos também permite que scripts reajam a fatos reconhecidos, correlacionem comportamentos e produzam notificações. Os dados são normalmente persistidos como logs estruturados e podem ser encaminhados para uma plataforma de busca. Zeek atua, assim, como origem de telemetria em uma arquitetura maior; armazenamento, correlação entre fontes e fluxo de resposta podem ser feitos por outros componentes.

Convém distinguir pacote, evento e registro. O pacote contém dados capturados; o evento representa algo reconhecido durante a análise; o registro é uma representação selecionada e persistida. O registro não é necessariamente a conversa completa. A falta de um campo pode significar que o analisador não o extraiu, que o tráfego estava cifrado, que houve perda ou que a política não o registrou. Não permite concluir automaticamente que o dado não existia.

## Visibilidade e cobertura

A localização do sensor define que tráfego pode chegar a ele. Um ponto de captura em uma saída para a internet vê uma perspectiva diferente de um sensor em uma rede de servidores. Comunicações que não atravessam o enlace monitorado, como tráfego local em outro segmento, ficam fora do escopo. O inventário de sensores e a topologia são, portanto, parte da interpretação dos logs.

A qualidade da captura também importa. Sobrecarga, filtros, falha no espelhamento, tráfego assimétrico ou perda de pacotes deixam lacunas. Se só uma direção de uma conversa chega ao sensor, alguns dados podem ser registrados, mas a análise pode ficar incompleta. Relógios sincronizados facilitam comparar rede com endpoint, firewall e aplicação; diferenças de horário distorcem a sequência aparente dos fatos.

Criptografia limita o conteúdo diretamente legível, sem apagar toda a telemetria. Metadados de conexão e alguns atributos da negociação podem continuar observáveis, dependendo do protocolo e das condições. Não se deve presumir que o sensor conheça conteúdo de aplicação, caminho ou identidade só porque registrou uma sessão TLS.

A configuração delimita a observação: analisadores podem ser habilitados ou ajustados, scripts podem enriquecer dados e filtros ou políticas de retenção podem restringir a saída. Uma lacuna exige verificar a cobertura e a configuração vigentes no período investigado, não apenas procurar um campo em um painel.

## Utilidade na detecção e investigação

Os registros ajudam a responder perguntas sobre padrões de comunicação em volumes que seriam difíceis de examinar manualmente: quais sistemas se conectaram a um destino; que nomes foram consultados; que serviços receberam conexões; se a frequência mudou; ou quais outros ativos falaram com uma máquina sob investigação. O valor está na pesquisa e na correlação, não em tratar cada linha como veredito.

Na triagem, registros de conexão fornecem um mapa inicial de origem, destino, horário e protocolo. Os registros de protocolo acrescentam contexto que pode orientar novas buscas. Uma consulta DNS incomum, por exemplo, pode levar à análise de outras consultas do mesmo cliente e à comparação com registros do resolvedor. Horários e endereços podem ser comparados com dados de endpoint, proxy ou servidor para testar se as fontes descrevem a mesma atividade.

Em um cenário hipotético de possível comando e controle, a equipe observa conexões periódicas de um ativo para um destino pouco frequente e verifica se começaram perto de um alerta de endpoint. Isso não prova atividade maliciosa: aplicações legítimas também podem se comunicar de forma repetitiva. A validação pode considerar processo de origem, proprietário do ativo, histórico do destino, atividade de outros hosts e evidências independentes.

Em uma hipótese de exfiltração, registros podem mostrar volume e horário de comunicação com um destino externo. Volume, isoladamente, não identifica o conteúdo nem demonstra que dados sensíveis foram enviados. A equipe pode correlacionar a pista com telemetria de endpoint, proxy, controles de armazenamento e registros do serviço remoto. Se a conversa estava cifrada, não se deve afirmar que Zeek registrou o arquivo ou seu conteúdo sem evidência de que esses dados eram visíveis.

## Reconhecer e validar evidências

A presença de logs estruturados com campos e convenções conhecidos pode indicar Zeek, mas nomes de arquivos ou campos isolados não bastam para confirmar a origem. Formatos podem ser personalizados, transformados ou encaminhados. Confirme a procedência no inventário do sensor, na configuração, no coletor ou na documentação operacional.

Ao avaliar uma fonte, verifique:

- qual sensor produziu os dados e que segmento ou interface observava;
- período coberto, fuso horário e sincronização do relógio;
- tipos de log, analisadores ativos e mudanças de configuração;
- sinais de perda, truncamento ou falha de processamento;
- transformações na ingestão, filtros e política de retenção.

A corroboração fortalece a interpretação. Compare horários e pares de endereços com firewall ou proxy, processo e usuário no endpoint, registros do servidor e, se houver, captura de pacotes. Considere diferenças de relógio, NAT, proxies, balanceadores e pontos de observação: dois equipamentos podem descrever a mesma sessão de perspectivas diferentes. O endereço visto em um segmento pode ser o de um intermediário, não o dispositivo que iniciou a atividade.

## Distinções importantes

**Zeek e captura de pacotes:** a captura pode preservar bytes para exame posterior, conforme cobertura e retenção. Zeek estrutura fatos reconhecidos durante o processamento, o que facilita pesquisas em escala, mas não reconstitui detalhes que não foram registrados. As duas fontes podem se complementar; os logs não substituem uma captura quando a pergunta exige examinar pacotes específicos.

**Zeek e IDS por assinaturas:** um IDS pode comparar tráfego com regras e gerar alertas prontos. Zeek analisa protocolos, expõe eventos e permite lógica configurável. Há sobreposição: scripts podem emitir notificações de segurança. Ainda assim, log não equivale a alerta, e ausência de alerta não demonstra ausência de atividade relevante.

**Zeek e SIEM:** Zeek coleta e analisa tráfego na origem da telemetria. Um SIEM agrega eventos de várias fontes para busca, correlação, painéis e alertas. É comum consultar dados de Zeek no SIEM, mas este não é necessariamente o componente que capturou ou interpretou a comunicação.

**Zeek e agente de endpoint:** o monitor observa comunicação no ponto de rede onde foi implantado. Em geral, não identifica sozinho o processo local responsável, a ação do usuário ou arquivos que não transitaram pela rede. Para atribuir uma conexão a um processo, é preciso correlacionar telemetria de endpoint ou usar outra instrumentação apropriada.

## Limitações e erros de interpretação

Zeek só analisa o que consegue observar e reconhecer. Protocolos proprietários, variantes, túneis e dados malformados podem limitar a análise. Mudanças de versão e configuração alteram os campos disponíveis. Tráfego cifrado pode ocultar conteúdo. Ao comparar conjuntos de dados, registre condições de coleta e configuração para não tratar resultados distintos como equivalentes.

Um erro frequente é tomar a ausência de registro como prova de ausência de comunicação. Antes de concluir, verifique se o caminho passava pelo sensor, se a captura estava saudável, se havia filtros ou perda, se o analisador reconheceria o protocolo e se os dados ainda estavam retidos. A ausência pode decorrer de qualquer etapa da cadeia de observação e preservação.

Outro erro é transformar metadados em afirmações sobre intenção ou conteúdo. Um nome DNS pode corresponder a uso legítimo; o país associado a um endereço não identifica autoria; volume alto não revela o que foi enviado; uma conexão curta não é necessariamente uma varredura. Indicadores podem priorizar investigação, mas precisam ser confrontados com contexto e evidência independente.

## Uso na resposta a incidentes

Antes de usar consultas para orientar contenção, delimite a cobertura e a confiabilidade da fonte: sensores envolvidos, períodos disponíveis, saúde da coleta e zona horária. Guarde critérios de busca, filtros e resultados relevantes para que outro analista possa reproduzir a análise. Se a plataforma transformou os dados, registre essa etapa.

Se a decisão depender de detalhes ausentes nos registros, procure fontes complementares, como captura de pacotes, proxy ou endpoint, respeitando a política da organização. Mudanças no sensor devem ser documentadas com horário, responsável, motivo e efeito esperado. A evidência de rede pode apoiar isolamento ou bloqueio, mas a equipe também precisa considerar impacto no serviço e confirmar que o destino não é compartilhado com atividade legítima.

## Perguntas frequentes

### Zeek bloqueia conexões suspeitas?

Seu papel usual é observar e analisar. Uma integração pode encaminhar resultados a controles que bloqueiam, mas o registro não prova que houve bloqueio. Identifique qual componente executou a ação e quando.

### Um registro prova que ocorreu um ataque?

Não. Ele documenta uma comunicação observada segundo a perspectiva do sensor. Para sustentar a conclusão, relacione-a a comportamento malicioso, contexto e outras evidências pertinentes à pergunta investigada.

### A falta de log HTTP prova que não houve navegação?

Não. O tráfego pode não ter passado pelo sensor, o protocolo pode não ter sido reconhecido, a comunicação pode estar cifrada, ou os dados podem ter sido filtrados ou expirado. Verifique a cadeia de observação antes de inferir ausência.

### Zeek identifica o processo que abriu a conexão?

Em geral, não. Correlacione horário, endereço e porta com dados de endpoint, levando em conta NAT e intermediários que podem alterar a perspectiva da conexão.

### Por que sensores mostram resultados diferentes?

Eles podem observar segmentos distintos, receber quantidades diferentes de tráfego e usar configurações, versões e políticas de registro diferentes. Compare cobertura e cadeia de ingestão antes de comparar os resultados.

## Relação com o capítulo

No capítulo 8 da versão original, Zeek se relaciona à detecção como fonte de evidência de rede: converte atividade observada em registros que ajudam a formular, testar e correlacionar hipóteses. A interpretação confiável explicita a posição do sensor, os limites da captura e o que cada campo permite concluir.
