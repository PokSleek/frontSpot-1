import { Popup } from '../components/baseComponents/Popup/Popup'

export function dinamicError(error) {
    import('../ErrorHandler/ErrorHandler')
        .then(({ ErrorHandler }) => {
            const errorHandler = new ErrorHandler().addError(error).showLastError();
            const popup = new Popup(errorHandler, true, true);
            popup.mount(document.body);
        })
        .catch(e => console.log(e));
}
