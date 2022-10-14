let color = document.getElementById('color')
let place = document.getElementById('place')
let ritual = document.getElementById('ritual')

function colorClick(evt) {
    evt.preventDefault();

    alert('My favorite color is blue')
}
function placeClick(evt) {
    evt.preventDefault();

    alert('My favorite place is Japan!')
}
function ritualClick(evt) {
    evt.preventDefault();

    alert('My favorite ritual is playing the guitar after a long day of programming')
}

color.addEventListener('click', colorClick)
place.addEventListener('click', placeClick)
ritual.addEventListener('click', ritualClick)