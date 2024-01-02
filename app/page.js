import Image from 'next/image'

const ExternalLink = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="justify-center flex flex-row gap-2 items-center underline">{children} <svg aria-label="Opens an external site" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
    </li>
  )
}

export default function Home() {
  const updated = new Date().toLocaleString('en', { timeZone: 'America/New_York' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 gap-8">
      <div className="text-sm italic -mt-8">Last updated: {updated} US Eastern time</div>

      <div className="font-bold text-6xl">Declan Wilder Colianna</div>

      <div className="z-1">
        <Image
          src="/decky.jpg"
          alt="Declan, looking pensively out of a window"
          className="h-auto w-96"
          width={1024}
          height={1365}
          priority
        />
      </div>

      <div className="text-3xl grid gap-6">
        <p>Declan was born on August 3rd, 2023 at 8:47am US Eastern time.</p>
        <p>It took seven years of IVF for Declan's parents, Lani and Michael, to get him here. When he first showed up, he was one of two babies – twins – but unfortunately his sibling died suddenly in utero.</p>
        <p>On December 27th, 2023, at some point between 9:40pm and 11:00pm US Eastern time, Declan's heart stopped. Lani and Michael found him unresponsive, and despite the best efforts of the EMTs, they weren't able to resuscitate him.</p>
        <p>In his short time here, Declan touched so many lives – even those of people he didn't meet. So his family created this page in his memory. Below are some links to further information.</p>
      </div>

      <ul className="flex flex-col lg:flex-row justify-center gap-8">
        <ExternalLink href="https://www.instagram.com/p/C1hI24CuCoU/?igsh=c29sMjUxMHY3ajI%3D">Lani's Instagram Post</ExternalLink>
        <ExternalLink href="https://www.facebook.com/michaelcolianna/posts/pfbid0271Dx14KKCbyQnXFoT9dLjKpRSgVBmLWMCTJUEd1nrhXgbVHqEt341sVzbyjuCJwGl">Michael's Facebook Post</ExternalLink>
        <ExternalLink href="https://www.gofundme.com/f/in-loving-memory-of-declan-wilder-colianna">GoFundMe Page</ExternalLink>
        {/* <ExternalLink href="#">Obituary</ExternalLink>
        <ExternalLink href="#">Live Stream</ExternalLink> */}
      </ul>
    </main>
  )
}
