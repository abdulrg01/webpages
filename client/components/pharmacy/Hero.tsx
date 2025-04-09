import { MapPin, Navigation } from "lucide-react";
import AnimatedBurger from "./animated-burger";
import Header from "./Nav";

export default function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with yellow background */}
      <div className="bg-[#56a747] flex-1">
        <Header />

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center">
          {/* Burger Image */}
          <div className="w-full md:w-1/2 flex justify-center md:mt-10">
            <AnimatedBurger />
          </div>

          {/* Hero Text and Search */}
          <div className="w-full md:w-1/2 space-y-6 -mt-14">
            <h1 className="text-5xl md:text-6xl max-sm:text-center font-bold text-white">
              Sauki delivery
            </h1>
            <p className="text-xl md:text-2xl max-sm:text-center text-white">
              Zamu kawo maka magani duk inda kake. Yi mana magana ta whatsApp
              dinmu
            </p>

            {/* Address Input */}
            <div className="bg-white rounded-full p-1 flex items-center shadow-md">
              <div className="flex items-center flex-1 pl-4">
                <MapPin className="text-gray-500 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="What's the prescription?"
                  className="w-full py-2 px-2 focus:outline-none text-gray-800"
                />
              </div>
              <button className="bg-[#E6F7F4] text-[#56a747] px-4 py-2 rounded-full flex items-center font-medium">
                <Navigation className="mr-2" size={16} />
                Doctor prescription only
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black">
            Magani mai inganci
          </h2>
        </div>
      </div>
    </div>
  );
}
