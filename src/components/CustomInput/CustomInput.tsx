import React from 'react'

interface propstype{
    label:string;
    type:string;
    placeholder:string;
}
const CustomInput = (props:propstype) => {
    const {label,placeholder,type} = props
  return (
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
          <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} />
      </div>
  )
}

export default CustomInput
