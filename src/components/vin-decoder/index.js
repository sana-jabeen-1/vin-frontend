import React, { useState } from "react";
import "./style.css"; // Ensure you import your CSS file
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

const VinDecode = () => {
  const [activeTab, setActiveTab] = useState("vinDecoder");

  return (
    <div className="w-full">
      <div className="sm:px-12 mt-14 md:mt-0 px-2 w-full">
        <div className="mx-auto w-full px-2 py-3 md:py-0 md:px-0">
          <div className="relative text-left">
            <div className="font-bai text-center md:text-left my-2 md:my-0">
              <h1 className="font-bold sm:leading-5 md:leading-[50px] mt-0 text-3xl md:text-4xl lg:text-5xl xl:text-[4vw] 2xl:text-6xl text-secondary">
                Decode VIN or License Plate
              </h1>
            </div>
          </div>
          <div className="w-2 h-[0.5vw]"></div>
          <div className="mt-2">
            <div className="flex w-full my-4 flex-wrap">
              <div className="h-7"></div>
              <div className="md:hidden left-0 no-scrollbar absolute flex w-screen overflow-x-scroll justify-start">
                <div
                  className={`w-full ${
                    activeTab === "vinDecoder" ? "bg-secondary" : ""
                  }`}
                >
                  <div
                    className="cursor-pointer p-2 py-1 px-4 text-sm transition-all text-center font-roboto md:text-xl font-bold"
                    onClick={() => setActiveTab("vinDecoder")}
                  >
                    <span className="font-roboto text-gray-800 font-bold whitespace-nowrap">
                      VIN Decoder
                    </span>
                  </div>
                  <div
                    className={`h-1 cursor-pointer w-full ${
                      activeTab === "vinDecoder" ? "bg-primary" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
                <div
                  className={`w-full ${
                    activeTab === "licensePlateDecoder" ? "bg-secondary" : ""
                  }`}
                >
                  <div
                    className="cursor-pointer p-2 py-1 px-4 text-sm transition-all text-center font-roboto md:text-xl font-bold"
                    onClick={() => setActiveTab("licensePlateDecoder")}
                  >
                    <span className="font-roboto text-gray-800 font-bold whitespace-nowrap">
                      License Plate Decoder
                    </span>
                  </div>
                  <div
                    className={`h-1 cursor-pointer w-full ${
                      activeTab === "licensePlateDecoder"
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            {activeTab === "vinDecoder" && (
              <div className="mt-10">
                <ul>
                  <li>
                    Decode any VIN (USA) to get detailed vehicle specifications
                  </li>
                </ul>
                <h1 className="title-sm text-primary font-bold">VIN Decoder</h1>
                <form className="my-4">
                  <div>
                    <div className="w-full flex relative sm:hidden">
                      <div className="w-full md:w-auto">
                        <label
                          className="block form-label"
                          style={{ marginBottom: "15px" }}
                        >
                          VIN
                        </label>

                        <TextField
                          id="outlined-required"
                          defaultValue="Enter VIN number"
                          style={{ minWidth: "500px", background: "#FFF" }}
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <p className="text-xs md:w-96 text-right mt-1 text-gray-400">
                      VIN: 0/17
                    </p>
                  </div>
                  <div className="w-full">
                    <button
                      id="decodevin-vindecoder"
                      type="button"
                      className="uppercase block disabled:bg-gray-300 font-roboto font-black text-white rounded tracking-wider h-12 mt-4 w-full md:w-60 h-full min-h-12 block w-full active:opacity-90 px-3 bg-primary"
                      style={{ minWidth: "500px" }}
                    >
                      Decode VIN
                    </button>
                  </div>
                </form>
                <p className="text-success"></p>
              </div>
            )}
            {activeTab === "licensePlateDecoder" && (
              <Container maxWidth="md" sx={{ minHeight: "65vh", mt: 4 }}>
                <ul>
                  <li>
                    Decode any license plate (USA) to get VIN and detailed
                    vehicle specifications
                  </li>
                </ul>
                <Typography
                  variant="h4"
                  color="primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  License Plate Decoder
                </Typography>
                <FormControl fullWidth margin="normal">
                  <label
                    className="block form-label"
                    style={{ marginBottom: "15px" }}
                  >
                    License Plate
                  </label>
                  <TextField
                    placeholder="Enter license plate"
                    id="license-plate"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <label
                    className="block form-label"
                    style={{ marginBottom: "15px" }}
                  >
                    State
                  </label>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Decode Plate
                </Button>
              </Container>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinDecode;
