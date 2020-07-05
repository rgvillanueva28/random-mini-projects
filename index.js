addSub = () => {
  removeTotal();

  let tbl = document.getElementById("tbody");

  var row = tbl.insertRow(-1);

  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);

  var input0 = document.createElement("input");
  input0.setAttribute(
    "class",
    "w-full py-5 lg:py-1 text-center text-4xl lg:text-base focus:outline-none"
  );
  var input1 = document.createElement("input");
  input1.setAttribute(
    "class",
    "w-full py-5 lg:py-1 text-center text-4xl lg:text-base focus:outline-none"
  );
  var input2 = document.createElement("input");
  input2.setAttribute(
    "class",
    "w-full py-5 lg:py-1 text-center text-4xl lg:text-base focus:outline-none"
  );

  cell0.setAttribute("class", "border-2 border-gray-600 shadow-md");
  cell1.setAttribute("class", "border-2 border-gray-600 shadow-md");
  cell2.setAttribute("class", "border-2 border-gray-600 shadow-md");

  cell0.appendChild(input0);
  cell1.appendChild(input1);
  cell2.appendChild(input2);
};

removeRow = () => {
  removeTotal();

  let tbl = document.getElementById("tbody");

  let rowCount = tbl.rows.length;

  if (rowCount === 1) {
    alert("Last na nga dedelete mo pa? Gago ka ba?");
  } else {
    tbl.deleteRow(rowCount - 1);
  }
};

async function compute() {
  await removeTotal();

  var totalGrade = 0;
  var totalUnits = 0;
  var countedValue = 0;
  var tbl = document.getElementById("tbody");
  var gwaText = document.getElementById("GWA");
  var rowCount = tbl.rows.length;

  for (var i = 0; i < rowCount; i++) {
    var tRow = tbl.rows[i];
    var tCell = tRow.cells[1];
    var tCell2 = tRow.cells[2];
    var grade = tCell.firstElementChild.value;
    var units = tCell2.firstElementChild.value;
    totalGrade += parseFloat(grade);
    totalUnits += parseFloat(units);
    countedValue += grade * units;
  }

  var GWA = countedValue / totalUnits;

  if (Number.isNaN(totalGrade) || Number.isNaN(totalUnits)) {
    alert(
      "Lagyan mo lahat ng GRADE at UNITS. Kung hindi tanggalin mo nalang lahat ng blangko."
    );
  } else {
    var row = tbl.insertRow(-1);
    row.setAttribute("id", "totalRow");

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    cell0.setAttribute("class", "w-full text-center text-5xl  lg:text-xl");
    cell1.setAttribute("class", "w-full text-center text-5xl lg:text-xl");
    cell2.setAttribute("class", "w-full text-center text-5xl lg:text-xl");
    cell0.innerHTML = "TOTAL";
    cell1.innerHTML = totalGrade;
    cell2.innerHTML = totalUnits;
    gwaText.innerHTML = "GWA = " + GWA;

    if (GWA <= 1.5) {
      gwaText.innerHTML +=
        "<br />" + "<b>Full Academic Scholarship.</b> Congratulations.";
    } else if (GWA <= 1.75) {
      gwaText.innerHTML +=
        "<br />" + "<b>Half Academic Scholarship.</b> Congrats.";
    } else {
      gwaText.innerHTML += "<br />" + "'Di abot sa scholarship bui.";
    }
  }
}

removeTotal = () => {
  try {
    totalRow = document.getElementById("totalRow");
    totalRow.parentNode.removeChild(totalRow);
  } catch {
    ("");
  }
};

clearAll = () => {
  removeTotal();

  tblForm = document.getElementById("tblForm");
  tblForm.reset();
  document.getElementById("GWA").innerHTML = "";
};

addSub();
