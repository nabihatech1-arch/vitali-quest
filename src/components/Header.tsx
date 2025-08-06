import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block text-xl bg-gradient-to-r from-primary to-energy bg-clip-text text-transparent">
              VitalFit
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-primary" href="#workouts">
              Workouts
            </a>
            <a className="transition-colors hover:text-primary" href="#nutrition">
              Nutrition
            </a>
            <a className="transition-colors hover:text-primary" href="#wellness">
              Wellness
            </a>
            <a className="transition-colors hover:text-primary" href="#community">
              Community
            </a>
          </nav>
        </div>
        
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <a className="inline-flex items-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative md:hidden" href="/">
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-energy bg-clip-text text-transparent">
                VitalFit
              </span>
            </a>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="grid gap-2 p-4">
            <a className="flex w-full items-center py-2 text-lg font-medium" href="#workouts">
              Workouts
            </a>
            <a className="flex w-full items-center py-2 text-lg font-medium" href="#nutrition">
              Nutrition
            </a>
            <a className="flex w-full items-center py-2 text-lg font-medium" href="#wellness">
              Wellness
            </a>
            <a className="flex w-full items-center py-2 text-lg font-medium" href="#community">
              Community
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};