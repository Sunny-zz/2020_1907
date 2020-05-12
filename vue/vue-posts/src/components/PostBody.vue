<template>
  <div>
    <h1>
      {{ post.title }}
    </h1>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'PostBody',
  props: ['post']

}
</script>

<style>
</style>