
var bio  = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "021-0000-000",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "Fulham, London"
	},
	"welcomeMessage": "efkn jrhbfwherbf whebfh",
	"skills": ["fun", "superhuman powers", "web design", "other"],
	"bioPic": "images/fry.jpg"
}

bio.displayBio = function() {
	
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

bio.displayBio(); 

//old code
/* 
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
 */
var education = {
  "schools" : [
	{
		"name": "Broadwater",
		"cities": "Auckland",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 1993,
		"url": "http://example.com"
	},
	{
		"name": "Godalming College",
		"city": "Auckland",
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

// Encapsulated and tested
var work = {
	"jobs": [
	{
		"employer": "AAA Ltd",
		"title": "Fitter",
		"dates": "January 2000 - 2006",
		"location": "London",
		"description": "efffffffffffffffffffffffrfger"
	},
{	
		"employer": "BBB Ltd",
		"title": "Rep",
		"dates": "January 3000 - Future",
		"location": "Auckland",
		"description": "2 efffffffffffffffffffffffrfger 2"
	}
  ]
}

work.displayWork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);				
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);		
		

		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}		

work.displayWork();		

//encapsulated and tested

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

projects.display = function() {
	
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

projects.display();



// logging clicks on page - view source to see it working

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

//code for google maps
$("#mapDiv").append(googleMap);