import { ActionContext } from 'vuex'
import axios from 'axios'
interface Author {
  loginname: string;
  avatar_url: string;
}

interface SmallTopic {
  id: string;
  author: Author;
  title: string;
}

interface User {
  avatar_url: string;
  loginname: string;
  recent_replies?: SmallTopic[];
  recent_topics?: SmallTopic[];
}
interface State {
  user: User | null;
}
const user = {
  state: (): State => ({
    user: null
  }),
  mutations: {
    getUser (state: State, user: User) {
      state.user = user
    }
  },
  actions: {
    getUser ({ commit }: ActionContext<State, never>, loginname: string) {
      axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then(res => {
        commit('getUser', res.data.data)
      })
    }
  }
}

export default user
