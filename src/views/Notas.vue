<template>
	<div class="contenedor">
		<div class="d-flex justify-content-end mb-4">
			<a class="btn btn-primary" @click="mostrarModal">Nueva nota</a>
		</div>
		<div class="contenedorCards">
			<div
				class="card m-3"
				style="width: 18rem"
				v-for="item in notas"
				:key="item.id"
				@click="mostrarNota(item.id)"
			>
				<div class="card-body">
					<h5 class="card-title">{{ item.title }}</h5>

					<p class="card-text">
						{{ item.content }}
					</p>
				</div>
			</div>
		</div>

		<Modal v-show="modalNotaVisible" @close="cerrarModal">
			<template v-slot:header> </template>

			<template v-slot:body>
				<div>
					<div class="form-floating mb-3">
						<input
							type="text"
							class="form-control"
							id="floatingInput"
							placeholder="Titulo de la nota"
							v-model="nota.title"
						/>
						<label for="floatingInput">Titulo de la nota</label>
					</div>
					<div class="form-floating">
						<textarea
							class="form-control"
							placeholder="Cuerpo de la nota"
							id="floatingTextarea"
							style="height: 300px"
							v-model="nota.content"
						></textarea>
						<label for="floatingTextarea"
							>Escriba su nota aca...</label
						>
					</div>
				</div>
			</template>

			<template v-slot:footer>
				<div class="row">
					<div class="col-12">
						<button
							type="button"
							class="btn btn-outline-primary"
							v-show="editar"
							@click="actualizarNota"
						>
							Actualizar
						</button>
						<button
							type="button"
							class="btn btn-outline-success mx-4"
							@click="crearNota"
							v-show="!editar"
						>
							Guardar
						</button>
						<button
							type="button"
							class="btn btn-outline-danger mx-4"
							@click="cerrarModal"
						>
							Cancelar
						</button>
						<button 
                            type="button" 
                            class="btn btn-outline-dark"
                            v-show="editar"
							@click="borrarNota"
                        >
							Borrar
						</button>
					</div>
				</div>
			</template>
		</Modal>
	</div>
</template>

<script>
import Modal from "../components/Modal.vue";
import EventService from "@/services/EventService.js";
export default {
	name: "Notas",
	data() {
		return {
			modalNotaVisible: false,
			editar: false,
			notas: [],
			nota: {},
		};
	},
	methods: {
		mostrarModal() {
			this.modalNotaVisible = true;
		},
		cerrarModal() {
			this.modalNotaVisible = false;
		},
		listarNotas() {
			EventService.listNotas()
				.then((response) => {
					this.notas = response.data;
					console.log("Esta es la respuesta", response.data);
				})
				.catch((error) => {
					console.log("Este es el error:", error.response);
                    if(error.response.status == 403){
                        console.log("Error de credenciales");
                        this.$router.push({ name: 'Login'})
                    }
				});
		},
		mostrarNota(id) {
			this.editar = true;
			EventService.showNota(id)
				.then((response) => {
					console.log("Se muestra la nota", response.data);
					this.nota = response.data;
					this.mostrarModal();
				})
				.catch((error) => {
					console.log("Este es el error:", error.response);
				});
		},
		crearNota() {
			this.editar = false;
			EventService.crearNota(this.nota)
				.then((response) => {
					console.log("Se creo la nota", response.data);
					this.listarNotas();
					this.cerrarModal();
				})
				.catch((error) => {
					console.log("Este es el error:", error.response);
				});
		},
		actualizarNota() {
			EventService.actualizarNota(this.nota)
				.then((response) => {
					console.log("Se actualizo la nota", response.data);
					this.listarNotas();
					this.cerrarModal();
				})
				.catch((error) => {
					console.log("Este es el error:", error.response);
				});
		},
		borrarNota() {
			EventService.borrarNota(this.nota)
				.then((response) => {
					console.log("Se borro la nota", response.data);
					this.listarNotas();
					this.cerrarModal();
				})
				.catch((error) => {
					console.log("Este es el error:", error.response);
				});
		},
	},
	created() {
		this.listarNotas();
	},
	components: {
		Modal,
	},
};
</script>



<style scoped>
.contenedor {
	background-color: #f8ffd9;
	padding: 20px;
	min-height: 100vh;
}

.contenedorCards {
	display: flex;
	flex-wrap: wrap;
}
</style>