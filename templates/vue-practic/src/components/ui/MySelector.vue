<template>
    <select class="selector" :value="modelValue" @change="changeOption"> <!--v-model-->
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
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.selector{
    padding: 5px;
    border-radius: 8px;
    color: #E1E2E2;
    background-color: #1D2228;
    font-weight: 700;
    border: 1px solid #E1E2E2;
}
</style>