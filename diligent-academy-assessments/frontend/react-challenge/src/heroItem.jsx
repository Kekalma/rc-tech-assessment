import { useState } from "react"
import './hero.css'

const HeroItem = ({hero}) =>{
    const [currentHero, setCurrentHero] = useState(hero)
    const changeHeroAvailability = () =>{
        const changedHero = { ...currentHero, available: !currentHero.available };
        setCurrentHero(changedHero)
        console.log(changedHero)
    }
    if(currentHero.available){
        return(
            <div className="hero-item" onClick={() => changeHeroAvailability()}>
                <h4 style={{ color: 'green' }}>{currentHero.name}  {currentHero.id}  {currentHero.available}</h4>
            </div>
        )
    }
    if(!currentHero.available){
        return(
            <div className="hero-item" onClick={() => changeHeroAvailability()}>
                <h4 style={{ color: 'red' }}>{currentHero.name} {currentHero.id}</h4>
            </div>
        )
        
    }
    
}
export default HeroItem;