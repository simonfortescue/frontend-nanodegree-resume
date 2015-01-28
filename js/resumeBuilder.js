

var bio  = {
	"name": "Simon Fortescue",
	"role": "General Manager",
	"contacts": {
		"mobile": "021-0000-000",
		"email": "simonfortescue@gmail.com",
		"blog": "www.blog.com",
		"twitter": "@johndoe",
		"github": "johndoe",
		"location": "Auckland, New Zealand"
	},
	"welcomeMessage": "Hi, and welcome to my world - a world of sport, giving, work (well not in the literal sense as I love what I do, spirituality, technology, commercialisation, trying, building and learning",
	"skills": ["Seeking", "Innovation", "running", "leading","windsurfing","SUP'ing"],
	"Pic": "images/fry.jpg",
	"displayBio" : function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedPic = HTMLbioPic.replace("%data%", bio.Pic);
	$("#topContacts").append(formattedPic);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#topContacts").append(formattedWelcome);
	$("#topContacts").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#topContacts").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#topContacts").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#topContacts").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#topContacts").append(formattedSkill);	
	}
}

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
],

	"displayWork" : function() {
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
}


var education = {
  "schools" : [
	{
		"name": "Broadwater",
		"location": "Auckland",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": "1993 - 1995",
	},
	{
		"name": "Godalming College",
		"location": "Auckland",
		"degree": "BA",
		"majors": ["Mechanical Engineering"],
		"dates": "2000 - 2003",
	}
	],
	"onlineCourses" : [
		{
			"title":"Javascript Crash Course",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www/udacity.com/course/ud804"
		} 
	],
	"displayEducation" : function() {
	
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);//////  IS A ARRAY!!!!***** CHANGE
		$(".education-entry:last").append(formattedMajors);
	   }
	},
	"displayOnline" : function() { 
	for (courses in education.onlineCourses)	{
	$(".education-entry:last").append(HTMLonlineClasses);
	var formattedSchooltitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
	$(".education-entry:last").append(formattedSchooltitle);
	var formattedOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
	$(".education-entry:last").append(formattedOnlineschool);
	var formattedSchooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
	$(".education-entry:last").append(formattedSchooldates);
	var formattedSchoolurl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
	$(".education-entry:last").append(formattedSchoolurl);
		} 
	}
} 

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
	],
	"display" : function() {
	
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
} 

// runs functions
bio.displayBio(); 
projects.display();
education.displayEducation();
education.displayOnline();
work.displayWork();	



// logs the placement of clicks on page - view source to see it working

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//code for google maps

$("#mapDiv").append(googleMap);



