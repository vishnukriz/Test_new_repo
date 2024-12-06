function palindrome(){
    let str = "time";
    let arr = str.split("");
    console.log(str);
    //console.log(arr);
      for(let i=0; i<(arr.length-1)/2; i++){
        let start = i;
        let end = arr.length-1-i;
        let temp;
        
        temp = arr[start];
        arr[start]= arr[end];
        arr[end] = temp;
      }
    //console.log(arr);
    let revstr = arr.join("");
    console.log(revstr);
    if(str == revstr){
        console.log("palindrome");
    }else{
        console.log("not a palindrome");
    }
}
palindrome();


/**
time
emit
not a palindrome
**/


