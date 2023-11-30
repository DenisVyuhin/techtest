//<Smooth Scroll>//
let scrollYPos = 0;
let header = document.querySelector('.head-up');
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
	smooth: .75,
	effects: true,
  onUpdate: (e) => {
    console.log(e.scrollTop());
    scrollYPos = e.scrollTop();

    if(scrollYPos > 90) {
      header.style.animation = "fhead-up .25s ease-out";
      //header.style.position = "fixed";
      //header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .1);";
      header.style.top = (scrollYPos) + "px";
    } else {
      header.style.animation = "none";
      header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .0);";
      header.style.top = "0";
    }

  }
})

//<Header Animation>//


/*window.addEventListener('scroll', function scroll(e){
  let scrollY = window.scrollY;
  
  if(scrollYPos > 90) {
    header.style.animation = "fhead-up .25s ease-out";
    //header.style.position = "fixed";
    //header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .1);";
    header.style.top = (scrollYPos) + "px";
  } else {
    header.style.animation = "none";
    header.style.cssText = "box-shadow: 0px 0px 12px rgba(0, 0, 0, .0);";
    header.style.top = "0";
  }

});*/