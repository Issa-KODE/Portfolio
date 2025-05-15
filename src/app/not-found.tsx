/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

function NotFound() {
  return (
    <div className="flex-1 min-h-screen justify-center flex flex-col items-center">
      <h1 className="text-black text-4xl mb-5">Woops page non trouvée.</h1>
      <Link href="/" className="hover:underline">Revenir à la page d'accueil</Link>
    </div>
  )
}
export default NotFound