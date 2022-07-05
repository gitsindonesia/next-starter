import Image from "next/image";

interface NavbarInterfaces {
    flying?: boolean,
    flyingClassName?: string,
    background?: string,
    mainClassName?: string,
    rounded?: boolean
    roundedClassName?: string,
    showLogo?: boolean,
    logoSrc?: string,
    children?: any
}

const Navbar = ({ 
    flying = false, 
    flyingClassName = 'py-5 px-10',
    mainClassName = 'bg-zinc-700 w-full px-5 py-4',
    rounded = false,
    roundedClassName = 'rounded-lg',
    showLogo = true,
    logoSrc = '/images/logo.png',
    children
}: NavbarInterfaces) => {
    return (
        <div className={`sticky ${flying ? flyingClassName : ''}`}>
            <div className={`${ mainClassName } ${rounded ? roundedClassName : ''}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {
                            showLogo && 
                            <Image

                                src={logoSrc}
                                alt="Logo GITS"
                                width={56}
                                height={23.22}
                            />
                        }
                    <div className="flex items-center text-white gap-4 text-sm">
                        { children.menus }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;