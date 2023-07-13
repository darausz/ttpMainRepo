const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
};

const findPassword = async () => {
  let fileName = "starting-poem";
  for (let i = 0; i < 2; i++) {
    try {
      const poem = await readFile(`./poems/${fileName}.txt`, "utf-8");
      fileName = mostFrequentWord(poem);
    } catch (err) {
      console.log(err);
      return;
    }
  }
  console.log(fileName);
};

findPassword("starting-poem.txt");
