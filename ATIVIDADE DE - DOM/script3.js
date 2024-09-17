document.getElementById("bt_tarefa").addEventListener('click', addTarefa)

//inicializar uma lista vazia

//verificar se existe uma lista no local Storage

//fazer um laço for para cada tarefa, chamar a fuction addTarefa

//quando add uma tarefa, add no local Storage também

//quando remover uma tarefa, remover do local Storage também

function addTarefa(){
    //pegar o valor de dentro do input e armazenar em uma variavel
    const inputTarefa = document.getElementById('input_tarefa').value
    console.log(inputTarefa)

    //verificar o valor do input e dar umalert se estiver vazio
    if(!inputTarefa){
        alert('o input esta vazio')
        return
    }

    //criar o elemento <li>
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = 'item_tarefa'

    //adicionar o texto no input no novo <li>
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa

    //adicionar um botão para deletar tarefa no novo <li>
    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = 'Deletar Tarefa'
    botaoDeletar.addEventListener('click' , () => {
    elemento_tarefa.remove()
    })
    //adicionar um botão para completar a tarefa no novo <li>
    const botaoCompletar = document.createElement('button')
    botaoCompletar.textContent = 'Completar Tarefa'
    botaoCompletar.addEventListener('click' , () => {
        conteudoTarefa.classList.toggle('completada')
    })

    //adicionar um novo elemto <li> a tag <ul>
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoCompletar)
    document.getElementById('lista_tarefas').appendChild(elemento_tarefa)
}
