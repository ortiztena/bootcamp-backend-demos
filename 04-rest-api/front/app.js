console.log("Running front app");

fetch("http://localhost:3000/api/hotels/1001265", {
  credentials: "include",
})
  .then((response) => {
    return response.json();
  })
  .then((hotel) => {
    console.log({ hotel });
  });
