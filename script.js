var myItemOncart = [];

if (myItemOncart.length == 0) {
  showMeMyItems.style.display = "block";
  showMeMyItems.innerHTML = `
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
    // showMeMyItems.innerHTML += myItemOncart
    displayItem();
  }
}

function displayItem() {
  showMeMyItems.innerHTML = "";
  for (var i = 0; i < myItemOncart.length; i++) {
    // console.log(myItemOncart[i])
    showMeMyItems.innerHTML += `
                      <small>${i + 1}</small>
                      <p>${myItemOncart[i]}</p>
                  `;
  }
}
