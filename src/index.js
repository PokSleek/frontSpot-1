import { getNews } from './api/requests/getNews'
import { Article } from './components/Article/Ariticle'

async function initialize() {
    const root = document.querySelector('#root');
    const fragment = document.createElement('div');

    // getNews().then(data => data.forEach(item => {
    //     const article = new Article(item);
    //     article.mount(fragment);
    // })).then(() => root.appendChild(fragment));

    const data = await getNews();
    data.forEach(item => {
        const article = new Article(item);
        article.mount(fragment);
    });
    root.appendChild(fragment)
}

document.addEventListener('DOMContentLoaded', initialize);