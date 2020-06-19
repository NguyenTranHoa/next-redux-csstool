import HeaderMenu from '../header'

export default function Layout({ children }) {
    const pages = [
        {
            id: 1,
            link: '/box-shadow',
            name: 'Box shadow'
        },
        {
			id: 2,
			link: '/text-shadow',
			name: 'Text shadow'
		},
		{
			id: 3,
			link: '/border',
			name: 'Border'
		},
		{
			id: 4,
			link: '/transform',
			name: 'Transform'
		}
    ]

    return (
        <>
            <header>
                <HeaderMenu pages={pages} />
            </header>
            <main>{ children }</main>
       </>
    )
}