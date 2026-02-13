import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderConfirmation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <CheckCircle className="mx-auto h-20 w-20 text-primary" />
        <h1 className="mt-6 text-3xl font-bold">Order Placed!</h1>
        <p className="mt-2 text-muted-foreground">Your food is being prepared and will be delivered soon.</p>
        <Button asChild className="mt-8 rounded-full px-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
