import axios from 'axios;

export const getTransaction = () => {
    return {
        type: 'GET_TRANSACTION',
        patload: axios({
            method: 'GET',
            url: `https://nextar.flip.id/frontend-test`,
        })
    }
}