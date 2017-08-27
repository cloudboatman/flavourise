$(document).ready(function(){

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
    // $.post('/flavours/:' + searchParams.join('%'), function(data, status) {
    //   console.log(data);
    //   console.log(status);
    //
    // });
    var data = {};
    data.flavours = searchParams;
    $.ajax({
      url: '/flavours',
      type: 'POST',
      data: JSON.stringify(data),
      success: function(res) {
        console.log(res);
      }
    });
  };

});
