import { useOutletContext } from 'react-router-dom';
import Breadcrumb from '../layout/breadcrumb';

import { Content } from 'antd/es/layout/layout';
import { HomeOutlined } from '@mui/icons-material';


export default function Dashboard() {
  const { contentStyle } = useOutletContext();

  return (
    <>
      <Breadcrumb items={[ { title: <HomeOutlined />}, { title: <a href="/test">Dashboard</a>} ]}/>
      <Content style={contentStyle} >
        <p>
            lum imperdiet mattis. Curabitur dui leo, iaculis vitae mauris eu, volutpat tincidunt dui.

            Suspendisse potenti. Cras eget nibh sit amet tellus lacinia vestibulum et nec nibh. Donec vitae semper urna. Aenean pellentesque turpis nibh, in hendrerit arcu finibus sed. Vivamus at nisl nibh. Aenean id vestibulum tortor. Donec nunc lorem, finibus eget bibendum id, hendrerit id ligula. Proin ultrices dolor ex, ac vulputate massa interdum in. In ac ipsum dolor. Morbi aliquet a quam quis euismod. Vivamus at leo convallis mi pellentesque viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis vulputate magna a hendrerit. Integer pretium augue quis nunc rhoncus, vel tristique lorem condimentum. In pellentesque magna luctus justo suscipit, ac sagittis tellus volutpat. In aliquam nisi a lectus egestas, eget faucibus neque varius.

            Donec pellentesque sit amet mi ut lacinia. Praesent sodales lacus ut massa aliquet, quis dignissim purus posuere. Aliquam mattis enim urna, sit amet varius nulla tincidunt eu. Morbi dictum elit ex, vel cursus libero posuere eget. Mauris tincidunt molestie orci ac aliquam. Aliquam vitae massa risus. Cras et scelerisque diam. Donec pellentesque volutpat orci, ut malesuada leo tincidunt in. Pellentesque sodales justo in elit tempor facilisis. Proin non placerat leo, eu scelerisque mi.

            Phasellus at augue eget odio tincidunt rhoncus. Mauris eget dignissim massa, ac tempor metus. Nunc et dui et eros fringilla ultricies volutpat ut sapien. Cras at rhoncus justo. Praesent eu pretium turpis. Sed volutpat metus at facilisis ultricies. Praesent finibus nisi eget euismod porta. Suspendisse volutpat metus mauris, eget interdum velit varius eget. Nunc ornare tempus nulla sed auctor. Nunc fermentum accumsan porttitor. In vel pulvinar eros.

            Vestibulum vel ornare dolor, et iaculis metus. Donec enim mauris, malesuada eu suscipit sed, consectetur non velit. Nam mollis ut neque vitae facilisis. Suspendisse euismod auctor venenatis. Proin id porttitor ex. Aenean eget nisl eget urna imperdiet gravida nec sit amet ante. Vestibulum sit amet placerat leo, nec pharetra turpis. Etiam vel ipsum mi. Suspendisse nec dolor id neque placerat condimentum.

            Nunc nec elementum ante, a faucibus metus. Suspendisse consequat sagittis justo at dictum. Maecenas sed varius nunc. Phasellus id imperdiet ligula, non placerat quam. Pellentesque ante dolor, pharetra vitae consectetur eget, ultricies quis est. Aenean sed euismod sapien. Fusce ullamcorper sapien a nibh tristique efficitur.

            Proin eget lobortis quam. Nullam interdum scelerisque finibus. Nulla facilisi. In nunc urna, varius hendrerit massa quis, suscipit cursus nulla. Sed ultrices mauris non tellus aliquam, vel auctor lorem aliquet. Aliquam erat volutpat. Pellentesque condimentum, turpis id porttitor placerat, odio elit condimentum urna, sed condimentum felis nulla a enim. Cras dictum sapien at elementum tincidunt. In egestas consequat risus, in suscipit enim cursus sed. Quisque rutrum egestas lorem, lacinia venenatis purus tempus ut.

            Quisque eget faucibus velit. Sed maximus turpis ut arcu malesuada, sit amet imperdiet quam ultrices. Donec sed consectetur enim. Ut quis ligula odio. Proin non varius dolor, vitae dignissim sem. Proin commodo viverra erat, sed hendrerit velit fermentum ut. Vestibulum tristique mi vitae nisl pulvinar condimentum. Fusce lobortis tristique sapien nec sagittis. Etiam a hendrerit est.

            Nullam et libero sapien. Fusce et elit tincidunt, tincidunt ante porttitor, semper ligula. Maecenas lacinia cursus mi, ac auctor ante lobortis eu. Maecenas ac lacus eu justo aliquam commodo in a nisl. Integer massa enim, scelerisque nec varius ac, dapibus scelerisque felis. Aenean ultrices consectetur lorem in interdum. Integer aliquam blandit maximus. Phasellus dapibus augue vel pulvinar placerat. Etiam euismod neque laoreet convallis feugiat.

            Donec malesuada sapien nibh, vitae fringilla lorem rhoncus a. Cras et velit lorem. Cras ullamcorper quam sapien, sit amet consequat augue lacinia non. Mauris dignissim metus orci, vel condimentum libero eleifend vel. Nam aliquet magna non gravida tempor. Suspendisse non tortor in nulla semper pharetra nec tempor tellus. Curabitur lacinia varius massa nec faucibus. Sed eleifend bibendum facilisis. Etiam eget eros turpis. Nullam viverra dolor id nisi porttitor luctus. Nam fringilla tortor lorem, eu dignissim quam semper quis. Proin mattis, augue sed dignissim semper, est mi tristique justo, ut scelerisque nibh est nec mauris. Mauris eu dictum ligula. Integer suscipit urna vitae dignissim vestibulum. Suspendisse eget porttitor nunc.

            Maecenas in cursus ante. Suspendisse mollis, enim in pharetra faucibus, dui massa porta dui, ac pulvinar sem nibh non lacus. Mauris feugiat, velit tristique feugiat gravida, mi mi scelerisque nulla, non vulputate neque nibh id odio. Vestibulum cursus volutpat ultrices. Vivamus bibendum sit amet eros vel sodales. Donec iaculis justo at lectus rutrum ultrices vel sit amet nulla. Vivamus vehicula porta consequat. Etiam vitae efficitur dolor.

            Ut at sapien commodo, venenatis risus vitae, egestas velit. Nulla fermentum malesuada posuere. Aliquam erat volutpat. Nam mi felis, iaculis sed nibh quis, euismod feugiat lorem. Nulla quis elit metus. Ut tempor, ipsum eu tempus rutrum, eros lectus varius augue, eget aliquet ante erat at urna. Donec bibendum suscipit metus nec molestie. Vestibulum molestie ante at dui finibus varius. Fusce a libero metus. Donec pulvinar orci vitae hendrerit maximus. Ut auctor et turpis eu posuere. Praesent lacus velit, volutpat sed dolor a, sollicitudin consequat metus.
        </p>
      </Content>
    </>
  )
}

