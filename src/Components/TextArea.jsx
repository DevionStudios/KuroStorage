import React from "react";

export default function TextArea(
  {
    name,
    onClick,
    className,
    onChange,
    disabled,
    id,
    title,
    style,
    type,
    classNameForLabel,
    value,
    placeholder,
  },
  props
) {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <label
          className={
            "flex text-white text-xl font-bold text-left" + classNameForLabel
          }
          htmlFor={name}
        >
          {title}
        </label>
      </div>
      <div>
        <textarea
          className={"flex border-2 border-white rounded-lg p-2" + className}
          type={type}
          id={id}
          name={name}
          onClick={onClick}
          onChange={onChange}
          disabled={disabled}
          style={style}
          value={value}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
}
