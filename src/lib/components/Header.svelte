<!-- src/lib/components/Header.svelte -->

<script>
	import TypedJs from '@loscrackitos/svelte-typed-js';

	const user = 'jonathan.saavedra.gonzalez'
	const domain = 'gmail.com'
</script>

<div class="profile__img">
	<img class="img" src="/Images/Profile.JPG" alt="Jonathan Saavedra" height="256px" />
</div>

<div class="profile__title">
	<p class="profile__name">JONATHAN</p>
	<h1>JS</h1>
	<p class="profile__name">SAAVEDRA</p>
</div>

<div class="profile__socials">
	<a href="https://github.com/JonaSaavedra" target="_blank"><img src="/Icons/github.svg" alt="" /></a>
	<a href="https://www.linkedin.com/in/jonathan-saavedra-gonz%C3%A1lez-307122177/" target="_blank"
		><img src="/Icons/linkedin.svg" alt="" /></a
	>
	<a href="mailto:{user}@{domain}" target="_blank"><img src="/Icons/email.svg" alt="" /></a>
	<a href="/Document/CV Jonathan.pdf" download="CV Jonathan Saavedra"
		><img src="/Icons/cv.svg" alt="" width="33px" /></a
	>
</div>

<TypedJs strings={['Design', 'Development']} loop={true}>
	<p class="profile__p">Web <span class="typing"></span></p>
</TypedJs>

<style>
	@font-face {
		src: url('/fonts/Conduit ITC Bold.otf');
		font-family: Conduit;
	}
	.profile__img {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		.img {
			border-radius: 50%;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		}
	}
	.profile__title {
		display: flex;
		justify-content: center;
		align-items: end;
		gap: 1rem;
		h1 {
			font-family: Conduit;
			font-size: 128px;
			line-height: 0.7;
			color: var(--primary-color);
		}
		margin-bottom: 2rem;
	}
	.profile__socials {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 2rem;
		a {
			transition: 0.5s;
		}

		a:hover {
			scale: 1.1;
		}
	}

	.profile__name{
		font-size: 20px;
	}
	.profile__p{
		text-align: center;
		font-size: 20px;
		margin-bottom: 4rem;
	}

	.typing{
		color: var(--primary-color);
	}
</style>
