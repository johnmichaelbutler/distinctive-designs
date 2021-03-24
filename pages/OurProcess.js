import { NextSeo } from 'next-seo';
import Image from 'next/image';
import PageHero from '../components/page-hero';
export default function OurProcess() {
  return (
    <div className="pt-16">
      <NextSeo
        title="Our Process - Distinctive Drafting and Design"
        description="Process we take to build your dream home"
      />
      <PageHero imageName="process/process_main.jpg" pageName="Our Process" alt="Our Process Page" />
      <div className="contain mx-auto text-center">
        <p className="section-title">We work closely with you to build a new home you and your family will love, enjoy and be proud to own</p>
        <div>
          {/* Establishing */}
          <div className="grid grid-cols-2 md:h-96 my-10 md:my-0">
            <div className="col-span-2 md:col-span-1 md:order-1 relative h-96 md:h-auto">
              <Image
                src="/distinctive-design-images/process/meeting.jpg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:order-2">
              <h3 className="font-thin text-2xl my-4">Establishing a customer relationship</h3>
              <p className="mx-4 lg:mt-10 text-sm md:text-base"> Starting a project can be a fun and exciting process as well as daunting and stressful. Our team is here to help you throughout the process. We work closely with our clients and contractors to make sure the team produces the best homes possible. Our goal is to ensure you will feel pleased with the end results.</p>
            </div>
          </div>
          {/* Pre-design */}
          <div className="grid grid-cols-2 md:h-96 my-10 md:my-0">
            <div className="col-span-2 md:col-span-1 md:order-2 relative h-96 md:h-auto">
              <Image
                src="/distinctive-design-images/process/process_planning.jpg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:order-1">
              <h3 className="font-thin text-2xl my-4">Pre-design and feasibility study</h3>
              <p className="mx-4 lg:mt-10 text-sm lg:text-base">Upon our first meeting with you, we analyze your property and document any references or photos which you are looking to incorporate onto your design. We also discuss city ordinances and subdivision requirements if applicable to ensure that the project goes smoothly. Essentially, we will be determining the information we need to begin a design.</p>
            </div>
          </div>
          {/* Phase 1 */}
          <div className="grid grid-cols-2 md:h-96 my-10 md:my-0">
            <div className="col-span-2 md:col-span-1 md:order-1 relative h-96 md:h-auto">
              <Image
                src="/distinctive-design-images/process/site_planning.jpg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:order-2">
              <h3 className="font-thin text-2xl my-4">PHASE 1: SCHEMATIC DESIGN AND SITE PLANNING</h3>
              <p className=" mx-4 lg:mt-10 text-sm lg:text-base">In this phase we begin to planning out the distribution of the spaces such as bedrooms, bathrooms, recreational spaces, private space. We also plan the placement of your home onto the property to establish its location and determine what space you will have for any future development or additional entertaining spaces.</p>
            </div>
          </div>
          {/* Phase 2 */}
          <div className="grid grid-cols-2 md:h-96 my-10 md:my-0">
            <div className="col-span-2 md:col-span-1 md:order-2 relative h-96 md:h-auto">
              <Image
                src="/distinctive-design-images/process/process_design.jpg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:order-1">
              <h3 className="font-thin text-2xl my-4">PHASE 2: DESIGN DEVELOPMENT</h3>
              <p className="mx-4 lg:mt-10 text-sm lg:text-base">Upon this phase the exterior front facade will be designed. In this process the roof design starts to develop by determining plate heights and roof pitches. Also finishes and architectural aesthetics are featured to dress up the house design. We also see what windows and doors we will be placed throughout the house.</p>
            </div>
          </div>
          {/* Phase 3 */}
          <div className="grid grid-cols-2 md:h-96 my-10 md:my-0">
            <div className="col-span-2 md:col-span-1 md:order-1 relative h-96 md:h-auto">
              <Image
                src="/distinctive-design-images/process/process_construction.jpg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:order-2">
              <h3 className="font-thin text-2xl my-4">PHASE 3: CONSTRUCTION DOCUMENTS</h3>
              <p className="mx-4 lg:mt-10 text-sm lg:text-base">This is the final phase where our team begins to finalize the project details for construction permits. Covering electrical and lighting annotations, ceiling treatments, dimensional specifications; rooms, windows, doors, elevation details. We also schedule a review of the overall project so you may analyze the plan before final prints.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}