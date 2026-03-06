

export const Button = ( {children, theme, className, href}) => {

    const baseClass = "text-white hover:text-white";
    const themeClasses = 
        theme === "primary"
        ? 'bg-p-7 hover:bg-taupe-950'
        : theme === "secondary"
        ? "bg-p-5 hover:bg-taupe-950"
        :"";

    const renderButton = () => {
        return (
             <button className={`button py-3 px-3 md:px-4 lg:px-6 rounded-lg ${themeClasses} ${baseClass} ${className} `} 
            >
            {children}
            </button>
            );
    }

    const renderLink = () => {
        return (
        <a href={href}
        className={`button inline-block py-3 px-3  md:px-4 lg:px-6 rounded-lg no-underline ${themeClasses} ${baseClass} ${className}`}
        >
        {children}
        </a>
        ); 
    }

  return href ? renderLink() : renderButton();
}
