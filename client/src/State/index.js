import set from 'lodash/set';
import get from 'lodash/get';
import has from 'lodash/has';


const state = {}

export default class State {
    static getState = path => path ? ({ ...get(state, path) }) : ({ ...state});

    static connectToField = path => {
        if (!has(state, path)) {
            set(state, path, {});
        }
        return get(state, path);
    }
}
