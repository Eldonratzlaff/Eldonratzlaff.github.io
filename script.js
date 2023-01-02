const hamburger = document.querySelector('.menu1');
hamburger.addEventListener('click',display );
function display() {
    //alert('It was clicked!');

 let div =document.createElement('div');
 div.className = 'top-name';
        div.innerHTML = '<p>CreateElement example</p> <h2> hola mundo<h2>';
        document.body.appendChild(div);

}

