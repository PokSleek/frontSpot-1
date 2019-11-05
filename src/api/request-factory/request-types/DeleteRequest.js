import { requests } from '../constants';

const { DELETE } = requests;

export class DeleteRequest {
    constructor(url) {
        this.url = url;
    }

    makeRequest = async () => {
        const result = await fetch(this.url, {
            method: DELETE,
        });
        return result.json();
    }
}
