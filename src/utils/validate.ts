import { PlantRegister } from "../types/PlantRegister";

type Error = {
  [key: string]: string;
};

export const validate = (data: PlantRegister) => {
  const numberRegex = /\d/
//   const priceRegex = /^\$\d+(\.\d{2})?$/

  const errors: Error = {};
  if (!data.name) {
    errors.name = "Please insert a name";
  } else if (data.name?.length < 3) {
    errors.name = "Minimum of 3 characters";
  } else if (numberRegex.test(data.name)) {
    errors.name = "Only alphabetic characters";
  } else errors.name = "";


  if (!data.subtitle) {
    errors.subtitle = "Please insert a name";
  } else if (data.subtitle?.length < 3) {
    errors.subtitle = "Minimum of 3 characters";
  } else if (numberRegex.test(data.subtitle)) {
    errors.subtitle = "Only alphabetic characters";
  } else errors.subtitle = "";


  if (!data.type) {
    errors.type = "Please insert a name";
  } else if (data.type?.length < 3) {
    errors.type = "Minimum of 3 characters";
  } else if (numberRegex.test(data.type)) {
    errors.type = "Only alphabetic characters";
  } else errors.type = "";

  
  if (!data.features) {
    errors.features = "Please insert a feature";
  } else if (data.features?.length < 3) {
    errors.features = "Minimum of 3 characters";
  } else errors.features = "";


  if (!data.description) {
    errors.description = "Please insert a description";
  } else if (data.description?.length < 3) {
    errors.description = "Minimum of 3 characters";
  } else errors.description = "";
};