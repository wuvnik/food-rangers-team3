import React, { useState } from "react";
import { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";

const data = [
  {
    item: "vege",
    description: "vege",
    id: 1,
    business_id: 1,
    is_halal: "1",
    is_raw: "1",
    charges: "0.00",
    quantity: "19kg",
  },
  {
    item: "fruits",
    description: "fruite",
    id: 2,
    business_id: 1,
    is_halal: "1",
    is_raw: "1",
    charges: "0.00",
    quantity: "100kg",
  },
  {
    item: "cake",
    description: "cake",
    id: 3,
    business_id: 2,
    is_halal: "1",
    is_raw: "1",
    charges: "0.00",
    quantity: "10",
  },
  {
    item: "coke",
    description: "coke",
    id: 4,
    business_id: 2,
    is_halal: "1",
    is_raw: "1",
    charges: "0.00",
    quantity: "40",
  },
];

const User = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    // API call here
    const getFoods = async () => {
      const foods = await axios
        .get("https://team3api.azurewebsites.net/items/?skip=0&limit=100")
        .then((res) => res.data);
      setFoodData(foods);
    };

    getFoods();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10 text-xl text-[#2f81e4] bg-[#232121] bg-gradient-to-rfrom-white to-[#def0f5] flex border-b p-5 font-bold tracking-tight">
        Food Rangers
      </header>
      <div className="relative p-5">
        <Typography className="px-5" variant="h4" color="gray">
          List of Free Foods
        </Typography>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 list-decimals p-5 space-x-5z">
          {foodData.map((item, i) => {
            return (
              <li key={i} className=" w-64 border p-3 shadow bg-gray-100">
                <div className="font-bold text-xl text-[#2abebe]">
                  {item.item}
                </div>
                <div className="text-sm">
                  <div className="">Description: {item.description}</div>
                  <div className="">
                    Halal Status:{" "}
                    {item.is_halal === "1" ? "Halal" : "Non-halal"}
                  </div>
                  <div className="">
                    Ingredients: {item.raw === "1" ? "Raw" : "Not raw"}
                  </div>
                  <div className="">Charges: {item.charges}</div>
                  <div className="">Quantity: {item.quantity}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default User;
