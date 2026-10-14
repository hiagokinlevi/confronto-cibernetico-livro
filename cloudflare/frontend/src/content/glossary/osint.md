# OSINT

## Definição e alcance

OSINT, sigla de *Open Source Intelligence*, é a coleta e a análise de informações disponíveis publicamente para responder a perguntas de inteligência. O ponto central não é a ferramenta usada nem o volume de páginas consultadas: é a transformação disciplinada de material aberto em conclusões úteis, acompanhadas de contexto, evidências e limites. Uma lista de resultados de busca, por si só, ainda não é inteligência. É matéria-prima que precisa ser localizada, avaliada, relacionada e interpretada em função de uma pergunta explícita.

“Disponível publicamente” descreve a acessibilidade da informação, não sua confiabilidade, legalidade de reutilização ou ausência de risco. Uma página pode estar aberta e conter dados falsos, desatualizados, expostos por engano ou publicados sob condições que restringem sua reprodução. Dados acessíveis a qualquer visitante também podem envolver privacidade, direitos autorais, termos de uso e obrigações legais. Portanto, o trabalho exige tanto avaliação da fonte quanto decisão responsável sobre coleta, retenção, compartilhamento e uso.

## Pergunta, coleta e análise

Uma atividade bem conduzida começa por delimitar a pergunta: o que precisa ser esclarecido, para quem, com qual finalidade e até quando? “Investigar uma empresa” é amplo demais para orientar uma pesquisa eficiente. “Quais domínios públicos parecem associados ao fornecedor e quais mudanças recentes são relevantes para avaliar a exposição do incidente?” é mais verificável. A formulação restringe a busca ao necessário, ajuda a selecionar fontes e deixa claro que tipo de resposta seria suficiente.

A coleta identifica materiais pertinentes e registra como foram encontrados. Uma nota de trabalho pode guardar endereço da fonte, título ou descrição, responsável pela publicação quando identificável, data de publicação e de acesso, trecho ou observação relevante e motivo de inclusão. Em material mutável, uma cópia ou captura pode preservar o estado observado, desde que a política e a lei permitam. O registro deve diferenciar o que a fonte afirmava do que o analista inferiu; essa separação reduz a chance de uma hipótese ser repetida mais tarde como fato confirmado.

Na avaliação, consideram-se a proximidade da fonte com o evento, sua competência para falar do assunto, a possibilidade de interesse ou viés, a consistência interna e a confirmação independente. Uma página oficial costuma ser forte para demonstrar o que uma organização publicou, mas pode não provar que a afirmação publicada é verdadeira. Uma postagem de terceiro pode apontar uma pista, mas não comprova autoria, local ou momento apenas por exibir esses dados. A credibilidade não é propriedade fixa de um domínio: pode variar conforme a alegação específica.

A análise compara evidências, resolve aparentes contradições e explicita o grau de confiança. Duas páginas que repetem a mesma notícia podem depender de uma única fonte original; isso é circulação, não necessariamente confirmação independente. Datas, nomes, endereços e identificadores semelhantes podem indicar relação, mas também coincidência ou reutilização. A conclusão deve dizer quais evidências a sustentam, quais alternativas continuam plausíveis e quais lacunas impedem uma afirmação mais forte. Quando a evidência não basta, “não foi possível determinar” é um resultado válido.

## Uso em segurança e investigação

Em segurança cibernética, OSINT ajuda a construir contexto sobre uma organização, serviço, fornecedor, incidente ou alegação antes de tomar decisões. Uma equipe pode consultar fontes abertas para confirmar como um serviço é descrito publicamente, localizar comunicados sobre indisponibilidade, acompanhar mudanças anunciadas ou verificar se uma afirmação externa já foi documentada.

Durante a triagem de um incidente, informações públicas podem auxiliar a estabelecer uma cronologia externa: quando uma empresa anunciou uma mudança, quando um domínio passou a exibir certo conteúdo ou quando uma notícia relatou um evento. Essa cronologia deve ser mantida separada da cronologia interna derivada de logs e sistemas. Uma página pode ser atualizada sem preservar versões anteriores; a data exibida pode refletir edição, migração ou fuso horário. A fonte pública ajuda a contextualizar o caso, mas raramente demonstra por si só o que ocorreu dentro de uma rede.

