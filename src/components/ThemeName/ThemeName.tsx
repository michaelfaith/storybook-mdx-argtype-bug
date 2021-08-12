import React from 'react';

export type ThemeNameType = 'light' | 'dark' | 'system';

type ThemeNameProps = {
    themeName?: ThemeNameType;
};

const ThemeName = (props: ThemeNameProps) => {

    const themeName = props.themeName ?? 'light';

    return (
        <div><strong>Theme Name:</strong> {themeName}</div>
    );
};

export default ThemeName;
