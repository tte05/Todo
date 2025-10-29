import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 90px;
	background-color: #4682b4;
	display: flex;
	align-items: center;
	padding-block: 10px;
`;

export const HeaderContainer = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	gap: 20px;
	position: relative;
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	padding: 10px 20px;
	color: #fff;

	&.active {
		color: #390ac6b4;
		background: #fff;
		border-radius: 10px;
	}
`;

export const ThemeToggleButton = styled.button`
	background: transparent;
	border: none;
	font-size: 20px;
	cursor: pointer;
	padding: 8px;
	border-radius: 4px;
	transition: background 0.2s ease;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);

	&:hover {
		background-color: ${({ theme }) =>
			theme.colors.backgroundSecondary};
	}
`;