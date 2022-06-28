import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { accessToken } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${accessToken}`);
    return fetchUtils.fetchJson(url, options);
};

export default httpClient;