// const requestUrl = "https://api.github.com/users/hiteshchoudhary";

// const button = document.getElementById("load");

// button.addEventListener("click", function () {

//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", requestUrl);

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {

//       const data = JSON.parse(this.responseText);

//       document.getElementById("avatar").src = data.avatar_url;
//       document.getElementById("username").innerText = data.login;
//       document.getElementById("followers").innerText = data.followers;
//     }
//   };

//   xhr.send();
// });


const requestUrl = "https://api.github.com/users/hiteshchoudhary";

document.querySelector('#load').addEventListener('click', function() {

    document.querySelector('body').style.backgroundColor = 'grey';
    document.querySelector('.card').style.backgroundColor = 'lightgreen';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {

        const data = JSON.parse(this.responseText);

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("username").innerHTML = data.login;
        document.getElementById("followers").innerHTML = data.followers;
      }
    };
    xhr.send();
})