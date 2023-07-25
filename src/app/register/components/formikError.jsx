import React from 'react'

const FormikError = ({errors, touched, fields}) => {
  return (
    <>
    {errors.fields && touched.fields && <p className='text-red-600 text-sm font-semibold capitalize absolute top-full left-0'>{errors.fields}</p>}
    </>
  )
}

export default FormikError