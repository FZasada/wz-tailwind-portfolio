import React from 'react'

const Button = ({
                    text,
                    icon = null,
                    variant = "primary",
                    onClick = null,
                    disabled = false,
                    title = null
                }) => {
    const baseStyles = `
    transition-all duration-200 ease-in-out
    flex items-center rounded-[8px] p-[16px] gap-[12px]
    h-[53px]
    text-[18px] font-medium
  `;

    // Only apply variant styles if not disabled
    const variantStyles =
        !disabled && variant === "primary"
            ? "bg-primary text-white hover:bg-[#A71B3A]"
        : !disabled && variant !== "primary"
            ? "bg-white text-primary border border-primary border-2 hover:bg-primary hover:text-white"
        : "";

    // Apply disabled styles if disabled
    const disabledStyles = disabled
        ? "bg-lightgray text-gray cursor-not-allowed"
        : "";

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${disabledStyles}`}
            onClick={onClick}
            disabled={disabled}
            title={title}
            tabIndex={disabled ? -1 : 0}
        >
            <span>{text}</span>
            {icon && (
                <div className="w-[18px]">
                    <img src={icon} alt="button icon" />
                </div>
            )}
        </button>
    );
};

export default Button;