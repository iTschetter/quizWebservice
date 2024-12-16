import { Link, Outlet } from "react-router";
//import "./styles/stylesSheet.css"

const MainLayout = () => (
    <div>
        <div className="websiteTopper">
            <h1 className="websiteTitle">Quiz LockDown Browser</h1>
        </div>


        <Outlet/>
    </div>
)

export default MainLayout