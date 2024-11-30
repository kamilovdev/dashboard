<template>
    <div class="wrapper">
        <div class="dashboard-container">
            <div class="header">
                <span class="title">
                    <img src="../../public/navbar/setting.svg" alt="Settings Icon" class="settings-icon">
                    <h1>Dashboard <span class="version">v.01</span></h1>
                </span>
            </div>

            <nav class="navbar">
                <ul class="navbar-list">
                    <router-link to="" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/key.svg" class="nav-icon">dashboard
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/3d.svg" class="nav-icon">Product
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>

                    <router-link to="" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/user.png" class="nav-icon">Customers
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/wallet.svg" class="nav-icon">Income
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/discount.svg" class="nav-icon">na
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/message.svg" class="nav-icon">Product
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script setup></script>

<style scoped></style>