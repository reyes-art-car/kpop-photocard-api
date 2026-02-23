export interface Photocard {
  id: number;
  member_name: string;
  group_name: string;
  album_name: string;
  price: number;         
  release_date: string;  
  is_active: 0 | 1; 
  is_rare: 0 | 1;    
}