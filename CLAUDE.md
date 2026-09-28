# CLAUDE.md — Mini-Projeto-M2 (Cadastro de Participantes para Eventos)

## O que é o projeto
Aplicação web simples, em HTML/CSS/JavaScript puro (sem framework, sem build, sem backend), para cadastrar participantes de eventos. Permite cadastrar, listar, editar e remover participantes (CRUD em memória). Projeto do Módulo 2 da especialização em IA da Programadores do Amanhã.

## Estrutura de arquivos
- `index.html` — página única: formulário (`#formulario`) e lista (`#lista`).
- `script.js` — toda a lógica: classe `Participante`, array `participantes`, funções de CRUD e renderização.
- `style.css` — estilos globais (fundo `#f3f4f6`, botões roxos `#6200ea`, layout centralizado, largura máxima 600px).
- `.claude/skills/` — skills do projeto (ver abaixo).

## Como rodar e testar
- Não há build nem dependências: abra `index.html` no navegador (ou use a extensão Live Server do VS Code).
- Não há testes automatizados. Teste manualmente no navegador: cadastrar, editar, remover e tentar enviar campos vazios.
- Os dados ficam só em memória: recarregar a página apaga a lista (comportamento atual, não é bug a ser "corrigido" sem pedido).

## Convenções de código
- Idioma: nomes de funções, variáveis e textos da interface em **português**, `camelCase` (ex.: `adicionarOuEditarParticipante`, `editIndex`).
- Cada participante é uma instância da classe `Participante`; novos campos entram no `constructor`.
- A lista é sempre redesenhada por `atualizarLista()`; nunca manipule o DOM da lista fora dela.
- Use `textContent` (nunca `innerHTML`) para inserir dados digitados pelo usuário, para evitar XSS.
- Cada campo do formulário tem `id` próprio no `index.html` e é lido com `document.getElementById`.
- Mantenha o estilo existente: indentação de 4 espaços, aspas duplas no JS, ponto e vírgula no fim das linhas.
- CSS: reutilize as cores e o estilo de `input` e `button` já existentes; não crie arquivo CSS novo.

## O que NÃO fazer
- Não adicionar frameworks, bibliotecas, bundlers ou `package.json` sem o pedido explícito da dona do projeto.
- Não dividir o `script.js` em módulos nem reescrever o projeto em outra tecnologia.
- Não commitar direto na `main` mudanças grandes: prefira uma branch e descreva a mudança no commit.
- Não apagar nem sobrescrever dados de participantes de forma silenciosa; ações destrutivas devem ser pedidas pelo usuário.

## Skills do projeto
- `adicionar-campo-participante` (`.claude/skills/adicionar-campo-participante/`) — adiciona um novo campo (ex.: telefone, cidade, empresa) ao cadastro seguindo o padrão do projeto em `index.html`, `script.js` e `style.css`. Dispara quando o pedido for incluir/alterar campos do cadastro de participantes.

## Idioma e tom
Responda sempre em português do Brasil, de forma didática: a autora está aprendendo, então explique brevemente o "porquê" de cada alteração e mostre o que foi mudado em cada arquivo.
