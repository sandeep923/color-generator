function color() {

  let heading = document.getElementById("head");
  let buttonColor = document.getElementById("button");
  let input = document.getElementById("inputName");
  let colorGenerate = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + colorGenerate;
  buttonColor.style.backgroundColor = "#" + colorGenerate;
  heading.style.color = "#" + colorGenerate;
  input.value = "#" + colorGenerate;
  document.getElementById("demo").textContent = "#" + colorGenerate;
}

function copy() {
  let input = document.getElementById("inputName").value;
  alert(input)
}



