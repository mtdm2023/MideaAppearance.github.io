$(document).ready(function(){
   
   
    
    const Dir = document.querySelector("html").getAttribute("dir");
    let IsRtl = true;
    if(Dir == "rtl") {
        IsRtl = true;
    }else if(Dir == "ltr"){
        IsRtl = false;
    }
    else {
        IsRtl = false;
    }
    $("#SliderProjects").owlCarousel({
        nav:false,
        loop:true,
        dots:false,
        rtl:IsRtl,
        margin:90,
        autoplay: false, // Enable autoplay
        autoplayTimeout: 5000, // Set autoplay interval to 5 seconds
        autoplayHoverPause: true,
        autoplaySpeed: 2000 , // Pause autoplay on hover
        responsive:{
            0:{
                items:1,
                stagePadding:0,
            },768:{
                items:3
            },
            980:{
                items:4
            },
            1000:{
                items:4,
                stagePadding:0,
            }
            ,
            1200:{
                items:3,
                stagePadding:0,   
        }
        }
    });
    $("#SliderProjects2").owlCarousel({
        nav:false,
        loop:true,
        dots:false,
        autoplay: false,
        autoplaySpeed: 2000, 
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,        
        rtl:IsRtl,
        margin:60 ,
        responsive:{
            0:{
                items:2,
                stagePadding:0,
            },768:{
                items:3
            },
            980:{
                items:6
            },
            1000:{
                items:6,
                stagePadding:0,
            }
            ,
            1200:{
                items:6,
                stagePadding:0,   
        }
    }
    });
    $("#SliderProjects3").owlCarousel({
        nav:false,
        loop:true,
        dots:true,
        autoplaySpeed: 2000,
        autoplay: false, 
        autoplayTimeout: 5000,
        autoplayHoverPause: true, 
        rtl:IsRtl,
        margin:80,
        
        responsive:{
            0:{
                items:2,
                stagePadding:0,
               
                
            },768:{
                items:3,
                stagePadding:0,
                
            },
            980:{
                items:4,
                stagePadding:0,
                
            },
            1000:{
                items:4,
                stagePadding:0,
                
            }
            ,
            1600:{
                items:6,
                stagePadding:0,   
                
        }
    }
    });
   
    const currentlocate = location.href; // Return the Current page..
    const menuItem = document.querySelectorAll('.Top-Navbar .nav-link');
    const menulength = menuItem.length;
    for(let i=0;i<menulength;i++){
        if(menuItem[i].href === currentlocate){
            menuItem[i].classList.add("active")
        }
    }
    
    
})

window.addEventListener('resize', function() {
    document.documentElement.style.setProperty('--screen-width', window.innerWidth + 'px');
    document.documentElement.style.setProperty('--screen-height', window.innerHeight + 'px');
    const carsosel = document.getElementById('SliderProjects');
    const root = document.documentElement;
    document.documentElement.style.setProperty('--tsfs-24', 24/1.5 + (24 / this.window.innerWidth) + 'px');

    
    // if(window.innerWidth <= 600)
    // {
    //     console.log("reached")
    //     carsosel.classList.add("owl-vertical");
    // }
    // else
    // {
    //     carsosel.classList.remove("owl-vertical");
    // }
       
    
  });


  // this code for counter1
  var counterElement = document.getElementById('counter1');
  var counterValue = 0;
  function updateCounter() {
    counterElement.setAttribute("count", counterValue ); 
    counterValue++;
    if (counterValue <= 40) {
      setTimeout(updateCounter, 70);
    }
  }
  updateCounter();

  var counterElement1 = document.getElementById('counter2');
  var counterValue1 = 0;
  function updateCounter1() {
    counterElement1.setAttribute("count1", counterValue1 ); 
    counterValue1++;
    if (counterValue1 <= 90) {
      setTimeout(updateCounter1, 70);
    }
  }
  updateCounter1();





      
 
    
   

  //this code for open pdf 
 
    // Get the PDF link element
    var pdfLink = document.getElementsByClassName('carousel3_body');
    console.log(pdfLink)
    // Add click event listener to the PDF link
    pdfLink.addEventListener('click', () =>{
   
      window.open('www.google.com', '_blank');
    });
  




