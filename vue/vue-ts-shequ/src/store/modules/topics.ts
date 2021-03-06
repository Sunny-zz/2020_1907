import { ActionContext } from 'vuex'
import axios from 'axios'
interface Author {
  loginname: string;
  avatar_url: string;
}
export interface Topic {
  id: string;
  author: Author;
  author_id: string;
  content: string;
  reply_count: number;
  title: string;
  visit_count: number;
}
export interface State {
  topics: Topic[];
}
const posts = {
  state: (): State => ({
    topics: []
  }),
  mutations: {
    getTopics (state: State, topics: Topic[]) {
      state.topics = topics
    }
  },
  actions: {
    getTopics ({ commit }: ActionContext<State, any>) {
      axios.get('https://cnodejs.org/api/v1/topics').then(res => {
        commit('getTopics', res.data.data)
      })
    }
  }
}
export default posts
