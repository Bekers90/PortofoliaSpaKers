

export const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-5 md:px-10 lg:px-15 
    xl:px-20 ${className || "" } `} >
        {children}
    </div>
  )
}
