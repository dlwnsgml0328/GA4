export const sendIsLoggedInEvent = (url: string, isAuth: boolean) => {
    return {
        action: '[CLICK] BUTTON',
        category: `[NAVIGATE] to ${url}`,
        label: 'isLoggedIn',
        value: `${isAuth}`,
    }
}