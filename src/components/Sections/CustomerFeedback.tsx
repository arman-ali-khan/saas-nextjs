import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import { Card, CardContent } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Williamson Johnson",
    role: "Daraz",
    image: "/avatars/williamson.jpg", // Add your image path
    content: "I was able to learn a large amount in a short amount of time. The practical nature helped me understand what we were trying to do, and how to achieve it."
  },
  {
    name: "Austin Hull",
    role: "eBay",
    image: "/avatars/austin.jpg", // Add your image path
    content: "I was able to learn a large amount in a short amount of time. The practical nature helped me understand what we were trying to do, and how to achieve it."
  },
  {
    name: "Albert Flores",
    role: "EG Commerce",
    image: "/avatars/albert.jpg", // Add your image path
    content: "I was able to learn a large amount in a short amount of time. The practical nature helped me understand what we were trying to do, and how to achieve it."
  }
]

export function CustomerFeedback() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Customer Feedback
          <span className="block h-1 w-12 bg-red-500 mt-2 mx-auto"></span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Credibly actualize interoperable technology without prospective processes. Conveniently mesh tally parallel task cross-media.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <Quote className="w-12 h-12 text-red-500 mb-6 opacity-20" />
                    <p className="text-muted-foreground mb-6">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  )
} 