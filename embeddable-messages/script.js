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
    delete window[GLOBALCALLBACKNAME];
  };
  // Insert a script tag into the DOM with the URL + callback=GLOBALCALLBACKNAME
  // document.createElement('script')
  require(url + '?callback=' + GLOBALCALLBACKNAME);
};
function showTwit(messageId) { 
  var messageId = 13357309; // delete when passing in from HTML
  var frame = document.createElement("iframe");
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
    document.getElementsByClassName('embedded_st-username')[0].innerHTML = messageInfo.message.user.username;
    document.getElementsByClassName('embedded_st-dateline')[0].innerText = months[date.getMonth()] + ' ' + date.getDate() + ' at ' 
      + hours + ':' + date.getMinutes() + ' ' + amOrPm;
    document.getElementsByClassName('embedded_st-entry-title')[0].innerHTML =  messageInfo.message.body;
    document.getElementsByClassName('embedded_st-avatar')[0].innerHTML = '<img src="' + messageInfo.message.user.avatar_url +'"/>';
  });
}
// Expose under namespace
_ST.showTwit = showTwit;

}()); 
