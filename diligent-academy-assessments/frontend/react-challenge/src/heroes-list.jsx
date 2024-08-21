import { useEffect, useState } from "react";
import HeroItem from "./heroItem";
import { callApi } from "./call-api";
import useFetch from "./Fetch";

function fetchHeroes(){
  return callApi("heroes")
}
function HeroesList() {
  const { data: heroes, loading, error } = useFetch(fetchHeroes())
  
  
  if (loading) return <h1>Loading!</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
    <h2>Heroes</h2>
      <h2 className="hero-list">
        {heroes.map((hero) => {
          return <HeroItem hero={hero} key={hero.id}/>
          
        })}
      </h2>
    </>
  );
}

export default HeroesList;