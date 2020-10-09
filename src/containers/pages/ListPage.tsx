import {ListTemplate} from 'components/templates';
import {connect} from 'react-redux';
import {State} from 'reducers';

const mapStateToProps = (state: State) => ({
  todos: state.todos
});

export const ListPage = connect(
  mapStateToProps
)(ListTemplate)
