import React from 'react'
import Title from '../components/Title'
import styled from 'styled-components'
import BooksFilter from '../components/Books/BooksFilter'
import BookViewSwitcher from '../components/Books/BookViewSwitcher'
import BookList from '../components/Books/BooksList'
import BooksEmpty from '../components/Books/BooksEmpty'
import Pagination from '../components/Books/Pagination'
import { useBooks } from '../hooks/useBooks'
import { Book } from '../types/book.type'

export default function Books() {
  const { books, pagination, isEmpty } = useBooks();

  console.log(books, pagination);

  return (
    <div>
        <Title color='primary' size='lg'>도서검색 결과</Title>
        <BookListContainer>
            <div className='filter-container'>
                <BooksFilter />
                <BookViewSwitcher />
            </div>
            {!isEmpty ? (
              <>
                <BookList books={books} />
                <Pagination pagination={pagination} />
              </>
            ) : (
              <BooksEmpty />
            )}
        </BookListContainer>
    </div>
  )
}

const BookListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .filter-container {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }
`