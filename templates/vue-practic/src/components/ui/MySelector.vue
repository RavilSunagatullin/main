<template>
    <select :value="modelValue" @change="changeOption"> <!--v-model-->
        <option disabled value="">choice in list</option>
        <option 
            v-for:="option in options" 
            :key="option.value" 
            :value="option.value">
            {{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name:'MySelector',
        props: {
            modelValue:{
                type:String
            },
            options:{
                type: Array,
                default: () => []
            }
        },
        methods:{
            changeOption(event){
                console.log(event)
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>