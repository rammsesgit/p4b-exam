interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, className, type, onClick, disabled }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} type={type || 'submit'} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
