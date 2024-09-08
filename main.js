
// Random background 
let HexArray = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8  , 9 , "A" , "B" , "C" , "D" , "E" , "F"];
let colorParts = [];
//  loop to  Make Color 
let length = 6 ;
for (let i = 0 ; i < length ; i++ ){
    colorParts.push(HexArray[Math.floor(Math.random() * HexArray.length)]);
}
// Final color 
let FinalColor = `#${ colorParts.join("")}`;
// Make Random Background 
document.body.style.backgroundColor = FinalColor ;
console.log(FinalColor);