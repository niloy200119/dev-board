const today = new Date();
const weekday = today.toLocaleDateString("en-US", { weekday: "long" });

const formattedToday = today.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

let deadline = new Date();
deadline.setDate(deadline.getDate() + 20);

const formattedDeadline = deadline.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const elements = document.getElementsByClassName("deadline");
document.getElementById("weekday").innerText = weekday;
document.getElementById("today").innerText = formattedToday;

for (const e of elements) {
  e.innerText = formattedDeadline;
}
