import React, { useState, useContext, useEffect } from "react";
import { TheamContextProvider, TheamContext } from "../../../context/theamchanging";
import Tooglebutton from "../../../components/Togglebutton";
import Card from "../../../components/card";

function Theam_changer() {
  const [thememode, setthememode] = useState("light")
  const darktheme =()=>{
    setthememode("dark")
  }
  const lightheme =()=>{
    setthememode("light")
  }
  useEffect(() => {
   document.querySelector('html').classList.remove("light","dark");
   document.querySelector('html').classList.add(thememode);
  }, [thememode])
  
  return (
    <TheamContextProvider value={{ thememode, darktheme, lightheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Tooglebutton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </TheamContextProvider>
  );
}

export default Theam_changer;
