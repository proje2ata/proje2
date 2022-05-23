let users = [
  {
    username: "admin",
    password: "admin",
  },
];

function login() {
  let username = document.getElementById("uname").value;
  let password = document.getElementById("psw").value;

  let user = users.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    alert("Giriş başarılı");
    window.location.href = "userpage.html";
    return false;
    
  } else {
    alert("Kullanıcı adı veya şifre hatalı");
  }
}

function register() {
  let username = document.getElementById("unamer").value;
  let password = document.getElementById("pswr").value;
  let user = users.find(function (user) {
    return user.username === username && user.password === password;
  });
  if (user) {
    alert("Bu kullanıcı adı kullanılıyor");
  } else {
    users.push({ username, password });
    alert("Kayıt başarılı");
  }
}
