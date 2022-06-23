// localStorage.removeItem('records');
let lists = JSON.parse(localStorage.getItem("records"))
  ? JSON.parse(localStorage.getItem("records"))
  : [];
lists.forEach((item) => {
  console.log(item.name);
  document.querySelector("#toDoTasks").innerHTML += `
 <p><input type="checkbox">${item.name}</p>`;
});


function TaskName() {
  // e.preventDefault();
  lists.push({
    name: document.getElementById("Name").value,
  });
  localStorage.setItem("records", JSON.stringify(lists));
}


function DeleteInput(id) {
  if (id > -1) {
    lists.splice(id, 1);
    // After delete
    localStorage.setItem("records", JSON.stringify(lists));
  } else {
    console.log("error");
  }
}

// Load data
(function loadData() {
  console.table(lists);
})();

// loadData();
// Add Event listener
document.querySelector("#addTasks").addEventListener("click", TaskName);

// delete record
document.querySelector("#Delete").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("Name").value;
  let index = lists.findIndex((item) => item.name === name);
  console.log(index);
  DeleteInput(index);
});
