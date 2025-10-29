import 'styled-components';
import { Theme } from '../models/theme.interface';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
