import { Card, CardContent } from "../../components/ui/card"
import { ShoppingCart, Store, ArrowRightLeft } from "lucide-react"

const features = [
  {
    title: "Start Online Business",
    description: "Start Online Business Free local dispatch for our gold and platinum members. Professional advise Dispatch for our gold and platinum members.",
    icon: ShoppingCart,
    iconBg: "bg-red-100",
    iconColor: "text-red-500"
  },
  {
    title: "Move your Business Online",
    description: "Start Online Business Free local dispatch for our gold and platinum members. Professional advise Dispatch for our gold and platinum members.",
    icon: Store,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500"
  },
  {
    title: "Switch to our Platform",
    description: "Start Online Business Free local dispatch for our gold and platinum members. Professional advise Dispatch for our gold and platinum members.",
    icon: ArrowRightLeft,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20">
       <div className="flex justify-center">
       <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose us?
              <span className="block mx-auto h-1 w-12 bg-red-500 mt-2"></span>
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
       </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Illustration */}
        <div className="relative hidden md:block">
          <div className="w-full h-[400px] relative">
            {/* You can replace this with your actual illustration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="https://nazmart.net/assets/landlord/uploads/media-uploader/choose1656830740.png" 
                alt="Why Choose Us Illustration" 
                className="w-full h-auto max-w-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          

          <div className="space-y-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none shadow-none">
                <CardContent className="flex items-start p-0 gap-4">
                  <div className={`p-3 rounded-lg ${feature.iconBg}`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 