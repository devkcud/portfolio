<script lang="ts">
  // TODO: Add Whatsapp and Instagram icons
  import {
    EnvelopeSolid,
    PhoneSolid,
    CopySolid,
    GithubSolid,
    LinkedinSolid,
    DiscordSolid,
    FireSolid,
    DownloadSolid
  } from 'flowbite-svelte-icons';
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Divider.svelte';

  const mails = ['andrescalisejr@gmail.com', 'patommmmm@proton.me'];

  const phone = '+55 (11) 94129-9500';
  const phoneFormatted = phone.replace(/\D/g, '');

  const socials = [
    { name: 'GitHub', href: 'https://github.com/devkcud', icon: GithubSolid },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/andre-albanese-junior',
      icon: LinkedinSolid,
      copytext: 'andre-albanese-junior'
    },
    { name: 'Discord', icon: DiscordSolid, copytext: 'patomcio' },
    {
      name: 'WhatsApp',
      href: `https://wa.me/${phoneFormatted}`,
      icon: PhoneSolid,
      copytext: phoneFormatted
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/devkcud',
      icon: FireSolid,
      copytext: 'devkcud'
    }
  ];

  function copy(toCopy: string) {
    if (toCopy === '') return;

    navigator.clipboard.writeText(toCopy);

    // TODO: Create a toast instead
    alert(`Copied to clipboard: ${toCopy}`);
  }
</script>

<section class="mt-8 flex flex-col gap-4">
  <h2>Email <span class="op-50 text-sm fw-400">all clickable</span></h2>

  <div class="flex gap-8 flex-wrap">
    {#each mails as mail}
      <div class="flex">
        <Button icon={EnvelopeSolid} href="mailto:{mail}">
          {mail}
        </Button>

        <Button icon={CopySolid} onclick={() => copy(mail)} />
      </div>
    {/each}
  </div>

  <Divider />

  <h2>Phone <span class="op-50 text-sm fw-400">only call me if it's necessary, please 🥺</span></h2>

  <div class="flex items-center">
    <Button icon={PhoneSolid}>{phone}</Button>

    <Button icon={CopySolid} onclick={() => copy(phoneFormatted)} />
  </div>

  <Divider />

  <h2>Social <span class="op-50 text-sm fw-400">talk to me with no delay</span></h2>

  <div class="flex justify-center gap-8 flex-wrap">
    {#each socials as { name, href, icon, copytext }}
      <div class="flex">
        {#if href}
          <Button {icon} {href}>
            {name}
          </Button>
        {:else}
          <Button {icon}>
            {name}
          </Button>
        {/if}

        <Button icon={CopySolid} onclick={() => copy(copytext || href || '')} />
      </div>
    {/each}
  </div>

  <Divider />

  <div>
    <Button icon={DownloadSolid} href="/cvs/andre-albanese.pt.pdf">PDF: Currículo (Português)</Button>
    <Button icon={DownloadSolid} href="/cvs/andre-albanese.en.pdf">PDF: Resume (English)</Button>
    <Button disabled icon={DownloadSolid}>PDF: Резюме (Русский)</Button>
  </div>
</section>
