body = document.getElementById("body");
splashscreen = document.getElementById("splashscreen");
startbutton = document.getElementById("startbutton");
loginpage = document.getElementById("login")
dashboardpage = document.getElementById("dashboard");

splashscreen.style.display = "flex";
loginpage.style.display = "none";
dashboardpage.style.display = "none";

startbutton.onclick = function startFunction(){
    splashscreen.style.display = 'None';
    loginpage.style.display = 'flex';
    dashboardpage.style.display = "none";
};



signupnow = document.getElementById("signupnowbtn")
loginform = document.getElementById("loginform")
loginnows = document.getElementById("loginnows")
signupnows = document.getElementById("signupnows")
signupform = document.getElementById("signupform")

signupnowbtn.onclick = function signupnow(){
    loginform.style.display = "None";
    signupform.style.display = "block"
    loginnows.style.display = "block";
}

loginnows.onclick = function loginnows(){
    loginform.style.display = "block";
    signupform.style.display = "none";
    loginnows.style.display = "none";
    signupnows.style.display = "block";
}





loginmain = document.getElementById("loginmain")
signupbtn = document.getElementById("signup")
login_user_name = document.getElementById("lusername")
login_password = document.getElementById("lpassword")
signup_user_name = document.getElementById("susername")
signup_password = document.getElementById("spassword")
signup_confirmpassword = document.getElementById("sconfirmpassword")
loginmain.onclick = function loadDashboard(){
    if(login_user_name.value != '' || login_password.value != '') {
        splashscreen.style.disply = "None";
        loginpage.style.display = "None";
        dashboardpage.style.display = "block";
    } else {
        window.alert("Please provide your username and password!")
    }
}

signupmain = document.getElementById("signupmain")

signupmain.onclick = function loadDashboard(){
    if(signup_user_name.value != '' || signup_password.value != '' || signup_confirmpassword.value != '') {
        if(signup_password.value == signup_confirmpassword.value) {
            splashscreen.style.disply = "None";
        loginpage.style.display = "None";
        dashboardpage.style.display = "block";
        } else {
            window.alert("Password and confirm password are not identical")
        }
    } else {
        window.alert("Please provide a username and a password and confirm it")
    }
    
}

angry = document.getElementById("angry")
sad = document.getElementById("sad")
happy = document.getElementById("happy")
veryhappy = document.getElementById("veryhappy")
angryalert = document.getElementById("angryalert")
sadalert = document.getElementById("sadalert")
happyalert = document.getElementById("happyalert")
veryhappyalert = document.getElementById("veryhappyalert")
darkscreen = document.getElementById("darkscreen");

angry.onclick = function angry(){
    window.scrollTo({
        top: 0,
    });
    angryalert.style.display = "flex";
    sadalert.style.display = "none";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "block";
    body.style.overflow = "hidden";
}
sad.onclick = function sad(){
    window.scrollTo({
        top: 0,
    });
    angryalert.style.display = "none";
    sadalert.style.display = "flex";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "block";
    body.style.overflow = "hidden";
}
happy.onclick = function happy(){
    window.scrollTo({
        top: 0,
    });
    angryalert.style.display = "none";
    sadalert.style.display = "none";
    happyalert.style.display = "flex";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "block";
    body.style.overflow = "hidden";
}
veryhappy.onclick = function veryhappy(){
    window.scrollTo({
        top: 0,
    });
    angryalert.style.display = "none";
    sadalert.style.display = "none";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "flex";
    darkscreen.style.display = "block";
    body.style.overflow = "hidden";
}

rmalert1 = document.getElementById("rmalert1")
rmalert2 = document.getElementById("rmalert2")
rmalert3 = document.getElementById("rmalert3")
rmalert4 = document.getElementById("rmalert4")


rmalert1.onclick = function rmalert(){
    angryalert.style.display = "none";
    sadalert.style.display = "none";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "none";
    sad.style.filter = "grayscale(1)";
    happy.style.filter = "grayscale(1)";
    veryhappy.style.filter = "grayscale(1)";
    angry.style.pointerEvents = "none";
    sad.style.pointerEvents = "none";
    happy.style.pointerEvents = "none";
    veryhappy.style.pointerEvents = "none";
    body.style.overflow = "auto";
}

rmalert2.onclick = function rmalert(){
    angryalert.style.display = "none";
    sadalert.style.display = "none";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "none";
    angry.style.filter = "grayscale(1)";
    happy.style.filter = "grayscale(1)";
    veryhappy.style.filter = "grayscale(1)";
    angry.style.pointerEvents = "none";
    happy.style.pointerEvents = "none";
    veryhappy.style.pointerEvents = "none"; 
    sad.style.pointerEvents = "none";
    body.style.overflow = "auto";  
}

rmalert3.onclick = function rmalert(){
    angryalert.style.display = "none";
    sadalert.style.display = "none";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "none";
    sad.style.filter = "grayscale(1)";
    angry.style.filter = "grayscale(1)";
    veryhappy.style.filter = "grayscale(1)";
    sad.style.pointerEvents = "none";
    angry.style.pointerEvents = "none";
    veryhappy.style.pointerEvents = "none";
    happy.style.pointerEvents = "none";
    body.style.overflow = "auto";
}

rmalert4.onclick = function rmalert(){
    angryalert.style.display = "none";
    sadalert.style.display = "none";
    happyalert.style.display = "none";
    veryhappyalert.style.display = "none";
    darkscreen.style.display = "none";
    sad.style.filter = "grayscale(1)";
    happy.style.filter = "grayscale(1)";
    angry.style.filter = "grayscale(1)";
    sad.style.pointerEvents = "none";
    happy.style.pointerEvents = "none";
    angry.style.pointerEvents = "none";
    veryhappy.style.pointerEvents = "none";
    body.style.overflow = "auto";
}

account = document.getElementById("account");
dashcontent = document.getElementById("dashcontent");
deepanalysis = document.getElementById("deepanalysis")

account.onclick = function rmdashcontent(){
    dashcontent.style.display = "none";
    deepanalysis.style.display = "flex";
    aboutus.style.display = "none";
    contactus.style.display = "none";
    recommend.style.display = "none";
}

home = document.getElementById("home")

home.onclick = function goHome(){
    dashcontent.style.display = "block";
    deepanalysis.style.display = "none";
    aboutus.style.display = "none";
    contactus.style.display = "none";
    recommend.style.display = "none";
}

about = document.getElementById("about")
aboutus = document.getElementById("aboutus")

about.onclick = function goHome(){
    dashcontent.style.display = "none";
    aboutus.style.display = "block";
    deepanalysis.style.display = "none";
    contactus.style.display = "none";
    recommend.style.display = "none";
}

contact = document.getElementById("contact")
contactus = document.getElementById("contactus")

contact.onclick = function goHome(){
    dashcontent.style.display = "none";
    aboutus.style.display = "none";
    deepanalysis.style.display = "none";
    contactus.style.display = "block";
    recommend.style.display = "none";
}

mainlogo = document.getElementById("mainlogo");

mainlogo.onclick = function(){
    dashcontent.style.display = "block";
    deepanalysis.style.display = "none";
    aboutus.style.display = "none";
    contactus.style.display = "none";
    recommend.style.display = "none";
}

recommendTab = document.getElementById("recommendTab");
recommend = document.getElementById("recommend");

recommendTab.onclick = function(){
    dashcontent.style.display = "none";
    aboutus.style.display = "none";
    deepanalysis.style.display = "none";
    contactus.style.display = "none";
    recommend.style.display = "block";
}