function checkprime(num){

    let count=0;

    for(let p=1; p<=num; p++){

        if(num%p===0){

            count++;
        }
    }
    if(count===2){

        console.log(num, ": Prime Number");
    }
    else{

        console.log(num, ": Non-Prime Number");
    }
}

checkprime(9);