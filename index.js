const userName = prompt("What is your name?");
while (userName === null || userName === "" || !isNaN(userName)) {
  userName = prompt("What is your name?", userName);
}
const userAge = prompt("How old are you?");
while (userAge === null || userAge === "" || isNaN(userAge)) {
  userAge = prompt("How old are you?", userAge);
}
console.log(userName + userAge);
if (userAge < 18) {
  alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
  let ok = confirm("Are you sure you want to continue?");
  if (ok == true) {
    alert("Welcome," + userName);
  } else {
    alert("You are not allowed to visit this website");
  }
}
if (userAge > 22) {
  alert("Welcome, " + userName);
}
