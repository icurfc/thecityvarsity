/*
  IMPORTANT DATA TO UPDATE ANNUALLY
*/

export const EDITION = "IX"
export const TITLE = "The Fennex City Varsity " + EDITION
export const MATCH_DATE = "07/03/26"
export const TICKET_LINK = "https://www.fatsoma.com/e/fi6v5mn2/the-city-varsity-ix"
export const SHOW_FATSOMA_WIDGET = false
export const PROGRAMME_LINK = "https://drive.google.com/file/d/1KIjlmn9wjPeKc7CdxH3PfEuEtcPrc6iq/view?usp=sharing"

export const CONTACT_EMAIL = "rugby@ic.ac.uk"

export const AFTERPARTY_LOCATION = "" // "Tiger Tiger London"
export const AFTERPARTY_TEXT = "" // "Celebrate with the players at Tiger Tiger! - our coaches will take you directly from Rosslyn to the club"

// Note: If location changes, the about text in app/page.tsx should also be changed as it mentions Rosslyn Park
export const LOCATION = {
  name: "London Welsh Rugby Club",
  address: "Old Deer Park Sports Ground, 187 Kew Road, Richmond, London, England TW9 2AZ, United Kingdom",
  latlon: [51.4688, -0.2952]
}

/*
  To update the hero image, save the desktop image as public/thecityvarsity/cover.webp and the mobile image as public/thecityvarsity/cover-mobile.webp (or update the file path in tailwind.config.ts)
  Note: The images must also be saved as public/cover.webp and public/cover-mobile.webp
*/

// Display up to 4 images. Resizing images to 1280x853px .webp is recommended.
// Note: The images must be saved in public/thecityvarsity/gallery and public/gallery
export const IMAGE_GALLERY = [
    "/thecityvarsity/gallery/womens-team.webp",
    "/thecityvarsity/gallery/scrum.webp",
    "/thecityvarsity/gallery/mens-cheer.webp",
    "/thecityvarsity/gallery/postgame.webp"
]

// Note: The partners images must be saved in both public/partners and public/thecityvarsity/partners
export const PARTNERS = [
    {
        name: "Fennex", 
        description: "Fennex is an innovative technology company. A trailblazer with a determination to accelerate the digital transformation of the energy sector, the company was founded in 2016 by oil and gas professionals with more than 25 years’ global industry experience.",
        image: "/thecityvarsity/partners/fennex.png",
        buttonText: "Learn More",
        buttonLink: "https://fennex.net/",
        imageScale: 0.75
    },
    {
        name: "Kinscape", 
        description: "Your Truly Private Social Network.\nNo advertising, No third-party data sharing, No tracking.\nBuild private communities to connect with only the people you choose.\n\nYou are in control. We keep you safe.",
        image: "/thecityvarsity/partners/kinscape.webp", 
        buttonText: "Learn More",
        buttonLink: "https://www.kinscape.com/",
        imageScale: 1
    },
  /*
  {
    name: "64 Investments", 
    description: "64 Investments is a real estate corporate finance and wealth management firm. 64 Investments has been trading as a Swiss private foundation since 2008 and was incorporated in London in 2016. Having led over Euro 4 billion of transactions, the 64 Investments team uses its strong network of relationships built over 20 years to provide bespoke, highly specialist services to its clients and partners.",
    image: "/thecityvarsity/partners/64_Investments.png", 
    buttonText: "Learn More",
    buttonLink: "https://64invest.com/"
  }
  {
    name: "CORE POWER", 
    description: "CORE POWER has rapidly emerged as the global frontrunner in the development  of new nuclear technologies for the maritime sector, partnering with leading international power, engineering and nuclear innovation  companies to deliver durable zero-emission energy for floating industrial production and deep-sea shipping.",
    image: "/thecityvarsity/partners/core_power.webp", 
    buttonText: "Learn More",
    buttonLink: "https://corepower.energy/"
  }
  */
]

/*
  To update the Schedule of Events, edit app/page.tsx
*/
