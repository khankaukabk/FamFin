
"use client";

import * as React from "react";
import Image from "next/image";
import { X, Share } from "lucide-react";
import { Button } from "./ui/button";

export function AddToHomeScreenBanner() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isInStandaloneMode = ('standalone' in window.navigator) && ((window.navigator as any).standalone);

    if (isIOS && isSafari && !isInStandaloneMode) {
      const dismissed = sessionStorage.getItem('dismissed-a2hs-banner');
      if (!dismissed) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('dismissed-a2hs-banner', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-t border-border p-4 animate-in slide-in-from-bottom-full">
      <div className="max-w-md mx-auto flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FKhan%20Family.png?alt=media&token=703dc19f-7e98-4943-bc0d-31b035a65d1c"
            alt="Khan Family Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold font-headline text-base">Get the Khan Family Web App</h3>
          <p className="text-sm text-muted-foreground flex items-center flex-wrap">
            For the full experience, tap the menu (three dots), <Share className="inline-block h-4 w-4 mx-1"/> then 'Add to Home Screen'
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
