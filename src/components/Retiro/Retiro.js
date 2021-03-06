import React, { useState } from "react";
import { useFormik } from "formik";
import RetiroFormValidation from "./Validations/RetiroForm";
const RetiroForm = ({ formik }) => (
  <form
    className="flex flex-col mt-4 ml-2 mr-2 justify-around  h-full "
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
        <option value="">Elige estrategia...</option>
        <option value="1">Conservadora (+-10% anual)</option>
        <option value="2">Neutra (+-15% anual)</option>
        <option value="3">Agresiva (+-25% anual)</option>
      </select>
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-indigo-500">
        ¿Cuál es el monto inicial para invertir en tu jubilación? <sup>*</sup>
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
          type="button"
        >
          Quincenal
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded-r"
          value={formik.values.periodicity}
          onClick={() => formik.setFieldValue("periodicity", +30)}
          type="button"
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

const DespliegueCalculo = ({ retiringInfo }) => {
  return (
    <span>
      <div className="text-7xl text-indigo-500 text-center flex flex-col">
        <span className="font-bold">Acá está tu pronóstico 🚀</span>
        <p className="text-indigo-400 text-lg text-left mt-4">
          Para tu retiro faltan{" "}
          <span className="text-indigo-500 font-bold text-2xl">
            {retiringInfo.yearsUntilRetirement} años
          </span>{" "}
          <br></br>y{" "}
          <span className="text-indigo-500 font-bold text-2xl">
            planeas ahorrar ${retiringInfo.amountToSaveByPeriodicityChosen} MXN
            cada {retiringInfo.periodicity === 30 ? "mes" : "quincena"}.
          </span>{" "}
          <br></br>
          <span className="text-indigo-500 font-bold text-2xl">
            El total
          </span>{" "}
          que habrás{" "}
          <span className="text-indigo-500 font-bold text-2xl">
            depositado será de ${retiringInfo.amountSaved} MXN.
          </span>
          <br></br>
          <br></br>
          Tomando en cuenta tu{" "}
          <span className="text-indigo-500 font-bold text-2xl">
            estrategia de inversión que fue {retiringInfo.strategy.strategyName}
          </span>{" "}
          con un{" "}
          <span className="text-indigo-500 font-bold text-2xl">
            retorno anualizado de{" "}
            {retiringInfo.strategy.strategyAverageInterest}%
          </span>
        </p>
      </div>
      <TablaRetiro />
    </span>
  );
};

const TablaRetiro = ({ retiringInfo }) => {
  return (
    <table>
      <th>hola</th>
      <tr>heeey</tr>
    </table>
  );
};

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
    yearsUntilRetirement: 0,
    amountToSaveByPeriodicityChosen: 0,
    periodicity: "",
    strategy: { strategyName: "", strategyAverageInterest: 0 },
    amountSaved: 0,
    amountSavedPlusInterests: 0,
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
        amountToDeposit,
      } = values;
      const yearsLeftToRetire = yearsToRetire(currentAge, retiringAge);
      const amountSavedThroughYears = totalAmountSavedThroughYears(
        yearsLeftToRetire,
        periodicity,
        initialAmount,
        amountToDeposit
      );
      const strategyDetails = setStrategyDetails(investmentStrategy);
      setRetiringInfo({
        yearsUntilRetirement: yearsLeftToRetire,
        amountToSaveByPeriodicityChosen: amountToDeposit,
        strategy: strategyDetails,
        periodicity: periodicity,
        amountSaved: amountSavedThroughYears,
      });
      setCalculoHecho(true);
    },
  });

  /**
   * This function will calculate the years left from actual to the age
   * of retiring.
   * @param {number} currentAge
   * @param {number} retiringAge
   * @returns {number} yearsToSave
   */
  const yearsToRetire = (currentAge, retiringAge) => retiringAge - currentAge;

  /**
   * This function will calculate the net amount of money you'll deposit
   * through the years you plan to save, plus the initial amount.
   * Periodicity have two possible values:
   * - 30 = Deposit monthly.
   * - 15 = Deposit twice a month.
   * If periodicity is at 30, person is willing to deposit 12 times a year.
   * If periodicity is at 15, person is willing to deposit 24 times a year.
   *
   * WARNING: This will take the whole year as a period to save money, in the
   * future, we can calculate based on the month we're in until the year the person
   * wants to retire
   * @param {number} yearsToSave
   * @param {number} periodicity
   * @param {number} initialAmount
   * @param {number} amountToDeposit
   * @returns {number}
   */
  const totalAmountSavedThroughYears = (
    yearsToSave,
    periodicity,
    initialAmount,
    amountToDeposit
  ) =>
    initialAmount +
    (periodicity === 30 ? yearsToSave * 12 : yearsToSave * 24) *
      amountToDeposit;

  const setStrategyDetails = (investmentStrategy) => {
    switch (investmentStrategy) {
      case "1":
        console.log("entre");
        return { strategyName: "Conservadora", strategyAverageInterest: 10 };
      case "2":
        console.log("entre 2");
        return { strategyName: "Neutra", strategyAverageInterest: 15 };
      case "3":
        console.log("entre 3");
        return { strategyName: "Agresiva", strategyAverageInterest: 25 };
      default:
        return {
          strategyName: "Ups, hubo un error",
          strategyAverageInterest: 0,
        };
    }
  };

  return (
    <div className="w-100 h-full  flex">
      <div className="w-2/4 flex flex-col space-y-3 mr-2 ">
        <h1 className="text-indigo-500 text-4xl font-bold text-left">Retiro</h1>
        <RetiroForm formik={formik} />
      </div>
      <div className="w-2/4">
        {calculoHecho ? (
          <DespliegueCalculo retiringInfo={retiringInfo} />
        ) : (
          <NoCalculo />
        )}
      </div>
    </div>
  );
};
export default Retiro;
