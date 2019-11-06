import { requests, requestDefaultOptions } from '../constants';

const { POST } = requests;

export class PostRequest {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }

    makeRequest = async () => await fetch(this.url, {
        ...requestDefaultOptions,
        method: POST,
        body: JSON.stringify(this.data),
    });
}
