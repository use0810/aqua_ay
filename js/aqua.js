
$(function(){

});


$(window).on('load', function(){

  function fishMaker(n) {
    var fish = document.getElementById('fish');
    for(var i = 0; i < n; i++) {
        fishSet(fish);
    }
  }
  
  function fishSet(clone) {
    var min = 2 ;
    var max = 4 ;
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
    var fishClone = clone.cloneNode(true);
    var fishStyle = fishClone.style;
    var info = document.getElementById('info');
  
    fishStyle.top = 80 * Math.random() + "%";
    fishStyle.animationDelay = 8 * Math.random() + "s";
    fishStyle.height = a + "vh";
    info.appendChild(fishClone);
  
    fishClone.addEventListener("animationend", function() {
      this.parentNode.removeChild(this);
      var fish = document.getElementById('fish');
      fishSet(fish);
    }, false)
  }
  
  fishMaker(5)
  
  
  ScrollReveal().reveal('.shadow-1',{
  duration: 6000, 
  origin: 'right',
  distance: '1000px',
  reset: true 
  });
  
  ScrollReveal().reveal('.shadow-2',{
  duration: 4000, 
  origin: 'left',
  distance: '1000px',
  reset: true 
  });
  
  ScrollReveal().reveal('.shadow-3',{
  duration: 4000, 
  origin: 'right',
  distance: '1000px',
  reset: true 
  });
  
  ScrollReveal().reveal('.shadow-4',{
  duration: 4000, 
  origin: 'left',
  distance: '1000px',
  reset: true 
  });
  
  ScrollReveal().reveal('.shadow-5',{
  duration: 4000, 
  origin: 'bottom',
  distance: '1000px',
  reset: true 
  });

});