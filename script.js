$(document).ready(function() {
    // Set up the orbiting bars
    createOrbits();
  
    // Move the orbiting bars
    setInterval(moveOrbits, 10);
  });
  
  function createOrbits() {
    var orbitContainer = document.getElementById("orbit-container");
    var numOrbits = 8;
    var angleIncrement = (2 * Math.PI) / numOrbits;
    var radius = 150;
  
    for (var i = 0; i < numOrbits; i++) {
      // Create a new orbiting bar
      var orbit = document.createElement("div");
      orbit.className = "orbit";
      orbit.style.transform = "rotate(" + i * angleIncrement + "rad) skewY(30deg)";
  
      // Create the text for the orbiting bar
      var text = document.createElement("span");
      text.innerHTML = "Eiusmod tempor";
      orbit.appendChild(text);
  
      // Add the orbiting bar to the container
      orbitContainer.appendChild(orbit);
  
      // Set the initial angle of the orbiting bar
      var angle = i * angleIncrement;
  
      // Set the position of the orbiting bar
      var centerX = orbitContainer.offsetWidth / 2;
      var centerY = orbitContainer.offsetHeight / 2;
      var x = centerX + radius * Math.cos(angle);
      var y = centerY + radius * Math.sin(angle);
      orbit.style.left = x - orbit.offsetWidth / 2 + "px";
      orbit.style.top = y - orbit.offsetHeight / 2 + "px";
    }
  }
  
  function moveOrbits() {
    var orbitContainer = document.getElementById("orbit-container");
    var orbits = orbitContainer.getElementsByClassName("orbit");
    var angleIncrement = 0.01;
    var radius = 150;
  
    for (var i = 0; i < orbits.length; i++) {
      // Get the current angle of the orbiting bar
      var angle = parseFloat(orbits[i].getAttribute("data-angle"));
  
      // Update the angle of the orbiting bar
      angle += angleIncrement;
      orbits[i].setAttribute("data-angle", angle);
  
      // Calculate the position of the orbiting bar
      var centerX = orbitContainer.offsetWidth / 2;
      var centerY = orbitContainer.offsetHeight / 2;
      var x = centerX + radius * Math.cos(angle);
      var y = centerY + radius * Math.sin(angle);
  
     
      // Set the position of the orbiting bar
      orbits[i].style.left = x - orbits[i].offsetWidth / 2 + "px";
      orbits[i].style.top = y - orbits[i].offsetHeight / 2 + "px";
    }
}
