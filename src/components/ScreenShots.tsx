import { ExternalLink, Mail, Key } from "lucide-react";

interface Screenshot {
  title: string;
  description: string;
  image: string;
}

const screenshots: Screenshot[] = [
  {
    title: "Dashboard Overview",
    description:
      "Get a comprehensive view of your gym's performance with real-time analytics and insights of Memberships of Member notify them if they have expiring status of memberships.",
    image: "/Dashboard.png",
  },
  {
    title: "Member Management",
    description:
      "Easily manage memberships, track attendance, and handle member profiles in one place.",
    image: "/Memberdetails.png",
  },
  {
    title: "Member Attendance",
    description:
      "Members attendance management at your ease with a lifetime history and session duration checks.",
    image: "/Attendence.png",
  },
  {
    title: "Member Engagement",
    description:
      "A place which cares for both gym and its family. Dashboard for members where they can track their growth, sessions, memberships and engagement in their Gym.",
    image: "/Memberprofile.png",
  },
];

const Screenshot = ({ title, description, image }: Screenshot) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const ScreenshotSection = () => (
  <section id="screenshots" className="py-12 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          See ActiveHub in Action
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Explore our powerful features designed to streamline your gym
          management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {screenshots.map((screenshot, index) => (
          <Screenshot key={index} {...screenshot} />
        ))}
      </div>

      <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">
              Experience ActiveHub Now
            </h3>
            <p className="text-purple-100">
              Try our platform with these demo credentials
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="space-y-1 mb-4 md:mb-0">
                <p className="text-sm font-medium text-gray-600">Website URL</p>
                <p className="text-sm text-gray-900 break-all">
                  https://activehub-fitracker.onrender.com/
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://activehub-fitracker.onrender.com/",
                    "_blank"
                  )
                }
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 ease-in-out"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Site
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                <Mail className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-sm text-gray-900">fit@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                <Key className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Password</p>
                  <p className="text-sm text-gray-900">120120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <p className="text-gray-600 mb-6 md:mb-8">
          Want to see more? Schedule a personalized demo with our team.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 md:px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          Schedule Demo
        </a>
      </div>
    </div>
  </section>
);

export default ScreenshotSection;
