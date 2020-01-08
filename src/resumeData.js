let resumeData = {
    "imagebaseurl": "https://seanohare98.github.io/",
    "name": "Sean O'Hare",
    "role": "",
    "linkedinId": "sean-ohare",
    "roleDescription": "(American) CS student at The Chinese University of Hong Kong. Passionate about solving problems with software, jumping into sand, and all things cinema! Expecting to graduate in the spring of 2021.",
    "socialLinks": [
        {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/sean-ohare/",
            "className": "fa fa-linkedin"
        },
        {
            "name": "github",
            "url": "http://github.com/seanohare98",
            "className": "fa fa-github"
        }
    ],
    "aboutme": "I am currently a penultimate year student pursuing my B.S. in Computer Science at The Chinese University of Hong Kong. Currently seeking Summer 2020 internship opportunities.",
    "address": "Hong Kong",
    "website": "seanohare@link.cuhk.edu.hk",
    "education": [
        {
            "UniversityName": "The Chinese University of Hong Kong",
            "specialization": "Bachelor of Science in Computer Science",
            "MonthOfPassing": "May",
            "YearOfPassing": "2021",
            "Achievements": "Honors at Entrance, University Admission Scholarship, Faculty of Engineering Admission Scholarship, Track and Field Student-Athlete"
        },
        {
            "UniversityName": "Michigan State University",
            "specialization": "Bachelor of Science in Computer Science",
            "YearOfPassing": "Transferred",
            "Achievements": "Track and Field Student-Athlete, Charles Drew Science Scholar, Design for America: MSU"
        }
    ],
    "work": [
        {
            "CompanyName": "Invest Bots Limited",
            "specialization": "Software Engineering Intern",
            "YearOfLeaving": "May 2019 - Present",
            "Achievements1": "- Manage the company's primary stock data API and associated codebase/OpenAPI documentation",
            "Achievements2": "- Reduced several endpoint response times by up to 3x through implementation of Redis caching and improved SQL queries/server-side logic",
            "Achievements3": "- Implemented a CI/CD pipeline for 40% of company GitLab repos using a docker-in-docker approach, with automated testing, staging, and deployment to Kubernetes",
            "Achievements4": "- Built React components for displaying data-tables and graphs for use by clients and internal BAs",

        },
        {
            "CompanyName": "MSU Information Technology",
            "specialization": "Information Technology Intern",
            "YearOfLeaving": "May 2018 - August 2018",
            "Achievements1": "- Built and deployed a website (www.msumigration.info) to assist with the oversight of a campus-wide migration project by posting weekly schedule and progress notifications",
            "Achievements2": "- Wrote several PowerShell scripts to handle Active Directory user management functions",
            "Achievements3": "- Managed weekly Excel spreadsheets containing migration wave plans and positions for 25 other employees",
            "Achievements4": "- Provided technical support and documentation on an ad-hoc basis",
        },
        {
            "CompanyName": "Time Out Shanghai",
            "specialization": "Editorial Intern",
            "YearOfLeaving": "June 2017 - August 2017",
            "Achievements1": "- Edited dozens of pages on the Time Out Shanghai website, using HTML/CSS through a proprietary CMS, to be in accordance with the brand's style guide",
            "Achievements2": "- Wrote and published 5 blog posts on upcoming events",
            "Achievements3": "- Produced digital content using Adobe Photoshop and Final Cut Pro",
            "Achievements4": "- Gathered information for news stories and organized events",
        }
        ],
    "skills":[
        {
            "skillname":"HTML5"
        },
        {
            "skillname":"CSS"
        },
        {
            "skillname":"Reactjs"
        }
    ],
    "portfolio": [
        {
            "name": "HK Track and Field",
            "description":
                "Web app to rank and search for Hong Kong track and field athletes/performances. Built using React.js, Node.js, and PostgreSQL. Deployed on DigitalOcean. Separate repos for the backend API and frontend SPA on my GitHub.",
            "url": "http://www.hktrackandfield.org",
            "imgurl": "images/portfolio/hktf.png"
        },
        {
            "name": "HK Track and Field PDF Scraper",
            "description": "PDF Scraper to obtain data from track and field meet results. Version 2 (coming soon) will identify table borders and be able to scrape ALL table data.",
            "url": "https://github.com/seanohare98/hktf-scraper",
            "imgurl": "images/portfolio/hktf-scraper.jpg"
        },
        {
            "name": "AVL Tree",
            "description": "AVL data structure using C++. Recursive balancing methods allow for predecessor query and insertion functionality.",
            "url": "https://github.com/seanohare98/avl-tree",
            "imgurl": "images/portfolio/avl.png"
        },
        {
            "name": "Bash Shell",
            "description": "Simple bash shell using C. Has a directory stack allowing for pushd, popd, and dirs methods. Other commands executed by forking child processes.",
            "url": "https://github.com/seanohare98/simple-shell",
            "imgurl": "images/portfolio/shell.png"
        },    {
            "name": "Hospital API",
            "description": "RESTful API simulating a hospital system's backend functionality. Used Node.js and MongoDB with Mongoose ORM. A practice project before I embarked on HK Track and Field.",
            "url": "https://github.com/seanohare98/hospital-api/wiki",
            "imgurl": "images/portfolio/hospital.jpg"
        },    {
            "name": "MSU Migration Website",
            "description": "Website made for MSU Information Technology to assist with the oversight of a campus-wide migration project. Built using Node.js with EJS. Deployed on Heroku.",
            "url": "http://www.msumigration.info",
            "imgurl": "images/portfolio/msu.jpg"
        },

    ]
}

export default resumeData