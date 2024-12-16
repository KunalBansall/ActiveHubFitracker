
interface Screenshot {
  title: string;
  description: string;
  image: string;
}

const screenshots: Screenshot[] = [
  {
    title: "Dashboard Overview",
    description:
      "Get a comprehensive view of your gym's performance with real-time analytics and insights of Memberships of Member notify them if they have expiring status of memberships .",
    image: "/Dashboard.png", // Correct reference to the public folder
  },
  {
    title: "Member Management",
    description:
      "Easily manage memberships, track attendance, and handle member profiles in one place.",
    image: "/Memberdetails.png",
  },
  {
    title: "Member Attendence",
    description:
      "Members attendence management at your ease with a lifetime history and session suration checks ",
    image: "/Attendence.png",
  },
  {
    title: "Member Engagement",
    description:
      "A place which cares for both gym and its family . Dashboard for member as well where they can track their growth , sessions , memberships and engagement in ther Gym",
    image: "/Memberprofile.png",
  },
];

const Screenshot = ({ title, description, image }: Screenshot) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <img
        src={image} // This now uses the image passed from the screenshots array
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const ScreenshotSection = () => (
  <section id="screenshots" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">See ActiveHub in Action</h2>
        <p className="text-xl text-gray-600">
          Explore our powerful features designed to streamline your gym
          management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {screenshots.map((screenshot, index) => (
          <Screenshot key={index} {...screenshot} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-8">
          Want to see more? Schedule a personalized demo with our team.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Schedule Demo
        </a>
      </div>
    </div>
  </section>
);

export default ScreenshotSection;
