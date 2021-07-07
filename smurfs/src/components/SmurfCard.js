import React from 'react';
import { Card } from 'semantic-ui-react';
import style from 'styled-components'

const CARD = style.div`
border: 1px solid navy;
border-radius: 10px;
width: 30%;
margin: 2%;
padding: 3%;
`


const SmurfCard = ({ smurf }) => {
    return (
        <CARD>
            <Card.Content>
                <Card.Header content={`Name: ${smurf.name}`} />
                <Card.Meta content={`Age: ${smurf.age}`} />
                <Card.Description content={`Height: ${smurf.height}`} />
            </Card.Content>
        </CARD>
    )
}


export default SmurfCard; 