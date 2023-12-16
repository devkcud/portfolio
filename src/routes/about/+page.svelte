<script>
  import Button from '$lib/components/Button.svelte';
  import { HomeSolid } from 'flowbite-svelte-icons';
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>

<div class="my-6 mx-2">
  <Button href="/" nobg icon={HomeSolid} style="display: block; margin: 0 auto;">Go home</Button>

  <div class="grid place-items-center all:mb-4">
    <div class="w-full max-w-[1000px]">
      <h1 class="text-purple">#me</h1>
      <p class="op-30 italic mb-8">My bad for not having a pic of me... I guess.</p>

      <p class="line-height-relaxed">
        👋 Hey there! I'm <span class="text-purple">André Luis</span> (aka
        <span class="text-purple">devkcud</span>), a passionate
        <span class="text-purple">full-stack developer</span> from the tech scene in Brazil 🇧🇷. With
        a
        <span class="text-purple">sharp focus on back-end development</span>, I've enjoyed my moment
        tuning my problem-solving skills, occasionally creating more challenges than I solve —
        <span class="italic">keeping it fr lol</span> 🙃
      </p>

      <p class="line-height-relaxed">
        💼 I'm currently working as a
        <span class="text-purple">Hybrid Tech Lead + Full-stack developer</span> at a
        <span class="text-purple">university</span> called <span class="text-purple">Unicamp</span>
        🔥, where I work with a team of very talented full-stack developers. 📊 I organize, guide and
        support in the software development process to the best of my ability. 🗞️ I also mantain the
        documentation clean and up-to-date 📝; we are currently developing a free-to-use
        <span class="text-purple">education platform</span> that host papers and articles. 📚
      </p>
    </div>
  </div>

  <div class="grid place-items-center all:mb-4">
    <div class="w-full max-w-[1000px]">
      <h1 class="text-purple">#hobby</h1>
      <p class="op-30 italic mb-8">&lt;name&gt; is felling grateful</p>

      <p class="line-height-relaxed">
        🥷 Even though I do all of that, I'm still a person that likes chilling sometimes. 🎥 I'm
        into all kinda of stuff, like <span class="text-purple">games and movies/series</span>. I'm
        currently playing <span class="text-purple">Ready or Not</span> 🎮.
      </p>

      <p class="line-height-relaxed">
        🚀 I also really like writing and reading. 📖 I'm currently reading
        <span class="text-purple">Berserk</span> 🦇 by
        <span class="text-purple">Kentaro Miura</span>. 👻 I'm a big fan of the
        <span class="text-purple">fantasy</span>
        genre, being playing much
        <span class="text-purple">The Elder Scrolls V: Skyrim</span> ⚔️ and other RPG games.
      </p>
    </div>
  </div>

  <div class="grid place-items-center all:mb-4">
    <div class="w-full max-w-[1000px]">
      <h1 class="text-purple">#langs</h1>
      <p class="op-30 italic mb-8">O que eu tava falando mesmo? не знаю</p>

      <p class="line-height-relaxed">
        🧐 I reeeeeeally like learning languages, and I'm currently learning
        <span class="text-purple">Russian</span> 🇷🇺, which is a
        <span class="text-purple">very beautiful</span> language. I don't know that much to speak to
        a native, but I'm learning. 😊
      </p>

      <p class="line-height-relaxed">
        Currently, I know <span class="text-purple">English</span> 🇺🇸,
        <span class="text-purple">Portuguese</span> 🇧🇷 and a bit of
        <span class="text-purple">Spanish</span>
        🇪🇸. I plan on learning
        <span class="italic">(getting to a level where I can talk to natives pretty okay)</span>
        <span class="text-purple">French</span> 🇫🇷 and
        <span class="text-purple">Russian</span> 🇷🇺 before <span class="text-purple">2025</span>.
      </p>
    </div>
  </div>
</div>
