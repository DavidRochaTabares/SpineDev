export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
}

export const certifications: Certification[] = [
  // Agregar certificaciones reales aquí
];
