import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col items-center w-11/12 px-8 py-4 space-y-4 bg-white shadow-md rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg font-bold">Welcome back!</h2>
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="email">Email</label>
        <input
          {...(register("email"), { required: true })}
          type="email"
          name="email"
          className="px-4 py-2 text-sm border rounded-xl"
          placeholder="johndoe@email.com"
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="password">Password</label>
        <input
          {...(register("password"), { required: true })}
          type="password"
          name="password"
          className="px-4 py-2 text-sm border rounded-xl"
          placeholder="********"
        />
      </div>
      <button
        className="py-2 mt-4 font-bold text-white transition-transform bg-blue-400 cursor-pointer min-w-5/6 rounded-2xl text-md hover:bg-blue-500 hover:scale-102"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
