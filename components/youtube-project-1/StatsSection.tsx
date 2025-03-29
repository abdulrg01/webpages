export default function StatsSection() {
  return (
    <section className="py-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+100</div>
            <p className="text-muted-foreground">AI Portraits Generated</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">98%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">24/7</div>
            <p className="text-muted-foreground">AI Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
