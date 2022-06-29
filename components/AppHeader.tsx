import Image from "next/image";
import Link from "next/link";
import { mainMenu } from '../routes'
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
                        {
                            mainMenu.map((menu, index) => {
                                return (
                                    <Link href={menu.path}>
                                        <a className="px-3 py-2 hover:bg-zinc-500 rounded-lg">{menu.title}</a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;