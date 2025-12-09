import Image from 'next/image'

export default function Logos() {
  return (
    <section className="py-[100px] bg-white opacity-66">
      <div className="container-custom">
        <Image
          src="/images/logos.svg"
          alt="Partner Logos"
          width={1999}
          height={200}
          className="w-full max-w-[1999px] h-auto"
        />
      </div>
    </section>
  )
}



