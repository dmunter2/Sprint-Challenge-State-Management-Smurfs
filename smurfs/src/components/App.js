import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { fetchSmurf, addSmurf } from '../actions/index'
import SmurfList from './SmurfList'
import SmurfForm from './smurfForm'

import "./App.css";
import style from 'styled-components'

const CARD = style.div`
margin: auto;
width: 90%;
`

const App = ({ fetchSmurf, addSmurf, smurf}) => {


  useEffect(() => {
    fetchSmurf();
  },[fetchSmurf])

  const addSomeSmurf = (item) => {
    addSmurf(item);
  }



  return (
    <CARD className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm addSmurf={addSomeSmurf} />
      <SmurfList smurfs={smurf} />
    </CARD>
  );
}


const mapToStateprops = state => {
  return {
    smurf: state || []
  };
}


export default connect(
  mapToStateprops,
  {
    fetchSmurf,
    addSmurf
  })(App);
