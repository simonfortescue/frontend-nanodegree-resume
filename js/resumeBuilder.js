//$("#main").append("Simon Fortescue");

//[string].replace([old],[new])

//var email = "simonfortescue@udacity.com";

//var newEmail = email.replace("udacity","gmail");

//console.log(email);
//console.log(newEmail);

// var awesomeThoughts = "My name is Simon and I am AWESOME!";

//var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");

//$("#main").append(funThoughts);
var name = "Simon Fortescue";
var role = "Entrepreneur";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

//below is important to prepend the first element in the line, second :)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

