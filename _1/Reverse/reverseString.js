//Revere 'harry potter is good movie' to 'yrrah rettop si doog eviom without using reverse built in function


function reverseword(str){
    str = str.split(' ');
    return str.map(ele=>{
        ele=ele.split('');
        let mid=(0+ele.length-1)/2;
        for(let i =0,j=ele.length;i<mid;i++,j--){
          
            let temp = ele[i];
            ele[i]=ele[j];
            ele[j]=temp;

        }
        return ele.join('');
    }).join(' ');
    
 
}

console.log(reverseword('harry potter is good movie'));

