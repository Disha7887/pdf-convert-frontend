import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export const Features: React.FC = () => {
  const [, setLocation] = useLocation();

  const features = [
    {
      title: "Lightning Fast Processing",
      description: "Convert and process documents in seconds, not minutes"
    },
    {
      title: "Enterprise-Grade Security", 
      description: "Your documents are encrypted and processed securely"
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly across all devices and operating systems"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Professional PDF Tools Built for Modern Workflows
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From converting documents to merging files, our comprehensive suite 
              of PDF tools handles every aspect of your document workflow with 
              precision and speed.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => setLocation('/learn-more')}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn More...
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg font-semibold"
              onClick={() => setLocation('/upload-demo')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
