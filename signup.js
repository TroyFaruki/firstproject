var firstName = document.querySelector("#firstName")
var lastName = document.querySelector("#lastName")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var submit = document.querySelector("#submit")

//getElementById() // only gets ID's, only 1 element
//getElementsByClassName() // only gets things with matching class name // array of elements
//getElementsByTagName() // only gets things with matching tag names // array of elements
//querySelector() // parse the argument, find elements which match... effectively... css selectors

// tags: input, h1, p, a, div
// class: .box, .red, .form
// id: #firstName

// var
// const
// let

function getAllInputs(){
	var firstNameValue = firstName.value
	var lastNameValue = lastName.value
	var emailValue = email.value
	var passwordValue = password.value

	console.log(firstNameValue)
	console.log(lastNameValue)
	console.log(emailValue)
	console.log(passwordValue)

	return {
		firstName:firstNameValue ,
		lastName:lastNameValue ,
		email:emailValue ,
		password:passwordValue
	}
}

function checkForAllInputs(obj){
	if( obj.firstName && obj.lastName && obj.email && obj.password ){
		return true
	}else{
		return false
	}
}

submit.addEventListener('click', function (event) {
	var userInputObj = {}
	userInputObj = getAllInputs()
	if(checkForAllInputs(userInputObj)){
		//assign cookie
		document.cookie = "authenticated=true"
		//I can assign another value, added to cookie string
		//acces entire cookie string, but not any individual value
    console.log("document.cookie",document.cookie)
		window.location = "/";
	}
  event.preventDefault()
})
