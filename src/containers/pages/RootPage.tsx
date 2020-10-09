import {createTodo} from 'actions';
import {RootTemplate} from 'components/templates';
import {connect} from 'react-redux';

const mapDispatchToProps = {create: createTodo};

export const RootPage = connect(
  undefined,
  mapDispatchToProps
)(RootTemplate)
