import React, { useState } from "react";
import "./styles.css"; // Ensure you import the CSS file
import { PersonalVideo } from "@material-ui/icons";

const VehicleHistoryReport = () => {
  const [activeTab, setActiveTab] = useState("vehicleHistory");

  return (
    <div className="w-full">
      <div className="font-bai text-center md:text-left my-2 md:my-0">
        <h1 className="font-bold sm:leading-5 md:leading-[50px] mt-0 text-3xl md:text-4xl lg:text-5xl xl:text-[4vw] 2xl:text-6xl text-secondary">
          Explore our Products
        </h1>
      </div>

      <div className="mb-3 mt-6">
        <div className="flex w-full my-4 flex-wrap">
          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-nowrap">
            <div
              className={`w-full ${
                activeTab === "vehicleHistory" ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className="cursor-pointer p-2 py-1 px-4 text-sm transition-all text-center font-roboto md:text-xl font-bold"
                onClick={() => setActiveTab("vehicleHistory")}
              >
                <span className="font-roboto text-gray-800 font-bold whitespace-nowrap">
                  Vehicle History Report
                </span>
              </div>
              <div
                className={`h-1 w-full ${
                  activeTab === "vehicleHistory" ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div
              className={`w-full ${
                activeTab === "windowSticker" ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className="cursor-pointer p-2 py-1 px-4 text-sm transition-all text-center font-roboto md:text-xl font-bold"
                onClick={() => setActiveTab("windowSticker")}
              >
                <span className="font-roboto text-gray-800 font-bold whitespace-nowrap">
                  Window Sticker
                </span>
              </div>
              <div
                className={`h-1 w-full ${
                  activeTab === "windowSticker" ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="md:hidden left-0 no-scrollbar absolute flex w-screen overflow-x-scroll justify-start">
            <div
              className={`w-full ${
                activeTab === "vehicleHistory" ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className="cursor-pointer p-2 py-1 px-4 text-sm transition-all text-center font-roboto md:text-xl font-bold"
                onClick={() => setActiveTab("vehicleHistory")}
              >
                <span className="font-roboto text-gray-800 font-bold whitespace-nowrap">
                  Vehicle History Report
                </span>
              </div>
              <div
                className={`h-1 w-full ${
                  activeTab === "vehicleHistory" ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div
              className={`w-full ${
                activeTab === "windowSticker" ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className="cursor-pointer p-2 py-1 px-4 text-sm transition-all text-center font-roboto md:text-xl font-bold"
                onClick={() => setActiveTab("windowSticker")}
              >
                <span className="font-roboto text-gray-800 font-bold whitespace-nowrap">
                  Window Sticker
                </span>
              </div>
              <div
                className={`h-1 w-full ${
                  activeTab === "windowSticker" ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex mt-5 w-full mx-auto md:min-h-[535px]">
        {activeTab === "vehicleHistory" && (
          <section className="mt-5 w-full">
            <div className="md:block xl:flex items-start justify-between container mx-auto">
              <div className="w-full">
                <h2 className="title-lg mb-10 text-primary">
                  Vehicle History Report
                </h2>
                <div className="mt-6 font-roboto font-normal text-base sm:text-xl md:text-xl xl:w-2/3">
                  <p>
                    Learn about facts and uncover any vehicle’s hidden history
                    in seconds with Detailed Vehicle History.
                  </p>
                  <div className="ml-10">
                    <ul className="list-disc">
                      <li className="mt-4">
                        Most detailed vehicle history reports in the market
                      </li>
                      <li className="mt-4 md:whitespace-pre-wrap xl:whitespace-nowrap">
                        Reports never expire and are easily downloadable
                      </li>
                      <li className="mt-4">
                        Authentic information from trusted data sources
                      </li>
                      <li className="mt-4">
                        Up to 37% cheaper rates than competitors
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-[380px] px-8 h-14 mt-10 xl:-ml-8 xl:mx-0 mx-auto">
                  <a href="/members/credits">
                    <button
                      type="button"
                      className="uppercase block disabled:bg-gray-300 font-roboto font-black text-white rounded tracking-wider h-full w-full min-h-12 block w-full active:opacity-90 px-3 bg-primary"
                    >
                      BUY VEHICLE HISTORY REPORT(S)
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative flex-col items-center justify-center flex xl:mt-0">
                <div className="w-full">
                  <div className="w-full relative">
                    <div className="mt-16 xl:-mt-12 max-w-md xl:max-w-none mx-auto text-center">
                      <img
                        alt="Promo image"
                        loading="lazy"
                        width="600"
                        height="600"
                        src="/members/_next/image?url=%2Fmembers%2Fimages%2Fvhr.png&amp;w=1200&amp;q=75"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-14 text-center relative w-full mx-auto">
                  <a
                    target="_blank"
                    rel="no-referrer"
                    className="font-roboto xl:pl-14 text-lg md:text-2xl underline text-primary"
                    href="https://detailedvehiclehistory.com/report/vin/1HGFA15547L116880"
                  >
                    View Sample Report
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="title-lg mb-10 text-primary">
                What’s Included in Detailed Vehicle History Reports
              </h2>
              <div className="cards-area">
                {/* Report Features */}
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    <PersonalVideo />
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Title History
                  </span>
                  <span className="text-center text-sm">
                    Find out if the vehicle’s title history is clean or
                    possesses junk, rebuilt, salvage, or lemon title
                  </span>
                </div>

                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Ownership Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Ownership Records
                  </span>
                  <span className="text-center text-sm">
                    Learn the number of previous owners of the vehicle and where
                    it was located during its lifetime
                  </span>
                </div>
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Auction Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Auction Records
                  </span>
                  <span className="text-center text-sm">
                    Learn if the vehicle has ever been auctioned or sold- access
                    up to 10+ auction photos
                  </span>
                </div>
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Theft Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Theft Records
                  </span>
                  <span className="text-center text-sm">
                    Uncover if any vehicle has hidden history of theft or was
                    ever been stolen
                  </span>
                </div>
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Accident Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Accident Records
                  </span>
                  <span className="text-center text-sm">
                    Find out if a vehicle has been in a serious accident or has
                    damage records from minor collisions
                  </span>
                </div>
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Odometer Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Odometer Records
                  </span>
                  <span className="text-center text-sm">
                    Review the odometer readings to detect any discrepancies and
                    ensure the vehicle’s mileage is accurate
                  </span>
                </div>
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Service Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Service Records
                  </span>
                  <span className="text-center text-sm">
                    Know about the vehicle’s maintenance and service history
                  </span>
                </div>
                <div className="flex flex-col px-3 py-3 rounded-lg linear-gradient">
                  <div className="rounded-full flex items-center justify-center bg-primary h-12 w-12 mx-auto">
                    {/* Icon for Recall Records */}
                  </div>
                  <span className="text-center mb-3 text-base font-bold my-2 block mx-auto">
                    Recall Records
                  </span>
                  <span className="text-center text-sm">
                    Identify if the vehicle has any outstanding recalls or
                    safety issues that need to be addressed
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeTab === "windowSticker" && (
          <section className="mt-5">{/* Content for Window Sticker */}</section>
        )}
      </main>
    </div>
  );
};

export default VehicleHistoryReport;
