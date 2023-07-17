<template>
    <div>
        <h1 class="heading-1 mt">Input</h1>
        <form class="form">
            <uiInput
                label="your name"
                name="name"
                placeholder="Input your name"
                v-model:value="v.nameField.$model"
                :error="v.nameField.$errors"/>
            <uiInput
                label="Твое имя"
                name="имя"
                placeholder="Введите ваше имя"
                v-model:value="v.nameFieldRu.$model"
                :error="v.nameFieldRu.$errors"/>
            <uiInput
                label="Your email"
                name="email"
                placeholder="Input your email"
                v-model:value="v.emailField.$model"
                :error="v.emailField.$errors"/>
        </form>
    </div>
</template>

<script setup>
    import uiInput from '@/components/uiInput.vue';
    import {ref, computed} from 'vue'
    import useVuelidate from '@vuelidate/core';
    import {helpers,minLength, email} from '@vuelidate/validators'

    const nameField = ref('')
    const nameFieldRu = ref('')
    const emailField = ref('')

    const rules = computed(() => ({
        nameField:{
            minLength: minLength(3)
        },
        nameFieldRu:{
            minLength:helpers.withMessage(`минимальная длина 3 символа`, minLength(3))
        },
        emailField:{
            email: email
        }
    }))

    const v = useVuelidate(rules, {nameField, nameFieldRu, emailField})
    console.log(v)
</script>

<style lang="sass" scoped>
.mt
    margin-bottom: 40px
.form
    display: flex
    flex-direction: column
    gap: 5px

</style>