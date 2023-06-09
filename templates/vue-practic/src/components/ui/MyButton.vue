<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style scoped>
.btn{
    border-radius: 8px;
    align-items:center;
    padding: 10px 15px;
    background: none;
    color:#FB8122;
    border: 1px solid #FB8122;

}
</style>