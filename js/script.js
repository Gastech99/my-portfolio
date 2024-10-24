let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const typed = new Typed(".text", {
  strings: ["SysAdmin", "FullStack Developer"],
  typeSpeed: 90,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Gérer l'envoi des mails par EmailJs

function sendMail() {
  // (function () {
  //   // Initialise EmailJS avec ton User ID
  //   emailjs.init("rgplkyzaAudtoCWpk");
  // })();

  // Récupère les valeurs des champs
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_mhckz07", "template_nkwxly6", params)
    .then((res) => {
      alert("Email sent successfully");
    })
    .catch();
}
