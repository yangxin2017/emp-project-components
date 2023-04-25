<template>
<div>
<button>{{textVal||'vue2 base button'}}</button>
<el-button>测试</el-button>
</div>
</template>

<<script>
export default {
  name:'Button',
  props:{
    textVal:String
  }
}
</script>