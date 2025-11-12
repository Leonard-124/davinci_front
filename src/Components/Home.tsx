// import Dashboard from "../Pages/Dashboard"
// import  Footer from "../Pages/Footer"
// import Navbar from "../Pages/Navbar"

// const home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Dashboard />
//       <Footer />
//     </div>
//   )
// }

// export default home
///////////////////////////////////////////////
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="bg-white max-h-full">
        <div className=" flex  justify-between gap-2 ">
          <div className="w-[350px] max-h-full bg-[#a6d78b] ml-1 mt-1 flex flex-col gap-3">
            <Link to="/davinci">Davinci</Link>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
          </div>
          <div className="flex flex-col  w-full gap-2 ">
            <div className="bg-[#a6d78b] h-12  mt-1 mr-1">
              <h2>Davinci. AI</h2>
            </div>
            <div className="w-full  flex gap-2">
              <div className="w-full bg-[#a6d78b] h-96">
                <div className="text-center">
                  <h1>Hello Leonard Tell us what to analyze!.</h1>
                </div>
                <div className="flex justify-center">
                  <textarea name="" id="" cols={30} rows={15} placeholder="Write Your Financial Prompt..." className="border border-gray-300 shadow-md w-full m-2 h-40"></textarea>
                </div>
                <div className="text-center">
                  <h1>Tools</h1>
                  <div className="flex justify-around">
                    <h1>Mpesa</h1>
                    <h1>Visa</h1>
                    <h1>Mobile Money</h1>
                    <h1>Forex</h1>
                    <h1>Bank</h1>
                  </div>
                </div>
              </div>
              <div className=" w-[400px] bg-[#a6d78b] mr-1">
                <h1>Other Text</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 bg-[#a6d78b] mt-2 ml-1 mr-1">
          <div className="text-center">
            <h1>Terms and Conditions Apply</h1>
          </div>
          </div>
      </div>
    </>
  )
}

export default Home

