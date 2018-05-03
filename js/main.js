const navIcon = document.getElementById("nav-icon");
const navMenu = document.querySelector('.nav');
const mainContent = document.getElementsByTagName('main')[0].children;
const closeButton = document.getElementsByClassName('close');
const homeText = document.querySelector('.home-text');
const homeContent = document.querySelector('body');
const footer = document.querySelector('footer');
// demo.addEventListener('load', ()=>{
//   demo.style.display = 'none';
// });
$(window).on('load',function(){
   $('.loader').fadeOut();
});
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  navIcon.style.transform = 'translateY(0%)'
  // navMenu.classList.toggle("changeNav");
  navMenu.previousElementSibling.classList.toggle("changeSubheading");

  navMenu.previousElementSibling.classList.toggle("changeHeading");
  navMenu.style.opacity = 1;
  navMenu.classList.toggle('animate-on');
  for (let i=0; i < mainContent.length; i++) {

    // mainContent[i].classList.toggle('show');

  }

  for (let i=0; i < navMenu.children[0].children.length; i++) {
    navMenu.children[0].children[i].addEventListener('click', ()=> {
      mainContent[i].style.opacity = 1;
      mainContent[i].style.display = 'block';
      mainContent[i].style.animation = 'smokeon 1s';
      mainContent[i].classList.toggle('animate-on');
      footer.style.display = 'none';
      homeText.style.display = 'none';
    });
  }

  for (let i=0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', ()=> {
      mainContent[i].style.animation = 'smokeoff 1s';
      mainContent[i].classList.toggle('animate-on');
      homeText.style.display = 'initial';
      footer.style.display = 'flex';
      let hide = setTimeout(toggleShow, 1000);
    });
    function toggleShow() {
      mainContent[i].style.display = 'none';
    }
}


});
