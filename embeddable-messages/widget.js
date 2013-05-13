/* global easyXDM */
(function () {

  var __slice = function (object, from) {
    return Array.prototype.slice.call(object, from || 0);
  };

  var getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  var getElementsByClassName; // Function to get class names

  if (document.getElementsByClassName) {
    getElementsByClassName = function (className) {
      return __slice(document.getElementsByClassName(className));
    };
  } else {
    getElementsByClassName = function (className) {
      var found    = [],
          regex    = new RegExp('(^| )' + className + '($| )'),
          elements = document.getElementsByTagName('*');
      for (var i = 0; i < elements.length; i++) {
        if (regex.test(elements[i].className)) {
          found.push(elements[i]);
        }
      }
      return found;
    };
  }

  var createMessage = function (element) {
    var messageId = parseInt(element.getAttribute('data-id'));
    var username = element.getAttribute('data-username');
    var message = element.getElementsByClassName('message')[0].innerText;

    new easyXDM.Socket({
      remote: 'embeddable-messages/index.html?messageID=' + messageId + '&username=' + username + '&message=' + message,
      container: element,
      onMessage: function (height) {
        iframe.height = height;
      },
      onReady: function () {
        this.container = iframe; // This is kind of screwed up
      }
    });

    // This is kind of messed up, but we basically promote the easyXDM iframe
    // up the dom and apply styling
    var iframe = element.getElementsByTagName('iframe')[0];

    iframe.scrolling          = 'no';
    iframe.style.display      = 'block';
    iframe.style.border       = '1px solid';
    iframe.style.borderColor  = '#eee #ddd #bbb';
    iframe.style.maxWidth     = '99%';
    iframe.style.minWidth     = '220px';
    iframe.style.borderRadius = '5px';
    iframe.style.margin       = '10px';
    iframe.style.boxShadow    = 'rgba(0, 0, 0, 0.15) 0px 1px 3px';
    iframe.width              = '500';
    iframe.height             = '140';
    iframe.setAttribute('frameborder',       0);
    iframe.setAttribute('allowtransparency', 'true');

    element.parentNode.replaceChild(iframe, element);
  };

  var elements = getElementsByClassName('stocktwit-twit');

  for (var i = 0; i < elements.length; i++) {
    createMessage(elements[i]);
  }
})();
