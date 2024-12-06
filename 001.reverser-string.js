function reverse(){
    let str = "certification";
    console.log("string:", str);
    let arr = str.split("");
  // let arr = [...str];
    console.log("Splitted Array:", arr);
    
    for(let i=0;i<(arr.length-1)/2;i++){
        let first = i;
        let last = arr.length -1 -i;
        let temp;
        
        //apple to temp
        //orange to apple
        //temp to orange
        temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
    }
    console.log("Reversed Array:", arr);
    let str1 = arr.join("");
    console.log("Reversed String:", str1);
}
reverse();

/**
string: certification
Splitted Array: [
  'c', 'e', 'r', 't',
  'i', 'f', 'i', 'c',
  'a', 't', 'i', 'o',
  'n'
]
Reversed Array: [
  'n', 'o', 'i', 't',
  'a', 'c', 'i', 'f',
  'i', 't', 'r', 'e',
  'c'
]
Reversed String: noitacifitrec
**/

