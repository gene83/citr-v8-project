import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

type AdoptedPetState = [Pet | null, (adoptedPet: Pet) => void];

const AdoptedPetContext = createContext<AdoptedPetState>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
