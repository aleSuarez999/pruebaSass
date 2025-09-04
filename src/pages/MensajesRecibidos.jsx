import React, { useEffect, useState } from 'react'
import Text from '../components/Text'
import {getMessages} from "../utils/apiMongo"
import Box from '../components/Box'
import Button from '../components/Button'
export default function Products() {


  const [mensajes, setMensajes] = useState([])


  useEffect(() => {
      getMessages()
      .then(data => setMensajes(data.messages))
      .catch(err => console.error(err))
      .finally(() => {
    
        console.log(mensajes)
      })
  
    
  }, [])


 return (
   <Box className="messages-container">
        <Text as="h2" className="messages-title">Mensajes Recibidos</Text>

      
     
         {mensajes.length === 0 ? (
        <div className="no-messages">
          <p>No hay mensajes para mostrar</p>
        </div>
      ) : (
            mensajes.map((data, index) => 
          
        <div key={`${data.subject}-${index}`} className="message-card">
            <div className="message-header">
                <h3 className="message-subject">{data.subject}</h3>
                <div className="message-status">
                    <span className="status-badge">Nuevo</span>
                </div>
            </div>

            <div className="message-body">
                <div className="message-info">
                    <div className="info-item">
                        <span className="info-label">Nombre:</span>
                        <span className="info-value">{data.name}</span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{data.email}</span>
                    </div>
                </div>

                <div className="message-content">
                    <span className="info-label">Mensaje:</span>
                    <p className="message-text">{data.message}</p>
                </div>
            </div>
            <div className="message-actions">
                <Button className="btn btn__primary" label="Responder" />
                <Button className="btn" label="Marcar como leído" />
            </div>
        </div>
            ))
        }
      
         
    </Box>
  )
}
