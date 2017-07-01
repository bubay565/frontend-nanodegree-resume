/*
This is empty on purpose! Your code to build the resume will go here.
 */

var resumeDetails = {
    "work" : {
        "jobs": [
            {
                "employer": "Eckoh Plc",
                "title": "Developer",
                "location": "Hemel-Hempstead, United kingdom",
                "dates": "2012 till present",
                "description": "Built complex IVR applications for various Telecommunications companies, major transport companies, banks and UK government departments"
            },
            {
                "employer": "Lloyds UK",
                "title": "Complaint Handler",
                "location": "Newport, Wales",
                "dates": "08-2011 to 02-2012",
                "description": "Handling customer complaints via calls, letter and emails in accordance with the FSA regulations"
            }
        ]
    },
    "projects": {
        "projects": [
           {
                "title": "Omni Food",
                "dates": "Jan, 2017",
                "description": "A modern website for food connossieurs to learn and connect with their favorite Omni chefs.",
                "images": ["images/omni_web.jpg","images/omni_mob.jpg"]
            },
            {
                "title": "Iretiayo & Buwa",
                "dates": "Mar, 2017",
                "description": "A contemporary wedding website, providng guests to the wedding with all the information necessary to be part of the couple's big day.",
                "images": ["images/iretibee_web.jpg","images/iretibee_mob.jpg"]
            },
            {
                "title": "MyReads",
                "dates": "Jul, 2017",
                "description": "A book lending app that stores a user's books in a virtual bookcase and tracks what they're reading.",
                "images": ["images/myreads_web.jpg", "images/myreads_mob.jpg"]
            },
            {
                "title": "Poll Maker",
                "dates": "Oct, 2017",
                "description": "A polls application built using react native that runs both on iOS and Android devices.",
                "images": ["images/pollmaker_web.jpg","images/pollmaker_mob.jpg"]
            }
        ]
    },
    "bio": {
            "name": "Buwa Okome",
            "role": "Web Developer",
            "welcomeMessage": "Hey, I am a front-end ninja living and working around London, UK. Let's actualize dreams.",
            "biopic": "images/sheik_buwa.jpg",
            "contacts": {
                "mobile": "07808177453",
                "email": "bubay565@yahoo.com",
                "github": "bubay565",
                "twitter": "mrwalker",
                "location": "London"
            },
            "skills": ["HMTL5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "React", "Redux", "React Native", "Node Js"]
        },
    "education" :{
            "schools": [
                {
                    "name": "Federal Government College",
                    "location": "Warri, Nigeria",
                    "degree": "O-Levels",
                    "dates": "1997 - 2003",
                    "url": "www.fedgocolwosa.org",
                    "majors": ["English", "Mathematics","Physics","Chemistry","Biology"]
                },
                {
                    "name": "Aptech",
                    "location": "Lagos, Nigeria",
                    "degree": "A-Levels",
                    "dates": "2007 -2008",
                    "url": "www.aptech-worldwide.edu",
                    "majors": ["Html5","CSS3","PHP","Microsoft .Net"]
                },
                {
                    "name": "University of Portsmouth",
                    "location": "Portsmouth, United Kingdom",
                    "degree": "B.Sc (Hons.)",
                    "dates": "2008 - 2011",
                    "url": "www.ports.ac.uk",
                    "majors": ["Advanced Networks","Human Computer Interaction and Design","Security in Online Payments"]
                }
            ],
            "onlineCourses": [
                {
                    "title": "Front-End Nanodegree",
                    "school": "Udacity",
                    "dates": "01-2017 to 06-2017",
                    "url": "www.udacity.com/courses/front-end-nanodegree"
                },
                {
                    "title": "React Nanodegree",
                    "school": "Udacity",
                    "dates": "06-2017 to 10-2017",
                    "url": "www.udacity.com/courses/react-nanodegree"
                }
            ]
        }
};

var formattedName = "Buwa Okome";
var formattedRole = "Web Developer";

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);


if(resumeDetails['bio']['skills']){
    var formattedSkills = '';
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < resumeDetails['bio']['skills'].length; i++){
        formattedSkills = HTMLskills.replace("%data%", resumeDetails.bio.skills[i]);
        $("#skills").append(formattedSkills);
    }  
}

function displayWork(){
    for(obj in resumeDetails['work'].jobs){
        if(resumeDetails['work'].jobs.hasOwnProperty(obj)){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", resumeDetails.work.jobs[obj].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", resumeDetails.work.jobs[obj].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", resumeDetails.work.jobs[obj].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", resumeDetails.work.jobs[obj].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", resumeDetails.work.jobs[obj].description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedWorkDates + formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

displayWork();

$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});

function inName(){
    var name = resumeDetails['bio']['name'].split(" ");
    
    var formattedFname = name[0].charAt(0).toUpperCase() + fname.slice(1);
    var formattedLname = name[1].toUpperCase();
    
    return formattedFname + ' ' + formattedLname;
}

$("#main").append(internationalizeButton);

resumeDetails.projects.display = function(){
    for(var i = 0; i < resumeDetails.projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", resumeDetails.projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        
        var formattedProjectDates = HTMLprojectDates.replace("%data%", resumeDetails.projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", resumeDetails.projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);
        
        if(resumeDetails.projects.projects[i].images.length > 0){
            for(var j = 0; j < resumeDetails.projects.projects[i].images.length; j++){
                var formattedProjectImages = HTMLprojectImage.replace("%data%", resumeDetails.projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedProjectImages);
            }               
        }
    }
}
resumeDetails.projects.display();

$(document).click(function(loc){
   console.log(loc.pageX, loc.pageY); 
});

$("#mapDiv").append(googleMap);