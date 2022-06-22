let fibonacci=function(number){

    if(number<0){
        number=-1*number;
    }else if(number==0){
        return 0;
    }else if(number<2){
        return 1;
    }

    return fibonacci(number-1)+fibonacci(number-2);
}

module.exports=fibonacci;