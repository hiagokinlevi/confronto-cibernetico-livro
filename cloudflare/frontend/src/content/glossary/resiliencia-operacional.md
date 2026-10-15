# Resiliência operacional

## Definição e alcance

Resiliência operacional é a capacidade de manter ou restaurar funções essenciais diante de uma interrupção cibernética. Ela descreve uma propriedade do conjunto formado por pessoas, processos, tecnologia, informação e relações com terceiros. Não é uma característica isolada de um servidor nem uma garantia de que nenhum incidente causará impacto. É a capacidade de continuar entregando o que importa, mesmo por meios alternativos ou com escopo reduzido, e recuperar uma operação confiável.

“Essenciais” é a palavra decisiva. Nem todo sistema, dado ou serviço tem a mesma importância para a missão. A interrupção de uma ferramenta de apoio pode ser tolerável em um contexto e impedir o serviço principal em outro. A avaliação depende do que a organização faz, de quem depende dela e das consequências da parada. Por isso, a análise começa pelas funções e resultados necessários, não por uma lista abstrata de ativos que devem permanecer ligados.

## Funções essenciais e dependências

A organização precisa identificar quais funções não podem parar, por quanto tempo podem tolerar degradação e quais condições mínimas tornam aceitável sua continuidade. Isso requer ligar serviços técnicos a resultados concretos. Uma plataforma pode hospedar diversos sistemas, mas a importância operacional de cada um varia. O inverso também ocorre: um componente aparentemente secundário pode sustentar muitos serviços e, se falhar, ampliar o impacto.

Mapear dependências ajuda a revelar esses pontos comuns. Uma função depende de aplicações, redes e dados, mas também de pessoas, credenciais, suporte de fornecedores e decisões de gestão. Autenticação, conectividade ou ferramentas de administração compartilhadas podem afetar várias funções simultaneamente. O mapa deve mostrar relações suficientes para priorizar análise e recuperação, sem se tornar um inventário impossível de manter. Mudanças de processo, arquitetura ou fornecedor exigem rever as relações documentadas.

A priorização perde valor se tudo for classificado como crítico. Critérios claros ajudam a comparar efeitos sobre segurança, atendimento, obrigações, operação interna, confiança nos registros e capacidade de retomar outras atividades. A decisão precisa envolver responsáveis que conheçam a missão e assumam suas consequências, apoiados por especialistas que expliquem as dependências. Também é necessário declarar pressupostos: a tolerância de hoje pode deixar de servir após mudanças de volume, contexto ou compromissos.

## Preparação, continuidade e recuperação

A capacidade se desenvolve ao longo de atividades conectadas: compreender funções e dependências, preparar opções, reconhecer mudanças, decidir com informação incompleta, sustentar prioridades, recuperar o ambiente confiável e incorporar aprendizados. O percurso não é sempre linear. A investigação pode revelar que os pressupostos de recuperação estavam errados; a restauração pode encontrar sinais de comprometimento; uma decisão de continuidade pode exigir rever prioridades.

A preparação inclui inventários úteis, responsáveis conhecidos, conhecimento operacional preservado e opções para quando o caminho normal estiver indisponível. Cópias de segurança podem fazer parte dela, mas sua existência não prova que o serviço será recuperado. É preciso saber se os dados são utilizáveis, se o acesso à recuperação estará disponível, se há capacidade de reconstruir componentes e se a equipe conhece as decisões necessárias. Exercitar restaurações relevantes ajuda a expor lacunas que a documentação sozinha não revela.

A continuidade pode envolver reduzir funcionalidades, deslocar atividades, adiar tarefas ou usar um canal alternativo aprovado. Cada opção tem limites de capacidade, segurança e acesso. Uma planilha local, por exemplo, não é automaticamente uma solução adequada: pode gerar versões conflitantes, dificultar a proteção de dados ou tornar incerta a conciliação posterior. A alternativa deve ser avaliada antes do incidente, inclusive quanto a quem pode autorizá-la e por quanto tempo pode operar.

