// Opening welcome screen on first load
document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem('pageloadcount') === null) {
        document.querySelector('#opening').classList.add('show');
        sessionStorage.setItem('pageloadcount', '1');
        setTimeout(function() {
            $("#opening").removeClass('hide');
        }, 1000);
    }
    // click to hide welcome screen
    document.querySelector('#opening').addEventListener('click', function() {
        document.querySelector('#opening').classList.remove('show')
    })
}) 







// colors = ['#FFDA6A', '#FF6D6C', '#41BEFF', '#C54BFF', '#4BFFA6', '#333', '#FFB5C0'];
// story = ['This.', 'Is.', 'The Menu.', 'You Were Waiting For.', 'Made with Love. Gez', 'Share (:']
// i = 1;
// j = 0;
a = document.querySelector('.row1');
b = document.querySelector('.row2');
c = document.querySelector('.row3'); 
d = document.querySelector('#hamburger');
// e = document.querySelector('.container');
// f = document.querySelector('.riempi');
menu = document.querySelector('#menu');
let item = document.querySelectorAll('menu-item');

function toggleAnimation() {
    a.classList.toggle('rotateRight');
    b.classList.toggle('trasparent');
    c.classList.toggle('rotateLeft');
    
    // e.classList.toggle('darken');
    // document.querySelector('.homepage').classList.toggle('hidden');
    menu.classList.toggle('move'); 
    item.classList.toggle('slide')
};

/*
function removeAnimation() {
    a.classList.remove('rotateRight');
    b.classList.remove('trasparent');
    c.classList.remove('rotateLeft');
    e.classList.remove('darken');
    menu.classList.remove('move');
}
*/


d.addEventListener('click', function() {
    toggleAnimation();
});


// drop down menu button
// function dropdown() {
//     const dropbtn = document.querySelector('.dropbtn');
//     dropbtn.addEventListener('click', show);

//     function show() {
//         console.log('test')
//         const content = document.querySelector('.dropdown-content');
//         content.classList.add('show');
//     }
// } 
// dropdown();

// close menu options on click
// function close() {
//     const closeBtn = document.querySelector('.nav-close');
//     closeBtn.addEventListener('click', closeMenu);
 
//     function closeMenu() {
//         const content = document.querySelector('.dropdown-content');
//         if (content.classList.contains('show')) {
//             content.classList.remove('show');
//         }
//     }
// }
// close();

// homepage typing content
const carouselText = [
    {text: "Front-End"},
    {text: "Back-End"},
    {text: "Web Development"}
]

// opening typewriter effect
function typewriter() {
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
    typeSentence("Contact Me", "#contact");
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