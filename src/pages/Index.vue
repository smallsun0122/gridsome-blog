<template>
  <Layout :id="$page.articles.edges.length">
  </Layout>
</template>

<page-query>
query {
  articles:allStrapiArticles {
    edges {
      node {
        id
        title
        updated_at
        content
        description
      }
    }
  }
}
</page-query>

<style>
</style>
