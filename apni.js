function userShow (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reg => reg.json())
    .then(data => userName(data));
}


function userName (data){
    const ul = document.getElementById('users');

    for (const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;

        ul.appendChild(li);
    }
}