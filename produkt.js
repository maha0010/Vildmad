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

function showData(data) {
  console.log(data);
  //sitem.forEach(showItem);

  const singleProduct = data[0];
}
//function showItem() {
//console.log(data);
//}
