import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"



function App() {
  

  return (
    <>
      <div className="bg-teal-200 min-h-screen px-6 py-3 flex flex-col gap-16 md: px-10 py-7 md:justify-between lg:px-28 lg:py-20">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App

