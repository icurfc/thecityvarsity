'use client'

// Import components to use here
import Header from '@/components/header'
import Title from '@/components/title'
import { AboutText, TextRow, TextRowItem } from '@/components/about'
import { Partners, PartnerItem, PartnerContact } from '@/components/partners'
import { Timeline, TimelineItem } from '@/components/timeline'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import Footer from '@/components/footer'
import { Map } from '@/components/map'
import { EDITION, MATCH_DATE, TICKET_LINK, LOCATION, PARTNERS, 
  AFTERPARTY_LOCATION, AFTERPARTY_TEXT, TITLE, CONTACT_EMAIL, 
  IMAGE_GALLERY, SHOW_FATSOMA_WIDGET} from '@/app/config'

import dynamic from 'next/dynamic'
const FatsomaWidget = dynamic(() => import('@/components/fatsomaWidget'), { ssr: false })

export default function Home() {

  // Construct PartnerItems using PARTNERS from app/config.tsx
  var partnerItems = []
  for (let i = 0; i < PARTNERS.length; i++) {
    const p = PARTNERS[i] as { name: string, description: string, image: string, buttonText: string, buttonLink: string, imageScale: number };
    partnerItems.push(PartnerItem(p.name, p.description, p.image, p.buttonText, p.buttonLink, p.imageScale, i % 2 != 0))
  }

  return (
    <main className={"flex flex-col h-screen items-center justify-start"}>
      {/* Use items from components/ folder to create page layout */}
      {Header(TITLE)}

      {Title(
        "THE BIGGEST RUGBY CLASH OF THE YEAR", 
        MATCH_DATE.replaceAll("/", "."),
        "BUY TICKETS", 
        TICKET_LINK
      )}

      {AboutText(
        "About The City Varsity", 
        "The City Varsity is an exhibition rugby match between Imperial College London and London School of Economics, held annually at the world-class facilities of London Welsh RFC. It is a completely student-led initiative and aims to remain an event created by students, for students. It has proven to be a great success in previous years with hundreds of spectators attending to witness both men’s and women’s game and the trophies - JP Morgan Shield and the Rees Rawlings Cup – being awarded."
      )}

      {/* Optional Fatsoma Widget. See fatsomaWidget.tsx for the widget URL */}
      {SHOW_FATSOMA_WIDGET && <FatsomaWidget />}
      
      {TextRow([
        TextRowItem(
          "Event History",
          "Started in 2017 to support Matt Hampson foundation, the event proved most popular among the students of both Imperial and LSE, attracting almost 1000 spectators every year."
        ),
        TextRowItem(
          "Matt Hampson Foundation",
          "Matt started his foundation in 2011 to help people suffering from serious sport injuries. All our profits go to Matt Hampson foundation.",
          "Find Out More",
          "https://www.matthampsonfoundation.org/"
        )
      ])}

      {Partners(partnerItems,
        PartnerContact(
          "Interested in becoming a sponsor of TCV " + EDITION + "?",
          "Contact Us", "mailto:" + CONTACT_EMAIL + "?subject=TCV%20Sponsorship")
      )}

      {Timeline([
        TimelineItem(
          "Gates Open",
          "Come early to save yourself a seat at the stands and watch our teams warm up as you enjoy a selection of delicious takeaway food on site",
          "11am",
          LOCATION.name,
          MATCH_DATE.replaceAll(".", "/")
        ),
        TimelineItem(
          "Women's Match",
          "Support your team as the women from Imperial and LSE clash on the grass of Old Deer Park",
          "1pm - 2:30pm",
          LOCATION.name
        ),
        TimelineItem(
          "Men's Match",
          "See who comes out on top in this year's edition of the biggest rivalry among London's unis",
          "3pm - 5pm",
          LOCATION.name
        ),
        TimelineItem(
          "Award Ceremony",
          "The crowning of the winners",
          "5:15pm",
          LOCATION.name
        ),
        /*
        TimelineItem(
          "Afterparty",
          AFTERPARTY_TEXT,
          "10pm - Late",
          AFTERPARTY_LOCATION
          )
        */
      ])}

      {Gallery(IMAGE_GALLERY)}

      {Contact(
        "Do you have questions or comments about the event? Do you need special accommodations? Send us a message, and we will get back to you as soon as we can.",
        LOCATION.address,
        "mailto:" + CONTACT_EMAIL + "?subject=Information%20Regarding%20TCV"
      )}

      {
        // Lat/Long location of pin on map
        Map(LOCATION.latlon[0], LOCATION.latlon[1])
      }

      {Footer(
        "The City Varsity " + EDITION
      )}

    </main>
  )
}
