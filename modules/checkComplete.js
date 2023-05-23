import getResult from "./getResult.js";

const h6Obj = document.querySelector("h6");

const getDataOfTable = (trObj) => {
  let data = [];
  trObj.forEach((item) => {
    const imgData = [...item.querySelectorAll("img")].map(
      (imgItem) => +imgItem.getAttribute("alt")
    );
    data.push(imgData);
  });
  return data;
};

export const checkComplete = (tdObj, trObj, timeOut) => {
  const checkTd = document.querySelectorAll("td img");
  if (checkTd.length === tdObj.length) {
    if (getResult(getDataOfTable(trObj))) location.replace("Win.html");
    else {
      if (timeOut) return location.replace("GameOver.html");
      h6Obj.classList.remove("hide");
    }
  } else {
    if (timeOut) return location.replace("GameOver.html");
  }
};
