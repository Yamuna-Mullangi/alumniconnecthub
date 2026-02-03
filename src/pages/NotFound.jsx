import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for seems to have wandered off campus.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2"
            onClick={() => window.location.href = '/'}
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
          >
            <Search className="w-5 h-5" />
            Search Alumni
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at <a href="mailto:alumni@vignanlara.edu" className="text-primary font-semibold hover:underline">alumni@vignanlara.edu</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
