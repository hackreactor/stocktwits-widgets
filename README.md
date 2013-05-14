# StockTwits Widgets

## Overview

StockTwits contracted Alex Paley, Blake Embrey, Selby Walker, and
Andrew Ha to implement Share, Follow, Mention, and Message buttons as well
as embeddable messages.

Embeddable messages were designed to allow bloggers and members of the
media to easily embed StockTwits messages in their articles and posts and
copy code from a StockTwits message to paste into their CMS.

The StockTwits buttons were designed to function similarly to the Facebook and
Twitter buttons which are already widely used. These buttons will make media
content more interactive and more deeply integrated with StockTwits.

## Technical Challenges
1. **Lightweight**: these embeddable widgets had to be extremly lightweight so
   no large libraries like jQuery, Underscore, etc. could be used.
2. **Browser Compatability**: these widgets support all major browsers including
   Chrome, Safari, Firefox, Opera and >=IE7. Supporting IE7 was particularly
   challenging provided its lack of support for common DOM selection techniques
   (e.g. `findElementsByClassName()`).
3. **Resizing iFrames**: we used easyXDM to accomplish this.
4. **Caching Share Pages**: we cached how many times a page was shared to prevent
   unnecessary calls to StockTwits' API.
5. **Cross-Domain Post Requests in IE7**: In order to support IE7, we POST to an
   iFrame in order to do cross-domain POST requests without the use of CORS.

Feel free to check out the final product at: [(hackreactor.github.io/stocktwits-widgets)]
