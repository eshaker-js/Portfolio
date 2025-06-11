interface Certification {
  title: string
  imageUrl: string
  certUrl: string
  platform: string
  year: string
}

const certifications: Certification[] = [
  {
    title: "JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
    imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-2097a817-f888-434e-bf32-3f39bb7dc923.jpg?v=1744047817000",
    certUrl: "https://www.udemy.com/certificate/UC-2097a817-f888-434e-bf32-3f39bb7dc923/",
    platform: "Udemy",
    year: "2025",
  },
  {
    title: " GitHub Actions - The Complete Guide",
    imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-065edb17-f90f-44c4-bfc3-7ad8c90326ac.jpg?v=1745596401000",
    certUrl: "https://www.udemy.com/certificate/UC-065edb17-f90f-44c4-bfc3-7ad8c90326ac/",
    platform: "Udemy",
    year: "2025",
  }
  // Add more certs as needed
]

export default function CertificationsSection() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">My Badges of Honor</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white text-black rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-auto"
            />
            <div className="p-3">
              <p className="font-semibold text-sm mb-1">{cert.title}</p>
              <p className="text-xs text-gray-600">{cert.platform} · {cert.year}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
