import React from 'react'
// import { useForm } from 'react-hook-form';
import { Alert, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import styled from "./InputForm.module.css"
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"



export default function InputForm() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    mail: yup.string().min(8).email().required(),
    contactNumber: yup.string().min(6),
    comment: yup.string().required()
  })
  const { register, handleSubmit, formState:{errors} } =useForm({resolver: yupResolver(schema)});
  const onSubmitChange = (data)=>{
    console.log(data)
  }
  return (
    <>
     <form onSubmit={handleSubmit(onSubmitChange)} className={styled.faqForm}>
        <label >نام و نام خانوادگی</label>
        <input type="text" {...register("name")} />
        {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
        <label >ایمیل</label>
        <input type="email" {...register("mail")} />
        {errors.mail && <Alert severity="error">{errors.mail.message}</Alert>}
        <label >شماره تماس</label>
        <input specity="contactNumber" type="text" {...register("contactNumber")}/>
        {errors.contactNumber && <Alert severity="error">{errors.contactNumber.message}</Alert>}
        <label>متن سوال</label>
        {errors.comment && <Alert severity="error">{errors.comment.message}</Alert>}
        <textarea  {...register("comment")}/>
        <Button type="submit" variant="contained" size="large" endIcon={<Send/>}>
          ارسال 
        </Button>
      </form>
    </>
      
      
  )
}
