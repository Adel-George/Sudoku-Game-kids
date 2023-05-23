import { checkComplete } from "./checkComplete.js";
import { addImgByNumber } from "./createObj.js";
import { tdMove } from "./tdMove.js";

const eventForMoveAndClick = (tdObj, trObj) => {
  document.body.addEventListener("keydown", (event) => {
    let tdIndex = 0;
    switch (event.key) {
      case "ArrowRight":
        tdMove(tdObj, tdIndex, (td, indexOfTd, index) => {
          indexOfTd = index + 1;
          if (indexOfTd === td.length) indexOfTd = 0;
          return indexOfTd;
        });
        break;
      case "ArrowLeft":
        tdMove(tdObj, tdIndex, (td, indexOfTd, index) => {
          indexOfTd = index - 1;
          if (indexOfTd < 0) indexOfTd = td.length - 1;
          return indexOfTd;
        });
        break;
      case "ArrowUp":
        tdMove(tdObj, tdIndex, (td, indexOfTd, index) => {
          indexOfTd = index - 4;
          if (indexOfTd < 0) indexOfTd += td.length;
          return indexOfTd;
        });
        break;
      case "ArrowDown":
        tdMove(tdObj, tdIndex, (td, indexOfTd, index) => {
          indexOfTd = index + 4;
          if (indexOfTd >= td.length) indexOfTd -= td.length;
          return indexOfTd;
        });
        break;
      case "1":
        addImgByNumber(tdObj, 1);
        checkComplete(tdObj, trObj, false);
        break;
      case "2":
        addImgByNumber(tdObj, 2);
        checkComplete(tdObj, trObj, false);
        break;
      case "3":
        addImgByNumber(tdObj, 3);
        checkComplete(tdObj, trObj, false);
        break;
      case "4":
        addImgByNumber(tdObj, 4);
        checkComplete(tdObj, trObj, false);
        break;
    }
  });
};

export default eventForMoveAndClick;
