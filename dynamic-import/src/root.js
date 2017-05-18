document.body.innerHTML += 'Executed root.js<br/>';

import('./dep1.js');

setTimeout(() => {
  import('./dep2.js');
}, 3000);