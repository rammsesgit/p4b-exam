export const InputText = ({
  name,
  label,
  value,
  onChange,
  placeholder,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  label: string
  name?: string
}) => {
  return (
    <label className='label'>
      <span>{label}</span>
      <input
        type='text'
        value={value}
        className='input'
        onChange={onChange}
        placeholder={placeholder}
        name={name || label.toLowerCase()}
      />
    </label>
  )
}
