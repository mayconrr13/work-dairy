import 'styled-components';
import { CustomTheme } from '../theme/customTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
