import React from 'react';
import SmurfCard from './SmurfCard';
import { Card } from 'semantic-ui-react'
import style from 'styled-components'


const CARD = style.div`
display: flex;
flex-direction: column;
padding: 2%;
width: 50%;
`


const SmurfList = ({ smurfs }) => {
    console.log(smurfs);
    return (
        <CARD className='smurf-list'>
            <Card.Group centered>
                {smurfs.map(el => <SmurfCard key={el.id} smurf={el} />)}
            </Card.Group>
        </CARD>
    )
}

export default SmurfList;