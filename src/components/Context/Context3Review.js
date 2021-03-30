import React from 'react'
import {userContext} from "./Context1Review"
import {emailContext} from "./Context1Review"
import {useContext} from "react"



function Context3Review() {
    const user = useContext(userContext)
    const email = useContext(emailContext)
    return (
      <div>
        {/* <userContext.Consumer>
             {
                 user=>{
                     return (
                       <emailContext.Consumer>
                         {(context) => {
                           return (
                             <div>
                               <p>
                                 My name is
                                 <span style={{ color: "dodgerblue" }}>
                                   {user}
                                 </span>
                                 With an email of <span>{context}</span>
                               </p>
                             </div>
                           );
                         }}
                       </emailContext.Consumer>
                     ); 
                 }}
             
         </userContext.Consumer> */}
        <p>
          My name is <span>{user}</span> With an email of <span>{email}</span>
        </p>
      </div>
    );
}

export default Context3Review
