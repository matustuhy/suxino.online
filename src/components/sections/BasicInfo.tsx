import * as React from "react"
import {calculateAge} from "../../util/date";
import {ListItem} from "../styled/layout";
import {Subtitle1, Subtitle2} from "../styled/typography";

interface BasicInfo {
    birthday: string;
    location: string
}

export const BasicInfo = () => {
    const basicInfo: BasicInfo = {
        birthday: '03/02/1995',
        location: "Bratislava"
    }

    return (
        <div>
            <ListItem>
                <Subtitle1>Location</Subtitle1>
                <Subtitle2>{basicInfo.location}</Subtitle2>
            </ListItem>

            <ListItem>
                <Subtitle1>Age</Subtitle1>
                <Subtitle2>{calculateAge("03/02/1995")}</Subtitle2>
            </ListItem>
        </div>
    )
}