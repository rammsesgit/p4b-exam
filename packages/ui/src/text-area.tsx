import { useEffect } from 'react'

export const TextArea = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
}: {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  label: string
  name?: string
  value: string
  id?: string
}) => {
  useEffect(() => {
    if (value.length === 0) {
      const $textArea = document.getElementById(id || label)
      $textArea && ($textArea.style.height = 'auto')
    }
  }, [value])

  function autoResize(e: React.FormEvent<HTMLTextAreaElement>, reset?: boolean) {
    if (reset) {
      // @ts-ignore
      e.target.style.height = 'auto'
    }
    // @ts-ignore
    e.target.style.height = e.target.scrollHeight + 2 + 'px'
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length < value.length) {
      autoResize(e, true)
    }
    onChange(e)
  }

  return (
    <label className='label'>
      <span>{label}</span>
      <textarea
        id={id || label}
        className='textarea'
        name={name || label.toLowerCase()}
        placeholder={placeholder}
        onChange={handleChange}
        onInput={autoResize}
        value={value}
      />
    </label>
  )
}
