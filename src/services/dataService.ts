import axios from 'axios';

class BaseAPI {
    public async getAllBooks(): Promise<Book[]> {
        return (await axios.get('/api/books')).data
    }

    public async getBookInfo(bookId: string): Promise<Book> {
        return (await axios.get(`/api/books/${bookId}`)).data
    }

    public async getBookName(bookName: string): Promise<Book[]> {
        return (await axios.get(`/api/books/name/${bookName}`)).data
    }

}


export default new BaseAPI();