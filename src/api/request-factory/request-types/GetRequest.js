export class GetRequest {
    constructor(url) {
        this.url = url;
    }

    makeRequest = async () => {
        const result = await fetch(this.url);
        return result.json();
    }
}
