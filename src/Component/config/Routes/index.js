import Contact from "../../../pages/Contact";
import Help from "../../../pages/Help";
import LandingPage from "../../../pages/LandingPage";
import LogIn from "../../../pages/LogIn";
import BasicTable from "../../../pages/Table";
import Register from "../../Register";

export const  routes =[
    {
        id:"logIn",
        path:"/logIn",
        component:<LogIn/>
    },
    {
        id:"landingPage",
        path:"/",
        component:<LandingPage/>
    },
    {
        id:"contact",
        path:"/contact",
        component:<Contact/>
    },
    {
        id:"landingPage",
        path:"/help",
        component:<Help/>
    }
    ,
    {
        id:"tickets",
        path:"/tickets",
        component:<BasicTable/>
    }
    ,
    {
        id:"register",
        path:"/register",
        component:<Register/>
    }
]