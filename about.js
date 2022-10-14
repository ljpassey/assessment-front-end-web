console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted');
}

function mouseoverPic(evt){
	evt.preventDefault()

	alert('I knew you liked cute kitten pics...')
}

let pic = document.getElementById('pic')
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', mouseoverPic)
