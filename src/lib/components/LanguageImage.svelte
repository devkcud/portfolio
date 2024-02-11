<script lang="ts">
  export let name: string;
  export let invert: boolean = false;
  export let width: number | undefined = 64;
  export let height: number | undefined = 64;

  const iconsURL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/';

  function grabImage(lang: string): { src: string; alt: string } {
    let imageSource: string;
    let languageName: string = lang.split('-')[0].replaceAll(/^(custom\:)/g, '').split('.')[0];

    lang = lang.toLowerCase();

    if (lang.includes('custom:')) {
      imageSource = `/langs/${lang.split(':')[1]}${!lang.includes('.') ? '.svg' : ''}`;

      return { src: imageSource, alt: languageName };
    }

    imageSource = `${iconsURL}${lang.split('-')[0]}/${lang}`;

    if (!lang.includes('-')) {
      imageSource += '-original';
    }

    imageSource += '.svg';

    return { src: imageSource, alt: languageName };
  }

  $: lang = grabImage(name);
</script>

<img
  src={lang.src}
  alt={lang.alt}
  {...$$restProps}
  {width}
  {height}
  style="filter: invert({invert ? 1 : 0})"
  loading="lazy"
/>

<style>
  img {
    object-fit: contain;
  }
</style>
