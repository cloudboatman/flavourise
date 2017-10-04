$(document).ready(function(){

  jQuery.ajaxSettings.traditional = true;
  // Declare search terms array.
  var searchParams = [];

  // When user enters an ingredient, display it underneath.
  $('.flavour-form').submit(function (event){
    runSearch(event)
  });

  function runSearch(event) {
    event.preventDefault();
    var item = $('.flavour-form-input').val().toLowerCase();
    // Push search to array
    if (searchParams.indexOf(item) < 0) {
      searchParams.push(item)
      updateResults();
      var listItem = $('<li></li>').addClass(`search-item ${item}`),
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
  };

  // When user clicks X on a search term, remove it and update
  $(document).on("click", "button.close-button", function() {
    var item = $(this).siblings('span').text();
    itemInd = searchParams.indexOf(item);
    searchParams.splice(itemInd, 1);
    updateResults();
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
    if (res.length < 1) {
      // If no results remove last searched item from searchParams and search item list
      var item = '.' + searchParams[searchParams.length - 1];
      searchParams.pop();
      var li = document.querySelector(item);
      li.parentNode.removeChild(li);
      alert('This combination/flavour returned no results, try again!');
    } else {
      var resultList = $('<ul></ul>').addClass('resultList');

      // Iterate through the res array and append them to the resultList
      for (i = 0; i < res.length; i++) {
        var itemEl = $('<li></li>').html(res[i]).addClass('itemEl');
        $(itemEl).appendTo(resultList);
      }

      // Display the whole ul > li > ul > li to the results div
      $('.result-title').html("Matching flavours: ");
      $('#results').html(resultList);
    }
  };

  // Turn the search results into searchable terms
  $(document).on("click", ".itemEl", function(event) {
    // Take the text from the itemEl and put into variable
    var searchItem = $(this).text();
    // Make the input box equal to itemEl and submit
    $('.flavour-form-input').val(searchItem);
    runSearch(event);
  });

});
