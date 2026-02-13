import { Link } from "react-router-dom";
import { CheckCircle2, Home, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function OrderConfirmation() {
  // මෙතන උඹේ WhatsApp අංකය දාන්න (උදා: 94771234567)
  const whatsappNumber = "94771234567"; 
  const message = "Hi Green Plate! I just placed an order. Please confirm it.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container flex max-w-lg flex-col items-center justify-center py-20 text-center">
        <div className="mb-6 rounded-full bg-primary/10 p-4">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        
        <h1 className="mb-2 text-3xl font-bold">Order Successful!</h1>
        <p className="mb-8 text-muted-foreground font-medium">
          Thank you for your order. We have received it and will start preparing your delicious meal shortly.
        </p>

        <div className="grid w-full gap-4">
          <Button asChild className="h-12 rounded-full text-base font-semibold">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" /> Back to Home
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-12 rounded-full text-base font-semibold border-primary text-primary hover:bg-primary/5"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')}
          >
            <MessageSquare className="mr-2 h-5 w-5" /> Contact via WhatsApp
          </Button>
        </div>

        <div className="mt-12 rounded-2xl bg-muted p-6 text-sm text-left w-full">
          <h3 className="font-bold mb-2">What happens next?</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Our team will review your order details.</li>
            <li>If you chose Bank Transfer, please ensure the receipt is sent.</li>
            <li>Delivery will take approximately 30-45 minutes.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
