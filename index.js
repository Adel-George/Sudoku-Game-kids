import { createRandom } from "./modules/createObj.js";
import eventForMoveAndClick from "./modules/eventKey.js";
import { randomArrayOfNumber } from "./modules/randomNumber.js";
import { timeCount } from "./modules/timeCount.js";



const tdObj = document.querySelectorAll("td");
const trObj = document.querySelectorAll("tr");
const buttonObj=document.querySelector(".start button");
const spanUserName=document.querySelector("h1 span")


buttonObj.addEventListener("click",()=>{
  createRandom(
    trObj,
    randomArrayOfNumber(trObj.length, true),
    randomArrayOfNumber(trObj.length, false)
  );
  tdObj[0].classList.add("move")
  eventForMoveAndClick(tdObj,trObj);
  timeCount(tdObj,trObj)
},{once:true})


spanUserName.innerHTML=JSON.parse(localStorage.getItem("userName"))