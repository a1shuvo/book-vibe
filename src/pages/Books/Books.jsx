import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // }, []);

    // const bookPromise = fetch('booksData.json').then(res=>res.json());
    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Data Loading...</span>}>
                <div className='grid grid-cols-3 gap-6 mb-10'>
                    {
                        data.map((item) => <Book key={item.bookId} item={item}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;