import Link from 'next/link'
import Head from 'next/head'

export default function HeaderMenu({ pages }) {
    return (
        <> 
            <nav>
                <ul>
                    {pages.map((pages) => (
                        <li key={pages.id}>
                            <Link href={pages.link}>
                                <a>{pages.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}