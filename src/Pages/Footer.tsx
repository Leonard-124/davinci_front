
const Footer = () => {
  return (
    <>
      <div className="bg-gray-600  w-full h-[250px] ">
        <div className="flex justify-around">
            <div className="flex flex-col text-white pt-5 font-medium">
                <h1 className="text-2xl pb-3">About Us</h1>
                {/* <p className="text-sm pr-5">Davinci is an AI-powered platform that leverages advanced language models to provide users with intelligent and context-aware responses. Our mission is to make information more accessible and interactions more natural through the power of artificial intelligence.</p> */}
                <h1 className="text-xl pb-2">Our Vision</h1>
                <h1 className="text-xl pb-2">Our Team</h1>
                <h1 className="text-xl pb-2">Our History</h1>
                <h1 className="text-xl pb-2">Contact Us</h1>
            </div>
            <div className="flex flex-col text-white pt-5 font-medium">
                <h1 className="text-2xl pb-3">Services</h1>
                <h1 className="text-xl pb-2">AI Chatbot</h1>
                <h1 className="text-xl pb-2">Custom Solutions</h1>
            </div>
            <div className="flex flex-col text-white pt-5 font-medium">
                <h1 className="text-2xl pb-3">Support</h1>
                <h1 className="text-xl pb-2">Help Center</h1>
                <h1 className="text-xl pb-2">FAQs</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
