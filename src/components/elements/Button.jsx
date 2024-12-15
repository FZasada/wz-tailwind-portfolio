import React from 'react'

const Button = ({ text, icon = null, variant = "primary", onClick=null }) => {
  return (
    <button
      className={`
        ${variant === "primary" ? "hover:bg-[#A71B3A]" : "hover:bg-primary hover:text-white"}
        transition-all duration-200 ease-in-out
        flex items-center rounded-xl px-3 py-3 text-xl gap-2
        ${variant === "primary" ? "bg-primary text-white" : "bg-white text-primary border border-primary border-2"}
      `}
      onClick={onClick}
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
