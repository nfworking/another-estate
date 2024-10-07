'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Bed, Bath, Home, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BorderBeam } from '@/components/ui/border-beam'

const property = {
  id: 1,
  title: 'Modern Apartment in Downtown',
  price: '$250,000',
  address: '123 Main St, Downtown, City 12345',
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1000,
  description: 'This modern apartment is located in the heart of downtown, offering easy access to restaurants, shops, and public transportation. With its sleek design and high-end finishes, this property is perfect for young professionals or couples looking for a stylish urban lifestyle.',
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1617817643768-8855fc457e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  ],
}

export default function PropertyDetail() {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
            <img
              src={property.images[currentImageIndex]}
              alt={`Property image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
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

        {/* Property Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent>
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
                  <Home className="h-5 w-5 mr-2" />
                  <span>{property.sqft} sqft</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">{property.price}</p>
              <Button className="w-full mb-2">Contact Agent</Button>
              <Button variant="outline" className="w-full">Schedule a Tour</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Location */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Location</CardTitle>
         
        </CardHeader>
      
        <CardContent>
       
          <div className=" aspect-w-16 aspect-h-30 mb-4">
          
          
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
  )
}