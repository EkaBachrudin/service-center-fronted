export interface QueueInterface {
  id: number;
  counters_id: number;
  status_queues_id: number;
  note: string;
  created_at: string;
  updated_at: string;
}

export interface QueueDataResult {
  counter_name: string;
  counter_purpose: string;
  number_queue: number;
}
