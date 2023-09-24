import { useForm } from "react-hook-form";

export default function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>basic form</div>
      {/* Form fields go here */}
    </form>
  );
}
