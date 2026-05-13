import {
  Car,
  CheckCircle,
  Film,
  CreditCard,
  Clock,
  RefreshCw,
  CalendarDays,
} from "lucide-react";

const notes = [
  {
    icon: Car,
    text: "Transportation fees apply for shoots beyond a 5km radius.",
  },
  {
    icon: CheckCircle,
    text: "All content (designs, videos, captions) requires client approval before publishing.",
  },
  {
    icon: Film,
    text: "Raw footage must be provided by the client unless videography is included in the package.",
  },
  {
    icon: CreditCard,
    text: "Advertising budget is not included in any package — billed separately.",
  },
  {
    icon: Clock,
    text: "Delays in client approvals may affect posting schedules.",
  },
  {
    icon: RefreshCw,
    text: "Each asset includes 1 main revision + 3 minor revisions.",
  },
  {
    icon: CalendarDays,
    text: "Quotation is valid for 30 days from the date of issue.",
  },
];

export default function ServiceNotes() {
  return (
    <section id="notes" className="bg-white section-full">
      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto text-center mb-14">
          <p className="section-tag">Service notes</p>
          <h2 className="section-title">Good to know before we start</h2>
        </div>

        <div className="flex flex-col gap-3">
          {notes.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 px-5 py-4 transition-all duration-300 border bg-charcoal-50 border-charcoal-100 rounded-2xl hover:border-orange-300 hover:-translate-y-1"
            >
              <Icon
                size={18}
                className="text-orange-500 flex-shrink-0 mt-0.5"
              />
              <span className="text-sm leading-relaxed text-charcoal-600">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
