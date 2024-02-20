fetch("https://tbszjlaortueltcpxswk.supabase.co/rest/v1/Product", {
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
  const template = document.querySelector("#product_template").content;
  //Lav kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("h2").textContent = item.Productname;
  copy.querySelector("p span").textContent = item.Area;

  copy.querySelector("img").src = item.Image;
  copy.querySelector(".produkt_link").href = `produkt.html?id=${item.id}`;

  //Appende;
  document.querySelector(".product_list_div").appendChild(copy);
}

//"https://tbszjlaortueltcpxswk.supabase.co/rest/v1/Product?Area=eq.Grassland"

//"https://tbszjlaortueltcpxswk.supabase.co/rest/v1/Product?A";
// Her vises mit datasæt, hvorefter der filtreres efter hvilke produkter der vokser i Grassland
