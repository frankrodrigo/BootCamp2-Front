<template>
	<div class="about">
		<!-- <h1>Este es el inicio</h1> -->
        <section class=" gradient-custom">
            <div class="container py-5 h-100">
                <div
                    class="row d-flex justify-content-center align-items-center h-100 "
                >
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            class="card bg-dark text-white"
                            style="border-radius: 1rem"
                        >
                            <div class="card-body p-5 text-center">
                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <h2 class="fw-bold mb-2 text-uppercase" @click="$router.push({ name: 'Inicio' })">
                                        Notas
                                    </h2>
                                    <p class="text-white-50 mb-5">
                                        Por favor ingrese su Usuario y Password!
                                    </p>

                                    <div class="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="typeEmailX"
                                            class="form-control form-control-lg"
                                        />
                                        <label class="form-label" for="typeEmailX"
                                            >Usuario</label
                                        >
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX"
                                            class="form-control form-control-lg"
                                        />
                                        <label
                                            class="form-label"
                                            for="typePasswordX"
                                            >Password</label
                                        >
                                    </div>

                                    <!--<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>-->

                                    <button
                                        class="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                    >
                                        Ingresar
                                    </button>
                                </div>

                                <div>
                                    <p class="mb-0">
                                        Para obtener una cuenta:
                                        <a href="#!" class="text-white-50 fw-bold"
                                            >Registrarse</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</div>
</template>
