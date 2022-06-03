import React, { useState } from "react";
import { useFormik } from "formik";
import RetiroFormValidation from "./Validations/RetiroForm";
const RetiroForm = ({ formik }) => (
  <form
    className="flex flex-col mt-4 justify-around  h-full "
    onSubmit={formik.handleSubmit}
  >
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        Introduce edad actual <sup>*</sup>
      </p>
      <input
        type="number"
        name="currentAge"
        min="1"
        onChange={formik.handleChange}
        value={formik.values.currentAge}
        className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        ¿A qué edad planeas jubilarte?
        <i>
          <small> (dejar de trabajar)</small>
        </i>
        <sup>*</sup>
      </p>
      <input
        type="number"
        name="retiringAge"
        onChange={formik.handleChange}
        value={formik.values.retiringAge}
        className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        ¿Con qué estrategia te sentirías cómodo invirtiendo? <sup>*</sup>
      </p>
      <select
        type="select"
        name="investmentStrategy"
        placeholder="Con qué periodicidad puedes depositar?"
        onChange={formik.handleChange}
        value={formik.values.investmentStrategy}
        className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 "
        required
      >
        <option value="0">Elige estrategia...</option>
        <option value="1">Conservadora (+-10% anual)</option>
        <option value="1">Neutra (+-15% anual)</option>
        <option value="2">Agresiva (+-25% anual)</option>
      </select>
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        ¿Cuál es el monto inicial para invertir? <sup>*</sup>
      </p>
      <input
        type="number"
        name="initialAmount"
        onChange={formik.handleChange}
        value={formik.values.initialAmount}
        className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        ¿Con qué periodicidad planeas depositar? <sup>*</sup>
      </p>
      <div className="inline-flex">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4  rounded-l"
          value={formik.values.periodicity}
          onClick={() => formik.setFieldValue("periodicity", +15)}
        >
          Quincenal
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded-r"
          value={formik.values.periodicity}
          onClick={() => formik.setFieldValue("periodicity", +30)}
        >
          Mensual
        </button>
      </div>
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        ¿Cuánto es el monto que planeas depositar? <sup>*</sup>
      </p>
      <input
        type="number"
        name="amountToDeposit"
        onChange={formik.handleChange}
        value={formik.values.amountToDeposit}
        className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>
    <button
      className={
        !formik.isValid
          ? "bg-indigo-500 cursor-not-allowed self-center h-9 w-11/12 rounded-md text-white font-bold "
          : "bg-indigo-500 hover:bg-indigo-900 cursor-pointer self-center h-9 w-11/12 rounded-md text-white font-bold"
      }
      type="submit"
    >
      Calcular
    </button>
  </form>
);

const DespliegueCalculo = () => {};
const NoCalculo = () => {
  return (
    <div className="text-9xl justify-center text-indigo-300 h-full flex flex-col ">
      Haz tu cálculo.
      <span role={"img"} aria-label="pointing left finger">
        👈
      </span>
    </div>
  );
};
const Retiro = () => {
  const [retiringInfo, setRetiringInfo] = useState({
    yearsLeftToRetire: 0,
    amountToSaveByPeriodicityChosen: 0,
    periodicity: "",
    amountAtRetiringAge: 0,
  });
  const [calculoHecho, setCalculoHecho] = useState(false);
  const formik = useFormik({
    initialValues: {
      retiringAge: 0,
      currentAge: 0,
      investmentStrategy: "",
      initialAmount: 0,
      amountToDeposit: 0,
      periodicity: 0,
    },
    validationSchema: RetiroFormValidation,
    onSubmit: (values) => {
      const {
        retiringAge,
        currentAge,
        investmentStrategy,
        periodicity,
        initialAmount,
      } = values;
    },
  });
  const yearsLeftToRetire = (currentAge, retiringAge) =>
    retiringAge - currentAge;

  return (
    <div className="w-100 h-full  flex">
      <div className="w-2/4 flex flex-col space-y-3 mr-2 ">
        <h1 className="text-indigo-700 text-2xl font-bold text-center">
          Retiro
        </h1>
        <RetiroForm formik={formik} />
      </div>
      <div className="w-2/4">
        {calculoHecho ? <DespliegueCalculo /> : <NoCalculo />}
      </div>
    </div>
  );
};
export default Retiro;
