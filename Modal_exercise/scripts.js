var modalTriggerElements = document.querySelectorAll('.modal-link');
var modalCloseElements = document.querySelectorAll('.modal-close-btn');

modalTriggerElements.forEach(function(element) {
  element.addEventListener('click', function(e) {

    var modalContainerId = element.getAttribute('data-modal-target');
    var modalContainer = document.querySelector("#" + modalContainerId);
    modalContainer.classList.add('active');

    modalContainer.addEventListener('click', function(){
        var activeModalElements = document.querySelectorAll('.modal-container.active');
        
        activeModalElements.forEach(function(element){
        element.classList.remove('active');
        });
    });
  });
});

modalCloseElements.forEach(function(element) {
  element.addEventListener('click', function(e) {

    var modalContainer = element.closest('.modal-container'); 
    modalContainer.classList.remove('active');
  });
});


    


// // First modal method 
// // Get the modal
// var modal = document.getElementById('modal1Target');

// // Get the button that opens the modal
// var btn = document.querySelector(".modal-link");

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
// modal.classList.add('active');
// }


// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("modal-close-btn")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }