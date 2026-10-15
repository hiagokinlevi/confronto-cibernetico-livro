# Bootkit

## Conceito

Bootkit é um código malicioso dirigido às etapas iniciais pelas quais um computador prepara e inicia o sistema operacional. Seu objetivo técnico é obter execução muito cedo no ciclo de inicialização e, com isso, criar condições para persistir, influenciar o carregamento de componentes posteriores ou dificultar a observação por ferramentas que passam a funcionar somente depois que o sistema já está ativo. O termo descreve a posição e a finalidade do código na cadeia de inicialização; não identifica, por si só, uma família, um formato de arquivo, uma plataforma específica nem um método único de instalação.

A característica central é o momento de execução, não uma aparência necessariamente invisível. Um componente malicioso que roda cedo pode ter oportunidade de observar ou alterar aquilo que componentes posteriores recebem, e pode operar antes de muitos controles de segurança e agentes de monitoramento. Isso não significa que seja automaticamente indetectável, que controle todo o equipamento ou que sobreviva a qualquer reinstalação. A persistência e a capacidade de ocultação variam conforme a camada atingida, os controles presentes e a forma como a máquina é recuperada.

## Contexto de inicialização

Para interpretar uma suspeita, é útil pensar na inicialização como uma sequência de verificações e transferências de controle. O firmware inicia a plataforma e localiza um caminho de boot; outros componentes verificam ou carregam os elementos seguintes; por fim, o núcleo do sistema operacional assume o controle e inicia serviços e agentes. Em sistemas atuais, essa sequência pode incluir mecanismos de inicialização verificada, armazenamento de configuração no firmware e partições dedicadas. Em equipamentos mais antigos ou configurados de outra forma, a cadeia pode ser diferente. “Boot” não designa um único arquivo ou local físico.

Em termos defensivos, importa saber em que ponto a confiança deveria ser estabelecida. Se um componente anterior estiver comprometido, a leitura de arquivos feita dentro do sistema em execução pode não representar fielmente o que ocorre durante a inicialização. Por outro lado, encontrar uma diferença em um registro ou partição não prova a presença de um bootkit: atualizações, ferramentas de recuperação, alterações administrativas e diferenças legítimas entre versões também podem modificar artefatos relacionados ao boot.

Controles de inicialização confiável procuram limitar quais componentes podem executar e identificar mudanças incompatíveis com a política definida. Eles reduzem oportunidades e fornecem sinais úteis, mas seu estado precisa ser interpretado no contexto: configuração desativada, chaves substituídas, atualização incompleta ou incompatibilidade de hardware podem produzir alertas ou lacunas sem que exista código malicioso. Também não se deve presumir que uma indicação de inicialização segura equivale a uma auditoria completa de todo firmware e de cada elemento persistente.

## Onde aparece na investigação

A hipótese pode surgir após um alerta de ferramenta de segurança, uma divergência em medições de inicialização, um componente de boot inesperado, uma alteração não autorizada em configuração ou uma persistência que reaparece após uma limpeza convencional do sistema. Também pode aparecer em resposta a incidentes nos quais o equipamento apresenta comportamento anômalo antes da inicialização completa ou em que telemetria posterior parece insuficiente para explicar a execução observada.

O alerta inicial é uma pista, não um diagnóstico. Produtos diferentes usam “bootkit” para categorias de detecção com níveis distintos de certeza. Alguns sinalizam uma estrutura conhecida; outros apontam uma anomalia em área de boot ou uma configuração fora da política. O analista deve registrar o nome e a versão do mecanismo que gerou o alerta, o objeto ou componente associado, o horário, a fonte dos dados e o significado documentado da classificação. Sem isso, um rótulo pode ser repetido como fato sem que se saiba o que foi efetivamente encontrado.

## Evidências e interpretação

Nenhum sinal isolado é universal. A avaliação pode considerar, conforme a plataforma e o caso:

- divergências entre o estado medido na inicialização e os valores esperados para aquela configuração;
- componentes, entradas ou arquivos de boot sem origem ou justificativa compatível com o inventário;
- alterações de firmware, configuração ou partição próximas ao início do incidente;
- falhas ou mudanças nos mecanismos de verificação, acompanhadas de evidência de que não foram autorizadas;
- reaparecimento de um artefato depois de uma reinstalação que não tratou a camada onde ele estaria;
- inconsistências entre evidência coletada pelo sistema em execução e uma verificação independente apropriada.

Cada item exige cautela. Um componente desconhecido pode ser legítimo em uma configuração personalizada; um alerta de integridade pode decorrer de atualização; e a ausência de alerta não exclui comprometimento, especialmente quando a cobertura é incompleta ou a referência não é confiável.

A qualidade da evidência também depende da cadeia de custódia. Anote quem coletou, quando, de qual equipamento, usando qual ferramenta e em quais condições. Preserve cópias e metadados relevantes, documente as transformações realizadas e evite sobrescrever o estado original com tentativas repetidas de reparo. A investigação pode precisar de especialistas em firmware ou resposta a incidentes de plataforma; uma análise superficial de um arquivo extraído nem sempre consegue estabelecer o que realmente foi executado.

O cenário hipotético a seguir ilustra um raciocínio, não um incidente real: uma estação volta a apresentar um alerta de persistência depois que o sistema operacional foi reinstalado. A equipe verifica que a reinstalação preservou uma partição de inicialização e que o alerta está associado a um componente nessa partição. Isso aumenta a plausibilidade de que a camada preservada explique o reaparecimento, mas ainda não confirma um bootkit. A equipe compara o componente com uma referência compatível, verifica seu histórico e busca sinais independentes de alteração maliciosa antes de concluir.

## Diferenças em relação a termos próximos

