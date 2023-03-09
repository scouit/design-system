import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen, SearchIcon } from '../../assets/svg';
export const Input = ({ label = '', hint = '', value = '', onChange, placeholder = '', onSearchIconClick = undefined, onRemoveIconClick = undefined, rightIconType = undefined, isError = false, }) => {
    const [open, setOpen] = useState(false);
    return (_jsxs(_Wrapper, Object.assign({ isError: isError }, { children: [_jsx(_TextOnBorder, Object.assign({ isError: isError }, { children: label })), _jsxs(_Content, { children: [onSearchIconClick && (_jsx(SearchIcon, { color: "gray400", onClick: onSearchIconClick })), _jsx(_ChangeInput, { value: value, onChange: onChange, placeholder: placeholder, type: open ? rightIconType : 'text' }), {
                        remove: _jsx(Block, { onClick: onRemoveIconClick }),
                        password: (_jsx("div", Object.assign({ onClick: () => setOpen(!open) }, { children: open ? _jsx(EyeOpen, {}) : _jsx(EyeClose, {}) }))),
                    }[rightIconType]] }), _jsx(_TextOnBorder, Object.assign({ isError: isError, isOutSide: true }, { children: hint }))] })));
};
const _Wrapper = styled.div `
  position: relative;
  width: 240px;
  height: 42px;
  gap: 5px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isError }) => theme.color[isError ? 'error600' : 'gray400']};
  background-color: ${({ theme }) => theme.color.gray25};
  display: flex;
  align-items: center;
`;
const _Content = styled.div `
  display: flex;
  align-items: center;
  gap: 5px;
`;
const _TextOnBorder = styled.div `
  position: absolute;
  color: ${({ theme, isError }) => theme.color[isError ? 'error600' : 'gray400']};
  padding: 0 4px;
  background-color: ${({ theme }) => theme.color.gray25};
  left: 15px;
  ${({ theme, isOutSide }) => isOutSide
    ? css `
          ${theme.font.heading4};
          bottom: -18px;
        `
    : css `
          ${theme.font.body4};
          top: -7px;
        `}
`;
const _ChangeInput = styled.input `
  min-width: 0;
  width: 100%;
  border: 0;
  flex: 1;
  ${({ theme }) => theme.font.body1};
  background-color: transparent;
`;
//# sourceMappingURL=index.js.map