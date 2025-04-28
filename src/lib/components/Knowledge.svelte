<script>
	const knowledge = [
		{ src: '/Icons/HTML.svg', title: 'HTML' },
		{ src: '/Icons/CSS.svg', title: 'CSS' },
		{ src: '/Icons/JavaScript.svg', title: 'JavaScript' },
		{ src: '/Icons/Figma.svg', title: 'Figma' },
		{ src: '/Icons/Bootstrap.svg', title: 'Bootstrap' },
		{ src: '/Icons/sv.svg', title: 'Svelte' },
		{ src: '/Icons/mysql.svg', title: 'MySQL' },
		{ src: '/Icons/Java.svg', title: 'Java' }
	];
</script>

<section class="knowledge">
	<div class="knowledge__title">
		<img src="/Icons/book.svg" alt="Conocimientos" width="40px" />
		<h3>CONOCIMIENTOS</h3>
	</div>

	<div class="knowledge__grid">
		{#each knowledge as item}
			<div class="knowledge__item">
				<img src={item.src} alt={item.title} height="55px" />
				<p>{item.title}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.knowledge {
        margin: auto;
        margin-bottom: 4rem;
	}

	.knowledge__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
        margin-bottom: 2rem;
	}

	.knowledge__grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        place-items: center;
	}

	.knowledge__item {
		display: flex;
		flex-direction: column;
		align-items: center;
        justify-content: center;
		gap: 1rem;
		height: 130px;
		width: 110px;
        border: 1px solid var(--tertiary-color);
        border-radius: 12px;
        font-size: 12px;
        img{
            transition: 0.7s;
        }
        &:hover{
            background-color: var(--primary-color);
            color: black;
            font-weight: bold;
            img{
                scale: 1.2;
				filter: drop-shadow(0 0 2px black);
            }
        }
	}
	@media(max-width: 550px){
		.knowledge__grid {
		display: grid;
		grid-template-columns: repeat(3, 110px);
        gap: 1;
        place-items: center;
		justify-content: center;
	}

	.knowledge {
        margin: auto;
        margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	}
</style>
