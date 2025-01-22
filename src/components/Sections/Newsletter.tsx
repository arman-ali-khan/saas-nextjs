import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Get Updates as soon
            <span className="block">as they happen.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Signup now for our newsletter and app launch.
          </p>

          <div className="max-w-xl mx-auto mt-8">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your Email Here" 
                className="h-12"
              />
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-8 h-12"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 