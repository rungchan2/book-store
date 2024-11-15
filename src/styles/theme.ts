type TColorKey = 'background' | 'text' | 'primary' | 'secondary' | 'accent' | 'border' | 'surface' | 'error';
export type TThemeName = 'light' | 'dark';

export const getTheme = (themeName: TThemeName) => {
    return themeName === 'light' ? lightTheme : darkTheme;
}
export type TButtonSize = 'sm' | 'md' | 'lg';
export type TButtonScheme = 'primary' | 'secondary' | 'accent';
export type TBorderRadius = 'lg' | 'md' | 'sm';
export type TLayoutWidth = 'sm' | 'md' | 'lg';

export interface ITheme {
    name: TThemeName;
    color: {
        [key in TColorKey]: string;
    };
    heading: {
        [key in HeadingSize]: string;
    },
    button: {
        [key in TButtonSize]: {
            fontSize: string;
            padding: string;
        }
    },
    buttonScheme: {
        [key in TButtonScheme]: {
            backgroundColor: string;
            color: string;
        }
    },
    borderRadius: {
        [key in TBorderRadius]: string;
    },
    layoutWidth: {
        [key in TLayoutWidth]: string;
    }
}

export type HeadingSize = 'lg' | 'md' | 'sm';

export const lightTheme: ITheme = {
    name: 'light',
    color: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#ffffff',
        surface: '#f8f9fa',
        text: '#212529',
        border: '#dee2e6',
        accent: '#007bff',
        error: '#dc3545'
    },
    heading: {
        lg: '2rem',
        md: '1.5rem',
        sm: '1rem'
    },
    button: {
        lg: {
            fontSize: '1.125rem',
            padding: '0.5rem 1rem'
        },
        md: {
            fontSize: '1rem',
            padding: '0.5rem 1rem'
        },
        sm: {
            fontSize: '0.875rem',
            padding: '0.25rem 0.5rem'
        }
    },
    buttonScheme: {
        primary: {
            backgroundColor: '#007bff',
            color: '#ffffff'
        },
        secondary: {
            backgroundColor: '#6c757d',
            color: '#ffffff'
        },
        accent: {
            backgroundColor: '#007bff',
            color: '#ffffff'
        }
    },
    borderRadius: {
        lg: '0.5rem',
        md: '0.25rem',
        sm: '0.125rem'
    },
    layoutWidth: {
        sm: '320px',
        md: '768px',
        lg: '1024px'
    }
};

export const darkTheme: ITheme = {
    ...lightTheme,
    name: 'dark', 
    color: {
        primary: '#0056b3',
        secondary: '#545b62',
        background: '#212529',
        surface: '#343a40',
        text: '#f8f9fa',
        border: '#495057',
        accent: '#0056b3',
        error: '#dc3545'
    },
};

export type Theme = typeof lightTheme;