import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IBlog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  async getAllBlogs(): Promise<IBlog>{
    const {data} = await this.http.get<any>("http://localhost:1337/api/blog-tests?populate=*").toPromise();
    // const {imagen:{data:{attributes:{url}}}} = data.attributes;
    let blogObject : IBlog = data;
    return blogObject;
  }

  async getBlogsByCategories(categorie:string): Promise<IBlog>{
    const {data} = await this.http.get<any>("http://localhost:1337/api/blog-tests").toPromise();
    return data;
  }

  async getBlogsById(id:number): Promise<IBlog>{
    const {data} = await this.http.get<any>(`http://localhost:1337/api/blog-tests/${id}`).toPromise();
    return data;
  }

  async getBlogsBySlug(slug:string): Promise<IBlog>{
    const {data} = await this.http.get<any>(`http://localhost:1337/api/blog-tests?populate=%2A?filters[slug][$eq]=${slug}`).toPromise();
    const {data:{attributes:{url}}} = data.attributes.imagen;
    let blogObject : IBlog = data;
    blogObject.attributes.imagen = url;
    return blogObject;
  }
}
