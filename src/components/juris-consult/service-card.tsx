
import type { BailMatterService } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  service: BailMatterService;
};

const getHrefForService = (id: string, basePath: string) => {
  if (basePath === 'family-law') {
    switch (id) {
      case 'divorce':
        return '/family-law/divorce';
      case 'child-custody':
        return '/family-law/child-custody';
      case 'maintenance':
        return '/family-law/maintenance';
      case 'domestic-violence':
        return '/family-law/domestic-violence';
      case 'adoption':
        return '/family-law/adoption';
      case 'guardianship':
        return '/family-law/guardianship';
      default:
        return '#';
    }
  }

  if (basePath === 'civil-law') {
    switch (id) {
      case 'civil-litigation':
        return '/civil-law/civil-litigation';
      case 'contract-disputes':
        return '/civil-law/contract-disputes';
      case 'inheritance-will-cases':
        return '/civil-law/inheritance-will-cases';
      case 'land-rental-disputes':
        return '/civil-law/land-rental-disputes';
      case 'money-recovery':
        return '/civil-law/money-recovery';
      case 'property-disputes':
        return '/civil-law/property-disputes';
      case 'real-estate-disputes':
        return '/civil-law/real-estate-disputes';
      case 'revenue-property':
        return '/civil-law/revenue-property';
      case 'sale-purchase-disputes':
        return '/civil-law/sale-purchase-disputes';
      default:
        return '#';
    }
  }

  if (basePath === 'consumer-law') {
    switch(id) {
      case 'consumer-complaints':
        return '/consumer-law/consumer-complaints';
      case 'labour-law':
        return '/consumer-law/labour-law';
      case 'product-liability':
        return '/consumer-law/product-liability';
      default:
        return '#';
    }
  }

  if (basePath === 'court-marriage') {
    switch(id) {
      case 'arya-samaj-marriage':
        return '/court-marriage/arya-samaj-marriage';
      case 'inter-caste-marriage':
        return '/court-marriage/inter-caste-marriage';
      case 'marriage-documentation':
        return '/court-marriage/marriage-documentation';
      case 'marriage-registration':
        return '/court-marriage/marriage-registration';
      case 'nikah-nama-marriage':
        return '/court-marriage/nikah-nama-marriage';
      case 'nri-marriage':
        return '/court-marriage/nri-marriage';
      case 'special-marriage-act':
        return '/court-marriage/special-marriage-act';
      case 'urgent-marriage':
        return '/court-marriage/urgent-marriage';
      default:
        return '#';
    }
  }

  if (basePath === 'criminal-law') {
    switch(id) {
      case 'arrest-investigation':
        return '/criminal-law/arrest-investigation';
      case 'assault-injury':
        return '/criminal-law/assault-injury';
      case 'fir-registration':
        return '/criminal-law/fir-registration';
      case 'honey-trap-cases':
        return '/criminal-law/honey-trap-cases';
      case 'kidnapping-abduction-cases':
        return '/criminal-law/kidnapping-abduction-cases';
      case 'murder-attempted-murder':
        return '/criminal-law/murder-attempted-murder';
      case 'pocso-cases':
        return '/criminal-law/pocso-cases';
      case 'rape-cases-376-ipc':
        return '/criminal-law/rape-cases-376-ipc';
      case 'section-420-ipc':
        return '/criminal-law/section-420-ipc';
      case 'sexual-harassment':
        return '/criminal-law/sexual-harassment';
      case 'theft-robbery':
        return '/criminal-law/theft-robbery';
      case 'torture-harassment':
        return '/criminal-law/torture-harassment';
      default:
        return '#';
    }
  }

  if (basePath === 'cyber-law') {
    switch(id) {
        case 'account-freeze-unfreeze':
            return '/cyber-law/account-freeze-unfreeze';
        case 'banking-finance-disputes':
            return '/cyber-law/banking-finance-disputes';
        case 'check-bounce':
            return '/cyber-law/check-bounce';
        case 'child-pornography':
            return '/cyber-law/child-pornography';
        case 'cyber-blackmailing':
            return '/cyber-law/cyber-blackmailing';
        case 'cyber-harassment':
            return '/cyber-law/cyber-harassment';
        case 'data-theft':
            return '/cyber-law/data-theft';
        case 'hacking-phishing':
            return '/cyber-law/hacking-phishing';
        case 'identity-theft':
            return '/cyber-law/identity-theft';
        case 'online-banking-upi-fraud':
            return '/cyber-law/online-banking-upi-fraud';
        case 'online-fraud':
            return '/cyber-law/online-fraud';
        case 'social-media-abuse':
            return '/cyber-law/social-media-abuse';
        default:
            return '#';
    }
  }
  
  switch (id) {
    case 'anticipatory-bail':
      return '/bail-matters/anticipatory-bail';
    case 'bail-cases':
      return '/bail-matters/bail-cases';
    case 'bail-under-criminal-law':
      return '/bail-matters/bail-under-criminal-law';
    case 'regular-bail':
      return '/bail-matters/regular-bail';
    default:
      return '#';
  }
};

export function ServiceCard({ service }: ServiceCardProps) {
  const isCivil = [
    'civil-litigation', 'contract-disputes', 
    'inheritance-will-cases', 'land-rental-disputes', 'money-recovery', 
    'property-disputes', 'real-estate-disputes', 'revenue-property', 
    'sale-purchase-disputes'
  ].includes(service.id);

  const isConsumer = [
    'consumer-complaints', 'labour-law', 'product-liability'
  ].includes(service.id);

  const isCourtMarriage = [
    'arya-samaj-marriage', 'inter-caste-marriage', 'marriage-documentation', 
    'marriage-registration', 'nikah-nama-marriage', 'nri-marriage', 
    'special-marriage-act', 'urgent-marriage'
  ].includes(service.id);

  const isCriminal = [
    'arrest-investigation', 'assault-injury', 'fir-registration', 
    'honey-trap-cases', 'kidnapping-abduction-cases', 
    'murder-attempted-murder', 'pocso-cases', 'rape-cases-376-ipc', 
    'section-420-ipc', 'sexual-harassment', 'theft-robbery', 'torture-harassment'
  ].includes(service.id);

  const isCyber = [
    'account-freeze-unfreeze', 'banking-finance-disputes', 'check-bounce', 
    'child-pornography', 'cyber-blackmailing', 'cyber-harassment', 
    'data-theft', 'hacking-phishing', 'identity-theft', 
    'online-banking-upi-fraud', 'online-fraud', 'social-media-abuse'
  ].includes(service.id);

  const isFamily = [
    'divorce', 'child-custody', 'maintenance', 
    'domestic-violence', 'adoption', 'guardianship'
  ].includes(service.id);
  
  let basePath = 'bail-matters';
  if (isCivil) {
    basePath = 'civil-law';
  } else if (isConsumer) {
    basePath = 'consumer-law';
  } else if (isCourtMarriage) {
    basePath = 'court-marriage';
  } else if (isCriminal) {
    basePath = 'criminal-law';
  } else if (isCyber) {
    basePath = 'cyber-law';
  } else if (isFamily) {
    basePath = 'family-law';
  }


  const href = getHrefForService(service.id, basePath);

  return (
    <Link href={href} className="group h-full">
      <Card className="flex flex-col h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group-hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-primary">{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
