export const requestFactoryLogger = target => new Proxy(target, {
    get: (object, prop) => {
        const { method, url = '', data = '' } = object;
        console.log(method, '===>', url, data );
        return object[prop];
    },
});
