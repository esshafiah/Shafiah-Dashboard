const loginPage =
document.getElementById(
"loginPage"
);

const dashboardPage =
document.getElementById(
"dashboardPage"
);

/* LOGIN */

function login(){

    const username =
    document.getElementById(
    "username"
    ).value.trim();

    const password =
    document.getElementById(
    "password"
    ).value.trim();

    if(
        username ===
        "shafiah"

        &&

        password ===
        "1234"
    ){

        loginPage.style.display =
        "none";

        dashboardPage.style.display =
        "block";

        localStorage.setItem(
            "login",
            "true"
        );

    }

    else{

        document.getElementById(
        "error"
        ).innerText =
        "Wrong username or password!";
    }
}

/* AUTO LOGIN */

window.onload =
function(){

    if(
        localStorage.getItem(
        "login"
        ) === "true"
    ){

        loginPage.style.display =
        "none";

        dashboardPage.style.display =
        "block";
    }

    updateClock();

    setInterval(
        updateClock,
        1000
    );
}

/* LOGOUT */

function logout(){

    localStorage.removeItem(
        "login"
    );

    dashboardPage.style.display =
    "none";

    loginPage.style.display =
    "flex";
}

/* SHOW SECTION */

function showSection(
sectionId
){

    const sections =
    document.querySelectorAll(
    ".section"
    );

    sections.forEach(
    section => {

        section.style.display =
        "none";
    });

    document.getElementById(
    sectionId
    ).style.display =
    "block";
}

/* CLOCK */

function updateClock(){

    const now =
    new Date();

    let hours =
    now.getHours();

    let minutes =
    now.getMinutes();

    let seconds =
    now.getSeconds();

    let ampm =
    hours >= 12 ?
    "PM" : "AM";

    hours =
    hours % 12;

    hours =
    hours ?
    hours : 12;

    hours =
    hours.toString()
    .padStart(2,"0");

    minutes =
    minutes.toString()
    .padStart(2,"0");

    seconds =
    seconds.toString()
    .padStart(2,"0");

    document.getElementById(
    "clock"
    ).innerHTML =

    `${hours}:${minutes}:${seconds}
    ${ampm}`;

    document.getElementById(
    "date"
    ).innerHTML =

    now.toDateString();
}

/* DARK MODE */

const themeToggle =
document.getElementById(
"themeToggle"
);

themeToggle.addEventListener(
"click",

function(){

    document.body.classList.toggle(
    "dark-mode"
    );

    if(
        document.body.classList.contains(
        "dark-mode"
        )
    ){

        themeToggle.innerHTML =
        "☀ Light Mode";
    }

    else{

        themeToggle.innerHTML =
        "🌙 Dark Mode";
    }
}
);