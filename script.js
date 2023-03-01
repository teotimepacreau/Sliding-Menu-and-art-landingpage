console.log('connecté !');

const navButton = document.getElementById('navbutton');
console.log(navButton);

const modal = document.querySelector('.modal');
console.log(modal);

navButton.addEventListener('click', function(){
    console.log("icone cliquée");
    modal.classList.toggle('appear');
    navButton.classList.toggle('fa-circle-xmark');
})