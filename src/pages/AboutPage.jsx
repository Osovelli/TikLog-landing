import React from 'react';
import { Check } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { DownloadSection } from '@/components/_AboutComponent/DownloadSection';
import SEO from '@/components/SEO';

export const AboutPage = () => {
  const coreValues = [
    "Core value 1",
    "Core value 2",
    "Core value 3",
    "Core value 4"
  ];

  return (
    <Layout>
      <SEO
        title="About | Tiklog.ng"
        description="Learn about Tiklog's amazing services and products."
        name="Tiklog.ng"
        type="website"
      />
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-24">
        <p className="text-indigo-600 font-medium mb-4">Nice to meet you</p>
        <div className='flex flex-col md:flex-row  justify-center'>
          <h1 className="text-5xl font-bold mb-8 max-w-2xl">
            Our mission is to <span className="text-indigo-600">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit.
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis turpis eu dui ultricies, vel interdum nunc varius. 
            Sed ut purus et odio vehicula vestibulum sit amet quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut convallis turpis eu dui ultricies, vel interdum nunc varius. Sed ut purus et odio vehicula
          </p>
        </div>
        </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Core Values</h2>
          <p className="text-gray-600 mb-8">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
          <ul className="space-y-4">
            {coreValues.map((value, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-600">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-gray-200 rounded-2xl w-72 md:h-82 p-6'>
        <img src='/IPhone 13 Pro Max.png' className="object-cover " /> {/* Placeholder for image */}
        </div>
      </div>

      {/* Brief History Section */}
      <div>
        <p className="text-indigo-600 font-medium mb-4">Brief History</p>
        <h2 className="text-4xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
        <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-600">
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
            </p>
            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </p>
            <p>
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-gray-600">
              <p className="mb-8">
                Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nisi sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
              </ul>
            </div>
            <p className="text-gray-600">
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
            </p>
          </div>
        </div>
      </div>

      {/*Download Section */}
      <DownloadSection />
    </div>
    </Layout>
  );
}