import React from 'react'

const Button = ({ text, icon = null, variant = "primary" }) => {
  return (
    <button
      className={`
        flex items-center rounded-xl px-3 py-2 text-xl gap-2
        ${variant === "primary" ? "bg-primary text-white" : "bg-white text-primary border border-primary border-2"}
      `}
    >
      <p className="font-medium">{text}</p>
      {icon && 
        <div className="m-2 w-6">
          <img src={icon} alt="button icon" />
        </div>
      }
    </button>
  )
}

export default Button
