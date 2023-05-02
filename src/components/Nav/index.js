import About from "../../pages/About"
import Portfolio from "../../pages/Portfolio"
import Contact from "../../pages/Contact"
import Resume from "../../pages/Resume"


function Nav({page}, props) {

    const renderPage = () => {
        if (page.name === "About") {
            return <About />
        }
        if (page.name === "Portfolio") {
            return <Portfolio />
        }
        if (page.name === "Contact") {
            return <Contact />
        }
        if (page.name === "Resume") {
            return <Resume />
        }
    }

    return (
        <main>
            <h1>{page.name}</h1>
            {renderPage()}
        </main>
    )
}

export default Nav