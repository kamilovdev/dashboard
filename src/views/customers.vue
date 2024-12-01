<script setup>
    import BaseTable from '../components/UI/table/table.vue'
    import {
        tableHeaders,
        tableRows
    } from '../components/constants/index'
</script>

<template>
    <div class="customers-wrapper">
        <div class="info">
             <span>
                <h1>Hello Evano 👋🏼,</h1>
             </span>
             <span>
                <input type="search" placeholder="Search">
             </span>
        </div>
        <div class="total">
              <div class="total-card">
                 <span>
                    <img src="../../public/customers/person.png" alt="">
                 </span>
                 <span class="total-header">
                    <p>Total Customers</p>
                    <h1>5,423</h1>
                    <p class="res"> <span>16%</span> this month</p>
                 </span>
                 
              </div>

              <div class="total-card">
                 <span>
                    <img src="../../public/customers/person.png" alt="">
                 </span>
                 <span class="total-header">
                    <p>Members</p>
                    <h1>1,893</h1>
                    <p class="res-red"> <span>1%</span> this month</p>
                 </span>
                 
              </div>

              <div class="total-card">
                 <span>
                    <img src="../../public/customers/person.png" alt="">
                 </span>
                 <span class="total-header">
                    <p>Active Now</p>
                    <h1>189</h1>
                    <p class="res"> <span>16%</span> this month</p>
                 </span>
                 
              </div>
        </div>

        <div class="main-page">
            <div class="all-customers">
                <span class="members">
                    <h1>All Customers</h1>
                    <p>Active Members</p>
                </span>

                <div class="search">
                    <input type="search" placeholder="Search">

                    <span>
                        <p>Short by : <span>Newest</span></p>
                    </span>
                </div>
            </div>

            <div>
                <BaseTable :headings="tableHeaders" :data="tableRows">
                
                    <template #Actions="{ data }">
                        <button class="status-btn">{{ tableRows.Status }}</button>
                    </template>
                </BaseTable>
            </div>

        </div>
    </div>
</template>

<style scoped>
    button {
        background: #008767;

    }
</style>