var _ST = _ST || {};

(function() {

function require(src) {
  var doc = document.documentElement;
  var script = document.createElement('script');
  script.src = src;
  doc.removeChild(doc.insertBefore(script, doc.firstChild));
};

var JSONP = function(url, callback) {
  var GLOBALCALLBACKNAME = 'st_' + Date.now() + '_' + Math.floor(Math.random()*100);
  window[GLOBALCALLBACKNAME] = function(data){
    callback(data);
    //clear timeout
    };
  // Insert a script tag into the DOM with the URL + callback=GLOBALCALLBACKNAME
    // document.createElement('script')

  require(url + '?callback=' + GLOBALCALLBACKNAME);

  // append to head

  // Optional: Set a timeout for X seconds to "abort" the request
    // var myTimeout = setTimeout(func, 1000);
  // Clean the timeout (if you did that)
    // clearTimeout(myTimeout);
};


function showTwit(messageId) { 
  var messageId = 13337309; // delete when passing in from HTML
  var frame = document.createElement("iframe");

  // Find the last element in the DOM
  // Insert an iframe after it
  // Setup the iframe document with html element and remove border and creat size
  // Set up document inside iframe, css-document.write
  // WARNING: inserting style tags does not work for IE
  // Set iframe's body element's HTML to your template
  // After the response is recieved, you need to query the iframe (using getElementByTagName), find the places where info goes, and use innerText

  var template = '<div class="_ST_embed_username"></div>';

  JSONP("https://api.stocktwits.com/api/2/messages/show/" + messageId + ".json", function(messageInfo){
    console.log(messageInfo)
    var date = new Date(messageInfo.message.created_at);
    var amOrPm = date.getHours() > 11 ? 'PM' : 'AM';
    var hours = date.getHours();
    if(amOrPm == 'AM'){
      if(hours == 0) {
        hours = 12;
      }
    } else {
      hours = hours - 12;
    }

    var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    //inner text cross browser to avoid XSS .innerText
    $('.embedded-username').html(messageInfo.message.user.username);
    $('.embedded-dateline').html(months[date.getMonth()] + ' ' + date.getDate() + ' at ' + hours + ':' + date.getMinutes() + ' ' + amOrPm);
    $('.embedded-entry-title').html(messageInfo.message.body);
  });
}
// Expose under namespace
_ST.showTwit = showTwit;

}()); 