//$("#main").append("Simon Fortescue");

//[string].replace([old],[new])

//var email = "simonfortescue@udacity.com";

//var newEmail = email.replace("udacity","gmail");

//console.log(email);
//console.log(newEmail);




// var awesomeThoughts = "My name is Simon and I am AWESOME!";

//var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");

//$("#main").append(funThoughts);





//adding my name:
//var name = "Simon Fortescue";
//var role = "Entrepreneur";

//var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);

//below is important to prepend the first element in the line, second :)
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);





var skills = 
["running", "jumping", "baa ing", "JS"];

var bio = {
	"name" : "Simon",
	"role" : "Entrepreneur",
	"contact" : "simonfortescue@gmail.com",
	"picture_URL" : "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg",
	"welcome_message" : "G'day - baa baa. And hello from me.",
	"skills" : skills
};

$("#main").append(bio.name,"<br>",bio.role,"<br>",bio.contact,"<br>",bio.picture_URL,"<br>",bio.welcome_message,"<br>",bio.
skills);
