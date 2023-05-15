import UserLayout from "../../userside/components/layout/UserLayout";
import Register from "../../userside/pages/Register";
import OtpVerification from "../../userside/pages/OtpVerification";
import SuccessfullPage from "../../userside/pages/SuccessfullPage";
import KyCpage from "../../userside/pages/KYCpage";
import KycConfirmation from "../../userside/pages/KycConfirmation";
import AgreementPage from "../../userside/pages/AgreementPage";
import AgreementInfo from "../../userside/pages/AgreementInfo";
import HomePage from "../../userside/pages/HomePage";



const UserRoutes = [
    {
        path: "/",
        Component: Register,
        Layout: UserLayout
    },
    {
        path: "/user",
        Component: () => <div>User Component Index</div>,
        Layout: UserLayout,
        modules: [
            {
                path: "/register",
                Component: Register,
                exact: true
            },
            {
                path: "",
                Component: Register,
                exact: true
            },
            {
                path: "/otp",
                Component: OtpVerification,
                exact: true
            },
            {
                path: "/Successfull",
                Component: SuccessfullPage,
                exact: true
            },
            {
                path: "/KyCpage",
                Component: KyCpage,
                exact: true
            },
            {
                path: "/KycConfirmation",
                Component: KycConfirmation,
                exact: true

            },
            {
                path: "/AgreementPage",
                Component: AgreementPage,
                exact: true
            },
            {
                path: "/AgreementInfo",
                Component: AgreementInfo,
                exact: true
            }, {
                path: "/Home",
                Component: HomePage,
                exact: true
            }
        ]
    }
]


export default UserRoutes;