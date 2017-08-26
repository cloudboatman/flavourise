$(document).ready(function(){

  // Declare search terms array.
  var searchParams = [];

  // When user enters an ingredient, display it underneath.
  $('.flavour-form').submit(function (event){
    event.preventDefault();
    var item = $('.flavour-form-input').val();
    searchParams.push(item);

    $('<li></li>').addClass('search-item')
                  .text(item)
                  .appendTo('ul#search-terms');
    $('.flavour-form-input').val('');
    $('.flavour-form-input').focus();
  });



  // Push previous search to array


  // Repeat process with second search


  // Add section to results div showing combined flavour matches


});
