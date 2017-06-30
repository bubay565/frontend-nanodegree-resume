/*
This is empty on purpose! Your code to build the resume will go here.
 */

var resumeDetails = {
    "work" : [
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
                "description": "handling customer complaints via calls, letter and emails in accordance with the FSA regulations"
            }
        ],
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
        ],
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
    console.log('yay');
    var formattedSkills = '';
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < resumeDetails['bio']['skills'].length; i++){
        formattedSkills = HTMLskills.replace("%data%", resumeDetails.bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
    
}