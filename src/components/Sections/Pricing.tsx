'use client';
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"

type PricingPeriod = "monthly" | "yearly" | "lifetime"

const plans = [
  {
    name: "Ultimate Plan",
    badge: "Ultimate", 
    price: {
      monthly: 599,
      yearly: 5990,
      lifetime: 9999
    },
    features: [
      "Page 50",
      "Product 500",
      "Blog 100", 
      "Storage 500 MB"
    ],
    buttonText: {
      primary: "Buy Now",
      secondary: "Try Now"
    },
    badgeColor: "bg-gray-400 text-black"
  },
  {
    name: "Advance Plan",
    badge: "Business",
    price: {
      monthly: 350,
      yearly: 3500,
      lifetime: 5999
    },
    features: [
      "Page 20",
      "Product 20",
      "Blog 20",
      "Storage 100 MB"
    ],
    buttonText: {
      primary: "Buy Now",
      secondary: "Try Now"
    },
    badgeColor: "bg-black text-white"
  },
  {
    name: "Risk free",
    badge: "Free",
    price: {
      monthly: 0,
      yearly: 0,
      lifetime: 0
    },
    features: [
      "Page 20",
      "Product 20", 
      "Blog 20",
      "Storage 2000 MB"
    ],
    buttonText: {
      primary: "Get Now",
    },
    badgeColor: "bg-blue-100 text-blue-600"
  }
]

export function Pricing() {
  const [period, setPeriod] = useState<PricingPeriod>("monthly")

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Pricing Plan
          <span className="block h-1 w-12 bg-primary mt-2 mx-auto"></span>
        </h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center gap-4 mb-12">
        <Button 
          variant={period === "monthly" ? "default" : "secondary"}
          className="hover:scale-105 transition-transform"
          onClick={() => setPeriod("monthly")}
        >
          Monthly
        </Button>
        <Button 
          variant={period === "yearly" ? "default" : "secondary"}
          className="hover:scale-105 transition-transform"
          onClick={() => setPeriod("yearly")}
        >
          Yearly
        </Button>
        <Button 
          variant={period === "lifetime" ? "default" : "secondary"}
          className="hover:scale-105 transition-transform"
          onClick={() => setPeriod("lifetime")}
        >
          Lifetime
        </Button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="relative border-2 hover:border-primary transition-all duration-300">
            <CardHeader className="text-center">
              <span className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full ${plan.badgeColor}`}>
                {plan.badge}
              </span>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold">
                <span className="text-3xl">$</span>
                {plan.price[period]}
                <span className="text-base font-normal text-muted-foreground">
                  {period === "lifetime" ? "" : period === "yearly" ? "/yr" : "/mo"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
              <Button 
                variant="link" 
                className="text-primary hover:text-primary/80 p-0 h-auto hover:scale-105 transition-transform"
              >
                View All Features
              </Button>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button 
                variant="default"
                className="flex-1 hover:scale-105 transition-transform"
              >
                {plan.buttonText.primary}
              </Button>
              {plan.buttonText.secondary && (
                <Button 
                  variant="outline"
                  className="flex-1 hover:scale-105 transition-transform"
                >
                  {plan.buttonText.secondary}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}