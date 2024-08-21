import { useEffect, useState } from "react";
import HeroItem from "./heroItem";
import { callApi } from "./call-api";

function fetchHeroes(){
  return callApi("heroes")
}
function HeroesList() {
  const [heroes, setHeroes] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetchHeroes()
  .then((heroes)=>{
    setLoading(false);
    setHeroes(heroes)
  })
  },[])
  
  
  if(loading) {
    return <h1>Loading!</h1>
  }
  console.log(heroes)
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