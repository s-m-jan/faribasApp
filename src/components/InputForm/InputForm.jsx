import React from 'react'
import styled from "./InputForm.module.css"

export default function InputForm(props) {
  return (
    <div className={styled.InputForm}>
        <label> {props.title}</label>
        <input type={props.type}/>
      </div>
  )
}
