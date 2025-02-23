
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import 'graphiql/graphiql.css';

import { createRoot } from 'react-dom/client';
const fetcher = createGraphiQLFetcher({
    url: 'http://localhost:8080/graphql',
});

function MyGraphQLIDE() {
  return (
  <GraphiQL fetcher={fetcher} />
  );
}

export default MyGraphQLIDE;




