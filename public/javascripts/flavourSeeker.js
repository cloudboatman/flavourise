$(document).ready(function(){
  var searchParams = [];
  $('.flavour-form').submit(function (event){
    event.preventDefault();
    var item = $('.flavour-form-input').val();
    console.log(item);
    searchParams.push(item);
    $('.search-terms')
        .append('<button></button>')
        .addClass('search-item')
        .text(item);
    $('.flavour-form-input').val('');
    $('.flavour-form-input').focus();
    console.log(searchParams);
    $('.')
  })
  // Display results of input in results div
  // Push previous search to array
  // Repeat process with second search
  // Add section to results div showing combined flavour matches


});
