import React from "react";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};
export default function Button(
  {
    name,
    onClick,
    className,
    disabled,
    id,
    title,
    style,
    type,
    onSubmit,
    size,
  },
  props
) {
  return (
    <div className="flex flex-col">
      <button
        className={
          "text-black flex border-2 rounded-lg hover:bg-white hover:text-black p-2 font-bold text-left" +
          sizes[size] +
          className
        }
        type={type}
        id={id}
        name={name}
        onClick={onClick}
        disabled={disabled}
        style={style}
        onSubmit={onSubmit}
        {...props}
      >
        {title}
      </button>
    </div>
  );
}
