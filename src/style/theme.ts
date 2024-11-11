type TColorKey = 'background' | 'text' | 'primary' | 'secondary' | 'accent' | 'border' | 'surface';
export type TThemeName = 'light' | 'dark';

export const getTheme = (themeName: TThemeName) => {
    return themeName === 'light' ? lightTheme : darkTheme;
}

export interface ITheme {
    name: TThemeName;
    color: {
        [key in TColorKey]: string;
    };
}

export const lightTheme: ITheme = {
    name: 'light',
    color: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#ffffff',
        surface: '#f8f9fa',
        text: '#212529',
        border: '#dee2e6',
        accent: '#007bff'
    },
};

export const darkTheme: ITheme = {
    name: 'dark', 
    color: {
        primary: '#0056b3',
        secondary: '#545b62',
        background: '#212529',
        surface: '#343a40',
        text: '#f8f9fa',
        border: '#495057',
        accent: '#0056b3'
    },
};

export type Theme = typeof lightTheme;