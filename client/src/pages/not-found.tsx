import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20">
      <div className="text-center space-y-6 p-8">
        <div className="inline-flex h-20 w-20 bg-destructive/10 rounded-full items-center justify-center text-destructive mb-4">
          <AlertCircle className="h-10 w-10" />
        </div>
        <h1 className="text-6xl font-display font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="mt-8 eco-gradient text-white rounded-full">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
