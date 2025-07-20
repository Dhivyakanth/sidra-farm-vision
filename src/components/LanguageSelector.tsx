import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'ta' as Language, name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'ml' as Language, name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'te' as Language, name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn' as Language, name: 'ಕನ್ನಡ', flag: '🇮🇳' }
];

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const hasSeenSelector = localStorage.getItem('hasSeenLanguageSelector');
    
    if (!savedLanguage && !hasSeenSelector) {
      setIsOpen(true);
    }
  }, []);

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    localStorage.setItem('hasSeenLanguageSelector', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {t('languageSelector.title')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('languageSelector.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-3 py-4">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="outline"
              className="flex items-center justify-center gap-3 p-6 h-auto hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-lg font-medium">{lang.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};