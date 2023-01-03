// git branch nayeem
// git branch -a 
// git checkout nayeem

function gumabo(){
     return  new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("gumabo first.")
            resolve()
            
        }, 3000);
     })
}

function khabo(){
   return  new Promise((resolve, reject) => {
       setTimeout(() => {
           console.log("khabo secend.")
           resolve()
           
       }, 1000);
    })
}

function laptopCalabo(){
    return  new Promise((resolve, reject) => {
        if(1+1 ==3){

            setTimeout(() => {
                console.log("laptop Calabo third.")
                resolve()
                
            }, 3000);

        }else{
            reject(console.log("error because 1+1 =2 not 3"))
        }
      
    })
}


async function callAll (){
    try {

        await gumabo()
        await khabo()
        await laptopCalabo()
        
    } catch (error) {
        console.log(error)
        
    }
   
}

callAll()
