<script>
  import '$lib/css/__MAIN__.scss';

  import archbtw from '$lib/assets/arch.png';
</script>

<header>
  <ul id="links">
    <li><a href="/">🏠 Home</a></li>
    <li><a href="/about">📝 About</a></li>
    <li><a href="/projects">🛠️ Projects</a></li>
    <li><a href="/contact">☎️ Contact</a></li>
  </ul>
</header>

<slot>
  <main />
</slot>

<footer>
  <p>Powered by Arch btw</p>
  <img src={archbtw} alt="i use Arch btw">
</footer>
