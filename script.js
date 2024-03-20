var myItemOncart = [];

if (myItemOncart.length == 0) {
  showUsOurItems.style.display = "block";
  // showMeMyItems.style.display = "block";
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
    // showMeMyItems.innerHTML += myItemOncart
    displayItem();
  }
}

function displayItem() {
  showUsOurItems.innerHTML = "";
  for (var i = 0; i < myItemOncart.length; i++) {
    // console.log(myItemOncart[i])
    showUsOurItems.innerHTML += `
                      <small>${i + 1}</small>
                      <p>${myItemOncart[i]}</p>
                  `;
  }
}

function delTheLastItem(){
  myItemOncart.pop()
  displayItem()
}

function delTheFirstItem(){
  myItemOncart.shift()
  displayItem()
}

function addFirstItem(){
  myItemOncart.unshift(itemsToAdd.value)
  displayItem()
}

function editAny(){
  var editNumber = Number(prompt("Item number what are you deleting?"))
  var toWhat = prompt("Enter your new item")
  // console.log(editNumber);
  myItemOncart.splice(editNumber-1, 1, toWhat)
  displayItem()
}

function deleteAny(){
  var toDelete = Number(prompt('Delete item number what?'))
  // console.log(toDelete);
  myItemOncart.splice(toDelete-1,1)
  displayItem()
}

function deleteAllItems(){
    var askFor = confirm("Are you sure?")

    if (askFor == true){
      myItemOncart.splice(0,myItemOncart.length)
      displayItem()
    }
}
