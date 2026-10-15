# Erradicação

## Conceito e finalidade

Em resposta a incidentes, erradicação é a remoção das causas e dos mecanismos de permanência conhecidos depois que o comprometimento foi delimitado. A etapa procura retirar do ambiente aquilo que permite que a atividade maliciosa continue, retorne ou volte a produzir efeitos: artefatos, configurações alteradas, credenciais expostas, acessos indevidos e relações de confiança afetadas, conforme o que a investigação conseguiu estabelecer. Seu objetivo não é apenas apagar um objeto visível, mas reduzir de modo verificável a possibilidade de recorrência pelas mesmas condições identificadas.

A palavra “conhecidos” é essencial. Uma investigação trabalha com evidências disponíveis, escopo definido e hipóteses que podem mudar. Erradicar significa agir sobre as causas e os mecanismos sustentados por essas evidências; não significa provar que todo elemento desconhecido foi descoberto ou que o ambiente inteiro está livre de qualquer risco. A equipe precisa registrar quais componentes foram tratados, quais sinais embasaram as decisões e o que ainda permanece incerto.

A erradicação costuma vir depois da contenção e antes, ou em coordenação com, a recuperação. A sequência não é rígida: remoção pode ocorrer durante a contenção e a recuperação pode começar em partes verificadas. Conter limita atividade e alcance; erradicar remove mecanismos identificados; recuperar restabelece operações confiáveis. Uma ação pode atender a mais de uma finalidade, se seus efeitos forem claros.

## O que pode precisar ser removido

O escopo depende do incidente e pode incluir arquivos, tarefas agendadas, serviços, regras de inicialização, configurações ou ferramentas instaladas para manter acesso. Em outros casos, a persistência está principalmente em identidades e relações de acesso: senhas ou tokens expostos, sessões ativas, chaves, contas criadas ou modificadas, permissões excessivas, credenciais de serviço e integrações que continuam autorizadas.

Também podem ser relevantes sistemas de administração, dispositivos de usuários, servidores, ambientes em nuvem, aplicações, ferramentas de acesso remoto, repositórios, plataformas de identidade e cópias de segurança. A presença de um indício em um ativo não delimita automaticamente o incidente a esse ativo. É preciso avaliar vínculos: a conta usada ali tinha acesso a outros sistemas? Um segredo foi reutilizado? Uma estação podia administrar servidores? Uma integração compartilhava permissões? Uma imagem ou modelo de implantação reproduz a configuração comprometida? Essas perguntas ampliam a erradicação para as dependências que poderiam reintroduzir o problema.

Nem todo componente suspeito deve ser apagado imediatamente. Em certas situações, a equipe precisa preservar evidências, obter uma imagem ou coletar registros antes de alterar o sistema. A remoção prematura pode eliminar dados úteis para entender a origem, a duração e a extensão do incidente. Isso não significa manter indefinidamente um mecanismo perigoso: significa coordenar coleta, contenção e alteração, documentando a justificativa e a ordem das ações. Quando o risco operacional exigir intervenção imediata, registrar o que foi observado e o que não pôde ser preservado é parte do trabalho.

## Como a erradicação é conduzida

O ponto de partida é um escopo de comprometimento baseado em evidências. A equipe reúne eventos de identidade, registros de endpoint, telemetria de rede, alterações administrativas, inventário e relatos de usuários para identificar ativos, contas, períodos e relações potencialmente afetados. A delimitação é uma hipótese de trabalho, não uma fronteira garantida: novos achados podem ampliá-la. Um mapa simples de entidades e acessos ajuda a ligar um sinal isolado ao ambiente que ele pode alcançar.

Relacione cada achado a uma ação e a uma validação. Para execução automática, remova a configuração e verifique se não foi recriada. Para credencial exposta, revogue-a, substitua-a e revise o uso posterior. Se a integridade de um sistema não pode ser demonstrada, reconstruí-lo de fonte confiável pode ser mais seguro do que remover alterações uma a uma. A escolha depende do risco, criticidade, evidências e capacidade de validação.

Uma erradicação responsável considera também o mecanismo de reintrodução. Limpar uma máquina sem corrigir a imagem que a recria pode devolver a configuração indesejada. Trocar a senha de uma conta sem encerrar sessões ou revogar tokens ainda válidos pode deixar acessos ativos. Remover uma conta criada indevidamente sem revisar a delegação de privilégios pode deixar outro caminho de acesso. Corrigir o ponto observado é insuficiente se uma dependência mantém o mesmo efeito.

As ações precisam ser ordenadas de acordo com o risco e as dependências. Uma credencial administrativa comprometida pode permitir mudanças em vários ativos; a sua revogação pode ser prioritária, mas precisa ser coordenada para não interromper operações essenciais sem plano. Um servidor crítico pode depender de uma conta de serviço, de um certificado ou de uma integração. A equipe deve identificar responsáveis, janela de mudança, impacto esperado e modo de reversão quando a reversão for segura. Em um incidente ativo, a urgência pode limitar o planejamento, mas não elimina a necessidade de registrar decisões e comunicar efeitos relevantes.

## Evidências e critérios de conclusão

Nenhum indicador isolado demonstra erradicação completa. Uma amostra de malware não aparecer mais em uma varredura, por exemplo, é evidência de que aquela amostra não foi observada naquele exame; não prova que contas ou sistemas relacionados estejam limpos. A ausência de alertas pode decorrer de cobertura incompleta, retenção curta, sensor indisponível ou simples falta de atividade durante o período observado.

A avaliação ganha força quando combina fontes independentes e verificações orientadas pelos mecanismos encontrados. Entre os elementos úteis estão:

