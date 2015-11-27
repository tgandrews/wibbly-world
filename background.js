const SQUIGGLY_HTML = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="squiggly-0">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
      <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-1">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
    <filter id="squiggly-2">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-3">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
    <filter id="squiggly-4">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
  </defs>
</svg>`;

function addSquigglies() {
  var placeholder = document.createElement('div');
  document.body.appendChild(placeholder);
  placeholder.outerHTML = SQUIGGLY_HTML;
}

const stringifiedJS = `(${addSquigglies.toString()}())`;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: stringifiedJS,
  });
  chrome.tabs.insertCSS({
    code: stringifiedCSS,
  });
});
