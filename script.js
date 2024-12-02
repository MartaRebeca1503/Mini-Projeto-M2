class Participante {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

let participantes = [];
let editIndex = null;

function atualizarLista() {
    const lista = document.getElementById("lista-participantes");
    lista.innerHTML = '';
    participantes.forEach((participante, index) => {
        const item = document.createElement("li");
        item.textContent = `${participante.nome} - ${participante.email}`;

        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarParticipante(index);

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerParticipante(index);

        item.appendChild(botaoEditar);
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function adicionarOuEditarParticipante() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
        if (editIndex !== null) {
            participantes[editIndex].nome = nome;
            participantes[editIndex].email = email;
            editIndex = null;
            document.getElementById("cadastrar").textContent = "Cadastrar";
        } else {
            participantes.push(new Participante(nome, email));
        }
        atualizarLista();
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function editarParticipante(index) {
    document.getElementById("nome").value = participantes[index].nome;
    document.getElementById("email").value = participantes[index].email;
    document.getElementById("cadastrar").textContent = "Salvar Alteração";
    editIndex = index;
}

function removerParticipante(index) {
    participantes.splice(index, 1);
    atualizarLista();
}

document.getElementById("cadastrar").addEventListener("click", adicionarOuEditarParticipante);
