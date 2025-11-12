
"use client";

import * as React from "react";
import { X, Share } from "lucide-react";
import { Button } from "./ui/button";

export function AddToHomeScreenBanner() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Determine if the banner should be shown
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);

    if (isIOS && isSafari && !isInStandaloneMode) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-t border-border p-4 animate-in slide-in-from-bottom-full">
      <div className="max-w-md mx-auto flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
            <Share className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold font-headline text-base">Get the Family Financials Web App</h3>
          <p className="text-sm text-muted-foreground">
            For the full experience, tap the Share icon then 'Add to Home Screen'.
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="flex-shrink-0"
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
