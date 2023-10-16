import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-red-500">
      <div className="text-black">it works</div>
    </div>
  );
}
