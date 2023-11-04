"use client";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="btn-primary btn" onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
}
