import Link from "next/link";
import Image from "next/image";

import logo from "../public/am-logo.svg";
export default function Header() {
  return (
    <div className="w-full">
      <header className="flex w-full p-6 pb-2 justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="AM PTFL LOGO" height={48} />
          </Link>
        </div>
        <nav className="flex gap-4 text-xl font-light w-fit">
          <Link href="/portfolio">
            <span className="hover:text-gs-200 hover:underline decoration-fluorescent-adolescent">
              !portfolio
            </span>
          </Link>
          <Link href="/sobre">
            <span className="hover:text-gs-200 hover:underline decoration-fluorescent-adolescent">
              !sobre mim
            </span>
          </Link>
        </nav>
      </header>
      <div className="flex w-full ps-8 text-gs-300 text-xl">
        UI/UX & Product Designer
      </div>
    </div>
  );
}
