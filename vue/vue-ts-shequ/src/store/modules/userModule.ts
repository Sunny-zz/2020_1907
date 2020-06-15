import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import store from '@/store'
interface Author {
  loginname: string;
  avatar_url: string;
}

interface SmallTopic {
  id: string;
  author: Author;
  title: string;
}

export interface User {
  avatar_url: string;
  loginname: string;
  recent_replies?: SmallTopic[];
  recent_topics?: SmallTopic[];
}

@Module({ dynamic: true, name: 'user', store })
export default class UserModule extends VuexModule {
  user: User | null = null
  @Mutation
  getUser (user: User) {
    this.user = user
  }

  @Action
  async fetchUser (loginname: string) {
    const res = await axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
    this.context.commit('getUser', res.data.data)
  }
}


