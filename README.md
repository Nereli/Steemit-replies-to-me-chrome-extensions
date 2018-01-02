# Steemit-replies-to-me-chrome-extensions
Steemit replies to me chrome extensions

Hello
I wrote an extension for chrome, one of the most popular browsers for you. Extension purpose;

With Chrome extensions replies to me you can see the latest answers written to you. You can view the last comments, user name and date by simply clicking on the extension's icon without opening the extension's intended web page.

<b>manifest.json:</b>
We are writing general information about Plugin Name, Description, Version, Logotype and permissions.

<b>Steemit.html:</b>
We are preparing the page that will be opened when we click on the log on the top right of Chrome browser.

<b>Extension.js:</b>

<b>localStorage['SteemitContents']</b> => We store all "replies to me".
<b>$.get("http://steemit.com",function (Sources)</b> => We connect to steemit.com. We are transferring the incoming result into the sources.

<b>var UserName = $(Sources).find('.c-sidebar__link').attr('href');</b> => We find the username.
<b>var Url = 'https://steemit.com' + UserName + '/recent-replies';</b> => We create the URL link address.

<b>$.get(Url,function (Source) {</b> => We connect to the URL link. We are transferring the incoming result into the sources.
<b>$(Source).find(".articles__summary").each(function(Key, Value) {</b> => We loop through all "replies to me" and transfer them to localStorage ['SteemitContents'].

<b>setInterval(function(){ Check(); },55000);</b> => We check every 55 seconds for new content.

