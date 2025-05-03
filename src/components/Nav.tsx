import { Phone, Send, User } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed right-0 left-0 z-10 flex items-center justify-between bg-white p-5 shadow">
      <h1 className="flex gap-x-2 text-2xl font-bold">
        <User />
        <Link href="/">Issa Petit</Link>
      </h1>

      <div className="flex gap-x-4">
        <Link href="mailto:issa.petit@outlook.fr">
          <Send className="cursor-pointer hover:text-slate-700" />
        </Link>
        <Link href="tel:0782939489">
          <Phone className="cursor-pointer hover:text-slate-700" />
        </Link>
      </div>
    </nav>
  );
}