## Evidências e exercícios

Em uma investigação, a resiliência aparece nos registros técnicos, nas decisões e nos resultados observados. Inventários e mapas de dependência, planos de continuidade, critérios de prioridade, registros de restauração e evidências de validação de dados ajudam a reconstruir a capacidade. Procedimentos alternativos, listas de contato, escalas, registros manuais e documentos de conciliação também mostram como uma função foi mantida — ou por que isso não foi possível.

Uma linha do tempo conecta esses elementos: quando começou o impacto, quando foi detectado, que serviço foi reconhecido como afetado, quando houve contenção, ativação de alternativa, recuperação de dados e decisão de retorno? Esses marcos expõem atrasos e lacunas de informação, mas não medem sozinhos a qualidade da resposta. É útil registrar a incerteza associada a cada marco: um horário preciso pode coexistir com dúvidas sobre o alcance do incidente.

A falta de um plano escrito não prova que não havia capacidade; pessoas podem ter coordenado uma alternativa eficaz. O inverso também é verdadeiro: um plano bem escrito não demonstra que recursos funcionavam ou que responsáveis sabiam usá-los. A investigação compara previsão e execução, identifica adaptações e verifica seus efeitos. Registros produzidos durante o evento ajudam a distinguir as decisões da época das lembranças reconstruídas depois.

Exercícios são úteis quando testam dependências e decisões, não apenas a leitura de um roteiro. Um cenário hipotético pode combinar a indisponibilidade de um serviço e de uma dependência compartilhada, ou a perda de confiança em dados necessários à operação. A equipe deve identificar a função prioritária, declarar o que desconhece, escolher uma condição degradada aceitável e definir como validará a recuperação. As lacunas encontradas precisam gerar ações com responsáveis e prazos.

## Resposta a incidentes

Resposta a incidentes organiza atividades para detectar, analisar, conter e tratar um evento. Resiliência operacional mantém em foco a entrega das funções essenciais durante essas atividades e a retomada confiável depois delas. Em certos momentos, contenção e continuidade entram em tensão: desconectar um ambiente pode limitar a propagação, mas interromper um serviço; mantê-lo ativo pode preservar atendimento imediato e ampliar o risco. A escolha exige contexto sobre impacto e dependências, além de avaliação técnica.

Responsabilidades devem ser claras antes da crise. Especialistas explicam opções e riscos; responsáveis pelo serviço avaliam consequências operacionais; a liderança resolve prioridades concorrentes. A distribuição varia, mas decisões importantes não devem depender de uma única pessoa inacessível. Canais alternativos de coordenação são relevantes quando ferramentas corporativas, diretórios ou autenticação podem estar afetados. Registrar quem decidiu, com quais informações e condições, permite coordenar mudanças e analisar o resultado.

## Distinções e limitações

Continuidade operacional costuma enfatizar como manter processos ou serviços durante uma interrupção. Recuperação de desastres tende a enfatizar o restabelecimento de tecnologia, dados ou instalações. Resiliência operacional observa o conjunto: preparação, adaptação, continuidade possível, recuperação e aprendizado, a partir das funções necessárias. Os termos se sobrepõem e variam entre organizações; importa explicitar o que cada plano cobre e quem responde pelas lacunas entre eles.

Disponibilidade indica se um serviço está acessível em certa condição; robustez descreve a capacidade de resistir a perturbações sem perder o comportamento esperado. Ambas contribuem, mas não esgotam resiliência. Um serviço pode ter alta disponibilidade e depender de um único mecanismo de identidade cuja falha interrompe as atividades. Uma arquitetura pode suportar falhas previstas, mas não oferecer alternativa operacional quando o cenário excede seus pressupostos.

