import {IPaths} from 'routes/type';

export const Paths: IPaths = {
  Root: {
    path: () => '/',
    template: '/'
  },
  List: {
    path: () => '/todos',
    template: '/todos'
  }
}
