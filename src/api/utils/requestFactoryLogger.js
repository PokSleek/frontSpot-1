export const requestFactoryLogger = target => new Proxy(target, {
    get: (object, prop) => {
        const { url = '', data = '' } = object;
        console.log(object.__proto__.constructor.name, url, data );
        return object[prop];
    },
});
