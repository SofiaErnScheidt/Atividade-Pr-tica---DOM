document.getElementById("bt_tarefa").addEventListener('click', addTarefa)

//não permitir duas tarefas iguais

// limpar o input quando add uma tarefa

// procura as atrefas no local storage ou inicializa vazio
let listaTarefas = JSON.parse(localStorage.getItem('tarefas'))  || []

//fazer um laço for para cada tarefa, chamar a fuction addTarefa
listaTarefas.forEach(element => {
    criarElemento(element)
});

function addTarefa(){
    //pegar o valor de dentro do input e armazenar em uma variavel
    const inputTarefa = document.getElementById('input_tarefa').value
    console.log(inputTarefa)

    //verificar o valor do input e dar umalert se estiver vazio
    if(!inputTarefa){
    }
    
    //adiciona tarefa no array de tarefas
    listaTarefas.push(inputTarefa)

    //transforma o array em string e coloca a lista de tarefas no local storage
    localStorage.setItem('tarefas' , JSON.stringify(listaTarefas))
    criarElemento(inputTarefa)
}

function criarElemento(inputTarefa){
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

        //remove o elemento tarefa da tela
        elemento_tarefa.remove()

        //filtra a tarefa a ser removida
        listaTarefas = listaTarefas.filter ((tarefa) => tarefa !== inputTarefa)

        //salva novamente a lista de tarefas no local-storage
        localStorage.setItem('tarefas' , JSON.stringify(listaTarefas))
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