**Bootkit e rootkit.** Rootkit é um termo amplo para mecanismos que ocultam atividade ou mantêm controle privilegiado dentro de um sistema. Um bootkit pode ter objetivos semelhantes, mas é caracterizado por atuar no processo inicial de carregamento. Os termos podem se sobrepor: um implante inicial pode carregar ou facilitar componentes com características de rootkit. Nem todo rootkit é bootkit e nem toda detecção de bootkit demonstra ocultação em tempo de execução.

**Bootkit e bootloader malicioso.** Bootloader é um componente legítimo da cadeia que seleciona ou carrega o sistema. Um bootloader modificado pode ser parte de uma operação de bootkit, mas a modificação também pode ser legítima, experimental ou defeituosa. “Bootloader” nomeia uma função; “bootkit” classifica um uso malicioso ou uma capacidade atribuída com evidência suficiente.

**Bootkit e comprometimento de firmware.** Firmware é software de baixo nível mantido em componentes da plataforma. Um bootkit pode envolver firmware, mas também pode residir em elementos posteriores da cadeia. Inversamente, firmware alterado não prova por si só um bootkit: a mudança pode ter outra causa, e o artefato pode não interferir na inicialização ou não ser malicioso. É melhor nomear a camada observada do que trocar precisão por um rótulo mais dramático.

**Bootkit e alteração de registro de boot.** Uma área de inicialização modificada é uma observação técnica. “Bootkit” acrescenta uma interpretação de intenção ou função maliciosa. Atualizações, reparos, criptografia de disco, particionamento e escolhas de configuração podem explicar alterações legítimas. A interpretação deve acompanhar a evidência, não precedê-la.

## Resposta a incidentes e recuperação

Quando a suspeita é plausível, trate o equipamento como potencialmente comprometido e siga o processo de resposta da organização. Primeiro, preserve os dados e registros necessários para compreender o incidente, incluindo a origem do alerta e o estado relevante da plataforma. Avalie o impacto e a criticidade do equipamento, considere se há máquinas relacionadas e controle a exposição de acordo com o risco. Isolar um dispositivo pode ser apropriado para reduzir comunicação ou propagação, mas a decisão deve considerar a função operacional e os procedimentos locais.

Evite iniciar por uma sequência improvisada de “limpeza”. Formatar o disco ou reinstalar o sistema pode remover evidências e deixar intacta a camada suspeita, caso ela esteja fora do disco ou não seja abrangida pelo procedimento. Da mesma forma, restaurar firmware sem uma imagem confiável, sem confirmar o modelo ou sem preservar dados necessários pode piorar a situação. A equipe deve definir uma fonte confiável para recuperação e verificar que o método realmente cobre a camada em questão. Se a análise não puder demonstrar a integridade da plataforma com os recursos disponíveis, escale para suporte especializado ou para o fabricante, conforme o processo da organização.

A recuperação deve considerar toda a sequência de inicialização, os controles de confiança e a origem das imagens e ferramentas usadas. Depois de reconstruir ou validar o equipamento, atualize credenciais potencialmente expostas a partir de um dispositivo confiável, revogue sessões ou tokens quando indicado e procure atividade correlata. Essas medidas dependem do que a investigação encontrou; a palavra bootkit, sozinha, não determina que credenciais foram roubadas. Registre decisões, evidências, limitações e critérios usados para devolver o ativo à operação.

## Limitações e erros comuns

Um erro frequente é concluir que a reinstalação do sistema sempre remove um bootkit, ou o oposto, que toda persistência após reinstalação prova comprometimento de firmware. O resultado depende da localização suspeita, do que a reinstalação substitui e do que ela preserva. Outro erro é chamar qualquer componente desconhecido de malicioso sem confirmar procedência, compatibilidade e autorização. O terceiro é confiar integralmente em uma ferramenta executada dentro do próprio sistema investigado quando a hipótese envolve uma camada capaz de influenciar essa ferramenta.

Por fim, a gravidade não pode ser deduzida apenas da posição inicial. Uma presença em camada de boot merece atenção porque pode complicar a confiança no sistema, mas o impacto concreto depende da capacidade, do acesso obtido, da duração, dos dados e dos ativos afetados. Separar fato observado, hipótese e conclusão evita exagero e ajuda a orientar decisões proporcionais.

## Perguntas frequentes

### Um bootkit é sempre persistente?

Não necessariamente. O termo indica foco na inicialização; persistência é um objetivo comum, mas depende da implementação e das condições do equipamento. Um componente pode falhar, ser removido por atualização ou estar presente sem ser executado em determinada configuração.

### Uma varredura antivírus negativa descarta a hipótese?

Não. Ela informa que aquela ferramenta, com sua cobertura e no contexto em que foi executada, não detectou algo. A conclusão precisa considerar quais camadas foram inspecionadas, a confiabilidade da coleta e outras evidências. Resultado negativo não equivale a certificação de integridade.

### Reinstalar o sistema resolve?

Pode resolver quando a causa está em componentes substituídos e o procedimento é confiável. Não é suficiente se a camada suspeita for preservada ou estiver fora do alcance da reinstalação. Antes de recuperar, identifique o escopo do procedimento e preserve evidências necessárias.

### Como distinguir uma alteração legítima de uma maliciosa?

Compare o artefato com referências adequadas ao modelo e à versão, verifique autorização e histórico de mudanças e procure evidências independentes de comportamento ou origem maliciosa. A mera diferença em relação a outra máquina não basta.

## Relação com o capítulo

No capítulo 1 da versão original, o verbete ajuda a situar o bootkit entre as ameaças que se apoiam em etapas iniciais de execução. A leitura defensiva deve manter em primeiro plano a identificação da camada afetada, a qualidade das evidências e a integridade do processo de recuperação.
