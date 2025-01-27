import BaseballIcon from "../assets/baseball.svg";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="container w-[480px] flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-row gap-8">
          <img src={BaseballIcon} alt="baseball icon" width={48} height={48} />
          <h1 className="flex items-center text-4xl font-bold text-blue-900">
            MLB Searchify
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
