

export default function ContactInfo() {
  const items = [
    {
      title: 'Email',
      content: 'hello@lumina.com',
      icon: '✉️',
    },
    {
      title: 'Phone',
      content: '+1 (555) 123-4567',
      icon: '📞',
    },
    {
      title: 'Hours',
      content: 'Monday - Friday: 9AM - 6PM PST',
      icon: '🕐',
    },
    {
      title: 'Address',
      content: 'San Francisco, CA',
      icon: '📍',
    },
  ]

  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div key={i}>
          <p className="text-3xl mb-2">{item.icon}</p>
          <h3 className="text-heading font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.content}</p>
        </div>
      ))}
    </div>
  )
}