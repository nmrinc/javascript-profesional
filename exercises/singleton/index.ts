import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('====================================');
console.log('A is equal to b?', a === b);
console.log('====================================');