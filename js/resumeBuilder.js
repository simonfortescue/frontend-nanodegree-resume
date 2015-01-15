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
	"welcome message": "efkn jrhbfwherbf whebfh",
	"skills" : ["fun", "superhuman powers", "web design"],
	"biopic:" "images/fry.jpg"
}

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

var work = {
	"jobs": [
	{
		"employer": "Mr Delivery",
		"title": "Entrepeneur",
		"dates": "forever",
		"description": "efffffffffffffffffffffffrfger"
	},
	{	
		"employer": "Mr Delivery 2",
		"title": "Entrepeneur 2",
		"dates": "forever 2",
		"description": "2 efffffffffffffffffffffffrfger 2"

	}
  ]
}

var projects = {
	"projects": [
		{
		 "title": "sample project 1",
		 "date": "2014",
		 "description": "ewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwf"
		}
	]

} 
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


/* $("#main").append(work.jobs.employer[0]);
//$("#main").append(education.schools.name) */;

