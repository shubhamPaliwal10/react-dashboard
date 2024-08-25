import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './sidebar';
import Topbar from './topbar';

import { Layout, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';




const App_layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
  const { colorBgContainer, borderRadiusLG } = token;
  
  const contentStyle = {
    margin: '0px 24px',
    padding: 24,
    overflow: 'initial',
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  return (
    <Layout hasSider style={{minWidth: '65vw', minHeight: '98vh'}}>
        <Sidebar collapsed={collapsed} />
      <Layout style={{
          marginInlineStart: collapsed ? 80 : 200,
        }}>
        <Topbar collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer} />
        <Outlet context={{ contentStyle }}/>
        <Footer style={{ marginTop: 24, textAlign: 'center', background: colorBgContainer }}>
          Ant Design ©{new Date().getFullYear()} Created by Shubham Paliwal
        </Footer>
      </Layout>
    </Layout>
  );
};


export default App_layout;

