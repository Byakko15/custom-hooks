import {useState} from "react";

export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClear = () => {
    setForm(initialForm);
  };

  return {
    ...form,
    form,
    handleChange,
    handleClear,
  };
};
