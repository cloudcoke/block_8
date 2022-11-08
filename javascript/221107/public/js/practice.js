const lsList = document.querySelectorAll(".ls");

for (let i = 0; i < lsList.length; i++) {
  lsList[i].innerHTML = `list1-${i + 1}`;
  console.log(lsList[i].innerHTML);
}
