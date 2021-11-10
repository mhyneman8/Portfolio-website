// set up text to print, each item in array is new line
var aText = new Array(
    "Mallory Hyneman", 
    "Web Development"
    );
    var iSpeed = 150; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
function typewriter()
    {
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        var destination = document.getElementById("typedtext");
        
        while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
            
        if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
        }
        } else {
        setTimeout("typewriter()", iSpeed);
        }
    }
if (document.body.className === 'homePage'){ 
    if (sessionStorage.getItem('pageloadcount') === null) {
        setTimeout("typewriter()", 5100);
    } else {
        typewriter();
    }

    document.addEventListener("DOMContentLoaded", function() {
        console.log(sessionStorage.getItem('pageloadcount'));

        if (sessionStorage.getItem('pageloadcount') === null) {
            console.log('null');
            document.querySelector('#opening').classList.add('show');
            sessionStorage.setItem('pageloadcount', '1');
        }
    })
}

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

// window.onbeforeunload = function() {
//     localStorage.removeItem('pageloadcount');
// }

// localStorage.removeItem('pageloadcount');