document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Page reload roko sabse pehle

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  const numericAge = Number(age);

  checkage(numericAge, name)
    .then(message => alert(message))
    .catch(message => alert(message));
});

function checkage(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough`);
      }
    }, 4000);
  });
}
