import { Button } from "@/components/ui/button"
import { MessagesSquare, PhoneCall } from "lucide-react"
import LinkedIn from "./linkedin"
import Gmail from "./Mail"

function Contact() {
  return (
    <section className="relative h-fit w-full md:h-screen bg-zinc-900 text-zinc-100 px-6 py-24 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header and Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <h2 className="text-6xl lg:text-7xl font-medium tracking-tight">Let&apos;s Connect</h2>
            <a
              href="mailto:masanzawayne@gmail.com?subject=Let's Connect&body=Hi sanele,I'd like to discuss opportunities/collaboration"
              className="block text-4xl lg:text-5xl hover:text-zinc-300 transition-colors"
            >
              hello@mail.com
            </a>
          </div>
          <div className="lg:pt-4">
            <p className="text-xl lg:text-2xl text-zinc-400 leading-relaxed">
              I&apos;m always excited to collaborate on innovative solutions that enhance efficiency and drive smarter
              decision-making. Whether you have a project idea, a business challenge, or just want to chat about
              automation, data, or cybersecurity—let&apos;s connect! Reach out via email or LinkedIn, and let&apos;s
              explore how we can create smarter, more secure, and more efficient solutions.
            </p>
          </div>
        </div>

        {/* Message Button */}
        <div className="flex justify-center">
          <a href="/Contact">
          <Button variant="ghost" size="lg" className="text-zinc-100 transition-colors text-xl">
            Message
            <MessagesSquare className="ml-2 h-5 w-5" />
          </Button>
          </a>
        </div>

        {/* Contact Links and Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12">
          <div className="flex items-center gap-8">
            <a
              href="mailto:masanzawayne@gmail.com?subject=Let's Connect&body=Hi sanele,I'd like to discuss opportunities/collaboration"
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <Gmail className="h-6 w-6" />
              <span className="text-lg">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sanele-ncube-823221236/"
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <LinkedIn className="h-6 w-6" />
              <span className="text-lg">LinkedIn</span>
            </a>
            <a href="tel:+27710122241" className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <PhoneCall className="h-6 w-6" />
              <span className="text-lg">Mobile</span>
            </a>
          </div>

          <div className="text-zinc-400">
            <p className="text-lg">Made with care and plenty coffee</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

