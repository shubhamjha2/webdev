import { createContext, useContext } from "react";

export const TheamContext =createContext({
    thememode:"light",
    darktheme:()=>{},
    lightheme:()=>{},
});

export const TheamContextProvider = TheamContext.Provider

export default function useTheme(){

    return useContext(TheamContext);
}