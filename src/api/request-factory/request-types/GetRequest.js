export class GetRequest {
    constructor(url) {
        this.url = url;
    }

    makeRequest = async () => await fetch(this.url);
}
