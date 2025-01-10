let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");  
    menu.classList.toggle('move');
};

window.onscroll = () =>{
  navbar.classList.remove("open-menu");  
  menu.classList.remove('move');
}

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, 
  });

  function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == ""|| email.value == "" || msg.value == "") {
        emptyerror();
      } else {
        sendmail(name.value, email.value, msg.value);
        success();
    }
  });
}
validate();   



function sendmail(name,email,msg){
  emailjs.send("service_n8rw3qs","template_wuccx3h",{
    to_name: name,
    from_name: email,
    message: msg,
    });
}


function emptyerror() {
  swal("Oh No...", "Fields cannot be empty!", "error", {
  });
}

function success() {
  swal("Email sent Successfully", "I will try to reply in less than 24 hours", "Success", {
  });
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 0);
});

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});