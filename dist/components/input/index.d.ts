interface PropsType {
    label: string;
    hint: string;
    value: string;
    onChange: () => void;
    placeholder?: string;
    onSearchIconClick?: () => void;
    onRemoveIconClick?: () => void;
    rightIconType?: 'remove' | 'password';
    isError: boolean;
}
export declare const Input: ({ label, hint, value, onChange, placeholder, onSearchIconClick, onRemoveIconClick, rightIconType, isError, }: PropsType) => JSX.Element;
export {};
