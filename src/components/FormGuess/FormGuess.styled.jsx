import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";
import { colors } from "../constants/colors";

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.23;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const WrapField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

`;

export const InputField = styled(Field)`
  padding: 12px 10px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 150px;
  text-align: center;
  &.error {
    border: 1px solid ${colors.RED};
    color: ${colors.RED};
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const ErrMessage = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${colors.RED};
  margin-top: 4px;
  display: block;
`;
export const SaveBtn = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
`;
