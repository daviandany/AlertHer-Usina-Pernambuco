import { Button } from "./ui/button";
import { Shield, MapPin, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import referenceImage from "../../assets/f95e5fe9b0457ec50bfeef6a301abb74de85cdc6.png";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fique segura.
              <br />
              <span className="text-purple-600">Sinta-se empoderada.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Sua companhia de segurança para mulheres,
              a qualquer hora, em qualquer lugar.
            </p>

            <Link to="/cadastro">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8 py-6 text-lg">
                Começar
              </Button>
            </Link>

            {/* Decorative floating icons */}
            <div className="absolute -top-10 -left-10 opacity-20">
              <div className="bg-purple-300 rounded-full p-4">
                <Shield className="w-12 h-12 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            {/* Floating icons around illustration */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              
              <div className="absolute top-1/4 -left-6 bg-white rounded-full p-3 shadow-lg animate-bounce delay-200">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              
              <div className="absolute bottom-1/4 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce delay-500">
                <Heart className="w-8 h-8 text-purple-500" />
              </div>

              <div className="absolute -bottom-6 left-1/4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-700">
                <CheckCircle className="w-8 h-8 text-purple-500" />
              </div>

              {/* Main illustration */}
              <div className="relative z-10">
                <img 
                  src={referenceImage} 
                  alt="SafeHer - Segurança feminina" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#F3F4F6"
            fillOpacity="0.5"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
