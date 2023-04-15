let submission = document.getElementById("submission");
let rows = document.querySelector(".box-container");

let clear = document.querySelector(".forms");
let noOf = document.querySelector(".no_of_emp");
let error = document.querySelector(".error");
let success = document.querySelector(".success");
let btn = document.querySelector(".del");
let count = 1;
let arr = [];
submission.addEventListener("click", (e) => {
  e.preventDefault();
  let nameValue = document.getElementById("name").value;
  let prof = document.getElementById("prof").value;
  let age = document.getElementById("age").value;
  //   alert(nameValue+" "+prof+""+ age+"" +submission);
  console.log(nameValue, prof, age);
  arr.push({ counter: count, name: nameValue, profession: prof, Age: age });
  console.log(arr);
  if (
    arr[count - 1].name == "" ||
    arr[count - 1].profession == "" ||
    arr[count - 1].profession == ""
  ) {
    error.style.display = "block";
    success.style.display = "none";
    if (arr.length > 0) {
      arr.pop();
      count = count - 1;
    }
  } else {
    error.style.display = "none";
    success.style.display = "block";
    adding_row();
  }
  console.log(count);
  count++;
  reset_form();
});
function reset_form() {
  clear.reset();
}
function adding_row() {
  while (rows.hasChildNodes()) {
    rows.removeChild(rows.firstChild);
  }

  arr.forEach((ele) => {
    console.log(ele);

    let row_adding = document.createElement("div");
    row_adding.setAttribute("class", `box-insider `);
    let detail_div = document.createElement("div");
    detail_div.setAttribute("class", "details");

    var spans1 = document.createElement("span");
    var spans2 = document.createElement("span");
    var spans3 = document.createElement("span");
    var spans4 = document.createElement("span");

    var key = Object.keys(ele);
    key.forEach((val) => {
      console.log(val);
      if (val == "counter") {
        spans1.innerText = ele[val];
        console.log(ele[val]);
      } else if (val == "name") {
        spans2.innerText = "Name : " + ele[val];
      } else if (val == "profession") {
        console.log(ele.val);
        spans3.innerText = "Profession: " + ele[val];
      } else {
        spans4.innerText = "Age: " + ele[val];
      }

      detail_div.appendChild(spans1);
      detail_div.appendChild(spans2);
      detail_div.appendChild(spans3);
      detail_div.appendChild(spans4);
      row_adding.appendChild(detail_div);
    });
    let btn = document.createElement("button");
    btn.setAttribute("class", "del");
    btn.innerText = `Delete User`;
    btn.setAttribute("onclick", `deleting(${ele["counter"]})`);

    row_adding.appendChild(btn);
    rows.appendChild(row_adding);
  });
}

function deleting(id) {
  arr.forEach((val, index) => {
    if (val["counter"] == id) {
      delete arr[index];
      adding_row();
    }
  });
}