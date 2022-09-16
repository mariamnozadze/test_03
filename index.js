function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("openBtn").style.visibility = "hidden";
}

/*  width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("openBtn").style.visibility = "visible";
}

/*
function to display images when button is clicked
*/

function checkValue() {
  let CheckBox1 = document.getElementById("CheckBox1");
  let CheckBox2 = document.getElementById("CheckBox2");
  let CheckBox3 = document.getElementById("CheckBox3");

  if (
    CheckBox1.checked == true &&
    CheckBox2.checked == true &&
    CheckBox3.checked == true
  ) {
    document.getElementById("image1").style.display = "inline";
    document.getElementById("image2").style.display = "inline";
    document.getElementById("image3").style.display = "inline";
  } else if (CheckBox2.checked == true && CheckBox3.checked == true) {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "inline";
    document.getElementById("image3").style.display = "inline";
  } else if (CheckBox1.checked == true && CheckBox2.checked == true) {
    document.getElementById("image1").style.display = "inline";
    document.getElementById("image2").style.display = "inline";
    document.getElementById("image3").style.display = "none";
  } else if (CheckBox1.checked == true && CheckBox3.checked == true) {
    document.getElementById("image1").style.display = "inline";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "inline";
  } else if (CheckBox1.checked == true) {
    document.getElementById("image1").style.display = "inline";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
  } else if (CheckBox2.checked == true) {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "inline";
    document.getElementById("image3").style.display = "none";
  } else if (CheckBox3.checked == true) {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "inline";
  } else if (
    CheckBox1.checked == false &&
    CheckBox2.checked == false &&
    CheckBox3.checked == false
  ) {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
  }
}

// } else if (CheckBox2.checked && CheckBox3.checked == true) {
//   document.getElementById("image1").style.display = "none";
//   document.getElementById("image2").style.display = "inline";
//   document.getElementById("image3").style.display = "inline";
// } else if (CheckBox1.checked && CheckBox2.checked == true) {
//   document.getElementById("image1").style.display = "inline";
//   document.getElementById("image2").style.display = "inline";
//   document.getElementById("image3").style.display = "none";
// } else CheckBox1.checked && CheckBox3.checked == true;
// document.getElementById("image1").style.display = "inline";
// document.getElementById("image2").style.display = "none";
// document.getElementById("image3").style.display = "inline";
