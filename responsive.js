var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")


function opentab(tabname){
    for(var tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }

    for(var tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")

    document.getElementById(tabname).classList.add("active-tab")

}

var sidemenu = document.getElementById("sidemenu");
var menuItems = document.querySelectorAll('nav li a[href*="#"]');




for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(){
        sidemenu.style.right = null;       //here we wanna get only the element we 
    }                           //click on, if we use menuItem again,             
}                               //the element we get will be the result after the for loop has run
                                //which is the last element in the nodeList, that's why we wanna use this
function openmenu(){
    sidemenu.style.right = "0";
    }


function closemenu(){
    sidemenu.style.right = "-300px";
}

const navBar = document.querySelector('nav')
const logo = document.querySelector('.logo')

const mobileMenu = document.querySelector('.mobileMenu')
console.log(mobileMenu)

const navBarHeight = navBar.offsetHeight
const logoHeight = logo.offsetHeight

const logoWidth = logo.offsetWidth






document.onscroll = function(){
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const adjustedScrollTop = scrollTop / 10
    // const adjustedScrollTopForLogo = scrollTop / 100
    const newNavBarHeight = navBarHeight - adjustedScrollTop    

    const newLogoHeight = logoHeight - adjustedScrollTop
    const newLogoWidth = logoWidth - adjustedScrollTop

    navBar.style.height = newNavBarHeight + 'px'
    logo.style.height = newLogoHeight + 'px'
    logo.style.width = newLogoWidth + 'px'

    
    // mobileMenu.classList.remove("disappear")



}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyauCt1gKL72N1NLZLm8jMIBIxnWlc6qVVsKkizVXLN2lCKgHarLgE4wg54IA7HCBqhAg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector(".modal")
  const closeBtn = document.querySelector("#modal-close");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.classList.add("open");
        setTimeout(function(){
            msg.classList.remove("open");
        }, 10000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })

  closeBtn.onclick = function(){
    msg.classList.remove("open");
  }