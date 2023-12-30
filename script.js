const extendHex = (shortHex) => {
  // write your code here
  let ans="#",l=shortHex.length,i=1;
  while(i<=l){
    ans=ans+shortHex[i]+shortHex[i];
  }
  return ans;
};
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
