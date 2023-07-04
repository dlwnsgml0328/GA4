export interface EventProps {
  action: Gtag.EventNames | string;
  category: string;
  label: string;
  value: string | number;
}
