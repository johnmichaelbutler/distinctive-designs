import { LocalBusinessJsonLd } from 'next-seo';


export default function Seo() {
  return (
    <>
      <LocalBusinessJsonLd
        type='Drafting Architecture Design Local Business'
        id="http://distinctive-designllc.com"
        name="Distinctive Drafting and Design LLC"
        description="Drafting and Design in South TExas"
        url="http://distinctive-designllc.com"
        telephone="+12105257985"
        address={{
          streetAddress: '8000 West I-10 Suite 600',
          addressLocality: 'San Antonio',
          addressRegion: 'TX',
          postalCode: '78230',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '29.513481967758327',
          longitude: '-98.55464396483997',
        }}
        images={[
          'https://images.squarespace-cdn.com/content/58527565cd0f68eedd3e7ff4/1579496833109-BA71EYSJ1O8RL9UO4J1A/D+Logo+with+text.png?format=1500w&content-type=image%2Fpng'
        ]}
        sameAs={[
          'https://www.distinctive-designsllc.com',
          'https://www.facebook.com/distinctivedraftingllc/',
          'https://instagram.com/distinctive.design.llc',
          'https://www.houzz.com/pro/distinctive7930',
          'https://www.houzz.com/professionals/building-designers-and-drafters/distinctive-drafting-and-design-llc-pfvwus-pf~939763927?'
        ]}
        openingHours={[
          {
            opens: '08:00',
            closes: '17:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
            validFrom: '2020-01-01',
            validThrough: '2050-12-31',
          },
        ]}
        rating={{
          ratingValue: '5',
          ratingCount: '30',
        }}
        review={[
          {
            author: 'Raul Resendez',
            datePublished: '2020-01-23',
            name: 'Sergio and his team are an amazing group of professionals',
            reviewBody:
              'Sergio and his team are an amazing group of professionals. They are up to date with the latest building trends and present great ideas. Whether it is for your residential or commercial project they are there to help you. They have handled over 20 projects for me.',
            reviewRating: {
              bestRating: '5',
              worstRating: '1',
              reviewAspect: 'Project',
              ratingValue: '5',
            },
          },
          {
            author: 'Linda Roberts',
            datePublished: '2020-02-13',
            name: 'Pleasure to Work With',
            reviewBody:
              'It was a pleasure working with Sergio. He brings great ideas and vision to the plans. Very easy to work with and accommodating.',
            reviewRating: {
              bestRating: '5',
              worstRating: '1',
              reviewAspect: 'Project',
              ratingValue: '5',
            },
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: '29.513481967758327',
              longitude: '-98.55464396483997',
            },
            geoRadius: '150000',
          },
          {
            geoMidpoint: {
              latitude: '26.17119956997308',
              longitude: '-97.70021817590026',
            },
            geoRadius: '150000',
          },
        ]}
      />
    </>
  )
}

