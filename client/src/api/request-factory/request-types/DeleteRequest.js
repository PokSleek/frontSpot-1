import { requests } from '../constants';

const { DELETE } = requests;

export class DeleteRequest {
    constructor(url) {
        this.method = DELETE;
        Object.freeze(this.method);

        this.url = url;
    }

    makeRequest = async () => await fetch(this.url, {
        method: DELETE,
    });
}
