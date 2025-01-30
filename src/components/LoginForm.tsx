import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFields } from "../utils/types";
import { useMutation } from "@tanstack/react-query";
import { login } from "../utils/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFields>();
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation({ mutationFn: login });

  const onSubmit: SubmitHandler<LoginFields> = (loginField) => {
    loginMutation(loginField, {
      onSuccess: (data) => {
        setToken(data.token || "token");
      },
    });
  };

  useEffect(() => {
    if (token.length !== 0) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <form
      className="flex flex-col items-center w-11/12 px-8 py-4 space-y-4 bg-white shadow-md rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg font-bold">Welcome back!</h2>
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          className="px-4 py-2 text-sm border rounded-xl"
          placeholder="johndoe@email.com"
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
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
