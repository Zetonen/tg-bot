import * as Yup from "yup";
import { Formik } from "formik";
import { ErrMessage, InputField, SaveBtn, StyledForm, Title, WrapField } from "./FormGuess.styled";
import { Loader } from "../Loader/Loader";
const schema = Yup.object().shape({
    guessNumber: Yup.number()
      .min(1, "Число не може бути < 0")
      .max(100, "Число не може бути > 0")
      .required("Це поле обов'язкове для заповнення"),
  });
const FormGuess = ({ onSubmit, loading }) => {
  const handleGuessSubmit = async ({guessNumber}) => {
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
            <Title>Введіть число від 1 до 100:</Title>
            <InputField
              className={errors.guessNumber && "error"}
              name="guessNumber"
              type="number"
              min="1"
              value={values.guessNumber}
            />
            <ErrMessage component="span" name="guessNumber" />
          </WrapField>
            <SaveBtn type="submit">Надіслати {loading && <Loader />}</SaveBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
export default FormGuess;