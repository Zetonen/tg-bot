import styled from "styled-components";
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 50px 20px 0;
  background-color: var(--tg-theme-secondary-bg-color);
  color: var(--tg-theme-text-color);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.23;
`;
export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  color: var(--tg-theme-secondary-bg-color);
`;
