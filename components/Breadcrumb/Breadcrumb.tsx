import Link from "next/link";

export type BreadcrumbType = {
    path: string,
    name: string,
}

export interface Props {
    crumbs: BreadcrumbType[],
    divider?: string | JSX.Element
}

export const Breadcrumb = ({ crumbs, divider = '/' }: Props) => {
    const isLast = (i: number): boolean => i == crumbs.length - 1;
    return (
        <ul className="flex items-center gap-2 text-sm mt-2">
            {
                crumbs.map((crumb: BreadcrumbType, index) => {
                    const lastCrumb = isLast(index);
                    return (
                        <>
                            <li>
                                <Link href={crumb.path}>
                                    <a className={lastCrumb ? 'text-gray-500 cursor-not-allowed' : ''}>{ crumb.name }</a>
                                </Link>
                            </li>
                                {
                                !lastCrumb && 
                                <span>{divider}</span>
                            }
                        </>
                    )
                })
            }
        </ul>
    )
}