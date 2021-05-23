import { useFormik } from "formik";
import { DateTime } from "luxon";
import React from "react";

const GuardaditoForm = ({ formik }) => {
  return (
    <form
      className="flex flex-col mt-4 justify-around  h-full "
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col">
        <p className="font-bold text-indigo-500">
          Introduce cuánto quieres ahorrar
        </p>
        <input
          type="number"
          name="amountToSave"
          placeholder="Cuánto quiero ahorrar? "
          onChange={formik.handleChange}
          value={formik.values.amountToSave}
          className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></input>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-indigo-500">
          Hasta cuándo tienes para ahorrar?
        </p>
        <input
          type="date"
          name="finalDate"
          placeholder="Hasta cuándo tienes para ahorrar?"
          onChange={formik.handleChange}
          value={formik.values.finalDate}
          className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></input>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-indigo-500">
          Con qué frecuencia planeas ahorrar?
        </p>
        <select
          type="select"
          name="periodicity"
          placeholder="Con qué periodicidad puedes ahorrar?"
          onChange={formik.handleChange}
          value={formik.values.periodicity}
          className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 "
        >
          <option value="default">Elige periodo...</option>
          <option value="7">Semanal</option>
          <option value="15">Quincenal</option>
          <option value="30">Mensual</option>
          <option value="1">Diario</option>
        </select>
      </div>
      <button
        className="bg-indigo-500 hover:bg-indigo-900 self-center h-9 w-11/12 rounded-md text-white font-bold"
        type="submit"
      >
        Calcular
      </button>
    </form>
  );
};

const MiGuardadito = () => {
  const formik = useFormik({
    initialValues: {
      amountToSave: 0,
      finalDate: "",
      periodicity: 0,
    },
    onSubmit: (values) => {
      const { amountToSave, finalDate, periodicity } = values;
      const daysOfDifference = getRange(finalDate);
      console.log(daysOfDifference);
      const numberOfPayments =
        daysOfDifference / periodicity >= 1
          ? daysOfDifference / periodicity
          : 1;
      const paymentAmount = amountToSave / numberOfPayments;
      console.log(paymentAmount);
    },
  });

  const getRange = (date) => {
    console.log(date);
    const currentDate = DateTime.now();
    const lastDate = Date.now();
    console.log(`Current: ${currentDate}, Last: ${lastDate}`);
    return lastDate - currentDate;
  };

  return (
    <div className="w-100 h-full  flex">
      <div className="w-1/4 flex flex-col space-y-3 mr-2 ">
        <h1 className="text-indigo-700 text-2xl font-bold text-center">
          Cálculame
        </h1>
        <GuardaditoForm formik={formik} />
      </div>
      <div className="w-3/4 ">
        <h1>Result</h1>
      </div>
    </div>
  );
};

export default MiGuardadito;
