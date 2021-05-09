module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://token-travel-api.herokuapp.com/'
            }
        },
        url: 'http://localhost:3030/',
        register: `${url}/api/account`
    },
    stagingServer: {
        url: 'https://token-travel-api.herokuapp.com/',
        register: `${url}/api/account`
    }
}