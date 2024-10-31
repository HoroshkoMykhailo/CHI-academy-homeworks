const AppRoute = {
    ANY: '*',
    HOME: '/',
    HEROES: '/heroes',
    HERO: ':id',
    ABOUT: '/about',
    NOT_FOUND: '/not-found',
} as const;

export { AppRoute };