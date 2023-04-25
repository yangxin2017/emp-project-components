<template>
  <div>
    <div class="v2box">{{ title }}</div>
    <el-button @click="handleClick">测试</el-button>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components:{
  Button,
  DynamicButton:()=>import('./Button.vue')
  },
  data() {
    return {
      title: "EMP Vue2 Component From BASE",
    };
  },
  props: {
    dataProps: { type: Number, required: false },
    methodProps: { type: Function, required: false },
  },
  methods: {
    add() {
      // Vue2 使用 Vue3 传过来的自定义事件需要把函数名 kebab-case 改为 camelCase 再加前缀 on
      // 例如：调用 @my-event 需要写成 onMyEvent
      this.$emit("onMyEvent");
    },
    handleClick() {
      console.log('123123123213')
    }
  },
  mounted: function () {
    this.methodProps && this.methodProps();
    // console.log(this.$props)
    // console.log(this.$attrs)
    // console.log(this.$listeners)
  },
};
</script>

<style>
.v2box {
  font-size: 38px;
  color: green;
  font-weight: bold;
}
.button {
  width: 200px;
  padding: 20px 0;
}
</style>
