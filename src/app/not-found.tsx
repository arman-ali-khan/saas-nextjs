import { Button } from "../components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-8 px-4">
        {/* 404 Image */}
        <div className="mb-8">
          <img 
            src="https://nazmart.net/assets/landlord/uploads/media-uploader/404-error1656917567.png" 
            alt="404 Illustration" 
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-lg mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">
            Oops! Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Link href="/">
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-8 h-12 text-lg"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 