import { ErrorMessage, useFormik } from "formik";
import { DateTime, Interval } from "luxon";
import React, { useState } from "react";
import GuardaditoFormValidation from "./Validations/GuardaditoForm";

const GuardaditoForm = ({ formik }) => {
  return (
    <form
      className="flex flex-col mt-4 justify-around  h-full "
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col">
        <p className="font-bold text-indigo-500">
          Introduce cuánto quieres ahorrar <sup>*</sup>
        </p>
        <input
          type="number"
          name="amountToSave"
          min="1"
          placeholder="Cuánto quiero ahorrar? "
          onChange={formik.handleChange}
          value={formik.values.amountToSave}
          className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-indigo-500">
          Hasta cuándo tienes para ahorrar? <sup>*</sup>
        </p>
        <input
          type="date"
          name="finalDate"
          placeholder="Hasta cuándo tienes para ahorrar?"
          onChange={formik.handleChange}
          value={formik.values.finalDate}
          className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-indigo-500">
          Con qué frecuencia planeas ahorrar? <sup>*</sup>
        </p>
        <select
          type="select"
          name="periodicity"
          placeholder="Con qué periodicidad puedes ahorrar?"
          onChange={formik.handleChange}
          value={formik.values.periodicity}
          className="rounded-md h-9 cursor-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 "
          required
        >
          <option value="">Elige periodo...</option>
          <option value="7">Semanal</option>
          <option value="15">Quincenal</option>
          <option value="30">Mensual</option>
          <option value="1">Diario</option>
        </select>
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
};

const NoCalculo = () => {
  return (
    <div className="text-9xl justify-center text-indigo-300 h-full flex flex-col ">
      Haz tu cálculo.👈
    </div>
  );
};
const DespliegueCalculo = ({ payments, paymentAmount }) => {
  return (
    <span>
      <h1 className="text-2xl w-full h-1/6 text-center font-bold text-indigo-700">
        Acá está tu ahorradito
      </h1>
      <div className="text-8xl w-full h-5/6 pl-10 text-indigo-500">
        Vas a tener que hacer{"  "}
        <span className="font-bold text-indigo-700">
          {payments} pago
          {payments > 1 ? "s" : ""} de ${paymentAmount}
        </span>
        💸
      </div>
    </span>
  );
};
const MiGuardadito = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    payments: 0,
    paymentAmount: 0,
  });

  const [calculoHecho, setCalculoHecho] = useState(false);

  const numberOfPayments = (daysOfDifference, periodicity) =>
    truncDecimals(
      daysOfDifference / periodicity >= 1 ? daysOfDifference / periodicity : 1
    );
  const truncDecimals = (number) => Math.trunc(number);

  const getRange = (date) => {
    const currentDate = DateTime.now();
    let lastDate = DateTime.fromFormat(date, "yyyy-mm-dd");
    lastDate = DateTime.fromISO(date);
    const days = Interval.fromDateTimes(currentDate, lastDate).length("days");
    return truncDecimals(days);
  };
  const formik = useFormik({
    initialValues: {
      amountToSave: 0,
      finalDate: "",
      periodicity: 0,
    },
    validationSchema: GuardaditoFormValidation,
    onSubmit: (values) => {
      console.log("entree");
      const { amountToSave, finalDate, periodicity } = values;
      const daysOfDifference = getRange(finalDate);
      const payments = numberOfPayments(daysOfDifference, periodicity);
      setPaymentInfo({
        payments: numberOfPayments(daysOfDifference, periodicity),
        paymentAmount: (amountToSave / payments).toFixed(2),
      });
      setCalculoHecho(true);
    },
  });

  return (
    <div className="w-100 h-full  flex">
      <div className="w-1/4 flex flex-col space-y-3 mr-2 ">
        <h1 className="text-indigo-700 text-2xl font-bold text-center">
          Guardadito
        </h1>
        <GuardaditoForm formik={formik} />
      </div>
      <div className="w-3/4">
        {calculoHecho ? (
          <DespliegueCalculo
            payments={paymentInfo.payments}
            paymentAmount={paymentInfo.paymentAmount}
          />
        ) : (
          <NoCalculo />
        )}
      </div>
    </div>
  );
};

export default MiGuardadito;
