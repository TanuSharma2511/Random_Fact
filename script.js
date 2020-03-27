 //Facts for number
 let fact1 = document.querySelector('#fact1');
 let factText1 = document.querySelector('#factText1');

 let numberInput = document.querySelector('#numberInput');
 let button1 = document.querySelector('#btn1');

 button1.addEventListener("click",getFactAjax1)
 // numberInput.addEventListener('input', getFactAjax);

 // Fetch with XHR
 function getFactAjax1(){
   let number = numberInput.value;
   if(number != ''){
     let xhr = new XMLHttpRequest();
     xhr.open('GET', 'http://numbersapi.com/'+number);

     xhr.onload = function(){
       if(this.status == 200){
         fact1.style.display = 'block';
         factText1.innerText = this.responseText;
       }
     }

     xhr.send(); 
     }
 }

//Facts for year
 let fact2 = document.querySelector('#fact2');
 let factText2 = document.querySelector('#factText2');

 let yearInput = document.querySelector('#yearInput');
 let button2 = document.querySelector('#btn2');

 button2.addEventListener("click",getFactAjax2)
 // numberInput.addEventListener('input', getFactAjax);

 // Fetch with XHR
 function getFactAjax2(){
   let year = yearInput.value;
   if(year != ''){
     let xhr = new XMLHttpRequest();
     xhr.open('GET', 'http://numbersapi.com/'+year+'/year');

     xhr.onload = function(){
       if(this.status == 200){
         fact2.style.display = 'block';
         factText2.innerText = this.responseText;
       }
     }

     xhr.send(); 
     }
 }
