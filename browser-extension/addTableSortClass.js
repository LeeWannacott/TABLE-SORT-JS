document.body.style.border = "1px solid red";

let tables = document.querySelectorAll("table");

Array.from(tables).map((table) => {
  return table.classList.add("table-sort");
});
