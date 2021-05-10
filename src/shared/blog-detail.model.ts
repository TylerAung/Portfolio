import { Guid } from "guid-typescript";

export class BlogDetail {
    BlogId: string = Guid.create().toString();
    BlogTitle : string = "";
    BlogContent : string = "";
    BlogCover : string = "";
    LastUpdatedOn : string = new Date(Date.now()).toJSON();

    constructor(){

    }
}