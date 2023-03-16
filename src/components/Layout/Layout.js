import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from "../../routes/Routers"

export default function Layout() {
    return (
        <div className="w-full flex flex-col  justify-between items-center">
            <Header />
            <Routers/>
            <Footer />
        </div>
    )
}
