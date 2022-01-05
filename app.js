function bmrCals() {
  function find(id) {
    return document.getElementById(id);
  }
  var age = find("age").value;
  var height = find("height").value;
  var weight = find("weight").value;
  var result = 0;
  if (find("male").checked) {
    result = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (find("female").checked)
    result = 10 * weight + 6.25 * height - 5 * age - 161;
  find("bmrCals").innerHTML = result;
}
