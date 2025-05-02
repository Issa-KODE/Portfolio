import { Phone, Send, User } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed z-10 left-0 right-0 flex justify-between items-center p-5 shadow bg-white">
      <h1 className="text-2xl font-bold flex gap-x-2">
        <User />
        <Link href="/">Issa Petit</Link>
      </h1>

      <div className="flex gap-x-4">
        <Link href="#contact">
          <Send className="cursor-pointer hover:text-slate-700"/>
        </Link>
        <Phone className="cursor-pointer hover:text-slate-700"/>
      </div>
    </nav>
  );
}