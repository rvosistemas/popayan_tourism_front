export interface DynamicEntity {
  id: string | number;
  name: string;
  [key: string]: any;
}
