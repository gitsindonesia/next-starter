import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import Button from "./Button/Button";

const AppHeader = () => {
    return (
        <div className="sticky top-0 py-5">
            <div className="bg-zinc-700 w-full rounded-lg px-5 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo_white.png"
                        alt="Logo GITS"
                        width={56}
                        height={23.22}
                    />
                    <div className="flex items-center text-white gap-4 text-sm">
                        <Link href="/">
                            <a className="px-3 py-2 hover:bg-zinc-500 rounded-lg">Team</a>
                        </Link>
                        <Link href="/">
                            <a className="px-3 py-2 hover:bg-zinc-500 rounded-lg">Projects</a>
                        </Link>
                        <Link href="/">
                            <a className="px-3 py-2 hover:bg-zinc-500 rounded-lg">Calendars</a>
                        </Link>
                        <Link href="/">
                            <Button className="bg-zinc-500 border-0 !text-sm !rounded-lg text-white">Test</Button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;