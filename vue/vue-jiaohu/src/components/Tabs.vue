<template>
  <div class="tabs">
    <button v-for="tab in tabs" :key="tab" @click="changeTab(tab)">
      {{ tab }}
    </button>
    <hr />
    <!-- 有些指令可以直接在组件上只用 -->
    <Posts v-if="currentTab === 'Posts'" />
    <Company v-else />
  </div>
</template>

<script>
import Company from './Company'
import Posts from './Posts'
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: ['Posts', 'Company'],
      currentTab: 'Posts'
    }
  },
  components: {
    Company, Posts
  },
  methods: {
    changeTab (tab) {
      this.currentTab = tab
    }
  },
}
</script>

<style>
.tabs {
  border: 1px solid #ccc;
}
</style>