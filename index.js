alert("Hello");
var authenticated = getCookie("authenticated")
if(authenticated){
	alert("welcome home")
}else{
	alert("Please sign up")
}

// access an individual named value in the cookie
function getCookie(CN) {

  var name = CN + "=";//string to search for in cookie string
  //"zintis="

  // decode any encoded characters, example: %20 = " "
  var decodeCookie = decodeURIComponent(document.cookie);

  // split into an array of strings that are divided by ";"
  var cookieValueArray = decodeCookie.split(';');

  //loop through that array
  for(var i = 0; i < cookieValueArray.length; i++) {

  	//
    var cookieString = cookieValueArray[i];
    //check for space at start of string, remove space
    while (cookieString.charAt(0) == ' ') {
      cookieString = cookieString.substring(1);
    }
    //if string contains
    if (cookieString.indexOf(name) == 0) {//find if "zintis=" is inside the string in question

      return cookieString.substring(name.length, cookieString.length);
    }
  }
  return "";
}
