import React from 'react'
import AccordionNewItem from '../../components/accordionNewItem/AccordionNewItem'
import InputForm from '../../components/InputForm/InputForm'
import { Alert } from '@mui/material'
import style from './ContactUs.module.css'


export default function ContactUs() {
  return (
    <div className='mt-5 py-5' id={style.contactPage}>
     <div className="d-flex justify-content-center align-items-center my-5" >
        <Alert sx={{ lineHeight: "50px", fontSize: "1.7rem", textAlign: "center", padding: "10px", margin: "40px" }} severity="info">
          برای دریافت مشاوره و رزرو کلاس می توانید با شماره 09380521703 تماس بگیرید یا اینکه مشخصات خود را از طریق فرم زیر ارسال نموده و منتظر تماس کارشناسان گروه آموزشی آلفا باشید
        </Alert>
      </div>
          <div className=" mb-2 text-center">
            <InputForm/>
          </div>
    </div>
  )
}
