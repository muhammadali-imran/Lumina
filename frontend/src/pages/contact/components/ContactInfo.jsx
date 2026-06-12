

export default function ContactInfo() {
  const items = [
    {
      title: 'Email',
      content: 'hello@lumina.com',
      icon: '✉️',
    },
    {
      title: 'Phone',
      content: '+92 123 456 7890',
      icon: '📞',
    },
    {
      title: 'Address',
      content: 'Pakistan',
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