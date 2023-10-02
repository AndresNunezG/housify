// ------------- TESTIMONIALS -------------

interface ITestimonial {
  name: string,
  occupation: string,
  testimonial: string,
  image: URL | string,
}

const TESTIMONIALS: ITestimonial[] = [
  {
    name: "Javier López",
    occupation: "Arquitecto",
    testimonial: "Aprecio el diseño y la estructura. Esta app me permitió encontrar una vivienda que se adapta a mis estándares.",
    image: new URL('@assets/images/testimonial_img_006.jpg', import.meta.url),
  },
  {
    name: "Claudia Martínez",
    occupation: "Médica",
    testimonial: "Con mi ocupada vida, necesitaba una app confiable. Encontré la casa perfecta cerca del hospital.",
    image: new URL('@assets/images/testimonial_img_005.jpg', import.meta.url),
  },
  {
    name: "María González",
    occupation: "Abogada",
    testimonial: "Soy meticulosa en mis decisiones y esta app facilitó tanto la búsqueda de mi nuevo hogar que la recomiendo a todos",
    image: new URL('@assets/images/testimonial_img_003.jpg', import.meta.url),
  },
  {
    name: "Luis Medina",
    occupation: "Chef",
    testimonial: "Estoy impresionado con la variedad de opciones en la app. Encontré una casa con una cocina de ensueño.",
    image: new URL('@assets/images/testimonial_img_004.jpg', import.meta.url),
  },
  {
    name: "Carlos Rodríguez",
    occupation: "Ingeniero de Software",
    testimonial: "Como ingeniero, valoro la eficiencia. Esta app me ayudó a encontrar un lugar perfecto para mi familia",
    image: new URL('@assets/images/testimonial_img_002.jpg', import.meta.url)
  },
  {
    name: "Ana Pérez",
    occupation: "Maestra de primaria",
    testimonial: "Estoy muy impresionada con la app. Encontré mi apartamento soñado en tiempo récord",
    image: new URL('@assets/images/testimonial_img_001.jpg', import.meta.url),
  },
]

const TESTIMONIALS_PER_SLIDE = 2

// ------------- PROPERTIES -------------

enum PropertyType {
  Apartment = "APARTMENTS",
  House = "HOUSE",
  Office = "OFFICE",
}

interface ILocation {
  city: string,
  country: string,
}

interface IProperty {
  price: number,
  rooms: number,
  baths: number,
  area: number,
  imageUrl: URL,
  parkingSlots: number,
  elevator: boolean,
  type: PropertyType,
  location: ILocation,
}

const PROPERTIES: IProperty[] = [
  {
    price: 80000,
    rooms: 1,
    baths: 1,
    area: 50,
    imageUrl: new URL('@assets/images/living-room_001.jpg', import.meta.url),
    parkingSlots: 1,
    elevator: true,
    type: PropertyType.Apartment,
    location: {
      city: "Ciudad de México",
      country: "México",
    },
  },
  {
    price: 350000,
    rooms: 3,
    baths: 2,
    area: 150,
    imageUrl: new URL('@assets/images/living-room_002.jpg', import.meta.url),
    parkingSlots: 2,
    elevator: false,
    type: PropertyType.House,
    location: {
      city: "São Paulo",
      country: "Brasil",
    },
  },
  {
    price: 150000,
    rooms: 2,
    baths: 2,
    area: 100,
    imageUrl: new URL('@assets/images/living-room_003.jpg', import.meta.url),
    parkingSlots: 1,
    elevator: true,
    type: PropertyType.Apartment,
    location: {
      city: "Buenos Aires",
      country: "Argentina",
    },
  }
]

export {
  type ITestimonial,
  type IProperty,
  TESTIMONIALS,
  TESTIMONIALS_PER_SLIDE,
  PROPERTIES,

}
