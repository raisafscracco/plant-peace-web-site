import PlantVase from "../../../assets/PlantRegistration/vase-plant.jpg";
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './toast.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  validarPlantName,
  validarPlantSubtitle,
  validarPlantType,
  validarPrice,
  validarDiscount,
  validarLabel,
  validarFeatures,
  validarDescription,
} from '../../../types/PlantRegister';
import { api } from "../../../utils/axios/api";
import { gerarIdAleatorio } from "../../../utils/CreateId";


const Form = () => {

  const [plantSubtitleError, setPlantSubtitleError] = useState(false);
  const [PlantNameError, setPlantNameError] = useState(false);
  const [PlantTypeError, setPlantTypeError] = useState(false);
  const [PlantPriceError, setPlantPriceError] = useState(false);
  const [PlantDiscountError, setPlantDiscountError] = useState(false);
  const [plantFeaturesError, setPlantFeaturesError] = useState(false);
  const [plantDescriptionError, setPlantDescriptionError] = useState(false);
  const [labelError, setLabelError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {

    const form = document.getElementById('plant-form') as HTMLFormElement | null;

    if (!form) return;

    const plantName = document.getElementById('plantName') as HTMLInputElement | null;
    const plantSubtitle = document.getElementById('plantSubtitle') as HTMLInputElement | null;
    const plantType = document.getElementById('plantType') as HTMLInputElement | null;
    const price = document.getElementById('price') as HTMLInputElement | null;
    const discount = document.getElementById('discount') as HTMLInputElement | null;
    const indoor = document.getElementById('indoor') as HTMLInputElement | null;
    const outdoor = document.getElementById('outdoor') as HTMLInputElement | null;
    const features = document.getElementById('features') as HTMLTextAreaElement | null;
    const description = document.getElementById('description') as HTMLTextAreaElement | null;

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      let isFormValid = true;

      if (plantName && !validarPlantName(plantName.value)) {
        setPlantNameError(true);
        plantName.style.border = "2px solid red";
        isFormValid = false;
      } else if (plantName) {
        setPlantNameError(false);
        plantName.style.border = "1px solid #AFB2AA";
      }

      if (plantSubtitle && !validarPlantSubtitle(plantSubtitle.value)) {
        setPlantSubtitleError(true);
        plantSubtitle.style.border = "2px solid red";
        isFormValid = false;
      } else if (plantSubtitle) {
        setPlantSubtitleError(false);
        plantSubtitle.style.border = "1px solid #AFB2AA";
      }

      if (plantType && !validarPlantType(plantType.value)) {
        setPlantTypeError(true);
        plantType.style.border = "2px solid red";
        isFormValid = false;
      } else if (plantType) {
        setPlantTypeError(false);
        plantType.style.border = "1px solid #AFB2AA";
      }

      if (price && !validarPrice(price.value)) {
        setPlantPriceError(true);
        price.style.border = "2px solid red";
        isFormValid = false;
      } else if (price) {
        setPlantPriceError(false);
        price.style.border = "1px solid #AFB2AA";
      }

      if (discount && !validarDiscount(discount.value)) {
        setPlantDiscountError(true);
        discount.style.border = "2px solid red";
        isFormValid = false;
      } else if (price) {
        setPlantDiscountError(false);
        discount!.style.border = "1px solid #AFB2AA";
      }

      if (indoor && outdoor && !validarLabel(indoor.checked, outdoor.checked)) {
        setLabelError(true);
        isFormValid = false;
      } else {
        setLabelError(false);
      }

      if (features && !validarFeatures(features.value)) {
        setPlantFeaturesError(true);
        features.style.border = "2px solid red";
        isFormValid = false;
      } else if (features) {
        setPlantFeaturesError(false);
        features.style.border = "1px solid #AFB2AA";
      }

      if (description && !validarDescription(description.value)) {
        setPlantDescriptionError(true);
        description.style.border = "2px solid red";
        isFormValid = false;
      } else if (description) {
        setPlantDescriptionError(false);
        description.style.border = "1px solid #AFB2AA";
      }

      if (isFormValid) {
        await api.post("/plants",{
          id: gerarIdAleatorio(),
          name: plantName?.value,
          subtitle: plantSubtitle?.value,
          label: [indoor?.value || outdoor?.value, plantType?.value],
          price: `$${price?.value}`,
          isInSale: discount?.value == '' ? false : true,
          discountPercentage: discount?.value,
          features: features?.value,
          description: description?.value,
          imgUrl: "../src/assets/img/CardImg/Photo (2).png"
        })
        .then(() => {
          setShowToast(true);
          if (plantName) plantName.value = "";
          if (plantSubtitle) plantSubtitle.value = "";
          if (plantType) plantType.value = "";
          if (price) price.value = "";
          if (discount) discount.value = "";
          if (indoor) indoor.checked = false;
          if (outdoor) outdoor.checked = false;
          if (features) features.value = "";
          if (description) description.value = "";
        })
        .catch(error => {
          console.error('Erro ao enviar os dados:', error);
        });
        setTimeout(() => setShowToast(false), 3000);

      } else {
        setShowToast(false);
        console.log("O formulário contém erros. Não foi possível salvar.");
      }
    };

    form.addEventListener("submit", handleSubmit);

    return () => {

      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  
  return (
    <section className="bg-mainGreen flex justify-between relative overflow-hidden ">
      {showToast && (
        <div className={style.toast}>
                   <i className="fa-solid fa-circle-check"></i> Sucessfully submitted
        </div>
      )}
      <form className="w-290 mx-auto mt-32 mm:ml-8 ml:ml-12 md:pl-8 z-[1]" action="" id="plant-form">
        <div className="border-b-1 border-b-border-subtitle md:w-476">
          <h1 className="font-plantRegister text-24 font-semibold leading-28 text-primaryText pb-2 mb-10">
            Plant registration
          </h1>
        </div>

        <div className="flex flex-col">
          <label className="font-plantRegister text-18 font-medium leading-22 mt-9 mb-2 text-form-subtitle">
            Plant name
          </label>
          <input
            className="rounded-4 bg-mainGreen h-8 px-4 py-5 border-1.5 border-border-subtitle md:w-476 md:mt-10"
            type="text"
            id="plantName"
            placeholder="Echinocereus Cactus"
          />
          <span className="span-required" style={{ display: PlantNameError ? "block" : "none", color: "red" }}>Please enter a valid plant name</span>
        </div>

        <div className="flex flex-col">
          <label className="font-plantRegister text-18 font-medium leading-22 mt-6 mb-2 text-form-sub">
            Plant subtitle
          </label>
          <input
            className="rounded-4 px-4 py-5 bg-mainGreen h-8 border-1.5 border-border-subtitle md:w-476 md:mt-10"
            type="text"
            id="plantSubtitle"
            placeholder="A majestic addition to your plant collection"
          />
          <span className="span-required" style={{ display: plantSubtitleError ? "block" : "none", color: "red", marginTop: "5px" }}>Please enter a valid plant subtitle</span>
        </div>

        <div className="flex flex-col mt-6">
          <label className="font-plantRegister text-18 font-medium leading-22 mt-4 mb-2 text-form-subtitle">
            Plant type
          </label>
          <input
            className="rounded-4 px-4 py-5 bg-mainGreen h-8 border-1.5 border-border-subtitle md:w-476 md:mt-10"
            type="text"
            id="plantType"
            placeholder="Cactus"
          />
          <span className="span-required" style={{ display: PlantTypeError ? "block" : "none", color: "red", marginTop: "5px" }}>Please enter a valid plant name</span>
        </div>

        <div className="flex gap-10 md:gap-18 flex-col md:flex-row">
          <div className="mt-9">
            <label className="font-plantRegister text-18 font-medium leading-22 text-form-subtitle">
              Price
            </label>
            <input
              className="bg-mainGreen mt-2 h-8 border-1.5 border-border-subtitle rounded-4 w-290  md:w-233 md:mt-10 md:pl-4 px-4 py-5"
              type="text"
              id="price" 
              placeholder="$139.99"
            />
            <span className="span-required" style={{ display: PlantPriceError ? "block" : "none", color: "red", marginTop: "5px"}}>Please enter a valid price</span>
          </div>
          <div className="mt-9">
            <label className="font-plantRegister text-18 font-medium leading-22 text-form-subtitle">
              Discount percentage
            </label>
            <input
              className="bg-mainGreen mt-2 h-8 border-1.5 border-border-subtitle rounded-4 w-290  md:w-224 md:mt-10 md:pl-4 px-4 py-5"
              type="text"
              id="discount"
              placeholder="20%"
            />
            <span className="span-required" style={{ display: PlantDiscountError ? "block" : "none", color: "red", marginTop: "5px" }}>Please enter a valid discount</span>
          </div>
        </div>

        <div className="mt-9">
          <label className="font-plantRegister text-18 font-semibold leading-12">
            Label:
          </label>

          <div className="mt-2 flex gap-19 md:mt-10">
            <div className="flex gap-2">
              <input id="indoor" type="radio" name="label" value="Indoor" />
              <label htmlFor="indoor" className="plantRegister text-16 font-medium leading-22 text-form-subtitle mt-2 ml-2 ">
                Indoor
              </label>
            </div>

            <div className="flex gap-2 ">
              <input id="outdoor" type="radio" name="label" value="Outdoor" className="p-2 border border-gray-300 "/>
              <label htmlFor="outdoor" className="plantRegister text-16 font-medium leading-22 text-form-subtitle mt-2 ml-2">
                Outdoor
              </label>
            </div>
          </div>
          <span
            className="span-required"
            style={{ display: labelError ? "block" : "none", color: "red", marginTop: "5px" }}
          >
            Please select a label (Indoor or Outdoor)
          </span>
        </div>

        <div className="flex flex-col mt-8">
          <label className="font-plantRegister text-18 font-medium leading-22 text-form-subtitle mb-2">
            Features
          </label>
          <textarea placeholder="Species: Echinocereus..." id="features" className="bg-mainGreen mt-2 border-1.5 border-border-subtitle rounded-4 px-4 py-5  pt-3 h-125 md:w-476 md:mt-10">
          </textarea>
          <span className="span-required" style={{ display: plantFeaturesError ? "block" : "none", color: "red", marginTop: "5px" }}>Please enter a valid features</span>
        </div>

        <div className="flex flex-col mt-4">
          <label className="font-plantRegister text-18 font-medium leading-22 text-form-subtitle mb-2">
            Description
          </label>
          <textarea placeholder="Ladyfinger cactus..."  id="description" className=" bg-mainGreen mt-2 border-1.5 px-4 py-5 border-border-subtitle rounded-4 pt-3 h-125 md:w-476 md:mt-10">
          </textarea>
          <span className="span-required" style={{ display: plantDescriptionError ? "block" : "none", color: "red", marginTop: "5px" }}>Please enter a valid description</span>
        </div>

        <button type="submit" className=" bg-primaryText font-plantRegister size-16 leading-12 font-bold text-register-button mt-8 w-290 h-52 rounded-4 mb-122 md:w-476">
          Register
        </button>
      </form>
      <div className="hidden absolute right-0 bottom-0 ma:flex md:opacity-60 xl:opacity-100">
        <img src={PlantVase} alt="Plant Vase" className="max-w-full" />
      </div>
    </section>
  );
};

export default Form;


