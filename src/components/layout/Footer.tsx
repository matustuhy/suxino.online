import * as React from "react"
import {Footer as FooterStyled} from '../styled/layout'

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <FooterStyled>
            &copy; Matus Tuhy {year}
        </FooterStyled>
    )
}