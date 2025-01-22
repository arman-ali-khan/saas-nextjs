import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter } from "../../components/ui/card"
import { Eye } from "lucide-react"

const themes = [
  {
    name: "Light Theme",
    description: "Clean and minimal light design",
    preview: "/themes/light-preview.png", // Add your preview image path
    gradient: "from-blue-50 to-blue-100",
  },
  {
    name: "Dark Theme",
    description: "Modern dark mode experience",
    preview: "/themes/dark-preview.png", // Add your preview image path
    gradient: "from-gray-900 to-gray-800",
  },
  {
    name: "Forest Theme",
    description: "Nature-inspired green design",
    preview: "/themes/forest-preview.png", // Add your preview image path
    gradient: "from-green-50 to-green-100",
  },
]

export function Themes() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Beautiful Themes for Every Brand
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose from our carefully crafted themes or customize your own to match your brand identity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <Card 
            key={theme.name}
            className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className={`aspect-video w-full bg-gradient-to-br ${theme.gradient}`}>
                {/* Add your preview image here */}
                {/* <Image src={theme.preview} alt={theme.name} fill className="object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{theme.name}</h3>
                <p className="text-muted-foreground">{theme.description}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button 
                variant="outline" 
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview Theme
              </Button>
            </CardFooter>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>
        ))}
      </div>
    </section>
  )
} 