- inventário dos ativos, contas, serviços e integrações incluídos no escopo;
- registros de remoção, revogação, rotação de segredos, reconstrução ou correção de configuração;
- evidência de que sessões, tokens, chaves e acessos relevantes foram invalidados ou substituídos;
- comparação de configurações com uma referência confiável, quando ela existe;
- telemetria posterior que cubra os ativos e comportamentos relacionados ao incidente;
- ausência de recorrência dos sinais específicos, interpretada dentro dos limites de cobertura e tempo;
- validação por responsáveis técnicos e de negócio de que os controles e serviços voltaram a operar como esperado.

Defina critérios para o incidente: mecanismos removidos ou neutralizados, credenciais tratadas, ativos validados ou reconstruídos, vínculos revisados e ausência de recorrência na observação posterior. Registre período, fontes e lacunas. “Não detectamos novamente” não equivale a “demonstramos que foi eliminado”.

A conclusão pode ser graduada. Uma equipe pode considerar erradicado um mecanismo conhecido em certos ativos e, ao mesmo tempo, manter uma hipótese em investigação sobre outro segmento. Essa precisão evita tanto a declaração prematura de limpeza total quanto a paralisia diante de incertezas impossíveis de eliminar. A decisão de encerrar ou transferir a resposta deve indicar quem aceitou o risco residual e qual monitoramento ou ação ficou pendente.

## Diferenças em relação a termos próximos

**Contenção** limita atividade e alcance; isolar um equipamento pode conter sem remover a persistência. **Erradicação** trata causas e mecanismos conhecidos que sustentam o comprometimento ou permitem seu retorno.

**Remediação** pode significar o conjunto amplo de correções e medidas. Quando as etapas são distintas, erradicação é a remoção ou neutralização dos elementos identificados. O relatório deve explicitar o sentido adotado. **Recuperação** restabelece serviços confiáveis, com validações e acompanhamento; pode ocorrer em partes antes do encerramento da investigação. **Limpeza** é uma ação pontual, como excluir um arquivo, e não prova resultado amplo.

**Reconstrução** pode restabelecer uma base confiável, mas não prova erradicação: uma imagem pode receber credenciais comprometidas ou configurações inseguras. É preciso revisar dependências e validar o ambiente que a alimenta.

## Limitações e erros de interpretação

O erro mais comum é equiparar ausência de artefato à ausência de comprometimento: uma identidade, integração ou sistema adjacente pode conservar acesso. Indicadores encontrados tampouco descrevem necessariamente todo o incidente. Considere relações, comportamento e lacunas de cobertura, não apenas buscas por nomes ou hashes.

Também é arriscado confundir a execução de uma ação com seu resultado. Um chamado fechado como “senha alterada” não confirma que sessões foram encerradas, segredos derivados foram trocados ou a autenticação deixou de ocorrer por outra via. Um registro de exclusão não prova que o arquivo não foi restaurado por sincronização, backup ou ferramenta de gerenciamento. Sempre que possível, validar em uma fonte independente da ferramenta que realizou a alteração.

A erradicação pode causar perda de evidências, indisponibilidade ou remoção de componentes legítimos se a identificação for incorreta. Mudanças apressadas em contas de serviço podem interromper processos; apagar arquivos sem entender a função pode danificar sistemas. Por isso, ações devem ser proporcionais à confiança da evidência e ao risco de esperar. Em caso de incerteza, a equipe pode preferir bloquear ou isolar temporariamente, coletar mais dados e fazer uma mudança controlada, em vez de realizar uma exclusão irreversível sem contexto.

Por fim, não existe um intervalo universal de observação que prove que o incidente não voltará. A duração adequada depende do comportamento investigado, da frequência normal de uso, da retenção dos registros e da capacidade de monitorar os ativos relevantes. O relatório deve dizer qual período foi observado e por que ele é pertinente, sem transformar um intervalo arbitrário em garantia absoluta.

## Perguntas frequentes

### Apagar o malware encerra a erradicação?

Não por si só. A remoção trata o artefato específico. Ainda é preciso considerar mecanismos de inicialização, identidades, sessões, credenciais, acessos e ativos relacionados que a investigação colocou em escopo, e validar as medidas tomadas.

### É sempre necessário reconstruir o sistema?

Não. A decisão depende da confiança que se pode ter na integridade do ativo, do alcance das alterações, do risco de manter componentes desconhecidos e da capacidade de reconstrução segura. Quando não é possível validar o que foi alterado, reconstruir a partir de uma fonte confiável pode ser a opção mais clara. A reconstrução, porém, não resolve credenciais ou dependências comprometidas por si mesma.

### Quando é razoável considerar a etapa concluída?

Quando os mecanismos conhecidos no escopo foram removidos ou neutralizados, as ações foram verificadas com evidências adequadas e a observação definida não encontrou recorrência dos sinais relevantes. A conclusão precisa declarar a cobertura, as incertezas e o risco residual. Descobertas posteriores podem reabrir a etapa ou ampliar o escopo.

### A erradicação pode ocorrer antes da contenção terminar?

Pode haver sobreposição, especialmente quando uma mudança remove uma via de acesso e também limita atividade. O plano deve registrar a finalidade da medida e preservar coordenação suficiente para evitar que a ação destrua evidências, provoque interrupção desnecessária ou deixe outro mecanismo ativo. As etapas descrevem objetivos, não exigem sempre uma cronologia rígida.

## Relação com o capítulo

Na organização da versão original, o tema se relaciona ao capítulo 8. A erradicação liga as conclusões da investigação a ações verificáveis: define o que precisa deixar de sustentar o comprometimento, como validar a remoção e quais limites ainda devem ser comunicados antes da recuperação e do encerramento do incidente.
