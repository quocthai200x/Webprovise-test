import { atom } from "recoil";
import { typeTemputure } from "../constant";

export const userSettingsState = atom({
    key: "userSettings",
    default: {
        temperature: typeTemputure.F,
        dayChosen: 0,
    }
})