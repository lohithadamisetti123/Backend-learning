function getUserDetails(id, getUserSubjects) {
    console.log("getting user details by userId", id);
    getUserSubjects({userroll:"678"})
}
function getUserSubjects(userroll, getUserMarks) {
    console.log("getting user subjects by userroll", userroll);
    getUserMarks({subId:"maths "})
}
function getUserMarks(usersubId) {
    console.log("getting user marks by subId", usersubId);
}
getUserDetails("123", function(userRoll) {
    getUserSubjects(userRoll, function(UsersubId) {
        getUserMarks(UsersubId);
    })
});
