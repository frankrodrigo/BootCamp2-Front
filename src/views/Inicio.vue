<template>
	<div class="inicio d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                    <h1 class="mb-1">Notas!</h1>
                    <h3 class="mb-5"><em>Te permite guardar tus notas de forma facil</em></h3>
                    <router-link class="btn btn-warning btn-xl m-3" to="/notas">Notas</router-link>
                    <router-link class="btn btn-primary btn-xl m-3" to="/login">Login</router-link>
                    <router-link class="btn btn-info btn-xl m-3" to="/registrarse">Registrarse</router-link>

            </div>
        
	</div>
</template>

<style scoped>
.inicio{
    min-height: 30rem;
    position: relative;
    display: table;
    width: 100%;
    height: auto;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background: linear-gradient( 90deg , rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: linear-gradient();
}
</style>
