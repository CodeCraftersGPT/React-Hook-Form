//import useForm hook
import { useForm } from "react-hook-form";

// create functin with name FetchData to get the data from jsonplaceholder post api


export default function InputValidationForm() {
    //import errors from useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {    console.log(data);  };

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
  
  <input type="submit" />
</form>)
}