Um erro comum é equiparar resiliência a redundância. Componentes duplicados podem ajudar diante de falhas isoladas, mas não quando compartilham identidade, configuração, fornecedor ou administração afetada. Uma cópia replicada pode refletir alterações danosas; um ambiente alternativo pode repetir a mesma vulnerabilidade. Redundância é uma opção de projeto que precisa ser examinada junto com dependências e modos comuns de falha.

Outro erro é tratar cópias de segurança como prova de recuperação. Elas podem estar incompletas, desatualizadas, inacessíveis ou sem processo viável de restauração. Recuperar arquivos não demonstra que aplicação, integrações, dados e controles voltarão a formar um serviço útil. Testes proporcionais que verificam etapas relevantes oferecem evidência mais concreta e devem registrar o que não foi exercitado.

Reduzir a avaliação a um prazo também é enganoso. Um objetivo de tempo é útil para planejamento, mas não revela a experiência das áreas nem a qualidade do serviço restaurado. Dados antigos podem ser insuficientes; retornar antes de compreender a integridade pode trazer consequências duradouras. A pergunta operacional é qual resultado deve estar disponível, para quem, com que garantias e sob quais restrições.

Adaptar-se não é improvisar sem controle. Decisões improvisadas podem ser necessárias, mas devem ser registradas e reavaliadas. Operação manual pode expor dados, criar privilégios excessivos ou gerar divergências. É preciso explicitar riscos aceitos, definir pontos de revisão e planejar a conciliação ou o encerramento da alternativa. Às vezes, uma pausa deliberada preserva pessoas, dados ou a possibilidade de recuperação melhor do que continuar.

Planejamento não elimina limites. Uma interrupção ampla em fornecedor ou infraestrutura compartilhada pode afetar várias organizações; alternativas podem ser caras ou indisponíveis. Resiliência reduz fragilidade e amplia escolhas, mas não garante continuidade absoluta. Tornar limitações visíveis permite decidir prioridades e investimentos de forma consciente, em vez de pressupor uma capacidade que não foi demonstrada.

## Exemplos hipotéticos

Imagine um serviço de atendimento cujo sistema central fica indisponível após um incidente e cuja integridade ainda é desconhecida. A equipe prioriza solicitações urgentes, usa um canal alternativo aprovado e registra cada caso com identificador que permita conciliação. Isso mantém parte da função, não a capacidade total. A alternativa tem duração limitada, responsável pela validação dos registros e critérios de retorno que incluem verificar acesso e integridade. O exemplo mostra que continuidade envolve escopo, controles e condição de saída, além de tecnologia.

Em outro cenário hipotético, uma aplicação volta a responder após restauração, mas depende de um serviço de identidade ainda sob análise. A equipe não declara recuperação concluída pela disponibilidade da tela inicial. Verifica autenticação, privilégios e integrações essenciais e mantém capacidade reduzida por canal autorizado. A prontidão técnica de um componente não equivale à prontidão operacional da função.

## Perguntas frequentes

### Resiliência operacional significa que o serviço nunca para?

Não. Pode haver interrupção parcial ou completa. A questão é se a organização entende as consequências, dispõe de opções proporcionais e consegue recuperar uma condição confiável. Em certos casos, suspender deliberadamente uma função evita dano maior.

### Como saber se uma função é essencial?

Relacione a atividade ao resultado que produz e às consequências da indisponibilidade. Considere quem é afetado, quais compromissos dependem dela, por quanto tempo a parada é tolerável e que serviços habilitam sua retomada. Responsáveis operacionais validam a classificação com apoio técnico sobre dependências; ela pode mudar com o contexto.

### Basta cumprir um tempo de recuperação definido?

## Relação com o capítulo 10

Na versão original, o capítulo 10 é o ponto de referência deste verbete. A leitura do conceito deve manter no centro as funções essenciais e as condições concretas para mantê-las ou restaurá-las durante uma interrupção cibernética. Dependências, tempo de recuperação e operação degradada conectam a defesa técnica à continuidade da missão, sem presumir que um controle isolado ou o retorno rápido de um sistema, por si só, representem resiliência.
