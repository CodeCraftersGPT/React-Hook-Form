import { useForm } from "react-hook-form";

export default function CustomErrorMessage() {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", {
          required: "Email is required", // Custom error message for 'required' rule
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format", // Custom error message for 'pattern' rule
          },
        })}
      />
      {formState.errors.email && (
        <p className="error-message">{formState.errors.email.message}</p>
      )}
      <input type="submit" />
    </form>
  );
}
