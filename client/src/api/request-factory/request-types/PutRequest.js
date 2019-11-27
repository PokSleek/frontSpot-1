import { requests, requestDefaultOptions } from '../constants';

const { PUT } = requests;

export class PutRequest {
    constructor(url, data) {
        this.method = PUT;
        Object.freeze(this.method);

        this.url = url;
        this.data = data;
    }

    makeRequest = async () => await fetch(this.url, {
        ...requestDefaultOptions,
        method: PUT,
        body: JSON.stringify(this.data),
    });
}
