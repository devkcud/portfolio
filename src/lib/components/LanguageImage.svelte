<script lang="ts">
  export let name: string;

  const iconsURL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/';

  function grabImage(lang: string): { src: string; alt: string } {
    let imageSource: string;
    let languageName: string = lang.split('-')[0].replaceAll(/^(custom\:)/g, '');

    lang = lang.toLowerCase();

    if (lang.includes('custom:')) {
      imageSource = `/langs/${lang.split(':')[1]}.svg`;

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

<img src={lang.src} alt={lang.alt} {...$$restProps} loading="lazy" />

<style>
  img {
    object-fit: contain;

    width: 64px;
    height: 64px;
  }
</style>
