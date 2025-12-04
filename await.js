function getUserDetails(id){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {resolve({userroll:"678"})},2000);
   });//API CALL //2000 milliseconds
};
function getUserSub(sub){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {resolve({sub:"english"})},3000);
   });//API CALL
};
const myfun=async()=>{
    console.log("123")
    const result=await getUserDetails("123");
    const res=await getUserSub("maths");
    console.log(result);
    console.log(res);
    console.log("456")
};
myfun();