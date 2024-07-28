export default function Section({children,title}) {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
    <h2 className="text-lg font-semibold text-gray-700 capitalize">{title}</h2>
        {children}
    </section>
  )
}
