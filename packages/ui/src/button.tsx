interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, className, type, onClick }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} type={type || 'submit'} onClick={onClick}>
      {children}
    </button>
  )
}