Também é útil para verificar alegações recebidas por equipes de resposta, comunicação ou gestão de risco. Por exemplo, uma mensagem pode afirmar que dados de uma organização foram divulgados. A pesquisa aberta pode localizar a publicação alegada, comparar a descrição com comunicados oficiais e identificar sinais de recirculação de material antigo. Essa verificação deve evitar baixar, redistribuir ou examinar dados pessoais ou potencialmente ilícitos sem necessidade e autorização. O objetivo inicial pode ser confirmar a existência e a relevância da alegação por meios proporcionais, preservando o material para os responsáveis competentes.

Na preparação defensiva, fontes públicas podem revelar como uma entidade se apresenta a clientes, pesquisadores e possíveis adversários: quais produtos anuncia, quais canais de contato mantém e quais mudanças comunica. Uma organização pode usar esse panorama para corrigir informação pública incorreta, alinhar avisos de segurança e avaliar exposição com as equipes autorizadas. A análise deve permanecer no escopo aprovado. Identificar um ativo publicamente associado não autoriza testar sua segurança, tentar acesso ou interagir de modo que altere o serviço.

## Evidências e rastreabilidade

A proveniência deve distinguir publicação, observação e interpretação. “O comunicado foi publicado na terça-feira” é uma observação sobre a página, se a data estiver visível. “A organização tomou conhecimento do evento na terça-feira” é uma inferência diferente e pode não ser sustentada pelo comunicado. Um relatório claro usa linguagem proporcional: “a fonte declara”, “o registro indica”, “é compatível com” ou “não foi possível confirmar”. Essas expressões não são formalidades; mostram ao leitor o salto entre dado e conclusão.

A integridade do registro também importa. Capturas de tela podem cortar contexto, omitir o endereço ou não mostrar que uma página é uma reprodução. Arquivos baixados podem não conservar cabeçalhos, metadados ou a sequência de redirecionamentos. O analista deve anotar limitações relevantes e seguir procedimentos de preservação adequados ao caso. Se houver possibilidade de uso em processo disciplinar, regulatório ou judicial, a equipe deve consultar os responsáveis por evidências e cadeia de custódia; uma coleta informal não deve ser apresentada como se atendesse automaticamente a esses requisitos.

## Distinções importantes

OSINT não é sinônimo de busca na internet. Um mecanismo de busca ajuda a localizar material, mas não avalia por completo sua origem, atualidade, dependência de outras fontes ou significado. A busca é uma técnica possível dentro da coleta; a inteligência inclui a pergunta, a avaliação, a análise e a comunicação do resultado. Também não é sinônimo de monitoramento: monitorar implica observação recorrente ao longo do tempo, enquanto uma atividade de OSINT pode ser pontual. Um monitoramento pode usar fontes abertas, mas ainda requer regras de escopo e tratamento de dados.

A expressão “inteligência de ameaças” descreve uma finalidade ou domínio de análise voltado a ameaças, atores, capacidades, indicadores e contexto de risco. OSINT pode contribuir para esse trabalho quando as evidências vêm de fontes públicas, mas não é equivalente a ele. Da mesma forma, uma investigação de incidente pode incorporar OSINT sem que todo o caso seja uma investigação de fontes abertas. Logs internos, imagens forenses e entrevistas autorizadas são fontes distintas, mesmo quando combinadas na mesma avaliação.

Informação publicada por um órgão, empresa ou pessoa não deve ser confundida com informação oficial, completa ou verificada. “Público” e “verdadeiro” respondem a perguntas diferentes. “Aberto” tampouco significa que a coleta pode ser feita sem limites: podem existir regras de privacidade, proteção de dados, propriedade intelectual, contratos, políticas institucionais e restrições sobre dados de terceiros. A equipe deve aplicar as normas pertinentes e envolver orientação jurídica ou de privacidade quando a natureza da informação ou do uso exigir.

