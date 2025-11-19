import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <svg className="theme-icon sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <path d="M12 1v3M12 20v3M21 12h-3M6 12H3M18.364 5.636l-2.121 2.121M7.757 16.243l-2.121 2.121M18.364 18.364l-2.121-2.121M7.757 7.757L5.636 5.636"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round" />
                </svg>
            ) : (
                <svg className="theme-icon moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        fill="currentColor" />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
