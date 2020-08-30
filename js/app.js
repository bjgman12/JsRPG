'use strict';
// globals
var inventory = [];
// character constructor with stats as properties.
function Char(name, health, strength, defense, luck, agility, insight) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.defense = defense;
  this.luck = luck;
  this.agility = agility;
  this.insight = insight;
  this.armor = '';
  this.weapon = '';
  this.isAlive = true;
}
// roll for stats.

// random number functions
function randomNum(max, min) {
  Math.floor(Math.random() * (max - min)) + min + 1;
}

// character create function
// take data from forms and pass into constructor


// item constructor.

// bag array of item objects.

// chose an item to start with.

// enemy constructor.

// interactions.