## Limitações e erros de interpretação

Atualidade é outro problema. Conteúdo pode permanecer acessível muito depois de se tornar incorreto, e uma data de publicação não garante que todos os detalhes tenham sido revisados. Em temas técnicos, nomes de produtos, domínios, endereços e relações entre entidades podem mudar rapidamente. Toda afirmação relevante deve ser confrontada com o momento da coleta e, quando necessário, com uma fonte mais recente ou com confirmação interna. Para decisões urgentes, um resultado antigo não deve ser tratado como retrato do estado atual.

A atribuição indevida é um erro frequente: semelhança entre nomes de usuário, logotipos, imagens ou vocabulário não prova que duas contas pertencem à mesma pessoa ou grupo. Uma imagem pode ter sido copiada, reaproveitada ou apresentada fora de contexto. Uma afirmação repetida em muitos sites pode remontar a um único relato não verificado. Antes de associar entidades, é preciso buscar elementos independentes e considerar explicações alternativas, como homônimos, erro de registro, conteúdo satírico ou falsificação.

O viés de confirmação pode conduzir a pesquisa: depois de formar uma hipótese, o analista tende a notar apenas o que a apoia. Para reduzi-lo, convém formular o que poderia refutar a hipótese, registrar evidências contrárias e buscar fontes com perspectivas distintas. A seleção de fontes também pode refletir idioma, região, acesso e visibilidade algorítmica. Por isso, conclusões devem delimitar o universo pesquisado e evitar generalizações sobre pessoas, comunidades ou organizações a partir de poucos exemplos.

## Exemplo hipotético

O comunicado sustenta que o fornecedor anunciou uma interrupção em determinado intervalo; não prova a causa, a extensão do impacto em cada cliente nem o momento em que a equipe interna do fornecedor detectou o problema. A equipe compara a janela com seus próprios registros, identifica divergências de fuso horário e solicita confirmação pelo canal autorizado. Seu relatório separa o fato publicado, a inferência sobre possível relação com o incidente e a informação ainda pendente. O exemplo é hipotético e ilustra análise de fontes abertas, não atribuição de responsabilidade.

## Aplicação em resposta a incidentes

Na resposta a incidentes, OSINT pode apoiar a orientação do trabalho em várias fases. ## Perguntas frequentes

### Uma informação encontrada em uma página pública pode ser usada como evidência?

Pode ser relevante, mas a resposta depende da pergunta, da confiabilidade da fonte, da forma de preservação e das regras aplicáveis ao uso. Registre origem e momento de acesso, preserve contexto e não trate uma página isolada como prova conclusiva. Se a consequência for jurídica, regulatória ou disciplinar, envolva os responsáveis apropriados para definir os requisitos de evidência.

### OSINT autoriza testar um serviço exposto na internet?

Não. A existência pública de um serviço ou de detalhes técnicos não concede autorização para sondar, explorar, autenticar-se ou alterar seu comportamento. Testes devem ter autorização, escopo e procedimento próprios. A pesquisa de fontes abertas pode apontar uma questão para a equipe responsável avaliar dentro de um processo aprovado.

### Como distinguir fato de hipótese no relatório?

Atribua cada afirmação à sua base: descreva o que a fonte mostra, depois apresente a interpretação e seu grau de confiança. Inclua evidências que contradizem a hipótese e indique que dado adicional poderia confirmá-la ou refutá-la. Evite converter proximidade temporal ou semelhança em causalidade sem sustentação independente.

## Relação com o capítulo

No capítulo 7 da versão original do manuscrito, OSINT se relaciona à disciplina de obter contexto a partir de material acessível publicamente. O verbete complementa essa abordagem ao enfatizar a pergunta de inteligência, a avaliação da proveniência e a distinção entre observação e inferência. Em operações defensivas, esse cuidado permite usar fontes abertas para orientar investigação e resposta sem atribuir a elas mais certeza ou autorização do que realmente oferecem.
