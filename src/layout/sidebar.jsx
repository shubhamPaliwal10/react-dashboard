/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import logo from '../../public/images/logo.png';
import fevicon from '../../public/images/fevicon.png';


import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';



export default function Sidebar({ collapsed }) {
  const mode = useSelector((state) => state.app.mode);

  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
  };
  const logoStyle= {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
  }

  return (
    <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed} theme={mode}>
      <div className="demo-logo-vertical" style={logoStyle}>
        <Link to="/"><img src={collapsed ? fevicon : logo} height="38" /></Link>
      </div>

      <Menu
        theme= {mode}
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={[
          {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: ( <NavLink to="dashboard" > Dashboard </NavLink> ),
          },
          {
            key: 'users',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },


          {
            key: '1',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          }, {
            key: '2',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '3',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '4',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '5',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '6',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '7',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '8',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '9',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '10',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '11',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '12',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '13',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '14',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '15',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },{
            key: '16',
            icon: <UserOutlined />,
            label: ( <NavLink to="users" > Users </NavLink> ),
          },
        ]}
      />
    </Sider>
  )
}
