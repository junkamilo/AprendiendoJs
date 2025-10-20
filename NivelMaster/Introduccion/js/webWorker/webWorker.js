//web worker es un ayudente secundario que puede ayudar en otras operaciones sin trabar la interfaz princiapl del main, puede ser usado con calculas etc.

const worker = new Worker("worker.js");

console.log(worker);
