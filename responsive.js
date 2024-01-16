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

var sidemenu = document.getElementById("sidemenu")



function openmenu(){
    sidemenu.style.right = "0";
    }


function closemenu(){
    sidemenu.style.right = "-300px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyauCt1gKL72N1NLZLm8jMIBIxnWlc6qVVsKkizVXLN2lCKgHarLgE4wg54IA7HCBqhAg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })