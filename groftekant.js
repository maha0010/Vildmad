fetch("https://tbszjlaortueltcpxswk.supabase.co/rest/v1/Product?Area=eq.Ditch&limit=3", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRic3pqbGFvcnR1ZWx0Y3B4c3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjAyMzEsImV4cCI6MjAyMzM5NjIzMX0.IWQgVSEG8f5kzVcyQ4aF89Nm_D_5FBdMZm8kVvxEGX4",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);

  items.forEach(showItem);
}

function showItem(item) {
  console.log(item);

  //Fang template
  const template = document.querySelector("#card").content;
  //Lav kopi
  const copy = template.cloneNode(true);
  //Ændre indhold

  copy.querySelector("img").src = item.Image;
  copy.querySelector("a").href = `produkt.html?id=${item.id}`;
  copy.querySelector(".product_p").textContent = item.Productname;

  //Appende;
  document.querySelector(".grid-1_1_1").appendChild(copy);
}
