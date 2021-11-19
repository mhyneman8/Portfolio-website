document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem('pageloadcount') === null) {
        document.querySelector('#opening').classList.add('show');
        sessionStorage.setItem('pageloadcount', '1');
    }
})

function dropdown() {
    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.addEventListener('click', show);

    function show() {
        const content = document.querySelector('.dropdown-content');
        content.classList.add('show');
    }
}

dropdown();

function close() {
    const closeBtn = document.querySelector('.nav-close');
    closeBtn.addEventListener('click', closeMenu);
 
    function closeMenu() {
        const content = document.querySelector('.dropdown-content');
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        }
    }
}
close();

const carouselText = [
    {text: "Front-End"},
    {text: "Back-End"},
    {text: "Web Development"}
]

function typewriter() {
  $( document ).ready(async function() {
      await typeSentence("Mallory Hyneman", "#sentence");
    carousel(carouselText, "#feature-text")
  });
}

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
    typeSentence("pokedex", "#pokedex");
}

if (document.body.className === 'todo') {
    typeSentence("ToDo List App", "#todo");
}

if (document.body.className === 'chat') {
    typeSentence("Chat App", "#chat");
}

if (document.body.className === 'movie') {
    typeSentence("Move API", "#movie");
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