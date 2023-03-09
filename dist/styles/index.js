import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
export const StyleProvider = ({ children }) => (_jsxs(ThemeProvider, Object.assign({ theme: theme }, { children: [_jsx(GlobalStyle, {}), children] })));
//# sourceMappingURL=index.js.map