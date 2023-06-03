export function FeaturesSection() {
  return (
    <section className="flex h-screen w-full justify-center py-8 shadow-inner">
      <div className="container max-w-[64rem] flex-col space-y-6 px-4 text-center md:px-8">
        <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl">
          Features
        </h1>

        <h2 className="text-lg text-gray-600 md:text-xl lg:text-2xl">
          {' '}
          These are some of the features offered by this application.
        </h2>

        <pre>This is a work in progress</pre>
      </div>
    </section>
  )
}
