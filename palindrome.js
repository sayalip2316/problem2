let srt="hello";
let new_str="";
for(let i=str.length;i>=0;i--){
new_str=new_str+str[i];
}if(str==new_str){
console.log("It is not palindrome");
}else{
console.log("It is palindrome");
}