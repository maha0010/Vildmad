fetch("https://tbszjlaortueltcpxswk.supabase.co/rest/v1/Product?Area=eq.Grassland?limit=3", {
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
  const template = document.querySelector("#").content;
  //Lav kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("h2").textContent = item.Productname;

  copy.querySelector("img").src = item.Image;
  copy.querySelector(".produkt_link").href = `produkt.html?id=${item.id}`;

  //Appende;
  document.querySelector("").appendChild(copy);
}
