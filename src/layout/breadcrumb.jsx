/* eslint-disable react/prop-types */
import { theme, Breadcrumb as Ant_Breadcrumb } from 'antd';


export default function Breadcrumb({items}) {
  const { token: { colorBgContainer } } = theme.useToken();
  const breadcrumbStyle={
    background: colorBgContainer,
    textAlign: 'end',
    margin: '1px 0px 24px',
    display: "flex",
    justifyContent: "start",
    padding: "5px 24px",
  }

  return (
    <Ant_Breadcrumb style={breadcrumbStyle}
        items={items}
    />
  )
}