import styled from 'styled-components';

import { ShoppingCartBtn } from '../common/buttons/ShoppingCartBtn';
import { Logo } from '../logo/Logo';
import { SearchBar } from '../searchBar/SearchBar';
import IconCartItems from '../icons/IconCartItems';
import IconCartEmpty from '../icons/IconCartEmpty';

const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.bgContrast};
	color: ${(props) => props.theme.colors.primary};
	padding: calc(${(props) => props.theme.padding.p} * 3);
	box-shadow: ${(props) => props.theme.shadows.regular};
	position: sticky;
	top: 0%;
	z-index: 100;
`;

const Header = ({ themePicker }) => {
	const shoppingCart = [];
	return (
		<>
			<HeaderWrapper>
				<Logo>
					FURNITUR<span>IZE</span>
				</Logo>
				<SearchBar />
				<ShoppingCartBtn>
					{shoppingCart.length > 0 ? <IconCartItems /> : <IconCartEmpty />}
				</ShoppingCartBtn>
				<button onClick={() => themePicker()}>Change Theme</button>
			</HeaderWrapper>
		</>
	);
};

export default Header;
