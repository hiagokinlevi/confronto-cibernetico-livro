# PCAP

## Definição e alcance

PCAP, também chamado *packet capture* ou captura de pacotes, é o arquivo ou o processo pelo qual unidades de tráfego de rede são observadas e registradas para análise posterior. A definição parece simples, mas abrange duas coisas relacionadas que convém separar: a atividade de coletar tráfego em um ponto da rede e o conjunto de dados que resulta dessa atividade. Em um relatório forense, é melhor dizer qual desses sentidos está em uso.

Uma captura registra pacotes tal como foram observados pela interface ou pelo mecanismo de coleta, potencialmente com dados de cabeçalho e uma parte ou a totalidade dos bytes transportados. Portanto, PCAP não significa necessariamente “todo o tráfego”, nem garante que cada pacote capturado contenha a mensagem completa de uma aplicação. Pode haver captura integral, limitada a uma quantidade de bytes por pacote, filtrada por endereços ou protocolos, ou feita em uma interface que vê apenas parte do caminho.

O termo também pode designar informalmente formatos de arquivo usados para guardar capturas, mas o nome do formato não descreve sozinho a qualidade nem a abrangência da evidência. Ferramentas diferentes podem produzir arquivos legíveis por analisadores comuns, em formatos correlatos ou variantes. Ao compartilhar ou preservar um registro, convém identificar a ferramenta e o formato quando conhecidos, sem presumir que arquivos com a mesma extensão tenham origem, escopo e confiabilidade idênticos.

## O que pode ser observado

Em uma representação usual, cada pacote vem acompanhado de um registro temporal e de informações de enquadramento. Os campos efetivamente disponíveis variam: podem incluir interface, tamanho observado, comprimento indicado, tipo de enlace, endereços de origem e destino, protocolo, portas e outros elementos de cabeçalho. Se o conteúdo foi preservado, os bytes seguintes podem conter dados de transporte ou de aplicação. Em algumas circunstâncias, porém, o arquivo guarda apenas metadados ou um trecho inicial, e o restante não pode ser reconstruído a partir dele.

A sequência de pacotes permite estudar relações que não aparecem em um registro isolado: estabelecimento de fluxos, direção provável da comunicação, intervalos, retransmissões, respostas, encerramentos e padrões de troca. Um analista costuma agrupar pacotes em conversas ou fluxos para facilitar a leitura. Esse agrupamento é uma interpretação derivada de campos como endereços, portas, protocolo e tempo; não é uma propriedade mágica do arquivo. NAT, proxies, balanceadores, túneis, redes sobrepostas e reutilização de portas podem complicar a associação entre um fluxo e um processo, usuário ou dispositivo.

O tempo merece atenção especial. A captura pode conter carimbos de data e hora, mas sua precisão e referência dependem do relógio do sistema coletor, da ferramenta e do mecanismo de registro. A ordem armazenada ainda pode refletir a ordem em que o coletor recebeu os pacotes, não necessariamente a ordem em que cada segmento foi transmitido originalmente. Em redes com múltiplos pontos de captura, comparar tempos sem verificar sincronização pode levar a conclusões erradas sobre causa e sequência.

## Como a captura é feita

Uma captura começa com uma pergunta prática: em que ponto e durante qual intervalo observar? O ponto pode ser um equipamento final, um servidor, uma interface de roteador ou uma porta de espelhamento configurada pela equipe de rede. Cada posição oferece uma perspectiva diferente. No host, a equipe pode enxergar tráfego antes ou depois de certos tratamentos locais; em um ponto de rede, pode observar apenas o que atravessa aquele enlace. Uma captura no segmento errado pode não ver a comunicação investigada, mesmo que a rede esteja funcionando normalmente.

O período define os limites da observação. Uma coleta iniciada após a atividade relevante não contém o passado; uma encerrada cedo pode perder a resposta ou o fechamento da sessão. Capturas contínuas ou rotativas ajudam em operações de monitoramento, mas requerem política de retenção e entendimento de quando dados antigos são sobrescritos. Em incidentes, registrar o horário de início e fim, o fuso horário, o relógio usado e qualquer interrupção ajuda a distinguir ausência de evidência de evidência de ausência.

