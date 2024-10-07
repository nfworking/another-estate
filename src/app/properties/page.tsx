import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    price: '$250,000',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    price: '$450,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Cozy Studio near the Beach',
    price: '$150,000',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 500,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
]

export default function Properties() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id}>
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover mb-4 rounded-md  hover:scale-110%" />
              <p className="text-2xl font-bold mb-2">{property.price}</p>
              <p className="text-muted-foreground mb-2">{property.bedrooms} beds • {property.bathrooms} baths • {property.sqft} sqft</p>
            </CardContent>
            <CardFooter>
              <Link href={`/properties/${property.id}`}>
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}