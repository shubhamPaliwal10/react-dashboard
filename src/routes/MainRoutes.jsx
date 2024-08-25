import App_layout from "../layout";
import Dashboard from "../pages/dashboard"
import Users from "../pages/users"


// ==============================|| MAIN ROUTING ||============================== //


const MainRoutes = {
  path: '/',
  element: (
    <App_layout/>
  ),
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: 'users',
      element: <Users />
    }
  ]
};

export default MainRoutes;
