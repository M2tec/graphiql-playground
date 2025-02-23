# GraphiQL Playground

Ready to run playground using Vite + React framework

dGraph has 2 API endpoint 

For queries 
http://localhost:8080/graphql

For setting the schema and other tasks.
http://localhost:8080/admin

Ratel dgql viewer can be accessed here.
http://localhost:8000/?latest#

# GraphQL schemas

A graphQL schema can be set by running the following query

```graphql
mutation {
  updateGQLSchema(
    input: { set: { schema: "type Person { name: String }"}})
  {
    gqlSchema {
      schema
      generatedSchema
    }
  }
}
```

## Types

Scalars
Int, Float, String, Boolean and ID. Int64 scalar, and a DateTime

### Lists
- Behave like an unordered set in Dgraph. 
- For example: ["e1", "e1", "e2"] may get stored as ["e2", "e1"]
- So duplicate values will not be stored 
- Order might not be preserved. 

All scalars may be nullable or non-nullable.

The Int64 type introduced in release v20.11 represents a signed integer ranging between -(2^63) and (2^63 -1)

```graphql
type User {
    userID: ID!
    name: String!
    lastSignIn: DateTime
    recentScores: [Float]
    reputation: Int
    active: Boolean
}
```

if a value type includes an exclamation point, it means that value cannot be null.

### The ID type

Every node has a unique 64-bit identifier that you can expose in GraphQL using the ID type. An ID is auto-generated, immutable and never reused. Each type can have at most one ID field.

## Cardano schema
	
### Graphql schema

```graphql
type Block {
    blockID:  ID!
	slot:     Int! @search
	number:   Int! @search
	hash:     String! @search
	type:     Int
	prevHash: String! 
	nonce:    String
}
```

### Setting block values

```graphql
mutation{ addBlock(input: [{
  slot: 12314, 
  number:1234, 
  hash: "alkj;faj;agjaoigja",
	prevHash: "ladfaljf;al"}]) {
    block {
      hash
      slot
    }
  }
}
```

### Query for blocks

```graphql
query{ getBlock(blockID: "0x2"){
  hash
  number
  prevHash
}}
```

### Filter on search fields

```graphql
query{ queryBlock( filter: { hash: { anyofterms: "alkj;faj;agjaoigja"} }){
  hash
  number
  prevHash
}}
```
