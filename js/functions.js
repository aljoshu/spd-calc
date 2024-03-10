// Validate form inputs and calculate SPD
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Input Values
  var turnInput = document.getElementById("turnInput").value;
  var cycleInput = document.getElementById("cycleInput").value;
  var vonwacqCheckbox = document.getElementById("vonwacq");
  var hsBronyaCheckbox = document.getElementById("hsBronya");
  var spd = 0;
  var mods = 0;

  // Validate turns
  if (!Number.isInteger(Number(turnInput))) {
      document.getElementById("turnError").classList.remove("hidden");
      return;
  } else {
      document.getElementById("turnError").classList.add("hidden");
  }

  // Validate cycles
  if (!Number.isInteger(Number(cycleInput))) {
      document.getElementById("cycleError").classList.remove("hidden");
      return;
  } else {
      document.getElementById("cycleError").classList.add("hidden");
  }

  // Hide error messages if inputs are valid
  document.getElementById("turnError").classList.add("hidden");
  document.getElementById("cycleError").classList.add("hidden");

  // Account for mods
  if(vonwacqCheckbox.checked) {
      mods += 4000;
  }
  if(hsBronyaCheckbox.checked) {
      mods += 3000;
  }

  // Calculate spd
  if(cycleInput == 1) {
      spd = parseFloat(((10000 * turnInput - mods) / 150).toFixed(2));
  } else {
      spd = parseFloat((10000 * turnInput - mods) / (150 + 100 * (cycleInput - 1)).toFixed(2));
  }

  // Print the result on screen
  document.getElementById("result").innerHTML = 
      "Turn(s): " + turnInput + "<br />" +
      "Cycle(s): " + cycleInput + "<br />" +
      "You need " + spd + ' <img src="/img/spd.png" alt="SPD" class="icon-img">(spd)';
});
