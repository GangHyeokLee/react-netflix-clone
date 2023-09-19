import React, {useEffect, useState} from 'react'
import "./nav.css"

export default function Nav() {
    const [show, setshow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 50){
                // console.log(window.scrollY)
                setshow(true);
            }else{
                setshow(false);
            }
        })

        return () =>{
            window.removeEventListener("scroll", () =>{});
        }
    })

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
        alt='Netflix Logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://occ-0-1360-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcTfDTM3oHx4rFqndqkNITU7rFipT1w0emptYNA0JKiToaRWZ6tlLSMOqjXhlAMBd74YgXLYZxNfFKWInrL8ndVLMxS-1Y0.png?r=64f"
            className="nav__avatar"
        />
    </nav>
  )
}
