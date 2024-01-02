import Image from 'next/image'

const ExternalLink = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="text-indigo-700 flex flex-row flex-wrap gap-2 items-center underline text-wrap">{children}</a>
    </li>
  )
}

const ContentBlock = ({ children }) => {
  return (
    <div className="text-3xl grid gap-6">{children}</div>
  )
}

const InfoList = ({ children }) => {
  return (
    <ul className="flex flex-col lg:flex-row gap-8 text-3xl w-full">{children}</ul>
  )
}

export default function Home() {
  const updated = new Date().toLocaleString('en', { timeZone: 'America/New_York' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 gap-8 text-xl">
      <div className="text-slate-700 w-full text-sm italic lg:-mt-8">Last updated: {updated} US Eastern time</div>

      <div className="font-bold">
        <span className="block">In loving memory:</span>
        <span className="text-6xl">Declan Wilder Colianna</span>
      </div>

      <div className="z-1">
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
        <p>On December 27th, 2023, at some point between 9:40pm and 11:00pm US Eastern time, Declan's heart stopped. Lani and Michael found him unresponsive, and despite the best efforts of the EMTs, they weren't able to resuscitate him.</p>
        <p>Declan was born on August 3rd, 2023 at 8:47am US Eastern time.</p>
        <p>It took seven years of IVF for Declan's parents, Lani and Michael, to get him here. When he first showed up, he was one of two babies – twins – but unfortunately his sibling died suddenly in utero.</p>
        <p>In his short time here, Declan touched so many lives – even those of people he didn't meet. So his family created this page in his memory.</p>
        <p>Below are some links to further information about what happened, along with details for family and friends traveling for the service. (All open external websites.)</p>
      </ContentBlock>

      <InfoList>
        <ExternalLink href="https://www.instagram.com/p/C1hI24CuCoU/?igsh=c29sMjUxMHY3ajI%3D">Lani's Instagram Post</ExternalLink>
        <ExternalLink href="https://www.facebook.com/michaelcolianna/posts/pfbid0271Dx14KKCbyQnXFoT9dLjKpRSgVBmLWMCTJUEd1nrhXgbVHqEt341sVzbyjuCJwGl">Michael's Facebook Post</ExternalLink>
        <ExternalLink href="https://www.gofundme.com/f/in-loving-memory-of-declan-wilder-colianna">GoFundMe Page</ExternalLink>
        <ExternalLink href="https://www.ihg.com/holidayinnexpress/hotels/us/en/branford/bfact/hoteldetail">Holiday Inn Express (Branford)</ExternalLink>
        <ExternalLink href="https://www.wyndhamhotels.com/baymont/branford-connecticut/baymont-inn-and-suites-branford-new-haven/overviewhoteldetail">Baymont by Wyndham (Branford)</ExternalLink>
        <ExternalLink href="https://www.omnihotels.com/hotels/new-haven-yale">The Omni Hotel (New Haven)</ExternalLink>
        <ExternalLink href="https://www.newhavenhotel.com/">New Haven Hotel (New Haven)</ExternalLink>
        <ExternalLink href="https://www.theblakenewhaven.com/">The Blake Hotel (New Haven)</ExternalLink>
        {/* <ExternalLink href="#">Obituary</ExternalLink>
        <ExternalLink href="#">Live Stream</ExternalLink> */}
      </InfoList>

      <ContentBlock>
        <p>Declan's family is sensitive to flowers, so in lieu, a simple message of sympathy is fine. If you'd like to make a donation in Declan's name, his family has provided a list of organizations that mean a lot to them. (All open external websites.)</p>
      </ContentBlock>

      <InfoList>
        <ExternalLink href="https://www.stjude.org/">St. Jude Children's Research Hospital</ExternalLink>
        <ExternalLink href="https://resolve.org/">Resolve (The National Infertility Association)</ExternalLink>
        <ExternalLink href="https://www.sandyhookpromise.org/">Sandy Hook Promise</ExternalLink>
        <ExternalLink href="https://www.hearingloss.org/">Hearing Loss Association of America</ExternalLink>
      </InfoList>

      <div className="pb-8 w-full">
        <a href="mailto:declan@colianna.info" className="underline text-indigo-700 font-bold">Contact the family</a>
      </div>
    </main>
  )
}
