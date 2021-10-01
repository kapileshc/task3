var emp= [
    
    {  Intro: ":",
       name:"kapilesh",
       email:"kapilesh1@gmail.com",
       instagram: "kapilesh",
       github:"kapileshc",
       location:"chennai"

    },
    
    {   Academic_qualification : ":",
    high_school :"name:velammal,percentage:92% ",
    higher_secondary_school:"name:velammal,percentage:93% ",
    Degree:"name:velammal,percentage:82.8% "
    },

    {   software_exposure:"-",        
            skill1:"HTML",
            skill2:"CSS",
            skill3:"javascript"        
    },


    { language_proficiency: "-",
        language1:"tamil",
        language2:"english"    
    }

]

// to iterate through all resume details

emp.forEach((info) => {
for(let key in info){
console.log(`${key}:${info[key]}`);
 }
});