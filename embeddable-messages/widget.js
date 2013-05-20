/* global easyXDM */
(function () {

  var __slice = function (object, from) {
    return Array.prototype.slice.call(object, from || 0);
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
    var messageId   = parseInt(element.getAttribute('data-id'), 10),
        caughtError = false,
        iframe;

    new easyXDM.Socket({
      swf: 'http://hackreactor.github.io/stocktwits-widgets/easyXDM/easyxdm.swf',
      remoteHelper: 'http://hackreactor.github.io/stocktwits-widgets/easyXDM/name.html',
      remote: 'http://hackreactor.github.io/stocktwits-widgets/embeddable-messages/index.html?messageID=' + messageId,
      container: element,
      props: {
        width:  500,
        height: 140,
        style: {
          display:      'block',
          border:       '1px solid',
          borderColor:  '#eee #ddd #bbb',
          maxWidth:     '99%',
          minWidth:     '220px',
          borderRadius: '5px',
          margin:       '10px',
          boxShadow:    'rgba(0, 0, 0, 0.15) 0px 1px 3px'
        },
        border: '0',
        scrolling: 'no',
        frameBorder: '0',
        allowtransparency: 'true'
      },
      onMessage: function (height) {
        iframe.height = height;
      },
      onReady: function () {
        // IE8 seems to work if I grab the iframe from onReady
        if (!caughtError) { return; }

        iframe = this.container.getElementsByTagName('iframe')[0];
        element.parentNode.replaceChild(iframe, element);
      }
    });

    try {
      iframe = element.getElementsByTagName('iframe')[0];
      element.parentNode.replaceChild(iframe, element);
    } catch (e) {
      caughtError = true;
    }
  };

  var elements = getElementsByClassName('stocktwit-twit');

  for (var i = 0; i < elements.length; i++) {
    createMessage(elements[i]);
  }
})();
