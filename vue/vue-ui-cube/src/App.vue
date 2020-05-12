<template>
  <div id="app">
    <cube-scroll-nav
      :side="true"
      :data="goods"
      :current="current"
      @change="changeHandler"
      :speed="1200"
    >
      <ul class="prepend-header" slot="prepend">
        <li>11</li>
        <li>22</li>
        <li>333</li>
      </ul>
      <cube-scroll-nav-panel
        v-for="item in goods"
        :key="item.name"
        :label="item.name"
        :title="item.name"
      >
        <ul>
          <li v-for="food in item.foods" :key="food.name">
            <div>
              <img :src="food.icon" />
              <p>{{ food.name }}</p>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      goods: [
        {
          "name": "热销榜1",
          "type": -1,
          "foods": [
            {
              "name": "皮蛋瘦肉粥1",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥2",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥3",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
          ]
        },
        {
          "name": "热销榜2",
          "type": -2,
          "foods": [
            {
              "name": "皮蛋瘦肉粥11",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥21",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥31",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
          ]
        },
        {
          "name": "热销榜3",
          "type": -3,
          "foods": [
            {
              "name": "皮蛋瘦肉粥111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥211",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥311",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
          ]
        },
        {
          "name": "热销榜4",
          "type": -3,
          "foods": [
            {
              "name": "皮蛋瘦肉粥1111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥2111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥3111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
          ]
        },
        {
          "name": "热销榜5",
          "type": -3,
          "foods": [
            {
              "name": "皮蛋瘦肉粥1111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥2111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              "name": "皮蛋瘦肉粥3111",
              "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
          ]
        }
      ],
      current: ''
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    }
  },
}


</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
.cube-scroll-nav-bar_vertical .cube-scroll-nav-bar-item {
  height: 100px;
}
.cube-scroll-nav-bar-item_active {
  background-color: #ccc;
}
</style>
