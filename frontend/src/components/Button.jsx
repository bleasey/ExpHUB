const Button = ({type,full,inverted,onClick,children}) => {
    const classes = `p-2 px-6  rounded-lg  ${
      full ? "w-full" : null
    } text-center ${
      inverted
        ? "bg-white text-orange-500 hover:bg-orange-100"
        : "text-white bg-orange-500 hover:bg-orange-600"
    }`;
  return (
    <button type={type || "button"} className={classes} onClick={onClick}>
        {children}
    </button>
  )
}
export default Button