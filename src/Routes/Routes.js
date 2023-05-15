import UserRoutes from "./userRoutes/UserRoutes"
import AdminRoutes from "./AdminRoutes/AdminRoutes"

const Routes = [
    ...UserRoutes,
    ...AdminRoutes
]
export default Routes;
