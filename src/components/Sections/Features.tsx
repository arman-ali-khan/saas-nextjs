import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";

const Features = () => {
  const features = [
    {
      title: "Customizable Dashboards",
      description: "Easily configure your dashboards with drag-and-drop widgets to fit your workflow.",
    },
    {
      title: "Real-time Analytics",
      description: "Access up-to-the-minute insights into your data with our robust analytics tools.",
    },
    {
      title: "Secure and Reliable",
      description: "Your data is protected with enterprise-grade security measures and 99.9% uptime.",
    },
    {
      title: "Seamless Integrations",
      description: "Connect with popular tools like Slack, Zapier, and Salesforce effortlessly.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      {features.map((feature, index) => (
        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Features;
