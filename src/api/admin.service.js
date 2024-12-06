import { api } from './api'
const SERVER_ENDPOINT = `${api.server + api.apiVersion}/Admin`

export const getAdmin = async () => {
    try {
        const response = await fetch(SERVER_ENDPOINT);
        return response.json();
    } catch {
        throw new Error('could not fetch admins');
    }
}