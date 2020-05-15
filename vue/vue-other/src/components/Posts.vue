<template>
  <div class="posts">
    <ul>
      <li
        @click="showPost = item.title"
        v-for="item in lists"
        :key="item.title"
      >
        {{ item.title }}
      </li>
    </ul>
    <div v-if="!showPost">Click on a blog title to the left to view it.</div>
    <div v-else>
      <h4>{{ post.title }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      lists: [
        {
          title: 'Cat Ipsum',
          content: 'Dont wait for the storm to pass,'
        },
        {
          title: 'Cat Ipsum1',
          content: 'and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats.'
        },
        {
          title: 'Cat Ipsum2',
          content: 'Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, '
        }
      ],
      // 某个文章标题
      showPost: ''
    }
  },
  computed: {
    post () {
      return this.lists.find(item => item.title === this.showPost)
    }
  },
}
</script>

<style>
.posts {
  display: flex;
}
.posts ul {
  padding-right: 10px;
  border-right: 1px solid #ccc;
  flex-shrink: 0;
}
</style>