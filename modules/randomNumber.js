const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const randomArrayOfNumber = (length, check) => {
  const arrayList = new Set([]);
  while (arrayList.size < length) {
    const randomNumber = +(Math.random() * length).toFixed();
    if (check) {
      if (length === randomNumber) continue;
      arrayList.add(randomNumber);
    } else {
      if (!randomNumber) continue;
      arrayList.add(randomNumber);
    }
  }

  return shuffle([...arrayList]);
};