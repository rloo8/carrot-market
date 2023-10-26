import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Form() {
  const { register, handleSubmit, formState, reset } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log(data);
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  const { errors } = formState;

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Username shold be longer than 5",
            },
          })}
          type="text"
          placeholder="Username"
        />
        {errors.username?.message}
        <input
          {...register("email", {
            required: "Email is required",
            validate: {
              notGmail: (value) =>
                !value.includes("@gmail.com") || "Gmail is not allowed",
            },
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email?.message}
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Created" />
      </form>
    </>
  );
}
