console.log("Before");
getUser(1, (user) => {
  getRepositories(user.githubUsername, (repos) => {
    console.log(repos);
  });
});
console.log("After");

//callbacks
//promises
//Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading the user from the database");
    callback({ id: id, githubUsername: "mosh" });
  }, 2000);
}
function getRepositories(username, callback) {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2500);
}
