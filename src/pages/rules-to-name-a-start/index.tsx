import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Banner from "@/components/Banner";

import classNames from "classnames";

import { projectPath } from "@/utils/path";
import ContentCard from "@/components/ContentCard";
import StarCanvas from "@/components/Animations/StarCanvas";

export default function Outreach() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Rules to name a start", href: "" },
  ];
  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

  const astronomyIdeas = [
    {
      title: "🔭 Join Your Local Astronomy Community",
      description:
        "Astronomy clubs, planetariums, and observatories often hold stargazing events, talks, and activities that allow you to engage with the universe in a deeper way. You can meet people who share your passion, learn more about the stars, and even participate in real astronomical discoveries.",
    },
    {
      title: "🌌 Find “Your” Star and Make It Yours",
      description:
        "Even if stars already have official names, you can choose one that feels special to you. Use a sky map or an astronomy app to find a star that shines at the time and place of your important moment, and make it a tradition to observe it. Over time, that star will carry your story.",
    },
    {
      title: "📖 Discover the Stories Behind the Stars",
      description:
        "The stars have been named and celebrated by cultures all over the world. Instead of creating a new name, you can explore the rich traditions, myths, and scientific discoveries associated with the stars and constellations. Did you know that in Nāhuatl, Venus is called Tlahuizcalpantecuhtli, meaning 'Lord of the House of Dawn'? Learning how different cultures have connected with the night sky for centuries is a beautiful way to deepen your own relationship with it.",
    },
    {
      title: "🎨 Create Your Own Cosmic Tribute",
      description:
        "Stars have inspired poets, musicians, and artists for millennia. Why not create your own tribute? Write a poem, compose a song, paint a celestial scene, or even name a project, book, or artwork after the star that means something to you. Creativity allows us to leave a mark as lasting as the stars themselves.",
    },
    {
      title: "🌍 Support Astronomy and Space Exploration",
      description:
        "If you want to honour someone in a meaningful way, consider supporting initiatives that bring astronomy to schools, communities, and future generations. Many observatories, planetariums, and educational programmes rely on public support to inspire new generations of stargazers and scientists.",
    },
    {
      title: "🔎 Take Part in Citizen Science Projects",
      description:
        "You don’t have to be a professional astronomer to contribute to real discoveries. There are incredible projects where anyone can help identify exoplanets, track asteroids, or even classify galaxies. Some initiatives to explore include NASA’s Citizen Science Projects, Globe at Night, and Galaxy Zoo.",
    },
    {
      title: "🌠 Explore Astronomy Through Language",
      description:
        "Languages shape the way we see the universe. Some cultures describe celestial objects differently, highlighting aspects that Western astronomy often overlooks. You could explore how different languages talk about the sky or even learn an astronomical term from an originating culture.",
    },
    {
      title: "✨ Share the Sky With Others",
      description:
        "Perhaps the most meaningful way to celebrate a star is to share it. Host a stargazing night with friends and family, tell stories about the constellations, or simply take a moment to admire the vastness of the universe with someone you love. The night sky belongs to all of us.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${projectPath}/images/banner-rules-to-name-a-start.jpg`,
          caption: "Credits: Aperture Vintage",
        }}
        title="Naming Stars and Other Astronomical Objects"
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <div className="flex flex-col gap-24">
          <ContentCard
            title="Naming Stars and Other Astronomical Objects"
            text={
              <>
                <p>
                  The IAU frequently receives requests from people who want to
                  buy or name stars (or any other astronomical object). Some
                  commercial enterprises claim to offer such services for a fee.{" "}
                  <b>
                    However, such &quot;names&quot; have no formal or official
                    validity whatsoever.
                  </b>
                </p>

                <p>
                  Some bright stars have proper names, often with Arabic, Greek,
                  or Latin etymologies (e.g., Vega). However, the vast majority
                  of stars have alphanumeric designations consisting of an
                  acronym plus either an index number or celestial position
                  (e.g., HR 7001, 2MASS J18365633+3847012)
                </p>
              </>
            }
            type="secondary"
            twoColums
            wfull
          />
          <ContentCard
            title="Echoes of the Sky: Cultural Star Names and the IAU"
            text={
              <div className="space-y-4">
                <p>
                  The IAU supports a Working Group on Star Names (WGSN) under
                  Division C, which catalogs star names from various cultures
                  and maintains a list of approved and unique proper names
                  (e.g., Sirius, Proxima Centauri).
                </p>{" "}
                <p>
                  After investigating cultural star names worldwide, the WGSN
                  may adopt new official IAU star names for stars currently
                  lacking one, helping to preserve astronomical heritage while
                  providing unique names for the international community. You
                  can learn more on the IAU Star Names page.
                </p>
                <p>
                  Names for exoplanets and their host stars may also be approved
                  by the IAU Executive Committee Working Group on the Public
                  Naming of Planets and Planetary Satellites, as was done for
                  the NameExoWorlds contests in 2015, 2019, and 2022.
                </p>
              </div>
            }
            image={{
              imageUrl: `${projectPath}/images/about/astronomy-for-everywere.png`,
              caption: "",
            }}
            type="transparent"
          />
          <ContentCard
            title="The IAU's Position on Commercial Star-Naming Services"
            text={
              <>
                <p>
                  As an international scientific organization, the IAU
                  completely dissociates itself from the commercial practice of
                  &quot;selling&quot; fictitious star names, surface feature
                  names, or extraterrestrial real estate. The IAU does not
                  maintain a list of the competing businesses that claim to
                  offer such services. Those seeking to contact such enterprises
                  should refer to commercial directories in their respective
                  countries.
                </p>
                <p>
                  Some businesses have misleadingly suggested that the IAU is
                  associated with, recognizes, or approves their activities. The
                  IAU makes it clear that any such claims are false. If you come
                  across unauthorized use of the IAU&apos;s name, please report
                  it to us with supporting documentation.
                </p>
                <p>
                  Like many of the best things in life,{" "}
                  <b>the beauty of the night sky is not for sale</b>—it is free
                  for all to enjoy. While &quot;buying&quot; a star name may be
                  a symbolic gift or contribute to a good cause, it does not
                  grant legal ownership or recognition of the name. Despite
                  these clarifications, the IAU continues to receive star-naming
                  requests. If you have further questions, you can contact
                  public@oao.iau.org.
                </p>
              </>
            }
            image={{
              imageUrl: `${projectPath}/images/about/astronomy-for-everywere.png`,
              caption: "",
            }}
            type="primary"
          />
          <section className="rounded-lg shadow-md  p-8 min-h-screen bg-gradient-to-b from-[#0b0c2a] to-black text-white font-sans relative overflow-hidden">
            <StarCanvas
              numStars={1200}
              starColors={["#ffffff", "#e0e7ff", "#99b9eb"]}
            />
            <div
              className={`absolute inset-0 bg-[url("")] bg-cover opacity-10 pointer-events-none`}
            ></div>

            <section className="max-w-5xl mx-auto px-4 py-16 relative z-1">
              <h1 className="text-h2 font-bold w-full text-center mb-5 text-white drop-shadow-md">
                🌟 Ways to Connect With the Night Sky Without Naming a Star
              </h1>
              <p className="text-white xl:text-h5 text-p w-full mb-10">
                For many, the desire to name a star comes from a deep emotional
                place—a way to honour someone special, mark a significant
                moment, or create a lasting connection with the universe. While
                stars already have official names and designations, there are
                beautiful and meaningful ways to celebrate the cosmos and make
                it part of your story:
              </p>
              <div className="absolute top-0 w-full">
                <div className="comets comets-left comets-long"></div>
                <div className="comets comets-center comets-long"></div>
                <div className="comets comets-top comets-long"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {astronomyIdeas.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#141637] p-6 rounded-2xl shadow-lg border border-indigo-900 hover:shadow-indigo-500/30 transition-all duration-300"
                  >
                    <h2 className="text-xl font-semibold text-indigo-200 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-slate-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, [
        "home",
        "layout",
        "about",
      ])),
    },
  };
};
