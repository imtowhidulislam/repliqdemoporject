import React from "react";

const PasswordInputField = (props) => {
  const {
    type = "",
    label = "",
    name = "",
    placeholder = "",
    onChange = () => {},
    onBlur = () => {},
    errors,
    touched,
    values
  } = props;
  return (
    <>
      <div className="text-nutral2">
        <label className="lableWidth font-bold capitalize " htmlFor="password">
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            value={values}
            className={
              errors && touched
                ? "form border-2 border-denger py-2 pl-4 placeholder:text-sm text-sm placeholder:capitalize md:py-1"
                : "form bg-transparent py-2 pl-4 placeholder:text-sm text-sm placeholder:capitalize md:py-1"
            }
            placeholder={placeholder}
          />
          {errors && touched && (
            <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
              {errors}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInputField;