A equipe também escolhe entre coletar todo o tráfego visível ou aplicar filtros. Filtros reduzem volume e exposição de dados, mas podem excluir justamente uma conexão cuja importância ainda não era conhecida. A filtragem pode ocorrer durante a aquisição ou depois, durante a análise. A segunda opção conserva maior possibilidade de reexaminar o material bruto; a primeira economiza espaço e processamento, mas estreita o conjunto original. A escolha deve considerar a finalidade, a capacidade de armazenamento, a sensibilidade das comunicações e as regras de coleta da organização.

A captura não é necessariamente passiva no sentido de não afetar o sistema. A instrumentação consome processamento, memória, armazenamento e largura de banda de gerenciamento; em dispositivos sobrecarregados, esse custo pode ser relevante. Um coletor pode perder pacotes se não conseguir acompanhar a taxa de chegada, se buffers se esgotarem ou se a interface e a configuração descartarem tráfego. Alguns mecanismos informam contadores de perda; outros deixam lacunas que só podem ser percebidas indiretamente. A taxa de pacotes observada no arquivo, por si só, não demonstra que a coleta foi completa.

## Valor forense e uso defensivo

PCAP é útil quando a investigação precisa examinar a comunicação em nível mais detalhado do que um alerta ou um resumo de fluxo oferece. Pode ajudar a confirmar se dois sistemas trocaram tráfego, identificar a direção e a duração aproximadas de uma conversa, reconhecer o uso de determinado protocolo, comparar uma solicitação com a resposta e situar eventos de rede em uma linha do tempo. Também pode apoiar a validação de uma regra de detecção, a investigação de falhas e a reconstrução parcial de uma interação observada por sensores.

Em resposta a incidentes, uma captura pode esclarecer se um alerta correspondeu a tráfego efetivamente visto no ponto monitorado; se houve tentativa de conexão, resposta do destino ou troca continuada; e que outros sistemas apareceram em comunicações relacionadas. Ela pode fornecer indícios para delimitar escopo e orientar buscas em logs de DNS, proxy, firewall, autenticação, endpoint ou aplicação. Esses registros complementam a captura porque frequentemente identificam entidades e decisões que os pacotes não revelam. Um endereço IP visível não informa automaticamente qual pessoa usou o dispositivo, e uma conexão não prova que uma ação de aplicação foi concluída com sucesso.

O PCAP pode ser especialmente valioso quando o evento já passou e os registros de alto nível são insuficientes, desde que a captura tenha sido retida. Em investigações em andamento, uma coleta prospectiva bem delimitada pode preservar evidência volátil. A decisão deve equilibrar valor investigativo, impacto operacional, privacidade e requisitos internos de autorização. Capturar indiscriminadamente pode registrar conteúdo pessoal ou dados de terceiros que não são necessários ao caso; restringir demais pode impedir uma conclusão que só se tornaria relevante após análise posterior.

## Criptografia e limites do conteúdo

Quando o tráfego está protegido por criptografia, o PCAP ainda pode revelar elementos externos: pares de comunicação, horários, volumes aproximados, frequência, duração e certos aspectos do protocolo de transporte ou do início da sessão. Esses metadados podem ser valiosos, mas não devem ser confundidos com o conteúdo semântico da conversa. Em geral, os bytes cifrados não permitem ler a mensagem como texto simples. O que está disponível depende do protocolo, da negociação, da versão e das condições da captura.

Há situações em que material adicional, obtido legitimamente e associado à sessão, permite decifrar uma comunicação durante a análise. Isso não é garantido pela simples posse do PCAP. A disponibilidade e a validade desse material dependem da configuração criptográfica, do momento da coleta e dos registros existentes. Uma captura posterior ao início da sessão pode não conter elementos necessários para certas análises; uma captura em um ponto após a terminação de TLS em um proxy pode refletir uma visão diferente da observada no enlace cifrado. O analista precisa documentar a perspectiva e evitar sugerir que o arquivo “contém a senha” ou todo o texto original quando isso não é sustentado.

