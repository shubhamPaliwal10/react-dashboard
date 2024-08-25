import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../store/slices/appSlice';

import { Button, Layout, Row, Col, Avatar, Typography, Dropdown, Badge } from 'antd';
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
  BellOutlined,
  UserOutlined,
} from '@ant-design/icons';
  

// eslint-disable-next-line react/prop-types
export default function Topbar({collapsed, setCollapsed, colorBgContainer}) {

  const { Header } = Layout;
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.app.mode);
  const notificationCount = useSelector((state) => state.app.notification);
  const userName = useSelector((state) => state.user.name);
  const userType = useSelector((state) => state.user.type);

  const handleThemeMode = () => {
    dispatch(toggleMode());
  };

  const headerStyle = {
    padding: 0,
    position: 'sticky',
    top: 0,
    background: colorBgContainer
  }
  const colStyle= {
    marginLeft: 12
  }

  const items = [
    {
      key: 'profile',
      label: <NavLink to='/'> Profile </NavLink>
    },
    {
      key: 'logout',
      label: <NavLink to='/'> Logout </NavLink>
    },
  ];

  return (
    <Header style={headerStyle} >
      <Row align="middle" style={{ height: '100%' }}>
        <Col flex="none" style={{marginLeft: 24}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Col>
        <Col flex="auto">
          <div style={{ textAlign: 'center' }}></div>
        </Col>
        <Col flex="none" style={colStyle} className={!collapsed ? 'hidden md:flex' : ''}>
          <Button
            shape="circle"
            type="text"
            onClick={handleThemeMode}
            icon={mode === 'light' ? <MoonOutlined /> : <SunOutlined />} 
          />
        </Col>
        <Col flex="none" style={colStyle} className={!collapsed ? 'hidden md:flex' : ''}>
          <Badge size="default" count={notificationCount} style={{ marginRight: 6}}>
            <Button
              shape="circle"
              type="text"
              icon={<BellOutlined />}
            />
          </Badge>
        </Col>
        <Col flex="none" style={{...colStyle, marginRight: 24}} className={ !collapsed ? 'hidden md:flex md:bg-gray-100' : 'md:bg-gray-100'}>
          <Dropdown menu={{ items }} placement="bottom" trigger={['click']} >
            <Row align="middle" style={{ cursor: 'pointer', padding: '0px 16px'}}>
              <Col>
                <Avatar size={32} icon={<UserOutlined />} />
              </Col>
              <Col 
                className="hidden md:flex flex-col ml-4">
                <Typography.Text strong style={{ fontSize: '12px' }}>
                  {userName}
                </Typography.Text>
                <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                  {userType}
                </Typography.Text>
              </Col>
            </Row>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}