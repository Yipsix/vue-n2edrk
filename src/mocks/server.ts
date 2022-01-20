import { createServer } from 'miragejs';
import data from './data'

export function makeServer(){
    return createServer({
        seeds(server) {
            server.db.loadData({books: data()});
        },
        routes(this) {
            this.timing = 0;
            this.get('api/books', (schema) => { return schema.db.books })
            this.get('api/books/name/:name', (schema, request) => { return schema.db.books.filter(e => e.bookName.toLowerCase().includes(request.params.name.toLowerCase()))})
            this.get('api/books/:id', (schema, request) => { return schema.db.books.find(request.params.id) })

        }
    })
}