import { useShop } from '../../context/ShopContext';

export default function Toast() {
  const { toast } = useShop();
  if (!toast) return null;
  return (
    <div className={`toast toast-${toast.type}`}>
      <i className={`bi ${toast.type === 'success' ? 'bi-check-circle' : 'bi-info-circle'}`} />
      <span>{toast.message}</span>
    </div>
  );
}
