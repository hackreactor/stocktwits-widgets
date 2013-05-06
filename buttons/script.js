(function (attributes) {
  var generateQueryString = function (query) {
    var string = '';
    for (var key in query) {
      if (!query.hasOwnProperty(key) || !query[key]) { continue; }
      if (string) { string += '&'; }
      string += encodeURI(key) + '=' + encodeURIComponent(query[key]);
    }
    return string;
  };

  var createButton = function (anchor) {
    var iframe = document.createElement('iframe'),
        query  = {};

    for (var i = 0; i < attributes.length; i++) {
      query[attributes[i]] = anchor.getAttribute('data-' + attributes[i]);
    }

    var queryString = generateQueryString(query);

    iframe.src       = 'buttons/index.html?' + queryString;
    iframe.scrolling = 0;
    iframe.width     = 180;
    iframe.height    = 20;
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('frameborder', 0);

    console.log(iframe);
  };

  var anchors = document.getElementsByClassName('stocktwits-share-button');

  for (var i=0; i<anchors.length; i++) {
    createButton(anchors[i]);
  }

})(['follow', 'mention', 'cashtag']);
