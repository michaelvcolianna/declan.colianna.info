import Image from 'next/image'

const UpdateReason = () => {
  return (
    <>Added link to the YouTube video.</>
  )
}

const Link = ({ href, children }) => {
  return (
    <a href={href} className="text-indigo-700 underline text-wrap">{children}</a>
  )
}

const ExternalLink = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}

const ExternalText = () => {
  return (
    <>(All open external websites.)</>
  )
}

const DisclosureBlock = ({ anchor, summary, children }) => {
  return (
    <div className="w-full">
      <details id={anchor} className="border-2 border-dashed border-black p-4 [&_svg]:open:-rotate-45">
        <summary className="flex cursor-pointer list-none items-center gap-4">
          <div>
            <svg className="hidden lg:inline rotate-0 transform text-black transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>

          <div className="font-bold text-2xl">
            {summary}
          </div>
        </summary>

        <div className="p-4">
          {children}
        </div>
      </details>
    </div>
  )
}

const ContentBlock = ({ children }) => {
  return (
    <div className="text-3xl grid gap-6">{children}</div>
  )
}

const InfoList = ({ children }) => {
  return (
    <ul className="mt-8 flex flex-col lg:grid grid-cols-2 gap-8 text-3xl w-full">{children}</ul>
  )
}

export default function Home() {
  const updated = new Date().toLocaleString('en', { timeZone: 'America/New_York' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 gap-8 text-xl">
      <div className="font-bold w-full">
        <span className="block">In loving memory:</span>
        <span className="text-6xl">Declan Wilder Colianna</span>
      </div>

      <div className="w-full">
        <Image
          src="/decky.jpg"
          alt=""
          className="h-auto w-96"
          width={1024}
          height={1365}
          priority
        />
      </div>

      <ContentBlock>
        <p>Declan was born on August 3rd, 2023 at 8:47am US Eastern time.</p>
        <p>It took seven years of IVF for Declan's parents, Lani and Michael, to get him here. When he first showed up, he was one of two babies – twins – but unfortunately his sibling died in utero.</p>
        <p>On December 27th, 2023, at some point between 9:40pm and 11:00pm US Eastern time, Declan's heart stopped. Lani and Michael found him unresponsive, and despite the best efforts of the EMTs, they weren't able to resuscitate him.</p>
        <p>In his short time here, Declan touched so many lives – even those of people he didn't meet. So his family created this page in his memory.</p>
        <p>Below are some links with further information. <ExternalText /></p>

        <InfoList>
          <ExternalLink href="https://www.facebook.com/michaelcolianna/posts/pfbid0271Dx14KKCbyQnXFoT9dLjKpRSgVBmLWMCTJUEd1nrhXgbVHqEt341sVzbyjuCJwGl">Michael's Facebook Post</ExternalLink>
          <ExternalLink href="https://www.wsclancy.com/obituaries/Declan-Wilder-Colianna?obId=30269994">Obituary</ExternalLink>
        </InfoList>
      </ContentBlock>

      <DisclosureBlock anchor="sympathy-donations" summary="Sympathy & Donations">
        <ContentBlock>
          <p>Declan's family would like to extend their sincerest thanks for all the messages of sympathy they've received. There have been so many people who offered condolences, stories, and words of support and they are extremely grateful for it all. It would be a monumental task to respond to each message, but please know that they read each and every one.</p>
          <p>In lieu of flowers, a simple message of sympathy is fine. If you'd like to make a donation in Declan's name, his family has provided a list of organizations that mean a lot to them. <ExternalText /></p>
        </ContentBlock>

        <InfoList>
          <ExternalLink href="https://resolve.org/">Resolve (The National Infertility Association)</ExternalLink>
          <ExternalLink href="https://www.stjude.org/">St. Jude Children's Research Hospital</ExternalLink>
          <ExternalLink href="https://www.sandyhookpromise.org/">Sandy Hook Promise</ExternalLink>
          <ExternalLink href="https://www.hearingloss.org/">Hearing Loss Association of America</ExternalLink>
        </InfoList>
      </DisclosureBlock>

      <div className="pb-8 w-full lg:pt-8">
        <a href="mailto:declan@colianna.info" className="underline text-indigo-700 font-bold">Contact the family</a>
      </div>
    </main>
  )
}
