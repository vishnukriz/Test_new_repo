function sorting(){
    let arr = [7,5,4,3];
    console.log("Input Array:", arr );
    for(let i=1;i<arr.length;i++){
        console.log("Inserting", arr[i]);
        for(let j=0;j<i+1;j++){
            if(arr[i]<arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                console.log(arr);
            }
            
        }
    }
    console.log("Output Array:",arr);
    
    
}
sorting();

/**
Input Array: [ 7, 5, 4, 3 ]
Inserting 5
[ 5, 7, 4, 3 ]
Inserting 4
[ 4, 7, 5, 3 ]
[ 4, 5, 7, 3 ]
Inserting 3
[ 3, 5, 7, 4 ]
[ 3, 4, 7, 5 ]
[ 3, 4, 5, 7 ]
Output Array: [ 3, 4, 5, 7 ]
**/
