const URLS = {
    ROOT: '/api/v1',
    AUTH: {
        BASE: '/auth',
        PATHS: ['/login', '/register'], 
    },
    COFFEE: {
        BASE: '/coffee',
        PARAMS: ['/:id']
    },
}

export default URLS;