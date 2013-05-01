(function() {

var jQuery;

//Load jQuery if not already loaded
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}


function scriptLoadHandler() {
    jQuery = window.jQuery.noConflict(true);
    main(); 
}

function main() { 
    jQuery(document).ready(function($) { 
      var messageId = 13336305;
      jQuery.ajax("https://api.stocktwits.com/api/2/messages/show/" + messageId + ".json").done(function(data){
        var messageInfo = JSON.parse(data);
        $('.name').html()
      }  
    });


    });
}

})(); 