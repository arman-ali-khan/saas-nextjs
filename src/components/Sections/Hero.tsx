'use client'

import Image from "next/image";
import { Button } from "../../components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 pt-10 sm:pt-16 lg:pt-20">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform your</span>
                  <span className="block text-blue-600">workflow today</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg">
                  Streamline your business operations, boost productivity, and drive growth with our all-in-one platform. Join thousands of satisfied teams.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button size="lg" asChild>
                    <a href="/register">Get Started</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#demo">Watch Demo</a>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      >
                        <Image width={32} height={32} src={`https://dokans.online/uploads/1/2021/03/1615449786.svg`}
                          alt={`User ${i}`}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Trusted by 10,000+ teams worldwide
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full overflow-hidden rounded-lg">
                    <Image width={600} height={600}
                      src="https://xgenious.com/wp-content/uploads/2025/01/domainSupport.webp"
                      alt="Product screenshot"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;