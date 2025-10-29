import { useDispatch, useSelector } from 'react-redux';
import {
	HeaderContainer,
	StyledHeader,
	StyledNavLink,
	ThemeToggleButton,
} from './Header.styled';
import { toggleThemeAction } from '../../feature/themeList';
import { RootState } from '../../store';

export const Header = () => {
	const dispatch = useDispatch();
	const themeName = useSelector(
		(state: RootState) => state.themeList.theme.name
	);

	return (
		<StyledHeader>
			<HeaderContainer>
				<StyledNavLink to='/'>ToDo</StyledNavLink>
				<StyledNavLink to='/list'>List</StyledNavLink>
				<div>
					<ThemeToggleButton
						onClick={() => dispatch(toggleThemeAction())}
					>
						{themeName === 'light' ? '🌙' : '🌞'}
					</ThemeToggleButton>
				</div>
			</HeaderContainer>
		</StyledHeader>
	);
};