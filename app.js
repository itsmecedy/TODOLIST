const addBtn = document.getElementById("addBtn");
const input = document.getElementById("input");
const pendingTask = document.getElementById("pendingTask");
const completedTask = document.getElementById("completedTask");

//add task by clicking add
addBtn.addEventListener("click", () => {
  if (input.value != "") {
    //declaring and adding new task
    var newTask = document.createElement("div");
    newTask.classList.add(
      "bg-slate-200",
      "mx-3",
      "my-1",
      "p-2",
      "rounded-md",
      "capitalize",
      "flex-col",
      "group"
    );
    newTask.innerHTML = `${input.value}`;
    var taskValue = newTask.innerText;

    //create hidden div
    var hidden = document.createElement("div");
    hidden.classList.add("hidden", "group-hover:block");
    newTask.appendChild(hidden);

    //create wrapper div
    var wrapper = document.createElement("div");
    wrapper.classList.add("space-x-2", "mt-2", "flex", "justify-center");
    hidden.appendChild(wrapper);

    //create edit button
    var edit = document.createElement("button");
    edit.classList.add(
      "bg-blue-500",
      "hover:bg-blue-700",
      "px-2",
      "py-1",
      "rounded",
      "hover:text-white",
      "transition",
      "duration-700",
      "ease-in-out"
    );
    edit.innerText = "EDIT";
    wrapper.appendChild(edit);

    //create done button n put in wrapper div
    var done = document.createElement("button");
    done.classList.add(
      "bg-green-500",
      "px-2",
      "py-1",
      "rounded",
      "hover:bg-green-700",
      "hover:text-white"
    );
    done.innerText = "DONE";
    wrapper.appendChild(done);

    // add task in pending list n reset input value
    pendingTask.appendChild(newTask);
    input.value = "";
  } else {
    alert("Please input new task!");
  }

  //edit func /edit
  edit.addEventListener("click", () => {
    edit.parentNode.parentNode.parentNode.remove();
    input.value = taskValue;
    input.focus();
  });

  //Done func /move pending task to completed task
  done.addEventListener("click", () => {
    completedTask.appendChild(done.parentNode.parentNode.parentNode);
    done.parentNode.parentNode.remove();
  });
});

///////////////////////////////////////////////
//add task using enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
