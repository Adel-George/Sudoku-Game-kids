const createImgObj = (index) => {
  const number=document.title.split(" ")[1];
  const imgObj = document.createElement("img");
  imgObj.setAttribute("src", `img/bg${number}/${index}.png`);
  imgObj.setAttribute("alt", index);
  return imgObj;
};


export const createRandom = (trObj, arrayOfTd, arrayOfImg) => {
  trObj.forEach((item, index) => {
    item.children[arrayOfTd[index]].append(createImgObj(arrayOfImg[index]));
    item.children[arrayOfTd[index]].classList.add("key");
  });
};

export const addImgByNumber = (tdObj, index) => {
  tdObj.forEach((item) => {
    if (
      item.classList.contains("move") &&
      item.children[0]?.alt !== index &&
      !item.classList.contains("key")
    ) {
      item.children[0]?.remove();
      item.append(createImgObj(index));
    }
  });
};
