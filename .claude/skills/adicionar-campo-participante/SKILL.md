---
name: adicionar-campo-participante
description: Adiciona ou altera um campo do cadastro de participantes (ex.: telefone, cidade, empresa, idade) mantendo index.html, script.js e style.css consistentes. Use quando o pedido for incluir, renomear ou remover um campo do formulário de Cadastro de Participantes para Eventos.
allowed-tools: Read, Grep, Glob, Edit
---

# Adicionar campo ao cadastro de participantes

Um campo novo precisa ser propagado por **cinco pontos** do projeto. Esquecer um deles é o erro mais comum (o campo aparece no formulário mas não é salvo, editado ou exibido).

## Passo a passo

1. Leia `index.html` e `script.js` para confirmar o estado atual (não confie em memória).
2. **index.html** — adicione `<label>` + `<input>` dentro de `#formulario`, com `id` em português e minúsculo (ex.: `id="telefone"`), antes do botão `#cadastrar`.
3. **script.js**, em ordem:
   - `constructor` da classe `Participante`: receba e guarde o novo campo.
   - `atualizarLista()`: inclua o campo no texto do `<li>` usando `textContent`.
   - `adicionarOuEditarParticipante()`: leia o valor do input, valide, passe ao `new Participante(...)`, atribua no ramo de edição e limpe o input no final.
   - `editarParticipante()`: preencha o input com o valor atual.
4. **style.css** — só mexa se o tipo de input não estiver coberto pelo seletor `input` existente.
5. Confira com `Grep` que o novo `id` aparece em `index.html` e em `script.js` (leitura, preenchimento na edição e limpeza).

## Regras que não podem ser quebradas

- Português e `camelCase`, indentação de 4 espaços, aspas duplas, ponto e vírgula.
- Nunca use `innerHTML` com dado digitado; use `textContent`.
- Não instale bibliotecas nem crie arquivos novos de código.
- Não corrija outros bugs no mesmo pedido; liste-os no final como sugestão.

## Ao terminar

Responda em português com: (1) o que mudou em cada arquivo, (2) como testar no navegador (cadastrar, editar, remover, campo vazio) e (3) sugestões de melhoria separadas.

## Detalhes

Para o gabarito completo de cada arquivo, os tipos de input mais comuns (telefone, número, data) com validações prontas, e os problemas já conhecidos do projeto, veja [reference.md](reference.md).
