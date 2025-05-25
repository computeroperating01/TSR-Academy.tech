document.getElementById("searchBar").addEventListener("keyup", function () {
  let input = this.value.toLowerCase();
  let cards = document.querySelectorAll(".book-card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
});