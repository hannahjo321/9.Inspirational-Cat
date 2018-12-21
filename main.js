$("#quoteBtn").click(function(){
  $('#imageArea').html('');
  $('#header').html('');
  var url = "http://quotes.rest/qod.json";
  $.getJSON(url, function(data){
    $('#header').append('<div id="quote">'+ data.contents.quotes[0].quote +'</div>' )
    console.log(data.contents.quotes[0].quote)
  });

var pic = 'https://contextualwebsearch-search-image-v1.p.mashape.com/api/Search/ImageSearchAPI?autocorrect=true&count=3&q=' + $('#picInput').val();

$.ajax({
  url: pic,
  headers: {
    'X-Mashape-Key' : 'E8rkfKSrjFmshNXKQmc36crp2fx2p1F6NDjjsnu4r1yoKx0z0n',
    'X-Mashape-Host' : 'contextualwebsearch-websearch-v1.p.mashape.com'
  },
  success: function(data){
    $('#imageArea').append('<img class="images" src="' + data.value[0].url + '" />');
    // $('#imageArea').append('<img class="images" src="' + data.value[1].url + '" />');
    // $('#imageArea').append('<img class="images" src="' + data.value[2].url + '" />');
    console.log(data);
  }
});
});
