import AdminLayout from "../../components/layout/AdminLayout";


import Projects from "../../pages/projects/Projects";
import Login from "../../pages/login/Login";
import company from "../../pages/company/Company";
import Queries from "../../pages/queries/Queries";
import PortfolioCompany from "../../pages/portfolio/portfolio-comapnies/PortfolioCompany";
import PortfolioInvestor from "../../pages/portfolio/portfolio-investors/PortfolioInvestors";
const AdminRoutes = [
    {
        path: '/admin',
        Component: <div>admin Page</div>,
        Layout: AdminLayout,
        modules: [
            {
                path: "/login",
                Component: Login,
                exact: true
            },
            {
                path: "/queries",
                Component: Queries,
                exact: true
            },
            {
                path: "/portfolio",
                Component: PortfolioCompany,
                exact: true
            },
            {
                path: "/portfolio/investors",
                Component: PortfolioInvestor,
                exact: true
            },
            {
                path: "/company",
                Component: company,
                exact: true
            }

        ]

    }
]


export default AdminRoutes;