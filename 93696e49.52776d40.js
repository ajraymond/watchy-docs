(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(102)),o={id:"create-watchface",title:"Create Your Own Watch Face",sidebar_label:"Create Your Own Watch Face",slug:"/create-watchface"},c={unversionedId:"create-watchface",id:"create-watchface",isDocsHomePage:!1,title:"Create Your Own Watch Face",description:"The Watchy library makes it easy to create your own custom watch face, we've provided a few examples that all use the same template.",source:"@site/docs/create-watchface.md",slug:"/create-watchface",permalink:"/docs/create-watchface",editUrl:"https://github.com/sqfmi/watchy-docs/edit/main/docs/create-watchface.md",version:"current",sidebar_label:"Create Your Own Watch Face",sidebar:"docs",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"Battery Life",permalink:"/docs/battery-life"}},l=[{value:"Basics",id:"basics",children:[{value:"Displaying Images/Icons",id:"displaying-imagesicons",children:[]},{value:"Using Fonts",id:"using-fonts",children:[]},{value:"Share Your Watch Face!",id:"share-your-watch-face",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Watchy library makes it easy to create your own custom watch face, we've provided a few examples that all use the same template."),Object(i.b)("h2",{id:"basics"},"Basics"),Object(i.b)("p",null,"To create a basic watch face, you need to simply override the ",Object(i.b)("inlineCode",{parentName:"p"},"drawWatchFace()")," method with your custom code, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:'title="myFirstWatchFace.ino"',title:'"myFirstWatchFace.ino"'}),'#include <Watchy.h> //include the Watchy library\n#include <Fonts/FreeMonoOblique24pt7b.h> //include any fonts you want to use\n#include "settings.h" //same file as the one from 7_SEG example\n\nclass MyFirstWatchFace : public Watchy{ //inherit and extend Watchy class\n    public:\n        MyFirstWatchFace(const watchySettings& s) : Watchy(s) {}\n        void drawWatchFace(){ //override this method to customize how the watch face looks\n          display.setFont(&FreeMonoOblique24pt7b);\n          display.setCursor(25, 110);\n          if(currentTime.Hour < 10){ //use the currentTime struct to print latest time\n            display.print("0");\n          }\n          display.print(currentTime.Hour);\n          display.print(":");\n          if(currentTime.Minute < 10){\n            display.print("0");\n          }  \n          display.println(currentTime.Minute);   \n        }\n};\n\nMyFirstWatchFace m(settings); //instantiate your watchface\n\nvoid setup() {\n  m.init(); //call init in setup\n}\n\nvoid loop() {\n  // this should never run, Watchy deep sleeps after init();\n}\n')),Object(i.b)("h3",{id:"displaying-imagesicons"},"Displaying Images/Icons"),Object(i.b)("p",null,"Since the E-Paper display is black and white only, you will need to convert any images/icons you wish to display into black and white first.\nThe image then needs to be converted into a byte array, and stored in Watchy's flash."),Object(i.b)("h4",{id:"convert-image-to-byte-array-image2cpp"},"Convert image to byte array (image2cpp)"),Object(i.b)("p",null,"You can convert your images to byte arrays using the web tool ",Object(i.b)("ins",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://javl.github.io/image2cpp/"}),Object(i.b)("strong",{parentName:"a"},"image2cpp")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload your image and play around with the settings. If your image is already in black and white then you can just leave the brightness threshold  to default, otherwise if it's in color, you can play with that setting to get the image to look right under preview.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Code Output format")," option, select ",Object(i.b)("em",{parentName:"p"},"Arduino code"),", give it a name under ",Object(i.b)("em",{parentName:"p"},"identifier")," and click ",Object(i.b)("strong",{parentName:"p"},"Generate code"),". Copy the contents in the textarea and paste it in a ",Object(i.b)("inlineCode",{parentName:"p"},"*.h")," file in the same directory as your Arduino sketch.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In your watch face file e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"myFirstWatchFace.ino"),", include that header file e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'#include "myImage.h"'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"display.drawBitmap(x_origin, y_origin, imageByteArrayName, width, height, color)")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"drawWatchFace()")," method to display your image. The order of these draw/print statements matter, so if you call ",Object(i.b)("inlineCode",{parentName:"p"},"display.drawBitmap()")," first, followed by ",Object(i.b)("inlineCode",{parentName:"p"},'display.println("Hello World!")'),", the text will be on top of the image."))),Object(i.b)("h3",{id:"using-fonts"},"Using Fonts"),Object(i.b)("p",null,"You can use custom fonts by converting them first with the tool ",Object(i.b)("ins",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rop.nl/truetype2gfx/"}),Object(i.b)("strong",{parentName:"a"},"truetype2gfx")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload your font of choice and set the font size. Click ",Object(i.b)("strong",{parentName:"p"},"Get GFX font file")," to download the font file e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Seven_Segment10pt7b.h"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In your watch face file e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"myFirstWatchFace.ino"),", include that header file e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'#include "Seven_Segment10pt7b.h"'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"display.setFont(&Seven_Segment10pt7b)")," to set the current font face (don't forget the ampersand before the font name). You will have to call the ",Object(i.b)("inlineCode",{parentName:"p"},"display.setFont()")," method each time you wish to use another font. Use ",Object(i.b)("inlineCode",{parentName:"p"},"display.setCursor(x, y)")," to set where to start printing text, the coordinates refer to the ",Object(i.b)("em",{parentName:"p"},"lower left corner")," of the text to be printed."))),Object(i.b)("h3",{id:"share-your-watch-face"},"Share Your Watch Face!"),Object(i.b)("p",null,"We'd love to see what you've created! Share your watch face with us and we'll post it on our gallery:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure you have a GitHub repo with the source code, and a 200x200 screenshot of the watch face (must be a black and white ","*",".bmp or ","*",".gif)"),Object(i.b)("li",{parentName:"ol"},"Add your watch face to the bottom of this ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/sqfmi/watchy-docs/blob/main/src/pages/watchfaces/watchfaces.json"}),Object(i.b)("inlineCode",{parentName:"a"},"json file"))," like so:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'    {\n        "id" : "ID_NUMBER",\n        "name" : "WATCH_FACE_NAME",\n        "author" : "AUTHOR",\n        "screenshot" : "SCREENSHOT_URL",\n        "source" : "GITHUB_URL",\n        "ota_bin" : false,\n        "version" : "VERSION_NUMBER"\n    }  \n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"You may want to check for other PRs so your ID number is the latest"),Object(i.b)("li",{parentName:"ol"},"Submit the PR for review and merge")))}p.isMDXComponent=!0}}]);