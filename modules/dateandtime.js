import { DateTime } from '../node_modules/luxon/src/luxon.js';

export function dateandtime() {
  const date = document.getElementById('dateTime');
  const dt = DateTime.now();
  date.innerHTML = `${dt}`;
}

setInterval(dateandtime, 1000);
