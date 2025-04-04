"use client";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteSlider } from "../ui/infinite-slider";

const gasStations = [
  { id: 1, name: "Katsina State - 1", location: "Along Yahaya Madaki way" },
  { id: 2, name: "Katsina State - 2", location: "Along Kofar Kaura I.B.B way" },
  { id: 3, name: "Katsina State - 3", location: "Along Usman Nagogo Road" },
  { id: 4, name: "Katsina State - 4", location: "Along Mani Road" },
  { id: 5, name: "Katsina State - 5", location: "Along Dandagoro Kano Road" },
  { id: 6, name: "Katsina State - 6", location: "Along I.B.B Way Nepa" },
  { id: 7, name: "Katsina State - 7", location: "Along Dutsinma Road" },
  { id: 8, name: "Katsina State - 8", location: "Along Daura Road" },
  { id: 9, name: "Katsina State - 9", location: "Along Malumfashi Road" },
  { id: 10, name: "Katsina State - 10", location: "Along Funtua Road" },
  { id: 11, name: "Katsina State - 11", location: "Along Jibia Road" },
  { id: 12, name: "Katsina State - 12", location: "Along Batsari Road" },
];

// Split gas stations into columns
const column1Stations = [
  gasStations[0],
  gasStations[3],
  gasStations[6],
  gasStations[9],
];
const column2Stations = [
  gasStations[1],
  gasStations[4],
  gasStations[7],
  gasStations[10],
];
const column3Stations = [
  gasStations[2],
  gasStations[5],
  gasStations[8],
  gasStations[11],
];

export default function GasStationLocations() {
  return (
    <section
      className="overflow-hidden py-16 relative"
      style={{ backgroundColor: "#1a1a8e" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/danmarna.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="m-auto max-w-7xl px-6">
        <div className="mb-20 text-center relative z-10">
          <p className="mt-4 font-semibold text-blue-200">We are in O<span className="border-b-2 border-red-500 pb-1">ver</span> 15+ States</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-6xl">
            Extensive Reach:
          </h2>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-6xl">
            100+ Fuel Stations Spanning Nigeria
          </h2>
        </div>
        <div className="relative h-[600px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-full">
            {/* Column 1 - Fast */}
            <div className="w-full">
              <InfiniteSlider
                direction="vertical"
                speed={40}
                speedOnHover={15}
                gap={25}
                reverse={false}
                className="h-full"
              >
                {column1Stations.map((station) => (
                  <GasStationCard
                    key={`col1-${station.id}`}
                    station={station}
                  />
                ))}
              </InfiniteSlider>
            </div>

            {/* Column 2 - Slow (Middle Column) */}
            <div className="w-full">
              <InfiniteSlider
                direction="vertical"
                speed={20} // Slower speed for middle column
                speedOnHover={10}
                gap={25}
                reverse={true} // Reverse direction for visual variety
                className="h-full"
              >
                {column2Stations.map((station) => (
                  <GasStationCard
                    key={`col2-${station.id}`}
                    station={station}
                  />
                ))}
              </InfiniteSlider>
            </div>

            {/* Column 3 - Fast */}
            <div className="w-full">
              <InfiniteSlider
                direction="vertical"
                speed={35}
                speedOnHover={15}
                gap={25}
                reverse={false}
                className="h-full"
              >
                {column3Stations.map((station) => (
                  <GasStationCard
                    key={`col3-${station.id}`}
                    station={station}
                  />
                ))}
              </InfiniteSlider>
            </div>
            {/* Column 4 - Slow (Middle Column) */}
            <div className="w-full">
              <InfiniteSlider
                direction="vertical"
                speed={20} // Slower speed for middle column
                speedOnHover={10}
                gap={25}
                reverse={true} // Reverse direction for visual variety
                className="h-full"
              >
                {column2Stations.map((station) => (
                  <GasStationCard
                    key={`col2-${station.id}`}
                    station={station}
                  />
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface GasStationCardProps {
  station: {
    id: number;
    name: string;
    location: string;
  };
}

function GasStationCard({ station }: GasStationCardProps) {
  return (
    <Card className="bg-[#0a0a3d] rounded-none flex flex-col shadow-sm relative pt-8 mt-8">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 border shadow-lg border-gray-600/100 rounded-full bg-[#0a0a3d] p-2">
        <div className="flex h-22 w-22 items-center justify-center rounded-full bg-[#f13c3c]">
          <GasPumpIcon className="h-12 w-12 text-white" />
        </div>
      </div>
      <CardContent className="p-8 flex flex-col h-full items-center pt-16">
        <h3 className="text-xl font-bold text-[#f13c3c] text-center">
          {station.name}
        </h3>
        <p className="mt-2 text-white text-center">{station.location}</p>
      </CardContent>
    </Card>
  );
}

// Custom Gas Pump Icon
function GasPumpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 4v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4" />
      <path d="M6 3h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M5 9h14" />
      <path d="M15 12v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6.5a1.5 1.5 0 0 0-3 0V12z" />
    </svg>
  );
}
