"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getVehicle } from "../api/api";
import Main from "../components/main/main";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getVehicle().then((data) => setCars(data.Results || []));
  }, []);

  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);

  return (
    <Main className="flex flex-col gap-16 m-auto bg-lightBlue">
    <form>
      <div>
        <select
          className="p-4 m-4 border rounded w-[500px]"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">Select Model of Vehicle</option>
          {cars.map((car) => (
            <option key={car.MakeId} value={car.MakeId}>
              {car.MakeName}
            </option>
          ))}
        </select>
        <select
          className="p-4 m-4 border rounded w-[500px]"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Link
        href={`pages/result/${selectedMake}/${selectedYear}`}
        className={`block text-center rounded-tl-[71px] text-xl focus:outline-none rounded-tr-lg rounded-br-[71px] rounded-bl-lg py-2 px-4 h-[48px] w-[250px] 
          bg-buttonPurple text-white hover:shadow-shadowPrimaryBtn active:shadow-primaryBtnActive
          ${!selectedMake || !selectedYear ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </Link>
    </form>
    </Main>
  );
}
