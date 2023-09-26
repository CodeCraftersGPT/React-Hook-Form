import { useForm } from "react-hook-form";

export default function CustomErrorMessageForm() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    
    
    const onSubmit = (data) => {
        // Handle form submission
    };

      const validatePassword   = (value) => {
        if (value.length < 8) {
            return "Password must be at least 8 characters long";
        } else if (!/\d/.test(value)) {
            return "Password must contain at least one number";
        } else if (!/[!@#$%^&*]/.test(value)) {
            return "Password must contain at least one special character";
        }
    } 

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            // define password field with custom InputValidationForm
            <input type="password" {...register("password", {
            validate: validatePassword, // Pass the custom validation function
        })} />
        {errors.password && (errors.password.message)}
            
            <input type="submit" />
        </form>
    )
}