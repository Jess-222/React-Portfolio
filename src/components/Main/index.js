import About from "../../pages/About"


function Main({page}, props) {

    const renderPage = () => {
        if (page.name === "About") {
            return <About />
        }
    }

    return (
        <main>
            <h1>{page.name}</h1>
            {renderPage()}
        </main>
    )
}

export default Main