// Notes:

// try it out:  http://developer.nytimes.com/article_search_v2.json#/Console/GET/articlesearch.json
// documentation:  http://developer.nytimes.com/article_search_v2.json#/Documentation


// The following code was automatically generated on the nytimes developer website:

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "abc123"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});