import * as Yup from "yup";
import { Formik } from "formik";
import { ErrMessage, InputField, SaveBtn, StyledForm, Title } from "./FormGuess.styled";
const schema = Yup.object().shape({
    guessNumber: Yup.number()
      .min(1, "Volume can't be 0")
      .max(100, "The maximum value for water is 5000 ml")
      .required("This field is required"),
  });
const FormGuess = ({ onSubmit }) => {
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    const guessNumber = e.target.guessNumber.value;
    onSubmit(guessNumber);
  };
  return (
    <Formik
      initialValues={{ guessNumber: 1 }}
      onSubmit={(values) => {
        handleGuessSubmit(values);
      }}
      validationSchema={schema}
    >
      {({ values, errors, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <Title>Enter the value of the water used:</Title>
            <InputField
              className={errors.guessNumber && "error"}
              name="guessNumber"
              type="number"
              min="1"
              value={values.guessNumber}
            />
            <ErrMessage component="span" name="guessNumber" />
          </div>
            <SaveBtn type="submit">Save</SaveBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
export default FormGuess;