"use client"
import React from "react";
import PropTypes from "prop-types";

const TextInputField = ( props ) => {
  const {
    type = "",
    name = "",
    id = "",
    values,
    onChange = () => {},
    onBlur = () => {},
    placeholder = "",
    label = "",
    errors,
    touched,
  } = props;
  return (
    <>

      <div className="text-nutral2">
        <label className="lableWidth font-bold" htmlFor="first name">
          {label}
        </label>
        <div className="relative ">
          <input
            type={type}
            name={name}
            id={id}
            value={values}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={
              errors && touched
                ? `form border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize placeholder:text-gray-900 text-sm md:py-1 ${errors && 'mb-2'}`
                : `form py-2 text-sm pl-4 placeholder:text-sm placeholder:capitalize md:py-1 ${errors && 'mb-2'}`
            }
          />
          
          {errors && touched && (
            <p className="absolute left-0 top-[80%] text-small capitalize text-denger md:text-sm">
              {errors}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

// ?? Defining the data type of every props;
TextInputField.propTypes = {
  type : PropTypes.string,
  name : PropTypes.string,
  id : PropTypes.string,
  label : PropTypes.string,
  placeholder : PropTypes.string,
  onChange : PropTypes.func,
  onBlur : PropTypes.func,
  touched : PropTypes.bool,
  errors : PropTypes.bool
}

export default TextInputField;
