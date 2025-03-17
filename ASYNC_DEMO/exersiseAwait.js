async function sendMailGold() {
  try {
    const get = await getCustomer(1);
    console.log("Customer: ", get);
    if (get.isGold) {
      const movies = await getTopMovies();
      console.log("Top movies: ", movies);
      const sendMail = await sendEmail(get.email, movies);
      console.log("Email sent ...");
    }
  } catch (error) {
    console.log(error.message);
  }
}
sendMailGold();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, name: "Dineth Melan", isGold: true, email: "email" });
    }, 2000);
  });
}
function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}
function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email, movies);
    }, 1000);
  });
}
