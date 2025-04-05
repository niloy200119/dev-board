const todaysDate = document.getElementById("todays-date");
const taskCompleted = document.getElementById("task-completed");
const taskAssigned = document.getElementById("task-assigned");
const taskCompletedCount = taskCompleted.querySelector("h4");
const taskAssignedCount = taskAssigned.querySelector("h4");
const tasks = document.getElementsByClassName("task");
const buttons = document.getElementsByClassName("complete-btn");
const activityLog = document.getElementById("activity-log");
const activities = document.getElementsByClassName("activity");

document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
    taskCompleted.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
    taskAssigned.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
    todaysDate.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;

    for (const task of tasks) {
      task.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
    }

    for (const activity of activities) {
      activity.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
    }
  });

document
  .getElementById("discover-something")
  .addEventListener("click", function (event) {
    window.location.href = "./blogs.html";
  });

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const date = new Date();
    const timeString = date.toLocaleTimeString("en-US", { hour12: true });
    const taskName =
      button.parentElement.parentElement.querySelector("h3").innerText;
    const p = document.createElement("p");
    p.classList.add(
      "bg-secondary",
      "rounded-xl",
      "text-sm",
      "text-black",
      "opacity-70",
      "px-3",
      "py-2",
      "text-center",
      "xl:text-left",
      "max-w-lg",
      "md:max-w-xl",
      "mx-auto",
      "activity"
    );
    p.style.backgroundColor = document.body.style.backgroundColor;
    p.innerHTML =
      "You have completed the task " +
      `'${taskName}'` +
      " at " +
      `${timeString}.`;
    button.innerHTML = "Completed";
    button.disabled = true;
    taskAssignedCount.innerText =
      "0" + (Number(taskAssignedCount.innerText) - 1);
    taskCompletedCount.innerText =
      "0" + (Number(taskCompletedCount.innerText) + 1);
    activityLog.appendChild(p);
    alert(`The task '${taskName}' has been completed successfully.`);

    if (taskAssignedCount.innerText === "00") {
      alert("Congratulations!!! You have completed all the current tasks.");
    }
  });
}

document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    activityLog.innerHTML = "";
  });
