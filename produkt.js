const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://tbszjlaortueltcpxswk.supabase.co/rest/v1/Product?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRic3pqbGFvcnR1ZWx0Y3B4c3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MjAyMzEsImV4cCI6MjAyMzM5NjIzMX0.IWQgVSEG8f5kzVcyQ4aF89Nm_D_5FBdMZm8kVvxEGX4",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(item) {
  console.log(item);

  //Fang template
  const template = document.querySelector("#single_product_template").content;
  //Lav kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("h1").textContent = item.Productname;
  //copy.querySelector("h2").textContent = data.Productname;
  copy.querySelector("p").textContent = item.Description;

  copy.querySelector("img").src = item.Image;
  //copy.querySelector(".produkt_link").href = `produkt.html?id=${data.id}`;

  //Appende;
  document.querySelector(".single_product").appendChild(copy);
}

//function showItem() {
//console.log(data);
//}
