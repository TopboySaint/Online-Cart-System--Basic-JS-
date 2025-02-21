var myItemOncart = [];

if (myItemOncart.length == 0) {
  showUsOurItems.style.display = "block";
  showUsOurItems.innerHTML = `
              <p class="alert alert-danger text-center p-3">No items added yet</p>
          `;
}

function addItems() {
  if (itemsToAdd.value == "") {
    document.getElementById("alertMe").style.display = "block";
  } else {
    document.getElementById("alertMe").style.display = "none";
    myItemOncart.push(itemsToAdd.value);
    document.getElementById("itemsToAdd").value = "";
    displayItem();
  }
}

function delTheLastItem() {
  myItemOncart.pop();
  displayItem();
}

function delTheFirstItem() {
  myItemOncart.shift();
  displayItem();
}

function addFirstItem() {
  if (itemsToAdd.value == "") {
    document.getElementById("alertMe").style.display = "block";
  } else {
    document.getElementById("alertMe").style.display = "none";
    myItemOncart.unshift(itemsToAdd.value);
    document.getElementById("itemsToAdd").value = "";
    displayItem();
  }
}

function editAny() {
  let editNumber = Number(document.getElementById("itemsToEdit").value);
  let toWhat = document.getElementById("itemsToEdit2").value;

  if (editNumber == "" || toWhat == "") {
    document.getElementById("alertMe2").style.display = "block";
  } else {
    if (Number(editNumber) > myItemOncart.length) {
      alert("This exceeds the number of your chosen products");
    } else {

      document.getElementById("alertMe2").style.display = "none";
      myItemOncart.splice(editNumber - 1, 1, toWhat);
      itemsToEdit.value = "";
      itemsToEdit2.value = "";
      displayItem();
    }
  }
}

function deleteAny() {
  let toDelete = Number(prompt("Delete item number what?"));
  myItemOncart.splice(toDelete - 1, 1);
  displayItem();
}

function deleteAllItems() {
  let askFor = confirm("Are you sure?");

  if (askFor === true) {
    myItemOncart.splice(0, myItemOncart.length);
    displayItem();
  }
}

function displayItem() {
  var myTable = '<table class="table">';
  myTable += "<tr>";
  myTable += `<th> Serial No</th>`;
  myTable += `<th> Products </th>`;
  myTable += "</tr>";
  showUsOurItems.innerHTML = "";
  for (var i = 0; i < myItemOncart.length; i++) {
    myTable += "<tr>";
    myTable += `<td><small>${i + 1}</small></td>`;
    myTable += `<td><p>${myItemOncart[i]}</p></td>`;
    myTable += "</tr>";
  }
  myTable += "</table>";
  showUsOurItems.innerHTML = myTable;
}
