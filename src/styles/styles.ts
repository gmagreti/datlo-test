import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { showMobile } from '../pages/index'

const wrapperModifiers = {
  hideOnMobile: () => css`
    bottom: 0 !important;
    transition: bottom 0.25s ease-out;
  `
}

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 40rem 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    position: relative;
  }
`

export const WrapperContent = styled.div<showMobile>`
  ${({ hideOnMobile }) => css`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10rem auto 3rem;
    gap: 0px 0px;
    grid-template-areas:
      'head'
      'header'
      'main'
      'footer';
    gap: 2rem;
    background: var(--white);
    padding: 2rem;

    @media (max-width: 768px) {
      ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
      grid-template-rows: 4rem 10rem auto 3rem;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      position: absolute;
      bottom: -91%;
      z-index: 2000;
      transition: bottom 0.25s ease-in;
    }
  `}
`

export const Head = styled.div`
  display: none;
  grid-area: 'head';
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    height: 40px;
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
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    z-index: 2000;
  }
`

export const Header = styled.div`
  grid-area: 'haeder';
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Main = styled.div`
  grid-area: 'main';
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`
export const Footer = styled.div`
  grid-area: 'footer';
  padding-right: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  background: transparent;
  border: 1.5px solid #dcdce6;
  outline: none;
  padding: 0.5em;
  border-radius: 0.5em;
  margin-right: 1rem;
`

export const Wrappers = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid #dcdce6;
  border-radius: 1rem;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    border: 0.2rem solid #2f66ff;
  }
`

export const WrapperCode = styled.div`
  border-bottom: 1.5px solid #dcdce6;
  padding: 0.5rem 1rem;
`

export const WrapperContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 0.5rem 1rem;
`

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
`

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
`

export const ButtonPagination = styled.button`
  padding: 1rem;
  height: 35px;
  border: 0;
  color: #fff;
  font-weight: bold;
  background: #2f66ff;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#2f66ff')};
  }
`

export const Form = styled.form`
  max-width: 350px;
  display: flex;

  border: 2px solid #2f66ff;
  border-radius: 7px;

  input {
    flex: 1;
    height: 35px;
    padding: 0 24px;
    outline: none;
    border: none;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    b &::placeholder {
      color: #a8a8b3;
    }
  }
  &:hover {
    background: ${shade(0.2, '#2f66ff')};
    border: 2px solid ${shade(0.2, '#2f66ff')};
  }

  button {
    width: 190px;
    height: 35px;
    border: 0;
    color: #fff;
    font-weight: bold;
    background: #2f66ff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#2f66ff')};
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

export const pageIndex = styled.span`
  display: block;
  color: var(--white);
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 50%;
  font-size: 2rem;
  background: #2f66ff;
`
