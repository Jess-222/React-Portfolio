import React from "react"


function Header(props) {
    const {
        pages = [],
        setPage,
        page,
    } = props
    return (
        <header class="header">
            <h1>Jessi</h1>
            <nav>
                <ul>
                    {pages.map((Page) => (
                        <li key={Page.name}>
                            <span onClick={() => {
                                setPage(Page)
                            }}>{Page.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;