# MTTR

## O que a sigla significa

MTTR é uma sigla usada em operações, confiabilidade e segurança para nomear uma medida de tempo relacionada à resposta ou à recuperação. A expansão pode aparecer como *Mean Time to Respond* — tempo médio de resposta — ou com outras expressões ligadas a reparo, restauração e recuperação. Por isso, a sigla, isoladamente, não determina qual evento inicia a medição, qual evento a encerra nem que tipo de média foi calculado. A definição operacional precisa ser explicitada pela equipe que produz e interpreta a métrica.

Em segurança cibernética, a ambiguidade tem consequência prática. “Responder” pode significar reconhecer um alerta, iniciar a triagem, decidir que há um incidente, conter a atividade, eliminar a causa, restaurar serviços ou encerrar formalmente o caso. São marcos diferentes, com durações e responsabilidades distintas. Um painel que exiba apenas “MTTR: 42 minutos”, sem indicar a convenção adotada, não informa com precisão o que a organização consegue fazer em 42 minutos.

## Como definir a medição

Uma especificação prática descreve quatro elementos: o evento inicial, o evento final, a regra de inclusão dos casos e o método de agregação. Deve ainda esclarecer unidade, fuso horário ou referência temporal, tratamento de pausas e reaberturas, e fonte dos horários. O objetivo não é burocratizar o painel; é permitir que outra pessoa reproduza o cálculo e entenda a afirmação que ele sustenta.

O início pode ser, por exemplo, a geração de um alerta, sua entrega à fila, a confirmação de recebimento por alguém de plantão ou a declaração formal de incidente. O fim pode ser a primeira ação de contenção, a confirmação de que a ameaça deixou de produzir efeitos, a recuperação de um serviço ou o encerramento administrativo. Se duas equipes escolhem pares diferentes de marcos, seus resultados não medem a mesma capacidade, ainda que ambos usem o rótulo MTTR.

Na forma mais simples, para um conjunto de casos comparáveis, calcula-se a duração entre o marco inicial e o final de cada caso e resume-se esse conjunto pela média aritmética. A fórmula conceitual é a soma das durações válidas dividida pelo número de casos válidos. A expressão “válidas” não pode ficar implícita: casos sem horário confiável, ainda em andamento ou excluídos por regra precisam ser identificáveis. Se forem retirados sem registro, o resultado pode parecer melhor sem que a operação tenha melhorado.

Uma ficha de métrica pode registrar: “MTTR de contenção, contado da confirmação do incidente à contenção validada, em tempo corrido; média aritmética dos casos encerrados no trimestre; reaberturas permanecem vinculadas ao caso original”. Essa redação é apenas um exemplo de convenção, não uma definição universal. Ela permite discutir o indicador com mais precisão do que o rótulo isolado e torna visível que a métrica se refere à contenção, não à restauração ou ao reconhecimento inicial.

## Para que serve em segurança

Quando bem delimitado, o MTTR ajuda a observar se a organização está reduzindo o intervalo entre dois marcos relevantes para a defesa. Pode apoiar a avaliação de processos de triagem, coordenação de resposta, contenção, recuperação de serviços e gestão de incidentes. A comparação ao longo do tempo pode mostrar mudanças após alterações de escala, fluxos de escalonamento, automação, treinamento ou integração entre equipes. A métrica, sozinha, não prova que uma mudança causou a diferença; serve como sinal para investigação.

Há valor em separar intervalos que a equipe consegue influenciar de tempos de espera externos. Uma resposta pode depender de um fornecedor, de uma janela de manutenção, de uma decisão de negócio ou da disponibilidade de uma pessoa autorizada. Registrar essas dependências permite identificar obstáculos e discutir acordos de serviço. Excluir toda espera externa do cálculo, porém, pode ocultar o tempo total em que o incidente permaneceu sem resolução. O recorte deve atender à pergunta e ser acompanhado por contexto suficiente.

## Onde aparece na investigação de incidentes

Em uma investigação, a linha do tempo reúne observações de diferentes sistemas e pessoas: eventos de segurança, registros de atendimento, comunicações de plantão, decisões, mudanças de configuração, ações de contenção e verificações posteriores. O MTTR pode ser calculado a partir de marcos dessa linha do tempo, desde que os eventos escolhidos tenham significado consistente. A investigação fornece a trilha que dá sustentação ao número; um campo chamado “resolvido em” pode não bastar para demonstrar quando o risco foi efetivamente controlado.

Para reconhecer quais eventos sustentam o cálculo, procure horários de criação e atualização dos alertas, mudanças de estado do caso, atribuições, comentários de analistas, registros de decisão, trilhas de auditoria e evidências de validação. A documentação de mudanças pode indicar quando uma medida foi aplicada; telemetria posterior pode ajudar a verificar se a atividade suspeita cessou; registros de disponibilidade podem mostrar a recuperação percebida pelo serviço. Nenhuma fonte isolada responde necessariamente a todas essas perguntas.

## Exemplo hipotético: um indicador de contenção

Considere, hipoteticamente, uma equipe que queira medir o intervalo de contenção de incidentes confirmados. Ela define o início como o horário em que o caso recebe a classificação de incidente e o fim como o momento em que uma verificação documentada confirma que a atividade relevante foi interrompida. A equipe coleta os dois horários para cada caso elegível, calcula a duração e, para o resumo escolhido, obtém a média aritmética do período. Esse número descreve aquela população de casos e aquela convenção; não descreve todo o desempenho de resposta.

