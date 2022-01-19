import React, { useState } from 'react'

function App() {

  const data = useState({
    name: "James",
    location: "Alabama"
  })
const dataContent = data[0]
const dataSetter = data[1]
  console.log(dataContent, dataSetter);

  return (
    <>
<Header />
<main>
  main
</main>
<footer>
  footer
</footer>

  </>
  );
}

export default App;
