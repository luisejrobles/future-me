import { DateTime } from "luxon";
import * as yup from "yup";

const GuardaditoFormValidation = yup.object().shape({
  amountToSave: yup.number().positive().min(1, "messs").required("Error"),
  finalDate: yup.date().required("Error"),
  periodicity: yup.number().required("Error"),
});

export default GuardaditoFormValidation;
