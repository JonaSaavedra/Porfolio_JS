<script>
    const user = 'jonathan.saavedra.gonzalez'
    const domain = 'gmail.com'
</script>


<footer class="footer">
    <div class="footer-content">
      <p>© 2025 Jonathan Saavedra. Todos los derechos reservados.</p>
      <p>Desarrollado con <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a>.</p>
      <div class="social-links">
        <a href="https://github.com/JonaSaavedra" target="_blank" aria-label="GitHub">GitHub</a> |
        <a href="https://www.linkedin.com/in/jonathan-saavedra-gonz%C3%A1lez-307122177/" target="_blank" aria-label="LinkedIn">LinkedIn</a> |
        <a href="mailto:{user}@{domain}" aria-label="Correo">{user}@{domain}</a>
      </div>
    </div>
  </footer>
  
  <style>
    .footer {
      padding: 2rem;
      text-align: center;
      font-size: 0.9rem;
      color: #777;

    }
    .footer-content a {
      color: var(--primary-color);
      text-decoration: none;
      margin: 0 0.5rem;
    }
    .footer-content a:hover {
      text-decoration: underline;
    }
  </style>