const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];




// console.log([...comments.splice(0,2)] ,[...comments.splice(1)]);
// comments.splice(4,1);
// console.log(comments);

// Array.some();
const isAdult = people.some((el) => (new Date().getFullYear() - el.year) > 19);
// console.log({isAdult});

// Array.every();
const allAdults = people.every((el) =>  (new Date().getFullYear() - el.year) >= 19);
// console.log({ allAdults });


// find the comment with the ID of 823423
const comment = comments.find((el) => el.id == 823423);
// console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let rec = [...comments];
console.log(rec);


const indexToDel = comments.findIndex((el) => el.id == 823423);
comments.splice(indexToDel,1); // 4


console.log(comments);


// let newComment = [
//   ...comments.splice(0, indexToDel),
//   ...comments.splice(1),
// ];


// console.log(newComment);