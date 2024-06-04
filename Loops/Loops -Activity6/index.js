let jaysFollowers = ["Kai", "Lewis", "Mila", "Elaine"];

let sakurasFollowers = ["Charles", "Elaine", "Max", "Lewis"];

for (let i = 0; i < jaysFollowers.length; i++) {
  for (let j = 0; j < sakurasFollowers.length; j++) {
    if (jaysFollowers[i] === sakurasFollowers[j]) {
      console.log(`Matching name: ${jaysFollowers[i]}`);
    }
  }
}
