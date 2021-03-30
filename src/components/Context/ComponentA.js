import React,{useState} from 'react'
import ComponentB from './ComponentB';
export const userContext = React.createContext("Check ")
export const ChannelContext = React.createContext("Allan George")
function ComponentA() {
    const [name,setName] = useState("Kennedy")
 
    return (
      <div>
        <userContext.Provider value={name}>
          <ChannelContext.Provider value= {"Allan George"}>
            <ComponentB />
          </ChannelContext.Provider>
        </userContext.Provider>
      </div>
    );
}

export default ComponentA