Mesmo sem criptografia, o conteúdo pode estar incompleto. Limites de captura por pacote, filtros, fragmentação, perda, retransmissões ou encerramento prematuro podem impedir a reconstrução de uma mensagem. Protocolos de aplicação também podem compactar ou codificar dados, de modo que bytes visíveis não sejam imediatamente legíveis. Se uma ferramenta apresenta uma interpretação amigável, essa visualização é uma decodificação baseada em regras e contexto; deve ser conferida contra os bytes e o estado efetivamente preservados.

## Distinções com termos próximos

PCAP não é sinônimo de log de fluxo. Um registro de fluxo normalmente resume uma conversa por atributos agregados, como origem, destino, protocolo, duração e contadores de bytes ou pacotes, conforme a fonte. Ele pode ocupar menos espaço e ser adequado para busca ampla, mas não preserva a sequência detalhada de cada pacote nem, em regra, o conteúdo. O PCAP pode permitir observar detalhes mais granulares, à custa de volume, complexidade e maior exposição de dados.

Também não é igual a uma captura de tela, um log de aplicação ou uma transcrição. Logs podem registrar eventos interpretados pelo software, incluindo usuário autenticado, resultado de uma operação ou erro interno; o PCAP registra o que foi observado na comunicação, com as limitações do ponto e da coleta. Uma captura não substitui logs: ela pode mostrar que um cliente enviou bytes ao servidor, mas não necessariamente o que o servidor decidiu fazer depois de recebê-los.

“Captura de pacotes” pode descrever o ato, enquanto “arquivo PCAP” descreve o artefato. “Inspeção profunda de pacotes” costuma referir-se à análise de conteúdo e protocolo por equipamentos ou ferramentas; pode usar dados de uma captura, mas não é o mesmo que a captura. Já a análise de pacotes é o trabalho de interpretar o material. Manter essas distinções ajuda a escrever relatórios claros sobre o que foi coletado, o que foi inferido e que ferramenta produziu cada resultado.

## Perguntas frequentes

### Um PCAP sempre contém o conteúdo completo?

Não. Pode conter cabeçalhos e conteúdo integral, conteúdo truncado, apenas parte do intervalo ou somente tráfego que passou pelo ponto de observação. A configuração de coleta e a perda de pacotes determinam o que está disponível.

### É possível identificar o usuário que iniciou uma conexão?

O PCAP, isoladamente, em geral não estabelece a identidade humana. Ele registra elementos da comunicação observada. A associação pode exigir logs de autenticação, DHCP, VPN, endpoint, proxy ou outros dados, considerando endereços compartilhados e intermediários.

### A captura permite ler tráfego HTTPS?

Normalmente permite analisar metadados e características da sessão, mas não ler diretamente o conteúdo cifrado. Acesso ao conteúdo depende de condições adicionais específicas e autorizadas; a captura, sozinha, não garante decifração.

### Um arquivo grande é necessariamente melhor?

Não. Mais dados podem aumentar a possibilidade de análise, mas também trazem custo de armazenamento, processamento e proteção de informação. O valor depende de cobertura, integridade, pertinência e documentação, não apenas do tamanho.

### Como interpretar que não há tráfego no intervalo?

Primeiro, verifique se a interface e o ponto estavam corretos, se o período abrange o evento, se havia filtros, se o sensor registrou perdas e se o arquivo é original ou exportado. Só então considere a ausência como evidência, com limites explicitados.

## Relação com o capítulo 8

No capítulo 8 da versão original, PCAP pode ser entendido como uma fonte de evidência de rede cujo valor depende de contexto e qualidade de aquisição. Ao relacioná-lo a outros artefatos forenses, a investigação ganha uma leitura mais sólida da comunicação e mantém separadas as observações, as inferências e as lacunas.
