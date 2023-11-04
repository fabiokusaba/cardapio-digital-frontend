/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  label: string,
  value: string | number,
  updateValue: (value: any) => void
}
export function Input({ label, value, updateValue } : InputProps){
    return(
        <>
          <label>{label}</label>
          <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}