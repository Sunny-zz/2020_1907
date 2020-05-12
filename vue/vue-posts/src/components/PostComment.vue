<template>
  <div class="comment-list">
    <h4>评论</h4>
    <div>
      <input v-model="comment" type="text" />
      <button @click="addComment">添加</button>
    </div>
    <ul v-if="comments.length">
      <li v-for="item in comments" :key="item.id">
        <span style="display:block" v-html="item.content"></span>
        <button @click="delComment(item.id)">删除</button>
      </li>
    </ul>
    <div v-else>暂无评论</div>
  </div>
</template>

<script>
export default {
  name: 'PostComment',
  data () {
    return {
      comments: [],
      comment: ''
    }
  },
  created () {
    const { id } = this.$route.params
    this.axios.get(`http://localhost:3000/comments?postId=${id}`).then(res => {
      this.comments = res.data
    })
  },
  methods: {
    addComment () {
      const { comment } = this
      if (comment.trim()) {
        // 添加评论
        const { id } = this.$route.params
        this.axios.post(`http://localhost:3000/comments`, {
          postId: id,
          content: comment
        }).then(res => {
          this.comments.push(res.data)
          this.comment = ''
        })
      }
    },
    delComment (id) {
      this.axios.delete(`http://localhost:3000/comments/${id}`).then(() => {
        this.comments = this.comments.filter(item => item.id !== id)
      })
    }
  },
}
</script>

<style>
</style>