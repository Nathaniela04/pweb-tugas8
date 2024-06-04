function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var notelp = document.getElementById("notelp").value;
  var jenkel = document.querySelector('input[name="jenkel"]:checked');
  var tgl = document.getElementById("tgl").value;
  var latbel = document.getElementById("latbel").value;

  if (name == "" ) {
    alert("Masukan Nama anda");
    return false;
  }

  if (!jenkel) {
    alert("Pilih jenis kelamin");
    return false;
  }

  if (tgl == "") {
    alert("Tanggal lahir tidak boleh kosong");
    return false;
  }

  if (isNaN(age) || age < 18) {
    alert("Umur harus diatas 18 tahun");
    return false;
  }

  if (notelp < 0) {
    alert("Masukan nomor telpon yang benar");
    return false;
  }

  var emailPattern = /^\S+@\S+\.\S+$/;
  if (!email.match(emailPattern)) {
    alert("Email tidak valid");
    return false;
  }

  document.body.style.backgroundColor = latbel;
  var country = document.getElementById("country").value;
  var output = "Nama                 : " + name + "\n";
  output += "Jenis Kelamin     : " + jenkel.value + "\n";
  output += "Tanggal Lahir     : " + tgl + "\n";
  output += "Umur                 : " + age + "\n";
  output += "Email                 : " + email + "\n";
  output += "Asal                   : " + country + "\n";
  output += "Nomor Telpon  : " + notelp + "\n";
  output += "Warna fav         : " + latbel;

  alert("Data yang anda masukan : \n\n" + output);

  return false;
}

function resetForm() {
  document.getElementById("formInput").reset();
  document.getElementById("output").innerHTML = "";
}

function showInputMessage(inputId, message) {
  var inputElement = document.getElementById(inputId);
  var messageElement = document.createElement("span");
  messageElement.innerHTML = message;
  messageElement.className = "error";
  inputElement.parentNode.insertBefore(messageElement, inputElement.nextSibling);
}

function hideInputMessage(inputId) {
  var inputElement = document.getElementById(inputId);
  var nextElement = inputElement.nextSibling;
  if (nextElement && nextElement.className == "error") {
    nextElement.parentNode.removeChild(nextElement);
  }
}

document.getElementById("name").addEventListener("blur", function () {
  var name = this.value;
  if (name === "") {
    showInputMessage("name", "Nama harus diisi.");
  } else {
    hideInputMessage("name");
  }
});

document.querySelectorAll('input[name="jenkel"]').forEach(function (radio) {
  radio.addEventListener("blur", function () {
    var jenkel = document.querySelector('input[name="jenkel"]:checked');
    if (!jenkel) {
      showInputMessage("jenkel", "Pilih salah satu.");
    } else {
      hideInputMessage("jenkel");
    }
  });
});

document.getElementById("tgl").addEventListener("blur", function () {
  var tgl = this.value;
  if (tgl === "") {
    showInputMessage("tgl", "Isi sesuai tanggal lahir anda");
  } else {
    hideInputMessage("tgl");
  }
});

document.getElementById("age").addEventListener("blur", function () {
  var age = this.value;
  if (isNaN(age) || age < 18) {
    showInputMessage("age", "Umur berupa angka dan harus diatas 18 tahun.");
  } else {
    hideInputMessage("age");
  }
});

document.getElementById("email").addEventListener("blur", function () {
  var email = this.value;
  var emailPattern = /^\S+@\S+\.\S+$/;
  if (!email.match(emailPattern)) {
    showInputMessage("email", "Email tidak valid.");
  } else {
    hideInputMessage("email");
  }
});

document.getElementById("country").addEventListener("blur", function () {
  var country = this.value;
  if (country === "") {
    showInputMessage("country", "Pilih asal Anda.");
  } else {
    hideInputMessage("country");
  }
});

document.getElementById("notelp").addEventListener("blur", function () {
  var notelp = this.value;
  if (notelp === "") {
    showInputMessage("notelp", "Isi dengan nomor telpon anda");
  } else {
    hideInputMessage("notelp");
  }
});
