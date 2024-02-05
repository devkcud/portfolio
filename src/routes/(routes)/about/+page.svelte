<script>
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Purple from '$lib/components/Purple.svelte';
  import { HomeSolid } from 'flowbite-svelte-icons';
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>

<div>
  <article class="flex flex-col gap-4">
    <div>
      <h2 class="text-purple text-3xl">#me</h2>
      <p class="op-30 italic mb-4">My bad for not having a pic of me... I guess.</p>
    </div>

    <p class="line-height-relaxed">
      👋 Hey there! I'm <Purple>André Luis</Purple> (aka <Purple>devkcud</Purple>), a passionate
      <Purple>full-stack developer</Purple> from the tech scene in Brazil 🇧🇷. With a
      <Purple>sharp focus on back-end development</Purple>, I've enjoyed my moment tuning my
      problem-solving skills, occasionally creating more challenges than I solve —
      <Purple>keeping it fr lol</Purple> 🙃
    </p>

    <p class="line-height-relaxed">
      💼 I'm currently working as a <Purple>Hybrid Tech Lead + Full-stack developer</Purple> for a
      <Purple>university</Purple> called <Purple>Unicamp</Purple> 🔥, where I work with a team of very
      talented full-stack developers. 📊 I organize, guide and support in the software development process
      to the best of my ability. 🗞️ I also mantain the documentation clean and up-to-date 📝; we are
      currently developing a free-to-use <Purple>education platform</Purple> that host papers and articles.
      📚
    </p>
  </article>

  <Divider />

  <article class="mt-6 flex flex-col gap-4">
    <div>
      <h2 class="text-purple text-3xl">#hobby</h2>
      <p class="op-30 italic mb-4">&lt;name&gt; is felling grateful</p>
    </div>

    <p class="line-height-relaxed">
      🥷 Even though I do all of that, I'm still a person that likes chilling sometimes. 🎥 I'm into
      all kinda of stuff, like <Purple>games and movies/series</Purple>. I'm currently playing
      a lot of <Purple>LEGO games</Purple> 🎮
    </p>

    <p class="line-height-relaxed">
      🚀 I also really like writing and reading. 📖 I'm currently reading
      <Purple>Berserk</Purple> 🦇 by <Purple>Kentaro Miura</Purple>. 👻 I'm a big fan of the
      <Purple>fantasy</Purple> genre, being playing much
      <Purple>The Elder Scrolls V: Skyrim</Purple> ⚔️ and other RPG games.
    </p>

    <p class="line-height-relaxed">
      i'm also an <Purple>arch user</Purple> btw and a <Purple>big terminal guy</Purple> ❤️
    </p>

    <div>
      <p>
        <Purple>OS + Kernel:</Purple> Arch Linux + Linux TKG BORE (latest/modified)
      </p>
      <p>
        <Purple>WM + Compositor:</Purple> bspwm + picom (modified)
      </p>
      <p>
        <Purple>Shell:</Purple> zsh (custom)
      </p>
      <p>
        <Purple>Terminal:</Purple> Alacritty (modified)
      </p>
      <p>
        <Purple>Browser:</Purple> Ablaze Floorp (firefox fork) & Google Chrome
      </p>
      <p>
        <Purple>IDE:</Purple> Neovim (yeh turned into an IDE lmao)
      </p>
    </div>
  </article>

  <Divider />

  <article class="mt-6 flex flex-col gap-4">
    <div>
      <h2 class="text-purple text-3xl">#langs</h2>
      <p class="op-30 italic mb-4">O que eu tava falando mesmo? не знаю</p>
    </div>

    <p class="line-height-relaxed">
      🧐 I reeeeeeally like learning languages, and I'm currently learning
      <Purple>Russian</Purple> 🇷🇺, which is a <Purple>very beautiful</Purple>
      language. I don't know that much to speak to a native, but I'm learning. 😊
    </p>

    <p class="line-height-relaxed">
      Currently, I know <Purple>English</Purple> 🇺🇸, <Purple>Portuguese</Purple> 🇧🇷 and a bit of
      <Purple>Spanish</Purple> 🇪🇸. I plan on learning <Purple>French</Purple> 🇫🇷 and
      <Purple>Russian</Purple> 🇷🇺 before 2025.
    </p>
  </article>
</div>
