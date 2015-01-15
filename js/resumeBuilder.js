//  note have refreshed index and this file, so need to go through and add any changes - especially change to black. have got to end lesson 0
// also have unblocked some sections of code below and the first line (append with SImon) still works so nothing broken

$("#main").append("Simon");

//tested unblock on 16 jan and fails
/* var bio  = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "021-0000-000",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Fransisco"
	},
	"welcome message": "efkn jrhbfwherbf whebfh",
	"skills" : ["fun", "superhuman powers", "web design", "other"],
	"biopic:" "images/fry.jpg"
} */

/* if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);
}  */

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
		"degree": ["BA"],
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
		"employer": "Mr Delivery",
		"title": "Entrepreneur",
		"dates": "forever",
		"description": "efffffffffffffffffffffffrfger"
	},
{	
		"employer": "Mr Delivery 2",
		"title": "Entrepreneur 2",
		"dates": "forever 2",
		"description": "2 efffffffffffffffffffffffrfger 2"
	}
  ]
}



/* for (job in work.jobs){ */
	//$("#workExperience").append(HTMLworkStart);
	/* var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formatterEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle); */
	/* } */


// unblocked on 16 jan and works

var projects = {
	"projects": [
		{
		 "title": "sample project 1",
		 "date": "2014",
		 "description": "ewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwf"
		}
	]

} 
