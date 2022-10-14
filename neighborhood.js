let rando = document.getElementById('rando')

function randoClick(event){
    event.preventDefault();

    alert('Taco Amigo is the best local restaurant and you do not need to go anywhere else... seriously eat at Taco Amigo. It is the best. Wayyyy better than the purple turtle.')
}

rando.addEventListener('click', randoClick)