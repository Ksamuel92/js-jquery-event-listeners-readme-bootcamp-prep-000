//define functions here
function getIt () {
  $('p').on('click', function() {
    alert('Hey!');
  });
}
// Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
function frameIt () {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt () {
  $('#typing').on('keydown', function (key){
    if(key.which == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});
