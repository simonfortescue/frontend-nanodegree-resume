

var bio  = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "021-0000-000",
		"email": "john@example.com",
		"blog": "www.blog.com",
		"twitter": "@johndoe",
		"github": "johndoe",
		"location": "Fulham, London"
		},
	"welcomeMessage": "efkn jrhbfwhertttttttttttttttttttttttbf whebfh rgegggggggggggggggttttttttgggggggggggggggggggggggggggggggggggggggg",
	"skills": ["Windsurfer", "superhuman powers", "web design", "Marathon Runner"],
	"Pic": "images/fry.jpg"
}

bio.displayBio = function() {	
	
	//inputs the name and the role
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
			
	//input the Pic
	var formattedPic = HTMLbioPic.replace("%data%", bio.Pic);
	$("#topContacts").append(formattedPic);
	//input the welcome message
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#topContacts").append(formattedWelcome);
		
	// inputs skills from array
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

//the below line runs the Bio function
bio.displayBio(); 

//work object follows

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

//encapsulated work function follows
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
//next line runs the work function
work.displayWork();	

// eduction object follows:
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
		}/* ,
		{
			"title":"Javascript Crash Course",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www/udacity.com/course/ud804"
		} */
	]
} 

// the below encapsulated function is being constructed to display the education object

education.displayEducation = function() {
	
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
}

education.displayEducation();

//************** I am stuck here because I cant work out where to append the online course properties....
education.displayOnline = function() { 
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

//the below code runs the education function

education.displayOnline();


//project object follows
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

//encapsulated project function
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
// runs project function
projects.display();

// logs the placement of clicks on page - view source to see it working

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//code for google maps

$("#mapDiv").append(googleMap);



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