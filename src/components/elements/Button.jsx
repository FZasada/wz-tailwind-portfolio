import React from 'react'

const Button = ({ text, icon = null, variant = "primary", onClick=null, disabled = false, title = null }) => {
  return (
    <button
      className={`
        ${variant === "primary" ? "hover:bg-[#A71B3A]" : "hover:bg-primary hover:text-white"}
        transition-all duration-200 ease-in-out
        flex items-center rounded-[8px] p-[16px] gap-[12px]
        h-[53px]
        ${variant === "primary" ? "bg-primary text-white" : "bg-white text-primary border border-primary border-2"}
      `}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      <p className="text-[18px] font-medium">{text}</p>
      {icon && 
        <div className="w-[18px]">
          <img src={icon} alt="button icon" />
        </div>
      }
    </button>
  )
}

export default Button
