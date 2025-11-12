

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 z-50 left-0 right-0 bg-gray-600 h-20 p-0.5 w-full flex justify-between">
    <div className="text-red-600 font-mono text-2xl tracking[-1px]  shadow underline bg-gray-950 flex items-center px-2 rounded">
        <h1>Davinci</h1>
    </div>
      <div className=" flex gap-4 justify-evenly text-xl text-red-500 hover:text-red-800 font-mono tracking-[1px]">
        <Link to="/">Home</Link>
        <Link to="/more">More</Link>
        <Link to="/davinci">Sign Up</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

    </>
  )
}

export default Navbar



