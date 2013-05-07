(function(){

	var createMessage = function(element){
		var messageID = parseInt(element.id);
		var html = '<iframe class="stocktwit-twit-rendered" src="embeddable-messages/index.html?messageID=' + messageID + '" scrolling="no" frameborder="0" allowtransparency="true"'
		          + ' style="display: block; border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238) '
		          + 'rgb(221, 221, 221) rgb(187, 187, 187); max-width: 99%; min-width: 220px; padding: 0px; border-top-left-radius: '
		          + '5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; margin: 10px '
		          + '0px; box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 3px;" title="Embedded Tweet" width="500" height="150"></iframe>';
			element.innerHTML = html;
	};
  var elements = document.getElementsByClassName('stocktwit-twit');

  for (var i = 0; i < elements.length; i++) {
    createMessage(elements[i]);
  }
})();
