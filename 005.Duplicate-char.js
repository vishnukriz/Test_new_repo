function duplicate(){
    let str = "he is a handsome guy and nice guy too";
    let arr = str.split(" ");
    let obj = {};
    
    for(let i=0; i<arr.length-1; i++){
        let ele = arr[i];
        if(obj[ele]){
            obj[ele] = obj[ele] + 1;
        }else{
            obj[ele] = 1;
        }
    }
    console.log(obj);
    for(let key in obj){
        console.log(key, obj[key]);
        if(obj[key]>1){
            console.log("duplicate");
            return;
        }
    
    }
    console.log("not a duplicate");
    
}
duplicate();



/**
{ he: 1, is: 1, a: 1, handsome: 1, guy: 2, and: 1, nice: 1 }
he 1
is 1
a 1
handsome 1
guy 2
duplicate
**/
