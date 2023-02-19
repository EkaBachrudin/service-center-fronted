export interface CounterInterface {
  id: number;
  name: string;
  purpose: string;
  status_counters_id: number;
  created_at: string;
  updated_at: string;
}

export interface CounterInterfacePublic {
  id: number;
  name: string;
  purpose: string;
  status_counters_id: number;
  created_at: string;
  updated_at: string;
  total_today: number;
}
