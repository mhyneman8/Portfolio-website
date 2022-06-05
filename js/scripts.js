// Opening welcome screen on first load
document.addEventListener("DOMContentLoaded", function() {
    if (document.body.className === 'homePage') {
        if (sessionStorage.getItem('pageloadcount') === null) {
            document.querySelector('#opening').classList.add('show');
            sessionStorage.setItem('pageloadcount', '1');
            setTimeout(function() {
                $("#opening").removeClass('hide');
            }, 1000);
        }
        // click to hide welcome screen
        document.querySelector('#opening').addEventListener('click', function() {
            document.querySelector('#opening').classList.remove('show');
            document.querySelector('#hamburger').classList.remove('hide');
            document.querySelector('.menu-large').classList.remove('hide');
            sessionStorage.setItem('skipOpening', '1');
            // typewriter();
        })
    }
}) 

function closeAnimation() {
    a = document.querySelector('.row1');
    b = document.querySelector('.row2');
    c = document.querySelector('.row3'); 
    d = document.querySelector('#hamburger');
    menu = document.querySelector('#menu');
    let item = document.querySelectorAll('menu-item');

    function toggleAnimation() {
        a.classList.toggle('rotateRight');
        b.classList.toggle('transparent');
        c.classList.toggle('rotateLeft');
        menu.classList.toggle('move'); 
        // item.classList.toggle('slide')
    };

    d.addEventListener('click', function() {
        toggleAnimation();
    });
} closeAnimation();


// homepage typing content
const carouselText = [
    {text: "Front-End"},
    {text: "Back-End"},
    {text: "Web Development"}
]

// opening typewriter effect
function typewriter() {
    document.querySelector('#hamburger').classList.remove('hide');
    document.querySelector('.menu-large').classList.remove('hide');
    $(document).ready(async function() {
        await typeSentence("Mallory Hyneman", "#sentence");
        carousel(carouselText, "#feature-text")
    });
}

// homepage typewriter effect based on screensize
if($(window).width() >= 481) {
    if (document.body.className === 'homePage') {
         if (sessionStorage.getItem('pageloadcount') === null) {
            setTimeout("typewriter()", 5100);
            setTimeout(function() {
                $("#cursor1").addClass('hide');
            }, 6800);
            
            setTimeout(function() {
                $("#cursor2").removeClass('hide');
            }, 6800);
        } else if (sessionStorage.getItem('pageloadcount') !== null) {
            typewriter();
            setTimeout(function() {
                $("#cursor1").addClass('hide');
            }, 1700);
            
            setTimeout(function() {
                $("#cursor2").removeClass('hide');
            }, 1700);
        } 
    }
} else {
    if (document.body.className === 'homePage') { 
        if (sessionStorage.getItem('pageloadcount') === null) {
            setTimeout("typewriter()", 9800);
            setTimeout(function() {
                $("#cursor1").addClass('hide');
            }, 11600);
            
            setTimeout(function() {
                $("#cursor2").removeClass('hide');
            }, 11600);
        } else {
            typewriter();
            setTimeout(function() {
                $("#cursor1").addClass('hide');
            }, 1700);
            
            setTimeout(function() {
                $("#cursor2").removeClass('hide');
            }, 1700);
        }
    }
}

// typewriter effect for all pages
async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}

if (document.body.className === 'about') { 
    typeSentence("About Me", "#about");
}

if (document.body.className === 'projects') {
    typeSentence("Projects", "#projects")
}

if (document.body.className === 'contact') {
    typeSentence("Let's Chat!", "#contact");
}

if (document.body.className === 'angular') {
    typeSentence("myFlix Angular", "#angular");
}

if (document.body.className === 'changed') {
    typeSentence("Changed by the Forkfull", "#changed");
}

if (document.body.className === 'mbg') {
    typeSentence("Mother B Green Cleaning", "#mbg");
}
if (document.body.className === 'ccl') {
    typeSentence("CCL", "#ccl");
}

if (document.body.className === 'meet') {
    typeSentence("Meet App", "#meet");
}

if (document.body.className === 'myflix') {
    typeSentence("myFlix App", "#myflix");
}

if (document.body.className === 'pokedex') {
    typeSentence("Pokedex", "#pokedex");
}

if (document.body.className === 'todo') {
    typeSentence("ToDo List App", "#todo");
}

if (document.body.className === 'chat') {
    typeSentence("Chat App", "#chat");
}

if (document.body.className === 'movie') {
    typeSentence("Movie API", "#movie");
}
if (document.body.className === 'clearviction') {
    typeSentence("Clearviction", "#clearviction");
}
if (document.body.className === 'budget') {
    typeSentence("Budget Planner", "#budget");
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}
  
async function carousel(carouselList, eleRef) {
    var i = 0;
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
}
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// project filter

// default filter to show all 
filterObjects("all");

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("box");

    if (c == "all") c="";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2= name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// show more skills for filter options
function moreSkills() {
    console.log('more');
    $(".more-projects").toggle();
    // removeClass(".more-projects", "hide");
}
  