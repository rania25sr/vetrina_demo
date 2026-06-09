import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/fakeData";

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">Categories</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-xl mx-auto">
              Explore {categories.length} curated collections from Tunisia&apos;s finest local creators
            </p>
          </div>
        </div>
        <section className="py-16">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="group bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{cat.name}</h3>
                      <span className="text-sm text-[var(--text-muted)]">{cat.count} products</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
