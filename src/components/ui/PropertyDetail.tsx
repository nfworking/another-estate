'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Bed, Bath, Grid, MapPin, Car, Ruler } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Property {
  id: number
  title: string
  price: string
  address: string
  bedrooms: number
  bathrooms: number
  sqft: number
  yearBuilt: number
  parking: number
  type: string
  images: string[]
  description: string
  features: string[]
}

export default function page({ property }: { property: Property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-xl text-muted-foreground mb-6">{property.address}</p>
      
      {/* Image Carousel */}
      <div className="relative mb-8">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            src={property.images[currentImageIndex]}
            alt={`Property image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <p className="text-muted-foreground mb-6">{property.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Grid className="h-5 w-5 mr-2" />
                  <span>{property.sqft} sqft</span>
                </div>
                <div className="flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  <span>{property.parking} Parking spot</span>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 mr-2" />
                  <span>Built in {property.yearBuilt}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.type}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4">{property.price}</h2>
              <Button className="w-full mb-4">Contact Agent</Button>
              <Button variant="outline" className="w-full">Schedule a Tour</Button>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1842353155!2d-74.0062269!3d40.7101282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1621543231937!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-muted-foreground">{property.address}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}