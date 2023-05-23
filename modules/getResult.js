

const getResult = (data) => {
    let dataCheck = true;
    sudokuCheck: for (const i in data) {
      for (const j in data[i]) {
        const check = data[i].filter((item) => data[i][j] === item);
        if (check.length > 1) {
          dataCheck = false;
          break sudokuCheck;
        }
        for (const index in data) {
          if ((data[i][j] === data[index][j] && index !== i) || !data[index][j]) {
            dataCheck = false;
            break sudokuCheck;
          }
        }
      }
    }
    return dataCheck;
  };


  export default getResult;