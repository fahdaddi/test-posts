export default function({ $axios, redirect, store, app }) {
    $axios.onRequest(config => {
        // setting API URL globally
        config.baseURL = `${process.env.API_URL}`;
    });

    $axios.onError(error => {
        console.log(error);
        // more treatement can be done here ( code status = 401 logout user, 422 show validation errors..)
    });
}