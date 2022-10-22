const addbtn = document.getElementById("addbtn");
const input = document.getElementById("input");
const pendingList = document.getElementById("pendingList");

addbtn.addEventListener("click", () => {
  if (input.value != "") {
    //declaring and adding new task
    var newtask = document.createElement("div");
    newtask.classList.add("bg-slate-200", "mx-3", "my-1", "p-2");
    newtask.innerHTML = `<li class="flex flex-1 p-2 capitalize">${input.value}</li> `;
    input.value = "";
    pendingList.appendChild(newtask);
    //moving pending task to completed
  } else {
    alert("Please input new task!");
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addbtn.click();
  }
});
//test
