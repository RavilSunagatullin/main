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

    align-items:center;
    padding: 10px 15px;
    background: none;
    color:red;
    border: 1px solid red;

}
</style>