<script>
  import ContentBlock from '$lib/components/ContentBlock.svelte';
  import DisclosureBlock from '$lib/components/DisclosureBlock.svelte';
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  import InfoList from '$lib/components/InfoList.svelte';
</script>

<svelte:head>
  <title>In Loving Memory: Declan W. Colianna</title>
  <meta
    name="description"
    content="Information about Declan for friends and family."
  />
</svelte:head>

<main
  class="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 gap-8 text-xl"
>
  <div class="font-bold w-full">
    <span class="block">In loving memory:</span>
    <span class="text-6xl">Declan Wilder Colianna</span>
  </div>

  <div class="w-full">
    <img
      src="/decky.jpg"
      alt="declan"
      class="h-auto w-96"
      width="1024"
      height="1365"
    />
  </div>

  <ContentBlock>
    <p>Declan was born on August 3rd, 2023 at 8:47am US Eastern time.</p>
    <p>
      It took seven years of IVF for Declan's parents, Lani and Michael, to get
      him here. When he first showed up, he was one of two babies – twins – but
      unfortunately his sibling died in utero.
    </p>
    <p>
      On December 27th, 2023, at some point between 9:40pm and 11:00pm US
      Eastern time, Declan's heart stopped. Lani and Michael found him
      unresponsive, and despite the best efforts of the EMTs, they weren't able
      to resuscitate him.
    </p>
    <p>
      In his short time here, Declan touched so many lives – even those of
      people he didn't meet. So his family created this page in his memory.
    </p>
  </ContentBlock>

  <DisclosureBlock anchor="sympathy-donations" summary="Sympathy & Donations">
    <ContentBlock>
      <p>
        Declan's family would like to extend their sincerest thanks for all the
        messages of sympathy they've received. There have been so many people
        who offered condolences, stories, and words of support and they are
        extremely grateful for it all. It would be a monumental task to respond
        to each message, but please know that they read each and every one.
      </p>
      <p>
        In lieu of flowers, a simple message of sympathy is fine. If you'd like
        to make a donation in Declan's name, his family has provided a list of
        organizations that mean a lot to them. (All open external websites.)
      </p>
    </ContentBlock>

    <InfoList>
      <ExternalLink href="https://resolve.org/"
        >Resolve (The National Infertility Association)</ExternalLink
      >
      <ExternalLink href="https://www.stjude.org/"
        >St. Jude Children's Research Hospital</ExternalLink
      >
      <ExternalLink href="https://www.sandyhookpromise.org/"
        >Sandy Hook Promise</ExternalLink
      >
      <ExternalLink href="https://www.hearingloss.org/"
        >Hearing Loss Association of America</ExternalLink
      >
      <ExternalLink href="https://www.magichouse.org/"
        >The Magic House (St. Louis Children's Museum)</ExternalLink
      >
    </InfoList>
  </DisclosureBlock>

  <div class="pb-8 w-full lg:pt-8">
    <a
      href="mailto:declan@colianna.info"
      class="underline text-indigo-700 font-bold">Contact the family</a
    >
  </div>
</main>
