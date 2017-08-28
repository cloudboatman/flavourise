$(document).ready(function(){

  jQuery.ajaxSettings.traditional = true;
  // Declare search terms array.
  var searchParams = [];

  // When user enters an ingredient, display it underneath.
  $('.flavour-form').submit(function (event){
    event.preventDefault();
    var item = $('.flavour-form-input').val().toLowerCase();
    // Push search to array
    if (searchParams.indexOf(item) < 0) {
      searchParams.push(item)
      updateResults();
      var listItem = $('<li></li>').addClass('search-item'),
          button = $('<button></button>').addClass('close-button'),
          span = $('<span></span>').addClass('search-item-name').html(item);
      $(listItem).append(span);
      $(span).after(button);
      $(listItem).appendTo('ul#search-terms');
    } else {
      alert('You\'ve already got that one!');
    }
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
        displayResults(res)
      }
    });
  };

  function displayResults(res) {

    var resultList = $('<ul></ul>').addClass('resultList')

    // iterate over the flavour keys in the response
    Object.keys(res).forEach(function(key, index) {
      var flavour = key,
          matchArr = res[key],
          matchEl = $('<li></li>').addClass('matchArray'),
          matchList = $('<ul></ul>').addClass('matchList');

      $(matchEl).append(matchList);
      $(resultList).append(matchEl);

      // iterate over the array of matches
      matchArr.forEach(function(item, i) {
        var itemEl = $('<li></li>').html(item).addClass('itemEl');
        $(itemEl).appendTo(matchList);
      });
    });
    // Display the whole ul > li > ul > li to the results div
    $('.result-title').html("Matching flavours: ");
    $('#results').html(resultList);
  };


});
