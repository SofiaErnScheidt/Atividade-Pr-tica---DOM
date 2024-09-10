let listaDeTarefas = []
let lista, elementoLista, btExcluir
function adicionarTarefa(){
    listaDeTarefas.push(document.getElementById('id_tarefa').value)
    localStorage.tarefa = JSON.stringify(listaDeTarefas)

    alert ("Tarefa adicionada com sucesso!")

    lista = document.createElement('ol')
    for(let i=0; i<listaDeTarefas.length; i++){
        alert(listaDeTarefas[i])
        elementoLista = document.createElement('li')
        elementoLista.innerText = listaDeTarefas [i]
        lista.append(elementoLista)
        btExcluir = document.createElement('button')
        btExcluir.setAttribute('id', 'bt', + i)
        btExcluir.innerText = 'Excluir Tarefa' + (i+1)
        btExcluir.body.append(btExcluir)
        document.setAttribute('onclick' , 'excluirTarefa (' + i + ')')
    }
    document.body.append(lista)
}

function excluirTarefa(){
    const index = array.indexOf(numTarefa);
    listaDeTarefas.splice(index, 1)
}
