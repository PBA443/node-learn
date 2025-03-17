//promise based approach
/* getUser(1)
  .then((user) => getRepositories(user.githubUsername))
  .then((repos) => getCommits(repos))
  .then((commits) => console.log(commits)); */

//Async/await based approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubUsername);
    const commit = await getCommits();
  } catch (err) {
    console.log("Error", err.message);
  }
}
displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading the user from the database");
      resolve({ id: id, githubUsername: "mosh" });
    }, 2000);
  });
}
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling github api...");
      const repos = ["repo1", "repo2", "repo3"];
      resolve(repos[username]);
    }, 2500);
  });
}
function getCommits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Could not get the commits"));
      resolve("Get commits");
    }, 2500);
  });
}