## Comparações que fazem sentido

Compare resultados somente quando os casos usam os mesmos marcos e regras. Também é necessário verificar se a população é comparável: severidade, tipo de incidente, cobertura de monitoramento, horário, critérios de confirmação e maturidade da coleta podem mudar. Uma queda agregada pode resultar de mais casos simples no conjunto, e não de uma resposta melhor para os casos graves. Segmentar pode ajudar a revelar essa composição, desde que não gere grupos tão pequenos que exponham pessoas ou produzam conclusões instáveis.

## Termos próximos e distinções

“Tempo de resposta” pode se referir a qualquer intervalo entre um estímulo e uma reação, mas não esclarece por si só qual reação conta como resposta. MTTR é ainda menos específico sem a expansão adotada. Em alguns contextos, a letra R é entendida como *respond*; em outros, como *repair*, *restore* ou *recovery*. Portanto, não se deve presumir que MTTR significa sempre tempo para reparar ou sempre tempo para responder a um incidente. A equipe precisa escrever o termo por extenso na primeira ocorrência e anexar a definição local.

O tempo de detecção trata do intervalo até identificar ou reconhecer uma condição, segundo marcos próprios. O tempo de contenção observa a interrupção ou limitação dos efeitos. O tempo de recuperação considera a retomada de operação ou serviço conforme critérios definidos. Esses intervalos podem se sobrepor em processos reais, mas não são sinônimos. Um incidente pode ser detectado rapidamente e levar mais tempo para conter; pode ser contido antes de o serviço ser restaurado; ou o serviço pode voltar enquanto a investigação ainda prossegue.

Um acordo de nível de serviço geralmente expressa um compromisso de atendimento ou resolução dentro de condições especificadas. O MTTR é uma estatística observada, não um compromisso por natureza. Um prazo contratual e uma média histórica podem coexistir, mas respondem a perguntas diferentes. A taxa de cumprimento de um prazo também não é equivalente à média: uma boa média pode esconder uma parcela de casos fora do limite.

## Limitações e armadilhas de interpretação

A primeira armadilha é tratar o rótulo como definição. Sem marcos explícitos, um MTTR publicado não permite inferir se a equipe detecta depressa, decide depressa ou restaura depressa. A segunda é confundir correlação temporal com qualidade. Um valor menor não demonstra automaticamente menor dano, melhor análise ou maior segurança. Para julgar resultados, combine a duração com evidência de contenção, recorrência, impacto, integridade da restauração e cumprimento de critérios de validação.

Um MTTR baixo pode ocultar encerramento prematuro. Por isso, compare apenas casos medidos com os mesmos marcos e examine reaberturas, reincidência e evidências posteriores. O encerramento deve depender de critérios compatíveis com o objetivo medido, como confirmação da contenção ou validação da recuperação. Se o número cai ao mesmo tempo que aumentam reaberturas ou falhas de validação, a interpretação de melhora precisa ser reconsiderada.

## Implicações para a resposta a incidentes

Um MTTR definido com cuidado pode orientar melhorias concretas: revisar roteamento de alertas, clarificar autoridade para contenção, reduzir esperas evitáveis, preparar procedimentos de recuperação ou melhorar a qualidade dos horários registrados. A equipe deve começar pela pergunta operacional, escolher marcos que correspondam a ela e verificar se os dados realmente representam esses eventos. Se a pergunta for “quanto tempo até alguém reconhecer o alerta?”, medir até a restauração do serviço não é uma resposta útil.

## Perguntas frequentes

### MTTR sempre quer dizer “tempo médio para responder”?

Não. A sigla é usada com expansões diferentes, e o significado pode variar por área ou organização. A forma correta é declarar por extenso o que o R representa e definir os marcos do intervalo. Se o documento não faz isso, o leitor não deve inferir a convenção apenas pelas letras.

### Posso usar o horário de fechamento do chamado como fim?

Somente se o fechamento corresponder ao evento que se deseja medir e houver regra consistente para aplicá-lo. Em muitos fluxos, fechar um registro é uma operação administrativa. Para medir contenção ou recuperação, pode ser necessário um evento técnico e uma validação documentada, além do estado do chamado.

### Um resultado menor significa que a resposta melhorou?

É um indício possível, não uma conclusão suficiente. Verifique se a definição, o conjunto de casos, a cobertura de dados e o método de cálculo permaneceram estáveis. Examine ainda impacto, reaberturas, reincidência e qualidade da validação. Uma diferença pode decorrer de casos mais simples ou de encerramentos antecipados.

### Como tratar incidentes ainda abertos?

### Qual resumo devo publicar: média ou mediana?

Depende da pergunta. A média representa a duração total distribuída pelo número de casos e é sensível a valores extremos; a mediana descreve o ponto central ordenado e reduz essa sensibilidade. Em muitos contextos, publicar mais de um resumo, acompanhado da quantidade de casos e de informações sobre os mais demorados, oferece melhor contexto. A escolha precisa ser nomeada, não escondida sob a palavra “médio”.

## Relação com o capítulo da versão original

Na versão original, o MTTR se relaciona ao capítulo 9. Nesse contexto, a sigla deve ser lida como métrica cujo sentido depende de uma definição explícita da equipe. Ao aplicar o conceito, registre os marcos de início e fim e compare somente casos construídos sob a mesma regra. Essa disciplina permite discutir tempos de resposta e recuperação sem confundir rapidez aparente com resolução efetiva.
