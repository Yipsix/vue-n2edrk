/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

type Book = {
  id: Number;
  author: String;
  bookName: String;
  publishedDate: string;
  about: String;
  price: String;
  rating: Number;
}