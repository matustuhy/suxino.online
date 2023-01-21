import styled from 'styled-components'
import {lightText} from "./layout";
import {darkText} from "./layout";

export const H1 = styled.h1`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.7rem;

  @media print {
    display: none
  }
`

export const H2 = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.625rem;
`

export const Title1 = styled.p`
  font-weight: 700
`
export const Subtitle1 = styled.p`
  font-weight: 300;
  font-size: 0.8rem
`
export const Subtitle2 = styled.p`
  font-weight: 100;
  font-size: 0.6rem;
`

export const ProjectLink = styled.a`
  font-weight: 100;
  font-size: 0.6rem;
  color: ${lightText};
  
  &:visited {
    color: ${lightText}
  }
`

export const ContactLink = styled.a`
  color: ${darkText};
  display: block;
  width: fit-content;
  font-size: 1.2rem;
  text-decoration: black underline dotted;

  &:visited {
    color: ${darkText}
  }
`