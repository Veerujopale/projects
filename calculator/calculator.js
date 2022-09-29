function takeValue(val){
 let d= document.getElementById('result').value+=val;
console.log(d);
  return val;
}

function solve(){
  let x=document.getElementById('result').value;
  let y= eval(x);
   document.getElementById("result").value=y;

  
  return y;
}

function clearScreen(){
document.getElementById('result').value=" ";
}