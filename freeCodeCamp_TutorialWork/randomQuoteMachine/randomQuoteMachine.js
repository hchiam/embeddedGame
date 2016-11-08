/* A simple example of:
 * 1) call API using http url with parameters,
 * 2) get JSON data reply to parse JSON data fields, and
 * 3) output to html element text.
 */
function getNewQuote() {
  // call API using http url with parameters (e.g.: lang=en):
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(json){
    // get JSON data fields (e.g.: {"quoteText":"...", ...}):
    var quote = json.quoteText;
    var author = json.quoteAuthor;
    // output to html element text (e.g.: put a quote into <p id="quote">...</p>):
    document.getElementById('quote').innerHTML = " " + quote;
    if (!author) {
      author = "(author unknown)"
    }
    document.getElementById('author').innerHTML = "- " + author;
  });
}