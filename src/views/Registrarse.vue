<template>
	<section class="h-100 h-custom" style="background-color: #8fc4b7">
		<div class="container py-5 h-100">
			<div class="row justify-content-center align-items-center h-100">
				<div class="col-12 col-lg-9 col-xl-7">
					<div
						class="card shadow-2-strong card-registration"
						style="border-radius: 15px"
					>
						<div class="card-body p-4 p-md-5">
							<h3 class="mb-4 pb-2 pb-md-0 mb-md-5">
								Registro de Usuario
							</h3>
							<form class="needs-validation" novalidate>
								<div class="row">
									<div class="col-md-6 mb-4">
										<div class="form-floating mb-3">
											<input
												type="text"
												class="form-control"
                                                :class="[validacionNombre]"
												id="floatingInput"
												placeholder="Nombres"
                                                v-model="usuario.first_name"
												required
											/>
											<label for="floatingInput"
												>Nombres</label
											>
											<div class="valid-feedback">
												ok!
											</div>
										</div>
									</div>
									<div class="col-md-6 mb-4">
										<div class="form-floating mb-3">
											<input
												type="text"
												class="form-control"
                                                :class="[validacionApellido]"
                                                v-model="usuario.last_name"
												id="floatingInput"
												placeholder="Apellidos"
												required
											/>
											<label for="floatingInput"
												>Apellidos</label
											>
											<div class="valid-feedback">
												ok!
											</div>
										</div>
									</div>
									<div class="col-md-6 mb-4">
										<div class="form-floating mb-3">
											<input
												type="text"
												class="form-control"
                                                :class="[validacionEmail]"
                                                v-model="usuario.email"
												id="email"
												placeholder="Email"
											/>
											<label for="email">Email</label>
                                            <div class="invalid-feedback">
												{{errores.email}}
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6 mb-4">
										<div class="form-floating mb-3">
											<input
												type="text"
												class="form-control"
                                                :class="[validacionUsuario]"
                                                v-model="usuario.username"
												id="usuario"
												placeholder="Usuario"
											/>
											<label for="usuario">Usuario</label>
                                            <div class="invalid-feedback">
												{{errores.username}}
											</div>
										</div>
									</div>
									<div class="col-md-6 mb-4">
										<div class="form-floating mb-3">
											<input
												type="text"
												class="form-control"
                                                :class="[validacionPassword]"
                                                v-model="usuario.password"
												id="password"
												placeholder="Password"
											/>
											<label for="password"
												>Password</label
											>
											<div class="invalid-feedback">
												{{errores.password}}
											</div>
										</div>
									</div>
								</div>

								<div class="mt-4 pt-2 d-flex justify-content-center">
                                    <a class="btn btn-success" @click="crearUsuario()"> Registrar </a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import EventService from "@/services/EventService.js";
import axios from 'axios'

export default {
	name: "Registrarse",
	data() {
		return {
			usuario: {},
            errores: {},
		};
	},
    methods:{
        async obtenerCredenciales() {
            EventService
            const response = await EventService.login(
                {
                    "username":"sebas",
                    "password":"sebas"
                }
            );
            return response.data;
        },
        crearUsuario(){
            this.obtenerCredenciales().then(response => {
                console.log(response, "Esta es la response de obtener credenciales");
                let token = response.access;

                const apiClient = axios.create({
                    baseURL: 'https://bfrdjangonotesapp.herokuapp.com',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    }
                })

                this.usuario.is_superuser = true;
                this.usuario.is_active = true;

                apiClient.post('/apiUsers/NoteUsers/', this.usuario)
                .then(response => {
                    console.log(response.data, "Respuesta de crear usuario");
                    this.errores = {};
                    this.$router.push({ name: 'Login'})
                })
                .catch(error =>{
                    
                    console.log(error.response, "Este es el error de crear usuario");
                    if(error.response.status == 400){
                        this.errores = error.response.data;
                    }
                })
            });
        }
    },
    computed:{
        validacionNombre:function(){
            if(this.usuario.first_name){
                return 'is-valid';
            }else{
                return '';
            }
        },
        validacionApellido:function(){
            if(this.usuario.last_name){
                return 'is-valid';
            }else{
                return '';
            }
        },
        validacionEmail:function(){
            if(this.errores.email){
                return "is-invalid";
            }
            if(this.usuario.email){
                return 'is-valid';
            }else{
                return '';
            }
        },
        validacionUsuario:function(){
            if(this.errores.username){
                return "is-invalid";
            }
            if(this.usuario.username){
                return 'is-valid';
            }else{
                return '';
            }
        },
        validacionPassword:function(){
            if(this.errores.password){
                return "is-invalid";
            }
            if(this.usuario.password){
                return 'is-valid';
            }else{
                return '';
            }
        },
    }
};
</script>