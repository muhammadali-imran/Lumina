

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Formulator',
    expertise: 'Dermatology & Chemistry',
  },
  {
    name: 'Marco Rossini',
    role: 'Luxury Design Lead',
    expertise: 'Packaging & Experience',
  },
  {
    name: 'Amara Okonkwo',
    role: 'Research Director',
    expertise: 'Skincare Innovation',
  },
]

export default function Team() {
  return (
    <section>
      <h2 className="text-heading text-4xl font-bold text-center mb-12">Crafted by Experts</h2>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Our team brings together dermatologists, chemists, and beauty experts united by one mission:
        to create exceptional skincare.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <div key={i} className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted" />
            <h3 className="text-heading text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
            <p className="text-muted-foreground text-sm">{member.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  )
}