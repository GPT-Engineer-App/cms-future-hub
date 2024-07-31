import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rocket, Edit, Zap, Globe } from "lucide-react"

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">The Future of Content Management is Here</h1>
          <p className="text-xl mb-8">Empower your team with our AI-driven, lightning-fast CMS platform.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our CMS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Edit className="h-12 w-12 text-blue-500" />}
              title="Intuitive Editing"
              description="Create and edit content with ease using our modern, user-friendly interface."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-yellow-500" />}
              title="Lightning Fast"
              description="Experience unparalleled speed with our optimized content delivery network."
            />
            <FeatureCard
              icon={<Globe className="h-12 w-12 text-green-500" />}
              title="Global Scalability"
              description="Scale your content effortlessly to reach audiences worldwide."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl mb-8">Join thousands of businesses already using our next-gen CMS.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button size="lg" variant="secondary">
              Get Early Access <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
