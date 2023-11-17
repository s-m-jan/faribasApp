import React from 'react'
import AccordionNewItem from '../../components/accordionNewItem/AccordionNewItem'
import InputForm from '../../components/InputForm/InputForm'
import { Alert } from '@mui/material'


export default function ContactUs() {
  return (
    <div className='my-5 py-5'>
     <div className="d-flex justify-content-center align-items-center my-5" >
        <Alert sx={{ lineHeight: "50px", fontSize: "1.7rem" }} severity="info">
          شما هم می توانید سوالتان را بپرسید
        </Alert>
      </div>
          <div className=" mb-2 text-center">
            <InputForm/>
          </div>
    </div>
  )
}
