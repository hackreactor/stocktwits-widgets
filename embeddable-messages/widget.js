(function(){

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

	var createMessage = function(element){
		var messageID = parseInt(element.getAttribute('data-id'));
		var iframe = document.createElement('iframe');
		iframe.class = 'stocktwit-twit-rendered';
		iframe.src = 'embeddable-messages/index.html?messageID=' + messageID;
		iframe.scrolling = 'no';
		iframe.setAttribute('frameborder',       0);
    iframe.setAttribute('allowtransparency', 'true');
		iframe.style.display = 'block'; 
		iframe.style.border = '1px solid';
		iframe.style.borderColor = '#eee #ddd #bbb';
		iframe.style.maxWidth = '99%';
		iframe.style.minWidth = '220px';
		iframe.style.borderRadius = '5px';
		iframe.style.margin = '10px';
		iframe.style.boxShadow = 'rgba(0, 0, 0, 0.14902) 0px 1px 3px';
		iframe.title = 'Embedded Tweet';
		iframe.width = '500';
		iframe.height = '150';
		element.parentNode.replaceChild(iframe, element);
	};
  var elements = getElementsByClassName('stocktwit-twit');

  for (var i = 0; i < elements.length; i++) {
    createMessage(elements[i]);
  }
})();