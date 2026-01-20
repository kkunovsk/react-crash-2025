export interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

// types.ts
export interface NewJob {
  title: string;
  description: string;
  type: string;
  location: string;
  salary: string;
  company: Company;
}

// Full Job type includes id
export interface Job extends NewJob {
  id: string | number;
}