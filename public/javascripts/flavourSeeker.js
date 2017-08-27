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
    console.log('searchParams open', searchParams);
  });

  // When user clicks X on a search term, remove it and update
  $(document).on("click", "button.close-button", function() {
    console.log('searchParams beginning of close', searchParams);
    var item = $(this).siblings('span').text();
    itemInd = searchParams.indexOf(item);
    searchParams.splice(itemInd, 1);
    // updateResults();
    var parentItem = $(this).closest('li');
    $(parentItem).remove();
    console.log('searchParams end of close', searchParams);
  });

  function updateResults() {
    $.post('/flavours/' + $.param({searchParams}), function(err, res) {
      if(err) throw err;
      console.log(res);
    });
  };

});
