
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import 'graphiql/graphiql.css';

function MyGraphQLIDE({admin}) {

  let GQLurl = ""

  if (admin) {
    GQLurl = 'http://localhost:8080/admin'
  } else {
    GQLurl = 'http://localhost:8080/graphql'
  }

  let url = { }
  url["url"] = GQLurl
  console.log(url)
  const fetcher = createGraphiQLFetcher(url);

  return (
    <GraphiQL fetcher={fetcher} />
  );
}

export default MyGraphQLIDE;




