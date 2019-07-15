import Loadable from 'react-loadable';

import ScreenLoader from './screen-loader';

const withLoadable = ({ loader, loading }) => {
  return Loadable({
    loader: loader,
    loading: loading || ScreenLoader
  });
};

export default withLoadable;
