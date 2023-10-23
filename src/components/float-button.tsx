import Link from "next/link";

interface FloatButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatButton({ children, href }: FloatButtonProps) {
  return (
    <Link href={href}>
      <button className="fixed bottom-28 right-5 cursor-pointer bg-orange-400 hover:bg-orange-500 transition-colors rounded-full p-4 text-white">
        {children}
      </button>
    </Link>
  );
}
