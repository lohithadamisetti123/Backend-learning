function getUserDetails(id, getUserSubjects) {
    return new Promise((resolve, reject) => {
    console.log("fun1 called");
    resolve({rollnumber:321});//API CALL
    });
}
function getUserSubjects(userroll) {
    return new Promise((resolve, reject) => {
    console.log("fun2 called");
    resolve( {usersubid:"maths"}); 
    });
}
function getUserMarks(usersubId) {
    return new Promise((resolve, reject) => {
    console.log("fun3 called");
    resolve("getting user marks by subId", usersubId);
    });
}
getUserDetails("123")
.then((result) => {
    return getUserSubjects(result.rollnumber);
})
.then((result) => {
    return getUserMarks(result.usersubId);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});










