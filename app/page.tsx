"use client"
import { CarCard, CustomFilter, Hero, SerchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allcars= await fetchCars();

  const isDataEmpty =!Array.isArray(allcars)||allcars.length <1 || !allcars;

  console.log(allcars)
  return (
    <main className=" overflow-hidden">
      <Hero/>
      <div className=" mt-12 padding-x padding-y max-width" id="discover">
        <div className="homw__text-container">
          <h1 className=" text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SerchBar/>
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="fuel"/>
          </div>
        </div>
        {!isDataEmpty?(
          <section>
            <div className="home__cars-wrapper">
              {allcars?.map((car)=>(
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className=" text-black text-xl font-bold">Oops, no results</h2>
            <p>{allcars?.messge}</p>
          </div>
        )}
      </div>
    </main>
  );
}
