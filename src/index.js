import numeral from 'numeral';
import './index.css';

const starterValue = numeral(1000).format('$0,0.00');

// back ticks to parse variables inside
// debugger;
console.log(`I would pay ${starterValue} for this awesome starter pack!`);
