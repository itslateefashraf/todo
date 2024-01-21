import React from 'react'

const CustomInput = (props:any) => {
    const {label,placeholder,type} = props
  return (
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
          <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} />
      </div>
  )
}

export default CustomInput
