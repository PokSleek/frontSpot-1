import { requests, requestDefaultOptions } from '../constants';

const { POST } = requests;

export class PostRequest {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }

    makeRequest = async () => {
        const result = await fetch(this.url, {
            ...requestDefaultOptions,
            method: POST,
            body: JSON.stringify(this.data),
        });
        return result.json();
    }
}
