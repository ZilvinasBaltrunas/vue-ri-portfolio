<template>
    <div>
        <button href="" class="link_button">
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss">
  .link_button {
    color: #fff;
    padding: 10px 20px;
    background: #b30000;
    margin: 20px 0;
    display: inline-block;
    border: #b30000;
  }
</style>
