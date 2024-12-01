<template>
    <div class="table-container">
        <table class="custom-table">
            <thead>
                <tr>
                    <th v-for="head in headings" :key="head.key">{{ head.title }}</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="row in data" :key="row.id">
                    <td v-for="head in headings" :key="head.key">
                        <slot :name="head.key" :data="row"> {{ row[head.key] }}</slot>
                    </td>
                </tr>
                <hr>
        
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import {
        defineProps
    } from "vue"

    defineProps({
        headings: Array,
        data: Array,
    })
</script>

<style scoped></style>