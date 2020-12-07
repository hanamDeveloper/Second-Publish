const toggle = document.getElementById("toggle__Btn");
const ul = document.getElementById("js-ul");
console.log(ul.style);

function aclick() {
   console.log('display::',ul.style.display);
   if(ul.style.display == ''){
        ul.style.display = "none";
    }
   if(ul.style.display == 'none'){
        ul.style.display = 'flex';
    }
    else if(ul.style.display == 'flex'){
         ul.style.display = 'none';
    }
}
