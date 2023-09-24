//import useForm hook
import { useForm } from "react-hook-form";
import { useEffect } from "react";


export default function MyForm1() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {    console.log(data);  };

    // create useEffect hook method to show ...registerForm output in console
     useEffect(() => { 
           const data = {...register("firstName")};
           console.log(data);
        }, [register]);

    return (    

<form onSubmit={handleSubmit(onSubmit)}>
  <label>First Name</label>
  <input {...register("firstName")} />

  <label>Email</label>
  <input type="email" {...register("email")} />

  {/* Add more input fields as needed */}
  
  <input type="submit" />
</form>)
}

