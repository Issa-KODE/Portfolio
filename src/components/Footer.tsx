import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-30 p-5 text-center shadow bg-[#f1f1f1] border-t border-gray-300 text-white">
      <div className="flex justify-center items-center gap-x-3">
        <Image src={"/github.webp"} alt="linkedin" width={35} height={35}/>
        <Image src={"/linkedIn.webp"} alt="github" width={35} height={35}/>
        <Image src={"/twitter-X.png"} alt="twitter" width={35} height={35}/>
      </div>

      <p className="text-black mt-3">© 2025 Issa Petit</p>
    </footer>
  )
}