import { TodoItem } from '../../models/todo-item.interface';
import { StyledLink } from './ListItem.styled';

export const ListItem = ({ todo }: { todo: TodoItem }) => {
	return (
		<StyledLink $completed={todo.completed} to={`/list/${todo.id}`}>
			{todo.title}
		</StyledLink>
	);
};