import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { 
  BarChart3, 
  Lock, 
  Zap, 
  Clock, 
  Settings2, 
  Shield 
} from "lucide-react"

const features = [
  {
    title: "Analytics",
    description: "Get detailed insights and metrics about your business performance",
    icon: BarChart3,
  },
  {
    title: "Security",
    description: "Enterprise-grade security to protect your sensitive data",
    icon: Lock,
  },
  {
    title: "Fast Performance",
    description: "Lightning fast load times and responsive interactions",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description: "Round the clock customer support to help you succeed",
    icon: Clock,
  },
  {
    title: "Easy Integration",
    description: "Simple setup process with your existing workflow",
    icon: Settings2,
  },
  {
    title: "Data Protection",
    description: "Advanced encryption and data protection measures",
    icon: Shield,
  },
]

export function Features() {
  return (
    <section className="container px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Powerful Features for Your Business
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to scale your business operations and drive growth,
          all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="border-none shadow-md">
            <CardHeader>
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground">{feature.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 