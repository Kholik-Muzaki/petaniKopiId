import { useEffect } from "react";
import * as Aos from "aos";
import "aos/dist/aos.css";
import image from "../image";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn Icon

const teamMembers = [
    {
        name: "Rina Putri",
        role: "CEO & Founder",
        photo: image.kholik,
        linkedin: "#",
    },
    {
        name: "Agus Santoso",
        role: "Chief Agronomist",
        photo: image.kholik,
        linkedin: "#",
    },
    {
        name: "Dewi Lestari",
        role: "Marketing Lead",
        photo: image.kholik,
        linkedin: "#",
    },
    {
        name: "Fajar Hidayat",
        role: "Tech & Product",
        photo: image.kholik,
        linkedin: "#",
    },
];

const OurTeam = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true });
    }, []);

    return (
        <section className="py-20 px-5 lg:px-20 bg-white" data-aos="fade-up">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    Meet Our <span className="text-green-500">Team</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Tim berdedikasi yang bekerja bersama untuk membawa perubahan nyata bagi petani kopi Indonesia.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center p-6"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <div className="relative w-28 h-28 mx-auto mb-4">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-28 h-28 object-cover rounded-full border-4 border-green-500 shadow-md"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-green-600 hover:text-green-800 transition text-sm font-medium"
                        >
                            <FaLinkedin className="text-lg" /> LinkedIn
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
