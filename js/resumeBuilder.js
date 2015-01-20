//  note have refreshed index and this file, so need to go through and add any changes - especially change to black. have got to end lesson 0
// also have unblocked some sections of code below and the first line (append with SImon) still works so nothing broken

$("#main").append("Simon");

// tested and works (section at 3pm on 16 jan
var bio  = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "021-0000-000",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Fransisco"
	},
	"welcomeMessage": "efkn jrhbfwherbf whebfh",
	"skills": ["fun", "superhuman powers", "web design", "other"],
	"bioPic": "images/fry.jpg"
}

//below section tested and works 16 Jan at 321 pm
if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);
} 

// section uncommented on 16 Jan and works
var education = {
  "schools" : [
	{
		"name": "Broadwater",
		"cities": "Godalming",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 1993,
		"url": "http://example.com"
	},
	{
		"name": "Godalming College",
		"city": "Godalming",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2003,
		"url": "http://example.com"	
	}
   ],
   "onlineCourses": [
	{
		"title":"Javascript Crash Course",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www/udacity.com/course/ud804"
	}
   ]
		
} 

// Section unblocked on 16 jan and works
var work = {
	"jobs": [
	{
		"employer": "AAA Ltd",
		"title": "Fitter",
		"dates": "January 2000 - 2006",
		"description": "efffffffffffffffffffffffrfger"
	},
{	
		"employer": "BBB Ltd",
		"title": "Rep",
		"dates": "January 3000 - Future",
		"description": "2 efffffffffffffffffffffffrfger 2"
	}
  ]
}


// testing 16 jan at 4.05pm

function displayWork(){
	for (job in work.jobs){
		//create a new div for work experiencce
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
}

displayWork();

// Projects object and function work - tested on 20 Jan SF

var projects = {
	"projects": [
		{
		 "title": "Sample Project 1",
		 "date": 2014,
		"description": "ewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwf",
		 "images": ["http://www.w3schools.com/htmL/pic_mountain.jpg","http://www.w3schools.com/htmL/pic_mountain.jpg"]
		},
		{
		 "title": "Sample Project 2",
		 "date": 2015,
		 "description": "ergergegegegegeget",
		 "images": ["http://www.w3schools.com/htmL/pic_mountain.jpg","http://www.w3schools.com/htmL/pic_mountain.jpg"]
		}	
	]
} 

// using encapsulation of a function to display the project information

projects.display = function() {
	
	$("#main").append("hello");
	for (project in projects.projects) {
	
	
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
 
	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images){
		
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			
			}
		} 	
	}
} 


// must ALWAYS RUN the FUNCTION to get a function to work - durr - as below
projects.display();



// logging clicks on page - the new quiz done and tested on 17 Jan

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//created sections below lesson 11 of JS flow control but not sure i need it
/* $("#main").append(internationalizeButton);

inName(Sebastian thrun"); */


/* function inName(name){
	name= name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase;
	name[0] = name[0].slice(0,1).toUpperCase;
	name[0] = name[0].slice(1).toLowerCase;
	return name[0] + " " + name[1];
	
	return fullName;
} */