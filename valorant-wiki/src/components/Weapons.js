import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    async function getWeapons() {
      const response = await axios.get("https://valorant-api.com/v1/weapons");
      let weapons = [[], [], [], [], [], [], []];
      response.data.data.forEach((weapon) => {
        switch (weapon.category.slice(21,)) {
          case "Sidearm":
            weapons[0].push(weapon);
            break;
          case "SMG":
            weapons[1].push(weapon);
            break;
          case "Shotgun":
            weapons[2].push(weapon);
            break;
          case "Rifle":
            weapons[3].push(weapon);
            break;
          case "Heavy":
            weapons[4].push(weapon);
            break;
          case "Sniper":
            weapons[5].push(weapon);
            break;
          case "Melee":
            weapons[6].push(weapon);
            break;
        }
      }
      )
      weapons.forEach((category) => {
        category.sort((a, b) => a.shopData.cost - b.shopData.cost)
      })
      setWeapons(weapons);
      console.log(weapons);
    }

    getWeapons();
  }, [])

  return (<>
    <h1>Default Weapons</h1>
    <div className="weaponsContainer">
      {weapons.map((group, index) => (
        <div className="categoriesContainer">
          <h2 className="categoryName"> {(group[0].category.substr(21,) + "s").toUpperCase()}</h2>
          <div className="categoryContainer" id={`categoryContainer${index}`}>
            {group.map((weapon, index) => (
              <div className="weaponContainer">
                {weapon.category.substr(21,) == "Sidearm" ? (<img className="weaponImgPistol" id={`weaponImgPistol${index}`} src={weapon.displayIcon} alt="error" />)
                  : (weapon.category.substr(21,) == "SMG" ? (<img className="weaponImgSMG" src={weapon.displayIcon} alt="error" />)
                    : (weapon.category.substr(21,) == "Shotgun" ? (<img className="weaponImgShotgun" src={weapon.displayIcon} id={`weaponImgShotgun${index}`} alt="error" />)
                      : (weapon.category.substr(21,) != "Melee" ? (<img className="weaponImgLarge" src={weapon.displayIcon} id={`weaponImgLarge${index}`} alt="error" />)
                        : (<img className="weaponImgKnife" src={weapon.displayIcon} alt="error" />))))}
                {weapon.shopData ? (
                  <div className="weaponInfo">
                    <div className="weaponName">{weapon.displayName}</div>
                    {(weapon.shopData.cost != 0) ? (<div>{weapon.shopData.cost} credits</div>) : (<div>FREE</div>)}                <div>Fire Rate: </div>
                    <div>{weapon.weaponStats.fireRate} bps</div>
                    <div>Magazine Size: </div>
                    <div>{weapon.weaponStats.magazineSize}</div>
                  </div>)
                  : (<div className="weaponInfo" id="knife"><div>Default Knife</div></div>)}
              </div>
            ))}</div>
        </div>
      ))}
    </div>
  </>
  )
}