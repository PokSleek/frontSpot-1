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


        this.title = Item.addItem('p', `${blockName}__title`, this.upperRow.element);
        this.title.setInnerText(data.title);

        this.source = Item.addItem('p', `${blockName}__source`, this.upperRow.element);
        this.source.setInnerText(data.source.name);

        this.image = Item.addItem('img', `${blockName}__image`, this.upperRow.element);
        this.image.element.src = data.urlToImage;



        this.description = Item.addItem('p', `${blockName}__description`, this.lowerRow.element);
        this.description.setInnerText(data.description);

        this.content = Item.addItem('p', `${blockName}__content`, this.lowerRow.element);
        this.content.setInnerText(data.content);



        this.author = Item.addItem('p', `${blockName}__footer__author`, this.footer.element);
        this.author.setInnerText(data.author);        

        this.publishedAt = Item.addItem('p', `${blockName}__footer__published_at`, this.footer.element);
        this.publishedAt.setInnerText(data.publishedAt);

        this.url = Item.addItem('a', `${blockName}__footer__url`, this.footer.element);
        this.url.setInnerText(data.url);
        this.url.element.href = data.url;
    }
}