<template>
  <div class="box">
    <slot>Default Message</slot>
  </div>
</template>

<script>
export default {
  name: 'message',
}
</script>

<style media="screen">
  .box {
    background-color: #e3e3d3;
    padding: 10px;
    border: 1px solid #c5c5c5;
  }
</style>
