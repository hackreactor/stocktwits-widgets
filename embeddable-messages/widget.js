var messageID = parseInt(document.getElementById('stocktwit-twit').className);
var html = '<iframe class="stocktwit-twit-rendered" scrolling="no" frameborder="0" allowtransparency="true"'
          + ' style="display: block; border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238) '
          + 'rgb(221, 221, 221) rgb(187, 187, 187); max-width: 99%; min-width: 220px; padding: 0px; border-top-left-radius: '
          + '5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; margin: 10px '
          + '0px; box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 3px;" title="Embedded Tweet" width="500" height="186"></iframe>'

          + '<div class="embedded_st-header"><div class="embedded_st-dateline"></div>'
          + '<div class="embedded_st-avatar"></div><div class="embedded_st-username"></div>'
          + '</div><div class="embedded_st-entry-content"><p class="embedded_st-entry-title"></p>'
          + '</div><div class="embedded_st-footer"><span class="embedded_st-stats">'
          + '<span class="embedded_st-stats-comments"></span></span><ul class="embedded_st-actions">'
          + '<li><a href="#" class="embedded_st-like-action">Like</a></li><li>'
          + '<a href="#" class="embedded_st-share-action">Share</a></li><li>'
          + '<a href="#" class="embedded_st-reply-action">Reply</a></li></ul></div>'
          
document.body.innerHTML = html;

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
    delete window[GLOBALCALLBACKNAME];
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
  var frame = document.createElement("iframe");

  // Find the last element in the DOM
  // Insert an iframe after it
  // Setup the iframe document with html element and remove border and creat size
  // Set up document inside iframe, css-document.write
  // WARNING: inserting style tags does not work for IE
  // Set iframe's body element's HTML to your template
  // After the response is recieved, you need to query the iframe (using 
  // getElementByTagName), find the places where info goes, and use innerText

  JSONP("https://api.stocktwits.com/api/2/messages/show/" + messageId + ".json", function(messageInfo){
    var date = new Date(messageInfo.message.created_at);
    var amOrPm = date.getHours() > 11 ? 'PM' : 'AM';
    var hours = date.getHours();
    if(amOrPm == 'AM'){
      if(hours === 0) {
        hours = 12;
      }
    } else {
      hours = hours - 12;
    }

    var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    //inner text cross browser to avoid XSS .innerText
    $('.embedded_st-username').html(messageInfo.message.user.username);
    $('.embedded_st-dateline').html(months[date.getMonth()] + ' ' + date.getDate() + ' at ' 
      + hours + ':' + date.getMinutes() + ' ' + amOrPm);
    $('.embedded_st-entry-title').html(messageInfo.message.body);
    $('.embedded_st-avatar').html('<img src="' + messageInfo.message.user.avatar_url +'"/>');
  });
}

showTwit(messageID);