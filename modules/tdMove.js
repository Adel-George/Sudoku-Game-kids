


export const tdMove = (tdObj,tdIndex, callback) => {
  tdObj.forEach((item, index) => {
    if (item.classList.contains("move")) {
        tdIndex= callback(tdObj,tdIndex, index)
      item.classList.remove("move");
    }
  });
  tdObj[tdIndex].classList.add("move");
};
