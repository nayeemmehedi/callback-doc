// git branch nayeem
// git branch -a 
// git checkout nayeem

function nayeem(name,callback){
    console.log("helo",name)
    callback(name)
}

nayeem("NAYEEM",(v)=>{
    console.log("done",v )
})