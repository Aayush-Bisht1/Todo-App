const todoInput = document.getElementById('todoinput');
const todobtn = document.getElementById('btn');
const todoList = document.getElementById('todolist');
// const list = document.querySelector('.check');

todobtn.addEventListener('click',addtodo);

todoInput.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        addtodo();
    }
});

function addtodo(){
    let input = todoInput.value.trim();

    if(input !== ''){
        const list = document.createElement('li');
        list.innerHTML = `<span id="dot"></span>${input}<i id="remo">X</i>`;

        todoList.appendChild(list);

        list.querySelector('#remo').addEventListener('click',function(){
            list.remove();
        });
        list.querySelector('#dot').addEventListener('click',function(){
            input.style.textDecoration = 'line-through';
        })

        todoInput.value = '';

    }

}