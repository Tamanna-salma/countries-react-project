import { Suspense } from "react"
import Header from "./components/Header"
import Country from "./components/Countries/Country"
const countriespromise =fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {
  
  return (
    <>
    <Suspense fallback={<h2>loading......</h2>}>
      <Header countriespromise={countriespromise}></Header>
    </Suspense>
    {/* <Country></Country> */}
    </>
  )
}
export default App



