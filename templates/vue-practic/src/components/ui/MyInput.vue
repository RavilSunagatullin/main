<template>
    <input :value="modelValue" @input="upadteInput" type="text" class="input">
</template>

<script>
    export default {
        name: 'MyInput',
        props:{
            modelValue:{String, Number}
        },
        methods : {
            upadteInput(event){
                this.$emit('update:modelValue', event.target.value)

            }
        }
    }
</script>

<style scoped>
.input{
    width: 100%;
    border: 1px solid teal;
    padding: 10px;
    margin-top: 10px;
}
</style>