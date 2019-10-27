import Item from '../baseComponents/Item/Item';

export class Article extends Item {
    constructor(data) {
        super('div');
        this.data = data;

        this.title = Item.addItem('p', 'title_default', this.element);
        this.title.setInnerText(data.title);

        this.description = Item.addItem('p', 'description_default', this.element);
        this.description.setInnerText(data.description);

        this.content = Item.addItem('p', 'content_default', this.element);
        this.content.setInnerText(data.content);

        this.publishedAt = Item.addItem('p', 'publishedAt_default', this.element);
        this.publishedAt.setInnerText(data.publishedAt);

        this.author = Item.addItem('p', 'author_default', this.element);
        this.author.setInnerText(data.author);        

        this.source = Item.addItem('p', 'source_default', this.element);
        this.source.setInnerText(data.source.name);

        this.url = Item.addItem('p', 'url_default', this.element);
        this.url.setInnerText(data.url);

        this.urlToImage = Item.addItem('p', 'urlToImage_default', this.element);
        this.urlToImage.setInnerText(data.urlToImage);
    }

    generate() {

    }
}