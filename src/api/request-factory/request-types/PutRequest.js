import { requests, requestDefaultOptions } from '../constants';

const { PUT } = requests;

export class PutRequest {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }

    makeRequest = async () => {
        const result = await fetch(this.url, {
            ...requestDefaultOptions,
            method: PUT,
            body: JSON.stringify(this.data),
        });
        return result.json();
    }
}
