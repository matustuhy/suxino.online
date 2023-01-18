import * as React from "react"
import {BlockLink, H2} from "../styled/typography";

interface Contact {
    label: string;
    href: string
}

export const Contact = () => {
    const contact: Contact[] = [
        {
            label: "LinkedIn",
            href: ""
        }, {
            label: "Github",
            href: ""
        },
    ]

    return (
        <div>
            <H2>Contact</H2>
            {contact.map(c => <BlockLink href={c.href} key={c.label} target={"_blank"}>{c.label}</BlockLink>)}
        </div>
    )
}