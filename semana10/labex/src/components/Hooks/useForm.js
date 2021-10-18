import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (value, name) => {
        setForm({ ...form, [name]: value })
    }

    return [form, onChange]
}
export default useForm