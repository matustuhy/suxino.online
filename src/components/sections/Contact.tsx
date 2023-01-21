import * as React from "react"
import {ContactLink, H2} from "../styled/typography";

interface Contact {
    label: string;
    href: string
}

export const Contact = () => {
    const contact: Contact[] = [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/matúš-tuhý"
        }, {
            label: "Github",
            href: "https://github.com/suxino"
        },
    ]

    return (
        <div>
            <H2>Contact</H2>
            {contact.map(c => <ContactLink href={c.href} key={c.label} target={"_blank"}>{c.label}</ContactLink>)}
        </div>
    )
}