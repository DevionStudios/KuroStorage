import React from "react";

export default function Input(
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
      <label
        className={
          "flex text-white text-xl font-bold text-left" + classNameForLabel
        }
        htmlFor={name}
      >
        {title}
      </label>
      <input
        className={"flex border-2 border-white rounded-lg p-2 " + className}
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
  );
}
