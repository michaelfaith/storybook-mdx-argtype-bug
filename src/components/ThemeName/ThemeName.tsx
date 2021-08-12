import React from 'react';

type ThemeNameProps = {
    name?: 'light' | 'dark' | 'system';
};

const ThemeName = (props: ThemeNameProps) => {

    const name = props.name ?? 'light';

    return (
        <div><strong>Theme Name:</strong> {name}</div>
    );
};

export default ThemeName;
