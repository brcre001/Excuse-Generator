/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Arrays Containing Items

  const who = [
    "My sister",
    "My mother",
    "My cousin",
    "My dog",
    "My coworker",
    "My father",
    "My pastor"
  ];

  const action = ["destroyed", "ate", "stole", "conquered", "shot", "fought"];

  const what = [
    "my luggage",
    "the house",
    "the church",
    "the police",
    "the car",
    "a plane"
  ];

  const when = [
    "before class.",
    "during a concert.",
    "right on time.",
    "as I got home.",
    "when I wasn't looking.",
    "while walking my dogs."
  ];

  //Create a function to get a random number

  let indexWho = Math.floor(Math.random() * who.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexWhat = Math.floor(Math.random() * what.length);
  let indexWhen = Math.floor(Math.random() * when.length);

  //Get string

  let statement =
    who[indexWho] +
    " " +
    action[indexAction] +
    " " +
    what[indexWhat] +
    " " +
    when[indexWhen];

  document.getElementById("excuse").innerHTML = statement;
};
