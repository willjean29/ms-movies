export interface User {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: string;
  active: boolean;
  created_at: Date;
  updated_at?: Date;
  avatar?: string;
}
