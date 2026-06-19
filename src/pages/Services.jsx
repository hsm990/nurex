import { services } from '@/constants'
import Card from '@/components/common/Card'

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <Card key={service.id} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
