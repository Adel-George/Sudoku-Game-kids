import { checkComplete } from "./checkComplete.js";

export const timeCount = (tdObj, trObj) => {
  const timeCount = document.querySelector(".start h2 span");
  let minute = 59;
  const id = setInterval(() => {
    if (minute < 10) timeCount.innerHTML = "00:0" + minute;
    else timeCount.innerHTML = "00:" + minute;
    minute--;
  }, 1000);
  setTimeout(() => {
    clearInterval(id);
    checkComplete(tdObj, trObj,true);
  }, 60000);
};
