<template>
	<nav class="navbar navbar-light verde" v-if="!['Login'].includes($route.name)">
		<h3 class="mx-4">Notas!</h3>
		<ul class="nav justify-content-end">
			<li class="nav-item">
				<router-link class="nav-link" to="/">Inicio</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" to="/notas">Notas</router-link>
			</li>
			<!-- <li class="nav-item">
				<router-link class="nav-link" to="/perfil">Mi Perfil</router-link>
			</li> -->
            <li class="nav-item" v-if="!logueado">
				<router-link class="nav-link" to="/login">Login</router-link>
			</li>
            <li class="nav-item" v-if="logueado">
				<a class="nav-link">{{usuario}}</a>
			</li>
            <li class="nav-item" v-if="logueado">
				<a class="nav-link" style="cursor:pointer;" @click="cerrarSesion">Cerrar Sesion</a>

			</li>
		</ul>
	</nav>
	<router-view/>
</template>

<script>
export default {
    name: "App",
	data() {
		return {
			usuario: null,
            logueado: null,
		};
	},
    methods:{
        cerrarSesion(){
            console.log("this.cerrarSesion");
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            localStorage.removeItem('usuario');
            this.$router.push({ name: 'Login'})
        }
    },
    created() {
		const usuario = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuario, "Este es el usuario")
        if(usuario){
            this.logueado = true;
            this.usuario = usuario;
        }
	},

}
</script>

<style>
.verde{
	background-color: #4dd4ac;
}
</style>
