//function to give features arrow buttons click functionality 
function featuresControl(){
  let featuresBtn = document.querySelectorAll('.features-nav>button');
  featuresBtn.forEach((featuresBtn) => {
    featuresBtn.addEventListener('click',handleFeatures)}
  );
}featuresControl()

//function to toggle between the different features on the website
function handleFeatures(e){
  let featureNavActiveButton = document.querySelector('.features-nav-button-active');
  let featuresCards = document.querySelectorAll('.features-card');
  featureNavActiveButton.classList.toggle('features-nav-button-active');
  e.target.classList.add('features-nav-button-active');
  [...featuresCards].map(fc => fc.classList.add("noDisplay"))
  if(e.target.id==="one"){
    return featuresCards[0].classList.remove('noDisplay')
  }
  if(e.target.id==="two"){
    return featuresCards[1].classList.remove('noDisplay')
  }
  if(e.target.id==="three"){
    return featuresCards[2].classList.remove('noDisplay')
  }
}

//function to give faq arrow buttons click functionality 
function faqButtonControl(){
  let faqQuestion = document.querySelectorAll('.faq-question');
  faqQuestion.forEach(element => {
    element.lastElementChild.addEventListener('click', handleFaqQuestions)
  });
}faqButtonControl()

//function to for open close slide effect for different faq questions
function handleFaqQuestions(e){
  e.currentTarget.classList.toggle('faq-questions-active-rotate')
  e.currentTarget.children[0].classList.toggle('faq-question-active')
  if(e.currentTarget.parentElement.nextElementSibling.style.maxHeight === `${e.currentTarget.parentElement.nextElementSibling.scrollHeight}px`){
    e.currentTarget.parentElement.nextElementSibling.style.maxHeight = "0px";
  }
  else{
    e.currentTarget.parentElement.nextElementSibling.style.maxHeight = e.currentTarget.parentElement.nextElementSibling.scrollHeight + "px";
  }
}

//function for mobile navigation open and close button
function mobileNavControl(){
  let hamburgerBtn = document.querySelector('.hamburger');
  let closeBtn = document.querySelector('.close');
  hamburgerBtn.addEventListener('click', openMobileNav);
  closeBtn.addEventListener('click', openMobileNav)
}mobileNavControl()

function openMobileNav(){
  let mobileNav = document.querySelector('.mobile-nav');
  let body = document.querySelector('body');
  let header = document.querySelector('header').children[0]
  header.classList.toggle('noDisplay');
  body.classList.toggle('no-overflow');
  mobileNav.classList.toggle('noDisplay');
}

//function for email validation
function emailValidation(){
  document.querySelector('.newsletter-submit').addEventListener('click',(event)=>{
    let emailInput = event.currentTarget.parentElement.firstElementChild.firstElementChild
    if( validator.isEmail(emailInput.value) && !(emailInput.value==='') ){
      window.location.href = '/';
    }
    else{
      let emailErrMsg = document.querySelector('.email-error')
      emailErrMsg.classList.toggle('show')
      emailInput.value = ''
      setTimeout(()=>{emailErrMsg.classList.toggle('show')},1000)
    }
  })
}emailValidation()

