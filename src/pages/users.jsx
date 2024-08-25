import { useOutletContext } from 'react-router-dom';
import Breadcrumb from '../layout/breadcrumb';

import { Content } from 'antd/es/layout/layout';
import { HomeOutlined } from '@mui/icons-material';


export default function Users() {
  const { contentStyle } = useOutletContext();

  return (
    <>
      <Breadcrumb items={[ { title: <HomeOutlined />}, { title: <a href="/users">Users</a>} ]}/>
      <Content style={contentStyle} >
      <p>
            lum imperdiet mattis. Curabitur dui leo, iaculis vitae mauris eu, volutpat tincidunt dui.

            s risus vitae, egestas velit. Nulla fermentum malesuada posuere. Aliquam erat volutpat. Nam mi felis, iaculis sed nibh quis, euismod feugiat lorem. Nulla quis elit metus. Ut tempor, ipsum eu tempus rutrum, eros lectus varius augue, eget aliquet ante erat at urna. Donec bibendum suscipit metus nec molestie. Vestibulum molestie ante at dui finibus varius. Fusce a libero metus. Donec pulvinar orci vitae hendrerit maximus. Ut auctor et turpis eu posuere. Praesent lacus velit, volutpat sed dolor a, sollicitudin consequat metus.
        </p>
      </Content>
    </>
  )
}

