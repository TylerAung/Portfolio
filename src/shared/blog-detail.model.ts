import { Guid } from "guid-typescript";

export class BlogDetail {
    BlogId: Guid = Guid.create();
    BlogTitle : string = "";
    BlogContent : string = "";
    BlogCover : string = "";
    LastUpdatedOn : number = Date.now();

    constructor(){

    }
}