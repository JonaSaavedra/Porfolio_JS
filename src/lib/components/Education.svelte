<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = '/rellax.min.js';
		script.onload = () => {
			new window.Rellax('.rellax');
		};
		document.body.appendChild(script);
	});
</script>

<section class="education">
	<div class="education__title">
		<img src="/Icons/bachelor.svg" alt="" width="40px" height="40px" />
		<h3>FORMACIÓN</h3>
	</div>
	<div class="overflow">
		<div class="education__line">
			<img class="line" src="/Icons/line.svg" alt="" height="600px" />

			<div class="education1 rellax" data-rellax-speed="4" data-rellax-percentage="0.7">
				<div class="education__data ed1">
					<h3 class="data__title">CONFECCIÓN Y PUBLICACIÓN DE PÁGINAS WEB</h3>
					<p class="data__type">(Certificado Profesional)</p>
					<p class="data__date">Enero 2025 - Actualmente</p>
				</div>
				<img class="ellipse ellipse1" src="/Icons/ellipse.svg" width="16px" alt="" />
			</div>

			<div class="education2 rellax" data-rellax-speed="4" data-rellax-percentage="1.2">
				<div class="education__data ed2">
					<h3 class="data__title">DESARROLLO DE APLICACIONES WEB</h3>
					<p class="data__type">(Grado Superior)</p>
					<p class="data__date">Sept. 2024 - Actualmente</p>
				</div>
				<img class="ellipse ellipse2" src="/Icons/ellipse.svg" alt="" />
			</div>

			<div class="education3 rellax" data-rellax-speed="4" data-rellax-percentage="1.7">
				<div class="education__data ed3">
					<h3 class="data__title">TRABAJO SOCIAL</h3>
					<p class="data__type">(Grado Universitario)</p>
					<p class="data__date">2015 - 2019</p>
				</div>
				<img
					class="ellipse ellipse3 "
					src="/Icons/ellipse.svg"
					alt=""

				/>
			</div>

		</div>
	</div>
</section>

<style>
	.overflow {
		overflow: hidden;
	}
	.education {
		position: relative;
		margin-bottom: 4rem;
	}
	.education__title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}
	.education__line {
		position: relative;
		margin: auto;
		width: 400px;
		height: 450px;
	}
	.line {
		position: absolute;
		left: 49.8%;
	}
	.ellipse {
		position: absolute;
		left: 48%;
		transform: translate(-50%);
	}

	.education__data {
		position: absolute;
		white-space: nowrap;
	}
	.data__title {
		color: var(--primary-color);
	}
	.data__date {
		color: var(--tertiary-color);
	}

	.ed1 {
		left: -55%;
		text-align: end;
	}

	.ed2 {
		left: 55%;
	}

	.ed3 {
		left: 10%;
		text-align: end;
	}

	.ellipse1 {
			left: 50%;
		}
		.ellipse2 {
			left: 50%;
		}
		.ellipse3 {
			left: 50%;
		}

	@media (max-width: 880px) {
		.education__data {
			white-space: pre-wrap;
		}
		.line {
			position: absolute;
			left: 10%;
		}
		.ed1 {
			text-align: start;
			left: 15%;
		}
		.ed2 {
			text-align: start;
			left: 15%;
		}
		.ed3 {
			text-align: start;
			left: 15%;
		}
		.ellipse1 {
			left: 10.4%;
		}
		.ellipse2 {
			left: 10.4%;
		}
		.ellipse3 {
			left: 10.4%;
		}
	}
</style>
