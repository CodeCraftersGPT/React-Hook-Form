//import useForm hook
import { useForm } from "react-hook-form";


export default function CustomValidationForm() {
    //import errors from useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {    console.log(data);  };

    // create custom validation for password to contain $ and # in the password
    const passwordValidation = (value) => {
        if (value.includes("$") && value.includes("#")) {
            return true;
        } else {
            return false;
        }
    }

    return (    

<form onSubmit={handleSubmit(onSubmit)}>
  <label>First Name</label>
  <input {...register("firstName",{required:true})} />
{/* add error message for firstname if empty  */}
    {errors.firstName && <p>First name is required</p>}

  <label>Email</label>
  <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
    {/* add error message code */}
    {errors.email && <p>Enter a valid email</p>}
  {/* add password with custom validation */}
    <label>Password</label>

    <input type="password" {...register("password", { required: true, validate: passwordValidation })} />
    {/* add error message code */}
    {errors.password && <p>Password must contain $ or #</p>}
  <input type="submit" />
</form>)
}

