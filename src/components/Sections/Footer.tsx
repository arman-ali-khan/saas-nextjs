import { Button } from "../../components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

const footerLinks = {
  aboutUs: {
    title: "About Us",
    links: [
      { label: "Work Portfolio", href: "/portfolio" },
      { label: "About us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
    ]
  },
  services: {
    title: "Services",
    links: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "App Development", href: "/services/app-dev" },
      { label: "Game Development", href: "/services/game-dev" },
    ]
  }
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "Github" },
]

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center">
                <img 
                  src="https://nazmart.net/assets/landlord/uploads/media-uploader/image-91666006737.png" 
                  alt="Nazmart" 
                  className="h-8"
                />
              </div>
            </Link>
            <div className="space-y-2">
              <p className="text-muted-foreground">example@nazmart.com</p>
              <p className="text-muted-foreground">02083483945</p>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{footerLinks.aboutUs.title}</h3>
            <ul className="space-y-2">
              {footerLinks.aboutUs.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{footerLinks.services.title}</h3>
            <ul className="space-y-2">
              {footerLinks.services.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Address</h3>
            <p className="text-muted-foreground mb-6">
              Unit 4, The Courtyard, Lynton Road,<br />
              Crouch End N8 8SL
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label} 
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-16 pt-8 text-center text-muted-foreground">
          <p>© 2025 All right reserved By Nazmart</p>
        </div>
      </div>
    </footer>
  )
} 