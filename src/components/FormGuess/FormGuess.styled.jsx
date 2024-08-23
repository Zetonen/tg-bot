import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";
import { colors } from "../constants/colors";

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const InputField = styled(Field)`
  padding: 12px 10px;
  position: relative;
  margin-top: 8px;
  border-radius: 6px;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 120px;
  color: ${colors.BLUE};
  &.error {
    border: 1px solid ${colors.RED};
    color: ${colors.RED};
  }
  @media (min-width: 768px) {
    width: 100%;
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
