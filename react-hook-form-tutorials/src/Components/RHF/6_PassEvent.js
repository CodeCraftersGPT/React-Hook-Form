import { useForm } from "react-hook-form";

export default function MyForm5() {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    // Handle form submission
  };

  const handleEmailBlur = () => {
    console.log("Email field onBlur event");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
        onBlur={handleEmailBlur} // Pass the onBlur event handler
      />
      {formState.errors.email && (
        <p className="error-message">{formState.errors.email.message}</p>
      )}
      <input type="submit" />
    </form>
  );
}
