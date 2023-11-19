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
        <label > سطح مورد درخواست</label>
        <select>
          <option value="A1.1">A1.1</option>
          <option value="A1.2">A1.2</option>
          <option value="A2.1">A2.1</option>
          <option value="A2.2">A2.2</option>
          <option value="B1.1">B1.1</option>
          <option value="B1.2">B1.2</option>
          <option value="B2.1">B2.1</option>
          <option value="B2.2">B2.2</option>
          <option value="B2.3">B2.3</option>
          <option value="B2.4">B2.4</option>
        </select>

        <label> توضیحات</label>
        {errors.comment && <Alert severity="error">{errors.comment.message}</Alert>}
        <textarea  {...register("comment")}/>
        <Button type="submit" variant="contained" size="large" endIcon={<Send/>}>
          ارسال 
        </Button>
      </form>
    </>  
  )
}
