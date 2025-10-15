import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-10">
      <section className="">
        <div className="container py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            La Brise Pâtisserie
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A delightful cake shop experience with realtime reviews and a dash of carnival charm.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg">Shop Cakes</Button>
            <Button size="lg" variant="secondary">See Reviews</Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-6 md:grid-cols-3 mt-10">
          {[1,2,3].map((i) => (
            <Card key={i} className="shadow-pb">
              <CardHeader>
                <CardTitle>Signature Cake #{i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fluffy layers, silky frosting, and a hint of blueberry drizzle.
                </p>
                <Button className="mt-4 w-full">Add to cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
