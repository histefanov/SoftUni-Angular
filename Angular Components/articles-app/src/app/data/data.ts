import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        return data.map((i) => new Article(i.title, i.description, i.author, i.imageUrl))
    }
}