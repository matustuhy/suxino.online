import * as React from "react"
import {H2, Subtitle1, Subtitle2} from "../styled/typography";
import {Title1} from "../styled/typography";
import {ListItem} from "../styled/layout";

interface WorkHistory {
    companyName: string;
    from: string;
    to: string;
    position: string
}

interface WorkHistoryItemProps {
    item: WorkHistory
}

const WorkHistoryItem: React.FC<WorkHistoryItemProps> = ({item}) => {
    return (
        <ListItem>
            <Title1>{item.companyName}</Title1>
            <Subtitle1>{item.position}</Subtitle1>
            <Subtitle2>{item.from} - {item.to}</Subtitle2>
        </ListItem>
    )
}

export const WorkHistory = () => {
    const workHistories: WorkHistory[] = [
        {
            companyName: 'Riwers',
            position: "Senior Full-Stack developer",
            from: "Jan 2020",
            to: "Present"
        },
        {
            companyName: 'Accenture',
            position: "Full-Stack developer",
            from: "Jan 2019",
            to: "Dec 2019"
        },
        {
            companyName: 'Riwers',
            position: "Full-Stack developer",
            from: "Jul 2017",
            to: "Dec 2018"
        },
        {
            companyName: 'IBM',
            position: "Web developer",
            from: "Jul 2015",
            to: "Jun 2017"
        }
    ]

    return (
        <div>
            <H2>Work History</H2>
            {workHistories.map(workHistory => <WorkHistoryItem key={workHistory.companyName} item={workHistory}/>)}
        </div>
    )
}