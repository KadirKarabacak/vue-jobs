interface Company {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}

export interface JobsType {
  id: number
  title: string
  type: string
  description: string
  location: string
  company: Company
  salary: string
}
