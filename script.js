const form = document.getElementById("dataForm");
const dataList = document.getElementById("dataList");

// Load saved data
let records = JSON.parse(localStorage.getItem("records")) || [];

function renderData() {
  dataList.innerHTML = "";

  records.forEach((record, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${record.name}</strong>: ${record.info}</span>
      <button class="delete-btn" onclick="deleteData(${index})">X</button>
    `;
    dataList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const info = document.getElementById("info").value;

  records.push({ name, info });

  localStorage.setItem("records", JSON.stringify(records));

  form.reset();
  renderData();
});

function deleteData(index) {
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  renderData();
}

renderData();
