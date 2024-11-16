import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'
import { Book } from '../../types/book.type'
import { useLocation } from 'react-router-dom'
import { QUERY_STRING } from '../../constants/queryString'
import { ViewMode } from './BookViewSwitcher'


export default function BookList({ books }: { books: Book[] }) {

  const location = useLocation()
  const [view, setView] = useState<ViewMode>('card')
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if(params.get(QUERY_STRING.VIEW)) {
      setView(params.get(QUERY_STRING.VIEW) as ViewMode)
    }
  }, [location.search])

  return (
    <BookListContainer view={view}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} view={view}/>
      ))}
    </BookListContainer>
  )
}
type BooksLIstStyleProps = {
  view: ViewMode
}

const BookListContainer = styled.div<BooksLIstStyleProps>`
    display: grid;
    grid-template-columns: ${({view}) => (
      view === 'list' 
      ? "repeat(1, 1fr)"
      : "repeat(4, 1fr)"
    )};
    gap: 1rem;
`
