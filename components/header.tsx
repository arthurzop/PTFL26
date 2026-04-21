"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import * as L from "lucide-react";

import logo from "../public/am-logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="flex w-full p-4 pb-0 md:p-6 md:pb-2 justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="AM PTFL LOGO" height={48} />
          </Link>
        </div>

        <nav className="hidden md:flex gap-4 text-xl font-light text-right">
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

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <L.X size={28} /> : <L.Menu size={28} />}
        </button>
      </header>

      <div className="flex w-full px-4 md:px-8 text-gs-300 text-xl">
        UI/UX & Product Designer
      </div>
      {open && (
        <div className="md:hidden  flex flex-col w-full gap-2 px-4 py-4 text-xl font-light bg-gs-500/25 border-gs-100/5 border-1 rounded z-10">
          <Link
            href="/portfolio"
            onClick={() => setOpen(false)}
            className="w-full text-center"
          >
            !portfolio
          </Link>
          <div className="w-full h-0.5 bg-gs-100/5"></div>
          <Link
            href="/sobre"
            onClick={() => setOpen(false)}
            className="w-full text-center"
          >
            !sobre mim
          </Link>
        </div>
      )}
    </div>
  );
}
