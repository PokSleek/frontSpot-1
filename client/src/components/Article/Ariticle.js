import Item from '../baseComponents/Item/Item';

import './Article.scss';

const blockName = 'article';

export class Article extends Item {
    constructor(data = {}) {
        super('div');
        this.addClass(blockName);

        this.data = data;

        this.upperRow = Item.addItem('div', `${blockName}__upper_row`, this.element);
        this.lowerRow = Item.addItem('div', `${blockName}__lower_row`, this.element);
        this.footer = Item.addItem('div', `${blockName}__footer`, this.element);

        if (data.title) {
            this.title = Item.addItem('p', `${blockName}__title`, this.upperRow.element);
            this.title.setInnerText(data.title);
        }

        if (data.source.name) {
            this.source = Item.addItem('p', `${blockName}__source`, this.upperRow.element);
            this.source.setInnerText(data.source.name);
        }

        if (data.urlToImage) {
            this.image = Item.addItem('img', `${blockName}__image`, this.upperRow.element);
            this.image.element.src = data.urlToImage;
        }


        if (data.description) {
            this.description = Item.addItem('p', `${blockName}__description`, this.lowerRow.element);
            this.description.setInnerText(data.description);
        }

        if (data.content) {
            this.content = Item.addItem('p', `${blockName}__content`, this.lowerRow.element);
            this.content.setInnerText(data.content);
        }


        if (data.author) {
            this.author = Item.addItem('p', `${blockName}__footer__author`, this.footer.element);
            this.author.setInnerText(data.author);
        }

        if (data.publishedAt) {
            this.publishedAt = Item.addItem('p', `${blockName}__footer__published_at`, this.footer.element);
            this.publishedAt.setInnerText(data.publishedAt);
        }

        if (data.url) {
            this.url = Item.addItem('a', `${blockName}__footer__url`, this.footer.element);
            this.url.setInnerText('Read more...');
            this.url.element.href = data.url;
        }
    }
}