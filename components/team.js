import Image from 'next/image'
export default function Team() {
  return (
    <div className="">
      <h1 className="body-subheading ">Our Team</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1  ">
          <div className="flex justify-around">
            <Image
              src="/distinctive-design-images/about_us/team/headshot.jpg"
              alt="Team member 1"
              className="rounded-full"
              width={120}
              height={120}
              />
              <div>
                <p className="font-bold">Team Member</p>
                <p className="mt-4">Job Role</p>
              </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1  ">
          <div className="flex justify-around">
            <Image
              src="/distinctive-design-images/about_us/team/headshot.jpg"
              alt="Team member 1"
              className="rounded-full"
              width={120}
              height={120}
              />
              <div>
                <p className="font-bold">Team Member</p>
                <p className="mt-4">Job Role</p>
              </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1  ">
          <div className="flex justify-around">
            <Image
              src="/distinctive-design-images/about_us/team/headshot.jpg"
              alt="Team member 1"
              className="rounded-full"
              width={120}
              height={120}
              />
              <div>
                <p className="font-bold">Team Member</p>
                <p className="mt-4">Job Role</p>
              </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1  ">
          <div className="flex justify-around">
            <Image
              src="/distinctive-design-images/about_us/team/headshot.jpg"
              alt="Team member 1"
              className="rounded-full"
              width={120}
              height={120}
              />
              <div>
                <p className="font-bold">Team Member</p>
                <p className="mt-4">Job Role</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}