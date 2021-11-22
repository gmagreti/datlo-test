import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid #dcdce6;
  border-radius: 1rem;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    border: 0.2rem solid #2f66ff;
  }
`;

export const WrapperCode = styled.div`
  border-bottom: 1.5px solid #dcdce6;
  padding: 0.5rem 1rem;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 0.5rem 1rem;
`;

export const Label = styled.h2`
  display: flex;
  align-items: baseline;
  font-size: 1.2rem;
  font-weight: bold;
  color: #666666;
  text-transform: uppercase;

  p {
    opacity: 1;
    color: #2f66ff;
    margin-left: 0.5rem;
    text-transform: initial;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: var(--white);
  border: none;
  border: 1px solid #dce2e6;
  border-radius: 16px;
  background: #2f66ff;
  font-weight: bold;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: #2f66ff;
    background: var(--white);
    border: 1px solid #2f66ff;
  }
`;
