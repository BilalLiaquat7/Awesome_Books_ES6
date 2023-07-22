import { DateTime } from '../node_modules/luxon/src/luxon.js';

export function dateandtime() {
  const displayDate = document.getElementById('displayDate');
  const dt = DateTime.now();
  displayDate.innerHTML = `${dt}`;
}

setInterval(dateandtime, 1000);
