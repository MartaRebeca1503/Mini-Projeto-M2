# Referência — adicionar-campo-participante

Material de apoio da skill. O `SKILL.md` traz só o essencial; este arquivo é lido apenas quando for preciso o detalhe.

## 1. Exemplo completo: adicionando "telefone"

### index.html
```html
<label>Telefone:</label>
<input type="tel" id="telefone" required>
```
Coloque logo depois do input de email e antes de `<button id="cadastrar">`.

### script.js
```js
class Participante {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
```
Em `atualizarLista()`:
```js
item.textContent = `${participante.nome} - ${participante.email} - ${participante.telefone}`;
```
Em `adicionarOuEditarParticipante()`:
```js
const telefone = document.getElementById("telefone").value;

if (nome && email && telefone) {
    if (editIndex !== null) {
        participantes[editIndex].nome = nome;
        participantes[editIndex].email = email;
        participantes[editIndex].telefone = telefone;
        // ...
    } else {
        participantes.push(new Participante(nome, email, telefone));
    }
    // ...
    document.getElementById("telefone").value = '';
}
```
Em `editarParticipante(index)`:
```js
document.getElementById("telefone").value = participantes[index].telefone;
```

## 2. Tipos de input e validações sugeridas

| Campo | `type` | Validação simples em JS |
|---|---|---|
| Telefone | `tel` | `/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/.test(valor)` |
| Idade | `number` | `Number(valor) > 0 && Number(valor) < 120` |
| Data de nascimento | `date` | `new Date(valor) < new Date()` |
| Cidade / Empresa | `text` | `valor.trim() !== ""` |

Se o campo for opcional, não o inclua na condição `if (nome && email && ...)` e mostre um texto padrão (ex.: "não informado") em `atualizarLista()`.

## 3. Checklist de consistência (rode antes de terminar)

- [ ] `id` novo existe no `index.html`.
- [ ] `id` novo é lido em `adicionarOuEditarParticipante()`.
- [ ] Campo está no `constructor` e na atribuição do ramo de edição.
- [ ] Campo aparece no texto de `atualizarLista()`.
- [ ] `editarParticipante()` preenche o input.
- [ ] O input é limpo após salvar.
- [ ] Nenhum `innerHTML` foi usado com dado do usuário.

## 4. Problemas conhecidos do projeto (não corrigir sem pedido; apenas sugerir)

1. Os inputs têm `required`, mas não estão dentro de uma tag `<form>`, então o atributo não faz nada; a validação real é o `if` no JS.
2. Os `<label>` não têm o atributo `for`, o que prejudica a acessibilidade (clicar no rótulo não foca o campo).
3. Se o usuário clicar em "Editar" e depois "Remover" em outro item, `editIndex` pode apontar para o item errado. Solução: zerar `editIndex` (e o texto do botão) em `removerParticipante`.
4. Não há validação de formato de email nem de email duplicado.
5. Os dados somem ao recarregar a página; uma evolução possível é usar `localStorage`.
6. Erros são mostrados com `alert()`; uma evolução é exibir uma mensagem na própria página.

## 5. Por que existe este arquivo separado

O `SKILL.md` é carregado sempre que a skill dispara; então ele guarda só o que é preciso para decidir e executar o fluxo. Exemplos de código, tabela de validações e lista de bugs são úteis apenas em parte dos pedidos, e por isso ficam aqui (progressive disclosure), sendo lidos só quando necessários.
