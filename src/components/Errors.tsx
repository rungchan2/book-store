import React from 'react'
import { useRouteError } from 'react-router-dom'

interface Error {
  statusText: string;
  message: string;
}

export default function Errors() {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText} , {error.message}</i>
      </p>
    </div>
  );
}
