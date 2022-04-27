export class Quotes {
    constructor(public id:number, public quotes:string, public author:string, public upvotes:number, public downvotes:number ){
        this.id = id;
        this.quotes = quotes;
        this.author = author;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
