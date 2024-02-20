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
  //Ændre indhold
  document.querySelector("h1").textContent = item[0].Productname;
  //document.querySelector("h2").textContent = data.Productname;
  document.querySelector("p").textContent = item[0].Description;
  document.querySelector(".hero_billede").src = item[0].hero_image;
  document.querySelector(".forage_area_p").textContent = item[0].area_description;
  document.querySelector(".season_p").textContent = item[0].Season;

  document.querySelector(".produkt_billede").src = item[0].Image;
  //copy.querySelector(".produkt_link").href = `produkt.html?id=${data.id}`;
}

//function showItem() {
//console.log(data);
//}
