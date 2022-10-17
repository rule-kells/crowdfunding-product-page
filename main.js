// nav variables
const header = document.querySelector("header");
const navToggle = document.querySelector(".nav__toggle--container");
// modal variables
const modalBtns = document.querySelectorAll(".btn--modal");
const modalWrapper = document.querySelector(".modal__wrapper");
const closeModal = document.querySelector(".close__modal");
const overlay = document.querySelector(".overlay");
const btnProject = document.querySelector('.btn--project')
// bookmark variables
const bookmarkWrapper = document.querySelector(".bookmark__wrapper");

// pledge modal variables 
const productListing = document.querySelectorAll('input[name="product"]');
const pledgeDropMenu = document.querySelectorAll('.pledge--drop-menu')
const pledgeSelected = document.querySelectorAll(".pledge__selected");
const pledgeBtns = document.querySelectorAll(".pledge__btn");
const pledgeOutOfStock = document.getElementById('mahogany')
// thanks modal 
const overlayThanks = document.querySelector('.overlay--thanks')
const pledgeThanks = document.querySelector('.pledge__thanks')
const thanksBtn = document.querySelector('.thanks--btn')

function displayThanksModal() {
    overlayThanks.classList.add("selected");
    pledgeThanks.classList.add('selected')
    modalWrapper.classList.remove("active");  
}

// nav
navToggle.addEventListener("click", (_) => {
  header.classList.toggle("active");
  console.log("click"); 
});

// modal
modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener("click", (_) => {
    displayThanksModal()
  });
});

btnProject.addEventListener('click', _ => {
  modalWrapper.classList.add("active");
})

closeModal.addEventListener("click", (_) => {
  modalWrapper.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "escape" && !modalWrapper.classList.contains("active"));
  modalWrapper.classList.remove("active");
});

// overlay.addEventListener("click", (e) => {
//   if (!e.target.closest(".modal__wrapper"));
//   modalWrapper.classList.remove("active")
//   e.stopPropagation()
// });

// bookmark
bookmarkWrapper.addEventListener("click", (_) => {
  bookmarkWrapper.classList.toggle("is-selected");
});

for (let i = 0; i < productListing.length; i++) {
   productListing[i].addEventListener("click", (e) => {
     hidePledgeSelected()
     pledgeDropMenu[i].classList.add("is-selected");
     pledgeSelected[i].style.height = `${pledgeSelected[i].scrollHeight}px`
  
  });
  
}

function hidePledgeSelected() {
  for (let i = 0; i < productListing.length; i++) {
    pledgeDropMenu[i].classList.remove("is-selected");
     pledgeSelected[i].style.height = null
  }
}

pledgeOutOfStock.disabled = true;

// create addEventListener that when pledge button clicked it adds a class to remove overlap and modal and adds the thank you overlay and modal (I have it setup to where it navigates you to the HTML for the Thank you section)
pledgeBtns.forEach((pledgeBtn) => {
  pledgeBtn.addEventListener("click", (e) => {
   displayThanksModal()
  });
});


thanksBtn.addEventListener('click', _ => {
  overlayThanks.classList.remove("selected");
  pledgeThanks.classList.remove("selected");
}) 
