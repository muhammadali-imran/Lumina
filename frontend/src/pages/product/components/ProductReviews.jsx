export default function ProductReviews() {
  return (
    <section className="mb-20 border-t border-border pt-12">
      <h2 className="text-heading text-3xl font-bold mb-8">Customer Reviews</h2>
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 bg-background rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-foreground">Customer {i + 1}</h4>
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">Verified Purchase</span>
            </div>
            <p className="text-muted-foreground">
              This product exceeded my expectations. High-quality ingredients, noticeable results,
              and the luxury packaging makes it feel special. Highly recommend!
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}