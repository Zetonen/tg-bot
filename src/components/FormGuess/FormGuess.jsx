import * as Yup from "yup";
import { Formik } from "formik";
import { ErrMessage, InputField, SaveBtn, StyledForm, Title, WrapField } from "./FormGuess.styled";
import { Loader } from "../Loader/Loader";
const schema = Yup.object().shape({
    guessNumber: Yup.number()
      .min(1, "Volume can't be < 0")
      .max(100, "Volume can't be > 100")
      .required("This field is required"),
  });
const FormGuess = ({ onSubmit, loading }) => {
  const handleGuessSubmit = async ({guessNumber}) => {
    alert(guessNumber);
    await onSubmit(guessNumber);
  };
  return (
    <Formik
      initialValues={{ guessNumber: 1 }}
      onSubmit={async (values) => {
        await handleGuessSubmit(values);
      }}
      validationSchema={schema}
    >
      {({ values, errors, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <WrapField>
            <Title>Enter a number from 1 to 100:</Title>
            <InputField
              className={errors.guessNumber && "error"}
              name="guessNumber"
              type="number"
              min="1"
              value={values.guessNumber}
            />
            <ErrMessage component="span" name="guessNumber" />
          </WrapField>
            <SaveBtn type="submit">Send {loading && <Loader />}</SaveBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
export default FormGuess;