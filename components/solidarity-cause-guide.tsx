import { HandHeart, Info } from "lucide-react";
import { causeDesignationNote, solidarityCauses } from "@/data/solidarity-causes";

export function SolidarityCauseGuide() {
  return (
    <section aria-labelledby="causas-solidarias-title" className="rounded-[2rem] border border-white/10 bg-white/[.055] p-6 sm:p-10">
      <p className="eyebrow text-[#F2C36F]">En el futuro proceso de pedido</p>
      <h3 id="causas-solidarias-title" className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">Elige la causa que quieres apoyar</h3>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">Cuando habilitemos los pedidos o compras de artículos solidarios, podrás indicar qué causa prefieres que apoyen los recursos generados por tu compra.</p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-300">Por ahora, estas categorías son informativas: no se pueden seleccionar y no se registra ni se aplica ninguna asignación. La elección se realizará dentro del futuro proceso de pedido o compra.</p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Categorías previstas para la futura elección de causa">
        {solidarityCauses.map((cause) => (
          <li key={cause} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#211A16]/50 p-5 text-sm font-medium leading-6 text-stone-100">
            <HandHeart className="mt-0.5 size-5 shrink-0 text-[#F2C36F]" aria-hidden="true" />
            <span>{cause}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-8 rounded-2xl border border-[#DCAB56]/30 bg-[#DCAB56]/10 p-5 sm:p-6" aria-labelledby="causas-solidarias-note">
        <h4 id="causas-solidarias-note" className="flex items-center gap-2 text-sm font-semibold text-[#F2C36F]"><Info className="size-5 shrink-0" aria-hidden="true" />Cómo se aplicará tu preferencia</h4>
        <p className="mt-3 text-sm leading-7 text-stone-200">{causeDesignationNote}</p>
      </aside>
    </section>
  );
}
