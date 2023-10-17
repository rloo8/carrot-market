import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer"
        />
        <span className="hidden peer-invalid:block">This input is invalid</span>
        <span className="hidden peer-valid:block">Good Job</span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </div>
  );
}
