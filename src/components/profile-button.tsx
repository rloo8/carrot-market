import Link from "next/link";

interface ProfileButton {
  href: string;
  text: string;
  children: React.ReactNode;
}

export default function ProfileButton({ href, text, children }: ProfileButton) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white">
          {children}
        </div>
        <span className="mt-2 text-sm font-medium text-gray-700">{text}</span>
      </div>
    </Link>
  );
}
