import * as React from "react"
import {H2, Subtitle2} from "../styled/typography";
import {Title1} from "../styled/typography";
import {ListItem} from "../styled/layout";

interface Language {
    languageName: string;
    frameworks: string[]
}

interface WorkExperienceItemProps {
    item: Language
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({item}) => {
    return (
        <ListItem>
            <Title1>{item.languageName}</Title1>
            <Subtitle2>- {item.frameworks.join(', ')}</Subtitle2>
        </ListItem>
    )
}


export const WorkExperience = () => {
    const languages: Language[] = [
        {
            languageName: 'Javascript',
            frameworks: ["Express", "Koa 2", "Hapi", "Gatsby", "React", "Vue"]
        },
        {
            languageName: 'Kotlin',
            frameworks: ["Spring", "Joog"]
        },
    ]

    return (
        <div>
            <H2>Languages</H2>
            {languages.map(language => <WorkExperienceItem key={language.languageName} item={language}/>)}
        </div>
    )
}