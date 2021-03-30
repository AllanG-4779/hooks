import React ,{useState,useContext} from 'react'
import Context2Review from './Context2Review'

export const userContext = React.createContext("Johntez")
export const emailContext  = React.createContext("Not provided")

function Context1Review() {
     
    const [name, setName] = useState("Allan")
    return (
      <div>
        <userContext.Provider value={name}>
          <emailContext.Provider value = "gralancehonlyango001@gmail.com">
            <Context2Review />
          </emailContext.Provider>
        </userContext.Provider>
      </div>
    );
}

export default Context1Review
