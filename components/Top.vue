<template>
  <div class="top-container">
    <div class="top-icon text-xdark">
          <slot name="image"></slot>
    </div>
    <div class="top-text">
      <p class="f_regular text-xdark">
       <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top-container {
  display: flex;
  align-items: center;
}
.top-text{
    display: flex;
    align-items: flex-end;
}
.top-icon {
  margin-right: 3px;
  display: flex;
  align-items: center;
}
</style>
