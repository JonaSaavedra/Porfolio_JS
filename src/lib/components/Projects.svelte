<script>
	const projects = [
		{
            href: 'https://jonasaavedra.github.io/Weather-APP/',
			src: '/Images/Projects/WeatherAPP.png',
			title: 'WEATHER APP',
			skills: ['HTML', 'CSS', 'JavaScript'],
			description:
				'WEATHER APP es una aplicación web en proyecto y construida con HTML, CSS y JavaScript. La aplicación consume datos de la API Rest de openweathermap.org <br /><br /> En la aplicación puedes consultar el tiempo de los lugares más significativos de Ames, aunque también puedes utilizar el buscador para elegir cualquier otra parte del mundo.'
		},
		{
            href: 'https://jonasaavedra.github.io/Windows-XP-/',
			src: '/Images/Projects/WindowsXP.png',
			title: 'EMULADOR WINDOWS XP',
			skills: ['HTML', 'CSS', 'JavaScript'],
			description:
				'¿Quién no ha tenido un día nostálgico? Pues ese fui yo el día que comencé el proyecto 😂 <br /><br /> El proyecto del emulador de Windows XP pretende crear una experiencia nostálgica, pudiendo usar las funciones básicas de Windows XP, así como consultar a través del navegador de Internet Explorer algunas de las páginas web más emblemáticas de la primera década de los 2000.'
		},
		{
            href: 'https://github.com/JonaSaavedra',
			src: '/Images/Projects/Scorpions.png',
			title: 'OTROS',
			skills: ['HTML', 'CSS', 'JavaScript'],
			description:
				'En el proceso de aprendizaje, he maquetado con HTML y CSS decenas de páginas web, además de incorporar pequeños scripts para ir afianzando mis conocimientos de JavaScript. <br /><br /> Visita mi perfil de GitHub para ver más proyectos 🫣'
		}
	];

    
</script>

<section class="projects">
	<div class="projects__title">
		<img src="Icons/gear.svg" alt="Mis Proyectos" />
		<h3>PROYECTOS</h3>
	</div>
	<div class="projects__display">
		{#each projects as item, index}
			<div class="projects__item {index === 1 ? 'reverse' : ''}">
				<a href="{item.href}" target="_blank"><img class="item__img" src={item.src} alt={item.title} height="200px"/></a>
				<div class="item__text">
					<h2 class="item__title">{item.title}</h2>
					<div class="item__skills">
						<p class="skill">{item.skills[0]}</p>
						<p class="skill">{item.skills[1]}</p>
						<p class="skill">{item.skills[2]}</p>
                        <a class="skill more" href="{item.href}" target="_blank">Más información</a>
					</div>
                    <p class="item__description">{@html item.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.projects {
		display: flex;
        flex-direction: column;
		justify-content: center;
        align-items: center;
        margin-bottom: 4rem;
	}
	.projects__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
        margin-bottom: 2rem;
	}
    .projects__display{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--tertiary-color);
        gap: 4rem;
        padding: 2rem;
        max-width: 1000px;
        border-radius: 12px;
    }
    .projects__item{
        display: flex;
        gap: 1rem;
    }
    .projects__item.reverse{
        flex-direction: row-reverse;
    }
    .item__text{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .item__skills{
        display: flex;
        gap: 1rem;
    }
    .skill{
        border: 1px solid var(--tertiary-color);
        padding: 4px;
        border-radius: 5px;
    }
    .item__title{
        color: var(--primary-color);
    }
    .item__description{
        max-width: 520px;
    }
    .item__img{
        transition: 0.5s;
    }
    .item__img:hover{
        filter: drop-shadow(0 0 2px var(--primary-color));
    }

    .more{
        background-color: var(--primary-color);
        border: none;
        text-decoration: none;
        color: black;
        transition: 0.5s;
    }

    .more:hover{
        background-color: white;
    }

    .more:active{
        scale: 0.95;
        transition: 0.1s;
    }

    @media (max-width: 880px){
        .projects__item{
            flex-direction: column;
            align-items: center;
        }
        .projects__item.reverse{
        flex-direction: column;
    }
    .item__text{
        align-items: center;
    }
    }

</style>


