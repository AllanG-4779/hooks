import React, { useContext, useReducer } from 'react'
import { countContext } from '../../../App'
import ComponentE from './ComponentE'
//import {countContext} from "../../../App"

function ComponentD() {
    const  userContext = useContext(countContext)
  
    
    return (
      <div>
        <p>
          Component D Counter <span style={{color:"dodgerblue",fontSize: 20}}>{userContext.count.counter}</span>{" "}
        </p>

        <ComponentE />
      </div>
    );
}

export default ComponentD
