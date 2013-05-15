(function (attributes) {
  var __slice = function (object, from) {
    return Array.prototype.slice.call(object, from || 0);
  };

  var getElementsByClassName; // Function to get elements by class names

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

  var generateQueryString = function (query) {
    var string = '';
    for (var key in query) {
      if (!query.hasOwnProperty(key) || !query[key]) { continue; }
      if (string) { string += '&'; }
      string += encodeURI(key) + '=' + encodeURIComponent(query[key]);
    }
    return string;
  };

  var createButton = function (element) {
    var iframe = document.createElement('iframe'),
        query  = {};

    for (var i = 0; i < attributes.length; i++) {
      query[attributes[i]] = element.getAttribute('data-' + attributes[i]);
    }

    // Page information
    query.pageUrl   = window.location.href;
    query.pageTitle = document.title;

    iframe.scrolling    = 'no';
    iframe.style.width  = '180px';
    iframe.style.height = '20px';
    iframe.style.border = '0';
    iframe.setAttribute('src', 'http://hackreactor.github.io/stocktwits-widgets/buttons/index.html?' + generateQueryString(query));
    iframe.setAttribute('border', '0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');

    element.parentNode.replaceChild(iframe, element);
  };

  var elements = getElementsByClassName('stocktwits-share-button');

  for (var i = 0; i < elements.length; i++) {
    createButton(elements[i]);
  }

})(['follow', 'mention', 'cashtag', 'count', 'show-user']);
