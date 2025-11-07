import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="p-4 text-center text-white bg-primary">
            <div className="flex flex-col md:flex-row items-center gap-4 max-w-[800px] mx-auto">
                <div className="w-1/2">
                    <Image src="/famol-logo.png" alt="Logo" width={250} height={250} />
                </div>
                <div className="w-1/2 flex flex-col items-center gap-2">
                    <p className="font-bold uppercase">Acesse nossas <span className="text-secondary">redes sociais</span></p>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com/famolmoveis/" target="_blank">
                            <FaInstagram className="text-white hover:text-secondary transition-all" size={45} />
                        </Link>
                        <Link href="https://wa.me/5588997030002" target="_blank">
                            <FaWhatsapp className="text-white hover:text-secondary transition-all" size={45} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>© {new Date().getFullYear()} Famol. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}