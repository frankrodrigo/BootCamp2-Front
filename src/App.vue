<template>
	<nav class="navbar navbar-light verde">
		<h3 class="mx-4">Notas!</h3>
		<ul class="nav justify-content-end">
			<li class="nav-item">
				<router-link class="nav-link" to="/">Inicio</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" to="/notas">Notas</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" to="/perfil">Mi Perfil</router-link>
			</li>
		</ul>
	</nav>
	<router-view/>
</template>

<style>
.verde{
	background-color: #4dd4ac;
}
</style>
