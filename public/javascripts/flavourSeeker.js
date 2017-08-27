$(document).ready(function(){

  jQuery.ajaxSettings.traditional = true;
  // Declare search terms array.
  var searchParams = [];

  // When user enters an ingredient, display it underneath.
  $('.flavour-form').submit(function (event){
    event.preventDefault();
    var item = $('.flavour-form-input').val();
    // Push search to array
    searchParams.push(item);
    updateResults();
    var listItem = $('<li></li>').addClass('search-item'),
        button = $('<button></button>').addClass('close-button'),
        span = $('<span></span>').addClass('search-item-name').html(item);

    $(listItem).append(span);
    $(span).after(button);
    $(listItem).appendTo('ul#search-terms');

    $('.flavour-form-input').val('');
    $('.flavour-form-input').focus();
  });

  // When user clicks X on a search term, remove it and update
  $(document).on("click", "button.close-button", function() {
    var item = $(this).siblings('span').text();
    itemInd = searchParams.indexOf(item);
    searchParams.splice(itemInd, 1);
    // updateResults();
    var parentItem = $(this).closest('li');
    $(parentItem).remove();
  });

  function updateResults() {
    var data = {};
    data.flavours = searchParams;
    $.ajax({
      url: '/flavours',
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function(res) {
        console.log(res);
      }
    });
  };

});
