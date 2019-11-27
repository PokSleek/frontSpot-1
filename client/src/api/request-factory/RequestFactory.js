import { GetRequest } from './request-types/GetRequest';
import { PostRequest } from './request-types/PostRequest';
import { PutRequest } from './request-types/PutRequest';
import { DeleteRequest } from './request-types/DeleteRequest';

import { requests } from './constants';
const { GET, POST, PUT, DELETE } = requests;

export class RequestFactory {
    static createRequest(type, url, data) {
        switch(type) {
            case GET:
                return new GetRequest(url);
            case POST:
                return new PostRequest(url, data);
            case PUT:
                return new PutRequest(url, data);
            case DELETE:
                return new DeleteRequest(url);
        }
    }
}
