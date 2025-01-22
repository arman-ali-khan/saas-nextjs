import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

const faqItems = [
  {
    question: "What is the membership fee for joining?",
    answer: "This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow."
  },
  {
    question: "What is the membership fee for joining?",
    answer: "Our membership fees vary based on the plan you choose. We offer flexible pricing options including monthly, yearly, and lifetime subscriptions. Check our pricing section for detailed information about each plan's features and benefits."
  },
  {
    question: "What is the membership fee for joining?",
    answer: "We offer different membership tiers to suit various needs. Our plans start from a basic free tier and go up to premium subscriptions with additional features. You can view all pricing details in our pricing section."
  }
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Question
            <span className="block h-1 w-12 bg-red-500 mt-2 mx-auto"></span>
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Illustration */}
          <div className="hidden lg:block">
            <img 
              src="https://nazmart.net/assets/landlord/uploads/media-uploader/question1656917313.png" 
              alt="FAQ Illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Right side - FAQ Accordion */}
          <div>
            <Accordion 
              type="single" 
              collapsible 
              defaultValue="item-0"
              className="w-full"
            >
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
} 