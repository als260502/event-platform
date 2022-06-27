import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cliente = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6n58z0uj601xi8r8d7mqi/master',
  cache: new InMemoryCache()
})