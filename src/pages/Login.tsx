import { SubmitHandler, useForm } from "react-hook-form";
import BaseballIcon from "../assets/baseball.svg";

type FormFields = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="container w-[480px] flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-row gap-8">
          <img src={BaseballIcon} alt="baseball icon" width={48} height={48} />
          <h1 className="flex items-center text-4xl font-bold text-blue-900">
            MLB Searchify
          </h1>
        </div>
        <form
          className="flex flex-col items-center w-11/12 py-4 px-8 space-y-4 bg-white shadow-md rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-lg font-bold">Welcome back!</h2>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              {...(register("email"), { required: true })}
              type="email"
              name="email"
              className="border py-2 px-4 rounded-xl text-sm"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="password">Password</label>
            <input
              {...(register("password"), { required: true })}
              type="password"
              name="password"
              className="border py-2 px-4 rounded-xl text-sm"
              placeholder="********"
            />
          </div>
          <button
            className="cursor-pointer min-w-5/6 py-2 font-bold text-white bg-blue-400 rounded-2xl text-md hover:bg-blue-500 hover:scale-102 transition-transform mt-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
