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
                    <router-link to="/dashboard" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/key.svg" class="nav-icon"><span>dashboard</span>
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="/product" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/3d.svg" class="nav-icon"><span>Product</span>
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>

                    <router-link to="/customers" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/user.png" class="nav-icon"><span>Customers</span>
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="/income" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/wallet.svg" class="nav-icon"> <span>Income</span>
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="/na" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/discount.svg" class="nav-icon"><span>na</span>
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                    <router-link to="/message" class="nav-item" active-class="active-link">
                        <img src="../../public/navbar/message.svg" class="nav-icon"><span>Product</span>
                        <i class="fa-solid fa-angle-right icon-right"></i>
                    </router-link>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script setup></script>

<style scoped></style>