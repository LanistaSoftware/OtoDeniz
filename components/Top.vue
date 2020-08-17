<template>
  <div class="top-container">
    <div class="top-icon text-xdark">
      <slot name="image"></slot>
    </div>
    <div class="top-text">
      <span class="f_regular text-xdark">
        <slot name="text"></slot>
      </span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.top-container {
  display: flex;
  align-items: center;
  width: 100%;
}
.top-text {
  display: flex;
  font-size: 0.8rem;
  align-items: flex-end;
}
.top-icon {
  margin-right: 3px;
  display: flex;
  align-items: center;
}
</style>
