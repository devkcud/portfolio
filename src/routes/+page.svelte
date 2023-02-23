<script lang="ts">
  import "$lib/mainpage.ts";
  import "$lib/css/mainpage.scss";

  import rustico       from "$lib/assets/rust.png";
  import gamemakerico  from "$lib/assets/gamemaker.png";
  import unityico      from "$lib/assets/unity.png";
  import gitico        from "$lib/assets/git.png";
  import neovimico     from "$lib/assets/neovim.png";
  import githubico     from "$lib/assets/github.png";
  import pythonico     from "$lib/assets/python.png";
  import svelteico     from "$lib/assets/svelte.png";
  import sassico       from "$lib/assets/sass.png";
  import typescriptico from "$lib/assets/typescript.png";
  import avatar        from "$lib/assets/avatar.png";

  export const changeText = (e: Event, text: string) => (e.target as HTMLElement).textContent = text;
</script>

<main>
  <div id="who">
    <img id="my-avatar" src={avatar} alt="me">

    <div>
      <h1 id="presentation-header" on:mouseenter={(e) => changeText(e, "André Luis")} on:mouseleave={(e) => changeText(e, "devkcud")}>devkcud</h1>
      <p id="presentation-subtitle">Back-end & Game developer, open-source enjoyer</p>
    </div>
  </div>

  <ul id="tecnology-wheel">
    <li><img src={gitico} alt="git"></li>
    <li><img src={githubico} alt="github" style="filter: invert(1)"></li>
    <li><img src={neovimico} alt="neovim" style="width: 32px;"></li>
    <li>|</li>
    <li><img src={unityico} alt="unity" style="width: 38px;"></li>
    <li><img src={gamemakerico} alt="gamemaker"></li>
    <li>|</li>
    <li><img src={typescriptico} alt="typescript"></li>
    <li><img src={svelteico} alt="svelte"></li>
    <li><img src={sassico} alt="sass"></li>
    <li>|</li>
    <li><img src={rustico} alt="rust"></li>
    <li><img src={pythonico} alt="python" style="filter: brightness(85%);"></li>
  </ul>

  <ul id="quicklinks">
    <li><a href="/about">📝 About</a></li>
    <li><a href="/projects">🛠️ Projects</a></li>
    <li><a href="/contact">☎️ Contact</a></li>
  </ul>
</main>
