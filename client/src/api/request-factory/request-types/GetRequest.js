import { requests } from '../constants';

const { GET } = requests;

export class GetRequest {
    constructor(url) {
        this.method = GET;
        Object.freeze(this.method);

        this.url = url;
    }

    makeRequest = async () => await fetch(this.url);
}
