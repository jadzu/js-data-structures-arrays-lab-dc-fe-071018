// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop();
}

function appendDriver(name) {
  return [...drivers, name];
}
