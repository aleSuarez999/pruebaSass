import React, { useEffect, useState } from 'react'
import Text from '../components/Text'
import {getMessages} from "../utils/apiMongo"
export default function Products() {


  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
      getMessages()
      .then(data => setMensajes(data))
      .catch(err => console.error(err))
      .finally(() =>console.log(mensajes))
  
    
  }, [])

 return (
  <>
         <Text as="h2" >Mensajes Recibidos</Text>
        <div className=''>
          <ul>
        {
            mensajes.map(data => 
              <>
                  <li key={data.subject}> <b>Subject</b> {data.subject} </li>
                  <ul>
                      <li> <b>Name:</b> {data.name} </li>
                      <li> <b>Email:</b> {data.email} </li>
                      <li> <b>Message:</b> {data.message} </li>
                  </ul>
              </>
            )
        }
        </ul>
          </div>
    </>
  )
}
