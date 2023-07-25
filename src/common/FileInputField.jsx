import React, { Children } from "react";
import PropTypes from "prop-types";

const FileInputField = (props) => {
  const {
    type = "",
    btnLabel = "",
    label = "",
    name = "",
    imgRef,
    imgName,
    children,
    onBlur = () => {},
    onChange = () => {},
    errors,
    touched,
  } = props;
  const handleImg = () => imgRef.current.click();
  console.log(props);

  return (
    <>
      <div className="text-nutral2">
        <label className="lableWidth font-bold capitalize " htmlFor="image">
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            accept="image/*"
            ref={imgRef}
            name={name}
            // onBlur={onBlur}
            onChange={onChange}
            className="hidden "
            placeholder="enter product Image"
          />
          <button
            onClick={handleImg}
            className={
              errors && touched
                ? `form font-semibnold flex w-full items-center justify-start gap-2 rounded-md border-2 border-denger bg-baseClr1 py-2 pl-4 text-left text-sm capitalize text-gray-400 placeholder:text-sm placeholder:capitalize md:py-1 ${
                    errors && "mb-5"
                  }`
                : `form font-semibnold flex w-full items-center justify-start gap-2 rounded-md bg-baseClr1 py-2 pl-4 text-left text-sm capitalize text-gray-600 placeholder:text-sm placeholder:capitalize md:py-1 ${
                    errors && "mb-5"
                  }`
            }
          >
            {/* <RiImage2Fill className="text-xl text-primary md:text-3xl" />{" "} */}
            {children}
            {imgName ? imgName : btnLabel}
          </button>
          {errors && touched && (
            <p className="absolute left-0 top-[92%] mb-2 text-small capitalize text-denger md:text-sm">
              {errors}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

FileInputField.propTypes = {
  type : PropTypes.string,
  label : PropTypes.string,
  btnLabel : PropTypes.string,
  name : PropTypes.string,
  onChange : PropTypes.func,
  onBlur : PropTypes.func,
  errors : PropTypes.bool,
  touched : PropTypes.bool,
  imgRef : PropTypes.func,
  imgName : PropTypes.object,
}

export default FileInputField;
