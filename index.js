 function add(){
    var inputfield =document.querySelector(".box").value;
    var container = document.querySelector('.container');

     var h3Element = document.createElement('h3');
     h3Element .textContent=inputfield;

     container.appendChild(h3Element);

 }