import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function CustomErrorMessage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  
  
  const onSubmit = (data) => {
    // Handle form submission
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", {
          required: {value:true,message:"Email is required"}, // Custom error message for 'required' rule
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format", // Custom error message for 'pattern' rule
          },
        })}
      />
      {errors.email && (
        <p className="error-message">{errors.email.message}</p>
      )}
      <input type="submit" />
    </form>
  );
}
